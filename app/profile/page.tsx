"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { createPageUrl } from "@/utils";
import { toast } from "sonner";
import { MOCK_ORG_PROFILE } from "@/lib/mock-data";

export default function OrganiserProfilePage() {
    const [form, setForm] = useState({
        business_name: MOCK_ORG_PROFILE.business_name,
        description: MOCK_ORG_PROFILE.description,
        logo_url: MOCK_ORG_PROFILE.logo_url,
        contact_email: MOCK_ORG_PROFILE.contact_email,
        website: MOCK_ORG_PROFILE.website,
    });

    const [saved, setSaved] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSaved(true);
        toast.success("Profile saved!");
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-[#0A0F1C] pt-24 pb-12">
                <div className="max-w-3xl mx-auto px-4">
                    <Link href={createPageUrl("OrgDashboard")} className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-sm">
                        <ArrowLeft className="w-4 h-4" />Back to Dashboard
                    </Link>
                    <h1 className="text-3xl font-bold text-white">Organiser Profile</h1>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-8">
                <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="bg-white border rounded-2xl shadow-sm overflow-hidden">
                    <div className="p-8 border-b">
                        <h2 className="text-lg font-bold mb-6">Logo</h2>
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 rounded-2xl border flex items-center justify-center bg-gray-50 overflow-hidden">
                                {form.logo_url ? <img src={form.logo_url} className="w-full h-full object-cover" /> : <Building2 className="text-gray-300 w-10 h-10" />}
                            </div>
                            <Button variant="outline" size="sm">Change Logo</Button>
                        </div>
                    </div>

                    <div className="p-8 space-y-6">
                        <div className="space-y-2">
                            <Label>Business Name</Label>
                            <Input value={form.business_name} onChange={e => setForm({ ...form, business_name: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full border rounded-lg p-3 h-32" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>Contact Email</Label>
                                <Input value={form.contact_email} onChange={e => setForm({ ...form, contact_email: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                                <Label>Website</Label>
                                <Input value={form.website} onChange={e => setForm({ ...form, website: e.target.value })} />
                            </div>
                        </div>
                    </div>

                    <div className="p-8 bg-gray-50 border-t flex justify-end">
                        <Button type="submit" className="bg-violet-600">
                            {saved ? "Saved ✓" : "Save Changes"}
                        </Button>
                    </div>
                </motion.form>
            </div>
        </div>
    );
}
