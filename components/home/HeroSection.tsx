"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, ChevronDown, Sparkles, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import RegistrationModal from "@/components/organisers/RegistrationModal";

export default function HeroSection() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0F1C]">
            {/* Ambient Background with overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop"
                    alt="Event Background"
                    className="w-full h-full object-cover opacity-20 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/40 via-[#0A0F1C] to-[#0A0F1C]" />
            </div>

            {/* Glowing Lights */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[45rem] h-[45rem] bg-violet-600/10 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-orange-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-16 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">

                {/* Left: Text and Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-400 text-xs font-bold tracking-wider uppercase mb-8"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        Live Events & Experiences
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight mb-8">
                        Find Events You Love. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400">
                            Sell Tickets for Free.
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
                        The modern ticketing platform for music, comedy, festivals and more. List your event in minutes with zero platform fees.
                    </p>

                    {/* Search Bar */}
                    <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-1.5 rounded-[2rem] mb-10 max-w-2xl shadow-2xl flex flex-col md:flex-row items-center gap-1">
                        <div className="flex-1 flex items-center px-5 py-3 gap-3 w-full border-b md:border-b-0 md:border-r border-white/10 group">
                            <Search className="w-5 h-5 text-violet-500 group-hover:scale-110 transition-transform" />
                            <input
                                type="text"
                                placeholder="Search for events"
                                className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-gray-500 font-medium"
                            />
                        </div>
                        <div className="flex-1 flex items-center px-5 py-3 gap-3 w-full border-b md:border-b-0 md:border-r border-white/10 cursor-pointer group hover:bg-white/5 transition-colors rounded-xl md:rounded-none">
                            <span className="text-sm text-gray-400 group-hover:text-white transition-colors flex-1 font-medium">Choose Category</span>
                            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-violet-400 transition-colors" />
                        </div>
                        <div className="flex-1 flex items-center px-5 py-3 gap-3 w-full cursor-pointer group hover:bg-white/5 transition-colors rounded-xl md:rounded-r-3xl">
                            <MapPin className="w-4 h-4 text-gray-500 group-hover:text-violet-400 transition-colors" />
                            <span className="text-sm text-gray-400 group-hover:text-white transition-colors flex-1 font-medium">Choose City</span>
                            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-violet-400 transition-colors" />
                        </div>
                        <div className="hidden md:block p-1">
                            <Button className="bg-violet-600 hover:bg-violet-700 h-10 w-10 p-0 rounded-2xl flex items-center justify-center">
                                <Search className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link href={createPageUrl("events")}>
                            <Button variant="outline" size="lg" className="h-14 px-10 rounded-2xl border-white/10 text-white hover:bg-white/5 text-base font-bold bg-transparent">
                                Explore Events
                            </Button>
                        </Link>
                        <Button
                            onClick={() => setModalOpen(true)}
                            size="lg"
                            className="h-14 px-10 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 transition-opacity text-white text-base font-bold shadow-xl shadow-orange-500/20 border-none"
                        >
                            List Your Event — It's Free
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0F1C] bg-gray-800 overflow-hidden shadow-lg shadow-black/40">
                                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt={`User ${i} avatar`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-sm">
                            <p className="text-white font-bold">10k+ <span className="text-gray-400 font-medium ml-1">People Joined last week</span></p>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Card */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <div className="relative group w-full max-w-sm">
                        {/* Glow effect */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 to-pink-500 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

                        <article className="relative bg-white rounded-[2.5rem] p-3 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                                <img
                                    src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop"
                                    alt="Elite Music & Arts Festival"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider text-violet-600 border border-violet-100 shadow-sm">
                                        Featured
                                    </span>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                    <h3 className="text-2xl font-black text-white mb-2 leading-tight">Elite Music & <br />Arts Festival</h3>
                                    <div className="flex items-center gap-2 text-white/70 text-sm font-medium mb-4">
                                        <MapPin className="w-3.5 h-3.5 text-violet-400" />
                                        <span>London Stadium · Mar 24</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
                                                <Plus className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-xs text-white/80 font-bold uppercase tracking-widest leading-none">Book Now</span>
                                        </div>
                                        <span className="text-violet-400 font-black text-xl">£59.00</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </motion.div>
            </div>

            <RegistrationModal open={modalOpen} onOpenChange={setModalOpen} />
        </section>
    );
}