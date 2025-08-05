import React from "react";
import { TrendingDown, Users, MessageSquare } from "lucide-react";

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Your best prospects bounce",
      description: "Generic experiences fail to capture attention of high-value accounts"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Campaigns lose momentum", 
      description: "Personalized ads lead to generic landing pages, breaking the experience"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-yellow-500" />,
      title: "Sales starts from scratch",
      description: "No context from website visits means every conversation begins at zero"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop showing generic websites to your best accounts
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-700">
              Target accounts are doing their research before they talk to sales. <strong>70% of the buyer journey happens on your website</strong>—yet most companies show the same generic experience to everyone.
            </p>
            <p className="text-lg text-gray-600">
              The result? Your best prospects bounce. Your personalized campaigns lose momentum. Your sales team starts every conversation from scratch.
            </p>
            <p className="text-xl font-semibold text-gray-800">
              What if your website worked as an extension of your sales team?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {problems.map((problem, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;