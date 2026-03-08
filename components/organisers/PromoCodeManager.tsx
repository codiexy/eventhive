import React, { useState } from "react";
import { Plus, Trash2, Tag, Percent, PoundSterling, ToggleLeft, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { MOCK_PROMO_CODES } from "@/lib/mock-data";

export default function PromoCodeManager() {
    const [promos, setPromos] = useState(MOCK_PROMO_CODES);
    const [showForm, setShowForm] = useState(false);
    const [code, setCode] = useState("");

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Promo code created (Mock)!");
        setPromos([...promos, { id: Math.random().toString(), code: code.toUpperCase(), active: true, discount_pct: 0 } as any]);
        setShowForm(false);
    };

    return (
        <div className="bg-white rounded-2xl border p-6">
            <div className="flex justify-between mb-6">
                <h3 className="font-bold">Promo Codes</h3>
                <Button onClick={() => setShowForm(!showForm)}>New Code</Button>
            </div>
            {showForm && (
                <form onSubmit={handleCreate} className="mb-6 p-4 bg-gray-50 rounded-xl space-y-4">
                    <Input value={code} onChange={e => setCode(e.target.value)} placeholder="SAVE20" />
                    <Button type="submit">Create</Button>
                </form>
            )}
            <div className="space-y-2">
                {promos.map(p => (
                    <div key={p.id} className="flex justify-between items-center p-3 border rounded-xl">
                        <span className="font-bold">{p.code}</span>
                        <Badge>{p.active ? "Active" : "Inactive"}</Badge>
                    </div>
                ))}
            </div>
        </div>
    );
}