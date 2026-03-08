"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function ContactClient() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", type: "general" });
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setTimeout(() => {
            toast.success("Message sent! We'll get back to you soon.");
            setForm({ name: "", email: "", subject: "", message: "", type: "general" });
            setIsSending(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen">
            <section className="bg-[#0A0F1C] pt-32 pb-24 sm:pt-40 sm:pb-28 text-center text-white/90">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight"
                    >
                        Get in Touch
                    </motion.h1>
                    <p className="text-lg text-gray-400 font-medium">Questions or feedback? We'd love to hear from you.</p>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10">
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                                <Mail className="w-6 h-6 text-violet-600" />
                            </div>
                            <h3 className="font-black text-gray-900 uppercase tracking-tight mb-1">Email Us</h3>
                            <p className="text-sm text-gray-500 font-medium tracking-tight">hello@evntix.com</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                                <MessageSquare className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-black text-gray-900 uppercase tracking-tight mb-1">Live Chat</h3>
                            <p className="text-sm text-gray-500 font-medium tracking-tight">Available Mon-Fri, 9am - 5pm</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="md:col-span-2 bg-white rounded-3xl border border-gray-100 p-8 space-y-6 shadow-2xl">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label className="text-sm font-black uppercase tracking-widest text-gray-500">Name *</Label>
                                <Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="h-12 rounded-xl border-gray-200 focus:ring-violet-500" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-black uppercase tracking-widest text-gray-500">Email *</Label>
                                <Input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="h-12 rounded-xl border-gray-200 focus:ring-violet-500" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-black uppercase tracking-widest text-gray-500">Message *</Label>
                            <Textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="h-36 rounded-2xl border-gray-200 focus:ring-violet-500 resize-none" />
                        </div>
                        <Button type="submit" disabled={isSending} size="lg" className="w-full h-14 bg-violet-600 hover:bg-violet-700 rounded-2xl text-base font-black uppercase tracking-widest shadow-xl shadow-violet-500/20 transition-all border-none">
                            {isSending ? "Sending..." : (
                                <span className="flex items-center gap-2">
                                    Send Message <Send className="w-4 h-4" />
                                </span>
                            )}
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
