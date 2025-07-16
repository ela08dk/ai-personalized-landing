import { useDashLink } from "@/hooks/use-dash-link";
import { CtaAnchor } from "./CtaAnchor";

export function GetStartedButton({
  size = "md",
  variant = "secondary",
}: {
  size?: "sm" | "md";
  variant?: "primary" | "secondary" | "ghost";
}) {
  const dashLink = useDashLink();

  return (
    <CtaAnchor size={size} variant={variant} href={dashLink}>
      Get Started
    </CtaAnchor>
  );
}
