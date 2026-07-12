import { Container, Section, SectionHeader } from "@/components/common";
import { BRANDS } from "@/data";

export function BrandsSection() {
  return (
    <Section id="brands" padding="md" background="muted">
      <Container>
        <SectionHeader
          label="Authorized Partners"
          title="Trusted Brand Partners"
          description="We are authorized distributors for the world's leading technology brands."
        />

        <div className="relative overflow-hidden">
          <div className="flex animate-[marquee_30s_linear_infinite] gap-8">
            {[...BRANDS, ...BRANDS].map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex h-16 min-w-[140px] shrink-0 items-center justify-center rounded-xl border border-border bg-card px-6 shadow-sm"
              >
                <span className="font-heading text-lg font-bold tracking-tight text-muted-foreground">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
