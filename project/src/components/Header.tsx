import React from 'react';
import { Sparkles, Shield, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DermaCure</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600">Analysis</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">History</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Education</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Get Started
            </button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </nav>
    </header>
  );
}