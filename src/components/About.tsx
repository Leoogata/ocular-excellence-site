import { User, Heart, Eye } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/6] rounded-2xl bg-muted overflow-hidden shadow-card">
                <img
                  src="/ocular-excellence-site/images/nara-ogata.jpeg"
                  alt="Foto da Dra. Nara Ogata"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
              <Eye className="h-4 w-4" />
              Sobre a Profissional
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Compromisso com a excelência em
              <span className="text-primary"> cuidados oftalmológicos</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                [Placeholder: Breve descrição sobre a Dra. Nara Ogata, sua trajetória profissional e filosofia de atendimento. 
                Este texto deve ser personalizado com informações reais sobre a profissional.]
              </p>
              <p>
                Com formação de excelência pela Faculdade de Medicina de Jundiaí e doutorado pela USP, 
                a Dra. Nara Ogata dedica sua carreira ao diagnóstico e tratamento de doenças oculares, 
                com especial atenção ao glaucoma e glaucoma congênito.
              </p>
              <p>
                Atualmente, é responsável pelo setor de Glaucoma Congênito do Hospital das Clínicas da 
                Faculdade de Medicina da USP, contribuindo ativamente para a pesquisa e formação de 
                novos especialistas na área.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Atendimento Humanizado</h4>
                  <p className="text-sm text-muted-foreground">Cuidado personalizado para cada paciente</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Tecnologia Avançada</h4>
                  <p className="text-sm text-muted-foreground">Equipamentos de última geração</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
