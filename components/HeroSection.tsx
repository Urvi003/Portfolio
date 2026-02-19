"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Mail, Terminal, Database, Server, Code2, Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


// Custom Typer Component
const Typer = ({ text }: { text: string }) => {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {text.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1, delay: index * 0.05 }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default function HeroSection() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-background">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background opacity-50" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[100px]" />

                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Side - Content */}
                <div className="space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Available for Work
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 glow-text">
                                Urvi Patel
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-4 h-12">
                            I build <span className="text-neutral-900 dark:text-white"><Typer text="Scalable, Mission-Critical Systems" /></span>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                            Software Engineer with expertise in building scalable, high-performance applications.
                            Strong foundation in algorithms, Distributed Systems, and Cloud Architecture.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="#projects">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
                            >
                                View Projects
                                <ArrowRight size={20} />
                            </motion.button>
                        </Link>

                        <a href="/resume.pdf" download="Urvi_Patel_Resume.pdf">
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-8 py-4 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white font-bold rounded-lg backdrop-blur-sm flex items-center justify-center gap-2 transition-colors hover:border-neutral-300 dark:hover:border-white/20"
                            >
                                <Download size={20} />
                                Download Resume
                            </motion.button>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex items-center gap-6 pt-4 text-muted-foreground"
                    >
                        {/* Tech Stack Mini Icons */}
                        <div className="flex items-center gap-4">
                            <Code2 size={24} className="text-blue-400" />
                            <Server size={24} className="text-green-400" />
                            <Database size={24} className="text-purple-400" />
                            <Layers size={24} className="text-cyan-400" />
                        </div>
                        <div className="h-px w-10 bg-white/10" />
                        <p className="text-sm font-mono text-neutral-500 dark:text-white/40">Backend • Cloud • DevOps</p>
                    </motion.div>
                </div>

                {/* Right Side - Visuals */}
                <div className="relative h-[600px] hidden lg:block perspective-1000">
                    <motion.div style={{ y: y1 }} className="absolute inset-0 flex items-center justify-center">
                        {/* Abstract Tech Graphic */}
                        <div className="relative w-[460px] h-[460px]">
                            {/* Central Core */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-blue-500/30 border-dashed"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-8 rounded-full border border-purple-500/30 border-dotted"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />

                            {/* Profile Image */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="absolute inset-[10%] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-20 bg-neutral-900"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/Urvi.jpg"
                                        alt="Urvi Patel"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* Floating Cards (Parallax) */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-[-20px] p-4 glass-card bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl shadow-xl z-30"
                            >
                                <JavaIcon />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-10 left-[-20px] p-4 glass-card bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl shadow-xl z-30"
                            >
                                <SpringIcon />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute top-1/3 left-[-40px] p-4 glass-card bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl shadow-xl z-30"
                            >
                                <PostgresIcon />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-1/4 right-[-40px] p-4 glass-card bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl shadow-xl z-30"
                            >
                                <ReactIcon />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Simple SVG components for logos to ensure no external dependency issues
function JavaIcon() {
    return (
        <div className="flex flex-col items-center gap-2">
            <Code2 className="text-orange-500" size={32} />
            <span className="text-xs font-bold text-neutral-900 dark:text-white">Java</span>
        </div>
    );
}

function SpringIcon() {
    return (
        <div className="flex flex-col items-center gap-2">
            <Server className="text-green-500" size={32} />
            <span className="text-xs font-bold text-neutral-900 dark:text-white">Spring</span>
        </div>
    );
}

function PostgresIcon() {
    return (
        <div className="flex flex-col items-center gap-2">
            <Database className="text-blue-400" size={32} />
            <span className="text-xs font-bold text-neutral-900 dark:text-white">PostgreSQL</span>
        </div>
    );
}

function ReactIcon() {
    return (
        <div className="flex flex-col items-center gap-2">
            <Layers className="text-cyan-400" size={32} />
            <span className="text-xs font-bold text-neutral-900 dark:text-white">React</span>
        </div>
    );
}
