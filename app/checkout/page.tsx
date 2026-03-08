"use client";

import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, Lock, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";
import { toast } from "sonner";
import TicketConfirmation from "@/components/checkout/TicketConfirmation";
import { MOCK_EVENTS } from "@/lib/mock-data";

function CheckoutContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const eventId = searchParams.get("eventId");
    const totalParam = parseFloat(searchParams.get("total") || "0");

    let lineItems: any[] = [];
    try {
        lineItems = JSON.parse(decodeURIComponent(searchParams.get("tickets") || "[]"));
    } catch { }

    const [confirmed, setConfirmed] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [bookingRef, setBookingRef] = useState("");
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });

    const event = MOCK_EVENTS.find((e: any) => e.id === eventId);

    const totalQty = lineItems.reduce((s, l) => s + l.qty, 0);
    const total = totalParam;

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            const ref = "EVT-" + Math.random().toString(36).substring(2, 9).toUpperCase();
            setBookingRef(ref);
            setConfirmed(true);
            toast.success("Booking confirmed!");
            setIsProcessing(false);
        }, 1500);
    };

    if (!event) return <div className="min-h-screen flex items-center justify-center text-gray-400">Event not found</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {!confirmed && (
                    <Link href={createPageUrl("EventDetails") + `?id=${eventId}`} className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 mb-8">
                        <ArrowLeft className="w-4 h-4" />Back to event
                    </Link>
                )}

                {confirmed ? (
                    <TicketConfirmation
                        bookingRef={bookingRef}
                        form={form}
                        event={event}
                        eventId={eventId as string}
                        lineItems={lineItems}
                        total={total}
                        ticketFee={0}
                        stripeCharge={0}
                        promoDiscount={0}
                        promoCode=""
                        discountAmount={0}
                    />
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-8 border border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Booking</h2>
                                <form onSubmit={handlePayment} className="space-y-6">
                                    <div>
                                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Your Details</h3>
                                        <div className="space-y-4">
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div>
                                                    <Label className="mb-2 block">First Name *</Label>
                                                    <Input required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="John" />
                                                </div>
                                                <div>
                                                    <Label className="mb-2 block">Last Name *</Label>
                                                    <Input required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Smith" />
                                                </div>
                                            </div>
                                            <div>
                                                <Label className="mb-2 block">Email *</Label>
                                                <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <Separator />
                                    <div>
                                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Payment</h3>
                                        <p className="text-xs text-gray-400 mb-4 font-mono">Test payment enabled.</p>
                                    </div>
                                    <Button type="submit" size="lg" disabled={isProcessing} className="w-full bg-violet-600 h-14 text-lg">
                                        {isProcessing ? "Processing..." : `Confirm & Pay £${total.toFixed(2)}`}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 sticky top-24">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                                <div className="space-y-4">
                                    <h4 className="font-semibold">{event.title}</h4>
                                    <p className="text-sm text-gray-500">{format(new Date(event.date), "MMM d, yyyy")}</p>
                                    <Separator />
                                    {lineItems.map((l: any) => (
                                        <div key={l.id} className="flex justify-between text-sm">
                                            <span>{l.name || l.label} × {l.qty}</span>
                                            <span>£{(l.price || l.unitPrice * l.qty).toFixed(2)}</span>
                                        </div>
                                    ))}
                                    <div className="flex justify-between text-lg font-bold pt-4 border-t">
                                        <span>Total</span>
                                        <span>£{total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Checkout...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}
