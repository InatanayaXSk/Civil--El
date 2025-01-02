import React, { useState, useRef } from 'react';
import { ImageUpload } from '../components/ImageUpload';
import { Analysis } from '../components/Analysis';
import { analyzePlantImage, askPlantCareQuestion } from '../lib/genai';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Camera, CameraType } from 'react-camera-pro';
import ReactMarkdown from 'react-markdown';

export function Detect() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const cameraRef = useRef<CameraType>(null);

  const handleImageSelect = async (base64: string) => {
    setSelectedImage(base64);
    setLoading(true);
    try {
      const result = await analyzePlantImage(base64);
      setAnalysis(result);
    } catch (error) {
      console.error(error);
      setAnalysis('Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCapture = async () => {
    if (cameraRef.current) {
      const image = cameraRef.current.takePhoto();
      handleImageSelect(image);
    }
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await askPlantCareQuestion(chatMessage);
      setChatResponse(response);
    } catch (error) {
      console.error('Error getting chat response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Upload Plant Image
          </h1>
          
          <ImageUpload onImageSelect={handleImageSelect} />
          
          <div className="mt-6">
            <Camera ref={cameraRef} aspectRatio={16 / 9} />
            <button onClick={handleCapture} className="mt-4 bg-green-600 text-white py-2 px-4 rounded">
              Capture Photo
            </button>
          </div>

          {selectedImage && (
            <div className="mt-6">
              <img
                src={selectedImage}
                alt="Selected plant"
                className="rounded-lg max-h-96 mx-auto"
              />
            </div>
          )}
          
          <Analysis analysis={analysis} loading={loading} />

          <div className="chat-section mt-8">
            <h2>Ask Additional Questions</h2>
            <form onSubmit={handleChatSubmit} className="chat-form">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about plant care..."
                className="chat-input"
              />
              <button type="submit" className="chat-submit">
                Send
              </button>
            </form>
            {loading && <div className="loading">Loading...</div>}
            {chatResponse && (
              <div className="chat-response">
                <h3>Response:</h3>
                <ReactMarkdown>{chatResponse}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


// 1. **Disease Name:** None apparent.

// 2. **Confidence Level:** High.

// 3. **Symptoms Visible:** The leaves appear healthy with a uniform green color, well-defined veins, and no signs of discoloration, spots, wilting, or deformities.

// 4. **Treatment Recommendations:** None needed. The leaves look healthy.

// 5. **Prevention Tips:** Since the leaves look healthy, focus on maintaining optimal growing conditions:

// * **Proper Watering:** Avoid both overwatering and underwatering. Water thoroughly when the top inch of soil feels dry.

// * **Adequate Light:** Provide sufficient light according to the plant's needs.

// * **Nutrient-Rich Soil:** Ensure the plant is growing in well-draining soil with the correct nutrients.

// * **Good Air Circulation:** This helps prevent fungal diseases.

// * **Regular Inspection:** Monitor the plant regularly for any changes in appearance, such as discoloration, spots, or wilting. This will allow you to address any potential issues early.

// * **Hygiene:** Clean and disinfect tools used around your plants to prevent the spread of disease.

// It's important to remember that even though these leaves look healthy in the image, it's only a limited view. If the plant starts showing any signs of distress, reassess and seek advice from a local plant expert or extension service for proper diagnosis and treatment. Providing more context, such as the plant species and its growing conditions, can also help in future assessments.