import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

const CustomerSegments = () => {
  const segments = [
    {
      id: "ecommerce",
      label: "E-commerce",
      title: "Boost Your Online Store Sales",
      description: "Transform your e-commerce performance with AI-powered personalization",
      benefits: [
        "Increase conversion rates by up to 40%",
        "Reduce cart abandonment with targeted messaging",
        "Personalize product recommendations by traffic source",
        "Optimize checkout flow for different customer types"
      ],
      metrics: [
        { label: "Average Conversion Increase", value: "35%" },
        { label: "Revenue Per Visitor", value: "+28%" },
        { label: "Customer Lifetime Value", value: "+22%" }
      ]
    },
    {
      id: "saas",
      label: "SaaS",
      title: "Accelerate SaaS Growth",
      description: "Drive more trial signups and reduce churn with intelligent personalization",
      benefits: [
        "Increase trial-to-paid conversion by 45%",
        "Reduce time-to-value for new users",
        "Personalize onboarding based on user intent",
        "Optimize pricing page for different segments"
      ],
      metrics: [
        { label: "Trial Conversion Rate", value: "+42%" },
        { label: "Feature Adoption", value: "+38%" },
        { label: "Churn Reduction", value: "25%" }
      ]
    },
    {
      id: "b2b",
      label: "B2B Services",
      title: "Generate More Qualified Leads",
      description: "Convert more website visitors into high-quality leads and customers",
      benefits: [
        "Increase lead quality by 50%",
        "Personalize content for different industries",
        "Optimize forms for higher completion rates",
        "Create targeted CTAs for decision makers"
      ],
      metrics: [
        { label: "Lead Quality Score", value: "+48%" },
        { label: "Form Completion Rate", value: "+31%" },
        { label: "Sales Qualified Leads", value: "+26%" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results Across <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how companies like yours are achieving remarkable growth with AI-powered personalization
          </p>
        </div>

        <Tabs defaultValue="ecommerce" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {segments.map((segment) => (
              <TabsTrigger key={segment.id} value={segment.id} className="text-sm md:text-base">
                {segment.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {segments.map((segment) => (
            <TabsContent key={segment.id} value={segment.id}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {segment.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    {segment.description}
                  </p>
                  
                  <div className="space-y-4">
                    {segment.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card border rounded-xl p-8">
                  <h4 className="text-xl font-semibold mb-6 text-center">Key Metrics</h4>
                  <div className="space-y-6">
                    {segment.metrics.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{metric.label}</span>
                        <span className="text-2xl font-bold text-primary">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CustomerSegments;