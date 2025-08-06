import React from "react";
import { ArrowRight, TrendingDown, Users, Zap } from "lucide-react";
const featureData = [{
  icon: <TrendingDown className="w-12 h-12 text-red-400" />,
  title: "Lost Enterprise Deals",
  description: "Enterprise prospects expect sophisticated, tailored experiences. Generic websites signal you're not ready for their scale.",
  href: "#problem"
}, {
  icon: <Users className="w-12 h-12 text-purple-300" />,
  title: "One-Size-Fits-None Messaging",
  description: "Your Fortune 500 prospect has different pain points than a startup. Yet they see identical value propositions and case studies.",
  href: "#problem"
}, {
  icon: <Zap className="w-12 h-12 text-orange-300" />,
  title: "Competitive Disadvantage",
  description: "While you show generic content, competitors are delivering personalized experiences that speak directly to each account's needs.",
  href: "#problem"
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
          {featureData.map((feature, index) => <div key={index} className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href={feature.href} className="inline-flex items-center text-craftera-dark font-medium">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Features;