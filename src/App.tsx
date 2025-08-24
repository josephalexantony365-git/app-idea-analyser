import React, { useState } from 'react';
import AppIdeaInput from './components/AppIdeaInput';
import AnalysisResults from './components/AnalysisResults';
import { analyzeAppIdeaWithFallback } from './lib/frontendAnalyze';
//import {analyzeAppIdeaWithOllama} from './lib/analyzeAppIdeaOllama';
import { Analysis } from './components/AnalysisResults';


function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [currentIdea, setCurrentIdea] = useState<string>('');

  const handleAnalyze = async (idea: string) => {
    setIsAnalyzing(true);
    setCurrentIdea(idea);

    try {
     const result = await analyzeAppIdeaWithFallback(idea);
      // const result = await analyzeAppIdeaWithOllama(idea);
      setAnalysis(result);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while analyzing the idea.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNewAnalysis = () => {
    setAnalysis(null);
    setCurrentIdea('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {!analysis || isAnalyzing ? (
          <div className="flex flex-col items-center justify-center min-h-screen">
            <AppIdeaInput onAnalyze={handleAnalyze} isLoading={isAnalyzing} />
            
            {isAnalyzing && (
              <div className="mt-8 flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <p className="mt-4 text-lg text-gray-600">Analyzing your app idea...</p>
                <p className="text-sm text-gray-500">This may take a few moments</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={handleNewAnalysis}
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 shadow-sm"
              >
                ← Analyze New Idea
              </button>
              <div className="text-sm text-gray-500">
                Analysis complete • {new Date().toLocaleDateString()}
              </div>
            </div>
            
            <AnalysisResults analysis={analysis} appIdea={currentIdea} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
