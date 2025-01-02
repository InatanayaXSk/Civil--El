import React, { useState } from 'react';
import { ImageUpload } from '../components/ImageUpload';
import { Analysis } from '../components/Analysis';
import { analyzePlantImage } from '../lib/genai';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Detect() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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
        </div>
      </div>
    </div>
  );
}