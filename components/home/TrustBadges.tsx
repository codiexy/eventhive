"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, CreditCard, Zap, Award, CheckCircle2 } from "lucide-react";

const badges = [
    { icon: Shield, title: "Security", desc: "256-bit encryption", color: "from-blue-500 to-indigo-600" },
    { icon: Award, title: "Reliability", desc: "99.9% uptime", color: "from-violet-500 to-purple-600" },
    { icon: Zap, title: "Performance", desc: "Instant booking", color: "from-orange-400 to-pink-500" },
    { icon: Lock, title: "Compliance", desc: "GDPR & PCI DSS", color: "from-emerald-500 to-teal-600" },
];

export default function TrustBadges() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-violet-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4">Trust & Safety</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Secure Handling & Compliance
                    </h2>
                    <div className="w-12 h-1.5 bg-violet-600 mx-auto rounded-full mb-6" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {badges.map((b, i) => (
                        <motion.div
                            key={b.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${b.color} flex items-center justify-center shadow-xl shadow-gray-200 ring-4 ring-white group-hover:scale-110 transition-transform duration-300 mb-6`}>
                                <b.icon className="w-9 h-9 text-white" />
                            </div>
                            <h3 className="text-lg font-black text-gray-900 mb-1">{b.title}</h3>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center gap-12 flex-wrap items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-7" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="PayPal" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-10" />
                </motion.div>
            </div>
        </section>
    );
}