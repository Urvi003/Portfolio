"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Copy, Check, AlertCircle, Code2, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";
import projectsData from "@/content/projects.json";

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const [copied, setCopied] = useState(false);
  const project = projectsData.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const otherProjects = projectsData.projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--secondary)]/5 to-[var(--accent)]/5" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[var(--foreground)]/60 hover:text-[var(--primary)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Title & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyLink}
                className="p-3 bg-[var(--muted)] hover:bg-[var(--primary)]/10 rounded-lg transition-colors"
                aria-label="Copy link"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-[var(--foreground)]/70" />
                )}
              </motion.button>
            </div>

            <p className="text-xl text-[var(--foreground)]/70 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[var(--muted)] text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--card)] border border-[var(--border)] rounded-full font-medium hover:bg-[var(--muted)] transition-all"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full font-medium hover:shadow-lg transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-500/10 rounded-xl">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">The Problem</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <Zap className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Code2 className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Architecture</h2>
                <p className="text-[var(--foreground)]/80 leading-relaxed mb-6">
                  {project.architecture}
                </p>
                {/* Placeholder for diagram */}
                <div className="p-8 bg-[var(--muted)] rounded-xl border-2 border-dashed border-[var(--border)] text-center">
                  <p className="text-[var(--foreground)]/60 text-sm">
                    Architecture diagram placeholder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-6 rounded-xl"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm font-bold rounded-full">
                      {index + 1}
                    </span>
                    <p className="text-[var(--foreground)]/80">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Tradeoffs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">Challenges & Tradeoffs</h2>
            <p className="text-[var(--foreground)]/80 leading-relaxed">
              {project.challenges}
            </p>
          </motion.div>

          {/* Results / Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-xl">
                <TrendingUp className="w-6 h-6 text-purple-500" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="p-6 bg-[var(--muted)] rounded-xl text-center"
                    >
                      <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Future Improvements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-4">What I'd Improve Next</h2>
            <p className="text-[var(--foreground)]/80 leading-relaxed">
              {project.improvements}
            </p>
          </motion.div>
        </div>
      </section>

      {/* More Projects */}
      {otherProjects.length > 0 && (
        <section className="py-20 bg-[var(--card)]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              More Projects
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {otherProjects.map((proj, index) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link href={`/projects/${proj.slug}`}>
                    <div className="glass p-6 rounded-2xl h-full space-y-4 hover:shadow-xl transition-all border border-[var(--border)] hover:border-[var(--primary)]/30">
                      <h3 className="text-xl font-bold group-hover:text-[var(--primary)]">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-[var(--foreground)]/60 line-clamp-2">
                        {proj.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {proj.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-[var(--muted)] text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
