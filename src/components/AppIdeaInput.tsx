import React, { useState } from 'react';
import { Lightbulb, Send, Sparkles } from 'lucide-react';

interface AppIdeaInputProps {
  onAnalyze: (idea: string) => void;
  isLoading: boolean;
}

export default function AppIdeaInput({ onAnalyze, isLoading }: AppIdeaInputProps) {
  const [idea, setIdea] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (idea.trim()) {
      onAnalyze(idea.trim());
    }
  };

  const exampleIdeas = [
    "A fitness app that uses AI to create personalized workout plans",
    "Social platform for sharing and discovering local food spots",
    "Meditation app with binaural beats and nature sounds",
    "Task management app with team collaboration features"
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            App Idea Analyzer
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Transform your one-line app idea into a comprehensive business analysis with feasibility, tech requirements, and market insights.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-sm opacity-20"></div>
          <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl p-6">
            <label htmlFor="app-idea" className="block text-sm font-medium text-gray-700 mb-3">
              Describe your app idea in one line
            </label>
            <div className="flex gap-4">
              <input
                id="app-idea"
                type="text"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g., A social media app for pet owners to share photos and connect..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!idea.trim() || isLoading}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="w-5 h-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Analyze
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <h3 className="col-span-full text-lg font-medium text-gray-700 mb-2">Try these examples:</h3>
        {exampleIdeas.map((example, index) => (
          <button
            key={index}
            onClick={() => setIdea(example)}
            className="p-4 text-left bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-200 text-sm text-gray-700 hover:text-blue-700"
            disabled={isLoading}
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
}