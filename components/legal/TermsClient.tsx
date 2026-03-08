"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Users, CreditCard, RefreshCw, AlertTriangle, Scale } from "lucide-react";

interface SectionProps {
    icon: any;
    title: string;
    children: React.ReactNode;
}

const Section = ({ icon: Icon, title, children }: SectionProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
    >
        <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-violet-600" />
            </div>
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">{title}</h2>
        </div>
        <div className="text-gray-600 leading-relaxed space-y-3 pl-12 font-medium">{children}</div>
    </motion.div>
);

export default function TermsClient() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-[#0A0F1C] pt-28 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                                <FileText className="w-5 h-5 text-violet-400" />
                            </div>
                            <span className="text-violet-400 text-sm font-black uppercase tracking-widest">Legal</span>
                        </div>
                        <h1 className="text-4xl font-black text-white mb-3 uppercase tracking-tight">Terms of Service</h1>
                        <p className="text-gray-400 font-medium">Last updated: March 2026</p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
                    <p className="text-gray-600 leading-relaxed mb-10 text-lg border-l-4 border-violet-500 pl-5 font-bold uppercase tracking-tight">
                        By using the Evntix platform, you agree to these Terms of Service.
                    </p>

                    <Section icon={FileText} title="1. Platform Overview">
                        <p>Evntix is an online ticketing platform connecting attendees with organisers. Our goal is to provide a seamless and secure experience for everyone.</p>
                    </Section>

                    <Section icon={Users} title="2. User Accounts">
                        <p>You must provides accurate information. Security of your account is your sole responsibility. Any activity under your account is attributed to you.</p>
                    </Section>

                    <Section icon={CreditCard} title="4. Service Fees">
                        <p>Evntix charges a service fee on top of ticket prices. All transactions are processed in <strong className="text-gray-900 font-black">GBP (£)</strong> currency.</p>
                    </Section>

                    <Section icon={RefreshCw} title="5. Refund Policy">
                        <p>Refunds depend on individual organiser policy. By default, we recommend a <strong className="text-violet-600 font-black underline decoration-violet-200 underline-offset-4">24h notice</strong> for a full refund where applicable.</p>
                    </Section>
                </div>
            </div>
        </div>
    );
}
