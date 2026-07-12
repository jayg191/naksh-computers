import Image from "next/image";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  AnimateOnScroll,
  Container,
  Section,
  SectionHeader,
} from "@/components/common";
import { Button } from "@/components/ui/button";
import { FEATURED_PRODUCTS } from "@/data";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  Workstation: "from-brand-600 to-brand-800",
  "Business Laptop": "from-info to-brand-600",
  Desktop: "from-brand-500 to-brand-700",
  Networking: "from-brand-700 to-brand-950",
};

export function FeaturedProductsSection() {
  return (
    <Section id="products">
      <Container>
        <AnimateOnScroll>
        <SectionHeader
          label="Featured Products"
          title="Computers, Laptops & IT Products"
          description="Explore genuine laptops, desktops, gaming PCs, printers, CCTV systems and computer accessories from trusted brands."
        />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {FEATURED_PRODUCTS.map((product, index) => (
            <AnimateOnScroll key={product.id} delay={index * 0.08}>
              <article
                className={cn(
                  "group flex min-h-[580px] flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
                )}
              >
                <div className="relative h-64 overflow-hidden rounded-t-xl bg-slate-50">

                {product.badge && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                )}

                <Image
                  src={`/images/products/${
                    product.id === "gaming" ? "gaming-pc" : product.id
                  }.png`}
                  alt={product.name}
                  fill
                  className={cn(
                    "object-contain p-4 transition-all duration-500 group-hover:scale-110",
                    product.id === "printer" && "scale-125",
                    product.id === "gaming" && "scale-110"
                  )}
                />

                </div>

                <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {product.category}
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {product.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Check className="size-3.5 shrink-0 text-success" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-border pt-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Starting From
                  </p>

                  <p className="mt-2 font-heading text-3xl font-bold text-foreground">
                    {product.price}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    *Prices may vary depending on configuration and availability.
                  </p>

                  <Button
                  render={
                    <Link
                      href={`https://wa.me/919924230096?text=${encodeURIComponent(
                        `Hi, I'm interested in ${product.name}. Can I get more information, latest price and available models?`
                      )}`}
                      target="_blank"
                    />
                  }
                  className="mt-5 h-11 w-full gap-2 rounded-lg"
                >
                  Get Latest Price
                  <ArrowRight className="size-4" />
                </Button>

                </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-10 text-center">
          <Button
            variant="outline"
            render={<Link href="/products" />}
            className="h-11 gap-2 px-6"
          >
            View All Products
            <ArrowRight className="size-4" />
          </Button>
        </AnimateOnScroll>
      </Container>
    </Section>
  );
}
