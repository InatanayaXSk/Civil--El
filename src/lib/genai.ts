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
    5. Prevention tips
    
    For the 4. Treatment recommendations select a suitable supplement for the disease from the following list:
    {
    "apple": {
        "apple scab": ["Neem Oil", "Copper Soap (Copper Octanoate)", "Potassium Bicarbonate", "Bacillus subtilis-based Biological Sprays", "Bordeaux Mixture"],
        "black rot": ["Trichoderma-based Biocontrol", "Sulfur-Based Fungicides", "Compost Tea"],
        "cedar apple rust": ["Garlic or Onion Extracts", "Sulfur Dust or Spray"],
        "healthy maintenance": ["Horticultural Oils", "Chitosan"]
    },
    "blueberry": {
        "healthy maintenance": ["Neem Oil", "Bacillus subtilis-based Biological Sprays", "Potassium Bicarbonate"]
    },
    "cherry": {
        "powdery mildew": ["Compost Tea"],
        "healthy maintenance": ["Bordeaux Mixture", "Plant-Based Extracts"]
    },
    "corn": {
        "cercospora leaf spot": ["Copper Soap (Copper Octanoate)", "Trichoderma-based Biocontrol", "Sulfur-Based Fungicides"],
        "common rust": ["Neem Oil"],
        "northern leaf blight": ["Bordeaux Mixture"],
        "healthy maintenance": ["Chitosan"]
    },
    "grape": {
        "powdery mildew": ["Garlic or Onion Extracts"],
        "downy mildew": ["Copper Soap (Copper Octanoate)"],
        "black rot": ["Bordeaux Mixture"],
        "esca (black measles)": ["Compost Tea"],
        "leaf blight (isariopsis leaf spot)": ["Potassium Bicarbonate"],
        "healthy maintenance": ["Chitosan"]
    },
    "orange": {
        "huanglongbing (citrus greening)": ["Plant-Based Extracts (e.g., neem or eucalyptus)"]
    },
    "peach": {
        "bacterial spot": ["Bordeaux Mixture"],
        "healthy maintenance": ["Trichoderma-based Biocontrol"]
    },
    "pepper": {
        "bacterial spot": ["Compost Tea"],
        "healthy maintenance": ["Plant-Based Extracts (e.g., neem or aloe vera)"]
    },
    "potato": {
        "early blight": ["Copper Soap (Copper Octanoate)"],
        "late blight": ["Sulfur-Based Fungicides"],
        "healthy maintenance": ["Bacillus subtilis-based Biological Sprays"]
    },
    "raspberry": {
        "healthy maintenance": ["Horticultural Oils"]
    },
    "soybean": {
        "healthy maintenance": ["Compost Tea"]
    },
    "squash": {
        "powdery mildew": ["Trichoderma-based Biocontrol"]
    },
    "strawberry": {
        "leaf scorch": ["Copper Soap (Copper Octanoate)"],
        "healthy maintenance": ["Trichoderma-based Biocontrol"]
    },
    "tomato": {
        "bacterial spot": ["Garlic or Onion Extracts"],
        "early blight": ["Bordeaux Mixture"],
        "late blight": ["Trichoderma-based Biocontrol"],
        "leaf mold": ["Potassium Bicarbonate"],
        "septoria leaf spot": ["Sulfur-Based Fungicides"],
        "spider mites": ["Insecticidal Soap (Made from plant oils)"],
        "target spot": ["Bordeaux Mixture"],
        "yellow leaf curl virus": ["Insecticidal Soap"],
        "mosaic virus": ["Plant-Based Extracts (like garlic, neem) to control aphid vectors"],
        "healthy maintenance": ["Compost Tea"]
    }
}

Try to select the most suitable supplement from the above given json and fill it in for the 4th field`;

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

export async function askPlantCareQuestion(question: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: import.meta.env.VITE_MODEL_ID });

    const prompt = `You are a plant care expert, also give me the answer in a neat formatted style and highlight the headings of the information , the answer should not be more than 100 words Answer the following question: ${question}`;

    const result = await model.generateContent([prompt]);

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error asking plant care question:', error);
    throw new Error('Failed to get plant care advice');
  }
}