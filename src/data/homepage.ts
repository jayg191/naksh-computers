import type {
  BrandItem,
  ProductItem,
  ServiceItem,
  Testimonial,
  WhyChooseItem,
} from "@/types";
import { COMPANY_STATS } from "./navigation";

export const HERO_CONTENT = {
  badge: "Trusted Computer & IT Partner",
  headline: "Complete Computer & IT Solutions",
  subheadline:
  "Naksh Computers provides computer sales, laptop repair, desktop repair, printer services, CCTV installation, networking solutions, AMC support, and complete IT solutions for homes and businesses in Ahmedabad.",
  primaryCta: { label: "Call Now", href: "tel:+919924230096", },
  secondaryCta: { label: "WhatsApp Us", href: "https://wa.me/919924230096",},
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "computer-sales",
    title: "Computer & Laptop Sales",
    description:
    "Desktop PCs, laptops, gaming PCs, accessories and complete computer solutions for home and business.",
    icon: "Monitor",
  },
  {
    id: "repair",
    title: "Laptop & Desktop Repair",
    description:
    "Fast diagnosis, motherboard repair, SSD upgrades, RAM upgrades, Windows installation and hardware replacement.",
    icon: "Wrench",
  },
  {
    id: "printer",
    title: "Printer Services",
    description:
    "Printer repair, cartridge refilling, toner replacement and printer maintenance for all major brands.",
    icon: "Printer",
  },
  {
    id: "cctv",
    title: "CCTV Installation",
    description:
    "Professional CCTV camera installation and surveillance solutions for homes, offices and shops.",
    icon: "Shield",
  },
  {
    id: "networking",
    title: "Networking Solutions",
    description:
    "Wi-Fi setup, LAN cabling, router configuration and office networking solutions.",
    icon: "Network",
  },
  {
    id: "amc",
    title: "AMC Maintenance",
    description:
    "Annual Maintenance Contracts for computers, printers and complete IT infrastructure.",
    icon: "Settings",
  },
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  {
    id: "laptop",
    name: "Business & Gaming Laptops",
    category: "Laptop",
    description:
      "HP, Dell, Lenovo, ASUS, Acer laptops for office, students and gaming.",
    price: "Starting ₹29,999",
    badge: "Best Seller",
    specs: [
      "Intel & AMD Processors",
      "SSD Storage",
      "Windows 11",
      "Official Warranty",
    ],
  },

  {
    id: "desktop",
    name: "Desktop Computers",
    category: "Desktop",
    description:
      "Custom desktop computers for office, home and professional work.",
    price: "Starting ₹24,999",
    specs: [
      "Intel Core i3/i5/i7",
      "Custom Configuration",
      "Upgradeable",
      "Warranty Included",
    ],
  },

  {
    id: "gaming",
    name: "Gaming PCs",
    category: "Gaming",
    description:
      "Custom-built gaming PCs with powerful graphics cards and processors.",
    price: "Starting ₹59,999",
    badge: "Popular",
    specs: [
      "RTX Graphics",
      "RGB Cabinet",
      "High FPS Gaming",
      "Liquid Cooling Option",
    ],
  },

  {
    id: "printer",
    name: "Printers",
    category: "Printer",
    description:
      "Inkjet, LaserJet and All-in-One printers for home and office.",
    price: "Starting ₹5,499",
    specs: [
      "HP",
      "Canon",
      "Epson",
      "Brother",
    ],
  },

  {
    id: "cctv",
    name: "CCTV Security Systems",
    category: "Security",
    description:
      "Complete CCTV installation with remote mobile monitoring.",
    price: "Starting ₹8,999",
    specs: [
      "HD Camera",
      "Night Vision",
      "Remote Access",
      "Installation Included",
    ],
  },

  {
    id: "accessories",
    name: "Computer Accessories",
    category: "Accessories",
    description:
      "Keyboard, Mouse, SSD, RAM, UPS, Routers and networking accessories.",
    price: "Starting ₹299",
    specs: [
      "Keyboard",
      "Mouse",
      "SSD",
      "RAM",
    ],
  },
];
export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: "genuine-products",
    title: "Genuine Products",
    description:
      "We provide original products from trusted brands with complete quality assurance.",
    icon: "ShieldCheck",
  },
  {
    id: "expert-technicians",
    title: "Expert Technicians",
    description:
      "Experienced professionals for laptop, desktop, printer and networking services.",
    icon: "Users",
  },
  {
    id: "fast-service",
    title: "Fast Service",
    description:
      "Quick diagnosis, same-day service whenever possible and timely delivery.",
    icon: "Clock3",
  },
  {
    id: "affordable-pricing",
    title: "Affordable Pricing",
    description:
      "Transparent pricing with high-quality service at competitive rates.",
    icon: "BadgeIndianRupee",
  },
  {
    id: "onsite-support",
    title: "On-Site Support",
    description:
      "Home and office visit support across Ahmedabad for installation and maintenance.",
    icon: "MapPinned",
  },
  {
    id: "trusted-partner",
    title: "Trusted IT Partner",
    description:
      "Your one-stop destination for complete computer sales, repairs and IT solutions.",
    icon: "Award",
  },
];

  


export const STATS = COMPANY_STATS;

export const BRANDS: BrandItem[] = [
  { id: "hp", name: "HP" },
  { id: "dell", name: "Dell" },
  { id: "lenovo", name: "Lenovo" },
  { id: "asus", name: "ASUS" },
  { id: "acer", name: "Acer" },
  { id: "msi", name: "MSI" },
  { id: "canon", name: "Canon" },
  { id: "epson", name: "Epson" },
  { id: "brother", name: "Brother" },
  { id: "tp-link", name: "TP-Link" },
  { id: "d-link", name: "D-Link" },
  { id: "logitech", name: "Logitech" },
  { id: "wd", name: "Western Digital" },
  { id: "seagate", name: "Seagate" },
  { id: "cp-plus", name: "CP Plus" },
  { id: "hikvision", name: "Hikvision" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Hitesh Panchal",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "Quick laptop repair, genuine service, and a great overall experience. Fast turnaround with professional support.",
  },
  {
    id: "t2",
    author: "Altafiya",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "Recovered important data from my old laptop and helped me set up my new laptop the same day. Reliable service for many years.",
  },
  {
    id: "t3",
    author: "Harshita Arora",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "My computer was repaired within a day and has been working perfectly since. Fast, dependable and highly recommended.",
  },
];

export const CTA_CONTENT = {
  headline: "Ready to Upgrade Your Technology?",
  subheadline:
    "Get a free consultation and customized quote from our enterprise solutions team. No obligation, expert advice guaranteed.",
  primaryCta: { label: "Request a Quote", href: "/contact" },
  secondaryCta: { label: "Call Us Now", href: "tel:+919924230096" },
} as const;
