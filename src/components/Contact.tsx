import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-white mb-4">
            Agende sua Consulta
          </h2>
          <p className="text-brand-white/70 mb-10 text-lg">
            Entre em contato para agendar sua consulta ou tirar dúvidas sobre nossos serviços.
          </p>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <Button 
              variant="brand" 
              size="lg" 
              className="w-full justify-center gap-3 py-6"
              asChild
            >
              <a href="tel:+5511999999999">
                <Phone className="h-5 w-5" />
                <span className="flex flex-col items-start">
                  <span className="text-xs opacity-80">Telefone</span>
                  <span>(11) 95573-2340</span>
                </span>
              </a>
            </Button>

            <Button 
              variant="brand" 
              size="lg" 
              className="w-full justify-center gap-3 py-6"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                <span className="flex flex-col items-start">
                  <span className="text-xs opacity-80">WhatsApp</span>
                  <span>(11) 91683-6347</span>
                </span>
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="mailto:contato@naraogata.com.br"
              className="flex items-center gap-2 text-brand-white/70 hover:text-brand-green transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">[email@placeholder.com]</span>
            </a>
            <a 
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-white/70 hover:text-brand-green transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="hidden sm:inline">@naraogata</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
