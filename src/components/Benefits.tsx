import React, { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const benefitsList = [
  "Increase conversion rates by up to 189%",
  "Create personalized experiences for every traffic source",
  "No need for manual A/B testing or copywriting",
  "Works 24/7 to continuously optimize your pages",
  "Easy to set up with your existing Google accounts",
  "No technical skills required to create personalized pages",
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="section-padding bg-muted/40">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why We Built <span className="gradient-text">newmode.ai</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Every visitor to your website is unique. Someone who comes from a
              Google ad targeting competitor keywords is different from someone
              who visited from a news article. Creating unique copy for each
              traffic source and iterating thousands of times would have been
              impossible.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              AI can work continuously over many days through thousands of small
              feedback loops until the traffic that converts most is found.
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
                <h3 className="text-2xl font-bold mb-2">
                  Boost Your Conversion Rates
                </h3>
                <p className="text-gray-600">
                  Average improvement across all traffic sources
                </p>
              </div>

              <AnimatedStats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

const AnimatedStats = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const duration = 4000;

  const easeOut = (t: number) => Math.sqrt(1 - Math.pow(t - 1, 2));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const linearProgress = Math.min(elapsed / duration, 1);
              const easedProgress = easeOut(linearProgress);
              setProgress(easedProgress);
              if (elapsed < duration) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated, duration]);

  return (
    <>
      <div className="flex justify-center mb-8">
        <div className="text-7xl font-bold text-center gradient-text">
          +{(188.8 * progress).toFixed(0)}%
        </div>
      </div>
      <div className="space-y-3" ref={containerRef}>
        {/* Ad Keywords */}
        <div className="flex justify-between text-sm mt-4">
          <span>Ad Keywords</span>
          <span className="font-semibold">
            +{(192.3 * progress).toFixed(0)}% avg. improvement
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-sky-300 to-purple-300 h-2 rounded-full"
            style={{ width: `${87 * progress}%` }}
          ></div>
        </div>

        {/* Referring Pages */}
        <div className="flex justify-between text-sm">
          <span>Referring Pages</span>
          <span className="font-semibold">
            +{(173.2 * progress).toFixed(0)}% avg. improvement
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-sky-300 to-purple-300 h-2 rounded-full"
            style={{ width: `${77 * progress}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};
