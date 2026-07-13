import {
  Award,
  BadgeCheck,
  Clock,
  IndianRupee,
  Settings,
  Truck,
  type LucideIcon,
} from "lucide-react";
import {
  AnimateOnScroll,
  Container,
  Section,
  SectionHeader,
} from "@/components/common";
import { WHY_CHOOSE_US } from "@/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  IndianRupee,
  Truck,
  Clock,
  Settings,
};

export function WhyChooseUsSection() {
  return (
    <Section id="why-us" background="dark">
      <Container>
        <AnimateOnScroll>
          <SectionHeader
            label="Why Choose Us"
            title="The Naksh Advantage"
            description="We don't just sell technology — we build lasting partnerships backed by expertise, integrity, and unwavering support."
            dark
          />
        </AnimateOnScroll>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 lg:grid-cols-4 lg:gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Award;
            return (
              <AnimateOnScroll key={item.id} delay={index * 0.08}>
                <div
                  className={cn(
                    "group relative flex h-full min-h-[190px] flex-col items-center overflow-hidden rounded-xl border border-white/10 bg-white p-4 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:min-h-[220px] sm:rounded-2xl sm:p-6 lg:min-h-[240px]"
                  )}
                >
                  {/* Top accent */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-1 sm:size-14 sm:rounded-2xl">
                    <Icon className="size-5 sm:size-6" strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 line-clamp-2 font-heading text-sm font-bold leading-snug text-foreground sm:mt-4 sm:text-lg">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}