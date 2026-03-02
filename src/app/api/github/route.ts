import { NextResponse } from 'next/server';

// Force static export for this API route
export const dynamic = 'force-static';

// Static GitHub repos data - no backend needed
const GITHUB_REPOS = [
  {
    name: 'folio-django',
    description: 'Industrial-grade portfolio backend with Django REST API, JWT auth, and AI integration endpoints.',
    html_url: 'https://github.com/pa-nuzz/folio-django',
    stargazers_count: 12,
    forks_count: 3,
    language: 'Python'
  },
  {
    name: 'neural-chat',
    description: 'Real-time AI chat interface with WebSocket support and context-aware responses.',
    html_url: 'https://github.com/pa-nuzz/neural-chat',
    stargazers_count: 8,
    forks_count: 2,
    language: 'TypeScript'
  },
  {
    name: 'vision-ocr',
    description: 'Computer vision pipeline for text extraction using Tesseract and OpenAI analysis.',
    html_url: 'https://github.com/pa-nuzz/vision-ocr',
    stargazers_count: 15,
    forks_count: 4,
    language: 'JavaScript'
  },
  {
    name: 'resume-scorer',
    description: 'AI-powered resume analysis tool with PDF parsing and skill extraction.',
    html_url: 'https://github.com/pa-nuzz/resume-scorer',
    stargazers_count: 22,
    forks_count: 7,
    language: 'Python'
  }
];

export async function GET() {
  try {
    // Try to fetch from Django backend first
    const djangoUrl = process.env.NEXT_PUBLIC_DJANGO_URL;
    
    if (djangoUrl) {
      try {
        const res = await fetch(`${djangoUrl}/api/github/`, {
          cache: 'no-store',
          headers: { 'Accept': 'application/json' },
          signal: AbortSignal.timeout(3000)
        });
        
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            return NextResponse.json(data, {
              headers: { 'Cache-Control': 'public, max-age=3600' }
            });
          }
        }
      } catch {
        console.log('[INFO] Django backend unavailable, using static data');
      }
    }
    
    // Fallback to static data
    return NextResponse.json(GITHUB_REPOS, {
      headers: { 'Cache-Control': 'public, max-age=3600' }
    });
    
  } catch (error: any) {
    console.error("GitHub API Error:", error.message);
    // Always return static data on error
    return NextResponse.json(GITHUB_REPOS);
  }
}
