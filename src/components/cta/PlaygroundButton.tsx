import { useUserId } from "@/hooks/use-user-id";
import { Anchor } from "../ui/button";
import { Rocket } from "lucide-react";
import { CtaAnchor } from "./CtaAnchor";

export function PlaygroundButton({
  size = "md",
  variant = "primary",
}: {
  size?: "sm" | "md";
  variant?: "primary" | "secondary";
}) {
  const userId = useUserId();
  const playgroundUrl = `https://algomo-fintech.webflow.io/${userId ? `?playground_user=${userId}` : ""}`;

  return (
    <CtaAnchor size={size} variant={variant} href={playgroundUrl} target="_blank" rel="noopener noreferrer">
      Try Playground
      <Rocket className="ml-1" />
    </CtaAnchor>
  );
}
