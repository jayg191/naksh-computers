import { cn } from "@/lib/utils";
import type { SectionProps } from "@/types";

type SectionOptions = SectionProps & {
  padding?: "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "brand" | "dark";
};

const paddingMap = {
  sm: "section-padding-sm",
  md: "section-padding-md",
  lg: "section-padding-lg",
  xl: "section-padding-xl",
} as const;

const backgroundMap = {
  default: "bg-background",
  muted: "bg-muted/40",
  brand: "gradient-brand-subtle",
  dark: "bg-brand-950 text-white",
} as const;

export function Section({
  id,
  className,
  children,
  padding = "lg",
  background = "default",
}: SectionOptions) {
  return (
    <section
      id={id}
      className={cn(paddingMap[padding], backgroundMap[background], className)}
    >
      {children}
    </section>
  );
}
