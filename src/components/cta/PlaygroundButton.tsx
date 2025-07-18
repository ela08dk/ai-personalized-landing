import { useState } from "react";
import { useUserId } from "@/hooks/use-user-id";
import { useStudioBookmarklet } from "@/hooks/use-bookmarklet";
import { Rocket } from "lucide-react";
import { CtaAnchor } from "./CtaAnchor";
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
        <CtaAnchor size={size} variant={variant} href="#" onClick={(e) => e.preventDefault()}>
          Try Playground
          <Rocket className="ml-1" />
        </CtaAnchor>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Try the Playground</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Pick a website below and use our AI editor to quickly create a personalized experience
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={handleThisWebsite}
              className="flex h-16 items-center justify-center rounded-lg border-2 border-border bg-background hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">This website</span>
            </button>
            <button
              onClick={handleFintechDemo}
              className="flex h-16 items-center justify-center rounded-lg border-2 border-border bg-background hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">Fintech demo</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
