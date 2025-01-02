import React from 'react';
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

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

  // Extract the disease name from the analysis
  const diseaseNameMatch = analysis.match(/Disease Name: (.+)/);
  const diseaseName = diseaseNameMatch ? diseaseNameMatch[1].toLowerCase() : null;
  console.log(diseaseName)
  // Find the suitable supplement for the disease
  let supplement = null;
  if (diseaseName) {
    for (const plant in diseasesData) {
      for (const disease in diseasesData[plant]) {
        if (diseaseName.includes(disease)) {
          supplement = diseasesData[plant][disease][0]; // Select the first supplement
          break;
        }
      }
      if (supplement) break;
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results</h2>
      <div className="prose prose-green">
        <ReactMarkdown>{analysis}</ReactMarkdown>
      </div>
      {supplement && (
        <div className="mt-4 p-4 bg-green-100 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">Recommended Supplement</h3>
          <p className="text-green-700">{supplement}</p>
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