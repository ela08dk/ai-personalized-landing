import React, { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
const benefitsList = ["Increase pipeline quality by up to 189%", "Identify and engage target accounts automatically", "Build personalized experiences in minutes, not weeks", "Track revenue attribution from personalization", "Works with your existing tech stack", "No technical skills required to get started"];
const Benefits: React.FC = () => {
  return <section id="benefits" className="relative section-padding bg-slate-800">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FBFBFC"></path>
        </svg>
      </div>
      <div className="max-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 font-bold text-slate-50">
              Why Teams Choose <span className="gradient-text">NewMode</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-50 mb-2">1:1 and 1:Few Personalization</h3>
                <p className="text-lg text-slate-50">
                  Show different experiences to individual accounts, industry segments, or company sizes. Import your target accounts and watch your website adapt to each visitor automatically.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-50 mb-2">Account Intelligence Built-In</h3>
                <p className="text-lg text-slate-50">
                  Identify visiting companies in real-time and serve experiences that match their industry, size, and buying stage. No guessing—just relevant messaging every time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-50 mb-2">Conversational AI Editor</h3>
                <p className="text-lg text-slate-50">
                  Build personalized experiences in minutes, not weeks. Just tell our AI what you want: "Make this more enterprise-focused" or "Add competitive advantages for this account."
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-50 mb-2">Revenue Attribution</h3>
                <p className="text-lg text-slate-50">
                  Track which personalized experiences drive meetings, opportunities, and deals. Finally, prove your website's impact on pipeline and revenue.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {benefitsList.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-craftera-green rounded-full p-1">
                    <Check className="w-4 h-4 text-green-700" />
                  </div>
                  <p className="text-slate-50">{benefit}</p>
                </div>)}
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
    </section>;
};
export default Benefits;
const AnimatedStats = () => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const duration = 4000;
  const easeOut = (t: number) => Math.sqrt(1 - Math.pow(t - 1, 2));
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const animate = currentTime => {
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
    }, {
      threshold: 0
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated, duration]);
  return <>
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
          <div className="bg-gradient-to-r from-sky-300 to-purple-300 h-2 rounded-full" style={{
          width: `${87 * progress}%`
        }}></div>
        </div>

        {/* Referring Pages */}
        <div className="flex justify-between text-sm">
          <span>Referring Pages</span>
          <span className="font-semibold">
            +{(173.2 * progress).toFixed(0)}% avg. improvement
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-gradient-to-r from-sky-300 to-purple-300 h-2 rounded-full" style={{
          width: `${77 * progress}%`
        }}></div>
        </div>
      </div>
    </>;
};