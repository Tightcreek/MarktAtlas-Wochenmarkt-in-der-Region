import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Market } from "@/data/marketdata";

interface MarketFAQProps {
  market: Market;
}

export const MarketFAQ = ({ market }: MarketFAQProps) => {
  const faqs = [
    {
      question: `Wann hat der ${market.name} geöffnet?`,
      answer: `Der ${market.name} in ${market.city} hat folgende Öffnungszeiten: ${market.openingHours}. ${market.isOpen ? 'Der Markt ist aktuell geöffnet.' : 'Der Markt ist derzeit geschlossen.'}`
    },
    {
      question: `Welche Spezialitäten gibt es auf dem ${market.name}?`,
      answer: `Auf dem ${market.name} finden Sie eine große Auswahl an frischen Produkten: ${market.specialties.join(', ')}. Alle Produkte stammen von regionalen Erzeugern und Händlern.`
    },
    {
      question: `Wie erreiche ich den ${market.name}?`,
      answer: `Der ${market.name} befindet sich an folgender Adresse: ${market.address}, ${market.postalCode} ${market.city}. Anfahrt mit öffentlichen Verkehrsmitteln: ${market.transport}`
    },
    {
      question: `Welche Ausstattung und Services bietet der ${market.name}?`,
      answer: `Der Markt verfügt über folgende Einrichtungen und Services: ${market.facilities.join(', ')}. Zusätzlich bietet der Markt: ${market.features.join(', ')}.`
    },
    {
      question: `Gibt es Parkplätze beim ${market.name}?`,
      answer: `Ja, in der Nähe des ${market.name} stehen öffentliche Parkplätze zur Verfügung. Wir empfehlen jedoch die Anreise mit öffentlichen Verkehrsmitteln: ${market.transport}`
    },
    {
      question: `Ist der ${market.name} bei schlechtem Wetter geöffnet?`,
      answer: `Der ${market.name} findet bei jedem Wetter statt. Bei extremen Wetterbedingungen können jedoch einzelne Stände geschlossen bleiben. Für aktuelle Informationen kontaktieren Sie: ${market.phone || 'die Stadtverwaltung'}.`
    },
    {
      question: `Welche Zahlungsmethoden werden auf dem ${market.name} akzeptiert?`,
      answer: `Die meisten Händler auf dem ${market.name} akzeptieren Bargeld. Einige moderne Stände bieten auch EC-Karten-Zahlung an. Wir empfehlen, ausreichend Bargeld mitzubringen.`
    },
    {
      question: `Gibt es spezielle Angebote oder Events auf dem ${market.name}?`,
      answer: `Der ${market.name} bietet regelmäßig saisonale Spezialitäten und Events. Informationen zu besonderen Veranstaltungen erhalten Sie über: ${market.website || market.email || 'die örtliche Stadtverwaltung'}.`
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