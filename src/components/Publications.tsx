import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const publications = [
  {
    title: "Visual Crowding in Glaucoma",
    journal: "IOVS - Investigative Ophthalmology & Visual Science",
    year: "2019",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=-E1DW2oAAAAJ&citation_for_view=-E1DW2oAAAAJ:Zph67rFs4hoC",
  },
  {
    title: "Mobile Telephone Use and Reaction Time in Drivers With Glaucoma",
    journal: "JAMA Network Open",
    year: "2019",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=-E1DW2oAAAAJ&citation_for_view=-E1DW2oAAAAJ:eQOLeE2rZwMC",
  },
  {
    title: "Performance na condução de automóvel por pacientes portadores de glaucoma primário de ângulo aberto: atenção dividida e discriminação de objetos",
    journal: "Universidade de São Paulo",
    year: "2020",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=-E1DW2oAAAAJ&citation_for_view=-E1DW2oAAAAJ:M3ejUd6NZC8C",
  },
];

const Publications = () => {
  return (
    <section id="publicacoes" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Produção Científica
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Artigos Publicados
          </h2>
          <p className="text-muted-foreground">
            Contribuições científicas para o avanço do conhecimento em oftalmologia.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {publications.map((publication, index) => (
            <Card 
              key={index}
              className="bg-card border-border/50 hover:shadow-card hover:border-primary/30 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                  <BookOpen className="h-4 w-4" />
                  {publication.year}
                </div>
                <CardTitle className="text-lg leading-snug">
                  {publication.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {publication.journal}
                </CardDescription>
                <a 
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Ver no Google Scholar
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://scholar.google.com.br/citations?user=-E1DW2oAAAAJ&hl=pt-BR&oi=sra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <BookOpen className="h-5 w-5" />
              Ver Todas as Publicações no Google Scholar
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
