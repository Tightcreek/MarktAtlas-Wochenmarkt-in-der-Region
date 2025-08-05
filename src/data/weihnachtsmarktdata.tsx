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
  },
  {
    id: "muenchner-christkindlmarkt",
    slug: "muenchner-christkindlmarkt",
    name: "Münchner Christkindlmarkt",
    city: "München",
    address: "Marienplatz, 80331 München",
    description: "Der traditionelle Münchner Christkindlmarkt am Marienplatz ist einer der ältesten und schönsten Weihnachtsmärkte Deutschlands. Vor der malerischen Kulisse des Neuen Rathauses und der Frauenkirche bietet er eine einzigartige Atmosphäre. Mit über 140 Ständen lädt er zum Bummeln und Genießen ein.",
    openingDates: "24.11.2025 - 24.12.2025",
    openingHours: "Mo-Sa 10-21 Uhr, So 10-20 Uhr, 24.12. 10-14 Uhr",
    imageUrl: "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    specialties: ["Gebrannte Mandeln", "Lebkuchenherzen", "Münchner Weißwurst", "Handwerk", "Christbaumschmuck"],
    website: "https://christkindlmarkt-muenchen.de"
  },
  {
    id: "frankfurter-weihnachtsmarkt",
    slug: "frankfurter-weihnachtsmarkt",
    name: "Frankfurter Weihnachtsmarkt",
    city: "Frankfurt am Main",
    address: "Römerberg, 60311 Frankfurt am Main",
    description: "Der Frankfurter Weihnachtsmarkt am historischen Römerberg zählt zu den größten und schönsten Weihnachtsmärkten Deutschlands. Mit einer über 600-jährigen Tradition erstreckt er sich über mehrere Plätze der Altstadt und bietet eine perfekte Mischung aus Tradition und Moderne.",
    openingDates: "24.11.2025 - 22.12.2025",
    openingHours: "Mo-Sa 10-21 Uhr, So 11-21 Uhr",
    imageUrl: "/lovable-uploads/2b8ae1e1-72bb-4669-bda0-58a94434bd80.png",
    specialties: ["Frankfurter Bethmännchen", "Glühwein", "Brannte Mandeln", "Kunsthandwerk", "Riesenbrezeln"],
    website: "https://frankfurt-tourismus.de/weihnachtsmarkt"
  },
  {
    id: "berliner-weihnachtszauber",
    slug: "berliner-weihnachtszauber",
    name: "Berliner Weihnachtszauber",
    city: "Berlin",
    address: "Gendarmenmarkt, 10117 Berlin",
    description: "Der Weihnachtsmarkt am Gendarmenmarkt gilt als einer der schönsten und elegantesten Weihnachtsmärkte Berlins. Eingebettet zwischen dem Konzerthaus und den beiden Domen bietet er eine einzigartige Kulisse und hochwertige Produkte in festlicher Atmosphäre.",
    openingDates: "24.11.2025 - 31.12.2025",
    openingHours: "Mo-Do 11-22 Uhr, Fr-Sa 11-23 Uhr, So 11-22 Uhr",
    imageUrl: "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    specialties: ["Currywurst", "Stollen", "Feuerzangenbowle", "Berliner Weisse", "Handwerkskunst"],
    website: "https://weihnachtszeit-berlin.de"
  },
  {
    id: "hamburger-weihnachtsmarkt",
    slug: "hamburger-weihnachtsmarkt",
    name: "Hamburger Weihnachtsmarkt",
    city: "Hamburg",
    address: "Rathausmarkt, 20095 Hamburg",
    description: "Der traditionelle Hamburger Weihnachtsmarkt vor dem prächtigen Rathaus ist ein maritimer Weihnachtstraum. Mit über 150 Ständen und der besonderen norddeutschen Atmosphäre bietet er eine perfekte Mischung aus Tradition und hanseatischem Flair.",
    openingDates: "22.11.2025 - 23.12.2025",
    openingHours: "Mo-Sa 10-21 Uhr, So 10-20 Uhr",
    imageUrl: "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    specialties: ["Fischbrötchen", "Glögg", "Geröstete Maronen", "Nordsee-Spezialitäten", "Maritime Geschenke"],
    website: "https://hamburg.de/weihnachtsmarkt"
  },
  {
    id: "stuttgarter-weihnachtsmarkt",
    slug: "stuttgarter-weihnachtsmarkt",
    name: "Stuttgarter Weihnachtsmarkt",
    city: "Stuttgart",
    address: "Marktplatz, 70173 Stuttgart",
    description: "Einer der größten und ältesten Weihnachtsmärkte Deutschlands mit über 280 Ständen. Der Stuttgarter Weihnachtsmarkt erstreckt sich über die gesamte Innenstadt und bietet schwäbische Spezialitäten sowie traditionelles Kunsthandwerk in einer gemütlichen Atmosphäre.",
    openingDates: "26.11.2025 - 23.12.2025",
    openingHours: "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 11-21 Uhr",
    imageUrl: "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    specialties: ["Stuttgarter Weihnachtsstollen", "Zwiebelrostbraten", "Spätzle", "Schwäbische Maultaschen", "Handwerkskunst"],
    website: "https://stuttgart.de/weihnachtsmarkt"
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