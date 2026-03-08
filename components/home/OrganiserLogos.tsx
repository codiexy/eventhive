"use client";

import React from "react";
import { motion } from "framer-motion";

const organisers = [
    { name: "Live Nation", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Live_Nation_Entertainment_logo.svg" },
    { name: "AEG", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/AEG_logo.svg" },
    { name: "Eventbrite", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Eventbrite_logo.svg" },
    { name: "SFX", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" }, // Mock logos for visual
    { name: "Cirque", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "MSG", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" },
];

export default function OrganiserLogos() {
    return (
        <section className="py-24 bg-white border-y border-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <p className="text-violet-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4">Partnerships</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">Trusted by the World's Best Brands</h2>
                <div className="w-12 h-1.5 bg-violet-600 mx-auto rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    {organisers.map((org, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex justify-center"
                        >
                            <img
                                src={org.logo}
                                alt={org.name}
                                className="h-8 md:h-10 w-full object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}