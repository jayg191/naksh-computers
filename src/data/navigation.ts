/**
 * Static and mock data for development and feature modules.
 * Replace with API/CMS data when backend integration is added.
 */

import type { NavItem, StatItem } from "@/types";

export const NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY_STATS: StatItem[] = [
  {
    id: "experience",
    value: "10+",
    label: "Years of Experience",
  },
  {
    id: "customers",
    value: "5000+",
    label: "Happy Customers",
  },
  {
    id: "repairs",
    value: "1000+",
    label: "Devices Repaired",
  },
  {
    id: "support",
    value: "Same Day",
    label: "Service Available",
  },
];