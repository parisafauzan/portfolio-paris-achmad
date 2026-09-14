"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 10,
    title: "AI Detection Teks",
    category: "Machine Learning",
    period: "2024 – 2025",
    image: "/aidetection.png",
    shortDesc: "AI-powered text detection with fusion multi-feature analysis",
    fullDesc: "Web-based AI text detection tool that combines multiple analysis features including Stilometri, Perplexity, TF-IDF, and IndoBERT to determine whether a text is written by AI or a human. Achieves 96% accuracy using fusion multi-feature approach for comprehensive text analysis.",
    tech: ["Python", "IndoBERT", "Scikit-Learn", "NLP", "TF-IDF", "Flask"],
    github: "https://github.com/parisafauzan/Ai-Detection-Teks-with-Fusion-multi-Feature-.git",
    demo: null,
  },
  {
    id: 11,
    title: "AlifBaBa",
    category: "Web Development",
    period: "2025",
    image: "/alifbaba.png",
    shortDesc: "Interactive Islamic learning platform for children",
    fullDesc: "An engaging educational web platform designed to make Islamic learning fun for children. Features include Hijaiyah letter learning with audio, inspirational stories of prophets with animations, and daily Hadith memorization. Built with a modern, child-friendly UI with gamification elements.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Web App"],
    github: "https://github.com/parisafauzan/Alifbaba.git",
    demo: null,
  },
  {
    id: 5,
    title: "Food E-commerce Platform",
    category: "Web Development",
    period: "Feb 2023 – Jun 2023",
    image: "/Delicipad.png",
    shortDesc: "Full-featured food ordering platform with admin dashboard",
    fullDesc: "Fully functional food e-commerce website with responsive design. Features include product listing, shopping cart, order management, payment integration, and comprehensive admin dashboard with CRUD functionality.",
    tech: ["Laravel 11", "PHP", "MySQL", "Blade", "Bootstrap"],
    github: "https://github.com/Syadda-Abdullah/Delicipad.git",
    demo: null,
  },
  
  {
    id: 9,
    title: "Ai Agent Web ",
    category: "UI/UX Design ",
    period: "Feb 2025 – Jun 2025",
    image: "/Webdesign.png",
    shortDesc: "Designing websites for client who made AI agent",
    fullDesc: "Web design project for an AI agent platform, focusing on user experience and interface aesthetics.",
    tech: ["Figma", "UI/UX Design", "Prototyping", "Web Design"],
    github: "https://www.figma.com/design/uf1usISxys2oBFuW5WKI3g/Untitled?node-id=0-1&t=PATcTsr65bGc7sEt-1",
    demo: null,
  },
  
  {
    id: 3,
    title: "Fitness Tracker App",
    category: "Mobile Development",
    period: "Apr 2024 – Jun 2024",
    image: "/Healthtrack.png",
    shortDesc: "Cross-platform fitness tracking with personalized workouts",
    fullDesc: "Mobile health application to track and visualize users' fitness progress. Features include user authentication, personalized workout plans, progress dashboards, and data visualization with charts for performance trends.",
    tech: ["Flutter", "Dart", "Firebase", "Charts", "Cross-platform"],
    github: "https://github.com/Luxlon/FitnessAPP.gitr",
    demo: null,
  },
  {
    id: 1,
    title: "Aquadex",
    category: "IoT Engineering",
    period: "Jul 2024 – Aug 2024",
    image: "/Aquadex.png",
    shortDesc: "Smart aquarium monitoring system with real-time IoT sensors",
    fullDesc: "IoT-based smart aquarium monitoring system utilizing sensors to measure water quality parameters such as temperature, pH, turbidity, and water flow. Integrated with mobile and web platforms using MQTT protocol for efficient communication.",
    tech: ["IoT", "MQTT", "Next.js", "Mobile App", "Cloud Database"],
    github: "https://github.com/Luxlon/Aquadex.git",
    demo: null,
  },
  {
    id: 8,
    title: "Abu Robot",
    category: "IOT & Robotics",
    period: "Feb 2025 – Jun 2025",
    image: "/robot.png",
    shortDesc: "Controlling robot with obstacle detection",
    fullDesc: "Robot control system with obstacle detection and avoidance capabilities. Utilizes computer vision for real-time environment mapping and navigation.",
    tech: ["Arduino", "C++", "Sensors", "Computer Vision", "Robotics"],
    github: "https://github.com/Luxlon/AbuRobot-.git",
    demo: null,
  },
  {
    id: 4,
    title: "DocRank",
    category: "Data Engineering",
    period: "Jul 2024 – Aug 2024",
    image: "/temubalik.png",
    shortDesc: "Advanced document retrieval with text preprocessing",
    fullDesc: "Document retrieval application with text tokenization, stop word removal, and stemming algorithms to optimize search relevance. Built with Python, NLTK, and Scikit-Learn for efficient text processing and indexing.",
    tech: ["Python", "NLTK", "Scikit-Learn", "NLP", "Information Retrieval"],
    github: "https://github.com/Luxlon/datamining_aplikasi-temu-balik.git",
    demo: null,
  },
  {
    id: 2,
    title: "PKlot Detection",
    category: "Computer Vision",
    period: "Jul 2024 – Aug 2024",
    image: "/pklotdetection.png",
    shortDesc: "Real-time parking lot occupancy detection using YOLO",
    fullDesc: "Computer vision model for detecting parking lot occupancy using the PKLot dataset with YOLO architecture. Implemented image preprocessing, feature extraction, and bounding box annotation for high accuracy detection.",
    tech: ["Python", "YOLO", "OpenCV", "Scikit-Learn", "Computer Vision"],
    github: "https://github.com/Luxlon/PKLot-Detection.git",
    demo: null,
  },
  
  {
    id: 6,
    title: "Arduino Smart Garden",
    category: "Robotics & IoT",
    period: "Feb 2023 – Jun 2023",
    image: "/pklotdetection.png",
    shortDesc: "Automated irrigation system with mobile monitoring",
    fullDesc: "Arduino-based automatic plant watering system integrating environmental sensors (moisture, temperature, humidity). Features mobile app interface for real-time monitoring and remote control with algorithm optimization for water efficiency.",
    tech: ["Arduino", "C++", "Mobile App", "Sensors", "Algorithm Optimization"],
    github: "https://github.com/Luxlon/PKLot-Detection.gi",
    demo: null,
  },
  {
    id: 7,
    title: "Eco Health",
    category: "Machine Learning",
    period: "Feb 2025 – Jun 2025",
    image: "/ecohealth.png",
    shortDesc: "CNN-based plant disease classifier using leaf patterns",
    fullDesc: "Convolutional neural network model to classify plant diseases based on leaf images. Conducted image preprocessing including resizing, normalization, and augmentation achieving high classification accuracy across multiple disease categories.",
    tech: ["TensorFlow", "Keras", "CNN", "Python", "Image Processing"],
    github: "https://github.com/Luxlon/ECOHEALTH.git",
    demo: null,
  },
  
  
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className={`relative bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl overflow-hidden cursor-pointer border border-neutral-800 transition-all duration-300 ${
        isExpanded ? "col-span-1 md:col-span-2" : ""
      }`}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div layout="position" className="relative">
        {/* Image Section */}
        <motion.div
          layout
          className={`relative overflow-hidden ${
            isExpanded ? "h-64" : "h-48"
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-purple-600/90 text-white rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div layout="position" className="p-6">
          {/* Title & Period */}
          <motion.div layout="position" className="mb-3">
            <h3 className="text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-400">{project.period}</p>
          </motion.div>

          {/* Description */}
          <motion.p
            layout="position"
            className="text-neutral-300 text-sm leading-relaxed mb-4"
          >
            {isExpanded ? project.fullDesc : project.shortDesc}
          </motion.p>

          {/* Tech Stack */}
          <motion.div layout="position" className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, isExpanded ? project.tech.length : 3).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700"
              >
                {tech}
              </span>
            ))}
            {!isExpanded && project.tech.length > 3 && (
              <span className="px-3 py-1 text-xs bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700">
                +{project.tech.length - 3} more
              </span>
            )}
          </motion.div>

          {/* Action Buttons - Only show when expanded */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="flex gap-3"
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                >
                  <FaGithub className="text-lg" />
                  View on GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Expand Indicator */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-4 right-4 text-neutral-500 text-xs"
          >
            Click to expand →
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function AllProjectsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden ">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider text-purple-400 bg-purple-950/30 rounded-full border border-purple-700/30 mb-6"
          >
            ✦ Portfolio Showcase
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            All <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            A comprehensive collection of my work spanning IoT, Machine Learning, Web Development, and Mobile Applications
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}