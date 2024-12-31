import React from 'react';
import { Users } from 'lucide-react';
import Card from '../ui/Card';

const moodData = [
  { id: 1, x: 0, y: 0, mood: 'calm' },
  { id: 2, x: 1, y: 0, mood: 'stressed' },
  { id: 3, x: 2, y: 0, mood: 'excited' },
  { id: 4, x: 3, y: 0, mood: 'calm' },
  { id: 5, x: 4, y: 0, mood: 'stressed' },
  { id: 6, x: 5, y: 0, mood: 'excited' },
];

const getMoodColor = (mood: string) => {
  switch (mood) {
    case 'calm': return 'bg-green-500';
    case 'stressed': return 'bg-red-500';
    case 'excited': return 'bg-yellow-500';
    default: return 'bg-gray-300';
  }
};

export default function HeatMap() {
  return (
    <Card title="Class Mood Heatmap" icon={Users}>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {moodData.map((point) => (
          <div
            key={point.id}
            className={`${getMoodColor(point.mood)} h-12 rounded-md transition-colors duration-200 cursor-pointer hover:opacity-80`}
            title={`Student ${point.id}: ${point.mood}`}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
          <span>Calm</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2" />
          <span>Excited</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
          <span>Stressed</span>
        </div>
      </div>
    </Card>
  );
}