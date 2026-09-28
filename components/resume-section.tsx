import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Hakeem Easy Finance",
    period: "2023 - Present",
    description:
      "Leading mobile development for a Shariah-compliant nano-financing platform. Architected scalable React Native solutions, implemented advanced security features, and optimized app performance by 40%.",
    achievements: [
      "Built end-to-end loan application flow with real-time validation",
      "Integrated biometric authentication and secure payment gateways",
      "Mentored junior developers and established code review practices",
    ],
  },
  {
    title: "React Native Developer",
    company: "NearPeer",
    period: "2021 - 2023",
    description:
      "Developed AI-powered educational platform serving thousands of Pakistani students. Implemented video streaming, offline course access, and personalized learning features.",
    achievements: [
      "Built custom video player with adaptive streaming",
      "Implemented offline-first architecture with background sync",
      "Increased user engagement by 25% through UX improvements",
    ],
  },
  {
    title: "Mobile Application Developer",
    company: "Vet and Tech",
    period: "2020 - 2021",
    description:
      "Created multi-vendor marketplace for veterinary professionals. Developed product catalog, order management, and integrated payment systems.",
    achievements: [
      "Built real-time inventory management system",
      "Implemented push notifications for order updates",
      "Optimized app bundle size by 30%",
    ],
  },
  {
    title: "Software Engineer",
    company: "VIWELL",
    period: "2019 - 2020",
    description:
      "Developed corporate wellness platform with AI-driven health insights. Built employee health tracking, analytics dashboards, and wellness program features.",
    achievements: [
      "Integrated wearable device data synchronization",
      "Built interactive health analytics visualizations",
      "Implemented gamification features to boost engagement",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Engineering and Technology",
    period: "2015 - 2019",
    description: "Focused on software engineering, mobile development, and data structures.",
  },
]

export function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Resume
        <span className="block w-12 h-1 bg-primary mt-3 rounded-full"></span>
      </h2>
      <p className="text-muted-foreground mb-12 text-lg">My professional journey and education</p>

      <div className="space-y-12">
        {/* Experience Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <div className="bg-secondary rounded-2xl p-6 hover:bg-secondary/80 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium bg-background px-3 py-1 rounded-lg w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-xl">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-border">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <div className="bg-secondary rounded-2xl p-6 hover:bg-secondary/80 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium bg-background px-3 py-1 rounded-lg w-fit">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
