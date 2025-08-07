import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
  image: string | null;
  video: string | null;
  id: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Install Script",
    description:
      "Add one script to your website header. Works with: WordPress, Shopify, Webflow, custom HTML",
    image: "install-script-step.png",
    video: null,
    id: "how-it-works-install-script",
  },
  {
    number: "02",
    title: "Connect Your Data",
    description:
      "Import target account lists, LinkedIn Ads, or keywords via CSV",
    image: "connect-data-step.png",
    video: null,
    id: "how-it-works-connect-data",
  },
  {
    number: "03",
    title: "Create Experiences",
    description:
      "Describe what you want in plain English. Our AI transforms your website for each account instantly",
    image: "create-experiences-step.png",
    video: null,
    id: "how-it-works-create-experiences",
  },
  {
    number: "04",
    title: "Activate & Convert",
    description:
      "Target accounts automatically see personalized experiences that drive them to take action",
    image: null,
    video: "preview-output",
    id: "how-it-works-activate-convert",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="howitworks" className="section-padding bg-white">
      <div className="max-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">newmode.ai Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI works tirelessly to create personalized experiences that
            convert more visitors into customers.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 md:gap-16 items-center scroll-mt-24`}
              id={step.id}
            >
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-craftera-cream/60 text-craftera-dark font-medium text-sm">
                  Step {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
                {/* <a
                  href="#"
                  className="inline-flex items-center text-craftera-dark font-medium"
                >
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </a> */}
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative bg-white shadow-lg rounded-xl border border-gray-100 p-4 overflow-hidden">
                  {step.image && (
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto rounded-lg"
                    />
                  )}

                  {step.video && (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      // style={{ transform: "scale(1.08)" }}
                      className="aspect-video"
                    >
                      <source
                        src={step.video + ".mp4"}
                        type="video/mp4"
                      ></source>
                      <source
                        src={step.video + ".webm"}
                        type="video/webm"
                      ></source>
                      Your browser does not support the video tag.
                    </video>
                  )}
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
