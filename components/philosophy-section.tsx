"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/section-heading"

const philosophyCategories = [
  { name: "Frontend", color: "bg-red-500" },
  { name: "Backend", color: "bg-purple-500" },
  { name: "Mobile", color: "bg-cyan-500" },
  { name: "Cloud & Serverless", color: "bg-teal-400" },
  { name: "Testing", color: "bg-pink-500" },
  { name: "Security", color: "bg-blue-500" },
  { name: "Real-Time", color: "bg-orange-500" },
  { name: "Monitoring & Performance", color: "bg-emerald-400" },
  { name: "APIs & Integrations", color: "bg-violet-400" },
  { name: "Project & Collaboration", color: "bg-indigo-500" },
  { name: "Version Control", color: "bg-gray-500" },
]

export function PhilosophySection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 12 },
    },
  }

  return (
    <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto" ref={ref}>
      <SectionHeading
        eyebrow="How I Build"
        title={<>My Development <span className="gradient-text">Philosophy</span></>}
        subtitle="Just as an artist carefully selects colors from their palette to create a masterpiece, I combine these technical skills to craft elegant, efficient, and scalable software solutions that solve real-world problems."
        inView={inView}
      />

      <motion.div
        className="flex flex-wrap justify-center gap-3"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {philosophyCategories.map((category, index) => (
          <motion.span
            key={index}
            variants={badgeVariants}
            whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.3 }}
            className={`px-4 py-2 ${category.color} text-white rounded-full text-sm font-medium cursor-default`}
          >
            {category.name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
