import React from "react";
import { ArrowRight, User } from "lucide-react";
const caseStudyData = [{
  tag: "ABM",
  metric: "+$2.1M in pipeline",
  title: "How Brex Could Drive 340% Pipeline Growth with AI Personalization",
  company: "Brex",
  logo: "/lovable-uploads/bd1d1039-eb4d-4b70-aeae-8ccff7695420.png",
  href: "/demo/brex.com",
  colorScheme: "bg-purple-500/80 hover:bg-purple-600/90"
}, {
  tag: "ABM",
  metric: "+180% meeting rate",
  title: "How HubSpot can Achieve 180% Meeting Rate Increase with Smart Website Personalization",
  company: "HubSpot",
  logo: "/lovable-uploads/db6b2199-96ac-46c7-b11e-174cd1e2d792.png",
  href: "/demo/hubspot.com",
  colorScheme: "bg-indigo-500/80 hover:bg-indigo-600/90"
}, {
  tag: "ABM",
  metric: "+350% engagement",
  title: "How Notion Can Boost Website Conversions 35% in 45 Days",
  company: "Notion",
  logo: "/lovable-uploads/2dd60b04-32ef-4eb6-b2b1-a8c1d85e2aff.png",
  href: "/demo/notion.com/enterprise",
  colorScheme: "bg-purple-500/80 hover:bg-purple-600/90"
}];
const Features: React.FC = () => {
  return <section id="features" className="section-padding bg-white">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            That <span className="bg-gradient-to-r from-sky-500/75 to-purple-400/80 bg-clip-text text-transparent">startup</span> prospect just saw the same page as a <span className="bg-gradient-to-r from-purple-400/80 to-fuchsia-300 bg-clip-text text-transparent">startup</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">You personalize everything else—ads, emails, outreach. Then send them all to the same vanilla website. No wonder 65% bounce.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudyData.map((caseStudy, index) => <a key={index} href={caseStudy.href} className={`group p-6 rounded-xl ${caseStudy.colorScheme} text-white transition-all transform hover:-translate-y-1 hover:shadow-xl cursor-pointer`}>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {caseStudy.tag}
                </span>
                <span className="text-white/80 text-sm font-semibold">
                  {caseStudy.metric}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-6 leading-tight">
                {caseStudy.title}
              </h3>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src={caseStudy.logo} 
                    alt={`${caseStudy.company} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm">{caseStudy.company}</div>
                  
                </div>
              </div>
              
              <div className="mt-4 inline-flex items-center text-white/80 group-hover:text-white transition-colors">
                View Demo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>)}
        </div>
      </div>
    </section>;
};
export default Features;