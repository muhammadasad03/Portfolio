"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "AI", href: "#ai" },
  { label: "Web", href: "#web" },
  { label: "Palette", href: "#palette" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("Home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          const match = navItems.find((item) => item.href.slice(1) === visible.target.id)
          if (match) setActiveSection(match.label)
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-3 md:top-5 left-0 right-0 z-50 px-4"
    >
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between gap-4 rounded-full pl-5 pr-3 py-2.5 transition-all duration-500 ${
          isScrolled
            ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-purple-900/20"
            : "bg-white/[0.03] backdrop-blur-md border border-white/5"
        }`}
      >
        {/* Logo mark */}
        <motion.a href="#home" whileHover={{ scale: 1.04 }} className="flex items-center gap-2.5 shrink-0">
          <span
            className="flex items-center justify-center w-9 h-9 rounded-xl font-bold text-white text-sm shadow-lg shadow-purple-900/40"
            style={{ background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)" }}
          >
            MA
          </span>
          <span className="hidden sm:block text-base font-bold gradient-text whitespace-nowrap">
            Muhammad Asad
          </span>
        </motion.a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <li key={item.label} className="relative">
              <a
                href={item.href}
                onClick={() => setActiveSection(item.label)}
                className={`relative z-10 px-3.5 py-2 rounded-full font-medium text-sm transition-colors duration-300 block ${
                  activeSection === item.label ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
              {activeSection === item.label && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.25), rgba(99,102,241,0.25))" }}
                >
                  <span className="absolute inset-0 rounded-full border border-purple-400/40" />
                  <span className="absolute -bottom-px left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                </motion.span>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(168,85,247,0.55)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)" }}
          >
            Let's Talk
          </motion.a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden max-w-6xl mx-auto mt-2 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/10 p-3 shadow-2xl shadow-purple-900/20"
          >
            <ul className="grid grid-cols-2 gap-1.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.label)
                      setMenuOpen(false)
                    }}
                    className={`block px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                      activeSection === item.label
                        ? "bg-purple-600/20 text-white border border-purple-500/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block text-center px-5 py-3 rounded-2xl text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #a855f7 0%, #6366f1 100%)" }}
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
