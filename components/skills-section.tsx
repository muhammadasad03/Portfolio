const skills = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "TS" },
  { name: "React Native", icon: "RN" },
  { name: "Android", icon: "🤖" },
  { name: "JavaScript", icon: "JS" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "GraphQL", icon: "◆" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="aspect-square bg-secondary rounded-2xl flex flex-col items-center justify-center gap-3 hover:bg-secondary/80 transition-colors group"
          >
            <div className="text-5xl group-hover:scale-110 transition-transform">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
