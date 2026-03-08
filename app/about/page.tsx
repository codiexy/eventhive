import React from "react";
import { Metadata } from "next";
import AboutClient from "@/components/about/AboutClient";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Evntix, our mission, our story, and what we stand for. We are building the future of live event ticketing.",
};

export default function AboutPage() {
    return <AboutClient />;
}
