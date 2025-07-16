import React from "react";
import { Anchor, Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import VideoDialog from "./VideoDialog";
import { useDashLink } from "../hooks/use-dash-link";
import { GetStartedButton } from "./cta/GetStartedButton";
import { PlaygroundButton } from "./cta/PlaygroundButton";

const CallToAction: React.FC = () => {
  const dashLink = useDashLink();
  return (
    <section id="demo" className="section-padding bg-craftera-dark text-white">
      <div className="max-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Personalise Your Landing Pages?
          </h2>
          <p className="text-lg opacity-80 mb-10">
            Join hundreds of businesses already using newmode to boost their
            conversion rates with AI personalization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PlaygroundButton variant="secondary" />
            <GetStartedButton variant="secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
