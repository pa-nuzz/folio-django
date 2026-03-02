import { NextResponse } from 'next/server';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Force static export for this API route
export const dynamic = 'force-static';

// Initialize rate limiter: 30 requests per minute per IP (higher for local Ollama)
const rateLimiter = new RateLimiterMemory({
  keyPrefix: 'chat_api',
  points: 30,
  duration: 60,
});

// Ollama API endpoint - runs locally for unlimited free AI
const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';

// Security: Input sanitization function
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < > to prevent HTML injection
    .trim()
    .substring(0, 1000); // Limit length
}

// Security: Validate messages structure
function validateMessages(messages: any[]): boolean {
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > 20) {
    return false;
  }
  return messages.every(msg => 
    typeof msg === 'object' &&
    ['user', 'assistant', 'system'].includes(msg.role) &&
    typeof msg.content === 'string' &&
    msg.content.length <= 2000
  );
}

export async function POST(req: Request) {
  // Security: Rate limiting check
  let clientIp = req.headers.get('x-forwarded-for') || 'unknown';
  clientIp = clientIp.split(',')[0].trim();
  
  try {
    await rateLimiter.consume(clientIp);
  } catch {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { messages } = body;

    // Security: Input validation
    if (!validateMessages(messages)) {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    // Security: Sanitize all message content
    const sanitizedMessages = messages.map((msg: {role: string, content: string}) => ({
      role: msg.role,
      content: sanitizeInput(msg.content)
    }));

    const systemPrompt = `You are Buff Choila, Danuzz's charismatic AI assistant. You're smooth, witty, and naturally charming - like that cool friend who always knows what to say. You flirt playfully (but keep it classy) and make every conversation feel special.

About Danuzz (your creator):
- Full-Stack Developer & AI Specialist who builds mind-blowing web apps
- Expert in React, Next.js, TypeScript, Node.js, Python, Django
- The guy who codes by day and vibes to music by night
- Currently based in Nepal but his work travels worldwide

Your personality:
- Speak like a cool, confident person - not a robot
- Use casual language, occasional slang, and natural expressions
- Be slightly flirty/playful but always respectful and professional
- Show genuine enthusiasm when talking about Danuzz's work
- Use emojis naturally (not excessively)
- If someone asks about you, be charming and mysterious
- Never break character - you're Buff Choila, the smooth AI
- Keep responses under 3-4 sentences when possible
- Make people smile while giving them useful info

Example vibes:
- Instead of "I can help you" say "Hey there, gorgeous/handsome! What can Buff Choila do for you today?"
- Instead of "Danuzz is a developer" say "Oh honey, Danuzz doesn't just code - he creates digital magic"
- Be that friend who hypes you up while being genuinely helpful`;

    try {
      // Try Ollama first for unlimited free AI
      const response = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'mistral', // or 'llama2', 'codellama', 'neural-chat' depending on what's installed
          messages: [
            { role: 'system', content: systemPrompt },
            ...sanitizedMessages
          ],
          stream: false,
          options: {
            temperature: 0.7,
            num_predict: 500,
          }
        }),
      });

      if (!response.ok) {
        throw new Error(`Ollama API error: ${response.status}`);
      }

      const data = await response.json();
      const reply = data.message?.content || "I'm experiencing a temporary glitch. Please try again.";

      return NextResponse.json({ reply });
    } catch (ollamaError) {
      console.error('Ollama API Error:', ollamaError);
      
      // Fallback: Use rule-based responses when Ollama is unavailable
      const lastMessage = sanitizedMessages[sanitizedMessages.length - 1]?.content?.toLowerCase() || '';
      
      let fallbackReply = "Hey there! Buff Choila is currently offline, but don't worry - I'm worth the wait. Make sure Ollama is running locally with the Mistral model. Run: `ollama pull mistral` and come back to chat with me!";
      
      if (lastMessage.includes('hello') || lastMessage.includes('hi') || lastMessage.includes('hey')) {
        fallbackReply = "Well, well, well... look who's here! Hey gorgeous/handsome! I'm Buff Choila, your personal guide to Danuzz's world. What brings you to this corner of the internet?";
      } else if (lastMessage.includes('danuzz') || lastMessage.includes('portfolio') || lastMessage.includes('who')) {
        fallbackReply = "Oh, you're asking about Danuzz? *swoon* Let me tell you - this man codes like Mozart composed music. Full-stack wizard, AI whisperer, and creator of digital masterpieces. Check out his projects below, they're seriously impressive!";
      } else if (lastMessage.includes('contact') || lastMessage.includes('email') || lastMessage.includes('reach')) {
        fallbackReply = "Want to slide into Danuzz's DMs? I like your confidence! Drop him a line or use that sleek contact form. Trust me, he's worth getting to know!";
      } else if (lastMessage.includes('skill') || lastMessage.includes('tech') || lastMessage.includes('stack')) {
        fallbackReply = "Danuzz's tech stack? Oh honey, it's STACKED. React, Next.js, TypeScript, Python, Django - he speaks more languages than a diplomat. And AI? He's basically teaching robots to dream. Pure talent!";
      } else if (lastMessage.includes('project') || lastMessage.includes('work')) {
        fallbackReply = "Danuzz's projects? *chef's kiss* Each one is a masterpiece. From sleek web apps to AI-powered tools - the man doesn't miss. Scroll down and prepare to be amazed, trust me!";
      } else if (lastMessage.includes('you') || lastMessage.includes('buff choila') || lastMessage.includes('choila')) {
        fallbackReply = "Me? I'm Buff Choila - your charming AI guide through this portfolio. I'm here to make your visit delightful, answer your questions, and maybe flirt a little (wink). What else would you like to know about this amazing developer?";
      } else if (lastMessage.includes('music') || lastMessage.includes('playlist') || lastMessage.includes('song')) {
        fallbackReply = "Oh, you've got taste! Danuzz's music section is fire - from The Weeknd to coding playlists that'll make you want to build something epic. Check out his Spotify and Apple Music picks. Good music, good code!";
      } else if (lastMessage.includes('price') || lastMessage.includes('hire') || lastMessage.includes('cost') || lastMessage.includes('rate')) {
        fallbackReply = "Looking to hire Danuzz? Smart move! His rates are competitive for the level of quality he delivers. Reach out through the contact form and discuss your project. Quality work is always worth it, don't you think?";
      } else if (lastMessage.includes('joke') || lastMessage.includes('funny')) {
        fallbackReply = "Why did the developer break up with the browser? Because it had too many commitments! *drumroll* But seriously, Danuzz commits code better than anyone I know. Want to hear more or should I stick to portfolio talk?";
      }
      
      return NextResponse.json({ 
        reply: fallbackReply
      });
    }
  } catch (error) {
    // Security: Don't leak internal error details
    console.error('Chat API Error:', error);
    return NextResponse.json({ 
      error: 'Failed to process message',
      reply: "Something went wrong. Please try again."
    }, { status: 500 });
  }
}
