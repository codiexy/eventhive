import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Layout from "@/components/layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Evntix - Modern Event Ticketing Platform",
    template: "%s | Evntix"
  },
  description: "The modern ticketing platform for music, comedy, festivals and more. List your events for free and connect with your audience.",
  keywords: ["event ticketing", "buy tickets", "sell tickets", "event organizer", "music events", "festivals", "comedy shows"],
  authors: [{ name: "Evntix Team" }],
  creator: "Evntix",
  publisher: "Evntix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://evntix.com"), // Placeholder URL, should be updated with actual domain
  openGraph: {
    title: "Evntix - Modern Event Ticketing Platform",
    description: "The modern ticketing platform for music, comedy, festivals and more.",
    url: "https://evntix.com",
    siteName: "Evntix",
    images: [
      {
        url: "/og-image.jpg", // Needs to be created or provided
        width: 1200,
        height: 630,
        alt: "Evntix Platform",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evntix - Modern Event Ticketing Platform",
    description: "The modern ticketing platform for music, comedy, festivals and more.",
    images: ["/og-image.jpg"],
    creator: "@evntix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
