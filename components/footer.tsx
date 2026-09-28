"use client"

import type React from "react"

import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Formspree endpoint — accepts the bare form ID or a full URL via NEXT_PUBLIC_FORMSPREE_ID.
  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim()
  const FORMSPREE_ENDPOINT = FORMSPREE_ID
    ? FORMSPREE_ID.startsWith("http")
      ? FORMSPREE_ID
      : `https://formspree.io/f/${FORMSPREE_ID}`
    : null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    // Fallback: if no Formspree ID is configured, open the visitor's email client.
    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`)
      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)
      window.location.href = `mailto:asad.shahid7823@gmail.com?subject=${subject}&body=${body}`
      setStatus("idle")
      return
    }

    try {
      const params = new URLSearchParams()
      params.append("name", formData.name)
      params.append("email", formData.email)
      params.append("message", formData.message)
      params.append("_subject", `New portfolio message from ${formData.name}`)
      params.append("_replyto", formData.email)

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: params.toString(),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("error")
        setErrorMessage("Failed to send message. Please try again.")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch (error) {
      setStatus("error")
      setErrorMessage("Network error. Please try again.")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/muhammadasad03",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muhammad-asad-2b9689437",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:asad.shahid7823@gmail.com",
      label: "Email",
    },
  ]

  return (
    <footer className="bg-black border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Contact Information</h3>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Lahore, Pakistan</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:asad.shahid7823@gmail.com"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    asad.shahid7823@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/muhammad-asad-2b9689437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors break-all"
                  >
                    linkedin.com/in/muhammad-asad-2b9689437
                  </a>
                </div>
              </div>
            </div>

            {/* Let's Connect Box */}
            <div className="mt-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl p-6 text-center border border-purple-600/20">
              <div className="text-4xl mb-3">📧</div>
              <p className="text-white font-medium">Let's connect!</p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello, I'd like to talk about..."
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : status === "success" ? (
                  "Message Sent!"
                ) : status === "error" ? (
                  "Failed to Send"
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-400 text-sm text-center">Your message has been sent successfully!</p>
              )}
              {status === "error" && <p className="text-red-400 text-sm text-center">{errorMessage}</p>}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Original Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-zinc-800/50">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-12">
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Muhammad Asad</h3>
            <p className="text-gray-400 max-w-md">
              AI/ML Engineer building AI Agents, Generative AI, RAG and automation solutions.
            </p>
          </motion.div>

          {/* Right Side - Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-start md:justify-end gap-4"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-600/50 hover:bg-purple-600/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-600/30 to-transparent my-8" />

        {/* Bottom - Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">© {currentYear} Muhammad Asad. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
