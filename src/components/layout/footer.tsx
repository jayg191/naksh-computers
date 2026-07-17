import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import { Container, Logo } from "@/components/common";
import { NAVIGATION } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
  
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb25,transparent_45%)]" />
  
      <Container className="relative py-20">
  
        <div className="grid gap-12 lg:grid-cols-4">
  
          {/* ================= COMPANY ================= */}
  
          <div>
  
            <Logo variant="light" />
  
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Naksh Computers is your trusted destination for
              laptop sales, desktop computers, CCTV solutions,
              printer services, networking products and expert
              computer repair services in Ahmedabad.
            </p>
  
            <div className="mt-8 space-y-4">
  
              <a
                href="https://wa.me/919924230096"
                target="_blank"
                className="flex items-center gap-4 rounded-xl border border-white/10 p-4 transition hover:border-blue-500 hover:bg-white/5"
              >
                <MessageCircle className="h-6 w-6 text-green-400" />
  
                <div>
  
                  <h4 className="font-semibold text-white">
                    WhatsApp Support
                  </h4>
  
                  <p className="text-sm text-slate-400">
                    Chat with our expert team instantly.
                  </p>
  
                </div>
  
              </a>
  
              <a
                href="https://www.google.com/maps/place/Naksh+Computers/@23.0280065,72.5698806,17z/data=!3m1!4b1!4m6!3m5!1s0x395e848a43dedb61:0xf6f23f4d61a9000b!8m2!3d23.0280065!4d72.5698806!16s%2Fg%2F1pwfxx1b6?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="flex items-center justify-between rounded-xl border border-white/10 p-4 transition hover:border-blue-500 hover:bg-white/5"
              >
  
                <div className="flex items-center gap-4">
  
                  <MapPin className="h-6 w-6 text-red-400" />
  
                  <div>
  
                    <h4 className="font-semibold text-white">
                      Visit Our Store
                    </h4>
  
                    <p className="text-sm text-slate-400">
                      Open Google Maps
                    </p>
  
                  </div>
  
                </div>
  
                <ExternalLink className="h-4 w-4 text-slate-400" />
  
              </a>
  
            </div>
  
          </div>
          
          {/* Quick Links */}

                  {/* ================= QUICK LINKS ================= */}

        <div>

          <h3 className="text-lg font-bold text-white">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-4">

            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>

          </div>

          {/* ================= SERVICES ================= */}

          <div>

          <h3 className="text-lg font-bold text-white">
            Our Services
          </h3>

          <ul className="mt-6 space-y-4">

            {[
              "Laptop Sales",
              "Desktop Computers",
              "Computer Repair",
              "Printer Services",
              "CCTV Installation",
              "Networking Solutions",
              "AMC Maintenance",
            ].map((service) => (

              <li key={service}>

                <Link
                  href="/services"
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  {service}
                </Link>

              </li>

            ))}

          </ul>

          </div>

          {/* ================= CONTACT ================= */}

          <div>

          <h3 className="text-lg font-bold text-white">
            Contact Us
          </h3>

          <div className="mt-6 space-y-6">

            <a
              href="tel:+919924230096"
              className="flex items-start gap-4 transition hover:text-white"
            >

              <Phone className="mt-1 h-5 w-5 text-blue-400" />

              <div>

                <p className="font-semibold text-white">
                  +91 99242 30096
                </p>

                <p className="text-sm text-slate-400">
                  Call us anytime
                </p>

              </div>

            </a>

            <a
              href="mailto:nakshcomputers@gmail.com"
              className="flex items-start gap-4 transition hover:text-white"
            >

              <Mail className="mt-1 h-5 w-5 text-blue-400" />

              <div>

                <p className="font-semibold text-white">
                  nakshcomputers@gmail.com
                </p>

                <p className="text-sm text-slate-400">
                  Send us an email
                </p>

              </div>

            </a>

            <div className="flex items-start gap-4">

              <MapPin className="mt-1 h-5 w-5 text-blue-400" />

              <div>

                <p className="font-semibold text-white">
                  Naksh Computers
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">

                  Krupal Pathshala City Center, 342

                  <br />

                  Ashram Road

                  <br />

                  Opp. Chinubhai Tower

                  <br />

                  Ellisbridge

                  <br />

                  Ahmedabad - 380009

                </p>

              </div>

            </div>

          </div>

          </div>
          
          
          
              

              <a
                href="https://www.google.com/maps/place/Naksh+Computers/@23.0280065,72.5698806,17z/data=!3m1!4b1!4m6!3m5!1s0x395e848a43dedb61:0xf6f23f4d61a9000b!8m2!3d23.0280065!4d72.5698806!16s%2Fg%2F1pwfxx1b6?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="mt-2 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                View on Google Map

                <ExternalLink className="h-4 w-4" />

              </a>
              </div>
            

          

        

        

        

        {/* Bottom */}
  
        <div className="mt-16 border-t border-slate-800 pt-8">
  
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
  
            <p className="text-center text-sm text-slate-500">
              © {year} Naksh Computers. All Rights Reserved.
            </p>
  
            <div className="flex flex-wrap items-center gap-6">
  
              <Link
                href="/privacy-policy"
                className="text-sm text-slate-500 transition hover:text-white"
              >
                Privacy Policy
              </Link>
  
              <Link
                href="/terms-and-conditions"
                className="text-sm text-slate-500 transition hover:text-white"
              >
                Terms & Conditions
              </Link>
  
              <Link
                href="/contact"
                className="text-sm text-slate-500 transition hover:text-white"
              >
                Contact
              </Link>
  
            </div>
  
          </div>
  
        </div>
  
      </Container>
  
    </footer>
  );
  }