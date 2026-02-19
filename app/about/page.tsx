"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code, Award, MapPin, Calendar, Briefcase, Server, Database, Globe } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Mississippi College",
    location: "Clinton, MS, USA",
    period: "2024 - Present",
    icon: GraduationCap,
  },
  {
    degree: "Bachelor of Technology in Computer Engineering",
    school: "Marwadi University",
    location: "Rajkot, Gujarat, India",
    period: "Completed",
    icon: GraduationCap,
  },
];

const timeline = [
  {
    year: "2024",
    title: "Master's Program",
    description: "Started Master's in Computer Science, focusing on distributed systems, algorithms, and cloud infrastructure",
    type: "Education",
  },
  {
    year: "2024",
    title: "Real-Time Stock Tracker",
    description: "Built WebSocket-based platform streaming market data to 5,000+ concurrent users with sub-second latency",
    type: "Project",
  },
  {
    year: "2024",
    title: "Online Banking System",
    description: "Architected microservices-based banking platform handling 10,000+ concurrent transactions with Spring Boot & Kafka",
    type: "Project",
  },
  {
    year: "2024",
    title: "Healthcare Claims System",
    description: "Developed enterprise claims management processing 15,000+ claims daily with 95% automation rate",
    type: "Project",
  },
];

const strengths = [
  {
    title: "Backend Engineering",
    description: "Expert in Java, Spring Boot, microservices architecture, and RESTful API design",
    icon: Server,
  },
  {
    title: "Distributed Systems",
    description: "Experience with Kafka, event-driven architectures, and scalable system design",
    icon: Globe,
  },
  {
    title: "Databases & Storage",
    description: "Proficient in PostgreSQL, MongoDB, Oracle SQL with query optimization expertise",
    icon: Database,
  },
  {
    title: "Cloud & DevOps",
    description: "Hands-on with AWS, Docker, Kubernetes, CI/CD pipelines using Jenkins",
    icon: Code,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] opacity-50"></div>

        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-neutral-900 dark:text-white tracking-tight">About Me</h1>
            <div className="prose prose-lg dark:prose-invert text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p className="mb-6">
                I'm a Master's student in Computer Science with a passion for solving complex engineering challenges through clean, scalable code. My experience spans building real-time, mission-critical applications in fintech and healthcare domains.
              </p>
              <p>
                I specialize in <span className="font-semibold text-neutral-900 dark:text-white">backend systems</span>, with deep expertise in Java, Spring Boot, and distributed architectures. I've delivered low-latency, high-throughput solutions handling thousands of transactions with sub-second performance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 mb-24"
          >
            {/* Education */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
                <GraduationCap className="w-6 h-6" /> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="pl-4 border-l-2 border-neutral-200 dark:border-neutral-800">
                    <h3 className="font-semibold text-neutral-900 dark:text-white text-lg">{edu.degree}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{edu.school}</p>
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mt-2">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {edu.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
                <Award className="w-6 h-6" /> Core Strengths
              </h2>
              <div className="grid gap-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-100 dark:border-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 transition-colors">
                    <div className="flex items-start gap-3">
                      <strength.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-neutral-900 dark:text-white">{strength.title}</h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-snug mt-1">{strength.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-10 flex items-center gap-3">
              <Briefcase className="w-6 h-6" /> Recent Highlights
            </h2>
            <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 space-y-12 pb-4">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 ring-4 ring-white dark:ring-neutral-950"></span>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                    <span className="text-sm font-mono text-blue-600 dark:text-blue-400 font-medium">{item.year}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 w-fit">{item.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Looking For */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-2xl p-8 md:p-12 mb-20"
          >
            <h2 className="text-2xl font-bold mb-6">What I'm Looking For</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-neutral-300 dark:text-neutral-600">
              <div>
                <h3 className="font-semibold text-white dark:text-neutral-900 mb-2">Roles</h3>
                <p>Software Engineer, Backend Engineer, Full-Stack Developer positions involving complex problem solving.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white dark:text-neutral-900 mb-2">Timeline</h3>
                <p>Summer 2026 internships or New Grad roles starting 2026.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white dark:text-neutral-900 mb-2">Focus</h3>
                <p>Distributed systems, scalable backends, cloud infrastructure, and fintech.</p>
              </div>
              <div>
                <h3 className="font-semibold text-white dark:text-neutral-900 mb-2">Location</h3>
                <p>Open to relocation within the US and remote opportunities.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
