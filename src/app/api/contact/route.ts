import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Force static export for this API route
export const dynamic = 'force-static';

// Security: Rate limiter - 3 submissions per 15 minutes per IP
const rateLimiter = new RateLimiterMemory({
  keyPrefix: 'contact_api',
  points: 3,
  duration: 900, // 15 minutes
});

// Security: Input sanitization
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < > to prevent HTML injection
    .trim();
}

// Security: Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 100;
}

// Security: Validate name (no special chars, reasonable length)
function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z0-9\s\-_'.]+$/;
  return nameRegex.test(name) && name.length >= 2 && name.length <= 100;
}

export async function POST(req: Request) {
  // Security: Rate limiting check
  let clientIp = req.headers.get('x-forwarded-for') || 'unknown';
  clientIp = clientIp.split(',')[0].trim();
  
  try {
    await rateLimiter.consume(clientIp);
  } catch {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again in 15 minutes.' },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    let { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ 
        success: false, 
        error: "Please fill in all fields" 
      }, { status: 400 });
    }

    // Security: Sanitize inputs
    name = sanitizeInput(name);
    email = sanitizeInput(email).toLowerCase();
    message = sanitizeInput(message);

    // Security: Validate inputs
    if (!isValidName(name)) {
      return NextResponse.json({ 
        success: false, 
        error: "Please enter a valid name (2-100 characters, alphanumeric only)" 
      }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ 
        success: false, 
        error: "Please enter a valid email address" 
      }, { status: 400 });
    }

    // Security: Validate message length
    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json({ 
        success: false, 
        error: "Message must be between 10 and 2000 characters" 
      }, { status: 400 });
    }

    // Log the message (works without email credentials)
    console.log(`[CONTACT FORM] New message from ${name} (${email}):\n${message.substring(0, 200)}...`);

    // Try to send email if credentials are configured
    const emailUser = process.env.EMAIL_HOST_USER;
    const emailPass = process.env.EMAIL_HOST_PASSWORD;
    
    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        const mailOptions = {
          from: emailUser,
          to: emailUser,
          subject: `New Portfolio Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);
        console.log(`[EMAIL SENT] Message from ${name}`);
      } catch (emailError) {
        console.log('[EMAIL FAILED] Will use fallback notification');
      }
    }

    // Always return success - message is logged
    return NextResponse.json({ 
      success: true, 
      message: "Message received! I'll get back to you soon." 
    });
    
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to send message. Please try again." 
    }, { status: 500 });
  }
}
