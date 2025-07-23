
import { useState } from "react";
import { useUserId } from "@/hooks/use-user-id";
import { useStudioBookmarklet } from "@/hooks/use-bookmarklet";
import { Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function PlaygroundButton({
  size = "md",
  variant = "primary",
}: {
  size?: "sm" | "md";
  variant?: "primary" | "secondary";
}) {
  const [open, setOpen] = useState(false);
  const userId = useUserId();
  const bookmarkletHref = useStudioBookmarklet();
  const playgroundUrl = `https://algomo-fintech.webflow.io/${userId ? `?playground_user=${userId}` : ""}`;

  const handleFintechDemo = () => {
    window.open(playgroundUrl, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  const handleThisWebsite = () => {
    window.location.href = bookmarkletHref;
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            variant === "primary" &&
              "bg-craftera-dark hover:bg-black border border-craftera-dark hover:border-black text-white px-8 py-6 text-lg",
            variant === "secondary" &&
              "border-craftera-dark/25 text-craftera-dark bg-white hover:bg-gray-50 border px-8 py-6 text-lg",
            size === "sm" && "text-sm px-4 py-2 font-medium",
            size === "md" && "text-[18px] px-8 py-6"
          )}
        >
          Try Demo
          <Rocket className="ml-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Wow your visitors</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            We'll show you how to build a personalized website experience using our AI Studio.
          </p>
          <p className="text-sm text-muted-foreground">
            Pick a website to get started!
          </p>
          <div className="flex flex-col md:flex-row gap-3 justfy-stretch md:justify-center">
            <Button
              onClick={handleThisWebsite}
              variant="outline"
            >
              This website
            </Button>
            <Button
              onClick={handleFintechDemo}
              variant="outline"
            >
              Fintech demo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
