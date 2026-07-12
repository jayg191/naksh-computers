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

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Award;
            return (
              <AnimateOnScroll key={item.id} delay={index * 0.08}>
                <div className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-200/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
