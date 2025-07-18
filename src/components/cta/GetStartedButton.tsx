import { useDashLink } from "@/hooks/use-dash-link";
import { CtaAnchor } from "./CtaAnchor";

export function GetStartedButton({
  size = "md",
  variant = "secondary",
  className,
}: {
  size?: "sm" | "md";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const dashLink = useDashLink();

  return (
    <CtaAnchor
      size={size}
      variant={variant}
      href={dashLink}
      className={className}
    >
      Get Started
    </CtaAnchor>
  );
}
