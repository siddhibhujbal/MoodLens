import React from 'react';
import { Bell } from 'lucide-react';

const alerts = [
  {
    id: 1,
    message: 'High stress detected in Group A',
    time: '2 mins ago',
    type: 'stress',
  },
  {
    id: 2,
    message: 'Engagement dropping in back row',
    time: '5 mins ago',
    type: 'engagement',
  },
];

export default function Alerts() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Active Alerts</h2>
        <Bell className="h-5 w-5 text-gray-500" />
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-3 rounded-lg ${
              alert.type === 'stress' ? 'bg-red-50' : 'bg-yellow-50'
            }`}
          >
            <div className="flex items-start justify-between">
              <p className="text-sm font-medium">{alert.message}</p>
              <span className="text-xs text-gray-500">{alert.time}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full text-sm text-purple-600 hover:text-purple-700">
        View all alerts
      </button>
    </div>
  );
}