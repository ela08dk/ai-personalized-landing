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

  useEffect(() => {
    // Try to set domain, though this may not work due to same-origin policy
    try {
      const iframe = document.querySelector('iframe');
      if (iframe && iframe.contentDocument) {
        iframe.contentDocument.domain = "newmode.ai";
      }
    } catch (error) {
      // Silently fail if we can't set the domain
      console.log("Could not set iframe domain:", error);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <iframe
        src={iframeSrc}
        className="w-full h-screen border-0"
        title={`Demo for ${demoUrl}`}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

export default Demo;