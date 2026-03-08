import React from "react";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Users, Sparkles, Shield, Rocket } from "lucide-react";

const reasons = [
    {
        icon: DollarSign,
        title: "100% Free for Organisers",
        desc: "Zero platform fees. Zero hidden charges. Keep every dollar you earn. We only charge ticket buyers a small service fee.",
        highlight: true,
    },
    {
        icon: TrendingUp,
        title: "Free Social Media Promotion",
        desc: "Your event gets shared across our social channels (100K+ followers) at no extra cost. Instant exposure to a massive audience.",
        highlight: true,
    },
    {
        icon: Users,
        title: "Influencer Collaborations",
        desc: "We partner with top influencers in music, comedy, sports, and lifestyle to promote select events. Get featured for free.",
        highlight: true,
    },
    {
        icon: Sparkles,
        title: "Easy & Intuitive Interface",
        desc: "Create beautiful event pages in minutes. No tech skills needed. Our drag-and-drop tools make everything simple.",
    },
    {
        icon: Shield,
        title: "Secure & Trustworthy",
        desc: "Bank-level encryption, fraud protection, and secure QR ticketing. Your attendees' data is always protected.",
    },
    {
        icon: Rocket,
        title: "Instant Payouts",
        desc: "Get paid directly to your bank account within 24-48 hours of your event. Fast, reliable, and hassle-free.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-gradient-to-br from-violet-50 via-white to-orange-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjQsIDU4LCAyMzcsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-semibold mb-4">
                        Why Evntix?
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        The Modern Platform Built for Your Success
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We remove every barrier between you and a sold-out event. No fees, no friction, just results.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-8 rounded-2xl border-2 transition-all duration-300 group hover:-translate-y-1 ${r.highlight
                                    ? "bg-gradient-to-br from-violet-500 to-pink-500 border-transparent text-white shadow-xl shadow-violet-500/20"
                                    : "bg-white border-gray-100 hover:shadow-lg hover:shadow-violet-500/5"
                                }`}
                        >
                            {r.highlight && (
                                <div className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                    FREE
                                </div>
                            )}
                            <div
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${r.highlight ? "bg-white/20" : "bg-violet-100 group-hover:bg-violet-200"
                                    } transition-colors`}
                            >
                                <r.icon className={`w-7 h-7 ${r.highlight ? "text-white" : "text-violet-600"}`} />
                            </div>
                            <h3
                                className={`text-xl font-bold mb-3 ${r.highlight ? "text-white" : "text-gray-900"
                                    }`}
                            >
                                {r.title}
                            </h3>
                            <p
                                className={`leading-relaxed ${r.highlight ? "text-white/90" : "text-gray-600"
                                    }`}
                            >
                                {r.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-violet-200 shadow-lg">
                        <div className="flex -space-x-2">
                            {[
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face",
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
                                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=32&h=32&fit=crop&crop=face",
                            ].map((src, i) => (
                                <img key={i} src={src} className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                            ))}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            Join 10,000+ organisers already using Evntix
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}