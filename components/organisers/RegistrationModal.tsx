import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";

export default function RegistrationModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast.success("Thanks! We'll be in touch within 24 hours.");
            setForm({ name: "", email: "", message: "" });
            setIsSubmitting(false);
            onOpenChange(false);
        }, 1000);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl">
                        <Sparkles className="w-6 h-6 text-violet-600" />
                        Start Selling Tickets
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2"><Label>Name *</Label><Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
                        <div className="space-y-2"><Label>Email *</Label><Input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
                    </div>
                    <div className="space-y-2"><Label>Message</Label><Textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></div>
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-violet-600 h-14">
                        {isSubmitting ? "Submitting..." : "Get Started Free"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}