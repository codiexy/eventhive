"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Star, Users } from "lucide-react";
import { format, isToday } from "date-fns";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";

function EventCard({ event, index }: { event: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <Link href={createPageUrl("events/details") + `?id=${event.id}`}>
                <article className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 hover:-translate-y-2 h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                            src={event.image_url || "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop"}
                            alt={event.title || "Event Image"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                            {event.featured && (
                                <span className="bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-violet-600/30">
                                    Featured
                                </span>
                            )}
                            {event.date && isToday(new Date(event.date)) && (
                                <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg shadow-orange-500/30">
                                    New
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="p-6">
                        <header className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-violet-600 font-black text-[10px] tracking-widest uppercase">
                                <Calendar className="w-3 h-3" />
                                <time dateTime={event.date}>{event.date ? format(new Date(event.date), "MMM d, yyyy") : "TBA"}</time>
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                <Users className="w-3 h-3" />
                                800+ Going
                            </div>
                        </header>

                        <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight group-hover:text-violet-600 transition-colors">
                            {event.title}
                        </h3>

                        <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium mb-6">
                            <MapPin className="w-3.5 h-3.5 text-violet-400" />
                            {event.venue} · {event.city}
                        </div>

                        <footer className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Passes From</p>
                                <span className="text-xl font-black text-gray-900">
                                    {event.price_from === 0 ? "Free" : `£${event.price_from}.00`}
                                </span>
                            </div>
                            <div className="w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:bg-violet-600 group-hover:border-violet-600 transition-all duration-300">
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                        </footer>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}

export default function FeaturedEvents({ events, isLoading }: { events: any[]; isLoading: boolean }) {
    if (isLoading) {
        return (
            <section className="py-24 bg-gray-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-[2rem] aspect-[4/5] animate-pulse" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div>
                        <p className="text-violet-600 font-black text-[10px] tracking-[0.3em] uppercase mb-4">Upcoming</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-2">Featured Events</h2>
                        <div className="w-12 h-1.5 bg-violet-600 rounded-full" />
                    </div>
                    <Link href={createPageUrl("events")}>
                        <Button variant="outline" className="h-12 px-8 rounded-xl border-gray-200 text-gray-900 hover:bg-gray-50 font-bold transition-all group">
                            View All Events
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {events?.slice(0, 6).map((event, i) => (
                        <EventCard key={event.id} event={event} index={i} />
                    ))}
                </div>

                {(!events || events.length === 0) && (
                    <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
                        <p className="text-gray-400 font-black text-xl uppercase tracking-widest">More events dropping soon</p>
                    </div>
                )}
            </div>
        </section>
    );
}