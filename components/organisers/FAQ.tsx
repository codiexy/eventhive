import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Is Evntix really free for organisers?",
        a: "Yes! 100% free. We charge a small service fee to ticket buyers (similar to any platform), but organisers pay ZERO platform fees. You keep every dollar you earn.",
    },
    {
        q: "How do you promote my event for free?",
        a: "Your event gets shared on our social media channels (100K+ followers), featured in newsletters, and promoted through our influencer network — all at no cost to you.",
    },
    {
        q: "How quickly do I get paid?",
        a: "Payouts are processed within 24-48 hours after your event ends. Funds are transferred directly to your bank account securely.",
    },
    {
        q: "What about payment security?",
        a: "We use bank-level encryption, PCI compliance, and partner with Stripe and PayPal. Your attendees' data is fully protected with SSL and fraud detection.",
    },
    {
        q: "Can I create multiple ticket types?",
        a: "Absolutely! Create unlimited ticket tiers — general admission, VIP, early bird, student discounts, group packages, and more. Total flexibility.",
    },
    {
        q: "Do you take a cut of my ticket sales?",
        a: "No. You receive 100% of your ticket price. We only charge ticket buyers a small service fee (they pay it, not you).",
    },
    {
        q: "How long does setup take?",
        a: "Most organisers have their event page live in under 5 minutes. Our interface is designed to be simple and intuitive — no tech skills needed.",
    },
    {
        q: "What if I need help?",
        a: "Our support team is available 24/7 via live chat, email, and phone. We'll help you every step of the way.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gradient-to-br from-violet-50 via-white to-orange-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-500">
                        Everything you need to know about listing your event
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-violet-600 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}