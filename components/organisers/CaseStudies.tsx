import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users } from "lucide-react";

const cases = [
    {
        name: "Neon Beats Festival",
        organiser: "Sarah Martinez",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
        stats: [
            { icon: Users, value: "5,000", label: "Tickets Sold" },
            { icon: DollarSign, value: "$250K", label: "Revenue" },
            { icon: TrendingUp, value: "300%", label: "vs Last Year" },
        ],
        quote: "Switching to Evntix saved us $12,500 in platform fees. Their free social promotion brought us 2,000+ new attendees.",
    },
    {
        name: "Tech Summit 2025",
        organiser: "David Johnson",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
        stats: [
            { icon: Users, value: "2,000", label: "Attendees" },
            { icon: DollarSign, value: "$180K", label: "Revenue" },
            { icon: TrendingUp, value: "Sold Out", label: "in 3 days" },
        ],
        quote: "The ease of use and instant payouts made our event planning stress-free. We'll never go back to our old platform.",
    },
    {
        name: "Comedy All-Stars Tour",
        organiser: "Marcus Lee",
        image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=400&h=300&fit=crop",
        stats: [
            { icon: Users, value: "3,500", label: "Total Sold" },
            { icon: DollarSign, value: "$87K", label: "Revenue" },
            { icon: TrendingUp, value: "4.9★", label: "Rating" },
        ],
        quote: "The influencer partnerships brought us a whole new audience. Sales increased by 250% compared to our previous shows.",
    },
];

export default function CaseStudies() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Real Results from Real Organisers
                    </h2>
                    <p className="text-lg text-gray-500">
                        See how organisers are crushing their goals with Evntix
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {cases.map((c, i) => (
                        <motion.div
                            key={c.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-white mb-1">{c.name}</h3>
                                    <p className="text-sm text-white/80">{c.organiser}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {c.stats.map((s, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-violet-100 mb-2">
                                                <s.icon className="w-5 h-5 text-violet-600" />
                                            </div>
                                            <p className="text-lg font-bold text-gray-900">{s.value}</p>
                                            <p className="text-xs text-gray-500">{s.label}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-600 italic leading-relaxed">"{c.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}