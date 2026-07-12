import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Naksh Computers for computer sales, laptop repair, printer services, CCTV installation and networking solutions in Ahmedabad.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}