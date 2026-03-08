"use client";

import React, { useState, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, MapPin, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { useSearchParams } from "next/navigation";
import { MOCK_EVENTS } from "@/lib/mock-data";

const CATEGORIES = [
    { value: "all", label: "All Categories" },
    { value: "music", label: "Music" },
    { value: "nightlife", label: "Nightlife" },
    { value: "comedy", label: "Comedy" },
    { value: "sports", label: "Sports" },
    { value: "arts", label: "Arts" },
    { value: "food_drink", label: "Food & Drink" },
    { value: "wellness", label: "Wellness" },
    { value: "business", label: "Business" },
];

function EventsContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "all";

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState(initialCategory);
    const [city, setCity] = useState("all");

    const events = MOCK_EVENTS;

    const cities = useMemo(() => {
        const set = new Set(events.map((e: any) => e.city).filter(Boolean));
        return ["all", ...Array.from(set)];
    }, [events]);

    const filtered = useMemo(() => {
        return events.filter((e: any) => {
            const matchSearch = !search || e.title?.toLowerCase().includes(search.toLowerCase()) || e.venue?.toLowerCase().includes(search.toLowerCase());
            const matchCategory = category === "all" || e.category === category;
            const matchCity = city === "all" || e.city === city;
            return matchSearch && matchCategory && matchCity;
        });
    }, [events, search, category, city]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-[#0A0F1C] pt-28 pb-16 sm:pt-36 sm:pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl sm:text-5xl font-bold text-white mb-4">Explore Events</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-400 text-lg mb-8">Find your next unforgettable experience</motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input placeholder="Search events, venues..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-12 h-12 bg-white/10 border-white/10 text-white placeholder:text-gray-500 rounded-xl" />
                        </div>
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className="w-full sm:w-48 h-12 bg-white/10 border-white/10 text-white rounded-xl"><SelectValue /></SelectTrigger>
                            <SelectContent>
                                {CATEGORIES.map((c) => (<SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>))}
                            </SelectContent>
                        </Select>
                        <Select value={city} onValueChange={setCity}>
                            <SelectTrigger className="w-full sm:w-48 h-12 bg-white/10 border-white/10 text-white rounded-xl"><SelectValue placeholder="All Cities" /></SelectTrigger>
                            <SelectContent>
                                {cities.map((c: any) => (<SelectItem key={c} value={c}>{c === "all" ? "All Cities" : c}</SelectItem>))}
                            </SelectContent>
                        </Select>
                    </motion.div>
                </div>
            </div>

            {/* Results */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <p className="text-sm text-gray-500 mb-6">{filtered.length} events found</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((event: any, i: number) => (
                            <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                                <Link href={createPageUrl("EventDetails") + `?id=${event.id}`}>
                                    <article className="group rounded-2xl overflow-hidden bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 shadow-sm">
                                        <div className="relative overflow-hidden aspect-[16/10]">
                                            <img src={event.image_url} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            {event.featured && <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</div>}
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                                                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{format(new Date(event.date), "MMM d, yyyy")}</span>
                                                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{event.city}</span>
                                            </div>
                                            <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-violet-600 transition-colors uppercase tracking-tight">{event.title}</h3>
                                            <p className="text-sm text-gray-500 mb-3">{event.venue}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-violet-600 font-semibold">{event.price_from === 0 ? "Free" : `From £${event.price_from}`}</span>
                                                <span className="text-xs text-gray-400 capitalize bg-gray-100 px-2 py-1 rounded-full">{event.category}</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default function EventsClient() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Events...</div>}>
            <EventsContent />
        </Suspense>
    );
}
