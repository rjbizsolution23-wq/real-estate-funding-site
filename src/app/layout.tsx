import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rjbizsolution23-wq.github.io/real-estate-funding-site"),
  title: {
    default: "Exclusive Real Estate Investor Funding - Up to $500K Available",
    template: "%s | Real Estate Investor Funding"
  },
  description: "Premium funding solutions for real estate investors. Get up to $500,000 with no collateral required. All credit scores welcome. Fast approval process.",
  keywords: ["real estate funding", "investment loans", "property financing", "real estate investors", "commercial loans", "fix and flip funding", "real estate capital", "fast approval funding"],
  authors: [{ name: "Real Estate Investor Funding" }],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Exclusive Real Estate Investor Funding - Up to $500K Available",
    description: "Premium funding solutions for real estate investors. Get up to $500,000 with no collateral required.",
    url: "/",
    siteName: "Real Estate Investor Funding",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=60",
        width: 1200,
        height: 630,
        alt: "Real estate investment funding hero"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Investor Funding",
    description: "Get up to $500,000 for your real estate investments",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=60"
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LDE Solutions",
    url: "https://rjbizsolution23-wq.github.io/real-estate-funding-site",
    logo: "https://rjbizsolution23-wq.github.io/real-estate-funding-site/logo.svg",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.linkedin.com/"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-533-7658",
      contactType: "customer service",
      areaServed: "US"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Real Estate Investor Funding",
    serviceType: "Business financing",
    provider: {
      "@type": "Organization",
      name: "LDE Solutions"
    },
    areaServed: {
      "@type": "Country",
      name: "United States"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: "Funding up to $500,000 for real estate investors"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need collateral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No collateral is required for our investor funding program."
        }
      },
      {
        "@type": "Question",
        name: "How fast is approval?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typical approvals occur within 7 days, depending on qualification."
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="/" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.0902;-95.7129" />
        <meta name="ICBM" content="37.0902, -95.7129" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <script src="https://api.rjbusinesssolutions.org/js/form_embed.js" async></script>
      </body>
    </html>
  );
}
