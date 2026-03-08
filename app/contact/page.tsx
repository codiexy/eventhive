import React from "react";
import { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Have questions or feedback? Get in touch with the Evntix team. We're here to help you with your event ticketing needs.",
};

export default function ContactPage() {
    return <ContactClient />;
}
