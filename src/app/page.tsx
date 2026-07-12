import type { Metadata } from "next";
import InquiryPopup from "@/components/ui/inquirypopup";
import { Footer, Header } from "@/components/layout";
import {
  BrandsSection,
  CtaSection,
  FeaturedProductsSection,
  HeroSection,
  ServicesSection,
  StatisticsSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from "@/features/home";

export const metadata: Metadata = {
  title: "Computer Store & IT Solutions in Ahmedabad",
  description:
    "Naksh Computers provides laptop sales, desktop computers, printer services, CCTV installation, networking solutions and professional computer repair in Ahmedabad.",
};



export default function HomePage() {
  return (
    <>
      <InquiryPopup />
  
      <Header />
  
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturedProductsSection />
        <WhyChooseUsSection />
        <StatisticsSection />
        <BrandsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
  
      <Footer />
    </>
  
  );
}
