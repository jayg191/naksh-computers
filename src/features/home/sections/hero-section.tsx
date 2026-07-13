"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/common";
import { Button } from "@/components/ui/button";
import { HERO_CONTENT } from "@/data";
import { fadeInUp, slideInRight, staggerContainer } from "@/lib/animations";
import Image from "next/image";


const highlights = [
  "Genuine Products",
  "Same Day Service",
  "Expert Technicians",
] as const;

export function HeroSection() {
  const whatsappMessage = encodeURIComponent(`Hello,

    I recently visited your website and I'm interested in your products and services.
    
    Please help me choose the best option based on my requirements and share the pricing/details.
    
    Looking forward to your response.
    
    Thank you!`);
  return (
    <section className="relative overflow-hidden pt-20 md:pt-24 lg:pt-28">
      <div className="absolute inset-0 gradient-brand-subtle" />
      <div className="absolute -top-40 right-0 size-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 size-[400px] rounded-full bg-info/5 blur-3xl" />

      <Container className="relative section-padding-lg">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="size-3.5" />
                {HERO_CONTENT.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mt-6 font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground"
            >
              Ahmedabad&apos;s Trusted
              <br />
              <span className="text-primary">Computer Store</span>
              <br />
              <span className="text-foreground">&amp; IT Experts</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              Laptop Sales, Desktop Computers, Printer Services,
              CCTV Installation, Networking Solutions and Expert
              Computer Repair — all under one roof.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              
              
              <Button
              render={
                <a
                  href={`https://wa.me/919924230096?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              className="h-12 px-8 bg-primary text-white hover:bg-primary/90 shadow-brand"
            >
              WhatsApp Us
            </Button>
            </motion.div>

            <motion.ul
              variants={fadeInUp}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6"
            >
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <CheckCircle2 className="size-4 text-success" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
  initial="hidden"
  animate="visible"
  variants={slideInRight}
  className="relative flex justify-center mt-12 lg:mt-0"
>
  <div className="relative w-full max-w-xl">

    {/* Background Glow */}
    <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-400/20 to-blue-600/10 blur-3xl" />

    {/* Main Card */}
    <div className="relative w-full max-w-lg rounded-[30px] border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl">

      {/* Google Rating */}
      <div className="absolute right-4 top-4 lg:-right-5 lg:top-6 rounded-2xl bg-white px-5 py-4 shadow-xl border">
        <p className="text-xs text-slate-500">
          Google Rating
        </p>

        <p className="mt-1 text-xl font-bold text-green-600">
          ⭐ 4.9 / 5
        </p>
      </div>

      {/* Reviews */}
      

      {/* Badge */}
      <span className="rounded-full bg-cyan-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700">
        Authorized Computer Store
      </span>

      {/* Title */}
      <h3 className="mt-6 text-4xl font-bold text-slate-900 leading-tight">
        Premium Laptop
        <br />
        Collection
      </h3>

      <p className="mt-4 text-slate-600 leading-7">
        Genuine laptops, desktops, gaming PCs,
        printers, CCTV systems and networking
        products from trusted brands.
      </p>
      
      {/* Laptop Image */}
      <div className="mt-8 flex justify-center">
      <Image
        src="/images/hero/hero-laptop.png"
        alt="HP Laptop"
        width={430}
        height={320}
        priority
        className="w-full max-w-[380px] lg:max-w-[430px] h-auto drop-shadow-2xl transition-all duration-500 hover:scale-105"
      />
      </div>

      {/* Brand Chips */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">

        {[
          "HP",
          "Dell",
          "Lenovo",
          "ASUS", 
          "MSI",
          "Canon",
          "Epson",
          "D-Link",
          "TP-Link",
          
        ].map((brand) => (

          <span
            key={brand}
            className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-cyan-600 hover:text-white"
          >
            {brand}
          </span>

        ))}

      </div>

      {/* Features */}

      <div className="mt-10 grid grid-cols-2 gap-3">

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="font-semibold">
            ✓ Genuine Products
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="font-semibold">
            ✓ Same Day Service
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="font-semibold">
            ✓ Expert Technicians
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <p className="font-semibold">
            ✓ Best Pricing
          </p>
        </div>

      </div>

    </div>

  </div>
</motion.div>
        </div>
      </Container>
    </section>
  );
}
