import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Anchor } from "../ui/button";

export function CtaAnchor({
  size = "md",
  variant = "primary",
  className,
  ...props
}: ComponentProps<"a"> & {
  size?: "sm" | "md";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  return (
    <Anchor
      className={cn(
        variant === "primary" &&
          "bg-craftera-dark hover:bg-black border border-craftera-dark hover:border-black text-white px-8 py-6 text-lg",
        variant === "secondary" &&
          "border-craftera-dark/25 text-craftera-dark bg-white hover:bg-gray-50 border px-8 py-6 text-lg",
        variant === "ghost" &&
          "text-craftera-dark bg-transparent hover:text-black hover:bg-transparent",
        size === "sm" && "text-sm px-4 py-2.5 font-medium",
        size === "md" && "text-[18px] px-8 py-6",
        className
      )}
      {...props}
    />
  );
}
