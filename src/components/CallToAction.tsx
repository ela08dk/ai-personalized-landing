
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const CallToAction: React.FC = () => {
  return (
    <section id="demo" className="section-padding bg-craftera-dark text-white">
      <div className="max-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Personalize Your Landing Pages?
          </h2>
          <p className="text-lg opacity-80 mb-10">
            Join hundreds of businesses already using Craftera to boost their conversion rates with AI personalization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-craftera-dark px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Play size={18} className="mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
