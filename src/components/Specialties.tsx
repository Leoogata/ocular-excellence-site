import { Eye, Baby, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const specialties = [
  {
    icon: Eye,
    title: "Glaucoma",
    description: "Diagnóstico precoce e tratamento especializado do glaucoma, incluindo acompanhamento clínico e indicação cirúrgica quando necessário.",
  },
  {
    icon: Baby,
    title: "Glaucoma Congênito",
    description: "Especialização no diagnóstico e tratamento do glaucoma em recém-nascidos e crianças, com abordagem delicada e precisa.",
  },
  {
    icon: Sparkles,
    title: "Catarata",
    description: "Avaliação completa e cirurgia de catarata com técnicas modernas, visando a melhor qualidade visual para o paciente.",
  },
];

const Specialties = () => {
  return (
    <section id="especialidades" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
            <Eye className="h-4 w-4" />
            Áreas de Atuação
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Subespecialidades
          </h2>
          <p className="text-muted-foreground">
            Atendimento especializado nas principais áreas da oftalmologia, 
            com foco em diagnóstico preciso e tratamento de excelência.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card 
              key={specialty.title}
              className="group bg-card border-border/50 hover:shadow-card hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <specialty.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{specialty.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {specialty.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
