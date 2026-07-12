/**
 * Site-wide metadata and configuration for Naksh Computers.
 * Centralizes brand identity values used across layouts, SEO, and features.
 */

export const SITE_CONFIG = {
  name: "Naksh Computers",
  tagline: "Complete Computer & IT Solutions",
  description:
  "Naksh Computers provides computer sales, laptop repair, desktop repair, printer services, CCTV installation, networking solutions, AMC support, and complete IT solutions in Ahmedabad.",
  url: "http://localhost:3000",
  locale: "en-IN",
  contact: {
    email: "nakshcomputers@gmail.com",
    phone: "+91 9924230096",
  },
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/naksh-computers",
  twitter: "https://twitter.com/nakshcomputers",
  facebook: "https://facebook.com/nakshcomputers",
} as const;
