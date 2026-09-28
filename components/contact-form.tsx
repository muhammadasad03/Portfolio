"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin } from 'lucide-react'

interface ContactFormProps {
  onClose: () => void
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Formspree endpoint. Set NEXT_PUBLIC_FORMSPREE_ID in .env.local — accepts either
  // the bare form ID ("xayzwvqr") or the full endpoint URL.
  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID?.trim()
  const FORMSPREE_ENDPOINT = FORMSPREE_ID
    ? FORMSPREE_ID.startsWith("http")
      ? FORMSPREE_ID
      : `https://formspree.io/f/${FORMSPREE_ID}`
    : null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Fallback: if no Formspree ID is configured, open the visitor's email client.
    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`)
      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)
      window.location.href = `mailto:asad.shahid7823@gmail.com?subject=${subject}&body=${body}`
      setIsSubmitting(false)
      return
    }

    try {
      // Send as URL-encoded form data (Formspree's recommended AJAX format —
      // far less likely to be flagged as spam than raw JSON).
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
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => {
          onClose()
          setSubmitStatus("idle")
        }, 3500)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-4xl bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-purple-600/30 rounded-3xl overflow-hidden"
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 relative">
          <motion.h2 className="text-4xl font-bold text-white">Get In Touch</motion.h2>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-gray-300 text-2xl"
          >
            ✕
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Contact Information</h3>

            <div className="space-y-6">
              {/* Location */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4 items-start group cursor-pointer"
              >
                <div className="bg-purple-600/20 p-3 rounded-full group-hover:bg-purple-600/40 transition-colors">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-400">Lahore, Pakistan</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4 items-start group cursor-pointer"
              >
                <div className="bg-purple-600/20 p-3 rounded-full group-hover:bg-purple-600/40 transition-colors">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:asad.shahid7823@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                    asad.shahid7823@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-4 items-start group cursor-pointer"
              >
                <div className="bg-purple-600/20 p-3 rounded-full group-hover:bg-purple-600/40 transition-colors">
                  <Linkedin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/muhammad-asad-2b9689437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    linkedin.com/in/muhammad-asad-2b9689437
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Let's connect section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 bg-gradient-to-br from-purple-900/50 to-blue-900/30 border border-purple-600/30 rounded-xl p-6 text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Mail className="w-8 h-8 text-purple-400" />
              </motion.div>
              <p className="text-gray-200 font-semibold">Let's connect!</p>
              <p className="text-sm text-gray-400 mt-2">I'll get back to you as soon as possible.</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Your Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-all text-white placeholder-gray-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Your Email</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-all text-white placeholder-gray-500"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Your Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-purple-600 focus:outline-none transition-all text-white placeholder-gray-500 resize-none"
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-900/50 border border-green-600/50 rounded-lg text-green-400 text-sm"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-900/50 border border-red-600/50 rounded-lg text-red-400 text-sm"
                >
                  ✕ Error sending message. Please try again.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                      ✈️
                    </motion.span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
