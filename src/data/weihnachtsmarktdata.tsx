export interface ChristmasMarket {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  postalCode: string;
  region: string;
  latitude: number;
  longitude: number;
  description: string;
  openingDates: string; // z.B. "25.11.2024 - 23.12.2024"
  openingHours: string; // z.B. "Mo-Fr 11-21 Uhr"
  imageUrl: string; // Optionales Bild des Marktes
  specialties: string[]; // z.B. ["Glühwein", "Kunsthandwerk", "Kulinarisches"]
  website?: string;
  phone: string;
  email: string;
  transport: string;
  highlights?: string[]; // Besondere Events und Highlights
  parking?: string; // Parkplatz-Informationen
  publicTransport?: string; // ÖPNV-Informationen
  entryPrice?: string; // Eintrittspreis oder "frei"
}

export const christmasMarkets: ChristmasMarket[] = [
  {
    id: "1",
    slug: "nuernberger-christkindlmaerkte",
    name: "Nürnberger Christkindlmärkte",
    city: "Nürnberg",
    address: "Hauptmarkt",
    postalCode: "90403",
    region: "Bayern",
    latitude: 49.4521,
    longitude: 11.0767,
    description:
      "Einer der berühmtesten Weihnachtsmärkte Deutschlands mit über 180 Ständen. Der Nürnberger Christkindlmarkt verzaubert jährlich über 2 Millionen Besucher mit seinem besonderen Flair, traditionellem Handwerk und kulinarischen Köstlichkeiten. Das berühmte Christkind eröffnet jeden Advent den Markt mit einem feierlichen Prolog.",
    openingDates: "28.11.2025 - 24.12.2025",
    openingHours: "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 10-21 Uhr",
    imageUrl: "/lovable-uploads/nuernberg-christmas-market.jpg",
    specialties: ["Lebkuchen", "Glühwein", "Rostbratwürste", "Handwerkskunst", "Christbaumschmuck"],
    website: "https://christkindlesmarkt.de",
    phone: "+49 911 2336055",
    email: "info@christkindlesmarkt.de",
    transport: "U-Bahn: Linie U1 bis Lorenzkirche, S-Bahn: S1, S2, S3, S4 bis Hauptbahnhof",
    highlights: [
      "Eröffnung durch das weltberühmte Christkind am 28.11.2025 um 17:30 Uhr",
      "Tägliche Auftritte des Christkinds auf dem Balkon der Hauptkirche um 17:30 Uhr",
      "Traditioneller Weihnachtsmarkt für Kinder mit Karussell und Kinderständen",
      "Lebkuchen-Werkstatt mit Live-Vorführungen täglich 14-18 Uhr",
      "Historische Handwerksvorführungen: Glasbläser, Zuckerbäcker, Spielzeugmacher",
    ],
    parking: "Parkhäuser in der Altstadt (Hauptkirche, Lorenzkirche), Park+Ride Möglichkeiten",
    entryPrice: "frei",
  },
  {
    id: "2",
    slug: "dresdner-striezelmarkt",
    name: "Dresdner Striezelmarkt",
    city: "Dresden",
    address: "Altmarkt",
    postalCode: "01067",
    region: "Sachsen",
    latitude: 51.0493,
    longitude: 13.7381,
    description:
      "Deutschlands ältester Weihnachtsmarkt seit 1434 mit traditionellem Dresdner Stollen. Der Striezelmarkt am Altmarkt ist berühmt für seine einzigartige Atmosphäre, handwerkliche Tradition und den weltbekannten Dresdner Christstollen. Über 240 Stände bieten regionale Spezialitäten und handgefertigte Geschenke.",
    openingDates: "26.11.2025 - 24.12.2025",
    openingHours: "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 10-21 Uhr",
    imageUrl: "/lovable-uploads/2b8ae1e1-72bb-4669-bda0-58a94434bd80.png",
    specialties: ["Dresdner Stollen", "Glühwein", "Pflaumentoffel", "Pulsnitzer Lebkuchen", "Erzgebirgskunst"],
    website: "https://striezelmarkt.dresden.de",
    phone: "+49 351 50179780",
    email: "striezelmarkt@dresden.de",
    transport: "Straßenbahn: Linien 1, 2, 4 bis Altmarkt, S-Bahn: S1, S2 bis Dresden Hauptbahnhof",
    highlights: [
      "Traditionelles Stollenfest am 1. Advent mit dem weltgrößten Stollen",
      "Pyramide von Seiffen - 14 Meter hohe erzgebirgische Weihnachtspyramide",
      "Dresdner Stollenmuseum mit historischen Ausstellungen",
      "Tägliche Handwerksvorführungen: Töpfern, Schnitzen, Klöppeln",
      "Weihnachtsbäckerei mit Live-Vorführungen der Stollenherstellung",
    ],
    parking: "Altmarkt-Galerie, Centrum-Galerie, Parkhaus An der Frauenkirche",
    entryPrice: "frei",
  },
  {
    id: "3",
    slug: "koelner-weihnachtsmaerkte",
    name: "Kölner Weihnachtsmärkte",
    city: "Köln",
    address: "Roncalliplatz/Dom",
    postalCode: "50667",
    region: "Nordrhein-Westfalen",
    latitude: 50.9413,
    longitude: 6.9583,
    description:
      "Sieben verschiedene Weihnachtsmärkte in der Kölner Innenstadt. Der Markt am Dom ist der größte und bekannteste mit über 160 Ständen direkt vor dem UNESCO-Weltkulturerbe Kölner Dom. Jeder Markt hat seinen eigenen Charakter - vom traditionellen Markt am Neumarkt bis zum mittelalterlichen Markt am Stadtgarten.",
    openingDates: "25.11.2025 - 23.12.2025",
    openingHours: "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    imageUrl: "/lovable-uploads/koeln-christmas-market.jpg",
    specialties: ["Kölsch", "Reibekuchen", "Himmel un Ääd", "Printen", "Rheinische Spezialitäten"],
    website: "https://koeln-weihnachtsmaerkte.de",
    phone: "+49 221 221-21400",
    email: "weihnachtsmaerkte@stadt-koeln.de",
    transport: "U-Bahn/S-Bahn: Dom/Hauptbahnhof, Straßenbahn: Haltestelle Dom/Hauptbahnhof",
    entryPrice: "frei",
  },
  {
    id: "4",
    slug: "stuttgarter-weihnachtsmarkt",
    name: "Stuttgarter Weihnachtsmarkt",
    city: "Stuttgart",
    address: "Marktplatz",
    postalCode: "70173",
    region: "Baden-Württemberg",
    latitude: 48.7758,
    longitude: 9.1829,
    description:
      "Einer der größten und schönsten Weihnachtsmärkte Europas mit über 280 Ständen. Der Stuttgarter Weihnachtsmarkt erstreckt sich über die gesamte Innenstadt und verzaubert mit seinem einzigartigen Dach aus Tannenzweigen über den Marktständen. Die historische Kulisse des Alten Schlosses bietet eine märchenhafte Atmosphäre.",
    openingDates: "26.11.2025 - 23.12.2025",
    openingHours: "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 11-21 Uhr",
    imageUrl: "/lovable-uploads/stuttgart-christmas-market.jpg",
    specialties: [
      "Feuerzangenbowle",
      "Schwäbische Maultaschen",
      "Gebrannte Mandeln",
      "Stuttgarter Stollen",
      "Handwerkskunst",
    ],
    website: "https://stuttgarter-weihnachtsmarkt.de",
    phone: "+49 711 222-20",
    email: "weihnachtsmarkt@stuttgart.de",
    transport: "U-Bahn/S-Bahn: Schlossplatz, Stadtmitte, Charlottenplatz",
    entryPrice: "frei",
  },
  {
    id: "5",
    slug: "muenchener-christkindlmarkt",
    name: "Münchener Christkindlmarkt",
    city: "München",
    address: "Marienplatz",
    postalCode: "80331",
    region: "Bayern",
    latitude: 48.1374,
    longitude: 11.5755,
    description:
      "Der traditionelle Christkindlmarkt am Marienplatz vor dem berühmten Rathaus mit Glockenspiel. Seit 1642 verzaubert dieser Markt Besucher aus aller Welt mit bayerischer Gemütlichkeit, traditionellem Handwerk und dem einzigartigen Flair der bayerischen Landeshauptstadt. Der 30 Meter hohe Christbaum ist das Wahrzeichen des Marktes.",
    openingDates: "25.11.2025 - 24.12.2025",
    openingHours: "Mo-Sa 10-21 Uhr, So 10-20 Uhr",
    imageUrl: "/lovable-uploads/muenchen-christmas-market.jpg",
    specialties: ["Gebrannte Mandeln", "Glühwein", "Lebkuchen", "Bratwurst", "Bayerische Spezialitäten"],
    website: "https://christkindlmarkt.de",
    phone: "+49 89 233-30",
    email: "christkindlmarkt@muenchen.de",
    transport: "U-Bahn/S-Bahn: Marienplatz (alle Linien)",
    entryPrice: "frei",
  },
  {
    id: "6",
    slug: "frankfurter-weihnachtsmarkt",
    name: "Frankfurter Weihnachtsmarkt",
    city: "Frankfurt am Main",
    address: "Römerberg",
    postalCode: "60311",
    region: "Hessen",
    latitude: 50.1106,
    longitude: 8.6831,
    description:
      "Der Frankfurter Weihnachtsmarkt am historischen Römerberg ist einer der traditionsreichsten Deutschlands. Seit 1393 findet hier der Weihnachtsmarkt statt. Die mittelalterliche Kulisse der Fachwerkhäuser und des Römers bietet eine einzigartige Atmosphäre. Mit über 200 Ständen ist er einer der größten Weihnachtsmärkte in Deutschland.",
    openingDates: "25.11.2025 - 22.12.2025",
    openingHours: "Mo-Sa 10-21 Uhr, So 11-21 Uhr",
    imageUrl: "/lovable-uploads/frankfurt-christmas-market.jpg",
    specialties: ["Frankfurter Bethmännchen", "Glühwein", "Gebrannte Mandeln", "Frankfurter Würstchen", "Apfelwein"],
    website: "https://weihnachtsmarkt-frankfurt.de",
    phone: "+49 69 212-30",
    email: "weihnachtsmarkt@frankfurt.de",
    transport: "U-Bahn: Dom/Römer (U4, U5), S-Bahn: Taunusanlage",
    entryPrice: "frei",
  },
  {
    id: "7",
    slug: "hamburger-weihnachtsmarkt",
    name: "Hamburger Weihnachtsmarkt",
    city: "Hamburg",
    address: "Rathausmarkt",
    postalCode: "20095",
    region: "Hamburg",
    latitude: 53.5511,
    longitude: 9.9937,
    description:
      "Der größte Weihnachtsmarkt im Norden mit maritimem Flair. Rund um das imposante Rathaus erstreckt sich einer der schönsten Weihnachtsmärkte Deutschlands. Die Hansestadt Hamburg bietet mit ihrem Weihnachtsmarkt eine einzigartige Mischung aus norddeutscher Tradition und internationalem Flair.",
    openingDates: "25.11.2025 - 23.12.2025",
    openingHours: "Mo-Sa 10-21 Uhr, So 10-20 Uhr",
    imageUrl: "/lovable-uploads/hamburg-christmas-market.jpg",
    specialties: [
      "Feuerzangenbowle",
      "Geröstete Mandeln",
      "Nordsee-Spezialitäten",
      "Glühwein",
      "Hamburger Franzbrötchen",
    ],
    website: "https://hamburg-weihnachtsmarkt.de",
    phone: "+49 40 428-30",
    email: "weihnachtsmarkt@hamburg.de",
    transport: "U-Bahn: Rathaus (U3), S-Bahn: Jungfernstieg",
    entryPrice: "frei",
  },
  {
    id: "8",
    slug: "weihnachtsmarkt-berlin-gendarmenmarkt",
    name: "WeihnachtsZauber Gendarmenmarkt",
    city: "Berlin",
    address: "Gendarmenmarkt",
    postalCode: "10117",
    region: "Berlin",
    latitude: 52.5136,
    longitude: 13.3925,
    description:
      "Einer der schönsten Weihnachtsmärkte Deutschlands in eindrucksvoller Kulisse zwischen Konzerthaus, Deutschem und Französischem Dom. Weiße Zeltstadt mit exklusivem Kunsthandwerk, Gaumenfreuden und kulturellem Programm.",
    openingDates: "24.11.2025 - 31.12.2025",
    openingHours: "So-Do 12-22 Uhr, Fr-Sa 12-23 Uhr, 24.12. 12-18 Uhr, 31.12. 12-00 Uhr",
    imageUrl: "N/A",
    specialties: [
      "Kunsthandwerk",
      "Traditionelle Handwerkskunst",
      "Gastronomische Spezialitäten",
      "Live-Musik und Shows",
      "Holzschnitzereien",
    ],
    website: "https://www.weihnachtsmarkt-berlin.de",
    phone: "N/A",
    email: "N/A",
    transport: "U-Bahn: U2, U6 Stadtmitte oder Französische Straße",
    highlights: [
      "Imposante Kulisse mit Konzerthaus und Domkirchen",
      "Exklusives Kunsthandwerkerzelt mit Live-Vorführungen",
      "Hochwertige Gastronomie und edle Geschenke",
      "Tägliches Bühnenprogramm mit Musik und Animation",
      "Nostalgische weiße Pagodenzelte",
    ],
    parking: "Parkhäuser in der Nähe: Bebelplatz, Friedrichstraße",
    entryPrice: "2 Euro (Kinder unter 12 Jahren frei), Mo-Fr 12-15 Uhr freier Eintritt (außer 24./25./26./31.12.)",
  },
  {
    id: "9",
    slug: "weihnachtsmarkt-bonn-innenstadt",
    name: "Bonner Weihnachtsmarkt Innenstadt",
    city: "Bonn",
    address: "Münsterplatz, Marktplatz, Bottlerplatz",
    postalCode: "53111",
    region: "Nordrhein-Westfalen",
    latitude: 50.7339,
    longitude: 7.0997,
    description:
      "Traditionsreicher Weihnachtsmarkt mit über 170 festlich geschmückten Ständen in der historischen Bonner Innenstadt. Stimmungsvolle Atmosphäre rund um Münster und Marktplatz mit vielfältigem Angebot.",
    openingDates: "22.11.2025 - 23.12.2025",
    openingHours:
      "Verkaufsstände täglich 11-21 Uhr, Gastronomie So-Do 11-21:30 Uhr, Fr-Sa 11-22:30 Uhr, 23.11. geschlossen (Totensonntag)",
    imageUrl: "N/A",
    specialties: [
      "Kunsthandwerk",
      "Rheinische Spezialitäten",
      "Weihnachtsdekorationen",
      "Glühweinvariationen",
      "Geschenkideen",
    ],
    website: "https://bonnerweihnachtsmarkt.de",
    phone: "N/A",
    email: "N/A",
    transport: "S-Bahn/U-Bahn: Bonn Hauptbahnhof, dann 10 Min. Fußweg",
    highlights: [
      "Über 170 festlich geschmückte Stände",
      "Historische Kulisse am Bonner Münster",
      "Traditionelles Warenangebot und Kunsthandwerk",
      "Verlängerung: Dreikönigsmarkt ab 27.12.2025 am Remigiusplatz",
      "Geführte Markttouren möglich",
    ],
    parking: "Parkhäuser: Friedensplatz, Stadthausgarage, Karstadt",
    entryPrice: "frei",
  },
  {
    id: "10",
    slug: "leipziger-weihnachtsmarkt",
    name: "Leipziger Weihnachtsmarkt",
    city: "Leipzig",
    address: "Marktplatz und Innenstadt",
    postalCode: "04109",
    region: "Sachsen",
    latitude: 51.3397,
    longitude: 12.3731,
    description:
      "Einer der ältesten Weihnachtsmärkte Deutschlands seit 1458. Rund 300 festlich geschmückte Stände auf sechs Marktbereichen in der illuminierten Leipziger Innenstadt mit einzigartigem kulturellen und kulinarischen Angebot.",
    openingDates: "25.11.2025 - 23.12.2025",
    openingHours: "Täglich ab 10 Uhr, abends unterschiedlich je nach Stand",
    imageUrl: "N/A",
    specialties: [
      "Tradition seit 1458",
      "Thomanerchor-Konzerte",
      "Weihnachtsoratorium J.S. Bach",
      "Turmbläser am Alten Rathaus",
      "Leipziger Allerlei",
    ],
    website: "https://www.leipzig.de/weihnachtsmarkt",
    phone: "N/A",
    email: "N/A",
    transport: "S-Bahn: Leipzig Markt, Straßenbahn: Augustusplatz oder Markt",
    highlights: [
      "Zweitältester Weihnachtsmarkt Deutschlands (seit 1458)",
      "Rund 300 Stände auf sechs Marktbereichen",
      "Feierliche Eröffnung durch OB am 25.11. um 17 Uhr",
      "Turmbläser auf dem Turm des Alten Rathauses",
      "Aufführungen des Weihnachtsoratoriums in Leipziger Kirchen",
      "Orgelmusik und Konzerte des Thomanerchors",
    ],
    parking: "Parkhäuser: Hauptbahnhof, Petersbogen, am Markt",
    entryPrice: "frei",
  },
];

// Utility function to get a Christmas market by slug
export const getChristmasMarketBySlug = (slug: string): ChristmasMarket | undefined => {
  return christmasMarkets.find((market) => market.slug === slug);
};

// Utility function to get Christmas markets by city
export const getChristmasMarketsByCity = (city: string): ChristmasMarket[] => {
  return christmasMarkets.filter((market) => market.city.toLowerCase().includes(city.toLowerCase()));
};

// Utility function to search Christmas markets
export const searchChristmasMarkets = (query: string): ChristmasMarket[] => {
  const lowercaseQuery = query.toLowerCase();
  return christmasMarkets.filter(
    (market) =>
      market.name.toLowerCase().includes(lowercaseQuery) ||
      market.city.toLowerCase().includes(lowercaseQuery) ||
      market.description.toLowerCase().includes(lowercaseQuery) ||
      market.specialties.some((specialty) => specialty.toLowerCase().includes(lowercaseQuery)),
  );
};
