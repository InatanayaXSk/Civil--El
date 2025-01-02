import React, { useState, useRef } from 'react';
import { ImageUpload } from '../components/ImageUpload';
import { Analysis } from '../components/Analysis';
import { analyzePlantImage, askPlantCareQuestion } from '../lib/genai';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Camera } from 'react-camera-pro';

export function Detect() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const cameraRef = useRef(null);

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

  const handleChatSubmit = async (e) => {
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
                <p>{chatResponse}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}