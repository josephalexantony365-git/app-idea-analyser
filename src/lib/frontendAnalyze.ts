import { analyzeAppIdea } from '../utils/analysisEngine';


export async function analyzeAppIdeaWithFallback(appIdea: string) {
  try {
    const res = await fetch("/.netlify/functions/analyzeAppIdea", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ appIdea }),
    });
    console.log("this========");
    if (!res.ok) throw new Error("Serverless function error");

    const data = await res.json();
    return data;
  } catch (e) {
    console.warn("Falling back to local analysis:", e);
    return analyzeAppIdea(appIdea);
  }
}
