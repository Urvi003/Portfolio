"use client";

import { motion } from "framer-motion";
import { Download, Linkedin, ExternalLink, Code2, Database, Cloud, Wrench } from "lucide-react";

const skills = {
  languages: ["Java", "C++", "Python", "TypeScript", "JavaScript", "Go (familiar)", "Rust (familiar)"],
  frameworks: ["Spring Boot", "Spring MVC", "React.js", "AngularJS", "Next.js", "Kafka", "WebSockets"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Oracle SQL"],
  cloud: ["AWS (EC2, S3)", "Docker", "Kubernetes", "Jenkins", "Linux/Unix"],
  tools: ["JUnit", "Mockito", "Postman", "Git/GitHub", "Dynatrace", "Apache Tomcat"],
};

const topProjects = [
  {
    title: "AI-Powered Financial Risk & Decision Intelligence Platform",
    tech: "Java, Spring Boot, React, PostgreSQL, Docker, ML",
    description: "Full-stack financial analytics platform predicting user risk through ML models. Features secure RESTful APIs, scenario simulation, and real-time insights dashboard.",
  },
  {
    title: "RideMate – Ride Sharing Platform",
    tech: "Node.js, Express, Socket.IO, Stripe, AWS, Docker",
    description: "Comprehensive ride-sharing solution enabling trip creation, booking, and real-time communication. Includes secure payments and role-based access control.",
  },
  {
    title: "AI-Driven Real-Time Stock Price Tracker",
    tech: "Java, Spring Boot, Kafka, WebSockets, Docker, AI/ML",
    description: "High-performance stock monitoring system streaming live market data via WebSockets. Utilizes Kafka for event-driven data processing and AI for trend analysis.",
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] opacity-50"></div>

        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-neutral-900 dark:text-white tracking-tight">Resume</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Software Engineer with expertise in building scalable, mission-critical systems
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download="Urvi_Patel_Resume.pdf"
                className="group px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-neutral-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/urvipatel003"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                View LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl text-center mb-20"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              <span className="flex items-center gap-2">📧 urvippatel1005@gmail.com</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700 hidden sm:block"></span>
              <span className="flex items-center gap-2">📱 601-339-0036</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700 hidden sm:block"></span>
              <span className="flex items-center gap-2">📍 Clinton, MS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900/30 border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-neutral-900 dark:text-white">Professional Summary</h2>
            <div className="space-y-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                Master's student in Computer Science with hands-on experience building real-time, mission-critical applications in Java, C++, and Python.
              </p>
              <p>
                Strong foundation in algorithms, data structures, cloud infrastructure, and distributed systems. Delivered low-latency, high-throughput solutions in fintech and healthcare domains, handling thousands of transactions and records with sub-second performance.
              </p>
              <p>
                Skilled across the full stack: databases & storage systems, backend APIs, and front-end frameworks (React.js, AngularJS). Experienced with cloud deployment (AWS, Docker, Kubernetes) and CI/CD automation for scalable, reliable systems.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-white"
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Wrench className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Frameworks & Systems</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-green-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Databases & Storage</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-orange-500/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Cloud className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Cloud & Infrastructure</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Projects */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900/30 border-y border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>

          <div className="space-y-6">
            {topProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{project.title}</h3>
                </div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{project.tech}</p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Education */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-white"
          >
            Education
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800"
            >
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Master of Science in Computer Science</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Mississippi College - Clinton, MS (USA)</p>
              </div>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-500 mt-2 md:mt-0 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                Aug 2025 - Present
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800"
            >
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Bachelor of Technology in Computer Engineering</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Marwadi University - Rajkot, Gujarat (India)</p>
              </div>
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-500 mt-2 md:mt-0 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                Completed
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
