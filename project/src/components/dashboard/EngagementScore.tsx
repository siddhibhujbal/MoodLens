import React from 'react';
import { Activity } from 'lucide-react';
import Card from '../ui/Card';

export default function EngagementScore() {
  const score = 85;

  return (
    <Card title="Class Engagement" icon={Activity}>
      <div className="flex items-center justify-center">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="3"
              strokeDasharray={`${score}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold">{score}%</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">Current engagement level is high</p>
      </div>
    </Card>
  );
}