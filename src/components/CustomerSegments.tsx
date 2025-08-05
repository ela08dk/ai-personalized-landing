import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";
const CustomerSegments = () => {
  const segments = [{
    id: "sales",
    label: "🎯 Sales Teams",
    title: "Make every prospect visit count",
    description: "Create personalized experiences that support your sales conversations",
    benefits: ["Create personalized experiences that support your sales conversations (healthcare prospects see healthcare messaging)", "Track which target accounts visited your website and engaged with content", "Create different experiences for prospects at different deal stages"],
    metrics: [{
      label: "Average Conversion Increase",
      value: "35%"
    }, {
      label: "Revenue Per Visitor",
      value: "+28%"
    }, {
      label: "Customer Lifetime Value",
      value: "+22%"
    }]
  }, {
    id: "marketing",
    label: "📈 Marketing Teams",
    title: "Scale personalization across all your campaigns",
    description: "Extend email campaign messaging seamlessly to your website",
    benefits: ["Extend email campaign messaging seamlessly to your website", "Show different experiences to enterprise vs SMB segments automatically", "Measure which personalized experiences drive the most conversions"],
    metrics: [{
      label: "Trial Conversion Rate",
      value: "+42%"
    }, {
      label: "Feature Adoption",
      value: "+38%"
    }, {
      label: "Churn Reduction",
      value: "25%"
    }]
  }, {
    id: "growth",
    label: "🚀 Growth Teams",
    title: "Optimize personalization strategy and scale what works",
    description: "Test personalized vs generic experiences to prove overall impact",
    benefits: ["Test personalized vs generic experiences to prove overall impact", "Scale successful personalization patterns across similar account types", "Measure overall impact of personalization on pipeline conversion rates"],
    metrics: [{
      label: "Lead Quality Score",
      value: "+48%"
    }, {
      label: "Form Completion Rate",
      value: "+31%"
    }, {
      label: "Sales Qualified Leads",
      value: "+26%"
    }]
  }];
  return <section className="relative py-16" style={{ backgroundColor: '#FBFBFC' }}>
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="rgb(30, 41, 59)"></path>
        </svg>
      </div>
      <div className="max-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results Across <span className="gradient-text">Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how companies like yours are achieving remarkable growth with AI-powered personalization
          </p>
        </div>

        <Tabs defaultValue="sales" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {segments.map(segment => <TabsTrigger key={segment.id} value={segment.id} className="text-sm md:text-base">
                {segment.label}
              </TabsTrigger>)}
          </TabsList>

          {segments.map(segment => <TabsContent key={segment.id} value={segment.id}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {segment.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    {segment.description}
                  </p>
                  
                  <div className="space-y-4">
                    {segment.benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </div>)}
                  </div>
                </div>

                <div className="bg-card border rounded-xl p-8">
                  <h4 className="text-xl font-semibold mb-6 text-center">Key Metrics</h4>
                  <div className="space-y-6">
                    {segment.metrics.map((metric, index) => <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{metric.label}</span>
                        <span className="text-2xl font-bold text-primary">{metric.value}</span>
                      </div>)}
                  </div>
                </div>
              </div>
            </TabsContent>)}
        </Tabs>
      </div>
    </section>;
};
export default CustomerSegments;