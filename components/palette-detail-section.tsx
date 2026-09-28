"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const paletteCategories = [
  {
    name: "Frontend",
    color: "from-red-500 to-pink-500",
    borderColor: "border-red-500",
    tags: [
      "React",
      "Next.js",
      "Redux",
      "RTK",
      "React Query",
      "SSR",
      "ISR",
      "SSG",
      "Vue",
      "Nuxt",
      "TypeScript",
      "PWA",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Reactstrap",
      "Vuetify",
      "Shadcn",
      "Radix UI",
      "Reka UI",
      "Chakra UI",
      "CSS Grid",
      "Flexbox",
    ],
  },
  {
    name: "Backend",
    color: "from-purple-500 to-indigo-500",
    borderColor: "border-purple-500",
    tags: [
      "Node.js",
      "Express",
      "NestJS",
      "Typescript",
      "Fastify",
      "GraphQL",
      "REST",
      "Webhooks",
      "Bull Queues",
      "Socket.io",
      "Event-Driven Architecture",
      "gRPC",
      "SOAP APIs",
      "Entity Framework Core",
      "Dapper",
      "Appwrite",
    ],
  },
  {
    name: "Mobile",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-cyan-500",
    tags: [
      "React Native",
      "Expo",
      "Redux",
      "React Navigation",
      "Android",
      "iOS",
      "Swift",
      "Kotlin",
      "Java",
      "Native Modules",
      "App Store",
      "Google Play",
      "Formik",
      "Yup",
    ],
  },
  {
    name: "Testing",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500",
    tags: ["Jest", "React Testing Library", "Supertest", "Cypress"],
  },
  {
    name: "Security",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500",
    tags: ["OAuth 2.0", "OpenID Connect", "JWT", "Auth0"],
  },
  {
    name: "Real-Time",
    color: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500",
    tags: [
      "WebSockets",
      "Firebase Realtime Database",
      "Redis Pub/Sub",
      "GraphQL Subscriptions",
      "MQTT",
      "Kafka",
      "RabbitMQ",
      "ActiveMQ",
      "SignalR (.NET)",
    ],
  },
]

export function PaletteDetailSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  // Deterministic pseudo-random based on index (seed-like approach)
  const getRandomValue = (index: number, seed: number) => {
    const hash = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453
    return hash - Math.floor(hash)
  }

  // Round to 2 decimal places for consistent server/client rendering
  const roundValue = (value: number, decimals: number = 2) => {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
  }

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const width = roundValue(getRandomValue(i, 1) * 60 + 20)
          const height = roundValue(getRandomValue(i, 2) * 60 + 20)
          const left = roundValue(getRandomValue(i, 3) * 100)
          const top = roundValue(getRandomValue(i, 4) * 100)
          const delay = roundValue(getRandomValue(i, 5) * 5)
          const duration = roundValue(getRandomValue(i, 6) * 10 + 10)

          return (
            <div
              key={i}
              className="absolute rounded-full bg-purple-600/10 blur-xl animate-float"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          )
        })}
      </div>

      <motion.div
        className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {paletteCategories.map((category, index) => (
          <motion.div key={index} variants={cardVariants}>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className={`bg-zinc-900/50 backdrop-blur-sm border-2 ${category.borderColor} rounded-2xl p-6`}
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className={`px-3 py-1 bg-gradient-to-r ${category.color} bg-opacity-20 rounded-full text-sm text-gray-300 cursor-default`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
