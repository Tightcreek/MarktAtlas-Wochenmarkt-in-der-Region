// Centralized market data for Germany
// This file serves as the single source of truth for all market data

export interface Market {
  id: string;
  slug?: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  latitude: number;
  longitude: number;
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
    
    const startHour = parseInt(timeMatch[1]);
    const startMin = parseInt(timeMatch[2] || '0');
    const endHour = parseInt(timeMatch[3]);
    const endMin = parseInt(timeMatch[4] || '0');
    
    const startTime = startHour * 100 + startMin;
    const endTime = endHour * 100 + endMin;
    
    // Handle day ranges (e.g., "Mo-Fr") or single days
    if (daysPart.includes('-')) {
      const [startDayStr, endDayStr] = daysPart.split('-');
      const startDay = dayMap[startDayStr];
      const endDay = dayMap[endDayStr];
      
      if (startDay !== undefined && endDay !== undefined) {
        // Check if current day is in the range
        let dayInRange = false;
        if (startDay <= endDay) {
          dayInRange = currentDay >= startDay && currentDay <= endDay;
        } else {
          // Handle week wrap-around (e.g., Sa-Mo)
          dayInRange = currentDay >= startDay || currentDay <= endDay;
        }
        
        if (dayInRange && currentTime >= startTime && currentTime <= endTime) {
          return true;
        }
      }
    } else {
      // Handle single days or multiple days separated by spaces
      const days = daysPart.split(/\s+/);
      for (const dayStr of days) {
        const day = dayMap[dayStr];
        if (day === currentDay && currentTime >= startTime && currentTime <= endTime) {
          return true;
        }
      }
    }
  }
  
  return false;
};

// Function to generate URL-friendly slug from name
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/ü/g, 'ue')
    .replace(/ö/g, 'oe')
    .replace(/ä/g, 'ae')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// Helper function to get market by ID
export const getMarketById = (id: string): Market | undefined => {
  return marketData.find(market => market.id === id);
};

// Helper function to get market by slug
export const getMarketBySlug = (slug: string): Market | undefined => {
  return marketData.find(market => (market.slug || generateSlug(market.name)) === slug);
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

  // Dresden Markets
  {
    id: "29",
    name: "Lingnermarkt",
    address: "Lingnerplatz",
    city: "Dresden",
    postalCode: "01069",
    latitude: 51.0504,
    longitude: 13.7373,
    openingHours: "Samstag 8-12",
    features: ["Bio", "Regional"],
    isOpen: isMarketOpen("Samstag 8-12"),
    description: "Biomarkt auf dem Lingnerplatz mit Fokus auf regionale Erzeugnisse.",
    phone: "+49 351 12345678",
    email: "info@lingnermarkt.de",
    website: "www.lingnermarkt-dresden.de",
    specialties: ["Bio-Produkte", "Regionale Waren", "Handwerk"],
    facilities: ["Parkanlage", "Elbblick"],
    transport: "Tram 1, 2, 4 (Pirnaischer Platz), Bus 62"
  },

  // Hannover Markets
  {
    id: "30",
    name: "Marktplatz Hannover",
    address: "Marktplatz",
    city: "Hannover",
    postalCode: "30159",
    latitude: 52.3739,
    longitude: 9.7356,
    openingHours: "Dienstag, Freitag 8-14, Samstag 8-15",
    features: ["Zentral", "Groß"],
    isOpen: isMarketOpen("Dienstag, Freitag 8-14, Samstag 8-15"),
    description: "Hannovers größter Wochenmarkt direkt vor dem Rathaus.",
    phone: "+49 511 12345678",
    email: "info@marktplatz-hannover.de",
    website: "www.marktplatz-hannover.de",
    specialties: ["Niedersächsische Produkte", "Blumen", "Gemüse", "Feinkost"],
    facilities: ["Rathaus", "Markthalle"],
    transport: "S-Bahn: Kröpcke, U-Bahn: Kröpcke (U1-U3)"
  },

  // Nürnberg Markets
  {
    id: "31",
    name: "Hauptmarkt Nürnberg",
    address: "Hauptmarkt",
    city: "Nürnberg",
    postalCode: "90403",
    latitude: 49.4610,
    longitude: 11.0619,
    openingHours: "Montag-Samstag 7-18",
    features: ["Historisch", "Groß"],
    isOpen: isMarketOpen("Montag-Samstag 7-18"),
    description: "Historischer Markt auf dem berühmten Hauptmarkt mit der Frauenkirche.",
    phone: "+49 911 12345678",
    email: "info@hauptmarkt-nuernberg.de",
    website: "www.hauptmarkt-nuernberg.de",
    specialties: ["Fränkische Spezialitäten", "Lebkuchen", "Bratwurst", "Gemüse"],
    facilities: ["Frauenkirche", "Schöner Brunnen"],
    transport: "U-Bahn: Lorenzkirche (U1), Tram 4, 6, 8"
  },

  // Essen Markets
  {
    id: "33",
    name: "Marktplatz Essen",
    address: "Marktplatz",
    city: "Essen",
    postalCode: "45127",
    latitude: 51.4508,
    longitude: 7.0131,
    openingHours: "Dienstag, Donnerstag, Samstag 8-14",
    features: ["Zentral", "Traditionsmarkt"],
    isOpen: isMarketOpen("Dienstag, Donnerstag, Samstag 8-14"),
    description: "Traditioneller Wochenmarkt im Herzen der Kulturhauptstadt.",
    phone: "+49 201 12345678",
    email: "info@marktplatz-essen.de",
    website: "www.marktplatz-essen.de",
    specialties: ["Ruhrgebiet-Spezialitäten", "Gemüse", "Backwaren"],
    facilities: ["Marktkirche", "Rathaus"],
    transport: "U-Bahn: Hauptbahnhof (U11-U18), S-Bahn: Hauptbahnhof"
  },

  // Weitere deutsche Städte
  {
    id: "35",
    name: "Marktplatz Augsburg",
    address: "Marktplatz",
    city: "Augsburg",
    postalCode: "86150",
    latitude: 48.3665,
    longitude: 10.8944,
    openingHours: "Mittwoch, Samstag 7-13",
    features: ["Historisch", "Fuggerei"],
    isOpen: isMarketOpen("Mittwoch, Samstag 7-13"),
    description: "Historischer Markt in der Fuggerstadt vor dem Renaissance-Rathaus.",
    phone: "+49 821 12345678",
    email: "info@markt-augsburg.de",
    website: "www.markt-augsburg.de",
    specialties: ["Schwäbische Küche", "Regionale Produkte", "Handwerk"],
    facilities: ["Renaissance-Rathaus", "Perlachturm"],
    transport: "Tram 1, 2, 3 (Rathausplatz), Bus 22, 23"
  },
  {
    id: "36",
    name: "Marktplatz Regensburg",
    address: "Neupfarrplatz",
    city: "Regensburg",
    postalCode: "93047",
    latitude: 49.0134,
    longitude: 12.1016,
    openingHours: "Samstag 6-14",
    features: ["UNESCO-Welterbe", "Mittelalterlich"],
    isOpen: isMarketOpen("Samstag 6-14"),
    description: "Markt in der UNESCO-Welterbe-Altstadt mit mittelalterlichem Flair.",
    phone: "+49 941 12345678",
    email: "info@markt-regensburg.de",
    website: "www.markt-regensburg.de",
    specialties: ["Bayerische Spezialitäten", "Donau-Fisch", "Regensburger Wurst"],
    facilities: ["Mittelalterliche Altstadt", "Dom"],
    transport: "Bus 1, 2, 3, 11 (Neupfarrplatz)"
  },
  {
    id: "37",
    name: "Marktplatz Würzburg",
    address: "Marktplatz",
    city: "Würzburg",
    postalCode: "97070",
    latitude: 49.7939,
    longitude: 9.9512,
    openingHours: "Dienstag, Donnerstag, Samstag 7-14",
    features: ["Weinstadt", "Fränkisch"],
    isOpen: isMarketOpen("Dienstag, Donnerstag, Samstag 7-14"),
    description: "Markt in der Weinstadt am Fuße der Festung Marienberg.",
    phone: "+49 931 12345678",
    email: "info@markt-wuerzburg.de",
    website: "www.markt-wuerzburg.de",
    specialties: ["Fränkischer Wein", "Regionale Spezialitäten", "Gemüse"],
    facilities: ["Marienkapelle", "Festungsblick"],
    transport: "Tram 1, 3, 5 (Marktplatz), Bus 9, 14"
  },
  {
    id: "38",
    name: "Marktplatz Heidelberg",
    address: "Marktplatz",
    city: "Heidelberg",
    postalCode: "69117",
    latitude: 49.3988,
    longitude: 8.6724,
    openingHours: "Mittwoch, Samstag 7-14",
    features: ["Romantisch", "Universitätsstadt"],
    isOpen: isMarketOpen("Mittwoch, Samstag 7-14"),
    description: "Romantischer Markt in der Universitätsstadt am Neckar.",
    phone: "+49 6221 12345678",
    email: "info@markt-heidelberg.de",
    website: "www.markt-heidelberg.de",
    specialties: ["Neckar-Spezialitäten", "Universitäts-Charme", "Blumen"],
    facilities: ["Heiliggeistkirche", "Schlossblick"],
    transport: "Tram 5, 21, 22 (Marktplatz), Bus 31, 32"
  },
  {
    id: "39",
    name: "Marktplatz Mannheim",
    address: "Marktplatz G1",
    city: "Mannheim",
    postalCode: "68159",
    latitude: 49.4889,
    longitude: 8.4692,
    openingHours: "Dienstag, Donnerstag, Samstag 7-14",
    features: ["Quadratestadt", "Modern"],
    isOpen: isMarketOpen("Dienstag, Donnerstag, Samstag 7-14"),
    description: "Moderner Markt in der Quadratestadt mit internationaler Ausstrahlung.",
    phone: "+49 621 12345678",
    email: "info@markt-mannheim.de",
    website: "www.markt-mannheim.de",
    specialties: ["Internationale Küche", "Kurpfälzer Spezialitäten"],
    facilities: ["Barockschloss", "Wasserturm"],
    transport: "S-Bahn: Hauptbahnhof, Tram 1, 3, 7 (Paradeplatz)"
  },
  {
    id: "40",
    name: "Marktplatz Karlsruhe",
    address: "Marktplatz",
    city: "Karlsruhe",
    postalCode: "76133",
    latitude: 49.0069,
    longitude: 8.4037,
    openingHours: "Mittwoch, Samstag 7-14",
    features: ["Fächerstadt", "Schloss"],
    isOpen: isMarketOpen("Mittwoch, Samstag 7-14"),
    description: "Markt in der Fächerstadt vor dem Barockschloss.",
    phone: "+49 721 12345678",
    email: "info@markt-karlsruhe.de",
    website: "www.markt-karlsruhe.de",
    specialties: ["Badische Küche", "Schwarzwald-Produkte", "Wein"],
    facilities: ["Barockschloss", "Pyramide"],
    transport: "S-Bahn: Marktplatz, Tram 2, 3, 4, 5 (Marktplatz)"
  },

  // Norddeutsche Märkte
  {
    id: "41",
    name: "Lübeck Markt",
    address: "Marktplatz",
    city: "Lübeck",
    postalCode: "23552",
    latitude: 53.8697,
    longitude: 10.6864,
    openingHours: "Montag, Donnerstag 7-14",
    features: ["Hansestadt", "UNESCO"],
    isOpen: isMarketOpen("Montag, Donnerstag 7-14"),
    description: "Hanseatischer Markt in der UNESCO-Welterbe-Altstadt.",
    phone: "+49 451 12345678",
    email: "info@markt-luebeck.de",
    website: "www.markt-luebeck.de",
    specialties: ["Marzipan", "Fisch", "Hanseatische Spezialitäten"],
    facilities: ["Rathaus", "Marienkirche"],
    transport: "Bus 5, 6, 11, 12 (Koberg)"
  },
  {
    id: "42",
    name: "Rostock Markt",
    address: "Neuer Markt",
    city: "Rostock",
    postalCode: "18055",
    latitude: 54.0833,
    longitude: 12.1088,
    openingHours: "Dienstag, Donnerstag, Samstag 8-15",
    features: ["Hansestadt", "Ostsee"],
    isOpen: isMarketOpen("Dienstag, Donnerstag, Samstag 8-15"),
    description: "Traditionsmarkt in der Hansestadt an der Ostsee.",
    phone: "+49 381 12345678",
    email: "info@markt-rostock.de",
    website: "www.markt-rostock.de",
    specialties: ["Ostseefisch", "Mecklenburgische Küche", "Sanddorn"],
    facilities: ["Rathaus", "Marienkirche"],
    transport: "S-Bahn: Hauptbahnhof, Tram 1, 2, 3 (Neuer Markt)"
  },
  {
    id: "43",
    name: "Kiel Markt",
    address: "Exerzierplatz",
    city: "Kiel",
    postalCode: "24103",
    latitude: 54.3233,
    longitude: 10.1228,
    openingHours: "Mittwoch, Samstag 8-14",
    features: ["Seestadt", "Kieler Woche"],
    isOpen: isMarketOpen("Mittwoch, Samstag 8-14"),
    description: "Maritimer Markt in der Landeshauptstadt Schleswig-Holsteins.",
    phone: "+49 431 12345678",
    email: "info@markt-kiel.de",
    website: "www.markt-kiel.de",
    specialties: ["Frischer Fisch", "Kieler Sprotten", "Holsteiner Spezialitäten"],
    facilities: ["Hafen-Nähe", "Kieler Förde"],
    transport: "Bus 11, 12, 21, 22 (Exerzierplatz)"
  },
  {
    id: "44",
    name: "Oldenburg Markt",
    address: "Marktplatz",
    city: "Oldenburg",
    postalCode: "26122",
    latitude: 53.1439,
    longitude: 8.2139,
    openingHours: "Freitag, Samstag 8-14",
    features: ["Residenzstadt"],
    isOpen: isMarketOpen("Freitag, Samstag 8-14"),
    description: "Residenzstädtischer Markt mit norddeutschem Charme.",
    phone: "+49 441 12345678",
    email: "info@markt-oldenburg.de",
    website: "www.markt-oldenburg.de",
    specialties: ["Oldenburger Spezialitäten", "Gemüse", "Kunsthandwerk"],
    facilities: ["Schloss", "Lappan"],
    transport: "Bus 301, 302, 303 (Schlossplatz)"
  },

  // Ostdeutsche Märkte
  {
    id: "45",
    name: "Erfurt Markt",
    address: "Domplatz",
    city: "Erfurt",
    postalCode: "99084",
    latitude: 50.9759,
    longitude: 11.0233,
    openingHours: "Mittwoch, Samstag 8-15",
    features: ["Dom", "Mittelalterlich"],
    isOpen: isMarketOpen("Mittwoch, Samstag 8-15"),
    description: "Mittelalterlicher Markt vor dem imposanten Dom und der Severikirche.",
    phone: "+49 361 12345678",
    email: "info@markt-erfurt.de",
    website: "www.markt-erfurt.de",
    specialties: ["Thüringer Rostbratwurst", "Regionale Produkte", "Kräuter"],
    facilities: ["Dom", "Severikirche", "Domstufenfestspiele"],
    transport: "Tram 1, 3, 4, 5 (Domplatz)"
  },
  {
    id: "46",
    name: "Weimar Markt",
    address: "Marktplatz",
    city: "Weimar",
    postalCode: "99423",
    latitude: 50.9795,
    longitude: 11.3235,
    openingHours: "Dienstag, Donnerstag, Samstag 8-13",
    features: ["Kulturstadt", "Goethe"],
    isOpen: isMarketOpen("Dienstag, Donnerstag, Samstag 8-13"),
    description: "Kulturhistorischer Markt in der Stadt der Dichter und Denker.",
    phone: "+49 3643 12345678",
    email: "info@markt-weimar.de",
    website: "www.markt-weimar.de",
    specialties: ["Thüringer Spezialitäten", "Kulturprodukte", "Bücher"],
    facilities: ["Stadthaus", "Goethe-Museum"],
    transport: "Bus 1, 2, 3, 6 (Goetheplatz)"
  },
  {
    id: "47",
    name: "Jena Markt",
    address: "Marktplatz",
    city: "Jena",
    postalCode: "07743",
    latitude: 50.9272,
    longitude: 11.5861,
    openingHours: "Mittwoch, Samstag 8-14",
    features: ["Universitätsstadt", "Optik"],
    isOpen: isMarketOpen("Mittwoch, Samstag 8-14"),
    description: "Universitätsmarkt in der Stadt der Optik und Präzision.",
    phone: "+49 3641 12345678",
    email: "info@markt-jena.de",
    website: "www.markt-jena.de",
    specialties: ["Studentenfreundlich", "Thüringer Küche", "Bio-Produkte"],
    facilities: ["Rathaus", "Universitäts-Nähe"],
    transport: "Tram 2, 3, 4 (Markt), Bus 10, 11"
  },
  {
    id: "48",
    name: "Magdeburg Markt",
    address: "Alten Markt",
    city: "Magdeburg",
    postalCode: "39104",
    latitude: 52.1333,
    longitude: 11.6167,
    openingHours: "Dienstag, Freitag, Samstag 8-15",
    features: ["Ottostadt", "Elbe"],
    isOpen: isMarketOpen("Dienstag, Freitag, Samstag 8-15"),
    description: "Traditioneller Markt in der Ottostadt an der Elbe.",
    phone: "+49 391 12345678",
    email: "info@markt-magdeburg.de",
    website: "www.markt-magdeburg.de",
    specialties: ["Sachsen-Anhalt Produkte", "Elbfisch", "Regionale Küche"],
    facilities: ["Rathaus", "Dom", "Elbe-Nähe"],
    transport: "Tram 1, 2, 8, 9 (Alter Markt)"
  },
  {
    id: "49",
    name: "Halle Markt",
    address: "Marktplatz",
    city: "Halle",
    postalCode: "06108",
    latitude: 51.4833,
    longitude: 11.9667,
    openingHours: "Dienstag, Donnerstag, Samstag 8-15",
    features: ["Händel-Stadt", "Salz"],
    isOpen: isMarketOpen("Dienstag, Donnerstag, Samstag 8-15"),
    description: "Markt in der Händel-Stadt mit salziger Tradition.",
    phone: "+49 345 12345678",
    email: "info@markt-halle.de",
    website: "www.markt-halle.de",
    specialties: ["Halloren-Schokolade", "Salzige Spezialitäten", "Musik"],
    facilities: ["Marktkirche", "Händel-Haus"],
    transport: "Tram 2, 3, 7, 9 (Marktplatz)"
  },
  {
    id: "50",
    name: "Chemnitz Markt",
    address: "Marktplatz",
    city: "Chemnitz",
    postalCode: "09111",
    latitude: 50.8333,
    longitude: 12.9167,
    openingHours: "Montag, Mittwoch, Freitag 8-14",
    features: ["Industriestadt", "Modern"],
    isOpen: isMarketOpen("Montag, Mittwoch, Freitag 8-14"),
    description: "Moderner Markt in der sächsischen Industriestadt.",
    phone: "+49 371 12345678",
    email: "info@markt-chemnitz.de",
    website: "www.markt-chemnitz.de",
    specialties: ["Sächsische Küche", "Industrieller Charme", "Handwerk"],
    facilities: ["Rathaus", "Opera"],
    transport: "Tram 2, 3, 4 (Zentralhaltestelle)"
  }
];

export default marketData;