import { useStudioBookmarklet } from "@/hooks/use-bookmarklet";
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
  const bookmarklet = useStudioBookmarklet();

  return (
    <CtaAnchor size={size} variant={variant} href={bookmarklet}>
      Try Playground
      <Rocket className="ml-1" />
    </CtaAnchor>
  );
}
