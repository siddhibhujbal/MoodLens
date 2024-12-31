import React from 'react';
import { Lightbulb } from 'lucide-react';

const suggestions = [
  {
    id: 1,
    type: 'break',
    message: 'Consider taking a 5-minute stretch break',
    priority: 'high',
  },
  {
    id: 2,
    type: 'activity',
    message: 'Group discussion could boost engagement',
    priority: 'medium',
  },
  {
    id: 3,
    type: 'exercise',
    message: 'Quick breathing exercise recommended',
    priority: 'low',
  },
];

export default function Suggestions() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recommendations</h2>
        <Lightbulb className="h-5 w-5 text-gray-500" />
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="p-3 rounded-lg bg-purple-50 border border-purple-100"
          >
            <p className="text-sm text-gray-800">{suggestion.message}</p>
            <div className="mt-2 flex items-center justify-between">
              <span className={`
                px-2 py-1 rounded-full text-xs
                ${suggestion.priority === 'high' ? 'bg-red-100 text-red-800' :
                  suggestion.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'}
              `}>
                {suggestion.priority} priority
              </span>
              <button className="text-purple-600 text-sm hover:text-purple-700">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}