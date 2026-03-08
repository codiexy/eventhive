"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, Zap, Shield, Headphones, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Comparison from "@/components/organisers/Comparison";
import CaseStudies from "@/components/organisers/CaseStudies";
import FAQ from "@/components/organisers/FAQ";
import CTABanner from "@/components/home/CTABanner";
import Testimonials from "@/components/home/Testimonials";
import OrganiserBenefits from "@/components/home/OrganiserBenefits";

const features = [
    { icon: Globe, title: "Custom Event Pages", desc: "Beautiful, branded event pages that convert visitors to attendees." },
    { icon: BarChart3, title: "Real-Time Analytics", desc: "Track sales, views, and revenue in a live dashboard." },
    { icon: CreditCard, title: "Instant Payments", desc: "Receive payouts directly to your bank within 24-48 hours." },
];

export default function ForOrganisersClient() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setTimeout(() => {
            toast.success("Thanks! We'll be in touch soon.");
            setForm({ name: "", email: "", message: "" });
            setIsSending(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen">
            <section className="bg-[#0A0F1C] pt-32 pb-24 text-center text-white/90">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-7xl font-black text-white mb-6 uppercase tracking-tight"
                    >
                        List for <span className="text-orange-400 underline decoration-violet-500 underline-offset-8">FREE</span>.
                    </motion.h1>
                    <p className="text-xl text-gray-400 mb-10 font-medium max-w-2xl mx-auto">Zero platform fees. Instant payouts. We only charge ticket buyers. Join thousands of successful organisers today.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button
                            size="lg"
                            className="bg-violet-600 hover:bg-violet-700 h-16 px-10 rounded-2xl text-base font-black uppercase tracking-widest shadow-xl shadow-violet-500/20 transition-all border-none"
                            onClick={() => document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            Get Started — It's Free
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-3 gap-8">
                    {features.map((f) => (
                        <div key={f.title} className="p-10 border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center mb-6">
                                <f.icon className="w-7 h-7 text-violet-600" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight">{f.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <OrganiserBenefits />
            <CTABanner />
            <Comparison />
            <CaseStudies />
            <Testimonials />
            <FAQ />

            <section id="register-form" className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tight">Ready to get <span className="text-violet-600">started</span>?</h2>
                    <form onSubmit={handleSubmit} className="bg-white border border-gray-100 p-10 rounded-[2.5rem] shadow-2xl space-y-8">
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <Label className="text-sm font-black uppercase tracking-widest text-gray-500">Name *</Label>
                                <Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="h-14 rounded-2xl border-gray-200 focus:ring-violet-500" />
                            </div>
                            <div className="space-y-3">
                                <Label className="text-sm font-black uppercase tracking-widest text-gray-500">Email *</Label>
                                <Input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="h-14 rounded-2xl border-gray-200 focus:ring-violet-500" />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Label className="text-sm font-black uppercase tracking-widest text-gray-500">Event Description</Label>
                            <Textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your event..." className="h-40 rounded-3xl border-gray-200 focus:ring-violet-500 resize-none" />
                        </div>
                        <Button type="submit" disabled={isSending} size="lg" className="w-full h-16 bg-violet-600 hover:bg-violet-700 rounded-2xl text-base font-black uppercase tracking-widest shadow-xl shadow-violet-500/20 transition-all border-none">
                            {isSending ? "Submitting..." : "Register Now"}
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
