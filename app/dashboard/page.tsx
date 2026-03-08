"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, BarChart2, Ticket, Eye, Download, User } from "lucide-react";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { MOCK_EVENTS, MOCK_BOOKINGS } from "@/lib/mock-data";

export default function OrgDashboard() {
    const [expandedEvent, setExpandedEvent] = useState<string | null>(null);

    const events = MOCK_EVENTS;
    const bookings = MOCK_BOOKINGS;

    const getEventBookings = (eventId: string) => bookings.filter(b => b.event_id === eventId);
    const getTotalSold = (eventId: string) => getEventBookings(eventId).reduce((s, b) => s + (b.total_qty || 0), 0);
    const getTotalRevenue = (eventId: string) => getEventBookings(eventId).reduce((s, b) => s + (b.total_paid || 0), 0);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-[#0A0F1C] pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                            <p className="text-gray-400 mt-1">Mock view enabled</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href={createPageUrl("OrganiserProfile")}>
                                <Button variant="outline" className="text-white border-white/20">Profile</Button>
                            </Link>
                            <Button className="bg-violet-600">Create Event</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => {
                        const isExpanded = expandedEvent === event.id;
                        return (
                            <motion.div key={event.id} className="bg-white border rounded-2xl p-6 shadow-sm">
                                <div className="flex gap-4 mb-4">
                                    <img src={event.image_url} className="w-16 h-16 rounded-xl object-cover" />
                                    <div>
                                        <h3 className="font-bold">{event.title}</h3>
                                        <p className="text-sm text-gray-500">{format(new Date(event.date), "MMM d")}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="p-3 bg-gray-50 rounded-xl">
                                        <p className="text-xs text-gray-500 uppercase font-bold">Sold</p>
                                        <p className="text-xl font-bold">{getTotalSold(event.id)}</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-xl">
                                        <p className="text-xs text-gray-500 uppercase font-bold">Revenue</p>
                                        <p className="text-xl font-bold">£{getTotalRevenue(event.id)}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline" className="flex-1">Edit</Button>
                                    <Button size="sm" variant="ghost" onClick={() => setExpandedEvent(isExpanded ? null : event.id)}>Details</Button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
