"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { WithClassName } from "@/types";

type AnimateOnScrollProps = WithClassName & {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
};

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
