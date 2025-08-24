// src/utils/analyzeAppIdeaOllama.ts
import { analyzeAppIdea } from '../utils/analysisEngine';

export async function analyzeAppIdeaWithOllama(appIdea: string) {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:11434/v1";
  const apiKey = import.meta.env.VITE_API_KEY || "ollama";
  const modelName = import.meta.env.VITE_MODEL_NAME || "llama3.2";

  // Fallback handler
  const fallback = async () => {
    console.warn("Falling back to analyzeAppData due to API failure");
    return analyzeAppIdea(appIdea);
  };

  try {
    const response = await fetch(`${apiBaseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: modelName,
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
    console.error("Ollama analysis failed:", e);
    return fallback();
  }
}
