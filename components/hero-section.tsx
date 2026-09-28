"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"

const UPWORK_URL = "https://www.upwork.com/freelancers/~0173483cdb0448ea5d"

const SOCIALS = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-asad-2b9689437", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/muhammadasad03", label: "GitHub" },
  { icon: Mail, href: "mailto:asad.shahid7823@gmail.com", label: "Email" },
]

const TRUSTED_BY = [
  "Bumpa",
  "BVIRAL",
  "VentureStrat.ai",
  "Hi-Tec",
  "Grey Rock Consulting",
  "Stammer.ai",
  "Instantly.ai",
  "Château Latournelle",
  "OneAuctionView",
  "Livinng",
  "PdfGPT",
  "AirQualify",
  "FloraNet",
  "InvoiceBot",
]

function UpworkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
    </svg>
  )
}

export function HeroSection() {
  const [showContactForm, setShowContactForm] = useState(false)

  // Allow any element on the page to open the contact modal via a custom event
  useEffect(() => {
    const open = () => setShowContactForm(true)
    window.addEventListener("open-contact-form", open)
    return () => window.removeEventListener("open-contact-form", open)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("ai")?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <>
      <section id="home" className="relative overflow-hidden bg-black">
        {/* Grid backdrop */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 40%, transparent 100%)",
          }}
        />
        {/* Soft glow behind the photo */}
        <div className="absolute right-[-10%] top-1/4 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 md:pt-40 md:pb-28 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-6 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-purple-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              Available for new projects
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            >
              <span className="text-white">Your next</span>
              <br />
              <span className="relative inline-block gradient-text pb-2">
                AI/ML engineer
                <svg
                  className="absolute left-0 -bottom-1 w-full h-3 text-purple-400"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M2 9 C 80 2, 200 2, 298 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              <span className="text-gray-400">for agents, automation &amp; generative AI.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl mb-6">
              I'm <span className="text-white font-medium">Muhammad Asad</span> — I help{" "}
              <span className="text-white font-medium">businesses</span> build AI Agents, RAG systems and{" "}
              <span className="text-white font-medium">N8N &amp; GHL automations</span> that save hours every week. 5+
              years, end-to-end ownership, no fluff.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-10">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" /> Lahore, Pakistan
              </span>
              <span className="inline-flex items-center gap-2">
                <UpworkIcon className="w-4 h-4 text-purple-400" /> Available on Upwork
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white cursor-pointer"
                style={{ background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)" }}
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.06)" }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToProjects}
                className="px-7 py-3.5 rounded-full font-semibold text-white border border-white/20 cursor-pointer"
              >
                See my work
              </motion.button>

              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-gray-300 hover:text-purple-300 transition-colors"
              >
                <UpworkIcon className="w-4 h-4" /> Hire on Upwork
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-white/15 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: photo with floating stat cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/30">
              <Image src="/profile.png" alt="Muhammad Asad" fill className="object-cover" priority />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 sm:-left-8 top-10 px-5 py-4 rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-md shadow-xl"
            >
              <div className="text-2xl md:text-3xl font-bold text-white">5+</div>
              <div className="text-xs md:text-sm text-gray-400">Years experience</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 sm:-right-8 bottom-12 px-5 py-4 rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-md shadow-xl"
            >
              <div className="text-2xl md:text-3xl font-bold text-white">25+</div>
              <div className="text-xs md:text-sm text-gray-400">Projects delivered</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trusted by strip */}
        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 whitespace-nowrap">
              Trusted by teams at
            </span>
            <div
              className="relative flex-1 overflow-hidden"
              style={{
                maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
                WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
              }}
            >
              <motion.div
                className="flex w-max items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              >
                {[...TRUSTED_BY, ...TRUSTED_BY].map((name, i) => (
                  <span
                    key={i}
                    aria-hidden={i >= TRUSTED_BY.length}
                    className="px-8 text-lg md:text-xl font-bold text-gray-400 whitespace-nowrap hover:text-white transition-colors"
                  >
                    {name.endsWith(".ai") ? (
                      <>
                        {name.slice(0, -3)}
                        <span className="text-purple-400">.ai</span>
                      </>
                    ) : (
                      name
                    )}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </>
  )
}
