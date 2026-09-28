"use client"

import { ExternalLink, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/section-heading"

const aiProjects = [
  {
    title: "Bumpa",
    description:
      "An AI-powered app to manage a business across online and physical stores — tracking offline sales plus WhatsApp, Facebook, Twitter and Instagram channels with smart analytics.",
    link: "https://www.getbumpa.com/feature/analytics",
    image: "/ai-bumpa.jpg",
    tags: ["AI/ML", "Python", "Custom AI Solutions"],
  },
  {
    title: "BVIRAL",
    description:
      "Helps video owners distribute and protect their clips, reaching millions of viewers globally. With over a million video assets under management, it gives publishing partners a steady stream of viral content.",
    link: "https://bviral.com/",
    image: "/ai-bviral.jpg",
    tags: ["AI/ML", "Python", "Custom AI Solutions"],
  },
  {
    title: "VentureStrat",
    description:
      "An AI fundraising platform with Python matching models and a Ruby on Rails backend, letting founders search 120,000+ investors, send personalized outreach and track the full raise in one CRM.",
    link: "https://www.venturestrat.ai/",
    image: "/ai-venturestrat.jpg",
    tags: ["Python", "AI/ML", "Generative AI"],
  },
  {
    title: "Hi-Tec – Outdoor & Sports Gear",
    description:
      "An intelligent, scalable e-commerce platform with AI-based product recommendations, dynamic content, customer engagement analytics, real-time monitoring and A/B testing.",
    link: "https://hi-tec.com/",
    image: "/ai-hi-tec.jpg",
    tags: ["AI/ML", "Python", "Custom AI Solutions"],
  },
  {
    title: "Grey Rock Consulting",
    description:
      "Software solutions and strategic consulting focused on organizational efficiency, including a cost-effective, user-friendly billing platform.",
    link: "https://greyrockconsulting.net/",
    image: "/ai-grey-rock.jpg",
    tags: ["Custom AI Solutions", "N8N"],
  },
  {
    title: "Stammer.ai",
    description:
      "A white-label platform for AI services, featuring an AI lead generation and appointment scheduling agent that captures leads and books appointments in under 60 seconds.",
    link: "https://stammer.ai/",
    image: "/ai-stammer.jpg",
    tags: ["AI Agents", "Generative AI", "GHL Automation"],
  },
  {
    title: "Instantly.ai",
    description:
      "An AI-powered cold email and lead generation platform — AI agents find leads, write personalized outreach and automate campaigns at scale to help teams find clients instantly.",
    link: "https://instantly.ai/",
    image: "/ai-instantly.jpg",
    tags: ["AI Agents", "Generative AI", "N8N"],
  },
  {
    title: "Château Latournelle",
    description:
      "An AI-powered event booking website that lets prospects book, modify and cancel reservations on their own — no phone call required.",
    link: "https://chateaulatournelle.com/",
    image: "/ai-chateau.jpg",
    tags: ["AI Agents", "Agentic AI", "N8N"],
  },
  {
    title: "OneAuctionView",
    description:
      "Centralized auction management software to search and evaluate vehicles across all auctions — an industry-agnostic wholesale solution.",
    link: "https://www.oneauctionview.com/home",
    image: "/ai-oneauctionview.jpg",
    tags: ["Python", "Custom AI Solutions"],
  },
  {
    title: "Livinng",
    description:
      "A Colombia-based online marketplace for short- and long-term homestays and experiences.",
    link: "",
    image: "",
    tags: ["Custom AI Solutions"],
  },
  {
    title: "PdfGPT",
    description:
      "An AI-powered PDF chatbot that lets users converse with uploaded PDFs, extracting and discussing their content intelligently.",
    link: "https://www.pdfgpt.io/en",
    image: "/ai-pdfgpt.jpg",
    tags: ["RAG", "Generative AI", "Python"],
  },
  {
    title: "AirQualify",
    description:
      "Urban blue-green area segmentation that quantifies green and water cover, correlates it with the Air Quality Index, recommends afforestation areas and presents it all in a web app.",
    link: "",
    image: "",
    tags: ["AI/ML", "Python"],
  },
  {
    title: "AI Cover Letter Gen",
    description:
      "A generative-AI tool that writes tailored cover letters on demand.",
    link: "https://ai-cover-letter-generator.netlify.app/",
    image: "/ai-cover-letter.jpg",
    tags: ["Generative AI", "Custom AI Solutions"],
  },
  {
    title: "Puphub",
    description:
      "A daycare platform for puppies, where owners can onboard their pups when they're not available.",
    link: "https://github.com/mts755Dev/puphub",
    image: "/ai-puphub.jpg",
    tags: ["Generative AI", "Python"],
  },
  {
    title: "AI Caption Gen",
    description:
      "An AI caption generator that writes captions based on the occasion or the user's mood.",
    link: "https://ai-captiongenerator.netlify.app/",
    image: "/ai-caption-gen.jpg",
    tags: ["Generative AI"],
  },
  {
    title: "FloraNet",
    description:
      "A computer vision model that classifies plant images into shrubs and trees, trained on a labeled dataset of diverse plant images.",
    link: "",
    image: "",
    tags: ["AI/ML", "Python"],
  },
  {
    title: "InvoiceBot",
    description:
      "A chatbot that generates invoice PDFs from user details.",
    link: "https://invoice-ai.netlify.app/",
    image: "/ai-invoicebot.jpg",
    tags: ["AI Agents", "Generative AI"],
  },
]

function FloatingBubbles() {
  const bubbles = [
    { size: 80, top: "5%", left: "5%", delay: 0, duration: 20 },
    { size: 40, top: "10%", left: "15%", delay: 2, duration: 15 },
    { size: 60, top: "3%", left: "30%", delay: 1, duration: 18 },
    { size: 30, top: "8%", left: "50%", delay: 3, duration: 12 },
    { size: 50, top: "2%", left: "70%", delay: 0.5, duration: 16 },
    { size: 70, top: "6%", left: "85%", delay: 2.5, duration: 22 },
    { size: 25, top: "15%", left: "92%", delay: 1.5, duration: 14 },
    { size: 45, top: "25%", left: "3%", delay: 4, duration: 19 },
    { size: 35, top: "40%", left: "8%", delay: 0, duration: 17 },
    { size: 55, top: "60%", left: "2%", delay: 3, duration: 21 },
    { size: 20, top: "75%", left: "10%", delay: 1, duration: 13 },
    { size: 65, top: "85%", left: "5%", delay: 2, duration: 20 },
    { size: 30, top: "50%", left: "95%", delay: 0.5, duration: 15 },
    { size: 50, top: "70%", left: "90%", delay: 3.5, duration: 18 },
    { size: 40, top: "90%", left: "85%", delay: 1.5, duration: 16 },
    { size: 25, top: "30%", left: "97%", delay: 4, duration: 14 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-purple-500/20 blur-sm animate-float"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export function AIProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="ai" className="relative py-32 px-4 md:px-8 bg-black overflow-hidden" ref={ref}>
      <FloatingBubbles />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="AI/ML, Agents & Automation"
          title={<>AI <span className="gradient-text">Projects</span></>}
          subtitle="Intelligent agents, generative-AI tools, and automation platforms I've built — from autonomous lead-gen agents to RAG-powered chatbots and AI-driven personalization."
          inView={inView}
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {aiProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-600/50 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-700/40 via-indigo-800/30 to-zinc-900">
                      <Sparkles className="w-12 h-12 text-purple-300/70" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs cursor-pointer"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                {project.link && (
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </motion.a>
                )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
