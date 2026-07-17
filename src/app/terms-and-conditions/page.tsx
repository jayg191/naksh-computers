// app/terms-and-conditions/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Globe,
  ShoppingBag,
  IndianRupee,
  ShieldAlert,
  Scale,
  Copyright,
  ExternalLink,
  Gavel,
  Phone,
  MessageCircle,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Naksh Computers",
  description:
    "Review the terms and conditions governing the use of the Naksh Computers website and our computer sales, repair, networking, CCTV, and IT services in Ahmedabad.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "July 17, 2026";

interface TermsSection {
  id: string;
  icon: typeof FileText;
  title: string;
  content: React.ReactNode;
}

const sections: TermsSection[] = [
  {
    id: "website-usage",
    icon: Globe,
    title: "Website Usage",
    content: (
      <>
        <p>
          By accessing and using this website, you agree to use it only
          for lawful purposes and in a manner that does not infringe the
          rights of, or restrict or inhibit the use and enjoyment of this
          site by, any third party.
        </p>
        <p>
          You agree not to misuse this website by knowingly introducing
          viruses, malware, or other material that is malicious or
          technologically harmful, or by attempting unauthorized access to
          any part of the website, servers, or databases connected to it.
        </p>
      </>
    ),
  },
  {
    id: "products-services",
    icon: ShoppingBag,
    title: "Products & Services",
    content: (
      <>
        <p>
          Naksh Computers offers computer and laptop sales, desktop and
          laptop repair, printer services, CCTV installation, networking
          solutions, and Annual Maintenance Contracts (AMC) for homes,
          students, businesses, and offices across Ahmedabad and
          Gandhinagar.
        </p>
        <p>
          Product images, descriptions, and specifications displayed on
          this website are for general reference only. Actual products may
          vary in configuration, appearance, or availability, and we
          recommend confirming exact specifications with us before
          purchase.
        </p>
      </>
    ),
  },
  {
    id: "pricing",
    icon: IndianRupee,
    title: "Pricing",
    content: (
      <>
        <p>
          Prices displayed on this website, including "starting from"
          prices, are indicative and may change without prior notice due
          to fluctuations in supplier pricing, currency exchange rates,
          taxes, or product availability.
        </p>
        <p>
          Final pricing for any product or service will be confirmed
          directly with you via phone, WhatsApp, or in person prior to
          purchase or service commitment. Prices shown on the website do
          not constitute a binding offer.
        </p>
      </>
    ),
  },
  {
    id: "warranty-disclaimer",
    icon: ShieldAlert,
    title: "Warranty Disclaimer",
    content: (
      <>
        <p>
          Products sold by Naksh Computers may be covered by manufacturer
          warranties, which are governed by the respective manufacturer's
          terms and conditions. Naksh Computers facilitates warranty
          support where applicable but does not independently extend
          additional warranties unless explicitly agreed in writing.
        </p>
        <p>
          Repair and installation services are provided on an "as is"
          basis using professional best practices. While we take
          reasonable care in all repairs and installations, we do not
          guarantee that every issue can be resolved, and pre-existing
          hardware or software conditions may affect outcomes.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    icon: Scale,
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, Naksh
          Computers shall not be liable for any indirect, incidental,
          special, or consequential damages, including but not limited to
          loss of data, loss of profits, or business interruption, arising
          from the use of our website, products, or services.
        </p>
        <p>
          Our total liability for any claim arising out of a product or
          service shall not exceed the amount actually paid by you for
          that specific product or service.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    icon: Copyright,
    title: "Intellectual Property",
    content: (
      <p>
        All content on this website — including text, graphics, logos, the
        Naksh Computers name and branding, and website design — is the
        property of Naksh Computers or its licensors and is protected by
        applicable intellectual property laws. You may not reproduce,
        distribute, or use this content for commercial purposes without
        our prior written consent.
      </p>
    ),
  },
  {
    id: "external-links",
    icon: ExternalLink,
    title: "External Links",
    content: (
      <p>
        Our website may contain links to third-party websites or services,
        including WhatsApp, Google Maps, and social media platforms, which
        are not owned or controlled by Naksh Computers. We are not
        responsible for the content, privacy policies, or practices of any
        third-party websites, and inclusion of any link does not imply
        endorsement.
      </p>
    ),
  },
  {
    id: "governing-law",
    icon: Gavel,
    title: "Governing Law (India)",
    content: (
      <p>
        These Terms &amp; Conditions shall be governed by and construed in
        accordance with the laws of India. Any disputes arising out of or
        in connection with these terms, or the use of our website,
        products, or services, shall be subject to the exclusive
        jurisdiction of the courts located in Ahmedabad, Gujarat, India.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
            <FileText className="h-4 w-4" />
            LEGAL
          </span>

          <h1 className="mt-6 max-w-3xl text-3xl font-bold sm:text-5xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Please read these terms carefully before using our website or
            engaging Naksh Computers for any product purchase, repair, or
            IT service.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-sm sm:rounded-3xl sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md sm:size-12 sm:rounded-2xl">
                    <Icon className="size-5 sm:size-6" strokeWidth={1.75} />
                  </div>
                  <h2 className="text-xl font-bold sm:text-2xl">
                    {section.title}
                  </h2>
                </div>

                <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base sm:leading-8">
                  {section.content}
                </div>
              </article>
            );
          })}

          {/* Contact Information */}
          <article
            id="contact-information"
            className="scroll-mt-24 rounded-2xl border border-border bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 p-6 text-white shadow-lg sm:rounded-3xl sm:p-8"
          >
            <h2 className="text-xl font-bold sm:text-2xl">
              Contact Information
            </h2>
            <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
              For any questions regarding these Terms &amp; Conditions,
              please contact us:
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="tel:+919924230096"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                +91 99242 30096
              </a>

              <a
                href="https://wa.me/919924230096"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white px-5 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>

              <span className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-blue-50">
                <MapPin className="h-4 w-4" />
                Ellisbridge, Ahmedabad
              </span>
            </div>
          </article>

          <p className="text-center text-sm text-muted-foreground">
            You can also visit our{" "}
            <Link
              href="/contact"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Contact page
            </Link>{" "}
            or review our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}