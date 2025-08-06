import React from "react";
import { ArrowRight, BarChart2, Zap, RefreshCw, Layers } from "lucide-react";
const featureData = [{
  icon: <BarChart2 className="w-12 h-12 text-purple-300" />,
  title: "Google Analytics Integration",
  description: "Connect your Google Analytics to analyze traffic sources and visitor behavior patterns.",
  href: "#how-it-works-connect-accounts"
}, {
  icon: <Zap className="w-12 h-12 text-pink-300" />,
  title: "Google Ads Connection",
  description: "Link your Google Ads account to optimize landing pages for each ad keyword and campaign.",
  href: "#how-it-works-connect-accounts"
}, {
  icon: <RefreshCw className="w-12 h-12 text-sky-300" />,
  title: "Continuous A/B Testing",
  description: "Our AI automatically runs thousands of micro-tests to find the perfect copy for each traffic source.",
  href: "#how-it-works-optimization"
}, {
  icon: <Layers className="w-12 h-12 text-orange-200" />,
  title: "Personalized Landing Pages",
  description: "Generate unique experiences for each visitor based on their referral source and intent.",
  href: "#how-it-works-generate-pages"
}];
const Features: React.FC = () => {
  return <section id="features" className="section-padding bg-white">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personalize Every Visit With{" "}
            <span className="gradient-text">AI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Target accounts are doing their research before they talk to sales. 70% of the buyer journey happens on your website—yet most companies show the same generic experience to everyone.

The result? Your best prospects bounce. Your personalized campaigns lose momentum. Your sales team starts every conversation from scratch.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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