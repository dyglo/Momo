import { GoogleGenAI } from "@google/genai";
import { ImageSize, AspectRatio } from "../types";

export const checkApiKey = async (): Promise<boolean> => {
  const win = window as any;
  if (win.aistudio && typeof win.aistudio.hasSelectedApiKey === 'function') {
    return await win.aistudio.hasSelectedApiKey();
  }
  return false;
};

export const promptApiKey = async (): Promise<void> => {
  const win = window as any;
  if (win.aistudio && typeof win.aistudio.openSelectKey === 'function') {
    await win.aistudio.openSelectKey();
  } else {
    console.warn("AI Studio key selection helper not available.");
  }
};

export const generateMuralVisualization = async (
  prompt: string,
  size: ImageSize,
  aspectRatio: AspectRatio
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio,
          imageSize: size,
        },
      },
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("No image data found in response.");

  } catch (error) {
    console.error("Gemini Image Generation Error:", error);
    throw error;
  }
};