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
    author: "Sanvi Patel",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "I had a great experience at Naksh Computer. They quickly diagnosed and fixed the screen display issue on my laptop with excellent professionalism. The repair was completed efficiently, and my laptop now works perfectly. The staff was knowledgeable, friendly, and explained everything clearly before starting the repair. Their service was honest, reasonably priced, and they used genuine quality parts...",
  },
  {
    id: "t2",
    author: "Hardevsinh Chauhan",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "Unmatched Expertise – Highly Recommended!​I am incredibly impressed with the level of service provided by Naksh Computers. If you are looking for a one-stop shop for all your technology needs, this is undoubtedly the place to go.What truly sets Naksh Computers apart is their large variety of products. Whether you are in the market for a high-performance laptop, a custom PC build, top-tier software solutions...",
  },
  {
    id: "t3",
    author: "Ronak Dagli",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "I have purchased computer and  accessories from Naksh Computers. The quality of the product, price and the service all are top notch.The products were installed professionally and given the  basic training. I am happy with my purchase and recommend Naksh Computers for your future needs in relation with computer/hardware..",
  },
  {
    id: "t4",
    author: "Rajesh S",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "Naksh computer service and products is wonderful and awesome No matter what product you buy from them, they will give you good quality products, good workmanship at a low price, and on top of that, the product you buy will last a long time....",
  },    
  {
    id: "t5",
    author: "Raj Kumar",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "I have already purchased new and used laptops and so many other accessories from him. Service satisfaction is top notch. Sometimes offline prices of products are high but quality never compromised so my 1st preference for laptops and accessories.",
  },
  {
    id: "t6",
    author: "Aditya Vishwakarma",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "Outstanding website for all your computer needs! It offers an intuitive interface, a vast selection of high-quality products, detailed specifications, and top-notch customer support. A perfect destination for tech enthusiasts and everyday users alike...",
  },
  {
    id: "t7",
    author: "Deep Sherthiya",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "Naksh Computers delivers a premium experience with top-quality products and reliable service. Their refurbished laptops are in excellent condition at great prices. A trusted place for all computer and tech solutions.",
  },
  {
    id: "t8",
    author: "Darshan Patel",
    role: "Google Review ⭐⭐⭐⭐⭐",
    company: "Ahmedabad",
    quote:
      "Very amazing service. Got my laptop repaired within the given time and quick solution to my problems. Good work and efficient understanding of issues and cost efficient budgeting. Thank You.",
  },
];

export const CTA_CONTENT = {
  headline: "Ready to Upgrade Your Technology?",
  subheadline:
    "Get a free consultation and customized quote from our enterprise solutions team. No obligation, expert advice guaranteed.",
  primaryCta: { label: "Request a Quote", href: "/contact" },
  secondaryCta: { label: "Call Us Now", href: "tel:+919924230096" },
} as const;
