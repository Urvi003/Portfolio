"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Wrench, Layers, Monitor, Braces, Terminal, Globe, Cpu, Workflow } from "lucide-react";

const techCategories = [
    {
        title: "Languages",
        icon: <Code2 className="text-blue-500" size={24} />,
        skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "C++"]
    },
    {
        title: "Backend",
        icon: <Server className="text-green-500" size={24} />,
        skills: ["Spring Boot", "Node.js", "Express", "Microservices", "REST APIs", "WebSockets"]
    },
    {
        title: "Frontend",
        icon: <Monitor className="text-purple-500" size={24} />,
        skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
        title: "Database",
        icon: <Database className="text-cyan-500" size={24} />,
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle SQL"]
    },
    {
        title: "DevOps & Cloud",
        icon: <Cloud className="text-orange-500" size={24} />,
        skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "CI/CD"]
    },
    {
        title: "Tools & Concepts",
        icon: <Workflow className="text-red-500" size={24} />,
        skills: ["Git", "GitHub", "Postman", "JUnit", "OOP", "System Design", "Agile"]
    }
];

export default function TechStack() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Technical Arsenal
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A comprehensive stack of modern technologies and tools I use to build scalable, high-performance applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-1 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-white/10 dark:to-white/5 hover:from-blue-500/20 hover:to-purple-500/20 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-white dark:bg-neutral-900 rounded-2xl m-[1px] z-0" />
                            <div className="relative z-10 h-full p-6 flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 text-sm font-medium rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
