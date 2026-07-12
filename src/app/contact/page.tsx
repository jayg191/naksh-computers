"use client";


import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [service, setService] = useState("Laptop Repair");

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-6 py-24">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            CONTACT NAKSH COMPUTERS
          </span>

          <h1 className="mt-6 max-w-3xl text-5xl font-bold">
            Let's Talk About Your IT Requirements
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Contact us for laptop repair, desktop service, printer support,
            CCTV installation, networking and complete IT solutions.
          </p>

          

         
          </div>
        
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">

          {[
            {
              icon: Phone,
              title: "Call Us",
              text: "+91 99242 30096",
              link: "tel:+919924230096",
            },
            {
              icon: Mail,
              title: "Email",
              text: "nakshcomputers@gmail.com",
              link: "mailto:nakshcomputers@gmail.com",
            },
            {
              icon: MapPin,
              title: "Visit Store",
              text: "Ashram Road, Ahmedabad",
              link: "https://www.google.com/maps/place/Naksh+Computers/@23.0280065,72.5698806,17z/data=!3m1!4b1!4m6!3m5!1s0x395e848a43dedb61:0xf6f23f4d61a9000b!8m2!3d23.0280065!4d72.5698806!16s%2Fg%2F1pwfxx1b6?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.link}
                className="rounded-3xl border bg-card p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon className="h-10 w-10 text-primary" />
                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.text}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <form className="rounded-3xl border bg-card p-8 shadow-sm space-y-5">
            <h2 className="text-3xl font-bold">Send an Enquiry</h2>

            <input className="w-full rounded-xl border p-3" placeholder="Full Name" />
            <input className="w-full rounded-xl border p-3" placeholder="Phone Number" />
            <input className="w-full rounded-xl border p-3" placeholder="Email Address" />

            <select
              className="w-full rounded-xl border p-3"
              value={service}
              onChange={(e)=>setService(e.target.value)}
            >
              <option>Laptop Repair</option>
              <option>Desktop Repair</option>
              <option>Laptop Purchase</option>
              <option>Printer Service</option>
              <option>CCTV Installation</option>
              <option>Networking</option>
              <option>AMC Maintenance</option>
              <option>Other</option>
            </select>

            <textarea className="h-36 w-full rounded-xl border p-3" placeholder="Message"/>

            <a
              href="https://wa.me/919924230096"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white"
            >
              Send via WhatsApp
              <ArrowRight className="h-4 w-4"/>
            </a>
          </form>

          <div className="space-y-8">

            <div className="rounded-3xl border bg-card p-8">
              <div className="flex items-center gap-3">
                <Clock3 className="h-6 w-6 text-primary"/>
                <h3 className="text-2xl font-bold">Business Hours</h3>
              </div>

              <div className="mt-6 space-y-3 text-muted-foreground">
                <p>Monday - Saturday</p>
                <p>10:00 AM - 8:00 PM</p>
                <p>Sunday - Closed</p>
              </div>
            </div>

            <div className="rounded-3xl border bg-card p-8">
              <h3 className="text-2xl font-bold">Why Choose Naksh?</h3>

              <div className="mt-6 space-y-3">
                {[
                  "Experienced Technicians",
                  "Genuine Products",
                  "Fast Service",
                  "Affordable Pricing",
                  "Business Support",
                ].map((item)=>(
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary"/>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-6">

          <h2 className="text-center text-4xl font-bold">
            Visit Our Store
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border">
          <iframe
              title="Naksh Computers"
              src="https://maps.google.com/maps?q=23.0280065,72.5698806&z=18&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="h-[500px] w-full rounded-3xl border-0"
            />
          </div>

        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Need Immediate IT Support?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Call or WhatsApp our team today for quick assistance.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="tel:+919924230096" className="rounded-xl bg-white px-6 py-3 font-semibold text-primary">
              📞 Call Now
            </a>

            <a href="https://wa.me/919924230096" className="rounded-xl border border-white px-6 py-3">
              💬 WhatsApp
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
