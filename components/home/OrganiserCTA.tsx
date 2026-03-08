"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "@/components/organisers/RegistrationModal";

const benefits = [
    "List your events 100% FREE — zero platform fees",
    "Real-time sales dashboard & analytics",
    "Secure payments — get paid within 24-48 hours",
    "Easy-to-use interface — setup in minutes",
    "Instant QR ticket delivery to attendees",
    "Promotion on our social channels",
];

export default function OrganiserCTA() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-violet-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4 text-center lg:text-left">For Organisers</p>
                        <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-8 text-center lg:text-left">
                            Sell your event <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-500 to-orange-500">
                                tickets for FREE
                            </span>
                        </h2>

                        <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium text-center lg:text-left">
                            The modern ticketing platform for music, comedy, festivals and more. List your event in minutes with zero platform fees.
                        </p>

                        <ul className="grid sm:grid-cols-1 gap-4 mb-12">
                            {benefits.map((b) => (
                                <li key={b} className="flex items-center gap-4 text-gray-800 font-black text-sm uppercase tracking-wide">
                                    <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-violet-600/20">
                                        <Check className="w-3.5 h-3.5 text-white stroke-[4]" />
                                    </div>
                                    {b}
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-center lg:justify-start">
                            <Button
                                size="lg"
                                onClick={() => setModalOpen(true)}
                                className="h-16 px-10 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white text-base font-black uppercase tracking-widest shadow-2xl shadow-violet-600/30 transition-all hover:scale-[1.02] group"
                            >
                                Start Selling Tickets
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-orange-500/20 rounded-[3rem] blur-3xl opacity-50" />
                        <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                            <img
                                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
                                alt="Event Organiser Dashboard"
                                className="w-full aspect-[4/3] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                            {/* Floating Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-[2rem] flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center font-black text-white text-xl">
                                        £
                                    </div>
                                    <div>
                                        <p className="text-white font-black text-lg leading-none mb-1">Zero Fees</p>
                                        <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">Platform Policy</p>
                                    </div>
                                </div>
                                <div className="h-10 w-px bg-white/20" />
                                <div className="text-right">
                                    <p className="text-white font-black text-lg leading-none mb-1">100%</p>
                                    <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">Your Profit</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <RegistrationModal open={modalOpen} onOpenChange={setModalOpen} />
        </section>
    );
}