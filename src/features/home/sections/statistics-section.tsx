"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container, Section } from "@/components/common";
import { STATS } from "@/data";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const numericMatch = value.match(/^(\d+)/);
  const prefix = value.match(/^(\D+)/)?.[0] ?? "";
  const numericPart = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = numericPart
    ? value.slice(prefix.length + String(numericPart).length)
    : "";

  const [displayValue, setDisplayValue] = useState(
    numericPart !== null ? "0" : value
  );

  useEffect(() => {
    if (!isInView || numericPart === null) return;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericPart);
      setDisplayValue(`${prefix}${current}${suffix}`);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, numericPart, prefix, suffix]);

  return (
    <motion.div ref={ref} variants={fadeInUp} className="text-center">
      <p className="font-heading text-[28px] sm:text-4xl md:text-5xl font-bold text-white whitespace-nowrap">
          {isInView ? displayValue : value}
        </p>
      <p className="mt-2 text-sm font-medium text-brand-200/70">{label}</p>
    </motion.div>
  );
}

export function StatisticsSection() {
  return (
    <Section padding="md" className="gradient-brand">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12"
        >
          {STATS.map((stat) => (
            <AnimatedStat
              key={stat.id}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
