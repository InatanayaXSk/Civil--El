import React from 'react';
import { Loader2 } from 'lucide-react';

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

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results</h2>
      <div className="prose prose-green">
        {analysis.split('\n').map((line, index) => (
          <p key={index} className="text-gray-600">{line}</p>
        ))}
      </div>
    </div>
  );
}