import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface VideoDialogProps {
  children: React.ReactNode;
}

const VideoDialog: React.FC<VideoDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black border-none">
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/GseSfwi-uC8"
            title="newmode Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
