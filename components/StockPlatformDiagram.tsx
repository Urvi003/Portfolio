"use client";

import { motion } from "framer-motion";
import { TrendingUp, Server, Database, Activity, Wifi } from "lucide-react";

export default function StockPlatformDiagram() {
    return (
        <div className="w-full p-6 bg-neutral-900/50 rounded-2xl border border-white/10 backdrop-blur-sm h-full flex flex-col justify-center">
            <h4 className="text-sm font-mono text-orange-400 mb-6 flex items-center gap-2 uppercase tracking-wider">
                <TrendingUp size={16} /> Data Pipeline
            </h4>

            <div className="flex flex-col gap-6 relative">
                {/* Flow Stream */}
                <div className="absolute left-6 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-500/50 via-yellow-500/50 to-transparent rounded-full" />

                {/* Step 1: Ingestion */}
                <div className="flex items-center gap-4 relative z-10 pl-2">
                    <div className="p-3 rounded-full bg-neutral-800 border border-white/10 text-white shadow-lg shadow-orange-500/10">
                        <Wifi size={18} />
                    </div>
                    <div className="text-xs">
                        <span className="text-orange-400 font-bold block mb-0.5">WebSocket Feed</span>
                        <span className="text-neutral-500">Live Market Data</span>
                    </div>
                </div>

                {/* Step 2: Processing (Kafka) */}
                <div className="flex items-center gap-4 relative z-10 pl-2">
                    <div className="p-3 rounded-full bg-neutral-800 border border-white/10 text-white shadow-lg shadow-yellow-500/10">
                        <Server size={18} />
                    </div>
                    <div className="text-xs">
                        <span className="text-yellow-400 font-bold block mb-0.5">Kafka Stream</span>
                        <span className="text-neutral-500">Event Processing</span>
                    </div>
                </div>

                {/* Step 3: Analysis */}
                <div className="flex items-center gap-4 relative z-10 pl-2">
                    <div className="p-3 rounded-full bg-neutral-800 border border-white/10 text-white shadow-lg shadow-red-500/10">
                        <Activity size={18} />
                    </div>
                    <div className="text-xs">
                        <span className="text-red-400 font-bold block mb-0.5">AI Analysis</span>
                        <span className="text-neutral-500">Trend Prediction</span>
                    </div>
                </div>
            </div>

            {/* <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center px-2">
                <div className="text-left">
                    <div className="text-sm font-bold text-white">1M+</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Events/Day</div>
                </div>
                <div className="text-right">
                    <div className="text-sm font-bold text-orange-400">&lt;100ms</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Latency</div>
                </div> */}
            {/* </div> */}
        </div>
    );
}
