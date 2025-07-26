// Centralized market data for Germany
// This file serves as the single source of truth for all market data

export interface Market {
  id: string;
  slug: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  openingHours: string;
  features: string[];
  isOpen: boolean;
  description: string;
  phone: string;
  email: string;
  website: string;
  specialties: string[];
  facilities: string[];
  transport: string;
}

// Helper function to determine if a market is currently open
export const isMarketOpen = (openingHours: string): boolean => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const currentTime = now.getHours() * 100 + now.getMinutes(); // e.g., 14:30 = 1430

  const dayMap: { [key: string]: number } = {
    'So': 0, 'Sonntag': 0, 'Sunday': 0,
    'Mo': 1, 'Montag': 1, 'Monday': 1,
    'Di': 2, 'Dienstag': 2, 'Tuesday': 2,
    'Mi': 3, 'Mittwoch': 3, 'Wednesday': 3,
    'Do': 4, 'Donnerstag': 4, 'Thursday': 4,
    'Fr': 5, 'Freitag': 5, 'Friday': 5,
    'Sa': 6, 'Samstag': 6, 'Saturday': 6
  };

  // Parse opening hours (e.g., "Mi 8-14, Sa 8-16" or "Mo-Sa 8-20")
  const segments = openingHours.split(',');
  
  for (const segment of segments) {
    const trimmed = segment.trim();
    const parts = trimmed.split(' ');
    if (parts.length < 2) continue;
    
    const daysPart = parts[0];
    const timePart = parts[1];
    
    // Parse time range (e.g., "8-14" or "8:30-14")
    const timeMatch = timePart.match(/(\d{1,2}):?(\d{0,2})-(\d{1,2}):?(\d{0,2})/);
    if (!timeMatch) continue;
    
    let startHour = parseInt(timeMatch[1]);
    let startMin = timeMatch[2] ? parseInt(timeMatch[2]) : 0;
    let endHour = parseInt(timeMatch[3]);
    let endMin = timeMatch[4] ? parseInt(timeMatch[4]) : 0;
    
    const openTime = startHour * 100 + startMin;
    const closeTime = endHour * 100 + endMin;
    
    // Parse days (e.g., "Mi", "Mo-Sa", "Mi-Fr")
    if (daysPart.includes('-')) {
      // Range of days (e.g., "Mo-Sa")
      const [startDay, endDay] = daysPart.split('-');
      const startDayNum = dayMap[startDay];
      const endDayNum = dayMap[endDay];
      
      if (startDayNum !== undefined && endDayNum !== undefined) {
        let dayInRange = false;
        if (startDayNum <= endDayNum) {
          dayInRange = currentDay >= startDayNum && currentDay <= endDayNum;
        } else {
          // Handle wrap-around (e.g., Sa-Mo)
          dayInRange = currentDay >= startDayNum || currentDay <= endDayNum;
        }
        
        if (dayInRange && currentTime >= openTime && currentTime < closeTime) {
          return true;
        }
      }
    } else {
      // Single day (e.g., "Mi")
      const dayNum = dayMap[daysPart];
      if (dayNum === currentDay && currentTime >= openTime && currentTime < closeTime) {
        return true;
      }
    }
  }
  
  return false;
};

// Helper function to generate SEO keywords from markets
export const generateSEOKeywords = (markets: Market[]): string => {
  const baseKeywords = [
    "wochenmarkt finder",
    "bauernmarkt deutschland", 
    "märkte heute geöffnet",
    "wochenmarkt öffnungszeiten",
    "frische produkte markt",
    "regional einkaufen"
  ];
  
  const cityKeywords = [...new Set(markets.map(m => `wochenmarkt ${m.city.toLowerCase()}`))];
  const longTailKeywords = [
    "markt samstag",
    "bio markt",
    "bauernmarkt heute",
    "wochenmarkt berlin hamburg münchen"
  ];
  
  return [...baseKeywords, ...cityKeywords.slice(0, 10), ...longTailKeywords].join(', ');
};

// Comprehensive market data - single source of truth
export const marketData: Market[] = [
  // Berlin Markets
  {
    id: "1",
    slug: "winterfeldtmarkt-berlin",
    name: "Winterfeldtmarkt",
    address: "Winterfeldtplatz",
    city: "Berlin",
    postalCode: "10781",
    openingHours: "Mittwoch 8-14, Samstag 8-16",
    features: ["Bio", "International", "Streetfood"],
    isOpen: isMarketOpen("Mittwoch 8-14, Samstag 8-16"),
    description: "Der Winterfeldtmarkt ist einer der beliebtesten Wochenmärkte Berlins. Im Herzen von Schöneberg gelegen, bietet er eine große Auswahl an ökologischen und regionalen Produkten. Der Markt ist bekannt für seine entspannte Atmosphäre und die hohe Qualität der angebotenen Waren.",
    phone: "+49 30 12345678",
    email: "info@winterfeldtmarkt.de",
    website: "www.winterfeldtmarkt.de",
    specialties: ["Bio-Gemüse", "Backwaren", "Käse & Milchprodukte", "Blumen & Pflanzen"],
    facilities: ["Toiletten", "Fahrradständer"],
    transport: "U-Bahn: Nollendorfplatz, Tram M2, M10"
  },
  {
    id: "2",
    slug: "kollwitzplatz-berlin",
    name: "Kollwitzplatz",
    address: "Kollwitzplatz",
    city: "Berlin",
    postalCode: "10435",
    openingHours: "Samstag 9-16",
    features: ["Bio", "Kunsthandwerk", "Regional"],
    isOpen: isMarketOpen("Samstag 9-16"),
    description: "Wochenmarkt Berlin am Kollwitzplatz – Ein beliebtes Highlight für Einheimische und Touristen. Der Wochenmarkt am Kollwitzplatz zählt zu den beliebtesten Wochenmärkten in Berlin und zieht sowohl Berliner als auch Touristen regelmäßig an. Der Markt bietet eine beeindruckende Auswahl an hochwertigen Produkten – von regionalen Lebensmitteln bis hin zu einzigartigem Kunsthandwerk. Besucher können sich auf vielfältiges Street Food in Berlin freuen: klassische Snacks wie Currywurst, frische Fischbrötchen, herzhafte Crêpes, würzige Falafel oder sogar edle Austern mit Champagner. Damit zählt dieser Berliner Wochenmarkt zu den kulinarischen Geheimtipps der Hauptstadt. Typisch für diesen Markt sind die Stände kleiner Manufakturen und lokaler Unternehmen. Angeboten werden handgemachte Marmeladen, aromatische Pestos, Naturkosmetik, nachhaltige Kleidung, kreatives Kunsthandwerk, handgefertigter Schmuck und edles Porzellan – ideal für alle, die auf der Suche nach einem besonderen Souvenir oder einem originellen Geschenk sind. Auch Liebhaber frischer Lebensmittel kommen auf dem Wochenmarkt in Berlin-Prenzlauer Berg voll auf ihre Kosten. Von frischer Pasta über Käse, Fleisch, Fisch, Lakritze, feine Öle, erlesene Weine bis hin zu veganem Tofu – die Auswahl ist groß und die Qualität hervorragend. Da die Parkplatzsituation rund um den Kollwitzplatz begrenzt ist und Parkplätze meist kostenpflichtig sind, wird die Anreise mit öffentlichen Verkehrsmitteln empfohlen. Der Markt ist gut angebunden und bequem mit Bus oder Tram zu erreichen.",
    phone: "N/A",
    email: "N/A",
    website: "https://www.pankow-weissensee-prenzlauerberg.berlin/de/shop/wochenmarkt-kollwitzplatz",
    specialties: ["Bio-Gemüse", "Backwaren", "Käse & Milchprodukte", "Blumen & Pflanzen", "Regionale Fleischwaren", "Honig & Marmeladen"],
    facilities: ["Toiletten", "Sitzgelegenheiten"],
    transport: "Öffentliche Verkehrsmittel: U2 Senefelderplatz, Tram M2, M10"
  },
  {
    id: "3",
    slug: "maybachufer-berlin",
    name: "Maybachufer",
    address: "Maybachufer, Neukölln",
    city: "Berlin",
    postalCode: "12047",
    openingHours: "Dienstag, Freitag 11-18:30",
    features: ["International", "Großmarkt", "Streetfood"],
    isOpen: isMarketOpen("Dienstag, Freitag 11-18:30"),
    description: "Der Türkische Markt am Maybachufer ist ein lebendiger und bunter Wochenmarkt, der für seine internationale Atmosphäre und das vielfältige Angebot an türkischen und nahöstlichen Spezialitäten bekannt ist. Hier finden Sie frisches Obst, Gemüse, Gewürze und authentische Streetfood-Gerichte.",
    phone: "+49 30 23456789",
    email: "info@maybachufer-markt.de",
    website: "www.tuerkischer-markt-berlin.de",
    specialties: ["Türkische Spezialitäten", "Gewürze", "Oliven", "Backwaren", "Streetfood", "Textilien"],
    facilities: ["Toiletten", "Imbissstände"],
    transport: "U-Bahn: Schönleinstraße (U8), Bus M41"
  },
  {
    id: "4",
    slug: "boxhagener-platz-berlin",
    name: "Boxhagener Platz",
    address: "Boxhagener Platz",
    city: "Berlin",
    postalCode: "10245",
    openingHours: "Samstag 9-15:30",
    features: ["Bio", "Regional", "Produkte", "Imbisse"],
    isOpen: isMarketOpen("Samstag 9-15:30"),
    description: "Der Wochenmarkt am Boxhagener Platz in Friedrichshain ist ein beliebter Treffpunkt für Anwohner und Besucher. Der Markt bietet eine gute Mischung aus regionalen Bio-Produkten und traditionellen Marktständen in entspannter Atmosphäre.",
    phone: "+49 30 34567890",
    email: "info@boxhagener-markt.de",
    website: "www.boxhagener-markt.de",
    specialties: ["Bio-Gemüse", "Regionale Produkte", "Backwaren", "Käse", "Blumen"],
    facilities: ["Sitzgelegenheiten", "Fahrradständer"],
    transport: "S-Bahn: Warschauer Straße, Tram M10, M13"
  },
  {
    id: "5",
    slug: "arkonaplatz-berlin",
    name: "Arkonaplatz",
    address: "Arkonaplatz",
    city: "Berlin",
    postalCode: "10435",
    openingHours: "Freitag 12-19",
    features: ["Feinkost", "Lokal"],
    isOpen: isMarketOpen("Freitag 12-19"),
    description: "Der kleine aber feine Wochenmarkt am Arkonaplatz in Mitte besticht durch sein hochwertiges Angebot an Feinkost und lokalen Spezialitäten. Trotz seiner kompakten Größe bietet er eine sorgfältig kuratierte Auswahl an Produkten.",
    phone: "+49 30 45678901",
    email: "info@arkonaplatz-markt.de",
    website: "www.arkonaplatz-markt.de",
    specialties: ["Feinkost", "Käse", "Wein", "Backwaren", "Lokale Spezialitäten"],
    facilities: ["Fahrradständer"],
    transport: "U-Bahn: Bernauer Straße (U8), Tram M1, M12"
  },

  // Hamburg Markets
  {
    id: "6",
    slug: "isemarkt-hamburg",
    name: "Isemarkt",
    address: "Isestraße/Hoheluft",
    city: "Hamburg",
    postalCode: "20144",
    openingHours: "Dienstag, Freitag 8:30-14",
    features: ["Großer Europas", "Regional", "Bio"],
    isOpen: isMarketOpen("Dienstag, Freitag 8:30-14"),
    description: "Der Isemarkt gilt als einer der größten und schönsten Wochenmärkte Norddeutschlands. Mit über 300 Ständen bietet er eine beeindruckende Vielfalt an regionalen und internationalen Produkten in lebendiger Atmosphäre.",
    phone: "+49 40 12345678",
    email: "info@isemarkt.de",
    website: "www.isemarkt.de",
    specialties: ["Fisch & Meeresfrüchte", "Norddeutsche Spezialitäten", "Bio-Produkte", "Backwaren", "Blumen"],
    facilities: ["Toiletten", "Fahrradständer", "Imbissstände"],
    transport: "U-Bahn: Hoheluftbrücke (U3), Bus 5, 15"
  },
  {
    id: "7",
    slug: "grossneumarkt-hamburg",
    name: "Großneumarkt",
    address: "Großneumarkt",
    city: "Hamburg",
    postalCode: "20354",
    openingHours: "Mittwoch, Samstag 8:30-13:30",
    features: ["Historischer Stadtmarkt"],
    isOpen: isMarketOpen("Mittwoch, Samstag 8:30-13:30"),
    description: "Der historische Markt am Großneumarkt in der Hamburger Neustadt blickt auf eine jahrhundertelange Tradition zurück. In zentraler Lage bietet er klassische Marktwaren in authentischer Atmosphäre.",
    phone: "+49 40 23456789",
    email: "info@grossneumarkt.de",
    website: "www.grossneumarkt-hamburg.de",
    specialties: ["Traditionelle Marktwaren", "Fisch", "Gemüse", "Backwaren", "Fleischwaren"],
    facilities: ["Historisches Ambiente", "Zentrale Lage"],
    transport: "U-Bahn: Gänsemarkt (U2), Bus 35, 36"
  },
  {
    id: "8",
    slug: "fischmarkt-hamburg",
    name: "Fischmarkt",
    address: "Große Elbstraße 9",
    city: "Hamburg",
    postalCode: "22767",
    openingHours: "Sonntag 5-9:30",
    features: ["Kultmarkt", "Fisch", "Musik"],
    isOpen: isMarketOpen("Sonntag 5-9:30"),
    description: "Der weltberühmte Hamburger Fischmarkt ist mehr als nur ein Markt - er ist eine Institution. Jeden Sonntagmorgen lockt er mit frischem Fisch, Live-Musik und der einzigartigen Atmosphäre des traditionellen Marktschreis tausende Besucher an.",
    phone: "+49 40 34567890",
    email: "info@hamburger-fischmarkt.de",
    website: "www.hamburger-fischmarkt.de",
    specialties: ["Frischer Fisch", "Meeresfrüchte", "Obst", "Souvenirs", "Live-Musik"],
    facilities: ["Fischmarkthalle", "Live-Bühne", "Gastronomie"],
    transport: "S-Bahn: Reeperbahn (S1, S3), Bus 112"
  },
  {
    id: "9",
    slug: "goldbekmarkt-hamburg",
    name: "Goldbekmarkt",
    address: "Goldbekplatz",
    city: "Hamburg",
    postalCode: "22303",
    openingHours: "Dienstag, Donnerstag, Samstag 8:30-13",
    features: ["Regional", "Bio"],
    isOpen: isMarketOpen("Dienstag, Donnerstag, Samstag 8:30-13"),
    description: "Der Goldbekmarkt in Winterhude ist ein beliebter Stadtteilmarkt, der sich durch sein hochwertiges Angebot an regionalen und Bio-Produkten auszeichnet. Ein Markt mit familiärer Atmosphäre und persönlicher Beratung.",
    phone: "+49 40 45678901",
    email: "info@goldbekmarkt.de",
    website: "www.goldbekmarkt.de",
    specialties: ["Bio-Gemüse", "Regionale Produkte", "Backwaren", "Käse", "Blumen"],
    facilities: ["Fahrradständer", "Sitzgelegenheiten"],
    transport: "U-Bahn: Kellinghusenstraße (U3), Bus 6, 25"
  },
  {
    id: "10",
    slug: "billstedt-hamburg",
    name: "Billstedt",
    address: "Möllner Landstraße",
    city: "Hamburg",
    postalCode: "22111",
    openingHours: "Dienstag 9-13, Freitag 9-13",
    features: ["Stadtteilmarkt"],
    isOpen: isMarketOpen("Dienstag 9-13, Freitag 9-13"),
    description: "Der Stadtteilmarkt in Billstedt versorgt die östlichen Stadtteile Hamburgs mit frischen Produkten und alltäglichen Marktartikeln. Ein bodenständiger Markt mit faire Preisen und freundlicher Atmosphäre.",
    phone: "+49 40 56789012",
    email: "info@billstedt-markt.de",
    website: "www.billstedt-markt.de",
    specialties: ["Frisches Gemüse", "Obst", "Backwaren", "Haushaltsartikel", "Textilien"],
    facilities: ["Parkplätze", "Fahrradständer"],
    transport: "S-Bahn: Billwerder-Moorfleet (S2, S21), Bus 8, 230"
  },

  // München Markets
  {
    id: "11",
    slug: "viktualienmarkt-muenchen",
    name: "Viktualienmarkt",
    address: "Viktualienmarkt",
    city: "München",
    postalCode: "80331",
    openingHours: "Montag-Samstag 8-20",
    features: ["Traditionsmarkt", "Regional", "Produkte"],
    isOpen: isMarketOpen("Montag-Samstag 8-20"),
    description: "Der Viktualienmarkt im Herzen Münchens ist der berühmteste Markt der Stadt und ein wahres Paradies für Feinschmecker. Seit über 200 Jahren bietet er beste bayerische und internationale Spezialitäten in einzigartiger Atmosphäre.",
    phone: "+49 89 12345678",
    email: "info@viktualienmarkt.de",
    website: "www.viktualienmarkt-muenchen.de",
    specialties: ["Bayerische Spezialitäten", "Feinkost", "Blumen", "Gewürze", "Metzgereiwaren", "Käse"],
    facilities: ["Biergarten", "Toiletten", "Maypole", "Brunnen"],
    transport: "U-Bahn/S-Bahn: Marienplatz, U3/U6 Marienplatz"
  },
  {
    id: "12",
    slug: "josephsplatz-muenchen",
    name: "Josephsplatz",
    address: "Josephsplatz",
    city: "München",
    postalCode: "80798",
    openingHours: "Dienstag 12-18",
    features: ["Bio", "Regional"],
    isOpen: isMarketOpen("Dienstag 12-18"),
    description: "Der kleine aber feine Biomarkt am Josephsplatz in Schwabing ist ein Geheimtipp für qualitätsbewusste Einkäufer. Mit seinem Fokus auf biologische und regionale Produkte bietet er eine persönliche Alternative zu größeren Märkten.",
    phone: "+49 89 23456789",
    email: "info@josephsplatz-markt.de",
    website: "www.josephsplatz-biomarkt.de",
    specialties: ["Bio-Gemüse", "Naturkost", "Vollkornbackwaren", "Bio-Fleisch", "Naturkosmetik"],
    facilities: ["Fahrradständer", "Beratung"],
    transport: "U-Bahn: Josephsplatz (U2), Bus 154"
  },

  // München Markets (continued)
  {
    id: "13",
    slug: "mariahilfplatz-muenchen",
    name: "Mariahilfplatz",
    address: "Mariahilfplatz",
    city: "München",
    postalCode: "81541",
    openingHours: "Samstag 7-13",
    features: ["Groß", "Bauernmarkt"],
    isOpen: isMarketOpen("Samstag 7-13"),
    description: "Ein traditioneller Wochenmarkt mit großer Auswahl an frischen, regionalen Produkten direkt im Herzen von Au-Haidhausen.",
    phone: "+49 89 34567890",
    email: "info@mariahilfplatz-markt.de",
    website: "www.mariahilfplatz-markt.de",
    specialties: ["Regionale Produkte", "Frisches Gemüse", "Saisonale Waren", "Backwaren"],
    facilities: ["Parkplätze", "Fahrradständer"],
    transport: "U-Bahn: Kolumbusplatz (U1, U2), Bus 52"
  },
  {
    id: "14",
    slug: "elisenhof-muenchen",
    name: "Elisenhof",
    address: "Prielmayerstraße",
    city: "München",
    postalCode: "80335",
    openingHours: "Mittwoch, Freitag 8-18",
    features: ["Bio", "Feinkost"],
    isOpen: isMarketOpen("Mittwoch, Freitag 8-18"),
    description: "Feiner Biomarkt in zentraler Lage mit hochwertigen Bio-Produkten und Feinkost.",
    phone: "+49 89 45678901",
    email: "info@elisenhof-markt.de",
    website: "www.elisenhof-biomarkt.de",
    specialties: ["Bio-Produkte", "Feinkost", "Käse", "Wein", "Naturkosmetik"],
    facilities: ["Überdacht", "Zentrale Lage"],
    transport: "S-Bahn: Hauptbahnhof, U-Bahn: Hauptbahnhof"
  },

  // Frankfurt Markets
  {
    id: "15",
    slug: "konstablerwache-frankfurt",
    name: "Konstablerwache",
    address: "Konstablerwache",
    city: "Frankfurt",
    postalCode: "60313",
    openingHours: "Donnerstag, Samstag 7-18",
    features: ["Großmarkt", "Zentral"],
    isOpen: isMarketOpen("Donnerstag, Samstag 7-18"),
    description: "Zentraler Wochenmarkt im Herzen Frankfurts mit großer Produktvielfalt.",
    phone: "+49 69 12345678",
    email: "info@konstablerwache-markt.de",
    website: "www.konstablerwache-markt.de",
    specialties: ["Internationale Küche", "Blumen", "Gemüse", "Feinkost"],
    facilities: ["U-Bahn-Anbindung", "Toiletten"],
    transport: "U-Bahn: Konstablerwache (U1-U5), S-Bahn: Konstablerwache"
  },
  {
    id: "16",
    slug: "bornheim-markt-frankfurt",
    name: "Bornheim Markt",
    address: "Berger Straße",
    city: "Frankfurt",
    postalCode: "60316",
    openingHours: "Mittwoch, Samstag 8-14",
    features: ["Stadtteilmarkt", "Bio"],
    isOpen: isMarketOpen("Mittwoch, Samstag 8-14"),
    description: "Lebendiger Stadtteilmarkt in Bornheim mit starker Bio-Orientierung.",
    phone: "+49 69 23456789",
    email: "info@bornheim-markt.de",
    website: "www.bornheim-markt-frankfurt.de",
    specialties: ["Bio-Produkte", "Regionale Waren", "Handwerk", "Café"],
    facilities: ["Straßencafés", "Fahrradständer"],
    transport: "U-Bahn: Bornheim Mitte (U4), Tram 12"
  },
  {
    id: "17",
    slug: "sachsenhausen-markt-frankfurt",
    name: "Sachsenhausen Markt",
    address: "Diesterwegplatz",
    city: "Frankfurt",
    postalCode: "60594",
    openingHours: "Samstag 8-14",
    features: ["Regional", "Äppelwoi"],
    isOpen: isMarketOpen("Samstag 8-14"),
    description: "Gemütlicher Markt in Sachsenhausen mit regionalen Spezialitäten.",
    phone: "+49 69 34567890",
    email: "info@sachsenhausen-markt.de",
    website: "www.sachsenhausen-markt.de",
    specialties: ["Äppelwoi-Spezialitäten", "Hessische Küche", "Gemüse", "Backwaren"],
    facilities: ["Traditionelle Atmosphäre", "Gastronomie"],
    transport: "U-Bahn: Schweizer Platz (U1, U2, U3), Bus 46"
  },

  // Stuttgart Markets
  {
    id: "18",
    slug: "schillerplatz-stuttgart",
    name: "Schillerplatz",
    address: "Schillerplatz",
    city: "Stuttgart",
    postalCode: "70173",
    openingHours: "Dienstag, Donnerstag, Samstag 7-12:30",
    features: ["Traditionsmarkt", "Altstadt"],
    isOpen: isMarketOpen("Dienstag, Donnerstag, Samstag 7-12:30"),
    description: "Historischer Markt auf dem malerischen Schillerplatz in der Stuttgarter Altstadt.",
    phone: "+49 711 12345678",
    email: "info@schillerplatz-markt.de",
    website: "www.schillerplatz-stuttgart.de",
    specialties: ["Schwäbische Spezialitäten", "Blumen", "Obst", "Gemüse"],
    facilities: ["Historisches Ambiente", "Brunnen"],
    transport: "U-Bahn: Charlottenplatz (U1-U4), S-Bahn: Stadtmitte"
  },
  {
    id: "19",
    slug: "marktplatz-stuttgart",
    name: "Marktplatz Stuttgart",
    address: "Marktplatz",
    city: "Stuttgart",
    postalCode: "70173",
    openingHours: "Dienstag, Donnerstag, Samstag 7-13:30",
    features: ["Zentral", "Groß"],
    isOpen: isMarketOpen("Dienstag, Donnerstag, Samstag 7-13:30"),
    description: "Der zentrale Wochenmarkt direkt vor dem Rathaus mit großer Auswahl.",
    phone: "+49 711 23456789",
    email: "info@marktplatz-stuttgart.de",
    website: "www.marktplatz-stuttgart.de",
    specialties: ["Regionale Produkte", "Feinkost", "Blumen", "Backwaren"],
    facilities: ["Rathaus-Ambiente", "Brunnen"],
    transport: "U-Bahn: Rathaus (U5-U7), S-Bahn: Stadtmitte"
  },

  // Düsseldorf Markets
  {
    id: "20",
    slug: "carlsplatz-duesseldorf",
    name: "Carlsplatz",
    address: "Carlsplatz",
    city: "Düsseldorf",
    postalCode: "40213",
    openingHours: "Montag-Samstag 8-18",
    features: ["Traditionsmarkt", "Feinkost"],
    isOpen: isMarketOpen("Montag-Samstag 8-18"),
    description: "Düsseldorfs ältester und feinster Markt mit über 200 Jahren Tradition.",
    phone: "+49 211 12345678",
    email: "info@carlsplatz.de",
    website: "www.carlsplatz-duesseldorf.de",
    specialties: ["Feinkost", "Internationale Küche", "Blumen", "Delikatessen"],
    facilities: ["Markthalle", "Gastronomie", "Toiletten"],
    transport: "U-Bahn: Heinrich-Heine-Allee (U70-U79), S-Bahn: Hauptbahnhof"
  },
  {
    id: "21",
    slug: "friedrichstadt-markt-duesseldorf",
    name: "Friedrichstadt Markt",
    address: "Friedrichstraße",
    city: "Düsseldorf",
    postalCode: "40217",
    openingHours: "Freitag 8-14",
    features: ["Stadtteilmarkt"],
    isOpen: isMarketOpen("Freitag 8-14"),
    description: "Gemütlicher Stadtteilmarkt in Friedrichstadt mit persönlicher Atmosphäre.",
    phone: "+49 211 23456789",
    email: "info@friedrichstadt-markt.de",
    website: "www.friedrichstadt-markt.de",
    specialties: ["Frisches Gemüse", "Lokale Produkte", "Backwaren"],
    facilities: ["Nachbarschaftscharakter"],
    transport: "S-Bahn: Friedrichstadt (S1, S6), Bus 722"
  },

  // Köln Markets
  {
    id: "22",
    slug: "wilhelmplatz-koeln",
    name: "Wilhelmplatz Markt",
    address: "Wilhelmplatz",
    city: "Köln",
    postalCode: "50733",
    openingHours: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag 7-13, Samstag 7-14:30",
    features: ["Bio", "Regional", "Streetfood"],
    isOpen: isMarketOpen("Montag, Dienstag, Mittwoch, Donnerstag, Freitag 7-13, Samstag 7-14:30"),
    description: "Der beliebte Markt in Nippes bietet täglich außer Sonntag frisches Obst, Gemüse und regionale Spezialitäten. Einer der größten und vielfältigsten Märkte Kölns.",
    phone: "N/A",
    email: "N/A",
    website: "www.stadt-koeln.de",
    specialties: ["Obst & Gemüse", "Bio-Produkte", "Käse & Milchprodukte", "Blumen & Pflanzen"],
    facilities: ["Toiletten", "Fahrradständer"],
    transport: "U-Bahn: Wilhelmplatz, Bus: Linie 140, 147"
  },
  {
    id: "23", 
    slug: "wiener-platz-koeln",
    name: "Wiener Platz Markt",
    address: "Wiener Platz",
    city: "Köln",
    postalCode: "51063",
    openingHours: "Dienstag, Donnerstag, Samstag 7-14",
    features: ["Regional", "International", "Streetfood"],
    isOpen: isMarketOpen("Dienstag, Donnerstag, Samstag 7-14"),
    description: "Lebendiger Markt in Mülheim mit großer Auswahl an frischen Produkten und internationalen Spezialitäten. Bekannt für günstige Preise und vielfältige Angebote.",
    phone: "N/A",
    email: "N/A", 
    website: "www.stadt-koeln.de",
    specialties: ["Obst & Gemüse", "Internationale Küche", "Käse & Milchprodukte", "Fleisch & Wurst"],
    facilities: ["Toiletten", "Fahrradständer"],
    transport: "S-Bahn: Mülheim, U-Bahn: Wiener Platz"
  },
  {
    id: "24",
    slug: "rudolfplatz-oekomarkt-koeln", 
    name: "Rudolfplatz Ökomarkt", 
    address: "Rudolfplatz",
    city: "Köln",
    postalCode: "50674",
    openingHours: "Mittwoch 11-18, Samstag 8-14, Donnerstag 16-21 (Abendmarkt)",
    features: ["Bio", "Streetfood", "Regional"],
    isOpen: isMarketOpen("Mittwoch 11-18, Samstag 8-14, Donnerstag 16-21"),
    description: "Hochwertiger Ökomarkt mit Bio-Produkten und Street Food. Der Donnerstag-Abendmarkt bietet besondere Atmosphäre mit 24 Händlern.",
    phone: "N/A",
    email: "N/A",
    website: "www.stadt-koeln.de", 
    specialties: ["Bio-Gemüse", "Streetfood", "Käse & Milchprodukte", "Backwaren"],
    facilities: ["Toiletten", "Gastronomie"],
    transport: "U-Bahn: Rudolfplatz, Bus: Linie 106, 146"
  },
  {
    id: "25",
    slug: "maternusplatz-koeln",
    name: "Maternusplatz Markt",
    address: "Maternusplatz", 
    city: "Köln",
    postalCode: "50996",
    openingHours: "Mittwoch, Samstag 7-13",
    features: ["Regional", "Bio"],
    isOpen: isMarketOpen("Mittwoch, Samstag 7-13"),
    description: "Gemütlicher Markt in Rodenkirchen mit regionalen Produkten von Bauern aus dem Kölner Umland. Eier, Obst, Gemüse und Milch direkt vom Erzeuger.",
    phone: "N/A",
    email: "N/A",
    website: "www.stadt-koeln.de",
    specialties: ["Regionale Produkte", "Milch & Eier", "Saisonales Gemüse", "Blumen"],
    facilities: ["Fahrradständer"],
    transport: "S-Bahn: Rodenkirchen, Bus: Linie 132, 133"
  },
  {
    id: "26",
    slug: "chlodwigplatz-koeln",
    name: "Chlodwigplatz Markt",
    address: "Chlodwigplatz",
    city: "Köln", 
    postalCode: "50678",
    openingHours: "Donnerstag 7-13",
    features: ["Regional", "International"],
    isOpen: isMarketOpen("Donnerstag 7-13"),
    description: "Wochenmarkt in der Südstadt mit frischen Produkten und internationalen Spezialitäten. Beliebter Treffpunkt im Veedel.",
    phone: "N/A",
    email: "N/A",
    website: "www.stadt-koeln.de",
    specialties: ["Obst & Gemüse", "Internationale Küche", "Backwaren", "Blumen"],
    facilities: ["Fahrradständer"],
    transport: "U-Bahn: Chlodwigplatz, Bus: Linie 106, 132"
  },
  {
    id: "27",
    slug: "klettenbergguertel-koeln",
    name: "Klettenberggürtel Markt",
    address: "Klettenberggürtel/Siebengebirgsallee",
    city: "Köln",
    postalCode: "50939", 
    openingHours: "Mittwoch, Samstag 7-13",
    features: ["Bio", "Regional"],
    isOpen: isMarketOpen("Mittwoch, Samstag 7-13"),
    description: "Beliebter Samstagmarkt in Klettenberg mit Bio-Eiern, frischen Schnittblumen und mediterranen Olivenspezialitäten. Traditioneller Bummelmarkt.",
    phone: "N/A", 
    email: "N/A",
    website: "www.stadt-koeln.de",
    specialties: ["Bio-Eier", "Mediterrane Spezialitäten", "Schnittblumen", "Oliven & Öle"],
    facilities: ["Toiletten", "Fahrradständer"],
    transport: "Stadtbahn: Klettenberg, Bus: Linie 136, 146"
  },
  {
    id: "28",
    slug: "severinskirchplatz-oekomarkt-koeln",
    name: "Severinskirchplatz Ökomarkt",
    address: "Severinskirchplatz",
    city: "Köln",
    postalCode: "50678",
    openingHours: "Samstag 8-13",
    features: ["Bio", "Regional"],
    isOpen: isMarketOpen("Samstag 8-13"),
    description: "Kleiner aber feiner Ökomarkt in der Südstadt mit feldfrischem Gemüse und Obst vom Biohof Bursch. Mühlenbäckerei vor Ort.",
    phone: "N/A",
    email: "N/A", 
    website: "www.stadt-koeln.de",
    specialties: ["Bio-Gemüse", "Feldfrisches Obst", "Mühlenbrot", "Bio-Fleisch"],
    facilities: ["Fahrradständer"],
    transport: "U-Bahn: Severinstraße, Bus: Linie 106, 132"
  },
  {
    id: "29",
    slug: "deutzer-freiheit-koeln", 
    name: "Deutzer Freiheit Markt", 
    address: "Deutzer Freiheit",
    city: "Köln",
    postalCode: "50679",
    openingHours: "Freitag 7-13",
    features: ["Regional", "International"],
    isOpen: isMarketOpen("Freitag 7-13"),
    description: "Wochenmarkt in Deutz mit regionalen und internationalen Produkten. Zentral gelegen mit guter Anbindung.",
    phone: "N/A",
    email: "N/A",
    website: "www.stadt-koeln.de",
    specialties: ["Obst & Gemüse", "Fleisch & Wurst", "Backwaren", "Käse"],
    facilities: ["Toiletten", "Fahrradständer"], 
    transport: "S-Bahn: Köln Messe/Deutz, U-Bahn: Deutzer Freiheit"
  }
  
];

// Helper function to find market by slug
export const findMarketBySlug = (slug: string): Market | undefined => {
  return marketData.find(market => market.slug === slug);
};

// Helper function to find market by ID (for backward compatibility)
export const findMarketById = (id: string): Market | undefined => {
  return marketData.find(market => market.id === id);
};

// Export default market data
export default marketData;
