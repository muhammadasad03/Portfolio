"use client"

import { motion, useScroll, useSpring } from "framer-motion"

/** Thin gradient bar across the very top showing scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
    >
      <div className="h-full w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
    </motion.div>
  )
}
