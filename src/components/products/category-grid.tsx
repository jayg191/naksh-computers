"use client";

import {
  Laptop,
  Monitor,
  Gamepad2,
  Printer,
  Camera,
  Router,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Laptops",
    description: "Business, Gaming and Student laptops from top brands.",
    icon: Laptop,
  },
  {
    title: "Desktop PCs",
    description: "Custom desktops for home, office and professional work.",
    icon: Monitor,
  },
  {
    title: "Gaming PCs",
    description: "High-performance gaming computers with latest hardware.",
    icon: Gamepad2,
  },
  {
    title: "Printers",
    description: "Inkjet, Laser and All-in-One printers for every need.",
    icon: Printer,
  },
  {
    title: "CCTV Systems",
    description: "Professional surveillance solutions for homes and offices.",
    icon: Camera,
  },
  {
    title: "Networking",
    description: "Routers, Switches, Wi-Fi and complete networking solutions.",
    icon: Router,
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Product Categories
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Explore Our Products
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Browse laptops, desktops, gaming PCs, printers, CCTV systems and
            networking products from trusted global brands.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon size={32} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-600">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {item.description}
                </p>

                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}