"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, RefreshCw, XCircle, CheckCircle, Ticket, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { toast } from "sonner";
import { MOCK_BOOKINGS, MOCK_EVENTS } from "@/lib/mock-data";

export default function GateScanPage() {
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleScan = () => {
        setScanning(true);
        setTimeout(() => {
            const booking = MOCK_BOOKINGS[0];
            const event = MOCK_EVENTS.find(e => e.id === booking.event_id);
            setResult({ ...booking, event_title: event?.title });
            setScanning(false);
            toast.success("Ticket Validated!");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white">
            <div className="p-6">
                <Link href={createPageUrl("OrgDashboard")} className="inline-flex items-center gap-2 text-gray-400 mb-8"><ArrowLeft className="w-4 h-4" />Exit Scanner</Link>
                <div className="max-w-md mx-auto text-center">
                    <h1 className="text-2xl font-bold mb-2">Gate Scanner</h1>
                    <p className="text-gray-400 mb-8">Scan QR codes to validate tickets</p>

                    <div className="aspect-square bg-gray-900 rounded-3xl border-2 border-white/10 flex items-center justify-center relative overflow-hidden mb-8">
                        {scanning ? (
                            <div className="text-center">
                                <RefreshCw className="w-12 h-12 text-violet-500 animate-spin mx-auto mb-4" />
                                <p>Scanning...</p>
                            </div>
                        ) : (
                            <Camera className="w-16 h-16 text-gray-700" />
                        )}
                        <div className="absolute inset-0 border-2 border-violet-500/20 m-12 rounded-2xl" />
                    </div>

                    {!result && !scanning && (
                        <Button onClick={handleScan} size="lg" className="w-full bg-violet-600 h-16 text-xl rounded-2xl">Start Scanning</Button>
                    )}

                    {result && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white/5 border border-white/10 p-6 rounded-3xl text-left">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="text-green-500 w-8 h-8" />
                                <div>
                                    <p className="text-xs text-green-500 font-bold uppercase">Valid Ticket</p>
                                    <p className="font-bold">{result.booking_ref}</p>
                                </div>
                            </div>
                            <div className="space-y-3 pt-4 border-t border-white/5">
                                <div><p className="text-xs text-gray-500 uppercase">Attendee</p><p className="font-medium">{result.attendee_name}</p></div>
                                <div><p className="text-xs text-gray-500 uppercase">Event</p><p className="font-medium">{result.event_title}</p></div>
                            </div>
                            <Button onClick={() => setResult(null)} className="w-full mt-6 bg-white/10 text-white">Scan Next</Button>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
