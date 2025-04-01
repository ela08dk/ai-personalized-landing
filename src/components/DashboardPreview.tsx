import React from "react";

const DashboardPreview: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-craftera-blue/10">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Dashboard For{" "}
            <span className="gradient-text">Data-Driven Results</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track the performance of each traffic source and see how AI
            optimizations improve your conversion rates over time.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
          <img
            src="/lovable-uploads/634f7fc9-9f99-4327-96b9-f7df0b8ec43c.png"
            alt="newmode Dashboard"
            className="w-full h-auto"
          />

          <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-white p-4 rounded-lg shadow-lg transform rotate-2 animate-float">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                ↑
              </div>
              <span className="text-gray-800 font-semibold whitespace-nowrap text-sm sm:text-base">
                Average 188.8% Conversion Lift
              </span>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-4xl font-bold mb-2 text-craftera-dark">
              19,333
            </div>
            <div className="text-gray-500">Visitors Analyzed</div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-4xl font-bold mb-2 text-craftera-dark">
              1,460
            </div>
            <div className="text-gray-500">Conversions Generated</div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-4xl font-bold mb-2 text-craftera-dark">
              188.8%
            </div>
            <div className="text-gray-500">Average Conversion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
