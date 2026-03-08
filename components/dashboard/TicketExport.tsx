import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, X, Search, Users, PoundSterling, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { MOCK_BOOKINGS } from "@/lib/mock-data";

export default function TicketExport({ event, onClose }: { event: any; onClose: () => void }) {
    const [search, setSearch] = useState("");
    const bookings = MOCK_BOOKINGS.filter(b => b.event_id === event.id);

    const handleExport = () => {
        toast.success("Exporting tickets (Mock)...");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col p-8">
                <div className="flex justify-between mb-8">
                    <h2 className="text-2xl font-bold">Ticket Sales</h2>
                    <button onClick={onClose}><X /></button>
                </div>
                <div className="mb-8">
                    <Button onClick={handleExport} className="bg-violet-600">Export CSV ({bookings.length})</Button>
                </div>
                <div className="overflow-y-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b">
                                <th className="pb-4">Buyer</th>
                                <th className="pb-4">Email</th>
                                <th className="pb-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(b => (
                                <tr key={b.id} className="border-b last:border-0">
                                    <td className="py-4">{b.attendee_name}</td>
                                    <td className="py-4 font-mono text-sm">{b.attendee_email}</td>
                                    <td className="py-4"><Badge>{b.status}</Badge></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}

import { toast } from "sonner";