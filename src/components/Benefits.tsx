
import React from 'react';
import { Check } from 'lucide-react';

const benefitsList = [
  "Increase conversion rates by up to 30%",
  "Create personalized experiences for every traffic source",
  "No need for manual A/B testing or copywriting",
  "Works 24/7 to continuously optimize your pages",
  "Easy to set up with your existing Google accounts",
  "No technical skills required to create personalized pages"
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section-padding gradient-bg">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why We Built <span className="gradient-text">Craftera</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every visitor to your website is unique. Someone who comes from a Google ad targeting competitor keywords is different from someone who visited from a news article. Creating unique copy for each traffic source and iterating thousands of times would have been impossible.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              An AI agent can work continuously over many days through thousands of small feedback loops until the traffic that converts most is found.
            </p>
            
            <div className="space-y-4">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-craftera-green rounded-full p-1">
                    <Check className="w-4 h-4 text-green-700" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-craftera-purple/30 to-transparent rounded-full blur-3xl"></div>
            <div className="relative bg-white shadow-xl rounded-xl border border-gray-100 p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Boost Your Conversion Rates</h3>
                <p className="text-gray-600">Average improvement across all traffic sources</p>
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="text-7xl font-bold text-center gradient-text">+7.6%</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Referring Pages</span>
                  <span className="font-semibold">+8.7% avg. improvement</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-craftera-purple to-craftera-blue h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
                
                <div className="flex justify-between text-sm mt-4">
                  <span>Ad Keywords</span>
                  <span className="font-semibold">+6.4% avg. improvement</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-gradient-to-r from-craftera-blue to-craftera-green h-2 rounded-full" style={{ width: '64%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
