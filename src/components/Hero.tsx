
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-craftera-blue/5 section-padding">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Personalise your website.
              <br />
              <span className="gradient-text">For every visit.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Our AI agent personalizes every website visit, creating unique experiences for each traffic source to maximize your conversion rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-craftera-dark hover:bg-black text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-craftera-dark text-craftera-dark hover:bg-craftera-dark/5 px-8 py-6 text-lg">
                <Play size={18} className="mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-craftera-purple/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative bg-white shadow-xl rounded-xl border border-gray-100 p-4 transform">
              <img 
                src="/lovable-uploads/634f7fc9-9f99-4327-96b9-f7df0b8ec43c.png" 
                alt="Craftera Dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-craftera-cream p-4 rounded-lg shadow-lg transform rotate-3 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">+</div>
                <span className="text-gray-800 font-semibold whitespace-nowrap">7.5% Conversion Lift</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-craftera-green/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-craftera-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
