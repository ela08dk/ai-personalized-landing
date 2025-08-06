import React, { useState, useEffect } from "react";
import { Anchor, Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import VideoDialog from "./VideoDialog";
import LandingPageEffect from "./LandingPageEffect";
import { useDashLink } from "../hooks/use-dash-link";
import { PlaygroundButton } from "./cta/PlaygroundButton";
import { GetStartedButton } from "./cta/GetStartedButton";
const Hero: React.FC = () => {
  const dashLink = useDashLink();
  return <section className="relative overflow-hidden bg-gradient-to-b from-white to-craftera-blue/5 section-padding">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-0 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl xl:text-[56px] font-bold leading-tight">
              Personalise your
              <br />
              website.
              <br />
              <LandingPageEffect />
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">AI that personalizes your website for each visitor, showing the right content, messaging, and CTAs based on who they are.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PlaygroundButton />
              <GetStartedButton />
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-craftera-purple/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative w-full">
              {/* Referring page analytics overlay */}
              <div className="absolute -top-10 -left-4 z-10 animate-float hidden md:block">
                <div className="bg-white rounded-lg shadow-lg p-3 text-xs">
                  <div className="flex items-center gap-2 font-medium text-gray-800">
                    <div className="w-3 h-3 bg-craftera-purple rounded-full"></div>
                    <span>
                      Referring Page: businessexpert.co.uk/cot-vs-amex
                    </span>
                  </div>
                  <div className="mt-1 ml-5 text-gray-500">
                    <div className="flex items-center justify-between">
                      <span>Visitors: 213</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI personalized page */}
              <div className="bg-white rounded-xl transform transition-all duration-500 ">
                <div className="overflow-hidden rounded-lg aspect-video">
                  <video autoPlay loop muted playsInline style={{
                  transform: "scale(1.08)"
                }} poster="/first-frame.webp" className="aspect-video">
                    <source src="/output.mp4" type="video/mp4"></source>
                    <source src="/output.webm" type="video/webm"></source>
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              {/* Conversion lift indicator */}
              <div className="absolute -bottom-10 -right-4 bg-white p-3 rounded-lg shadow-lg transform rotate-3 z-10 animate-float floating-delay-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    ↑
                  </div>
                  <span className="text-gray-800 font-semibold whitespace-nowrap">
                    21% Conversion Lift
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;