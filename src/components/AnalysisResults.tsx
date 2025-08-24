import React from 'react';
import { 
  Target, 
  Code, 
  Clock, 
  Users, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  Star,
  Zap
} from 'lucide-react';

export interface Analysis {
  feasibility: {
    score: number;
    factors: string[];
    challenges: string[];
  };
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    additional: string[];
  };
  timeline: {
    mvp: string;
    fullVersion: string;
    phases: { name: string; duration: string; description: string; }[];
  };
  targetUsers: {
    primary: string;
    secondary: string[];
    demographics: string[];
  };
  monetization: {
    primary: string;
    alternatives: string[];
    revenueProjection: string;
  };
  competitors: {
    direct: string[];
    indirect: string[];
    marketGap: string;
    differentiation: string[];
  };
}

interface AnalysisResultsProps {
  analysis: Analysis;
  appIdea: string;
}

export default function AnalysisResults({ analysis, appIdea }: AnalysisResultsProps) {
  const getFeasibilityColor = (score: number) => {
    if (score >= 80) return 'text-emerald-600 bg-emerald-100';
    if (score >= 60) return 'text-amber-600 bg-amber-100';
    return 'text-red-600 bg-red-100';
  };

  const getFeasibilityLabel = (score: number) => {
    if (score >= 80) return 'High Feasibility';
    if (score >= 60) return 'Moderate Feasibility';
    return 'Challenging Feasibility';
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Analysis Results</h2>
        <p className="text-gray-600 italic">"{appIdea}"</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feasibility Assessment */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Feasibility Assessment</h3>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`px-4 py-2 rounded-full font-semibold ${getFeasibilityColor(analysis.feasibility.score)}`}>
                {analysis.feasibility.score}/100
              </div>
              <span className="text-lg font-medium text-gray-700">
                {getFeasibilityLabel(analysis.feasibility.score)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-1000 ${
                  analysis.feasibility.score >= 80 ? 'bg-emerald-500' :
                  analysis.feasibility.score >= 60 ? 'bg-amber-500' : 'bg-red-500'
                }`}
                style={{ width: `${analysis.feasibility.score}%` }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Success Factors
              </h4>
              <ul className="space-y-1">
                {analysis.feasibility.factors.map((factor, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <Star className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Key Challenges
              </h4>
              <ul className="space-y-1">
                {analysis.feasibility.challenges.map((challenge, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <AlertCircle className="w-3 h-3 text-orange-500 mt-0.5 flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Recommended Tech Stack</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-700 mb-2">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.techStack.frontend.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.techStack.backend.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">Database</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.techStack.database.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange-700 mb-2">Additional Services</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.techStack.additional.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Development Timeline */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Development Timeline</h3>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-amber-50 rounded-xl">
                <h4 className="font-semibold text-amber-700 mb-1">MVP</h4>
                <p className="text-2xl font-bold text-amber-600">{analysis.timeline.mvp}</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-blue-700 mb-1">Full Version</h4>
                <p className="text-2xl font-bold text-blue-600">{analysis.timeline.fullVersion}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Development Phases</h4>
              <div className="space-y-3">
                {analysis.timeline.phases.map((phase, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-semibold text-gray-800">{phase.name}</h5>
                        <span className="text-sm text-gray-500">({phase.duration})</span>
                      </div>
                      <p className="text-sm text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Target Users */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Target Audience</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Primary Audience</h4>
              <p className="text-gray-700 bg-purple-50 p-3 rounded-lg">{analysis.targetUsers.primary}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Secondary Audiences</h4>
              <ul className="space-y-1">
                {analysis.targetUsers.secondary.map((user, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                    <Target className="w-3 h-3 text-purple-500" />
                    {user}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Demographics</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.targetUsers.demographics.map((demo, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                    {demo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Monetization Strategy */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Monetization Strategy</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Primary Revenue Model</h4>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800 font-medium">{analysis.monetization.primary}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Alternative Models</h4>
              <ul className="space-y-2">
                {analysis.monetization.alternatives.map((model, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                    <Zap className="w-3 h-3 text-green-500" />
                    {model}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Revenue Projection</h4>
              <p className="text-lg font-semibold text-green-600 bg-green-50 p-3 rounded-lg">
                {analysis.monetization.revenueProjection}
              </p>
            </div>
          </div>
        </div>

        {/* Competitive Analysis */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Competitive Landscape</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-red-700 mb-2">Direct Competitors</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.competitors.direct.map((competitor, index) => (
                  <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
                    {competitor}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-orange-700 mb-2">Indirect Competitors</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.competitors.indirect.map((competitor, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium">
                    {competitor}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Market Opportunity</h4>
              <p className="text-gray-700 bg-blue-50 p-3 rounded-lg border border-blue-200">
                {analysis.competitors.marketGap}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Key Differentiators</h4>
              <ul className="space-y-1">
                {analysis.competitors.differentiation.map((diff, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <Star className="w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" />
                    {diff}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}