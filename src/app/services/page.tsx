"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Home,
  Laptop,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  Printer,
  Router,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Computer & Laptop Sales",
    desc: "Genuine laptops, desktops, gaming PCs and accessories from trusted brands.",
    features: ["HP • Dell • Lenovo", "Home & Business", "Warranty Support"],
  },
  {
    icon: Wrench,
    title: "Laptop & Desktop Repair",
    desc: "Professional repair and hardware/software troubleshooting.",
    features: ["SSD/RAM Upgrade", "Windows Installation", "Motherboard Repair"],
  },
  {
    icon: Printer,
    title: "Printer Services",
    desc: "Printer installation, maintenance and repair.",
    features: ["Inkjet", "Laser", "Office Printers"],
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    desc: "Security camera solutions for homes and offices.",
    features: ["HD Cameras", "Remote Viewing", "Installation"],
  },
  {
    icon: Router,
    title: "Networking Solutions",
    desc: "Wi‑Fi, LAN and office networking setup.",
    features: ["Router Setup", "LAN", "Office Network"],
  },
  {
    icon: ShieldCheck,
    title: "AMC Maintenance",
    desc: "Annual maintenance contracts for businesses.",
    features: ["Preventive Maintenance", "Priority Support", "Business AMC"],
  },
];

const industries = [
  { icon: Home, title: "Home Users" },
  { icon: GraduationCap, title: "Students" },
  { icon: Building2, title: "Businesses" },
  { icon: Monitor, title: "Offices" },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
            PROFESSIONAL IT SERVICES
          </span>
          <h1 className="mt-6 max-w-3xl text-3xl font-bold sm:text-5xl">
            Complete Computer Repair & IT Solutions for Homes & Businesses
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Laptop repair, desktop repair, printer servicing, CCTV installation,
            networking solutions and AMC support across Ahmedabad & Gandhinagar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            
              href="tel:+919924230096"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            
              href="https://wa.me/919924230096"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-semibold transition hover:bg-muted"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="container mx-auto px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Our Services
        </h2>
        <div className="mt-10 grid grid-cols-2 items-stretch gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl sm:rounded-3xl sm:p-8"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>

                <h3 className="mt-3 line-clamp-2 text-base font-bold leading-snug sm:mt-6 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground sm:mt-3 sm:text-base">
                  {service.desc}
                </p>

                <ul className="mt-3 hidden space-y-2 sm:mt-5 sm:block">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="line-clamp-1">{f}</span>
                    </li>
                  ))}
                </ul>

                
                  href={
                    "https://wa.me/919924230096?text=" +
                    encodeURIComponent("Hi, I'm interested in " + service.title)
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-semibold text-primary sm:pt-6 sm:text-base"
                >
                  Get Service <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="container mx-auto px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Industries We Serve
        </h2>
        <div className="mt-10 grid grid-cols-4 items-stretch gap-3 sm:mt-12 sm:gap-5 lg:gap-6">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex h-full flex-col items-center justify-center rounded-xl border bg-card p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl sm:rounded-2xl sm:p-8"
              >
                <Icon className="mx-auto h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10" />
                <h3 className="mt-2 line-clamp-2 text-xs font-semibold sm:mt-5 sm:text-xl">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-6">

          <h2 className="text-center text-4xl font-bold">
            Serving Ahmedabad & Gandhinagar
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-300">
            Providing reliable computer repair, networking, CCTV installation,
            printer services and AMC support for homes and businesses.
          </p>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">

            {/* Service Coverage */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10">

              <MapPin className="h-10 w-10 text-blue-400" />

              <h3 className="mt-5 text-2xl font-bold text-white">
                Ahmedabad & Gandhinagar
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Complete IT support for homes, offices and businesses including
                computer repair, networking solutions, CCTV installation,
                printer services and AMC support across Ahmedabad and Gandhinagar.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full bg-primary/15 px-3 py-1 text-sm text-blue-300">
                  IT Service
                </span>

                <span className="rounded-full bg-primary/15 px-3 py-1 text-sm text-blue-300">
                  Business Support
                </span>

                <span className="rounded-full bg-primary/15 px-3 py-1 text-sm text-blue-300">
                  AMC
                </span>

                <span className="rounded-full bg-primary/15 px-3 py-1 text-sm text-blue-300">
                  Networking
                </span>

              </div>

            </div>

            {/* CTA */}

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 p-8">

              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />

              <div className="relative">

                <h3 className="text-3xl font-bold">
                  Need Fast & Reliable IT Support?
                </h3>

                <p className="mt-4 text-slate-200">
                  Our experienced technicians are ready to help with repairs,
                  installations and complete IT solutions.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  
                    href="tel:+919924230096"
                    className="rounded-xl bg-white px-6 py-3 font-semibold text-primary transition hover:scale-105"
                  >
                    📞 Call Now
                  </a>

                  
                    href="https://wa.me/919924230096"
                    target="_blank"
                    className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-primary"
                  >
                    💬 Chat on WhatsApp
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}