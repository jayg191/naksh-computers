import type { Metadata }from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse genuine laptops, desktops, gaming PCs, printers, CCTV systems and computer accessories from Naksh Computers Ahmedabad.",
};

import ProductsHero from "@/components/products/hero";
import CategoryGrid from "@/components/products/category-grid";
import Brands from "@/components/products/brands";
import CTA from "@/components/products/cta";

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <CategoryGrid />
      <Brands />
      <CTA />
    </main>
  );
}