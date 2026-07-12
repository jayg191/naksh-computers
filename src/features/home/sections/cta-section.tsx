import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { AnimateOnScroll, Container, Section } from "@/components/common";
import { Button } from "@/components/ui/button";
import { CTA_CONTENT } from "@/data";

export function CtaSection() {
  return (
    <Section padding="md">
      <Container>
        <AnimateOnScroll>
          <div className="relative overflow-hidden rounded-2xl gradient-brand px-8 py-12 text-center md:px-16 md:py-16">
            <div className="absolute -top-20 -right-20 size-60 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-white/5 blur-2xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                {CTA_CONTENT.headline}
              </h2>
              <p className="mt-4 text-body-lg text-white/80">
                {CTA_CONTENT.subheadline}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  render={<Link href={CTA_CONTENT.primaryCta.href} />}
                  className="h-12 gap-2 bg-white px-6 text-base text-primary hover:bg-white/90"
                >
                  {CTA_CONTENT.primaryCta.label}
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  render={<a href={CTA_CONTENT.secondaryCta.href} />}
                  className="h-12 gap-2 border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10"
                >
                  <Phone className="size-4" />
                  {CTA_CONTENT.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
