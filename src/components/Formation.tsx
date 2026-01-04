import { GraduationCap, Award, Building, Users } from "lucide-react";

const formations = [
  {
    icon: GraduationCap,
    title: "Doutorado em Ciências",
    institution: "Faculdade de Medicina da USP",
    type: "Formação Acadêmica",
  },
  {
    icon: GraduationCap,
    title: "Pós-Graduação em Docência e Preceptoria",
    institution: "Einstein Ensino e Pesquisa",
    type: "Formação Acadêmica",
  },
  {
    icon: GraduationCap,
    title: "Graduação em Medicina",
    institution: "Faculdade de Medicina de Jundiaí",
    type: "Formação Acadêmica",
  },
  {
    icon: Award,
    title: "Residência em Oftalmologia",
    institution: "Faculdade de Medicina de Jundiaí",
    type: "Especialização",
  },
  {
    icon: Award,
    title: "Título de Especialista",
    institution: "Conselho Brasileiro de Oftalmologia",
    type: "Certificação",
  },
  {
    icon: Building,
    title: "Especialização em Glaucoma e Glaucoma Congênito",
    institution: "Hospital das Clínicas da FMUSP",
    type: "Especialização",
  },
  {
    icon: Building,
    title: "Especialização em Catarata",
    institution: "Centro Boucault de Especialidades",
    type: "Especialização",
  },
];

const affiliations = [
  {
    icon: Users,
    title: "Responsável pelo Glaucoma Congênito",
    institution: "Hospital das Clínicas da FMUSP",
  },
  {
    icon: Users,
    title: "Membro",
    institution: "Sociedade Latino-Americana de Glaucoma (SLAG)",
  },
  {
    icon: Users,
    title: "Membro",
    institution: "Sociedade Brasileira de Glaucoma",
  },
];

const Formation = () => {
  return (
    <section id="formacao" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
            <GraduationCap className="h-4 w-4" />
            Currículo
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Formação e Qualificações
          </h2>
          <p className="text-muted-foreground">
            Trajetória acadêmica e profissional de excelência nas melhores instituições do Brasil.
          </p>
        </div>

        {/* Formation Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Formação Acadêmica e Especializações
          </h3>
          
          <div className="space-y-4 mb-16">
            {formations.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">
                    {item.type}
                  </span>
                  <h4 className="text-lg font-semibold text-foreground mt-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Affiliations */}
          <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Atuação e Afiliações
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {affiliations.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-muted/50 border border-border/50 text-center hover:bg-muted transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
