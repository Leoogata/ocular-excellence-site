import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Consultório Butantã",
    address: "Av Vital Brasil, 305 - Butantã",
    city: "São Paulo - SP",
    phone: "(11) 95573-2340",
    hours: "Segunda-feira",
    mapLink: "https://www.google.com/maps/place/Av.+Vital+Brasil,+305+-+sala+1211+-+Butant%C3%A3,+S%C3%A3o+Paulo+-+SP,+05503-001/@-23.5717198,-46.7072639,15z/data=!4m16!1m9!3m8!1s0x94ce57aaf2075e51:0x1f5fdd0f231cd0d1!2sAv.+Vital+Brasil,+305+-+sala+1211+-+Butant%C3%A3,+S%C3%A3o+Paulo+-+SP,+05503-001!3b1!8m2!3d-23.5719165!4d-46.7073591!10e5!16s%2Fg%2F11qp_1k4mf!3m5!1s0x94ce57aaf2075e51:0x1f5fdd0f231cd0d1!8m2!3d-23.5719165!4d-46.7073591!16s%2Fg%2F11qp_1k4mf?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  },
  {
    name: "Consultório Moema",
    address: "Alameda dos Nhambiquaras, 156 - Moema",
    city: "São Paulo - SP",
    phone: "(11) 95573-2340",
    hours: "Terça-Feira e Quarta-Feira",
    mapLink: "https://www.google.com/maps/place/Alameda+dos+Nhambiquaras,+156+-+Moema,+S%C3%A3o+Paulo+-+SP,+04090-000/@-23.6019372,-46.6545059,15z/data=!4m16!1m9!3m8!1s0x94ce5a19c0de9c91:0x84a82861d62ea825!2sAlameda+dos+Nhambiquaras,+156+-+Moema,+S%C3%A3o+Paulo+-+SP,+04090-000!3b1!8m2!3d-23.6017592!4d-46.6546063!10e5!16s%2Fg%2F11snnxxq47!3m5!1s0x94ce5a19c0de9c91:0x84a82861d62ea825!8m2!3d-23.6017592!4d-46.6546063!16s%2Fg%2F11snnxxq47?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
  },
];

const Locations = () => {
  return (
    <section id="locais" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
            <MapPin className="h-4 w-4" />
            Onde Atendo
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Locais de Atendimento
          </h2>
          <p className="text-muted-foreground">
            Consultas em locais de fácil acesso e com toda a estrutura necessária para seu atendimento.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Card 
              key={index}
              className="bg-card border-border/50 hover:shadow-card hover:border-primary/30 transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-foreground">{location.address}</p>
                  <p className="text-muted-foreground">{location.city}</p>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{location.hours}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>

                <div className="pt-4 flex gap-3">
                  <Button variant="brand" size="sm" className="flex-1" asChild>
                    <a href={`tel:${location.phone.replace(/\D/g, '')}`}>
                      Ligar
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={location.mapLink} target="_blank" rel="noopener noreferrer">
                      Ver no Mapa
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
