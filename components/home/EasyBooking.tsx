"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, CreditCard, Mail } from "lucide-react";

const steps = [
    {
        number: "1",
        icon: Search,
        title: "Browse",
        desc: "Discover thousands of events near you — concerts, festivals, comedy shows, and more. Filter by city, date, or category.",
        color: "from-violet-500 to-purple-600",
    },
    {
        number: "2",
        icon: CreditCard,
        title: "Book",
        desc: "Select your tickets, choose your seats, and checkout securely in under 60 seconds. SSL-encrypted & PCI compliant.",
        color: "from-pink-500 to-rose-600",
    },
    {
        number: "3",
        icon: Mail,
        title: "Get QR Code",
        desc: "Your QR ticket lands in your inbox instantly. Scan it at the door — no printing needed. It's that simple.",
        color: "from-orange-500 to-amber-500",
    },
];

export default function EasyBooking() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-violet-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4">Process</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Booking is as easy as{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">1 · 2 · 3</span>
                    </h2>
                    <div className="w-12 h-1.5 bg-violet-600 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
                        From discovery to door entry — seamlessly fast, fully secure.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connection lines (desktop only) */}
                    <div className="hidden md:block absolute top-[20%] left-[20%] right-[20%] h-px border-t-2 border-dashed border-gray-100 -z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative flex flex-col items-center text-center group z-10"
                        >
                            <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl shadow-gray-200 ring-8 ring-white group-hover:scale-110 transition-transform duration-500 mb-8`}>
                                <step.icon className="w-10 h-10 text-white" />
                                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center shadow-lg">
                                    <span className="text-gray-900 font-black text-lg">{step.number}</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium px-4">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}