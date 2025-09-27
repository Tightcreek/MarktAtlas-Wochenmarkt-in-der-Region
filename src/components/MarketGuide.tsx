import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, ShoppingCart, Users, Utensils, Car } from "lucide-react";

interface MarketGuideProps {
  city: string;
  marketType: "weekly" | "christmas";
}

export const MarketGuide = ({ city, marketType }: MarketGuideProps) => {
  const weeklyMarketGuide = {
    title: `Wochenmarkt-Guide für ${city}`,
    description: `Alles was Sie über Wochenmärkte in ${city} wissen müssen`,
    sections: [
      {
        icon: <Clock className="w-5 h-5" />,
        title: "Beste Besuchszeiten",
        content: `Früh am Morgen für die frischeste Auswahl, nachmittags für Sonderangebote. Die meisten Märkte in ${city} sind vormittags am lebhaftesten.`
      },
      {
        icon: <ShoppingCart className="w-5 h-5" />,
        title: "Was Sie mitbringen sollten",
        content: "Stofftaschen oder Korb, ausreichend Bargeld (die meisten Stände akzeptieren nur Bargeld), eventuell Kühlakku für empfindliche Produkte."
      },
      {
        icon: <Utensils className="w-5 h-5" />,
        title: "Saisonale Highlights",
        content: "Frühjahr: Spargel, Erdbeeren; Sommer: Beeren, Tomaten; Herbst: Äpfel, Kürbisse; Winter: Kohl, Wurzelgemüse, eingelegte Spezialitäten."
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Markt-Etikette",
        content: "Freundlich grüßen, nicht alle Produkte anfassen, nach Proben fragen ist meist willkommen, Preise sind oft verhandelbar."
      },
      {
        icon: <MapPin className="w-5 h-5" />,
        title: "Anfahrt & Parken",
        content: `Die meisten Märkte in ${city} sind gut mit öffentlichen Verkehrsmitteln erreichbar. Parkplätze sind oft begrenzt - früh kommen oder ÖPNV nutzen.`
      },
      {
        icon: <Car className="w-5 h-5" />,
        title: "Nachhaltig einkaufen",
        content: "Regionale Produkte bevorzugen, Plastikverpackungen vermeiden, eigene Behälter mitbringen, nach Bio-Anbau fragen."
      }
    ]
  };

  const christmasMarketGuide = {
    title: `Weihnachtsmarkt-Guide für ${city}`,
    description: `Ihr Leitfaden für die schönste Weihnachtszeit in ${city}`,
    sections: [
      {
        icon: <Clock className="w-5 h-5" />,
        title: "Beste Besuchszeiten",
        content: "Unter der Woche weniger überfüllt, am Wochenende festlichere Stimmung. Abends besonders romantisch durch die Beleuchtung."
      },
      {
        icon: <Utensils className="w-5 h-5" />,
        title: "Kulinarische Highlights",
        content: "Glühwein, gebrannte Mandeln, Lebkuchen, regionale Spezialitäten. Jeder Stand hat seine eigenen Rezepte und Variationen."
      },
      {
        icon: <ShoppingCart className="w-5 h-5" />,
        title: "Geschenke-Shopping",
        content: "Handgefertigter Weihnachtsschmuck, regionale Spezialitäten, Kunsthandwerk. Einzigartige Geschenke abseits der Mainstream-Läden."
      },
      {
        icon: <Users className="w-5 h-5" />,
        title: "Familienfreundlich",
        content: "Kinderkarussells, Märchenstunden, warme Getränke für alle Altersgruppen. Die meisten Märkte haben spezielle Kinderaktionen."
      },
      {
        icon: <MapPin className="w-5 h-5" />,
        title: "Anfahrt & Parken",
        content: `Weihnachtsmärkte in ${city} sind meist zentral gelegen. ÖPNV wird empfohlen, da Parkplätze rar und teuer sind.`
      },
      {
        icon: <Car className="w-5 h-5" />,
        title: "Praktische Tipps",
        content: "Warme Kleidung, bequeme Schuhe, Bargeld mitbringen, Glühweinbecher als Souvenir behalten, bei Menschenmassen Geduld mitbringen."
      }
    ]
  };

  const guide = marketType === "weekly" ? weeklyMarketGuide : christmasMarketGuide;

  return (
    <section className="mt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{guide.title}</h2>
        <p className="text-muted-foreground">{guide.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guide.sections.map((section, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                {section.icon}
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {section.content}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};