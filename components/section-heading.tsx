"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  inView?: boolean
  align?: "center" | "left"
}

/**
 * Shared, modern section header: animated eyebrow chip, gradient title accent,
 * and a glowing underline. Keeps every section visually consistent.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  inView = true,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`flex flex-col ${alignment} mb-16`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium tracking-[0.18em] uppercase text-purple-300">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 ${align === "center" ? "" : ""}`} />
      {subtitle && (
        <p className={`text-gray-400 text-base md:text-lg max-w-3xl mt-5 leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
