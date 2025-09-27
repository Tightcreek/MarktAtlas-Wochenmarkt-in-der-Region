import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChristmasMarket } from "@/data/weihnachtsmarktdata";

interface ChristmasMarketFAQProps {
  market: ChristmasMarket;
}

export const ChristmasMarketFAQ = ({ market }: ChristmasMarketFAQProps) => {
  const faqs = [
    {
      question: `Wann hat der ${market.name} 2025 geöffnet?`,
      answer: `Der ${market.name} ist vom ${market.openingDates} geöffnet. Öffnungszeiten: ${market.openingHours}. Eintritt: ${market.entryPrice || 'frei'}.`
    },
    {
      question: `Was sind die Highlights des ${market.name}?`,
      answer: `Die besonderen Attraktionen sind: ${market.highlights?.join(', ') || market.specialties.join(', ')}. Der Markt bietet außerdem: ${market.specialties.join(', ')}.`
    },
    {
      question: `Wie erreiche ich den ${market.name}?`,
      answer: `Adresse: ${market.address}, ${market.postalCode} ${market.city}. Anfahrt: ${market.transport}. ${market.parking ? `Parkmöglichkeiten: ${market.parking}` : ''}`
    },
    {
      question: `Welche Spezialitäten gibt es auf dem ${market.name}?`,
      answer: `Der ${market.name} bietet folgende regionale Leckereien: ${market.specialties.join(', ')}. Alle Spezialitäten werden frisch vor Ort zubereitet.`
    },
    {
      question: `Ist der ${market.name} für Familien mit Kindern geeignet?`,
      answer: `Ja, der ${market.name} ist sehr familienfreundlich. Es gibt spezielle Kinderattraktionen, Karussells und kinderfreundliche Stände. Warme Getränke und Snacks für die ganze Familie sind ebenfalls verfügbar.`
    },
    {
      question: `Gibt es auf dem ${market.name} Glühwein und warme Getränke?`,
      answer: `Selbstverständlich! Der ${market.name} bietet eine große Auswahl an warmen Getränken: Glühwein, Feuerzangenbowle, Kinderpunsch und heiße Schokolade. Jeder Stand hat seine eigenen Spezialitäten.`
    },
    {
      question: `Kann ich auf dem ${market.name} Weihnachtsgeschenke kaufen?`,
      answer: `Ja, der ${market.name} ist perfekt für Weihnachtseinkäufe. Sie finden handgefertigte Geschenke, Kunsthandwerk, Weihnachtsschmuck und regionale Spezialitäten als Geschenke.`
    },
    {
      question: `Wie ist das Wetter beim ${market.name} im Dezember?`,
      answer: `Der ${market.name} findet bei jedem Wetter statt. Bei Regen gibt es überdachte Stände und Glühweinstände zum Aufwärmen. Warme Kleidung wird empfohlen, da der Markt im Freien stattfindet.`
    }
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Häufig gestellte Fragen zum {market.name}</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};