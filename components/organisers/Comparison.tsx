import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparison = [
    { feature: "Platform Fee", evntix: "0% FREE", others: "5-15% + $0.99" },
    { feature: "Social Promotion", evntix: "FREE included", others: "$299-999/mo" },
    { feature: "Influencer Collabs", evntix: "FREE included", others: "Not available" },
    { feature: "Instant Payouts", evntix: "24-48 hours", others: "7-30 days" },
    { feature: "Setup Time", evntix: "5 minutes", others: "30-60 minutes" },
    { feature: "Support", evntix: "24/7 included", others: "Email only" },
    { feature: "QR Ticketing", evntix: "✓ Included", others: "✓ Included" },
    { feature: "Analytics", evntix: "✓ Real-time", others: "✓ Basic" },
];

export default function Comparison() {
    return (
        <section className="py-24 bg-gray-50/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Why Organisers Switch to Evntix
                    </h2>
                    <p className="text-lg text-gray-500">
                        See how we compare to traditional ticketing platforms
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-6 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                        Feature
                                    </th>
                                    <th className="text-center py-6 px-6 bg-gradient-to-br from-violet-50 to-purple-50">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-lg shadow-lg">
                                            Evntix
                                        </div>
                                    </th>
                                    <th className="text-center py-6 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                        Other Platforms
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((row, i) => (
                                    <motion.tr
                                        key={row.feature}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                                    >
                                        <td className="py-5 px-6 font-medium text-gray-900">{row.feature}</td>
                                        <td className="py-5 px-6 text-center bg-gradient-to-br from-violet-50/30 to-purple-50/30">
                                            <span className="inline-flex items-center gap-1 font-bold text-violet-600">
                                                {row.evntix.includes("FREE") ? (
                                                    <>
                                                        <Check className="w-5 h-5 text-green-500" />
                                                        <span className="text-green-600">{row.evntix}</span>
                                                    </>
                                                ) : (
                                                    row.evntix
                                                )}
                                            </span>
                                        </td>
                                        <td className="py-5 px-6 text-center text-gray-500">
                                            {row.others.includes("Not available") ? (
                                                <span className="flex items-center justify-center gap-1">
                                                    <X className="w-5 h-5 text-red-400" />
                                                    {row.others}
                                                </span>
                                            ) : (
                                                row.others
                                            )}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <p className="text-sm text-gray-500 mb-3">Based on comparison with Eventbrite, Ticketmaster, and others</p>
                    <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 px-6 py-3 rounded-full">
                        <div className="text-3xl font-bold text-green-600">$12,500</div>
                        <div className="text-left">
                            <p className="text-sm font-semibold text-green-800">Average savings per event</p>
                            <p className="text-xs text-green-600">Based on 1,000 tickets at $50 each</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}