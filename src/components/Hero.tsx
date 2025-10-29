import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desenvolvedor de aplicações web com ênfase em performance, design e arquitetura moderna 🚀";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-card">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <p className="text-primary text-sm md:text-base font-medium mb-4 tracking-wide">OLÁ, EU SOU</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
          Pedro Jesus
        </h1>
        <div className="h-16 md:h-20 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground min-h-[2em]">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(207_90%_54%/0.5)] transition-all duration-300 hover:scale-105"
          >
            Ver Projetos
          </button>
          <a
            href="mailto:pa04052007@gmail.com"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
          >
            Entre em Contato
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
