import Link from "next/link";
import { Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants";
import type { WithClassName } from "@/types";

type LogoProps = WithClassName & {
  variant?: "default" | "light";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label={`${SITE_CONFIG.name} — Home`}
    >
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-lg transition-shadow",
          variant === "light"
            ? "bg-white/10 text-white"
            : "gradient-brand text-white shadow-brand"
        )}
      >
        <Cpu className="size-5" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-base font-bold tracking-tight",
            variant === "light" ? "text-white" : "text-foreground"
          )}
        >
          Naksh
        </span>
        <span
          className={cn(
            "text-[0.65rem] font-medium uppercase tracking-widest",
            variant === "light" ? "text-white/60" : "text-muted-foreground"
          )}
        >
          Computers
        </span>
      </span>
    </Link>
  );
}
