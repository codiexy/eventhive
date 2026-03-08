"use client";

import React from "react";
import { motion } from "framer-motion";
import { Music, PartyPopper, Laugh, Trophy, Palette, UtensilsCrossed, Heart, Briefcase } from "lucide-react";
import Link from "next/link";
import { createPageUrl } from "@/utils";

const categories = [
    { name: "Music", icon: Music, color: "bg-violet-600" },
    { name: "Nightlife", icon: PartyPopper, color: "bg-pink-500" },
    { name: "Comedy", icon: Laugh, color: "bg-orange-500" },
    { name: "Sports", icon: Trophy, color: "bg-green-500" },
    { name: "Arts", icon: Palette, color: "bg-blue-500" },
    { name: "Food & Drink", icon: UtensilsCrossed, color: "bg-red-500" },
    { name: "Wellness", icon: Heart, color: "bg-teal-500" },
    { name: "Business", icon: Briefcase, color: "bg-slate-700" },
];

export default function CategoryBar() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
                <p className="text-violet-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4">Discover</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">Browse by Category</h2>
                <div className="w-12 h-1.5 bg-violet-600 mx-auto rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-8 md:gap-14">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Link
                                href={createPageUrl("events") + `?category=${cat.name.toLowerCase().replace(/ & /g, '_')}`}
                                className="flex flex-col items-center gap-4 group"
                            >
                                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${cat.color} flex items-center justify-center shadow-2xl shadow-gray-200 ring-4 ring-white group-hover:scale-110 transition-transform duration-300`}>
                                    <cat.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                                </div>
                                <span className="text-xs md:text-sm font-black text-gray-900 uppercase tracking-widest group-hover:text-violet-600 transition-colors">
                                    {cat.name}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}