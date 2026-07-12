import { cn } from "@/lib/utils";
import type { WithClassName } from "@/types";

type SectionHeaderProps = WithClassName & {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl md:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <p
          className={cn(
            "mb-3 text-overline uppercase tracking-widest",
            dark ? "text-brand-300" : "text-primary"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-balance font-heading text-h2 md:text-[2.5rem]",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-body-lg text-pretty",
            dark ? "text-brand-200/80" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
