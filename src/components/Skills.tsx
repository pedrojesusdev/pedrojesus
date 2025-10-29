import { Code2, Coffee, FileCode2, Layers, Database, Globe } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "React / Next.js", icon: Layers, color: "text-[#61DAFB]" },
    { name: "JavaScript", icon: FileCode2, color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: Code2, color: "text-[#3178C6]" },
    { name: "Java", icon: Coffee, color: "text-[#007396]" },
    { name: "Python", icon: Database, color: "text-[#3776AB]" },
    { name: "HTML / CSS", icon: Globe, color: "text-primary" }
  ];

  return (
    <section id="habilidades" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Minhas <span className="text-primary">Habilidades</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-background border border-border rounded-xl p-6 flex flex-col items-center gap-4 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(207_90%_54%/0.2)] hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${skill.color} transition-transform duration-300 group-hover:scale-110 group-hover:animate-float`}>
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground text-center group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
