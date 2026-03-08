import React from "react";
import { Metadata } from "next";
import ForOrganisersClient from "@/components/organisers/ForOrganisersClient";

export const metadata: Metadata = {
    title: "For Organisers - Sell Tickets for Free",
    description: "Join Evntix as an organiser. List your events for free, track real-time analytics, and get instant payouts with zero platform fees.",
};

export default function ForOrganisers() {
    return <ForOrganisersClient />;
}
