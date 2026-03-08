"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ticket, Target, Users, Heart } from "lucide-react";

const values = [
    { icon: Target, title: "Mission Driven", desc: "We believe live experiences bring people together. Our mission is to make every event accessible and seamless." },
    { icon: Users, title: "Community First", desc: "We empower organisers of all sizes — from local meetup hosts to stadium-scale festival producers." },
    { icon: Heart, title: "Passion for Events", desc: "Our team lives and breathes live entertainment. We're building the platform we'd want to use ourselves." },
];

export default function AboutClient() {
    return (
        <div className="min-h-screen">
            <section className="relative bg-[#0A0F1C] pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden text-center text-white/90">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                                <Ticket className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-3xl font-bold text-white">Evntix</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
                            We're building the future of <span className="text-violet-400">live events</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                            Evntix is the modern ticketing platform that connects people with the events they love, while giving organisers the tools they need to succeed.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Our Story</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed font-medium">
                            <p>Evntix was born out of frustration with outdated, complicated ticketing platforms.</p>
                            <p>We set out to build something different — a platform that's as exciting and seamless as the events themselves.</p>
                            <p>Today, we power thousands of events across music, comedy, sports, and beyond.</p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=500&fit=crop" alt="Live event experience" className="rounded-3xl shadow-2xl w-full border border-gray-100" />
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-gray-50/50">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-black text-center mb-14 uppercase tracking-tight">What We Stand For</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <motion.div key={v.title} className="bg-white p-8 rounded-2xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-5">
                                    <v.icon className="w-7 h-7 text-violet-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{v.title}</h3>
                                <p className="text-gray-500 font-medium">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
