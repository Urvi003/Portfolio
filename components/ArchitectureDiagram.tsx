"use client";

import { motion } from "framer-motion";
import { Server, Database, Globe, Brain, Shield, Lock, ArrowRight, Activity } from "lucide-react";

export default function ArchitectureDiagram() {
    return (
        <div className="w-full p-6 bg-neutral-900/50 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h4 className="text-sm font-mono text-blue-400 mb-6 flex items-center gap-2">
                <Activity size={16} /> SYSTEM ARCHITECTURE
            </h4>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">

                {/* Client Layer */}
                <div className="flex flex-col items-center gap-2 relative group">
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        <Globe size={24} />
                    </div>
                    <span className="text-xs font-mono text-neutral-400">Client (React)</span>

                    {/* Animated Connection Line */}
                    <div className="hidden md:block absolute -right-8 top-1/2 w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent">
                        <motion.div
                            animate={{ x: [0, 32], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 h-1 rounded-full bg-blue-400 absolute top-[-1.5px]"
                        />
                    </div>
                </div>

                {/* API Gateway */}
                <div className="flex flex-col items-center gap-2 relative group">
                    <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                        <Shield size={24} />
                    </div>
                    <span className="text-xs font-mono text-neutral-400">API Gateway</span>

                    <div className="hidden md:block absolute -right-8 top-1/2 w-8 h-px bg-gradient-to-r from-purple-500/50 to-transparent">
                        <motion.div
                            animate={{ x: [0, 32], opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                            className="w-1 h-1 rounded-full bg-purple-400 absolute top-[-1.5px]"
                        />
                    </div>
                </div>

                {/* Microservices */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 bg-neutral-800/50 p-3 rounded-lg border border-white/5">
                        <Server size={18} className="text-green-400" />
                        <span className="text-xs text-neutral-300">Risk Service</span>
                    </div>
                    <div className="flex items-center gap-4 bg-neutral-800/50 p-3 rounded-lg border border-white/5">
                        <Brain size={18} className="text-pink-400" />
                        <span className="text-xs text-neutral-300">ML Engine</span>
                    </div>
                </div>

                {/* Data Layer */}
                <div className="flex flex-col items-center gap-2 border-l border-white/10 pl-8 md:pl-4">
                    <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                        <Database size={24} />
                    </div>
                    <span className="text-xs font-mono text-neutral-400">PostgreSQL</span>
                </div>

            </div>

            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-3 gap-4">
                {/* <div className="text-center">
                    <div className="text-lg font-bold text-white">50ms</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Latency</div>
                </div>
                <div className="text-center border-l border-white/5">
                    <div className="text-lg font-bold text-green-400">99.9%</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Uptime</div>
                </div>
                <div className="text-center border-l border-white/5">
                    <div className="text-lg font-bold text-blue-400">10k+</div>
                    <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Req/Sec</div>
                </div> */}
            </div>
        </div>
    );
}
