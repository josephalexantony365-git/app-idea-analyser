import { analyzeAppIdea } from '../utils/analysisEngine';

export async function analyzeAppIdeaWithFallback(appIdea: string) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  // Fallback handler
  const fallback = async () => {
    console.warn("Falling back to analyzeAppData due to OpenAI failure");
    return analyzeAppIdea(appIdea);
  };

  if (!apiKey) {
    console.warn("OpenAI API key missing. Using fallback analysis.");
    return fallback();
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are an expert startup advisor. Given an app idea, return a structured feasibility analysis as JSON."
          },
          {
            role: "user",
            content: `Analyze the following app idea: "${appIdea}". 
Return JSON strictly matching this TypeScript type:
${JSON.stringify({
  feasibility: {
    score: 0,
    factors: [],
    challenges: [],
  },
  techStack: {
    frontend: [],
    backend: [],
    database: [],
    additional: [],
  },
  timeline: {
    mvp: "",
    fullVersion: "",
    phases: [{ name: "", duration: "", description: "" }],
  },
  targetUsers: {
    primary: "",
    secondary: [],
    demographics: [],
  },
  monetization: {
    primary: "",
    alternatives: [],
    revenueProjection: "",
  },
  competitors: {
    direct: [],
    indirect: [],
    marketGap: "",
    differentiation: [],
  },
})}`
          }
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch (e) {
    console.error("OpenAI analysis failed:", e);
    return fallback();
  }
}
