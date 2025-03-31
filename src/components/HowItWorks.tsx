
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Accounts',
    description: 'Link your Google Analytics and Google Ads accounts to import your traffic and campaign data.',
    image: '/lovable-uploads/715a0832-4b24-4a9b-bdea-8946367d7f44.png'
  },
  {
    number: '02',
    title: 'Import & Analyze Data',
    description: 'Our AI analyzes your traffic sources and visitor behavior to identify optimization opportunities.',
    image: '/lovable-uploads/68f34569-67e1-4095-a66d-6bfc019f9a3d.png'
  },
  {
    number: '03',
    title: 'AI Generates Personalized Pages',
    description: 'Based on the analysis, the AI creates custom landing pages for each traffic source.',
    image: '/lovable-uploads/ecd51a20-9667-4fe6-b23d-f21c4f420ca8.png'
  },
  {
    number: '04',
    title: 'Continuous Optimization',
    description: 'The AI runs thousands of A/B tests to refine and improve each landing page over time.',
    image: '/lovable-uploads/634f7fc9-9f99-4327-96b9-f7df0b8ec43c.png'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="howitworks" className="section-padding bg-white">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">Craftera Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI agent works tirelessly to create personalized experiences that convert more visitors into customers.
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-craftera-cream/60 text-craftera-dark font-medium text-sm">
                  Step {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
                <a href="#" className="inline-flex items-center text-craftera-dark font-medium">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
              
              <div className="w-full md:w-1/2">
                <div className="relative bg-white shadow-lg rounded-xl border border-gray-100 p-4 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
