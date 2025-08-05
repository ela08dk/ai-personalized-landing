import React from "react";

const CompanyLogos = () => {
  const companies = [
    { name: "Company 1", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&crop=center" },
    { name: "Company 2", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop&crop=center" },
    { name: "Company 3", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop&crop=center" },
    { name: "Company 4", logo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=100&fit=crop&crop=center" },
    { name: "Company 5", logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&crop=center" },
  ];

  return (
    <section className="py-12 bg-background/50">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;