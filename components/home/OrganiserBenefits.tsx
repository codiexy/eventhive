import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Megaphone, Users, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createPageUrl } from "@/utils";

const benefits = [
    {
        icon: TrendingUp,
        stat: "20%",
        title: "Sell 20% More Tickets",
        desc: "Our smart recommendation engine and SEO-optimised event pages put your event in front of the right audience — driving more sales than any other platform.",
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-50",
        iconColor: "text-violet-600",
    },
    {
        icon: Megaphone,
        stat: "FREE",
        title: "We Promote You Online — Free",
        desc: "Every event listed on Evntix gets featured in our weekly newsletter, push notifications, and our homepage — at zero cost to you. Real promotion, zero spend.",
        color: "from-orange-500 to-pink-500",
        bg: "bg-orange-50",
        iconColor: "text-orange-600",
    },
    {
        icon: Users,
        stat: "100+",
        title: "Influencer Connections",
        desc: "We connect you with 100+ vetted influencers in music, sports, nightlife, and lifestyle. Your event reaches their audiences — organically and authentically.",
        color: "from-pink-500 to-rose-600",
        bg: "bg-pink-50",
        iconColor: "text-pink-600",
    },
    {
        icon: Share2,
        stat: "100K+",
        title: "Free Social Media Promotion",
        desc: "Your event is shared across our social channels with 100K+ engaged followers. Instagram, TikTok, Facebook — we post, you benefit.",
        color: "from-blue-500 to-cyan-600",
        bg: "bg-blue-50",
        iconColor: "text-blue-600",
    },
];

export default function OrganiserBenefits() {
    return (
        <section className="py-16 bg-gradient-to-br from-[#0A0F1C] to-[#111827]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold mb-4">
                        For Event Organisers
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Why Organisers Choose Evntix
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        We don't just sell tickets — we grow your audience, amplify your brand, and help you sell out every time.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={b.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center mb-4 shadow-lg`}>
                                <b.icon className="w-7 h-7 text-white" />
                            </div>
                            <div className="text-3xl font-black text-white mb-2">{b.stat}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <Link href={createPageUrl("for-organisers")}>
                        <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-6 text-lg rounded-xl font-semibold shadow-xl shadow-orange-500/20">
                            Start Listing for Free
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <p className="text-gray-500 text-sm mt-3">No credit card · No platform fees · Setup in 5 minutes</p>
                </motion.div>
            </div>
        </section>
    );
}