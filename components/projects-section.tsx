import { ProjectCard } from "@/components/project-card"

export function ProjectsSection() {
  const projects = [
    {
      name: "Hakeem Easy Finance",
      description:
        "A digital nano-financing app offering Shariah-compliant instant loans with a smooth and secure user experience.",
      image: "/modern-finance-app-interface-with-islamic-geometri.jpg",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.waleefinancialservices.hakeem",
      appStoreUrl: "https://apps.apple.com/pk/app/hakeem-easy-finance/id6475678603",
      websiteUrl: "https://hakeem.tech/",
      tags: ["React Native", "Finance", "Security"],
    },
    {
      name: "NearPeer",
      description:
        "An AI-powered ed-tech platform delivering video-based courses across multiple academic fields for Pakistani students.",
      image: "/educational-technology-platform-with-ai-elements-a.jpg",
      playStoreUrl: "https://play.google.com/store/apps/details?id=org.nearpeer.learning",
      appStoreUrl: "https://apps.apple.com/us/app/nearpeer/id1525357562",
      websiteUrl: "https://nearpeer.org/",
      tags: ["React Native", "AI", "Education"],
    },
    {
      name: "Vet and Tech",
      description:
        "A multi-vendor marketplace for veterinarians and animal health professionals to access products, courses, and services.",
      image: "/veterinary-marketplace-app-with-animal-health-prod.jpg",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.gtechsources.vetresources.app",
      appStoreUrl: "https://apps.apple.com/pk/app/vet-and-tech/id6444670528",
      websiteUrl: "https://www.vetandtech.com/",
      tags: ["React Native", "E-commerce", "Healthcare"],
    },
    {
      name: "VIWELL",
      description:
        "A corporate wellbeing platform designed to enhance employee health and productivity through AI-driven wellness insights.",
      image: "/corporate-wellness-app-with-health-analytics-dashb.jpg",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.viwell.app",
      appStoreUrl: "https://apps.apple.com/us/app/viwell/id1669218312",
      websiteUrl: "https://www.viwell.com/",
      tags: ["React Native", "AI", "Wellness"],
    },
    {
      name: "SenSights",
      description:
        "A cloud-based telehealth and monitoring platform providing remote care, emergency alerts, and analytics for seniors.",
      image: "/senior-care-telehealth-monitoring-platform-with-he.jpg",
      appStoreUrl: "https://apps.apple.com/us/app/sensights/id1522446657",
      tags: ["React Native", "Healthcare", "IoT"],
    },
  ]

  return (
    <section id="portfolio" className="scroll-mt-20 container mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
      <p className="text-muted-foreground mb-12 text-lg">
        High-performance mobile applications built with React Native
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
