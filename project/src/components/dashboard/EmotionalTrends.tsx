import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Clock } from 'lucide-react';
import Card from '../ui/Card';

// Sample Data
const trendData = [
  { time: '9:00', calm: 40, excited: 30, stressed: 30 },
  { time: '10:00', calm: 50, excited: 25, stressed: 25 },
  { time: '11:00', calm: 35, excited: 40, stressed: 25 },
  { time: '12:00', calm: 60, excited: 20, stressed: 20 },
];

export default function EmotionalTrends() {
  return (
    <Card title="Emotional Trends" icon={Clock}>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData} margin={{ top: 20, right: 30, left: 40, bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="time" 
              label={{ value: 'Time', position: 'insideBottom', offset: -10 }} 
            />
            <YAxis 
              label={{ 
                value: 'Emotional Intensity', 
                angle: -90, 
                position: 'insideLeft', 
                style: { textAnchor: 'middle' }, 
                offset: -10 
              }} 
            />
            <Tooltip />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center" 
              wrapperStyle={{     
                position: "relative",
                top: -40}} 
            />
            <Line type="monotone" dataKey="calm" stroke="#34D399" strokeWidth={2} dot={{ r: 4 }} name="Calm" />
            <Line type="monotone" dataKey="excited" stroke="#FACC15" strokeWidth={2} dot={{ r: 4 }} name="Excited" />
            <Line type="monotone" dataKey="stressed" stroke="#EF4444" strokeWidth={2} dot={{ r: 4 }} name="Stressed" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
