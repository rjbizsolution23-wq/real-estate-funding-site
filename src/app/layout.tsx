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
  title: "Exclusive Real Estate Investor Funding - Up to $500K Available",
  description: "Premium funding solutions for real estate investors. Get up to $500,000 with no collateral required. All credit scores welcome. Fast approval process.",
  keywords: ["real estate funding", "investment loans", "property financing", "real estate investors", "commercial loans", "fix and flip funding"],
  authors: [{ name: "Real Estate Investor Funding" }],
  openGraph: {
    title: "Exclusive Real Estate Investor Funding - Up to $500K Available",
    description: "Premium funding solutions for real estate investors. Get up to $500,000 with no collateral required.",
    url: "https://chat.z.ai",
    siteName: "Real Estate Investor Funding",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Investor Funding",
    description: "Get up to $500,000 for your real estate investments",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
