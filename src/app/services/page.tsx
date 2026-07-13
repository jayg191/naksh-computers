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
        <div className="container mx-auto px-6 py-24">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            PROFESSIONAL IT SERVICES
          </span>
          <h1 className="mt-6 text-5xl font-bold max-w-3xl">
            Complete Computer Repair & IT Solutions for Homes & Businesses
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Laptop repair, desktop repair, printer servicing, CCTV installation,
            networking solutions and AMC support across Ahmedabad & Gandhinagar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            
              href="tel:+919924230096"
              className="rounded-xl bg-primary px-6 py-3 text-white font-semibold inline-flex items-center gap-2"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            
              href="https://wa.me/919924230096"
              target="_blank"
              className="rounded-xl border px-6 py-3 font-semibold inline-flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Our Services - upgraded premium enterprise section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary sm:text-sm sm:tracking-[0.3em]">
            What We Offer
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:mt-4 sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
            Complete IT solutions engineered for reliability, backed by
            certified technicians and enterprise-grade support.
          </p>
        </div>

        <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-5 md:gap-6 xl:grid-cols-3 xl:gap-7">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)] sm:min-h-[380px] sm:rounded-3xl sm:p-7 lg:p-8"
              >
                {/* Gradient accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-1 sm:size-16 sm:rounded-2xl">
                  <Icon className="size-5 sm:size-8" strokeWidth={1.75} />
                </div>

                {/* Title */}
                <h3 className="mt-3 line-clamp-2 text-sm font-bold leading-snug sm:mt-6 sm:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-base sm:leading-relaxed">
                  {service.desc}
                </p>

                {/* Feature list */}
                <ul className="mt-2 hidden flex-1 space-y-2 sm:mt-5 sm:block">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="line-clamp-1 text-muted-foreground">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                
                  href={
                    "https://wa.me/919924230096?text=" +
                    encodeURIComponent(
                      "Hi, I'm interested in " + service.title
                    )
                  }
                  target="_blank"
                  className="mt-4 inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-primary text-xs font-semibold text-white transition-all duration-300 hover:bg-primary/90 sm:mt-6 sm:h-11 sm:gap-2 sm:rounded-xl sm:text-sm"
                >
                  Get Service
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <h2 className="text-center text-4xl font-bold">Industries We Serve</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border bg-card p-8 text-center"
              >
                <Icon className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
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
                printer services and AMC support across Ahmedabad and
                Gandhinagar.
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
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary transition hover:scale-105"
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>

                  
                    href="https://wa.me/919924230096"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-primary"
                  >
                    <MessageCircle className="h-5 w-5" />
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