import React from "react";
import { Metadata } from "next";
import PrivacyClient from "@/components/legal/PrivacyClient";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read the Evntix Privacy Policy to understand how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
    return <PrivacyClient />;
}
