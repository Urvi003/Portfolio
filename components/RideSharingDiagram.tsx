"use client";

import { motion } from "framer-motion";
import { Car, User, Smartphone, Server, CreditCard, Map } from "lucide-react";

export default function RideSharingDiagram() {
    return (
        <div className="w-full p-6 bg-neutral-900/50 rounded-2xl border border-white/10 backdrop-blur-sm h-full flex flex-col justify-center">
            <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-mono text-purple-400 flex items-center gap-2 uppercase tracking-wider">
                    <Map size={16} /> Real-Time Architecture
                </h4>
            </div>

            <div className="relative grid grid-cols-3 gap-4 items-center">

                {/* Users Cluster */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                            <User size={18} />
                        </div>
                        <span className="text-xs text-neutral-400">Rider App</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                            <Car size={18} />
                        </div>
                        <span className="text-xs text-neutral-400">Driver App</span>
                    </div>
                </div>

                {/* Central Server */}
                <div className="flex flex-col items-center gap-2 relative">
                    {/* Expanding pulse effect */}
                    <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl animate-pulse" />

                    <div className="p-5 rounded-full bg-neutral-800 border border-purple-500/30 text-purple-400 relative z-10">
                        <Server size={24} />
                    </div>
                    <span className="text-xs font-mono text-neutral-300 bg-neutral-900/80 px-2 py-1 rounded border border-white/5">Socket.IO Server</span>

                    {/* Connection Lines (Simulated with absolute positioning for simplicity in this context) */}
                    <div className="absolute top-1/2 -left-4 w-4 h-[2px] bg-purple-500/30" />
                    <div className="absolute top-1/2 -right-4 w-4 h-[2px] bg-purple-500/30" />
                </div>

                {/* Services */}
                <div className="flex flex-col gap-4 items-end">
                    <div className="flex items-center gap-2 flex-row-reverse">
                        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400">
                            <CreditCard size={18} />
                        </div>
                        <span className="text-xs text-neutral-400">Stripe API</span>
                    </div>
                    <div className="flex items-center gap-2 flex-row-reverse">
                        <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400">
                            <Map size={18} />
                        </div>
                        <span className="text-xs text-neutral-400">Google Maps</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                <div className="text-center">
                    <div className="text-lg font-bold text-white flex justify-center items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Live
                    </div>
                    {/* <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Updates</div> */}
                </div>
                {/* <div className="text-center border-l border-white/5">
                    <div className="text-lg font-bold text-purple-400">~200ms</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Match Time</div>
                </div> */}
            </div>
        </div>
    );
}
