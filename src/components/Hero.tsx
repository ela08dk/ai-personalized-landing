import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import VideoDialog from "./VideoDialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-craftera-blue/5 section-padding">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Personalise your website.
              <br />
              <span className="gradient-text">For every visit.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Our AI agent personalizes every website visit, creating unique
              experiences for each traffic source to maximize your conversion
              rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-craftera-dark hover:bg-black text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <VideoDialog>
                <Button
                  variant="outline"
                  className="border-craftera-dark text-craftera-dark hover:bg-craftera-dark/5 px-8 py-6 text-lg"
                >
                  <Play size={18} className="mr-2" />
                  Watch Demo
                </Button>
              </VideoDialog>
            </div>
          </div>

          <div className="relative h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-craftera-purple/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative w-full">
              {/* Referring page analytics overlay */}
              <div className="absolute -top-12 -left-4 z-10 animate-float">
                <div className="bg-white rounded-lg shadow-lg p-3 text-xs">
                  <div className="flex items-center gap-2 font-medium text-gray-800">
                    <div className="w-3 h-3 bg-craftera-purple rounded-full"></div>
                    <span>
                      Referring Page: businessexpert.co.uk/cot-vs-amex
                    </span>
                  </div>
                  <div className="mt-1 text-gray-500">
                    <div className="flex items-center justify-between">
                      <span>Visitors: 213</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel animation for before/after */}
              <Carousel
                className="w-full"
                autoplay={true}
                autoplayInterval={5000}
              >
                <CarouselContent>
                  {/* Original page */}
                  <CarouselItem>
                    <div className="bg-white rounded-xl border border-gray-100 p-2 transform transition-all duration-500 ">
                      <div className="overflow-hidden rounded-lg">
                        <div className="relative bg-gray-900 p-2 flex items-center">
                          <div className="flex items-center text-white text-xs">
                            <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                            <span className="ml-2">capitolontap.com</span>
                          </div>
                        </div>
                        <img
                          src="/before.png"
                          alt="Original Page"
                          className="w-full h-auto rounded-b-lg"
                        />
                        <div className="absolute top-8 left-0 bg-craftera-cream px-2 py-1 rounded-r-md text-xs font-semibold">
                          Original Page
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* AI personalized page */}
                  <CarouselItem>
                    <div className="bg-white rounded-xl border border-gray-100 p-2 transform transition-all duration-500 ">
                      <div className="overflow-hidden rounded-lg">
                        <div className="relative bg-gray-900 p-2 flex items-center">
                          <div className="flex items-center text-white text-xs">
                            <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
                            <span className="ml-2">capitolontap.com</span>
                          </div>
                        </div>
                        <img
                          src="/after.png"
                          alt="Personalized Page"
                          className="w-full h-auto rounded-b-lg"
                        />
                        <div className="absolute top-8 left-0 bg-craftera-green px-2 py-1 rounded-r-md text-xs font-semibold">
                          After AI Personalisation
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                {/* <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" /> */}
              </Carousel>

              {/* Conversion lift indicator */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg transform rotate-3 z-10 animate-float floating-delay-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    +
                  </div>
                  <span className="text-gray-800 font-semibold whitespace-nowrap">
                    7.5% Conversion Lift
                  </span>
                </div>
              </div>

              {/* Analytics graph mini */}
              {/* <div className="absolute -right-10 top-3/4 transform -translate-y-1/2 bg-white p-2 rounded-lg shadow-md border border-gray-100 animate-float floating-delay-2">
                <img
                  src="/lovable-uploads/158751dc-33f1-4227-8f17-efb45b5ce284.png"
                  alt="Analytics"
                  className="w-24 h-auto"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-craftera-green/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-craftera-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
