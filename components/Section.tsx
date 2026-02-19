"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "gradient" | "muted";
}

export default function Section({ children, className, id, background = "default" }: SectionProps) {
  const bgClasses = {
    default: "bg-white dark:bg-neutral-950",
    gradient: "bg-gradient-to-b from-white via-neutral-100/30 to-white dark:from-neutral-950 dark:via-neutral-900/30 dark:to-neutral-950",
    muted: "bg-neutral-50 dark:bg-neutral-900/50",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-24 relative overflow-hidden",
        bgClasses[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ title, subtitle, align = "center", className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--foreground)] to-[var(--foreground)]/70 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
