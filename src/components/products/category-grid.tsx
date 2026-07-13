"use client";

import {
  Laptop,
  Monitor,
  Gamepad2,
  Printer,
  Camera,
  Router,
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
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 sm:text-sm sm:tracking-[0.3em]">
            Product Categories
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:mt-4 sm:text-4xl lg:text-5xl">
            Explore Our Products
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Browse laptops, desktops, gaming PCs, printers, CCTV systems and
            networking products from trusted global brands.
          </p>
        </div>

        <div className="grid grid-cols-2 items-stretch gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:rounded-3xl sm:p-6 lg:p-8"
              >
                {/* Gradient hover border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] p-px group-hover:opacity-100 sm:rounded-3xl" />

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 transition-all duration-300 group-hover:bg-cyan-600 group-hover:text-white sm:h-16 sm:w-16 sm:rounded-2xl">
                  <Icon size={22} strokeWidth={2} className="sm:hidden" />
                  <Icon size={32} strokeWidth={2} className="hidden sm:block" />
                </div>

                <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-cyan-600 sm:mt-6 sm:text-2xl lg:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-1.5 flex-1 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
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