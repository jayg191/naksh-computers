import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Monitor,
  Wrench,
  Printer,
  Camera,
  Router,
  Settings,
  type LucideIcon,
} from "lucide-react";

import {
  AnimateOnScroll,
  Container,
  Section,
  SectionHeader,
} from "@/components/common";
import { SERVICES } from "@/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Wrench,
  Printer,
  Camera,
  Router,
  Settings,
};

export function ServicesSection() {
  return (
    <Section id="services" background="muted">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            label="Our Services"
            title="Professional Computer & IT Services"
            description="From laptop repairs to CCTV installation, we provide complete IT solutions for homes, offices and businesses across Ahmedabad."
          />
        </AnimateOnScroll>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Monitor;
            return (
              <AnimateOnScroll key={service.id} delay={index * 0.08}>
                <article
                  className={cn(
                    "group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-xl border border-border bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)] sm:min-h-[280px] sm:rounded-2xl sm:p-6 lg:min-h-[320px] lg:p-7"
                  )}
                >
                  {/* Blue top accent line */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-1 sm:size-14 sm:rounded-2xl lg:size-16">
                    <Icon className="size-5 sm:size-6" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 font-heading text-sm font-bold leading-snug text-foreground sm:mt-4 sm:text-lg lg:mt-5 lg:text-xl">
                    {service.title}
                  </h3>

                  {/* Description - clamped so all cards stay equal height */}
                  <p className="mt-1.5 line-clamp-3 flex-1 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Button
                    render={
                      <Link
                        href={`https://wa.me/919924230096?text=${encodeURIComponent(
                          `Hi, I'm interested in ${service.title}. Can I get more information about this service?`
                        )}`}
                        target="_blank"
                      />
                    }
                    className="mt-4 h-9 w-full gap-1.5 text-xs sm:mt-6 sm:h-10 sm:gap-2 sm:text-sm"
                  >
                    Get Service
                    <ArrowRight className="size-3.5 sm:size-4" />
                  </Button>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}