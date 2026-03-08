"use client";

import React, { useState } from "react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { Ticket, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/layouts/Footer";

const navLinks = [
    { name: "Events", page: "events" },
    { name: "For Organisers", page: "for-organisers" },
    { name: "Dashboard", page: "dashboard" },
    { name: "Gate Scanner", page: "gate-scan" },
    { name: "About", page: "about" },
    { name: "Contact", page: "contact" },
    { name: "My Profile", page: "profile" },
];

interface LayoutProps {
    children: React.ReactNode;
    currentPageName?: string;
}

export default function Layout({ children, currentPageName }: LayoutProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        body { -webkit-font-smoothing: antialiased; }
      ` }} />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href={createPageUrl("home")} className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                                <Ticket className="w-4.5 h-4.5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Evntix</span>
                        </Link>

                        {/* Desktop nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.page}
                                    href={createPageUrl(link.page)}
                                    className={`text-sm font-medium transition-colors ${currentPageName === link.page
                                        ? "text-white"
                                        : "text-gray-400 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <Link href={createPageUrl("for-organisers")}>
                                <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-5">
                                    List Your Event
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileOpen && (
                    <div className="md:hidden bg-[#0A0F1C]/95 backdrop-blur-xl border-t border-white/5">
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.page}
                                    href={createPageUrl(link.page)}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${currentPageName === link.page
                                        ? "text-white bg-white/5"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-3">
                                <Link href={createPageUrl("for-organisers")} onClick={() => setMobileOpen(false)}>
                                    <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-lg">
                                        List Your Event
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Page content */}
            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    );
}
