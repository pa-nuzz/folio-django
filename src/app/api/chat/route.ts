import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const djangoUrl = process.env.NEXT_PUBLIC_DJANGO_URL || 'http://localhost:8000';

    // Fetch projects from the Django backend for context
    let projectsContext = "";
    try {
      const projRes = await fetch(`${djangoUrl}/api/projects/`, { 
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(3000) 
      });
      if (projRes.ok) {
        const projects = await projRes.json();
        if (projects && projects.length > 0) {
           projectsContext = projects.slice(0, 5).map((p: any) => 
            `PROJECT: ${p.title}\nDESC: ${p.description}\nTECH: ${p.tech_list?.join(", ") || "Full Stack"}\n---`
           ).join("\n");
        }
      }
    } catch (e) {
      console.log("[DEBUG] Django context bypass.");
    }

    const systemPrompt = `SYSTEM_ROLE: Neural Interface (Monk)
CORE_DIRECTIVE: You are the AI guide for Anuj Don's Industrial Portfolio.
CONTEXT:
${projectsContext || "DATABASE_STANDBY: Reverting to core neural patterns."}
ANUZ_PROFILE: Premium Full-Stack Engineer, AI Specialist.

RESPONSE_STYLE:
1. Tone: Industrial, precise, high-end.
2. Conciseness: Responses must be under 3 sentences.
3. Call to Action: Encourage visitor to explore AI modules or projects.`;

    const ollamaEndpoint = process.env.LOCAL_AI_ENDPOINT || 'http://127.0.0.1:11434/v1/chat/completions';

    try {
      const response = await fetch(ollamaEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'mistral', 
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages
          ],
          temperature: 0.5,
          max_tokens: 250
        }),
        signal: AbortSignal.timeout(8000)
      });

      if (!response.ok) throw new Error('Ollama fault');
      
      const data = await response.json();
      return NextResponse.json({ reply: data.choices[0].message.content });

    } catch (ollamaError) {
      console.warn("[WARNING] Ollama offline. Activating MONK_FALLBACK.");
      // Hardcoded high-end responses for when the user's local AI is down
      const fallbackReplies = [
        "Neural link currently in maintenance. I am Anuz's digital shadow. How can I assist your exploration?",
        "Mainframe is under heavy load. My core patterns suggest you explore the 'Project' sector for technical validation.",
        "Uplink unstable. I am programmed to facilitate direct contact via the 'Contact' node for urgent missions."
      ];
      return NextResponse.json({ 
        reply: fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)] 
      });
    }

  } catch (error: any) {
    console.error('Neural Logic Fault:', error);
    return NextResponse.json({ 
      error: 'Kernel fault', 
      message: error.message || 'Unknown decryption error' 
    }, { status: 500 });
  }
}
