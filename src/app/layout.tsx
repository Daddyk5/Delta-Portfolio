import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono, Rajdhani } from "next/font/google";
import Nav from "../components/Nav";
import AudioHUD from "../components/AudioHUD";
import SystemBoot from "@/components/Systembot";
import { AudioProvider } from "../hooks/useAudio";

const heading = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kennethportfolio-opal.vercel.app"),
  title: "Kenneth Gulmatico — Full-Stack Developer · AI · Security Operations",
  description:
    "Portfolio of Kenneth Gulmatico, BS Information Technology graduate from Davao City, Philippines: full-stack web and mobile developer building AI-powered products, with experience in technical support and training in AWS cloud, CompTIA CySA+, and Cisco SOC.",
  keywords: [
    "Kenneth Gulmatico",
    "Full-Stack Developer",
    "Next.js",
    "AI Engineer",
    "Security Operations",
    "CySA+",
    "SOC Analyst",
    "AWS",
    "Davao City",
    "Philippines",
  ],
  authors: [{ name: "Kenneth Gulmatico" }],
  openGraph: {
    title: "Kenneth Gulmatico — Full-Stack Developer · AI · Security",
    description:
      "Web apps, AI integrations, and security-minded engineering. See projects, certifications, and how to work together.",
    type: "website",
    images: ["/images/Nox_Hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-bg font-body text-text antialiased">
        <AudioProvider>
          <SystemBoot />
          <Nav />
          {children}
          <AudioHUD />
        </AudioProvider>
      </body>
    </html>
  );
}
