"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white tracking-tight">Get in Touch</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss a potential opportunity? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-900 dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-neutral-900 rounded-lg border ${errors.name ? "border-red-500 focus:border-red-500 ring-red-500/20" : "border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-900 dark:text-white">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white dark:bg-neutral-900 rounded-lg border ${errors.email ? "border-red-500 focus:border-red-500 ring-red-500/20" : "border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-900 dark:text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-white dark:bg-neutral-900 rounded-lg border ${errors.message ? "border-red-500 focus:border-red-500 ring-red-500/20" : "border-neutral-200 dark:border-neutral-800 focus:border-blue-500 dark:focus:border-blue-500"
                        } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-neutral-900 dark:text-white resize-none placeholder:text-neutral-400`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${status === "success"
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : status === "error"
                          ? "bg-red-600 hover:bg-red-700 text-white"
                          : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90"
                      } disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent
                      </>
                    ) : status === "error" ? (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        Failed to Send
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Connect</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:urvippatel1005@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group bg-white dark:bg-neutral-900"
                  >
                    <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-white">Email</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">urvippatel1005@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/urvi-patel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group bg-white dark:bg-neutral-900"
                  >
                    <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-white">LinkedIn</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">linkedin.com/in/urvi-patel</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/urvipatel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors group bg-white dark:bg-neutral-900"
                  >
                    <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-900 dark:text-white group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 dark:text-white">GitHub</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">github.com/urvipatel</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Details</h3>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>📍 Based in Clinton, MS, USA</p>
                  <p>💼 Open to Summer 2026 Internships</p>
                  <p>⏰ Responsive within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
