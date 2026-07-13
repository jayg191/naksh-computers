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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Monitor;

            return (
              <AnimateOnScroll key={service.id} delay={index * 0.08}>
                <article
                  className={cn(
                    "group relative flex h-full min-h-[330px] md:min-h-[360px] lg:min-h-[380px] flex-col rounded-2xl border border-border bg-white p-5 md:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(37,99,235,0.18)]"
                  )}
                >
                  <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex size-12 md:size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-rotate-1">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>

                  <h3 className="mt-4 min-h-[64px] text-lg md:text-xl font-bold leading-tight text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground line-clamp-5">
                    {service.description}
                  </p>

                  <Button
                    render={
                      <Link
                        href={`https://wa.me/919924230096?text=${encodeURIComponent(
                          `Hi, I'm interested in ${service.title}. Can I get more information about this service?`
                        )}`}
                        target="_blank"
                      />
                    }
                    className="mt-auto w-full gap-2"
                  >
                    Get Service
                    <ArrowRight className="size-4" />
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
