"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CategoryBar from "@/components/home/CategoryBar";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import EasyBooking from "@/components/home/EasyBooking";
import NewFeatures from "@/components/home/NewFeatures";
import OnlinePlatform from "@/components/home/OnlinePlatform";
import HowItWorks from "@/components/home/HowItWorks";
import CTABanner from "@/components/home/CTABanner";
import Testimonials from "@/components/home/Testimonials";
import OrganiserLogos from "@/components/home/OrganiserLogos";
import OrganiserCTA from "@/components/home/OrganiserCTA";
import TrustBadges from "@/components/home/TrustBadges";
import EventsHappeningSoon from "@/components/home/EventsHappeningSoon";
import { MOCK_EVENTS } from "@/lib/mock-data";

export default function HomeClient() {
    const featuredEvents = MOCK_EVENTS.filter(e => e.featured);
    const soonEvents = MOCK_EVENTS.slice(0, 3);

    return (
        <div className="bg-white">
            <HeroSection />
            <FeaturedEvents events={featuredEvents} isLoading={false} />
            <EasyBooking />
            <CategoryBar />
            <TrustBadges />
            <NewFeatures />
            <OnlinePlatform />
            <HowItWorks />
            <CTABanner />
            <Testimonials />
            <EventsHappeningSoon events={soonEvents} isLoading={false} />
            <OrganiserLogos />
            <OrganiserCTA />
        </div>
    );
}
