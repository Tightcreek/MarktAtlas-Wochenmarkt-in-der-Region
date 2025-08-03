export interface ChristmasMarket {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  description: string;
  openingDates: string; // z.B. "25.11.2024 - 23.12.2024"
  openingHours: string; // z.B. "Mo-Fr 11-21 Uhr"
  imageUrl: string; // Optionales Bild des Marktes
  specialties: string[]; // z.B. ["Glühwein", "Kunsthandwerk", "Kulinarisches"]
  website?: string;
}

export const christmasMarkets: ChristmasMarket[] = [
  {
    id: "nuernberger-christkindlmaerkte",
    slug: "nuernberger-christkindlmaerkte",
    name: "Nürnberger Christkindlmärkte",
    city: "Nürnberg",
    address: "Hauptmarkt, 90403 Nürnberg",
    description: "Einer der berühmtesten Weihnachtsmärkte Deutschlands mit über 180 Ständen. Der Nürnberger Christkindlmarkt verzaubert jährlich über 2 Millionen Besucher mit seinem besonderen Flair, traditionellem Handwerk und kulinarischen Köstlichkeiten. Das berühmte Christkind eröffnet jeden Advent den Markt mit einem feierlichen Prolog.",
    openingDates: "29.11.2024 - 24.12.2024",
    openingHours: "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 10-21 Uhr",
    imageUrl: "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    specialties: ["Lebkuchen", "Glühwein", "Rostbratwürste", "Handwerkskunst", "Christbaumschmuck"],
    website: "https://christkindlesmarkt.de"
  },
  {
    id: "dresdner-striezelmarkt",
    slug: "dresdner-striezelmarkt",
    name: "Dresdner Striezelmarkt",
    city: "Dresden",
    address: "Altmarkt, 01067 Dresden",
    description: "Deutschlands ältester Weihnachtsmarkt mit einer über 580-jährigen Tradition. Der Striezelmarkt ist berühmt für den original Dresdner Christstollen und bietet eine einzigartige Atmosphäre vor der Kulisse der historischen Altstadt. Highlight ist die größte erzgebirgische Stufenpyramide der Welt.",
    openingDates: "28.11.2024 - 24.12.2024",
    openingHours: "Täglich 10-21 Uhr, 24.12. 10-14 Uhr",
    imageUrl: "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    specialties: ["Dresdner Stollen", "Glühwein", "Erzgebirgische Volkskunst", "Pflaumentoffel", "Gebackene Muscheln"],
    website: "https://striezelmarkt.dresden.de"
  },
  {
    id: "koelner-weihnachtsmaerkte",
    slug: "koelner-weihnachtsmaerkte",
    name: "Kölner Weihnachtsmärkte",
    city: "Köln",
    address: "Roncalliplatz/Neumarkt/Rudolfplatz, 50667 Köln",
    description: "Köln verwandelt sich in der Adventszeit in ein wahres Weihnachtswunderland mit gleich mehreren stimmungsvollen Märkten. Der Weihnachtsmarkt am Dom, der Heinzels Winter Märchen und weitere Märkte bieten eine vielfältige Mischung aus Tradition und Moderne vor der imposanten Kulisse des Kölner Doms.",
    openingDates: "25.11.2024 - 23.12.2024",
    openingHours: "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    imageUrl: "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    specialties: ["Feuerzangenbowle", "Reibekuchen", "Kölsch", "Kunsthandwerk", "Süßwaren"],
    website: "https://koeln.de/weihnachtsmaerkte"
  }
];

export const getChristmasMarketBySlug = (slug: string): ChristmasMarket | undefined => {
  return christmasMarkets.find(market => market.slug === slug);
};

export const getChristmasMarketsByCity = (city: string): ChristmasMarket[] => {
  return christmasMarkets.filter(market => 
    market.city.toLowerCase().includes(city.toLowerCase())
  );
};