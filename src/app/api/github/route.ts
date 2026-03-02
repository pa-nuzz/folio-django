import { NextResponse } from 'next/server';

export async function GET() {
  const djangoUrl = process.env.NEXT_PUBLIC_DJANGO_URL || 'http://localhost:8000';
  console.log(`[DEBUG] GitHub Proxy Uplink: ${djangoUrl}/api/github/`);

  try {
    const res = await fetch(`${djangoUrl}/api/github/`, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!res.ok) {
      const errorText = await res.text();
      console.error(`[ERROR] Django GitHub API Trace: ${res.status} - ${errorText}`);
      throw new Error(`Django API error: ${res.status}`);
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("GitHub Proxy Fault Check:", error.message);
    return NextResponse.json({ 
      error: "Failed to fetch from backend",
      details: error.message 
    }, { status: 500 });
  }
}
