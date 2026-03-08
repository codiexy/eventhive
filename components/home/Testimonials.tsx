"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Martinez",
        role: "Festival Organiser",
        image: "https://i.pravatar.cc/150?u=sarah",
        text: "Evntix made selling 5,000 tickets a breeze. The dashboard is intuitive, and their team helped us every step of the way.",
        rating: 5,
    },
    {
        name: "Marcus Thompson",
        role: "Comedy Club Owner",
        image: "https://i.pravatar.cc/150?u=marcus",
        text: "We've tried other platforms, but Evntix is hands down the best. Easy to use, secure payments, and great promotion.",
        rating: 5,
    },
    {
        name: "Jessica Chen",
        role: "Event Manager",
        image: "https://i.pravatar.cc/150?u=jessica",
        text: "Setting up our conference took less than 15 minutes. The analytics helped us understand our audience better.",
        rating: 5,
    },
    {
        name: "David Johnson",
        role: "Music Promoter",
        image: "https://i.pravatar.cc/150?u=david",
        text: "The influencer collaborations and social exposure were game-changers for us. Sold out every show in our series.",
        rating: 5,
    },
    {
        name: "Amanda Rodriguez",
        role: "Festival Coordinator",
        image: "https://i.pravatar.cc/150?u=amanda",
        text: "Free to list, easy to manage, and instant payments. Evntix saved us thousands in fees. Absolutely love it!",
        rating: 5,
    },
    {
        name: "Ryan Lee",
        role: "Nightclub Manager",
        image: "https://i.pravatar.cc/150?u=ryan",
        text: "Security features are top-notch. QR codes, fraud protection, and smooth check-ins. Highly recommended.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <p className="text-violet-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4">Reviews</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-2">Trusted by Thousands</h2>
                <div className="w-12 h-1.5 bg-violet-600 mx-auto rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 group"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, idx) => (
                                    <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-lg text-gray-800 font-medium leading-relaxed mb-8 italic">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover shadow-lg border-2 border-white"
                                />
                                <div>
                                    <p className="font-black text-gray-900 text-sm uppercase tracking-wide">{t.name}</p>
                                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}