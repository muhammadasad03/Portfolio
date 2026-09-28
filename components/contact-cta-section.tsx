"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ContactCTASection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="contact" className="py-32 px-4 md:px-8 max-w-5xl mx-auto" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center border border-white/10"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(124,58,237,0.25), transparent 70%), rgba(24,24,27,0.6)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Decorative glow blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-[0.18em] uppercase text-purple-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Let's Collaborate
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative text-4xl md:text-5xl font-bold mb-4 tracking-tight"
        >
          Interested in working <span className="gradient-text">with me?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
        >
          I'm available for freelance or contract work. Let's build something great together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-lg rounded-full inline-flex items-center gap-3"
            asChild
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.upwork.com/freelancers/~0173483cdb0448ea5d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
              </svg>
              Hire Me on Upwork
            </motion.a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
