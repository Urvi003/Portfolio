"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Award } from "lucide-react";

// Badge Data
const certificates = [
    {
        title: "AWS Academy Graduate - Cloud Foundations",
        issuer: "Amazon Web Services Training and Certification",
        image: "https://images.credly.com/size/680x680/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob",
        link: "https://www.credly.com/badges/b64975e7-7e8d-4b09-8930-930c8b1fa342",
        date: "Issued Sep 2023", // Approximated from user image, optional
        gradient: "from-orange-500/20 via-yellow-500/20 to-amber-500/20",
        border: "group-hover:border-orange-500/50"
    },
    {
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        image: "https://images.credly.com/size/680x680/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
        link: "https://www.credly.com/badges/55458160-0c3a-41e7-9d37-ed21eef01957",
        date: "Issued Feb 2023",
        gradient: "from-blue-500/20 via-cyan-500/20 to-sky-500/20",
        border: "group-hover:border-blue-500/50"
    },
    {
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        issuer: "Cisco",
        image: "https://images.credly.com/size/680x680/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
        link: "https://www.credly.com/badges/2e8651f2-9b97-473d-adae-a19f87a59976",
        date: "Issued Mar 2023",
        gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
        border: "group-hover:border-indigo-500/50"
    },
    {
        title: "Data Structure & Algorithms in Java for Intermediate Level",
        issuer: "Great Learning Academy",
        image: "https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/2777848/original/Urvi_Patel20230620-68-3ns971.jpg",
        link: "https://www.mygreatlearning.com/certificate/GIDNTOBQ?referrer_code=GLTZ0YPKVMAQQ",
        date: "Issued Jun 2023",
        gradient: "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
        border: "group-hover:border-rose-500/50"
    },
    {
        title: "Python Data Structures",
        issuer: "University of Michigan",
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~4KPQMMWGRSGS/CERTIFICATE_LANDING_PAGE~4KPQMMWGRSGS.jpeg",
        link: "https://coursera.org/share/4dff206342b545b3b585d88fdc0d4dee",
        date: "Issued Jun 2023",
        gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
        border: "group-hover:border-emerald-500/50"
    },
    {
        title: "Programming for Everybody (Getting Started with Python)",
        issuer: "University of Michigan",
        image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~LMLUTP2GJXQ8/CERTIFICATE_LANDING_PAGE~LMLUTP2GJXQ8.jpeg",
        link: "https://coursera.org/share/9df4aa8252f6d00038c55eac92a6eaf0",
        date: "Issued May 2023",
        gradient: "from-amber-500/20 via-yellow-500/20 to-orange-500/20",
        border: "group-hover:border-amber-500/50"
    }
];

export default function Certificates() {
    return (
        <section id="certificates" className="py-24 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-sm">
                        Validations
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-green-100 to-white mb-4">
                        Certifications & Badges
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Professional milestones validating technical expertise in Cloud Computing and Networking.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                <div className={`group relative h-full glass-card p-8 rounded-2xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 ${cert.border}`}>
                                    {/* Hover Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                                    <div className="relative flex flex-col items-center text-center h-full">
                                        {/* Badge Image Helper for glow */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-500" />

                                        <div className="relative w-40 h-40 mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                                            <Image
                                                src={cert.image}
                                                alt={cert.title}
                                                fill
                                                unoptimized
                                                className="object-contain"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {cert.title}
                                        </h3>

                                        <p className="text-muted-foreground text-sm font-medium mb-4">
                                            {cert.issuer}
                                        </p>

                                        <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-mono text-green-400 opacity-60 group-hover:opacity-100 transition-opacity">
                                            <Award size={14} />
                                            <span>Verified Credential</span>
                                            <ExternalLink size={12} className="ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
