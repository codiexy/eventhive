"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Mail, UserCheck } from "lucide-react";

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

export default function PrivacyClient() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-[#0A0F1C] pt-28 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-violet-400" />
                            </div>
                            <span className="text-violet-400 text-sm font-black uppercase tracking-widest">Legal</span>
                        </div>
                        <h1 className="text-4xl font-black text-white mb-3 uppercase tracking-tight">Privacy Policy</h1>
                        <p className="text-gray-400 font-medium">Last updated: March 2026</p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
                    <p className="text-gray-600 leading-relaxed mb-10 text-lg border-l-4 border-violet-500 pl-5 font-bold uppercase tracking-tight">
                        At Evntix, we are committed to protecting your personal data and respecting your privacy.
                    </p>

                    <Section icon={Database} title="1. Information We Collect">
                        <p><strong className="text-gray-900 tracking-tight">Account Information:</strong> Name, email, and profile details.</p>
                        <p><strong className="text-gray-900 tracking-tight">Booking Information:</strong> Name, email, and phone for ticket delivery.</p>
                        <p><strong className="text-gray-900 tracking-tight">Payment Information:</strong> Handled by Stripe. We do not store card details.</p>
                    </Section>

                    <Section icon={Eye} title="2. How We Use Your Information">
                        <p>To process tickets, manage check-ins, and improve our services. We do <strong className="text-violet-600 underline decoration-violet-200 underline-offset-4">not</strong> sell your data.</p>
                    </Section>

                    <Section icon={Lock} title="3. Stripe Payment Processing">
                        <p>Payments are submit directly to Stripe. PCI DSS Level 1 certified security.</p>
                    </Section>

                    <Section icon={UserCheck} title="4. Your Rights (GDPR)">
                        <p>You have the right to access, rectification, erasure, and portability of your data.</p>
                    </Section>
                </div>
            </div>
        </div>
    );
}
