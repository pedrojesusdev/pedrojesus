import profileImage from "@/assets/foto_perfil.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          Sobre <span className="text-primary">Mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300" />
              <img
                src={profileImage}
                alt="Pedro Jesus"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-background"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou <span className="text-primary font-semibold">Pedro Jesus</span>, desenvolvedor web com foco em Front-End e apaixonado por criar interfaces modernas e funcionais.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estudo Ciência da Computação na <span className="text-foreground font-semibold">UFS (Universidade Federal de Sergipe)</span> e utilizo tecnologias como <span className="text-primary font-semibold">Next.js, React, TypeScript</span> e <span className="text-primary font-semibold">JavaScript</span> para construir aplicações performáticas e intuitivas.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Também possuo experiência com <span className="text-foreground font-semibold">Java</span> e <span className="text-foreground font-semibold">Python</span>, o que me permite atuar de forma versátil em diferentes contextos de desenvolvimento.
            </p>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-2">📍 Aracaju - SE, Brasil</p>
              <p className="text-sm text-muted-foreground">🎓 Ciência da Computação - UFS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
