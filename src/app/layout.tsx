import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const heading = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });
const body = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.electroart.co.in"),
  title: "Electroart | Medical Enclosure Manufacturing Solutions",
  description: "IR/UV dryers, trolleys, enclosures, UV meter and medical equipment products by Electroart.",
  icons: {
    icon: [
      { url: "/brand/electroart-badge.png?v=1", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico?v=3", sizes: "any" },
    ],
    shortcut: ["/favicon.ico?v=3"],
    apple: [{ url: "/brand/electroart-badge.png?v=1", type: "image/png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    siteName: "Electroart",
    title: "Electroart | Medical Enclosure Manufacturing Solutions",
    description: "IR/UV dryers, trolleys, enclosures, UV meter and medical equipment products by Electroart.",
    images: [
      {
        url: "/brand/electroart-metadata.png?v=1",
        width: 1200,
        height: 630,
        alt: "Electroart Precision Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Electroart | Medical Enclosure Manufacturing Solutions",
    description: "IR/UV dryers, trolleys, enclosures, UV meter and medical equipment products by Electroart.",
    images: ["/brand/electroart-metadata.png?v=1"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
