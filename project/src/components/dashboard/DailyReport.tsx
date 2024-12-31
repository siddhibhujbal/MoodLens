import React from 'react';
import { FileText } from 'lucide-react';

export default function DailyReport() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Daily Report</h2>
        <FileText className="h-5 w-5 text-gray-500" />
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Average Engagement</p>
            <p className="text-lg font-semibold">87%</p>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Peak Stress Time</p>
            <p className="text-lg font-semibold">11:30 AM</p>
          </div>
        </div>

        <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Download PDF Report
        </button>
      </div>
    </div>
  );
}