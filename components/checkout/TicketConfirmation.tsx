import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, QrCode, Check, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";

interface TicketConfirmationProps {
    bookingRef: string;
    form: {
        firstName: string;
        lastName: string;
        email: string;
        phone?: string;
    };
    event: any;
    eventId: string;
    lineItems: any[];
    total: number;
    ticketFee: number;
    stripeCharge: number;
    promoDiscount: number;
    promoCode: string;
    discountAmount: number;
}

export default function TicketConfirmation({
    bookingRef,
    form,
    event,
    eventId,
    lineItems,
    total,
    ticketFee,
    stripeCharge,
    promoDiscount,
    promoCode,
    discountAmount
}: TicketConfirmationProps) {
    const qrData = encodeURIComponent(bookingRef);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrData}&bgcolor=ffffff&color=6d28d9&margin=10`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto"
        >
            {/* Ticket graphic */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">

                {/* Top: green confirmed header */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 px-8 py-8 text-center relative">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.3) 10px, rgba(255,255,255,.3) 11px)"
                    }} />
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                        <Check className="w-9 h-9 text-green-600" />
                    </motion.div>
                    <h2 className="text-2xl font-black text-white">Booking Confirmed!</h2>
                    <p className="text-green-100 mt-1 text-sm">Get ready for an amazing experience</p>
                </div>

                {/* Serrated tear line */}
                <div className="relative bg-white h-6 flex items-center overflow-hidden">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gray-50 -translate-x-3 border border-gray-100" />
                    <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-6" />
                    <div className="absolute right-0 w-6 h-6 rounded-full bg-gray-50 translate-x-3 border border-gray-100" />
                </div>

                {/* Event info */}
                <div className="px-8 py-5">
                    {event?.image_url && (
                        <img src={event.image_url} alt={event.title} className="w-full h-32 object-cover rounded-xl mb-4" />
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event?.title}</h3>
                    <div className="flex flex-col gap-1.5 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-violet-500" />{event?.date ? format(new Date(event.date), "EEEE, MMMM d, yyyy · h:mm a") : "Date TBA"}</span>
                        <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-violet-500" />{[event?.venue, event?.city].filter(Boolean).join(", ")}</span>
                    </div>

                    {/* Ticket breakdown */}
                    <div className="bg-gray-50 rounded-xl p-4 text-sm space-y-2 mb-4">
                        {lineItems.map(l => (
                            <div key={l.id} className="flex justify-between">
                                <span className="text-gray-600">{l.label} × {l.qty}</span>
                                <span className="font-semibold">£{(l.unitPrice * l.qty).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="flex justify-between text-gray-500">
                            <span>Fees</span><span>£{(ticketFee + stripeCharge).toFixed(2)}</span>
                        </div>
                        {promoDiscount > 0 && (
                            <div className="flex justify-between text-green-600">
                                <span>Promo ({promoCode})</span><span>-£{discountAmount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-gray-900">
                            <span>Total Paid</span>
                            <span className="text-violet-600">£{total.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Attendee */}
                    <div className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold text-gray-900">{form.firstName} {form.lastName}</span> · {form.email}
                    </div>
                </div>

                {/* Tear line */}
                <div className="relative bg-white h-6 flex items-center overflow-hidden">
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gray-50 -translate-x-3 border border-gray-100" />
                    <div className="flex-1 border-t-2 border-dashed border-gray-200 mx-6" />
                    <div className="absolute right-0 w-6 h-6 rounded-full bg-gray-50 translate-x-3 border border-gray-100" />
                </div>

                {/* QR Code section */}
                <div className="px-8 py-6 text-center bg-violet-50">
                    <p className="text-violet-700 font-semibold text-sm mb-4 flex items-center justify-center gap-2">
                        <QrCode className="w-4 h-4" />Scan at Entry Gate
                    </p>
                    <img
                        src={qrUrl}
                        alt="Entry QR Code"
                        className="w-44 h-44 rounded-2xl border-4 border-white shadow-lg mx-auto"
                    />
                    <p className="text-violet-600 font-mono font-bold text-lg mt-4">{bookingRef}</p>
                    <p className="text-violet-400 text-xs mt-1">Present this code at the door</p>
                </div>

                {/* Bottom strip */}
                <div className="bg-gray-900 px-8 py-4 flex items-center justify-between">
                    <span className="text-white/50 text-xs">🎟️ Evntix · Official Ticket</span>
                    <span className="text-white/50 text-xs font-mono">{bookingRef}</span>
                </div>
            </div>

            {/* Info */}
            <div className="mt-5 bg-white rounded-2xl p-4 border border-gray-100 text-sm space-y-2">
                <p className="flex items-center gap-2 text-gray-600"><Mail className="w-4 h-4 text-violet-500" />Confirmation sent to <strong>{form.email}</strong></p>
                <p className="flex items-center gap-2 text-gray-600"><Lock className="w-4 h-4 text-green-500" />Free cancellation up to 24h before event</p>
            </div>

            <div className="flex gap-3 mt-5">
                <Link href={createPageUrl("events")} className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">Browse Events</Button>
                </Link>
                <Link href={createPageUrl("home")} className="flex-1">
                    <Button size="lg" className="w-full bg-violet-600 hover:bg-violet-700 text-white">Home</Button>
                </Link>
            </div>
        </motion.div>
    );
}