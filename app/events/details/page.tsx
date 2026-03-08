"use client";

import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import {
    Calendar, MapPin, Shield, Tag,
    ArrowLeft, Plus, Minus, Facebook, Instagram, Link as LinkIcon,
    Copy, Check, Ticket, Music, AlertTriangle, RefreshCw, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format, isPast } from "date-fns";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createPageUrl } from "@/utils";
import { toast } from "sonner";
import { MOCK_EVENTS, MOCK_PROMO_CODES } from "@/lib/mock-data";

function EventDetailsContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const eventId = searchParams.get("id");

    const [quantities, setQuantities] = useState<Record<string, number>>({});
    const [promoCode, setPromoCode] = useState("");
    const [promoInput, setPromoInput] = useState("");
    const [promoDiscount, setPromoDiscount] = useState(0);
    const [copied, setCopied] = useState(false);

    const event = MOCK_EVENTS.find((e: any) => e.id === eventId);

    const applyPromo = () => {
        const input = promoInput.trim().toUpperCase();
        const found = MOCK_PROMO_CODES.find((p: any) => p.code === input && p.active);
        if (found) {
            setPromoCode(found.code);
            setPromoDiscount(found.discount_pct ? found.discount_pct / 100 : 0);
            toast.success("Promo code applied!");
        } else {
            toast.error("Invalid promo code");
        }
    };

    const setQty = (tierId: string, delta: number) => {
        setQuantities(prev => ({ ...prev, [tierId]: Math.max(0, (prev[tierId] || 0) + delta) }));
    };

    if (!event) return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
            <p className="text-xl text-gray-400">Event not found</p>
            <Link href={createPageUrl("Events")}><Button variant="outline">Browse Events</Button></Link>
        </div>
    );

    const lineItems = [
        { name: "General Admission", price: event.price_from, qty: quantities["General Admission"] || 0 }
    ].filter(t => t.qty > 0);

    const totalQty = lineItems.reduce((s, l) => s + l.qty, 0);
    const subtotal = lineItems.reduce((s, l) => s + (l.price * l.qty), 0);
    const discountAmount = subtotal * promoDiscount;
    const total = Math.max(0, subtotal - discountAmount);

    const isEnded = isPast(new Date(event.date));

    const handleCheckout = () => {
        if (totalQty === 0) { toast.error("Please select at least one ticket"); return; }
        const ticketsParam = encodeURIComponent(JSON.stringify(lineItems));
        router.push(createPageUrl("Checkout") + `?eventId=${eventId}&tickets=${ticketsParam}&total=${total.toFixed(2)}&discount=${promoDiscount}&promoCode=${promoCode}`);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative h-[50vh] overflow-hidden bg-gray-900">
                <img src={event.image_url} alt={event.title} className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-6 left-6 z-10">
                    <Link href={createPageUrl("Events")}><Button size="sm" variant="secondary"><ArrowLeft className="w-4 h-4 mr-2" />Back</Button></Link>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
                    <Badge className="bg-violet-500 mb-3 capitalize">{event.category}</Badge>
                    <h1 className="text-4xl font-bold text-white mb-2">{event.title}</h1>
                    <p className="text-gray-300">at {event.venue}, {event.city}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white rounded-2xl p-6 border shadow-sm">
                        <h2 className="text-xl font-bold mb-6">Details</h2>
                        <div className="flex items-start gap-4 mb-4">
                            <Calendar className="text-violet-600" />
                            <div>
                                <p className="font-bold">{format(new Date(event.date), "EEEE, MMMM d, yyyy")}</p>
                                <p className="text-gray-500">{format(new Date(event.date), "h:mm a")}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="text-orange-600" />
                            <div>
                                <p className="font-bold">{event.venue}</p>
                                <p className="text-gray-500">{event.city}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border shadow-sm">
                        <h2 className="text-xl font-bold mb-4">About</h2>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl p-6 border shadow-sm sticky top-20">
                        <h3 className="font-bold mb-4">Tickets</h3>
                        <div className="p-4 bg-gray-50 rounded-xl mb-6">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-bold">General Admission</p>
                                    <p className="text-xs text-violet-600 font-bold">£{event.price_from.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button onClick={() => setQty("General Admission", -1)} disabled={(quantities["General Admission"] || 0) === 0} className="w-8 h-8 rounded-full border border-gray-300">-</button>
                                    <span>{quantities["General Admission"] || 0}</span>
                                    <button onClick={() => setQty("General Admission", 1)} className="w-8 h-8 rounded-full border border-gray-300">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="mb-6">
                            <Label className="text-xs font-bold uppercase text-gray-400 block mb-2">Promo Code</Label>
                            <div className="flex gap-2">
                                <Input value={promoInput} onChange={e => setPromoInput(e.target.value.toUpperCase())} placeholder="ENTER CODE" className="uppercase" />
                                <Button variant="outline" onClick={applyPromo}>Apply</Button>
                            </div>
                            {promoCode && <p className="text-xs text-green-600 mt-1 font-bold">Code applied!</p>}
                        </div>
                        <Button size="lg" onClick={handleCheckout} className="w-full bg-violet-600 h-14 text-lg">
                            {totalQty > 0 ? `Checkout — £${total.toFixed(2)}` : "Select Tickets"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function EventDetailsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <EventDetailsContent />
        </Suspense>
    );
}
