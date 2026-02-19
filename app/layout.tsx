import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urvi Patel - Software Engineer & Master's CS Student",
  description:
    "Portfolio of Urvi Patel - Software Engineer specializing in Java, Spring Boot, React, and cloud technologies. Building scalable, secure systems.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Engineer",
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "Cloud",
    "Urvi Patel",
  ],
  authors: [{ name: "Urvi Patel" }],
  creator: "Urvi Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://urvipatel.dev",
    title: "Urvi Patel - Software Engineer",
    description:
      "Software Engineer & Master's CS Student building scalable systems",
    siteName: "Urvi Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urvi Patel - Software Engineer",
    description:
      "Software Engineer & Master's CS Student building scalable systems",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
