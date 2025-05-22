
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure API_KEY is available. In a real app, this would be handled by the build/environment system.
// For this environment, process.env.API_KEY is assumed to be set.
const apiKey = process.env.API_KEY;

if (!apiKey) {
  console.error("API_KEY for Gemini is not set. AI features will not work.");
  // You could throw an error here or provide a mock implementation for development
  // throw new Error("API_KEY for Gemini is not set.");
}

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;
const modelName = 'gemini-2.5-flash-preview-04-17';

const generateText = async (prompt: string): Promise<string> => {
  if (!ai) {
    return Promise.reject("Gemini API client is not initialized. Check API_KEY.");
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
    });
    
    // Directly access the text property as per guidance
    const text = response.text;
    if (typeof text !== 'string') {
        console.error("Unexpected response format from Gemini API:", response);
        throw new Error("Received an unexpected response format from the AI.");
    }
    return text;

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    // Provide a more user-friendly error or re-throw a custom error
    if (error instanceof Error) {
        if (error.message.includes('API key not valid')) {
            throw new Error("The provided API key is not valid. Please check your configuration.");
        }
         if (error.message.toLowerCase().includes('quota') || error.message.toLowerCase().includes('rate limit')) {
            throw new Error("API request limit reached. Please try again later.");
        }
    }
    throw new Error('Failed to generate text from AI. Please try again later.');
  }
};

export const geminiService = {
  generateText,
};
