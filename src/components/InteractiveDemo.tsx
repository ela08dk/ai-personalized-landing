import React from "react";
import { Button } from "@/components/ui/button";
import { PlaygroundButton } from "./cta/PlaygroundButton";
const InteractiveDemo: React.FC = () => {
  return <section className="section-padding bg-gradient-to-b from-white to-craftera-blue/10">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive Demo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            See Account-Based Website Personalization in Action
          </p>
          
          <div className="text-gray-600 space-y-2 mb-8">
            <p>Test our conversational AI editor on a live website</p>
            
            
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
          <iframe src="https://dash.newmode.ai/proxy/brex.com" className="w-full h-auto aspect-[16/10]" title="Interactive Demo" style={{
          minHeight: "600px"
        }} />
        </div>

        <div className="mt-8 text-center">
          <PlaygroundButton size="md" variant="primary" />
        </div>
      </div>
    </section>;
};
export default InteractiveDemo;