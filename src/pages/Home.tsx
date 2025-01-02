import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TopBar } from '../components/TopBar';

export function Home() {
  return (
    <div>
      <TopBar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 relative">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          src="/path/to/your/local/video.mp4"
          autoPlay
          loop
          muted
        />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <Leaf className="h-16 w-16 text-green-500 mx-auto" />
            <h1 className="mt-6 text-4xl font-bold text-gray-900 sm:text-5xl">
              Plant Disease Detection
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Upload a photo of your plant and get instant disease analysis powered by AI
            </p>
            <Link
              to="/detect"
              className="mt-8 inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
            >
              Start Detection
            </Link>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Quick Analysis
              </h3>
              <p className="text-gray-600">
                Get instant results about plant diseases using advanced AI technology
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Treatment Advice
              </h3>
              <p className="text-gray-600">
                Receive detailed recommendations for treating identified plant diseases
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Prevention Tips
              </h3>
              <p className="text-gray-600">
                Learn how to prevent future plant diseases and maintain healthy growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}