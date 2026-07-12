/**
 * Shared TypeScript interfaces used across features and components.
 */

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
  children?: NavItem[];
};

export type SocialLink = {
  platform: "linkedin" | "twitter" | "facebook" | "instagram" | "youtube";
  href: string;
  label: string;
};

export type FeatureCard = {
  id: string;
  title: string;
  description: string;
  icon?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
  suffix?: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type ProductItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  badge?: string;
  specs: string[];
};

export type WhyChooseItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type BrandItem = {
  id: string;
  name: string;
};

export type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export type WithClassName = {
  className?: string;
};
