import React from 'react';
import HeatMap from '../components/dashboard/HeatMap';
import EngagementScore from '../components/dashboard/EngagementScore';
import EmotionalTrends from '../components/dashboard/EmotionalTrends';
import Suggestions from '../components/dashboard/Suggestions';
import Alerts from '../components/dashboard/Alerts';
import DailyReport from '../components/dashboard/DailyReport';

export default function Dashboard() {
  return (
    
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-gray-900">Classroom Dashboard</h1>
            <div className="hidden sm:block text-sm text-gray-500">
              Class: Mathematics 101 • Period: 3rd • Time: 10:30 AM
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <HeatMap />
          </div>
          <div>
            <EngagementScore />
          </div>
          <div className="lg:col-span-2">
            <EmotionalTrends />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <Alerts />
          </div>
          <div>
            <Suggestions />
          </div>
          <div>
            <DailyReport />
          </div>
        </div>
      </main>
    </div>
  );
}