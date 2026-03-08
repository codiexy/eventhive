import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { X, Plus, Trash2, Globe, MapPin, Clock, Image as ImageIcon, Upload, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const CATEGORIES = ["music", "nightlife", "comedy", "sports", "arts", "food_drink", "wellness", "business"];

const defaultTier = () => ({ name: "General Admission", description: "", price: "", quantity: "" });

export default function EventForm({ event, onClose, onSaved }: { event: any; onClose: () => void; onSaved: () => void }) {
    const isEdit = !!event;
    const [title, setTitle] = useState(event?.title || "");
    const [description, setDescription] = useState(event?.description || "");
    const [category, setCategory] = useState(event?.category || "music");
    const [date, setDate] = useState(event?.date ? new Date(event.date).toISOString().slice(0, 16) : "");
    const [venue, setVenue] = useState(event?.venue || "");
    const [city, setCity] = useState(event?.city || "");
    const [imageUrl, setImageUrl] = useState(event?.image_url || "");
    const [tiers, setTiers] = useState(event?.ticket_tiers?.length ? event.ticket_tiers : [defaultTier()]);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success(isEdit ? "Event updated (Mock)!" : "Event created (Mock)!");
        onSaved();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto shadow-2xl p-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">{isEdit ? "Edit Event" : "Create Event"}</h2>
                    <button onClick={onClose}><X /></button>
                </div>
                <form onSubmit={handleSave} className="space-y-6">
                    <div className="space-y-2">
                        <Label>Title</Label>
                        <Input value={title} onChange={e => setTitle(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                        <Label>Description</Label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} className="w-full border rounded-lg p-3 h-32" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Category</Label>
                            <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    {CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Date</Label>
                            <Input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} required />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2"><Label>Venue</Label><Input value={venue} onChange={e => setVenue(e.target.value)} /></div>
                        <div className="space-y-2"><Label>City</Label><Input value={city} onChange={e => setCity(e.target.value)} required /></div>
                    </div>
                    <div className="pt-4 border-t flex justify-end gap-3">
                        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit" className="bg-violet-600">Save Event</Button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}