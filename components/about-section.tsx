"use client"

import { Bot, Brain, Sparkles, Workflow } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const STATS = [
  { label: "Years experience", value: "5+" },
  { label: "AI projects", value: "17" },
  { label: "Core AI skills", value: "9" },
  { label: "Companies", value: "3" },
]

const EXPERTISE = [
  {
    icon: Bot,
    title: "AI Agents & Agentic AI",
    description:
      "Autonomous agents with tool calling, memory and multi-step reasoning — from lead-gen and booking agents to multi-agent systems that plan, act and self-correct.",
  },
  {
    icon: Sparkles,
    title: "Generative AI & RAG",
    description:
      "LLM-powered chat, content and document tools. RAG pipelines over PDFs and company data with vector search for accurate, source-grounded answers.",
  },
  {
    icon: Brain,
    title: "Python & AI/ML",
    description:
      "Python backends, data pipelines and ML models — recommendations, investor matching, computer vision and analytics, trained and deployed to production.",
  },
  {
    icon: Workflow,
    title: "N8N & GHL Automation",
    description:
      "End-to-end N8N workflows and GoHighLevel funnels, CRM pipelines and follow-ups — plus Custom AI Solutions that remove hours of manual work every week.",
  },
]

export function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="about" className="py-32 px-4 md:px-8 max-w-7xl mx-auto" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: story + stats */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold tracking-[0.3em] uppercase text-purple-400 mb-5"
          >
            About
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-8"
          >
            AI/ML engineer who turns <span className="gradient-text">complex workflows</span> into intelligent
            systems.
          </motion.h2>

          <motion.div variants={containerVariants} className="space-y-5 text-gray-400 leading-relaxed text-base md:text-lg">
            <motion.p variants={itemVariants}>
              I've spent the last five years at <span className="text-white">Awaitsol</span>,{" "}
              <span className="text-white">Devsinc</span> and <span className="text-white">Tkxel</span> helping teams
              turn manual processes, scattered data and ambitious ideas into AI products that actually work. I care about
              the details that matter in production — grounded answers, reliable agents, clean Python and automations
              that don't break at 2 a.m.
            </motion.p>
            <motion.p variants={itemVariants}>
              Recently I've built AI lead-gen and booking agents for Stammer.ai and Château Latournelle, RAG-powered
              document chat for PdfGPT, investor-matching models for VentureStrat, and N8N &amp; GHL automations that
              run sales and follow-ups on autopilot.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl px-5 py-5">
                <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-gray-500 leading-snug min-h-[2.5em]">
                  {stat.label}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mt-3">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: expertise cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {EXPERTISE.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-7 h-full"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-600/15 border border-purple-500/20 text-purple-400 mb-7">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
