import React from "react";
import { Metadata } from "next";
import TermsClient from "@/components/legal/TermsClient";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Review the Evntix Terms of Service to understand our platform rules, user responsibilities, and legal agreements.",
};

export default function TermsOfServicePage() {
    return <TermsClient />;
}
