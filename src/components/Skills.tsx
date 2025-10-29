import { Code2, Coffee, FileCode2, Atom, Globe } from "lucide-react";

const SnakeIcon = ({ size = 48, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 3c-2.5 0-4 2-4 4.5S7 10 9 10c1.5 0 2.5-.5 3-1.5" />
    <path d="M12 8.5c.5-1 1.5-1.5 3-1.5 2 0 4.5 1.5 4.5 4S17.5 15 15 15c-1.5 0-2.5-.5-3-1.5" />
    <path d="M12 13.5c-.5 1-1.5 1.5-3 1.5-2.5 0-4.5-1.5-4.5-4S6.5 7 9 7" />
    <circle cx="6" cy="6" r="1" fill="currentColor" />
  </svg>
);

const Skills = () => {
  const skills = [
    { name: "React / Next.js", icon: Atom, color: "text-[#61DAFB]" },
    { name: "JavaScript", icon: FileCode2, color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: Code2, color: "text-[#3178C6]" },
    { name: "Java", icon: Coffee, color: "text-[#007396]" },
    { name: "Python", icon: SnakeIcon, color: "text-[#3776AB]" },
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
