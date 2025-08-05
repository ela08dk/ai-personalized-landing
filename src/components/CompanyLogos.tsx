import React from "react";

const CompanyLogos = () => {
  const companies = [
    {
      name: "Qualtrics",
      logo: "/lovable-uploads/8d82455f-880f-4f50-ae45-1b8f2e0164ca.png"
    },
    {
      name: "Amplitude",
      logo: "/lovable-uploads/54d99029-f884-4d0e-9d7a-a00c6189f707.png"
    },
    {
      name: "Attentive",
      logo: "/lovable-uploads/db5e0e8f-0ab3-4395-bf71-b0644024bd77.png"
    },
    {
      name: "LogicMonitor",
      logo: "/lovable-uploads/cfbd1035-b608-4ff0-be15-83c25ec0d922.png"
    },
    {
      name: "Exclaimer",
      logo: "/lovable-uploads/f901f347-c44e-4feb-97cf-7f97f2675eae.png"
    },
    {
      name: "User Testing",
      logo: "/lovable-uploads/86fc5958-d867-44cf-89b2-5764437ce2cb.png"
    },
    {
      name: "Redis",
      logo: "/lovable-uploads/348b90a0-c12b-49df-9fbb-3470de4c0e89.png"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Thousands of B2B Companies Use Website Personalization
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center min-w-[200px] mx-8">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 md:h-10 object-contain filter grayscale opacity-60"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="flex items-center justify-center min-w-[200px] mx-8">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 md:h-10 object-contain filter grayscale opacity-60"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;