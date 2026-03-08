"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "@/components/organisers/RegistrationModal";

export default function CTABanner() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-pink-500 rounded-[3rem] p-12 sm:p-20 text-center overflow-hidden shadow-2xl shadow-orange-500/20"
                    >
                        {/* Decorative orbs */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <p className="text-white/80 font-black text-[10px] tracking-[0.4em] uppercase mb-6">Launchpad</p>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                                Ready to Sell Your <br className="hidden sm:block" /> Next Idea?
                            </h2>
                            <p className="text-white/80 text-lg sm:text-xl font-medium mb-12 max-w-2xl mx-auto">
                                Join 10,000+ organisers who list for FREE and keep 100% of ticket sales. No hidden fees, ever.
                            </p>

                            <Button
                                size="lg"
                                onClick={() => setModalOpen(true)}
                                className="bg-white text-orange-600 hover:bg-gray-50 h-16 px-12 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-black/10"
                            >
                                Get Started Free
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
            <RegistrationModal open={modalOpen} onOpenChange={setModalOpen} />
        </>
    );
}