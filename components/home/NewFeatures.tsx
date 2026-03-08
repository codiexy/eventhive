"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, ShoppingBag, Ticket, Smartphone } from "lucide-react";

const features = [
    {
        icon: User,
        title: "Profile",
        desc: "Create your brand profile and manage your events with ease.",
        color: "bg-violet-500",
    },
    {
        icon: ShoppingBag,
        title: "Store",
        desc: "Set up your own branded store and sell tickets directly.",
        color: "bg-pink-500",
    },
    {
        icon: Ticket,
        title: "Tickets",
        desc: "Manage all your ticket tiers, discounts and special offers.",
        color: "bg-orange-500",
    },
    {
        icon: Smartphone,
        title: "Mobile",
        desc: "Scan tickets at the door with our simple mobile app.",
        color: "bg-blue-500",
    },
];

export default function NewFeatures() {
    return (
        <section className="py-24 bg-gray-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <p className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase mb-4">New Features</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">Experience the Power of Evntix</h2>
                <div className="w-12 h-1.5 bg-orange-500 mx-auto rounded-full mb-6" />
                <p className="text-gray-400 max-w-2xl mx-auto font-medium">
                    The modern platform for music, comedy, festivals and more.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform`}>
                                <f.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-black mb-3">{f.title}</h3>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                {f.desc}
                            </p>
                            <div className="mt-8">
                                <span className="text-orange-500 font-black text-[10px] tracking-widest uppercase cursor-pointer hover:underline">Learn More</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-20 flex justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-4 rounded-2xl shadow-xl shadow-orange-500/20 transition-all uppercase tracking-widest text-xs">
                    Get Started Free
                </button>
            </div>
        </section>
    );
}
