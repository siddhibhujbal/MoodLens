import React from 'react';
import { Brain, Shield, Clock, Activity } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze your skin conditions with high accuracy'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data is processed securely and never stored permanently'
  },
  {
    icon: Clock,
    title: 'Instant Results',
    description: 'Get detailed analysis and personalized recommendations in seconds'
  },
  {
    icon: Activity,
    title: 'Track Progress',
    description: 'Monitor your skin health improvements over time'
  }
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Advanced Skin Analysis
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Using cutting-edge AI technology to provide accurate skin assessments
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-6 right-6">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="pt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}