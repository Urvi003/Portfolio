"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const experience = [
    {
        type: "work",
        title: "Software Developer",
        org: "Skylink Infosolutions",
        date: "Jun 2023 - Aug 2023",
        location: "Onsite",
        desc: [
            "Developed scalable backend features using Java and Spring Boot for high-traffic client applications.",
            "Implemented secure RESTful APIs and optimized database queries, reducing latency by 40%.",
            "Collaborated with cross-functional teams to debug, test, and deploy critical microservices."
        ]
    },
    {
        type: "education",
        title: "Master of Science in Computer Science",
        org: "Mississippi College",
        date: "Aug 2025 - Present (3.75 GPA)",
        location: "Clinton, MS (USA)",
        desc: []
    },
    {
        type: "education",
        title: "Bachelor of Technology in Computer Engineering",
        org: "Marwadi University",
        date: "Completed (3.8 GPA)",
        location: "Rajkot, Gujarat (India)",
        desc: []
    }
];

export default function ExperienceLines() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-sm">
                        Career & Education
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white">
                        Path to Excellence
                    </h2>
                </motion.div>

                <div className="space-y-8 relative border-l border-white/10 ml-3 md:ml-4 pl-8 md:pl-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Dot on timeline */}
                            <div className="absolute -left-[41px] md:-left-[57px] top-0 p-1.5 rounded-full bg-neutral-900 border border-white/10 shadow-xl z-10">
                                {item.type === "work" ? (
                                    <Briefcase size={16} className="text-blue-500" />
                                ) : (
                                    <GraduationCap size={16} className="text-purple-500" />
                                )}
                            </div>

                            {/* Content Card */}
                            <div className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                                <div className="relative glass-card p-6 md:p-8 rounded-2xl border border-white/5 bg-neutral-900/90 hover:bg-neutral-900/50 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                                                <span className="text-blue-400 font-medium">{item.org}</span>
                                                {item.location && (
                                                    <span className="text-muted-foreground">• {item.location}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 bg-white/5 px-3 py-1.5 rounded-full whitespace-nowrap border border-white/5">
                                            <Calendar size={12} className="text-purple-400" />
                                            {item.date}
                                        </div>
                                    </div>

                                    {item.desc.length > 0 && (
                                        <ul className="space-y-2 mt-4">
                                            {item.desc.map((point, i) => (
                                                <li key={i} className="text-muted-foreground text-sm flex items-start gap-3 leading-relaxed">
                                                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0 opacity-50" />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
