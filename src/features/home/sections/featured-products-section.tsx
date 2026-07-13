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

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:gap-6 xl:grid-cols-3 xl:gap-7">
          {FEATURED_PRODUCTS.map((product, index) => (
            <AnimateOnScroll key={product.id} delay={index * 0.08}>
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-2xl sm:rounded-2xl"
                )}
              >
                <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-slate-50 sm:aspect-[4/3]">
                  {product.badge && (
                    <span className="absolute right-2 top-2 z-10 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-white sm:right-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
                      {product.badge}
                    </span>
                  )}

                  <Image
                    src={`/images/products/${
                      product.id === "gaming" ? "gaming-pc" : product.id
                    }.png`}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className={cn(
                      "object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-110 sm:p-6",
                      product.id === "printer" && "scale-125",
                      product.id === "gaming" && "scale-110"
                    )}
                  />
                </div>

                <div className="flex flex-1 flex-col p-3 sm:p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                    {product.category}
                  </p>

                  <h3 className="mt-1 line-clamp-2 font-heading text-sm font-bold leading-snug sm:text-xl">
                    {product.name}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:mt-1.5 sm:text-sm">
                    {product.description}
                  </p>

                  <ul className="mt-2 hidden space-y-1.5 sm:mt-4 sm:block">
                    {product.specs.slice(0, 3).map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-xs text-muted-foreground"
                      >
                        <Check className="size-3.5 shrink-0 text-success" />
                        <span className="line-clamp-1">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto border-t border-border pt-3 sm:pt-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
                      Starting From
                    </p>

                    <p className="mt-1 font-heading text-lg font-bold text-foreground sm:mt-2 sm:text-3xl">
                      {product.price}
                    </p>

                    <p className="mt-1 hidden text-xs leading-5 text-muted-foreground sm:block sm:mt-2">
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
                      className="mt-3 h-9 w-full gap-1.5 rounded-lg text-xs sm:mt-5 sm:h-11 sm:gap-2 sm:text-sm"
                    >
                      Get Latest Price
                      <ArrowRight className="size-3.5 sm:size-4" />
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