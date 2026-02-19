"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xeelgbkg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormState({ name: "", email: "", message: "" });
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Contact Info */}
                <div className="space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">Let's Connect</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            I'm currently looking for new opportunities as a Software Engineer.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:urvippatel1005@gmail.com" className="flex items-center gap-4 text-neutral-900 dark:text-white hover:text-blue-500 transition-colors group">
                                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-full group-hover:bg-blue-500/10 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg font-medium">urvippatel1005@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/urvipatel003" target="_blank" className="flex items-center gap-4 text-neutral-900 dark:text-white hover:text-blue-500 transition-colors group">
                                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-full group-hover:bg-blue-500/10 transition-colors">
                                    <Linkedin size={24} />
                                </div>
                                <span className="text-lg font-medium">/in/urvipatel003</span>
                            </a>
                            <a href="https://github.com/Urvi003" target="_blank" className="flex items-center gap-4 text-neutral-900 dark:text-white hover:text-blue-500 transition-colors group">
                                <div className="p-3 bg-neutral-100 dark:bg-white/5 rounded-full group-hover:bg-blue-500/10 transition-colors">
                                    <Github size={24} />
                                </div>
                                <span className="text-lg font-medium">/Urvi003</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full" />
                    <form onSubmit={handleSubmit} className="relative glass-card p-8 md:p-10 rounded-3xl space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-neutral-500 dark:placeholder:text-neutral-600"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-neutral-500 dark:placeholder:text-neutral-600"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-neutral-500 dark:placeholder:text-neutral-600 resize-none"
                                placeholder="Describe your project or inquiry..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isSuccess ? "bg-green-500 text-white" : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"}`}
                        >
                            {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : isSuccess ? (
                                "Message Sent!"
                            ) : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
