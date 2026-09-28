"use client"

import { Code, Brain, Bot, Sparkles, Database, Workflow, Network, Zap, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/section-heading"

const categories = [
  { name: "Python", icon: Code, color: "from-blue-500 to-yellow-500" },
  { name: "AI/ML", icon: Brain, color: "from-purple-500 to-indigo-500" },
  { name: "AI Agents", icon: Bot, color: "from-cyan-500 to-blue-500" },
  { name: "Generative AI", icon: Sparkles, color: "from-pink-500 to-rose-500" },
  { name: "RAG", icon: Database, color: "from-green-500 to-emerald-500" },
  { name: "N8N", icon: Workflow, color: "from-red-500 to-pink-500" },
  { name: "Agentic AI", icon: Network, color: "from-purple-400 to-violet-400" },
  { name: "GHL Automation", icon: Zap, color: "from-orange-500 to-amber-500" },
  { name: "Custom AI Solutions", icon: Wrench, color: "from-blue-500 to-cyan-500" },
]

export function TechnicalPaletteSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  // Deterministic pseudo-random based on index (seed-like approach)
  const getRandomValue = (index: number, seed: number) => {
    const hash = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453
    return hash - Math.floor(hash)
  }

  // Round to 2 decimal places for consistent server/client rendering
  const roundValue = (value: number, decimals: number = 2) => {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
  }

  return (
    <section id="palette" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => {
          const width = roundValue(getRandomValue(i, 1) * 60 + 20)
          const height = roundValue(getRandomValue(i, 2) * 60 + 20)
          const left = roundValue(getRandomValue(i, 3) * 100)
          const top = roundValue(getRandomValue(i, 4) * 100)
          const delay = roundValue(getRandomValue(i, 5) * 5)
          const duration = roundValue(getRandomValue(i, 6) * 10 + 10)

          return (
            <div
              key={i}
              className="absolute rounded-full bg-purple-600/10 blur-xl animate-float"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          )
        })}
      </div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Expertise Domains"
          title={<>My Technical <span className="gradient-text">Palette</span></>}
          subtitle="A colorful showcase of my technical expertise across AI, agents and automation."
          inView={inView}
        />

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div key={index} variants={itemVariants} className="flex flex-col items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${category.color} p-[2px] cursor-pointer`}
                  >
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>
                  <span className="text-sm text-center max-w-[100px] text-gray-300">{category.name}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
