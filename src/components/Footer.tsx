import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/pedrojesusdev",
      color: "hover:text-[#333]"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/pedro-jesus-8084021b5",
      color: "hover:text-[#0A66C2]"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/pedro.jesus_",
      color: "hover:text-[#E4405F]"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:pa04052007@gmail.com",
      color: "hover:text-primary"
    }
  ];

  return (
    <footer id="contato" className="bg-gradient-to-t from-card to-background py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Vamos <span className="text-primary">Conversar?</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </p>

          <div className="flex justify-center gap-6 py-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-muted rounded-lg text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(207_90%_54%/0.3)]`}
                  aria-label={social.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              Feito com 💻 por <span className="text-primary font-semibold">Pedro Jesus</span> — Desenvolvedor Front-End
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
