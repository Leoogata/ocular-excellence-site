import logoDark from "@/assets/logo-dark-bg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-brand-dark border-t border-brand-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logoDark} alt="Dra. Nara Ogata - Oftalmologista" className="h-10 w-auto" />
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-brand-white/60">
            <a href="#sobre" className="hover:text-brand-green transition-colors">Sobre</a>
            <a href="#especialidades" className="hover:text-brand-green transition-colors">Especialidades</a>
            <a href="#formacao" className="hover:text-brand-green transition-colors">Formação</a>
            <a href="#publicacoes" className="hover:text-brand-green transition-colors">Publicações</a>
            <a href="#locais" className="hover:text-brand-green transition-colors">Locais</a>
            <a href="#contato" className="hover:text-brand-green transition-colors">Contato</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-brand-white/40">
            © {currentYear} Dra. Nara Ogata
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-brand-white/10 text-center">
          <p className="text-xs text-brand-white/40 max-w-2xl mx-auto">
            As informações contidas neste site têm caráter informativo e não substituem uma consulta médica. 
            Para diagnóstico e tratamento, agende uma consulta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
