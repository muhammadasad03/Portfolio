"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { SectionHeading } from "@/components/section-heading"

const mobileProjects = [
  // Featured React Native / Flutter apps
  {
    title: "Hakeem Easy Finance",
    description:
      "A digital nano-financing platform providing easy personal loans. Increased loan disbursement volume by 20%, reaching over 1M+ users.",
    platform: "Both",
    tech: "React Native / Flutter",
    image: "/project-ecommerce.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.waleefinancialservices.hakeem&hl=en",
    iosLink: "https://apps.apple.com/pk/app/hakeem-easy-finance/id6475678603",
  },
  {
    title: "CarSwitch",
    description:
      "UAE's ultimate platform for buying and selling used cars across Dubai, Abu Dhabi & Sharjah, with end-to-end inspection and transfer support.",
    platform: "iOS",
    tech: "React Native / Flutter",
    image: "/project-ecommerce.jpg",
    iosLink: "https://apps.apple.com/us/app/carswitch-used-cars-in-uae/id1213284852",
  },
  {
    title: "BigBaat",
    description:
      "A social media platform designed to support and grow content creators. Increased user engagement by 30% by empowering creators with new tools.",
    platform: "Both",
    tech: "React Native / Flutter",
    image: "/project-ecommerce.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.bigbaat",
    iosLink: "https://apps.apple.com/pk/app/bigbaat/id6651854534",
  },
  // Apps available on both platforms
  {
    title: "SenSights",
    description:
      "Cloud-based platform delivering remote monitoring, personal emergency response & telehealth services for seniors along with risk monitoring and screening for senior care workers.",
    platform: "Both",
    tech: "React Native",
    image: "/project-sensights.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.sensights&hl=en&gl=US",
    iosLink: "https://apps.apple.com/tt/app/sensights/id1522446657",
  },
  {
    title: "Nearpeer",
    description:
      "Pakistan's largest online learning platform leveraging AI technology, providing students ease of learning at affordable prices. Enhanced user engagement by 25%, with over 100k users.",
    platform: "Both",
    tech: "React Native / Flutter",
    image: "/project-nearpeer.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=org.nearpeer.learning",
    iosLink: "https://apps.apple.com/ca/app/nearpeer/id1525357562",
  },
  {
    title: "Digi Khata",
    description:
      "Empowering MSMEs in Pakistan with reliable & simple business solutions. Helps businesses record credits easily with a few clicks, replacing outdated bookkeeping methods.",
    platform: "Both",
    tech: "React Native",
    image: "/project-digi-khata.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.androidapp.digikhata",
    iosLink: "https://apps.apple.com/us/app/digi-khata-udhar-credit-book/id1571599845",
  },
  {
    title: "Shop: All Your Favourite Brands",
    description:
      "Shop the latest trends and stay connected to your favorite brands. Get personalized recommendations, sale notifications, and experience new ways to shop.",
    platform: "Both",
    tech: "React Native",
    image: "/project-shop-brands.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.shopify.arrive",
    iosLink: "https://apps.apple.com/pk/app/shop-all-your-favorite-brands/id1223471316",
  },
  {
    title: "DVM Central",
    description:
      "Your ultimate source for professional needs in veterinary practices. Easily explore webinars, guides, and get updates on upcoming conferences.",
    platform: "Both",
    tech: "React Native",
    image: "/project-dvm-central.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.gtechsources.vetandtech.app",
    iosLink: "https://apps.apple.com/pk/app/vet-and-tech/id1634400448",
  },
  {
    title: "GerVetUSA",
    description:
      "Symbol of Excellence, Innovation, and Reliability for veterinarians worldwide. FDA guidelines compliant, ISO 13485 certified with 1st Grade German Forged products.",
    platform: "Both",
    tech: "React Native",
    image: "/project-dvm-central.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.gtechsources.gervetusa.app",
    iosLink: "https://apps.apple.com/pk/app/gervetusa/id1644352801",
  },
  // Android only apps
  {
    title: "GrogerApp - Grocery Delivery",
    description:
      "Pakistan's leading online grocery store offering same day grocery delivery. Access the biggest online supermarket in Lahore, Islamabad, Rawalpindi & Faisalabad.",
    platform: "Android",
    tech: "React Native",
    image: "/project-groger-app.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.barfee.mart",
  },
  {
    title: "YoFamous",
    description:
      "Collect stars and climb the charts. Connect with friends and show the world your unique life through images and videos across multiple categories.",
    platform: "Android",
    tech: "React Native",
    image: "/project-yofamous.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=yo.com.yofamous",
  },
  {
    title: "Rainbow",
    description:
      "Alcatel-Lucent Rainbow is a secure collaboration engine. Interact through chat, voice or video and share screens and files with ease.",
    platform: "Android",
    tech: "React Native",
    image: "/project-rainbow.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.ale.rainbow&pli=1",
  },
  {
    title: "Out4Rent",
    description:
      "Optimized rental listing app to search homes, apartments and post spots for rent. Find luxury rental homes across all US states and cities.",
    platform: "Android",
    tech: "React Native",
    image: "/project-out4rent.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.out4rent",
  },
  {
    title: "AW Football",
    description:
      "Monitor the load of your football team. Create surveys from given questions and send them to players whenever you want.",
    platform: "Android",
    tech: "React Native",
    image: "/project-ecommerce.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.awfootball.app",
  },
  {
    title: "Clicky Online Shopping",
    description:
      "Best online shopping app in Pakistan to buy trendiest fashion products with variety of colours and designs. Best deals and discounts available.",
    platform: "Android",
    tech: "React Native",
    image: "/project-shop-brands.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.clicky.pk",
  },
  {
    title: "Neoestudio Guardia Civil",
    description:
      "Online academy with competitive system to predict success chances by monitoring performance and rankings in real time for Guardia Civil preparation.",
    platform: "Android",
    tech: "React Native",
    image: "/project-ecommerce.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.neostudio",
  },
  {
    title: "Mooner",
    description:
      "All-in-one service booking application. Get services rendered when you want, at prices within your budget. Empowering self-employment.",
    platform: "Android",
    tech: "React Native",
    image: "/project-ecommerce.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.app.mooner",
  },
  {
    title: "Gemma Pell",
    description: "Travel and visit Paris with ease and serenity using Gemma Pell transportation service.",
    platform: "Android",
    tech: "React Native",
    image: "/project-ecommerce.jpg",
    androidLink: "https://play.google.com/store/apps/details?id=com.gemmapell.passenger",
  },
  // iOS only apps
  {
    title: "Udhaar Book",
    description:
      "Your digital Khatabook, Cashbook, Salary Book, Invoice Maker, and Inventory manager. The only app you need to run and grow your business.",
    platform: "iOS",
    tech: "React Native",
    image: "/project-udhaar-book.jpg",
    iosLink: "https://apps.apple.com/pk/app/udhaar-book-digi-khata-book/id1542333203",
  },
  {
    title: "Free People",
    description:
      "Browse new arrivals, back-in-stock favorites, FP Movement activewear, beauty & wellness, intimates, denim, shoes and exclusive app-only offers.",
    platform: "iOS",
    tech: "React Native",
    image: "/project-shop-brands.jpg",
    iosLink: "https://apps.apple.com/pk/app/free-people/id659532790",
  },
  {
    title: "Zbooni",
    description:
      "End-to-end cCommerce solution. Get set up in minutes, harness real-time conversations with customers and expand into new sales channels.",
    platform: "iOS",
    tech: "React Native",
    image: "/project-zbooni.jpg",
    iosLink: "https://apps.apple.com/pk/app/zbooni/id1222835796",
  },
  {
    title: "Vet and Tech",
    description:
      "Ultimate source for educational and professional needs in veterinary practices. Access CE courses, webinars, guides and conference updates.",
    platform: "iOS",
    tech: "React Native",
    image: "/project-dvm-central.jpg",
    iosLink: "https://apps.apple.com/pk/app/vet-and-tech/id6444670528",
  },
]

export function MobileProjectsSection() {
  const [filter, setFilter] = useState("All")
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filteredProjects = mobileProjects.filter((project) => {
    if (filter === "All") return true
    if (filter === "Android") return project.platform === "Android" || project.platform === "Both"
    if (filter === "iOS") return project.platform === "iOS" || project.platform === "Both"
    return true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  // Deterministic pseudo-random based on index (seed-like approach)
  const getRandomValue = (index: number, seed: number) => {
    const hash = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453
    return hash - Math.floor(hash)
  }

  // Round to 2 decimal places for consistent server/client rendering
  const roundValue = (value: number, decimals: number = 2) => {
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
  }

  return (
    <section id="mobile" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => {
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

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Mobile Development"
          title={<>React Native &amp; Flutter <span className="gradient-text">Applications</span></>}
          subtitle="A showcase of React Native and Flutter mobile applications I've developed for Android and iOS platforms."
          inView={inView}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 -mt-8"
        >
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-4">
            {["All", "Android", "iOS"].map((item) => (
              <motion.button
                key={item}
                onClick={() => setFilter(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === item ? "bg-purple-600 text-white" : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            Showing {filteredProjects.length} of {mobileProjects.length} applications
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl overflow-hidden group h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className={`absolute top-4 right-4 px-3 py-1 text-white rounded-full text-xs font-medium ${
                      project.platform === "Both"
                        ? "bg-purple-600"
                        : project.platform === "Android"
                          ? "bg-green-600"
                          : "bg-blue-600"
                    }`}
                  >
                    {project.platform === "Both" ? "Android & iOS" : project.platform}
                  </motion.span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs">
                      {project.tech}
                    </span>
                    <div className="flex gap-2">
                      {project.androidLink && (
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.androidLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-green-600/20 text-green-400 rounded-full hover:bg-green-600/40 transition-colors"
                          title="View on Play Store"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                      {project.iosLink && (
                        <motion.a
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.iosLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600/40 transition-colors"
                          title="View on App Store"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
