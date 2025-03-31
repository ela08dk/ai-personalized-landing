import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <img
              src="/lovable-uploads/d7797353-d7c2-4886-a480-0e9a6a32501f.png"
              alt="Landin.ai Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-craftera-dark">
              Landin.ai
            </span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Landin.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 md:ml-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
