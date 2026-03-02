import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_HOST_USER,
      to: process.env.EMAIL_HOST_USER, // Sending to self for portfolio notifications
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent from ${name}`);

    return NextResponse.json({ success: true, message: "Transmission received. Monk has been notified via secure uplink." });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json({ success: false, error: "Uplink failed. Please verify neural credentials." }, { status: 500 });
  }
}
