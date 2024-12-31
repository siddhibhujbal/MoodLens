import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, icon: Icon, children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 sm:p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h2>
        <Icon className="h-5 w-5 text-gray-500" />
      </div>
      {children}
    </div>
  );
}