import React from "react";
import { Anchor, Button } from "@/components/ui/button";
import VideoDialog from "./VideoDialog";

const Navbar: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100 sticky top-0 left-0 z-30 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/lovable-uploads/d7797353-d7c2-4886-a480-0e9a6a32501f.png"
            alt="Tuneable Logo"
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-craftera-dark">Tuneable</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#howitworks"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#benefits"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Benefits
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <VideoDialog>
            <button className="hidden md:inline-flex text-gray-700 hover:text-gray-900">
              Watch Demo
            </button>
          </VideoDialog>
          <Anchor
            className="bg-craftera-dark hover:bg-black text-white"
            href="https://page-variants-ui-g1z04.kinsta.page/"
          >
            Get Started
          </Anchor>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
