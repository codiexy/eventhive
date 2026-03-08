"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, UserPlus, CalendarCheck, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "@/components/organisers/RegistrationModal";

const steps = [
    {
        icon: UserPlus,
        title: "Create Profile",
        desc: "Build your brand identity in minutes with our intuitive profile builder.",
        color: "bg-violet-600",
    },
    {
        icon: CalendarCheck,
        title: "List Event",
        desc: "Add your event details, tickets, and gallery with our simple 5-step process.",
        color: "bg-pink-500",
    },
    {
        icon: Rocket,
        title: "Go Live",
        desc: "Launch your event and start selling tickets across all platforms instantly.",
        color: "bg-orange-500",
    },
];

export default function HowItWorks() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <p className="text-violet-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4">Onboarding</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Get Started in Moments
                    </h2>
                    <div className="w-12 h-1.5 bg-violet-600 mx-auto rounded-full mb-6" />
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative mb-20">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center shadow-xl shadow-gray-200 ring-4 ring-white group-hover:scale-110 transition-transform mb-8`}>
                                <step.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-wider">{step.title}</h3>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed px-6">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Button
                        onClick={() => setModalOpen(true)}
                        className="h-16 px-12 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-violet-600/30"
                    >
                        Learn More About Us
                    </Button>
                </div>
            </div>
            <RegistrationModal open={modalOpen} onOpenChange={setModalOpen} />
        </section>
    );
}