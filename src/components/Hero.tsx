
import React, { useState, useEffect } from "react";
import { Anchor, Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import VideoDialog from "./VideoDialog";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  const words = ["ad.", "campaign.", "referral.", "visitor."];
  const typingSpeed = 90; // faster speed, was 150
  const deletingSpeed = 60; // faster speed, was 100
  const pauseBeforeDeleting = 1200; // pause before starting to delete
  
  // Handle cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Handle typing effect
  useEffect(() => {
    let timeout: number;
    
    if (!isDeleting && displayText === words[wordIndex]) {
      // Word is fully typed, wait before deleting
      timeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDeleting);
    } else if (isDeleting && displayText === "") {
      // Word is fully deleted, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Either typing or deleting
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = window.setTimeout(() => {
        if (!isDeleting) {
          // Typing
          setDisplayText(words[wordIndex].substring(0, displayText.length + 1));
        } else {
          // Deleting
          setDisplayText(words[wordIndex].substring(0, displayText.length - 1));
        }
      }, speed);
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-craftera-blue/5 section-padding">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-0 items-center">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <div className="whitespace-nowrap">Personalise your</div>
              <div className="whitespace-nowrap">website.</div>
              <div className="gradient-text inline-flex whitespace-nowrap">
                For every {displayText}
                <span className={`ml-0.5 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </div>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Our AI personalizes every website visit, creating unique
              experiences for each traffic source to maximize your conversion
              rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Anchor
                className="bg-craftera-dark hover:bg-black text-white px-8 py-6 text-lg"
                href="https://page-variants-ui-g1z04.kinsta.page/"
              >
                Get Started
              </Anchor>
              <VideoDialog>
                <Button
                  variant="outline"
                  className="border-craftera-dark/25 text-craftera-dark hover:bg-craftera-dark/5 px-8 py-6 text-lg"
                >
                  <Play size={18} className="mr-2" />
                  Watch Demo
                </Button>
              </VideoDialog>
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
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ transform: "scale(1.08)" }}
                    poster="/first-frame.webp"
                    className="aspect-video"
                  >
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
                    188% Conversion Lift
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
