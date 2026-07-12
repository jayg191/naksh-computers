import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional laptop repair, desktop repair, printer services, CCTV installation, networking solutions and AMC services in Ahmedabad.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}