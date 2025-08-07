import React from "react";
import { ArrowRight, User } from "lucide-react";
const caseStudyData = [{
  tag: "ABM",
  metric: "+$2.1M in pipeline",
  title: "How TechCorp's AI-Powered Personalization Drove 340% Pipeline Growth",
  customer: "Sarah Chen",
  role: "VP of Marketing Operations",
  company: "TechCorp",
  href: "/demo/techcorp.com"
}, {
  tag: "ABM",
  metric: "+180% meeting rate",
  title: "How DataFlow Achieved 180% Meeting Rate Increase with Smart Website Personalization",
  customer: "Marcus Rodriguez",
  role: "Director of Demand Generation",
  company: "DataFlow",
  href: "/demo/dataflow.com"
}, {
  tag: "ABM",
  metric: "+350% engagement",
  title: "Scaling Enterprise ABM: How CloudTech Boosted Engagement 350% in 45 Days",
  customer: "Jennifer Kim",
  role: "Senior ABM Manager",
  company: "CloudTech",
  href: "/demo/cloudtech.com"
}];
const Features: React.FC = () => {
  return <section id="features" className="section-padding bg-white">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            That <span className="bg-gradient-to-r from-sky-500/75 to-purple-400/80 bg-clip-text text-transparent">Fortune 500</span> prospect just saw the same page as a <span className="bg-gradient-to-r from-purple-400/80 to-fuchsia-300 bg-clip-text text-transparent">startup</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">You personalize everything else—ads, emails, outreach. Then send them all to the same vanilla website. No wonder 65% bounce.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudyData.map((caseStudy, index) => <a key={index} href={caseStudy.href} className="group p-6 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 transition-all transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {caseStudy.tag}
                </span>
                <span className="text-purple-200 text-sm font-semibold">
                  {caseStudy.metric}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-6 leading-tight">
                {caseStudy.title}
              </h3>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">{caseStudy.customer}</div>
                  <div className="text-purple-200 text-xs">{caseStudy.role}</div>
                </div>
              </div>
              
              <div className="mt-4 inline-flex items-center text-purple-200 group-hover:text-white transition-colors">
                View Demo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>)}
        </div>
      </div>
    </section>;
};
export default Features;