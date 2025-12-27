
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function generateSmartBio(name: string, role: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, professional one-sentence bio for a ${role} named ${name}. Keep it under 20 words.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text?.trim() || "No bio generated.";
  } catch (error) {
    console.error("Gemini bio generation failed:", error);
    return "Failed to generate smart bio.";
  }
}
