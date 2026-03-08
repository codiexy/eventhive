"use client";

import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { Ticket } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#0A0F1C] border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                                <Ticket className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Evntix</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Your gateway to unforgettable live experiences. Discover, book, and enjoy.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Discover</h4>
                        <ul className="space-y-3">
                            <li><Link href={createPageUrl("events")} className="text-gray-400 hover:text-white transition-colors text-sm">All Events</Link></li>
                            <li><Link href={createPageUrl("events") + "?category=music"} className="text-gray-400 hover:text-white transition-colors text-sm">Music</Link></li>
                            <li><Link href={createPageUrl("events") + "?category=nightlife"} className="text-gray-400 hover:text-white transition-colors text-sm">Nightlife</Link></li>
                            <li><Link href={createPageUrl("events") + "?category=comedy"} className="text-gray-400 hover:text-white transition-colors text-sm">Comedy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Organisers</h4>
                        <ul className="space-y-3">
                            <li><Link href={createPageUrl("for-organisers")} className="text-gray-400 hover:text-white transition-colors text-sm">List Your Event</Link></li>
                            <li><Link href={createPageUrl("for-organisers")} className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
                            <li><Link href={createPageUrl("for-organisers")} className="text-gray-400 hover:text-white transition-colors text-sm">Features</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href={createPageUrl("about")} className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href={createPageUrl("contact")} className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><Link href={createPageUrl("privacy-policy")} className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href={createPageUrl("terms-of-service")} className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2026 Evntix. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href={createPageUrl("privacy-policy")} className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href={createPageUrl("terms-of-service")} className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}