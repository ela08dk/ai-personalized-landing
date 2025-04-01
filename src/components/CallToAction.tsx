import React from "react";
import { Anchor, Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import VideoDialog from "./VideoDialog";

const CallToAction: React.FC = () => {
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
            <Anchor
              className="bg-white hover:bg-gray-100 text-craftera-dark px-8 py-6 text-lg"
              href="https://page-variants-ui-g1z04.kinsta.page/"
            >
              Get Started
            </Anchor>
            <VideoDialog>
              <Button
                variant="outline"
                className="border-white text-black bg-white hover:bg-white/90 px-8 py-6 text-lg"
              >
                <Play size={18} className="mr-2" />
                Watch Demo
              </Button>
            </VideoDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
