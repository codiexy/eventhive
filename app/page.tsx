import React from "react";
import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Evntix - Find & Sell Event Tickets for Free",
  description: "Join the most modern ticketing platform. Discover amazing events or list your own for free with zero platform fees.",
};

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Evntix",
    "url": "https://evntix.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://evntix.com/events?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Evntix",
    "url": "https://evntix.com",
    "logo": "https://evntix.com/logo.png",
    "sameAs": [
      "https://facebook.com/evntix",
      "https://twitter.com/evntix",
      "https://instagram.com/evntix"
    ]
  };

  return (
    <>
      <SEO schema={schema} />
      <SEO schema={orgSchema} />
      <HomeClient />
    </>
  );
}
