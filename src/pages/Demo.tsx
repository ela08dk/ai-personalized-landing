import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

const Demo = () => {
  const { demoUrl } = useParams<{ demoUrl: string }>();

  const allowedDemoUrls = [
    "brex.com",
    "zendesk.co.uk", 
    "hubspot.com",
    "workable.com",
    "buffer.com",
    "xero.com/us",
    "notion.com/enterprise",
    "okta.com"
  ];

  // If no demoUrl or not in allowed list, show 404
  if (!demoUrl || !allowedDemoUrls.includes(demoUrl)) {
    return <Navigate to="/404" replace />;
  }

  const iframeSrc = `https://dash.newmode.ai/proxy/${demoUrl}`;

  const handleIframeLoad = () => {
    try {
      const iframe = document.querySelector('iframe') as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        const iframeWindow = iframe.contentWindow as any;
        const iframeDocument = iframe.contentDocument;
        
        if (iframeDocument) {
          // Set domain if possible
          try {
            iframeDocument.domain = "newmode.ai";
          } catch (error) {
            console.log("Could not set iframe domain:", error);
          }

          // Inject the studio script
          const STUDIO_URL = "https://cdn.newmode.ai/studio.js";
          
          iframeWindow.newmode = { ...(iframeWindow.newmode || {}), studio: {playground: true} };
          
          const script = iframeDocument.createElement("script");
          script.src = STUDIO_URL;
          script.crossOrigin = "anonymous";
          script.type = "module";
          
          script.addEventListener("load", () => {
            if (iframeWindow.newmode && iframeWindow.newmode.startStudio) {
              iframeWindow.newmode.startStudio();
            }
          });
          
          iframeDocument.head.appendChild(script);
        }
      }
    } catch (error) {
      console.log("Could not inject studio script:", error);
    }
  };

  useEffect(() => {
    // Clean up on unmount
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen">
      <iframe
        src={iframeSrc}
        className="w-full h-screen border-0"
        title={`Demo for ${demoUrl}`}
        onLoad={handleIframeLoad}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

export default Demo;