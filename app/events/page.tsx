import React from "react";
import { Metadata } from "next";
import EventsClient from "@/components/events/EventsClient";
import SEO from "@/components/SEO";
import { MOCK_EVENTS } from "@/lib/mock-data";

export const metadata: Metadata = {
    title: "Explore Events",
    description: "Discover upcoming music festivals, comedy shows, nightlife, and more. Find your next unforgettable experience on Evntix.",
};

export default function EventsPage() {
    // Generate ItemList schema for events
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": MOCK_EVENTS.map((event, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Event",
                "name": event.title,
                "description": `${event.title} at ${event.venue}`,
                "image": event.image_url,
                "startDate": event.date,
                "location": {
                    "@type": "Place",
                    "name": event.venue,
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": event.city,
                        "addressCountry": "GB"
                    }
                },
                "offers": {
                    "@type": "Offer",
                    "price": event.price_from,
                    "priceCurrency": "GBP",
                    "availability": "https://schema.org/InStock"
                }
            }
        }))
    };

    return (
        <>
            <SEO schema={schema} />
            <EventsClient />
        </>
    );
}
