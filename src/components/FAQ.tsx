"use client"

import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

interface FaqsAccordionProps {
  title?: string
  description?: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export default function FaqsAccordion({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our product and services",
   faqs = [
  {
    question: "Apa project terbesar yang pernah kamu kerjakan?",
    answer:
      "Salah satu project terbesar saya adalah Aquadex, sebuah sistem IoT untuk pemantauan kualitas air akuarium secara real-time. Project ini melibatkan sensor, MQTT, database cloud, dan integrasi mobile & web untuk monitoring.",
  },
  {
    question: "Bagaimana pengalamanmu dalam AI Automation & n8n?",
    answer:
      "Saya berpengalaman merancang workflow automation menggunakan n8n yang terintegrasi dengan berbagai API, webhook, dan model AI/LLM. Automasi ini mencakup integrasi data otomatis, bot asisten cerdas, sinkronisasi database, hingga optimasi alur kerja proses bisnis secara efisien.",
  },
  {
    question: "Apakah kamu punya pengalaman di bidang Machine Learning?",
    answer:
      "Ya, saya pernah mengerjakan beberapa project Machine Learning, termasuk PKLot Detection menggunakan YOLO untuk deteksi parkir, DocRank untuk pencarian teks dengan NLP, dan klasifikasi penyakit tanaman menggunakan CNN.",
  },
  {
    question: "Skill & tools apa yang paling sering kamu gunakan?",
    answer:
      "Saya terbiasa menggunakan JavaScript/TypeScript (React.js, Next.js), Python (Data Science, ML), n8n & AI Tools untuk automation, SQL untuk database, serta Flutter untuk mobile development.",
  },
  {
    question: "Pernahkah kamu mengembangkan aplikasi mobile?",
    answer:
      "Ya, saya mengembangkan aplikasi Fitness Tracker menggunakan Flutter. Aplikasi ini dapat melacak progress olahraga, kalori, serta menyediakan dashboard visualisasi data pengguna.",
  },
  {
    question: "Bagaimana pengalamanmu dengan web development?",
    answer:
      "Saya pernah membuat food e-commerce platform menggunakan Laravel 11 dengan fitur CRUD lengkap, payment integration, serta admin dashboard. Selain itu, saya juga berpengalaman dengan React.js dan Next.js.",
  },
  {
    question: "Apakah kamu punya pengalaman kompetisi atau prestasi?",
    answer:
      "Saya meraih Juara 2 Huawei ICT Competition National Final 2024-2025 (Cloud Track). Pengalaman ini memperkuat kemampuan cloud computing saya, terutama di arsitektur dan deployment.",
  },
]

}: FaqsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-7">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-foreground mb-4 text-3xl lg:text-3xl">
            {title}
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-brand hover:shadow-lg"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-background/50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-foreground text-lg font-semibold pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <svg
                    className="h-5 w-5 text-foreground/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-foreground/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


