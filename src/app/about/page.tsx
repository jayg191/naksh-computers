

"use client";

import Link from "next/link";
import {ArrowRight,Building2,CheckCircle2,MapPin,MessageCircle,Phone,ShieldCheck,Wrench} from "lucide-react";

export default function AboutPage() {
  const highlights=["Genuine Products","Professional Technicians","Fast Turnaround","Trusted Local Support"];
  const services=[
    {icon:<Building2 className="h-8 w-8 text-primary"/>,title:"Computer & Laptop Sales",desc:"Business laptops, desktops, gaming PCs and accessories from trusted brands."},
    {icon:<Wrench className="h-8 w-8 text-primary"/>,title:"Repair & Service",desc:"Laptop, desktop, printer and hardware repair with quality workmanship."},
    {icon:<ShieldCheck className="h-8 w-8 text-primary"/>,title:"Business IT Solutions",desc:"Networking, CCTV installation and annual maintenance services."},
  ];
  const stats=[["1000+","Happy Customers"],["30+","Leading Brands"],["4.9★","Google Rating"],["10+","Years Experience"]];
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background"/>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-3xl">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">ABOUT NAKSH COMPUTERS</span>
            <h1 className="mt-6 text-5xl md:text-6xl font-bold">Trusted Computer Store & IT Solutions Provider in Ahmedabad</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">Naksh Computers delivers computer sales, laptop repair, desktop repair, printer services, CCTV installation and networking solutions for homes, students, offices and businesses.</p>
            
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border bg-card p-10 shadow-sm">
            <h2 className="text-3xl font-bold">Who We Are</h2>
            <p className="mt-6 leading-8 text-muted-foreground">Naksh Computers provides dependable technology solutions with genuine products, transparent pricing and reliable after-sales support for individuals and businesses.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map(item=>(
                <div key={item} className="flex items-center gap-3 rounded-xl border p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary"/><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            {stats.map(([v,l])=>(
              <div key={l} className="rounded-3xl border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="text-4xl font-bold text-primary">{v}</div>
                <div className="mt-2 text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl font-bold">Why Choose Naksh Computers?</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map(s=>(
              <article key={s.title} className="rounded-3xl border bg-card p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                {s.icon}
                <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="rounded-[32px] bg-gradient-to-r from-primary to-blue-700 p-10 text-white">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold">Visit Our Store in Ahmedabad</h2>
              <p className="mt-5 leading-8">Krupal Pathshala City Center, Ashram Road, Ellisbridge, Ahmedabad.</p>
            </div>
            <div className="space-y-4">
              <a href="https://www.google.com/maps/place/Naksh+Computers/@23.0280065,72.5698806,17z/data=!3m1!4b1!4m6!3m5!1s0x395e848a43dedb61:0xf6f23f4d61a9000b!8m2!3d23.0280065!4d72.5698806!16s%2Fg%2F1pwfxx1b6?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D" className="flex items-center justify-between rounded-2xl bg-white/10 p-5"><span className="flex items-center gap-3"><MapPin className="h-5 w-5"/>View on Google Maps</span><ArrowRight className="h-5 w-5"/></a>
              <Link href="/contact" className="flex items-center justify-between rounded-2xl bg-white px-5 py-5 font-semibold text-primary">Contact Our Team<ArrowRight className="h-5 w-5"/></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
