// program utama

"use client";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import BackgroundParticles from "../components/background";
import AttractButton from "../components/kokonutui/attract-button";
import DownloadButton from "../components/downloadbuton";
import Datadiri from "@/components/datadiri";
import ProjectCards from "@/components/Projectcard";
import AllProjectsSection from "../components/allprojectdemo";
import AchievementsSection from "../components/sertifikasi";
import FaqsAccordion from "../components/FAQ";
import AI_Prompts from "../components/kokonutui/ai-prompt";
import Navbar from "../components/kokonutui/Navbar"; // Import Navbar baru
import Footer from "../components/footer"; // Import Footer baru
import { HeroSection } from "../components/herosection/hero-section";

const Toolsloop = dynamic(() => import("../components/Logo"), { ssr: false });

export default function ClientHome() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full min-h-screen text-white">
      {/* Background global */}
      <div className="absolute inset-0 -z-10">
        <BackgroundParticles />
      </div>

      {/* Navbar Component */}
      <Navbar />

      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT SECTION */}
      <section
        ref={aboutRef}
        id="about"
        className="relative w-full pt-20 flex items-center justify-center px-6"
      >
        <div className="relative z-10 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            I'm Paris Achmad Fauzan
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            A passionate Full-Stack Developer & AI Automation enthusiast building innovative IT solutions. With expertise in modern web technologies, workflow automation with n8n, and intelligent AI integrations.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
            <DownloadButton />
            <AttractButton />
          </div>
        </div>
      </section>

      {/* TOOLS/SKILLS SECTION */}
      <div className="pt-20">
        <Toolsloop />
      </div>
      <Datadiri />

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative z-20">
        <ProjectCards />
      </section>

      <AllProjectsSection />

      {/* ACHIEVEMENTS SECTION */}
      <section id="achievements">
        <AchievementsSection />
      </section>

      {/* CONTACT & FAQ SECTION */}
      <section id="contact" className="relative flex flex-col items-center justify-center py-24 overflow-hidden">
        {/* Background Spotlight */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[450px] rounded-full bg-gradient-to-tr from-purple-700/40 via-blue-600/30 to-transparent blur-3xl animate-pulse" />
        </div>

        {/* Header */}
        <div className="relative z-10 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>{" "}
            <span className="text-white">&</span>{" "}
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent">
              FAQ
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Let's start a conversation. Choose your preferred platform and send me a message.
          </motion.p>
        </div>

        {/* Content 2 Column */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-6">
          {/* Left: AI Prompts */}
          <div className="bg-neutral-900/40 border border-neutral-800 max-h-[50%] rounded-2xl p-6 shadow-xl backdrop-blur-md">
            <AI_Prompts />
          </div>

          {/* Right: FAQ Accordion */}
          <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
            <FaqsAccordion />
          </div>
        </div>
      </section>

      <div className="py-5"></div>
      <Footer/>
    </div>
  );
}