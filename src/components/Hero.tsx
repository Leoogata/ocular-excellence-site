import { Phone, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/20 text-brand-green text-sm font-medium mb-6 animate-fade-up">
              <Award className="h-4 w-4" />
              Especialista em Glaucoma e Catarata
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Dra. Nara Ogata
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-brand-green mt-2">
                Oftalmologista
              </span>
            </h1>

            <p className="text-lg text-brand-white/70 max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Doutora em Ciências pela Faculdade de Medicina da USP, com especialização em Glaucoma e Glaucoma Congênito pelo Hospital das Clínicas. 
              Cuidado especializado e humanizado para a saúde dos seus olhos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="brand" size="lg" asChild>
                <a href="tel:+5511999999999" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Agendar Consulta
                </a>
              </Button>
              <Button variant="brandOutline" size="lg" asChild>
                <a href="#locais" className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Ver Locais de Atendimento
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-brand-white/10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-brand-green">10+</div>
                <div className="text-sm text-brand-white/60">Anos de Experiência</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-brand-green">USP</div>
                <div className="text-sm text-brand-white/60">Doutorado</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-brand-green">HC</div>
                <div className="text-sm text-brand-white/60">Especialização</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Eye Symbol from Logo */}
              <div className="w-80 h-80 rounded-full border-2 border-brand-green/50 flex items-center justify-center animate-float">
                <div className="w-64 h-64 rounded-full border-2 border-brand-green/30 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-brand-dark border-2 border-brand-green flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-brand-green/80" />
                  </div>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full shadow-glow blur-xl opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-brand-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-brand-green rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
