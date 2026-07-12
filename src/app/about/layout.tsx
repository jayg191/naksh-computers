import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Naksh Computers, a trusted computer store in Ahmedabad offering reliable IT solutions, computer sales and repair services.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}