import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export async function analyzePlantImage(imageBase64: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: import.meta.env.VITE_MODEL_ID });
    
    const prompt = `Analyze this plant image and identify any diseases or health issues. 
    Please provide: 
    1. Disease name (if any)
    2. Confidence level
    3. Symptoms visible
    4. Treatment recommendations
    5. Prevention tips`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBase64.split(',')[1]
        }
      }
    ]);

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw new Error('Failed to analyze image');
  }
}