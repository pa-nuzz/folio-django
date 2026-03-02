import { NextResponse } from 'next/server';
import mammoth from 'mammoth';
import { createWorker } from 'tesseract.js';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Force static export for this API route
export const dynamic = 'force-static';

// Security: Rate limiter - 10 requests per 10 minutes per IP (higher for local Ollama)
const rateLimiter = new RateLimiterMemory({
  keyPrefix: 'analyze_api',
  points: 10,
  duration: 600, // 10 minutes
});

// Security: File size limit (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// Security: Allowed file types
const ALLOWED_RESUME_TYPES = ['.pdf', '.docx', '.doc', '.txt'];
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];

// Ollama API endpoint - runs locally for unlimited free AI
const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';

// Use require for pdf-parse (CommonJS module)
let pdfParse: any;
try {
  pdfParse = require('pdf-parse');
} catch (e) {
  console.warn('pdf-parse not available');
}

// Helper function to call Ollama
async function callOllama(systemPrompt: string, userContent: string): Promise<string> {
  try {
    const response = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'mistral',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userContent }
        ],
        stream: false,
        options: {
          temperature: 0.7,
          num_predict: 800,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.status}`);
    }

    const data = await response.json();
    return data.message?.content || 'Analysis unavailable';
  } catch (error) {
    console.error('Ollama call failed:', error);
    // Return fallback analysis
    return 'AI analysis unavailable. Ollama may not be running. To use this feature, install Ollama locally and run: ollama pull mistral';
  }
}

export async function POST(req: Request) {
  // Security: Rate limiting check
  let clientIp = req.headers.get('x-forwarded-for') || 'unknown';
  clientIp = clientIp.split(',')[0].trim();
  
  try {
    await rateLimiter.consume(clientIp);
  } catch {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again in 10 minutes.' },
      { status: 429 }
    );
  }

  try {
    const formData = await req.formData();
    const type = formData.get('type') as string;
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    // Security: File size validation
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 10MB.' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let extractedText = '';
    let analysisResult = '';

    try {
      if (type === 'resume') {
        // Security: Validate file extension
        const fileExt = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));
        if (!ALLOWED_RESUME_TYPES.includes(fileExt)) {
          return NextResponse.json(
            { error: 'Invalid file type. Allowed: PDF, DOCX, DOC, TXT' },
            { status: 400 }
          );
        }

        // Extract text from PDF or DOCX
        if (file.name.endsWith('.pdf')) {
          if (!pdfParse) {
            return NextResponse.json({ 
              error: 'PDF parsing is temporarily unavailable.' 
            }, { status: 400 });
          }
          const pdfData = await pdfParse(buffer);
          extractedText = pdfData.text;
        } else if (file.name.endsWith('.docx')) {
          const docxResult = await mammoth.extractRawText({ buffer });
          extractedText = docxResult.value;
        } else {
          // Try to read as text
          extractedText = buffer.toString('utf-8');
        }

        if (!extractedText.trim()) {
          return NextResponse.json({ 
            error: 'Could not extract text from the file.' 
          }, { status: 400 });
        }

        // Security: Limit text length sent to API
        const limitedText = extractedText.substring(0, 4000);

        // Use Ollama to analyze the resume
        analysisResult = await callOllama(
          'You are an expert resume analyzer. Provide concise, actionable feedback on strengths, improvements, and recommendations. Format with bullet points.',
          `Analyze this resume:\n\n${limitedText}`
        );

      } else if (type === 'ocr') {
        // Security: Validate image file type
        if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
          return NextResponse.json({ 
            error: 'Invalid image type. Allowed: JPEG, PNG, WEBP' 
          }, { status: 400 });
        }

        // Convert buffer to base64 for Tesseract
        const base64Image = buffer.toString('base64');
        const dataUrl = `data:${file.type};base64,${base64Image}`;

        const worker = await createWorker('eng');
        const { data: { text } } = await worker.recognize(dataUrl);
        await worker.terminate();

        extractedText = text.trim();

        if (!extractedText) {
          return NextResponse.json({ 
            result: 'No text detected in the image.'
          });
        }

        // Security: Limit text length
        const limitedText = extractedText.substring(0, 3000);

        // Use Ollama to analyze the extracted text
        analysisResult = await callOllama(
          'Analyze OCR extracted text briefly. Summarize what was found and any key insights.',
          `Text: ${limitedText}`
        );
      }

      return NextResponse.json({ 
        result: analysisResult,
        extractedText: extractedText.substring(0, 500)
      });

    } catch (processError: any) {
      console.error('Processing Error:', processError);
      // Security: Generic error message
      return NextResponse.json({ 
        error: 'Error processing file. Please try again.'
      }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Analyze API Error:', error);
    return NextResponse.json({ 
      error: 'Failed to process request'
    }, { status: 500 });
  }
}
