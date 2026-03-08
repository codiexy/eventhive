"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, BarChart3, ShieldCheck } from "lucide-react";

const cards = [
    {
        icon: Globe,
        title: "Global Reach",
        desc: "Grow your audience worldwide with our advanced promotion tools and influencer network.",
        color: "bg-violet-600",
    },
    {
        icon: BarChart3,
        title: "Real-time Analytics",
        desc: "Track your sales performance and audience demographics in real-time with our dashboard.",
        color: "bg-pink-500",
    },
    {
        icon: ShieldCheck,
        title: "Secure Payments",
        desc: "Enjoy peace of mind with our bank-level security and instant payouts for your ticket sales.",
        color: "bg-orange-500",
    },
];

export default function OnlinePlatform() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <p className="text-violet-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4">Excellence</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 mb-6">
                    The Online Platform Built For Success
                </h2>
                <div className="w-12 h-1.5 bg-violet-600 mx-auto rounded-full mb-6" />
                <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                    Designed by event organisers for event organisers. Everything you need to succeed.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className={`p-10 rounded-[3rem] ${card.color} text-white shadow-2xl relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-10">
                                <card.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-black mb-4">{card.title}</h3>
                            <p className="text-white/80 font-medium leading-relaxed mb-8">
                                {card.desc}
                            </p>

                            <div className="flex items-center gap-2 cursor-pointer group/link">
                                <span className="text-[10px] font-black tracking-widest uppercase">Explore More</span>
                                <div className="p-1 rounded-full bg-white/20 group-hover/link:bg-white/40 transition-colors">
                                    <div className="w-1 h-1 bg-white rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
