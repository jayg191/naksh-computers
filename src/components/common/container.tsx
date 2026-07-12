import { cn } from "@/lib/utils";
import type { WithClassName } from "@/types";

type ContainerProps = WithClassName & {
  children: React.ReactNode;
  as?: "div" | "section" | "header" | "footer" | "nav";
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={cn("container-enterprise", className)}>
      {children}
    </Component>
  );
}
