import GoogleAnalytics from "@/components/GoogleAnalytics";

import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_CONFIG } from "@/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default:
      "Naksh Computers | Computer Store, Laptop Repair & IT Solutions in Ahmedabad",
    template: `%s | Naksh Computers`,
  },

  description:
    "Naksh Computers is a trusted computer store in Ahmedabad offering laptop sales, desktop computers, printer services, CCTV installation, networking solutions and IT support for homes and businesses.",

  keywords: [
    "Naksh Computers",
    "Computer Store Ahmedabad",
    "Laptop Shop Ahmedabad",
    "Laptop Repair Ahmedabad",
    "Desktop Computer Ahmedabad",
    "Gaming PC Ahmedabad",
    "Printer Service Ahmedabad",
    "CCTV Installation Ahmedabad",
    "Networking Solutions Ahmedabad",
    "IT Support Ahmedabad",
    "Computer Accessories Ahmedabad",
    "Computer Sales Ahmedabad",
  ],

  authors: [
    {
      name: "Naksh Computers",
    },
  ],

  creator: "Naksh Computers",

  publisher: "Naksh Computers",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: "Naksh Computers",

    title:
      "Naksh Computers | Computer Store & IT Solutions in Ahmedabad",

    description:
      "Laptop Sales, Desktop Computers, Printer Services, CCTV Installation, Networking Solutions and Professional Computer Repair in Ahmedabad.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Naksh Computers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Naksh Computers | Computer Store & IT Solutions",

    description:
      "Trusted Computer Store in Ahmedabad offering Laptop Sales, Computer Repair, CCTV Installation and Networking Solutions.",

    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  category: "Technology",

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={SITE_CONFIG.locale}
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <GoogleAnalytics />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ComputerStore",

        name: "Naksh Computers",

        image: `${SITE_CONFIG.url}/og-image.jpg`,

        url: SITE_CONFIG.url,

        telephone: "+91-9924230096",

        email: "nakshcomputers342@gmail.com",

        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Krupal Pathshala City Center, 342 Ashram Road, Opp. Chinubhai Tower",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "380009",
          addressCountry: "IN",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.0280065,
          longitude: 72.5698806,
        },

        openingHours: "Mo-Sa 10:00-20:00",

        priceRange: "₹₹",

        areaServed: [
          "Ahmedabad",
          "Gandhinagar",
        ],

        sameAs: [
          "https://www.google.com/maps/place/Naksh+Computers/@23.0280065,72.5698806,17z/data=!3m1!4b1!4m6!3m5!1s0x395e848a43dedb61:0xf6f23f4d61a9000b",
          "https://www.justdial.com/Ahmedabad/Naksh-Computers-Opp-H-K-Collage-Ashram-Road/079PXX79-XX79-121218151548-I4P9_BZDET"
        ],
      }),
    }}
  />

  {children}
</body>
    </html>
  );
}
