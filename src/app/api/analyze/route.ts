import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import mammoth from 'mammoth';
import { createWorker } from 'tesseract.js';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Force static export for this API route
export const dynamic = 'force-static';

// Security: Rate limiter - 5 requests per 10 minutes per IP
const rateLimiter = new RateLimiterMemory({
  keyPrefix: 'analyze_api',
  points: 5,
  duration: 600, // 10 minutes
});

// Security: File size limit (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// Security: Allowed file types
const ALLOWED_RESUME_TYPES = ['.pdf', '.docx', '.doc', '.txt'];
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Use require for pdf-parse (CommonJS module)
let pdfParse: any;
try {
  pdfParse = require('pdf-parse');
} catch (e) {
  console.warn('pdf-parse not available');
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

        // Use OpenAI to analyze the resume
        const completion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `You are an expert resume analyzer. Provide concise, actionable feedback.`
            },
            {
              role: 'user',
              content: `Analyze this resume:\n\n${limitedText}`
            }
          ],
          temperature: 0.7,
          max_tokens: 800,
        });

        analysisResult = completion.choices[0]?.message?.content || 'Analysis unavailable';

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

        // Use OpenAI to analyze the extracted text
        const completion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Analyze OCR extracted text briefly.'
            },
            {
              role: 'user',
              content: `Text: ${limitedText}`
            }
          ],
          temperature: 0.5,
          max_tokens: 500,
        });

        analysisResult = completion.choices[0]?.message?.content || extractedText;
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
