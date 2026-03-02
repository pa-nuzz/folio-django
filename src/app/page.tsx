"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import AILab from "@/components/AILab";
import ProjectsSection from "@/components/ProjectsSection";
import GithubSection from "@/components/GithubSection";
import MusicSection from "@/components/MusicSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    // Global Scroll-Triggered Atmosphere
    gsap.to("main", {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      "--bg-morph": "rgba(204, 255, 0, 0.02)", // Subtle Cyber Lime tint shift
      ease: "none"
    });

    // Grain Intensity Shift
    gsap.to(".grain-overlay", {
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      opacity: 0.08,
      ease: "none"
    });
  });

  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-[#ccff00] selection:text-black">
      <div className="grain-overlay pointer-events-none fixed inset-0 z-50 opacity-[0.04] mix-blend-overlay" />
      <Navbar />
      <Hero3D />
      <AILab />
      <ProjectsSection />
      <GithubSection />
      <ServicesSection />
      <MusicSection />
      <ContactSection />
    </main>
  );
}
