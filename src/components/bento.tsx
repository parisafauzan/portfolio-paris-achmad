"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const TypingCodeFeature = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);

        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, Math.random() * 30 + 10);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <div className="mt-3 relative">
      <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">
        Profile.js
      </div>
      <div
        ref={terminalRef}
        className="bg-black text-neutral-100 p-3 rounded-md text-xs font-mono h-[240px] overflow-y-auto"
      >
        <pre className="whitespace-pre-wrap">
          {displayedText}
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    </div>
  );
};

export default function AIAgentsCard() {
  const typingText = `async function introduce() {
  const me = {
    name: "Paris Achmad Fauzan",
    role: "Informatics Student @ ITENAS Bandung",
    skills: [
      "React.js ⚛️",
      "Next.js ▲",
      "n8n Workflow Automation ⚡",
      "AI Automation & LLMs 🤖",
      "TailwindCSS 🎨",
      "MySQL 🗄️"
    ],
    interests: [
      "Web Development 💻",
      "AI Automation & Autonomous Agents ⚡",
      "Artificial Intelligence 🧠",
      "UI/UX Engineering 🎨"
    ],
    motto: "🚀 Always learning, always building!"
  };

  // Simulate async typing output
  const typeLine = (text) =>
    new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        process.stdout.write(text[i]);
        i++;
        if (i === text.length) {
          clearInterval(interval);
          process.stdout.write("\\n");
          resolve();
        }
      }, Math.random() * 50 + 30); // random delay for realism
    });

  await typeLine(\`👋 Hi, I'm \${me.name}\`);
  await typeLine(\`🎓 Role: \${me.role}\`);
  await typeLine("🛠️ Skills:");
  for (const skill of me.skills) {
    await typeLine("   - " + skill);
  }
  await typeLine("✨ Interests:");
  for (const interest of me.interests) {
    await typeLine("   - " + interest);
  }
  await typeLine(me.motto);
}

introduce();`;


  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link
        href="#"
        className="
          group relative flex flex-col gap-4 h-full rounded-xl p-5
          bg-gradient-to-b from-neutral-50/60 via-neutral-50/40 to-neutral-50/30 
          dark:from-neutral-900/60 dark:via-neutral-900/40 dark:to-neutral-900/30
          border border-neutral-200/60 dark:border-neutral-800/60
          hover:shadow-lg hover:border-neutral-300/50 dark:hover:border-neutral-700/50
          transition-all duration-500
        "
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Let Me Introduce Myself
          </h3>
          <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300" />
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Here's a brief introduction about me:
        </p>

        <TypingCodeFeature text={typingText} />
      </Link>
    </motion.div>
  );
}
