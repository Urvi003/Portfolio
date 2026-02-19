"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Code2, Play, GitBranch } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ArchitectureDiagram from "./ArchitectureDiagram";
import RideSharingDiagram from "./RideSharingDiagram";
import StockPlatformDiagram from "./StockPlatformDiagram";
import { useState } from "react";

const projects = [
    {
        title: "AI-Powered Financial Risk & Decision Intelligence Platform",
        description: "Full-stack financial analytics platform predicting user risk through ML models. Features secure RESTful APIs, scenario simulation, and real-time insights dashboard.",
        tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker", "Machine Learning"],
        impact: "Built scalable APIs and integrated Python-based ML service for precise risk prediction.",
        github: "https://github.com/Urvi003/AI-Powered-FDI",
        demo: "#",
        gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20"
    },
    {
        title: "RideMate – Ride Sharing Platform",
        description: "Comprehensive ride-sharing solution enabling trip creation, booking, and real-time communication. Includes secure payments and role-based access control.",
        tech: ["Node.js", "Express", "Socket.IO", "Stripe", "AWS", "Docker"],
        impact: "Implemented real-time messaging and secure transaction processing with Stripe integration.",
        github: "", // Empty to optionally hide view code
        demo: "https://letsgetride.com/",
        gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20"
    },
    {
        title: "AI-Driven Real-Time Stock Price Tracker",
        description: "High-performance stock monitoring system streaming live market data via WebSockets. Utilizes Kafka for event-driven data processing and AI for trend analysis.",
        tech: ["Java", "Spring Boot", "Kafka", "WebSockets", "Docker", "AI/ML"],
        impact: "Designed event-driven architecture to process high-frequency financial data streams.",
        github: "",
        demo: "#",
        gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20"
    }
];

// Custom hook in same file or separate
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
        >
            {/* Visual Side */}
            <div className="w-full md:w-1/2 group perspective-1000">
                <motion.div
                    whileHover={{ rotateY: index % 2 === 0 ? 5 : -5, rotateX: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className={`relative aspect-video rounded-2xl overflow-hidden glass-card shadow-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/20 flex flex-col`}
                >
                    {/* Special Case for Projects - Show Architecture Diagram */}
                    {index === 0 ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 p-4">
                            <ArchitectureDiagram />
                        </div>
                    ) : index === 1 ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 p-4">
                            <RideSharingDiagram />
                        </div>
                    ) : index === 2 ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10 p-4">
                            <StockPlatformDiagram />
                        </div>
                    ) : (
                        <>
                            <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.gradient} opacity-20 dark:opacity-40`}>
                                <Code2 className="text-neutral-900/20 dark:text-white/20 w-32 h-32" />
                            </div>

                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-sm z-20">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                                    >
                                        <Github size={24} />
                                    </a>
                                )}
                                {/* Only show demo link if valid */}
                                {project.demo && project.demo !== "#" && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                )}
                            </div>
                        </>
                    )}
                </motion.div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-6 px-4 md:px-0 relative z-10">
                <div className={`flex items-center gap-4 ${index % 2 === 1 ? "md:justify-end" : "md:justify-start"}`}>
                    <span className="text-7xl font-bold text-neutral-900/10 dark:text-white/20 font-mono">0{index + 1}</span>
                    <div className="h-px flex-1 bg-blue-500/30 max-w-[100px]" />
                </div>

                <h3 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-gray-400 ${index % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                    {project.title}
                </h3>

                <p className={`text-muted-foreground text-lg leading-relaxed ${index % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                    {project.description}
                </p>

                <div className={`p-4 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 ${index % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1 flex items-center gap-2">
                        <GitBranch size={16} /> Key Achievement
                    </p>
                    <p className="text-neutral-700 dark:text-gray-300 text-sm">{project.impact}</p>
                </div>

                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : "md:justify-start"}`}>
                    {project.tech.map((t: string) => (
                        <span
                            key={t}
                            className="px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-full text-xs font-mono text-neutral-700 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-white hover:border-blue-500/50 transition-colors cursor-default"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className={`flex gap-6 pt-4 ${index % 2 === 1 ? "md:justify-end" : "md:justify-start"}`}>
                    {project.github && (
                        <Link href={project.github} className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-600 dark:hover:border-blue-400 pb-0.5">
                            <Github size={18} /> View Code
                        </Link>
                    )}
                    {project.demo && project.demo !== "#" && (
                        <Link href={project.demo} className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-600 dark:hover:border-blue-400 pb-0.5">
                            <Play size={18} /> Live Demo
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default function FeaturedProjects() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="projects" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-24 text-center relative z-10"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-sm">
                        Featured Work
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-white dark:via-blue-100 dark:to-white">
                        Engineering Impact
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Showcasing complex problem solving in Fintech, Real-time Systems, and AI-driven applications.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-24 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden md:block" />

                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
