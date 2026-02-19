"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Urvi003",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/urvipatel003",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:urvippatel1005@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block font-bold text-xl text-white mb-2">
              Urvi Patel
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Software Engineer & Master's CS Student. Building scalable backend systems and high-performance applications with a focus on code quality and user experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#projects" className="text-muted-foreground hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-muted-foreground hover:text-blue-400 transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full text-muted-foreground hover:text-white hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Urvi Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
