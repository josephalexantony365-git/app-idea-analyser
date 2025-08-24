
import "dotenv/config";
import { Handler } from "@netlify/functions";

type OpenAIChoice = {
  message: {
    role: string;
    content: string;
  };
};

type OpenAIResponse = {
  choices?: OpenAIChoice[];
  error?: { message: string; type: string };
};

export const handler: Handler = async (event: any) => {
  try {
    const { appIdea } = JSON.parse(event.body!);
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) throw new Error("OpenAI API key missing");

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini", // 🔄 try changing if model not available
        messages: [
          {
            role: "system",
            content:
              "You are an expert startup advisor. Given an app idea, return a structured feasibility analysis as JSON.",
          },
          {
            role: "user",
            content: `Analyze the following app idea: "${appIdea}". 
Return JSON strictly matching this TypeScript type:
${JSON.stringify({
  feasibility: { score: 0, factors: [], challenges: [] },
  techStack: { frontend: [], backend: [], database: [], additional: [] },
  timeline: {
    mvp: "",
    fullVersion: "",
    phases: [{ name: "", duration: "", description: "" }],
  },
  targetUsers: { primary: "", secondary: [], demographics: [] },
  monetization: { primary: "", alternatives: [], revenueProjection: "" },
  competitors: {
    direct: [],
    indirect: [],
    marketGap: "",
    differentiation: [],
  },
})}`,
          },
        ],
        temperature: 0.7,
      }),
    });

    const text = await response.text();
    console.log("OpenAI raw response:", text);

    const data: OpenAIResponse = JSON.parse(text);

    if (data.error) {
      throw new Error(`OpenAI error: ${data.error.message} (${data.error.type})`);
    }

    const content = data.choices?.[0]?.message?.content;
    if (!content) throw new Error("No content returned from OpenAI");

    return {
      statusCode: 200,
      body: content,
    };
  } catch (err: any) {
    console.error("Handler error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message,
        stack: err.stack,   // 👈 helpful for local debug
      }),
    };
  }
};
