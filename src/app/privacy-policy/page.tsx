// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Database,
  MessageCircle,
  Cookie,
  BarChart3,
  Share2,
  Lock,
  UserCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Naksh Computers",
  description:
    "Read the Naksh Computers privacy policy to learn how we collect, use, and protect your personal information when you use our website, contact forms, and WhatsApp communication.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "July 17, 2026";

interface PolicySection {
  id: string;
  icon: typeof ShieldCheck;
  title: string;
  content: React.ReactNode;
}

const sections: PolicySection[] = [
  {
    id: "information-collection",
    icon: Database,
    title: "Information Collection",
    content: (
      <>
        <p>
          We collect information you voluntarily provide to us when you
          interact with our website or services. This may include your
          name, phone number, email address, physical address, and details
          about the products or services you are interested in.
        </p>
        <p>
          We may also automatically collect limited technical information
          such as your IP address, browser type, device type, and pages
          visited, in order to maintain and improve the performance and
          security of our website.
        </p>
      </>
    ),
  },
  {
    id: "contact-form-data",
    icon: Mail,
    title: "Contact Form Data",
    content: (
      <>
        <p>
          When you submit an inquiry through our contact form, we collect
          the information you provide — including your name, contact
          details, and message content — solely to respond to your
          inquiry, provide quotes, and offer relevant IT products or
          services.
        </p>
        <p>
          Contact form submissions are not sold, rented, or shared with
          third parties for marketing purposes.
        </p>
      </>
    ),
  },
  {
    id: "whatsapp-communication",
    icon: MessageCircle,
    title: "WhatsApp Communication",
    content: (
      <>
        <p>
          Many of our service inquiries are handled via WhatsApp. When you
          message us on WhatsApp or click a "Chat on WhatsApp" button on
          our website, your phone number and message content are received
          through WhatsApp's platform, which is operated by WhatsApp LLC /
          Meta Platforms, Inc. and governed by their own privacy policy.
        </p>
        <p>
          We use this communication only to respond to your queries,
          provide service updates, and share pricing or product
          information you have requested. We do not use your WhatsApp
          number for unsolicited marketing.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies",
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to remember
          your preferences, understand how visitors use our site, and
          improve overall user experience. Cookies are small text files
          stored on your device by your browser.
        </p>
        <p>
          You can choose to disable cookies through your browser settings.
          Please note that disabling cookies may affect certain features
          or functionality of our website.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    content: (
      <p>
        We may use analytics tools such as Google Analytics to understand
        how visitors interact with our website — including pages viewed,
        time spent, and general geographic location. This information is
        aggregated and anonymized where possible, and is used only to
        improve our website content, performance, and services.
      </p>
    ),
  },
  {
    id: "third-party-services",
    icon: Share2,
    title: "Third-Party Services",
    content: (
      <>
        <p>
          We may rely on trusted third-party service providers to operate
          our website and business, including hosting providers, analytics
          providers, and communication platforms such as WhatsApp and
          Google Maps.
        </p>
        <p>
          These providers may have access to limited information strictly
          necessary to perform their functions and are expected to
          safeguard your data in accordance with their own privacy
          policies. We do not sell your personal information to any third
          party.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    icon: Lock,
    title: "Data Security",
    content: (
      <p>
        We implement reasonable administrative, technical, and physical
        safeguards designed to protect your personal information from
        unauthorized access, disclosure, alteration, or destruction.
        However, no method of transmission over the internet or electronic
        storage is completely secure, and we cannot guarantee absolute
        security.
      </p>
    ),
  },
  {
    id: "user-rights",
    icon: UserCheck,
    title: "User Rights",
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="mt-3 space-y-2">
          <li>
            Request access to the personal information we hold about you.
          </li>
          <li>
            Request correction of inaccurate or incomplete information.
          </li>
          <li>
            Request deletion of your personal information, subject to
            applicable legal or business record-keeping requirements.
          </li>
          <li>
            Withdraw consent for communication via phone, email, or
            WhatsApp at any time.
          </li>
        </ul>
        <p className="mt-3">
          To exercise any of these rights, please contact us using the
          details provided below.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
            <ShieldCheck className="h-4 w-4" />
            LEGAL
          </span>

          <h1 className="mt-6 max-w-3xl text-3xl font-bold sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            At Naksh Computers, we respect your privacy and are committed
            to protecting the personal information you share with us. This
            policy explains what we collect, how we use it, and the
            choices you have.
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

                <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground sm:mt-5 sm:text-base sm:leading-8 [&_ul]:list-disc [&_ul]:pl-5">
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
              If you have any questions about this Privacy Policy or how
              your information is handled, please reach out to us:
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
              href="/terms-and-conditions"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}