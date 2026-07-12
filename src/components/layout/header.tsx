"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container, Logo } from "@/components/common";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants";
import { NAVIGATION } from "@/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container as="nav" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            
            <Button
              render={<a href="tel:+919924230096" />}
              className="h-10 px-5 shadow-brand"
            >
              Call Now
            </Button>
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted lg:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {isMobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
              <a
                href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 px-4 text-sm font-medium text-muted-foreground"
              >
                <Phone className="size-4" />
                {SITE_CONFIG.contact.phone}
              </a>
              <Button
                render={<Link href="/contact" />}
                className="h-11 w-full"
                onClick={() => setIsMobileOpen(false)}
              >
                Get a Quote
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
