"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  FaReact,
  FaMobileAlt,
  FaDatabase,
  FaPython,
  FaCloud,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFlutter,
  SiTensorflow,
  SiArduino,
  SiN8N,
  SiOpenai,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

import { JSX } from "react/jsx-dev-runtime";

// Baris atas
const skillsTop = [
  { icon: <FaReact />, label: "Web Development (React, Next.js)" },
  { icon: <SiN8N />, label: "Workflow Automation (n8n)" },
  { icon: <SiFlutter />, label: "Mobile Development (Flutter)" },
  { icon: <FaDatabase />, label: "Database & SQL" },
  { icon: <FaPython />, label: "Python (ML & Data Analysis)" },
];

// Baris bawah
const skillsBottom = [
  { icon: <SiOpenai />, label: "AI Automation & LLMs" },
  { icon: <SiTensorflow />, label: "Machine Learning & CV" },
  { icon: <GiArtificialIntelligence />, label: "AI Engineering & Agents" },
  { icon: <SiArduino />, label: "IoT & Embedded Systems" },
  { icon: <FaCloud />, label: "Cloud Computing" },
];

function LoopRow({
  items,
  direction = "left",
  speed = 40,
}: {
  items: { icon: JSX.Element; label: string }[];
  direction?: "left" | "right";
  speed?: number;
}) {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Fade kiri & kanan */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a] to-transparent pointer-events-none z-10" />

      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-4 px-4">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-zinc-900 text-white border border-zinc-700 hover:bg-zinc-800 transition"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function LoopKemampuan() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6 pt-5">
      {/* Baris atas (kanan -> kiri) */}
      <LoopRow items={skillsTop} direction="left" speed={25} />
      {/* Baris bawah (kiri -> kanan) */}
      <LoopRow items={skillsBottom} direction="right" speed={25} />
    </div>
  );
}
