import React from 'react';
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import buyLinks from '../pages/buyLinks.json';

// Import the diseases data

import diseasesData from '../pages/diseases.json';

interface AnalysisProps {
  analysis: string | null;
  loading: boolean;
}

export function Analysis({ analysis, loading }: AnalysisProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-green-500" />
        <span className="ml-2 text-gray-600">Analyzing image...</span>
      </div>
    );
  }

  if (!analysis) return null;

  // Extract the relevant links from the analysis
  const links: string[] = [];
  for (const key in buyLinks) {
    console.log(key);
    if (analysis.toLowerCase().includes(key.toLowerCase())) {
      console.log(buyLinks[key]);
      if (Array.isArray(buyLinks[key])) {
        links.push(...buyLinks[key]);
      } else {
        links.push(buyLinks[key]);
      }
    }
  }
  console.log(links);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results</h2>
      <div className="prose prose-green">
      <ReactMarkdown>{analysis}</ReactMarkdown>
      </div>
      {links.length > 0 && (
      <div className="mt-4 p-4 bg-green-100 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800">Buy Links</h3>
        <ul className="list-disc list-inside text-green-700">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
}

// Based on the image provided, there is no visible disease or health issue affecting the leaf.

// Disease name: None.
// Confidence level: 100% - The leaf appears healthy with normal coloration, venation, and structure. There are no spots, discoloration, wilting, or other signs of disease or pest infestation.
// Symptoms visible: None.
// Treatment recommendations: No treatment is needed.
// Prevention tips: To maintain the health of the plant, ensure proper watering, sunlight, and nutrient levels. Regularly inspect leaves for any changes. Consider preventative measures like using disease-resistant cultivars if applicable to the plant species.