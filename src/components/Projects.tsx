import { ExternalLink, Github } from "lucide-react";
import blackFridayImage from "@/assets/print_black_friday.png";
import nastroImage from "@/assets/print_nastro_new.png";
import elevBusinessImage from "@/assets/print_elev_business.png";

const Projects = () => {
  const projects = [
    {
      title: "Elev Business",
      description: "Plataforma digital completa para gestão de negócios, oferecendo soluções integradas para empresas que buscam transformação digital e crescimento.",
      image: elevBusinessImage,
      link: "https://elevbusiness.vercel.app",
      github: "https://github.com/pedrojesusdev/elev-digital-hub",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Black Impulse",
      description: "Landing page promocional para evento de Black Friday com design moderno e impactante, focada em conversão e experiência do usuário.",
      image: blackFridayImage,
      link: "https://black-impulse-elevate.lovable.app/",
      github: "https://github.com/pedrojesusdev/black-impulse-elevate",
      tags: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Nastro Arquitetura",
      description: "Website institucional para empresa de arquitetura e design de interiores, destacando projetos e serviços com elegância e sofisticação.",
      image: nastroImage,
      link: "https://nastroarquitetura.com.br",
      github: "https://github.com/pedrojesusdev/NastroArq.",
      tags: ["Next.js", "React", "CSS Modules"]
    }
  ];

  return (
    <section id="projetos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
          Projetos em <span className="text-primary">Destaque</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Uma seleção dos meus principais projetos, desenvolvidos com foco em design, funcionalidade e experiência do usuário.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_hsl(207_90%_54%/0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Ver Projeto</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
