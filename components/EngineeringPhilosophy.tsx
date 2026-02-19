"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Lock, Terminal } from "lucide-react";

const philosophies = [
    {
        icon: <Shield className="text-green-400" size={32} />,
        title: "Security First",
        description: "Building systems that are secure by design, not as an afterthought. Implementing OAuth2, JWT, and role-based access control from day one."
    },
    {
        icon: <Zap className="text-yellow-400" size={32} />,
        title: "Performance & Scalability",
        description: "Optimizing for low latency and high throughput. Experience asynchronous processing (Kafka), and database indexing."
    },
    {
        icon: <Users className="text-blue-400" size={32} />,
        title: "User-Centric Engineering",
        description: "Bridge the gap between complex backend logic and intuitive frontend experiences. Focus on accessibility and responsive design."
    }
];

export default function EngineeringPhilosophy() {
    return (
        <section className="py-24 relative overflow-hidden bg-neutral-900/50">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 dark:from-white dark:via-gray-400 dark:to-white">
                        Engineering Philosophy
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My approach to building software goes beyond code. It's about creating resilient, scalable, and meaningful solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-blue-500/50 transition-colors group"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-neutral-100 dark:bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
