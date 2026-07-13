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
    features: ["HP - Dell - Lenovo", "Home & Business", "Warranty Support"],
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
    desc: "Wi-Fi, LAN and office networking setup.",
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
          <h1 className="mt-5 max-w-3xl text-3xl font-bold sm:mt-6 sm:text-5xl">
            Complete Computer Repair & IT Solutions for Homes & Businesses
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:mt-6 sm:text-lg">
            Laptop repair, desktop repair, printer servicing, CCTV installation,
            networking solutions and AMC support across Ahmedabad & Gandhinagar.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            
              href="tel:+919924230096"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 sm:px-6 sm:py-3 sm:text-base"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              Call Now
            </a>
            
              href="https://wa.me/919924230096"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition hover:bg-muted sm:px-6 sm:py-3 sm:text-base"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Our Services
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 md:gap-6 xl:grid-cols-3 xl:gap-7">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl sm:min-h-[360px] sm:rounded-3xl sm:p-8"
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white sm:size-16 sm:rounded-2xl">
                  <Icon className="size-5 sm:size-8" strokeWidth={1.75} />
                </div>

                <h3 className="mt-3 line-clamp-2 text-sm font-bold leading-snug sm:mt-6 sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-base sm:leading-relaxed">
                  {service.desc}
                </p>

                <ul className="mt-2 hidden space-y-2 sm:mt-5 sm:block">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="line-clamp-1">{f}</span>
                    </li>
                  ))}
                </ul>

                
                  href={
                    "https://wa.me/919924230096?text=" +
                    encodeURIComponent(
                      "Hi, I'm interested in " + service.title
                    )
                  }
                  target="_blank"
                  className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-semibold text-primary transition-colors duration-300 hover:text-primary/80 sm:gap-2 sm:pt-6 sm:text-base"
                >
                  Get Service
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Industries We Serve
        </h2>

        <div className="mt-10 grid grid-cols-4 gap-3 sm:mt-12 sm:gap-5 md:gap-6">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex h-full min-h-[100px] flex-col items-center justify-center rounded-xl border border-border bg-card p-3 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl sm:min-h-[160px] sm:rounded-2xl sm:p-8"
              >
                <Icon className="mx-auto h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10" />
                <h3 className="mt-2 line-clamp-2 text-xs font-semibold leading-snug sm:mt-5 sm:text-xl">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Serving Ahmedabad & Gandhinagar
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-300 sm:text-base">
            Providing reliable computer repair, networking, CCTV installation,
            printer services and AMC support for homes and businesses.
          </p>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/10 sm:rounded-3xl sm:p-8">
              <MapPin className="h-8 w-8 text-blue-400 sm:h-10 sm:w-10" />

              <h3 className="mt-4 text-xl font-bold text-white sm:mt-5 sm:text-2xl">
                Ahmedabad & Gandhinagar
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:mt-4 sm:text-base">
                Complete IT support for homes, offices and businesses including
                computer repair, networking solutions, CCTV installation,
                printer services and AMC support across Ahmedabad and
                Gandhinagar.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-blue-300 sm:text-sm">
                  IT Service
                </span>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-blue-300 sm:text-sm">
                  Business Support
                </span>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-blue-300 sm:text-sm">
                  AMC
                </span>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-blue-300 sm:text-sm">
                  Networking
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 p-6 sm:rounded-3xl sm:p-8">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl" />

              <div className="relative">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  Need Fast & Reliable IT Support?
                </h3>

                <p className="mt-3 text-sm text-slate-200 sm:mt-4 sm:text-base">
                  Our experienced technicians are ready to help with repairs,
                  installations and complete IT solutions.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                  
                    href="tel:+919924230096"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-primary transition hover:scale-105 sm:px-6 sm:py-3 sm:text-base"
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    Call Now
                  </a>

                  
                    href="https://wa.me/919924230096"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl border border-white px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-primary sm:px-6 sm:py-3 sm:text-base"
                  >
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                    Chat on WhatsApp
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