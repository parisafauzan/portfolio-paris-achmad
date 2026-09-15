"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/herosection/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatedSphere } from "@/components/herosection/animated-sphere";

const words = [
  { text: "create", gradient: "from-cyan-400 via-blue-500 to-indigo-500" },
  { text: "design", gradient: "from-rose-400 via-pink-500 to-fuchsia-500" },
  { text: "develop", gradient: "from-emerald-400 via-green-500 to-teal-500" },
  { text: "innovate", gradient: "from-amber-400 via-orange-500 to-red-500" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentWord = words[wordIndex];

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-25 pointer-events-none">
        <AnimatedSphere />
      </div>
      
      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
              background: "rgba(255, 255, 255, 0.06)",
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
              background: "rgba(255, 255, 255, 0.06)",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12">
        {/* Eyebrow */}
        <div 
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-neutral-400">
            <span className="w-8 h-px bg-gradient-to-r from-cyan-500 to-blue-500" />
            Full-Stack Developer, AI & Automation Enthusiast
          </span>
        </div>
        
        {/* Main headline */}
        <div className="mb-8">
          <h1 
            className={`text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[1] tracking-tight text-white transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">I build things</span>
            <span className="block">
              that{" "}
              <span className="relative inline-block">
                <span 
                  key={wordIndex}
                  className="inline-flex"
                >
                  {currentWord.text.split("").map((char, i) => (
                    <span
                      key={`${wordIndex}-${i}`}
                      className={`inline-block animate-char-in bg-gradient-to-r ${currentWord.gradient} bg-clip-text text-transparent`}
                      style={{
                        animationDelay: `${i * 50}ms`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>

              </span>
            </span>
          </h1>
        </div>
        
        {/* Description + CTAs in a row */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
          <p 
            className={`text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Crafting modern web experiences & AI automation workflows with cutting-edge 
            technologies. From smart n8n automations to powerful full-stack backends.
          </p>
          
          {/* CTAs */}
          <div 
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button 
              size="lg" 
              className="bg-white hover:bg-neutral-200 text-black px-8 h-14 text-base rounded-full group cursor-pointer"
              onClick={() => {
                const projects = document.getElementById("projects");
                if (projects) projects.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-base rounded-full border-neutral-700 text-white hover:bg-white/5 hover:border-neutral-500 cursor-pointer"
              onClick={() => {
                const contact = document.getElementById("contact");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
        
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
        <button
          onClick={handleScrollDown}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer animate-bounce"
          aria-label="scroll down"
        >
          <ChevronDown size={24} className="text-white" />
        </button>
      </div>
      
    </section>
  );
}
