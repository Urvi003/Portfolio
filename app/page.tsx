"use client";

import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import ExperienceLines from "@/components/ExperienceLines";
import Certificates from "@/components/Certificates";
import ContactSection from "@/components/ContactSection";
import EngineeringPhilosophy from "@/components/EngineeringPhilosophy";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <HeroSection />

      {/* Spacer for smooth fade */}
      <div className="h-24 bg-gradient-to-b from-background to-transparent" />

      <TechStack />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-100 dark:via-white/10 to-transparent" />
      </div>

      <EngineeringPhilosophy />

      <FeaturedProjects />

      <ExperienceLines />

      <Certificates />

      <ContactSection />
    </main>
  );
}
