import React from "react";
import { motion } from "framer-motion";
import { Ticket, Users, Calendar, Star } from "lucide-react";

const stats = [
    { icon: Ticket, value: "50K+", label: "Tickets Sold", color: "text-violet-500" },
    { icon: Users, value: "10K+", label: "Happy Attendees", color: "text-pink-500" },
    { icon: Calendar, value: "500+", label: "Events Hosted", color: "text-orange-500" },
    { icon: Star, value: "4.9", label: "Average Rating", color: "text-yellow-500" },
];

export default function StatsSection() {
    return (
        <section className="py-20 bg-white border-y border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Trusted by Thousands</h2>
                    <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                        Join a growing community of event lovers and organisers who trust us to deliver unforgettable experiences.
                    </p>
                </motion.div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 mb-4">
                                <stat.icon className={`w-7 h-7 ${stat.color}`} />
                            </div>
                            <p className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
                            <p className="text-gray-500 text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}