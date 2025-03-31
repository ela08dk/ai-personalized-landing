
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-craftera-purple to-craftera-blue rounded-lg"></div>
          <span className="text-xl font-bold text-craftera-dark">Craftera</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
          <a href="#howitworks" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
          <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">Benefits</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="#demo" className="hidden md:inline-flex text-gray-700 hover:text-gray-900">Watch Demo</a>
          <Button className="bg-craftera-dark hover:bg-black text-white">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
