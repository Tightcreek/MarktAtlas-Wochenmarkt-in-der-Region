import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Filter, Map, List } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

interface Market {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  openingHours: string;
  features: string[];
}

// Helper function to check if a market is currently open
const isMarketOpen = (openingHours: string): boolean => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentTime = now.getHours() * 100 + now.getMinutes(); // HHMM format

  // German day mapping
  const dayMap: { [key: string]: number } = {
    'Mo': 1, 'Di': 2, 'Mi': 3, 'Do': 4, 'Fr': 5, 'Sa': 6, 'So': 0
  };

  // Clean up the opening hours string
  const cleanedHours = openingHours.replace(/ Uhr/g, '').replace(/:/g, '');
  
  // Split by comma to handle multiple day/time combinations
  const timeSlots = cleanedHours.split(',').map(slot => slot.trim());
  
  for (const slot of timeSlots) {
    // Handle day ranges like "Mo-Fr" or single days like "Mi"
    const dayTimeMatch = slot.match(/^([A-Za-z-]+)\s+(.+)$/);
    if (!dayTimeMatch) continue;
    
    const [, daysPart, timePart] = dayTimeMatch;
    const timeRange = timePart.match(/(\d{1,2})-(\d{1,2})/);
    if (!timeRange) continue;
    
    const [, startHour, endHour] = timeRange;
    const startTime = parseInt(startHour) * 100;
    const endTime = parseInt(endHour) * 100;
    
    // Handle day ranges (e.g., "Mo-Fr") or single days
    if (daysPart.includes('-')) {
      const [startDayStr, endDayStr] = daysPart.split('-');
      const startDay = dayMap[startDayStr];
      const endDay = dayMap[endDayStr];
      
      if (startDay !== undefined && endDay !== undefined) {
        let dayMatches = false;
        if (startDay <= endDay) {
          dayMatches = currentDay >= startDay && currentDay <= endDay;
        } else {
          // Handle week wraparound (e.g., Sa-Mo)
          dayMatches = currentDay >= startDay || currentDay <= endDay;
        }
        
        if (dayMatches && currentTime >= startTime && currentTime <= endTime) {
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

const marketData: Market[] = [
  // Berlin
  {
    id: "1",
    name: "Winterfeldtmarkt",
    address: "Winterfeldtplatz",
    city: "Berlin",
    postalCode: "10781",
    openingHours: "Mi 8-14, Sa 8-16",
    features: ["Bio", "International", "Streetfood"]
  },
  {
    id: "2",
    name: "Kollwitzplatz",
    address: "Kollwitzplatz",
    city: "Berlin", 
    postalCode: "10405",
    openingHours: "Do 12-18, Sa 9-16",
    features: ["Bio", "Kunsthandwerk", "Regional"]
  },
  {
    id: "3",
    name: "Maybachufer",
    address: "Maybachufer, Neukölln",
    city: "Berlin",
    postalCode: "12047",
    openingHours: "Di, Fr 11-18:30",
    features: ["International", "Großmarkt", "Streetfood"]
  },
  {
    id: "4",
    name: "Boxhagener Platz",
    address: "Boxhagener Platz",
    city: "Berlin",
    postalCode: "10245",
    openingHours: "Sa 9-15:30",
    features: ["Bio", "Regional", "Produkte", "Imbisse"]
  },
  {
    id: "5",
    name: "Arkonaplatz",
    address: "Arkonaplatz",
    city: "Berlin",
    postalCode: "10435",
    openingHours: "Fr 12-19",
    features: ["Feinkost", "Lokal"]
  },
  {
    id: "6",
    name: "Mexikoplatz",
    address: "Mexikoplatz",
    city: "Berlin",
    postalCode: "14163",
    openingHours: "Sa 9-15",
    features: ["Bio", "Kunsthandwerk", "Dorf-Atmosphäre"]
  },
  {
    id: "7",
    name: "Karl-August-Platz",
    address: "Karl-August-Platz",
    city: "Berlin",
    postalCode: "10625",
    openingHours: "Mi 8-13, Sa 8-14",
    features: ["Blumen", "Gemüse", "Feinkost"]
  },
  {
    id: "8",
    name: "DIE DICKE LINDA",
    address: "Kranoldplatz, Neukölln",
    city: "Berlin",
    postalCode: "12051",
    openingHours: "Sa 10-16",
    features: ["Regional", "Bio", "Musik", "Streetfood"]
  },
  // Hamburg
  {
    id: "9",
    name: "Isemarkt",
    address: "Isestraße/Hoheluft",
    city: "Hamburg",
    postalCode: "20144",
    openingHours: "Di, Fr 8:30-14",
    features: ["Großer Europas", "Regional", "Bio"]
  },
  {
    id: "10",
    name: "Großneumarkt",
    address: "Großneumarkt",
    city: "Hamburg",
    postalCode: "20354",
    openingHours: "Mi, Sa 8:30-13:30",
    features: ["Historischer Stadtmarkt"]
  },
  {
    id: "11",
    name: "Fischmarkt",
    address: "Große Elbstraße 9",
    city: "Hamburg",
    postalCode: "22767",
    openingHours: "So 5-9:30",
    features: ["Kultmarkt", "Fisch", "Musik"]
  },
  {
    id: "12",
    name: "Goldbekmarkt",
    address: "Goldbekplatz",
    city: "Hamburg",
    postalCode: "22303",
    openingHours: "Di, Do, Sa 8:30-13",
    features: ["Regional", "Bio"]
  },
  {
    id: "13",
    name: "Billstedt",
    address: "Möllner Landstraße",
    city: "Hamburg",
    postalCode: "22111",
    openingHours: "Di 9-13, Fr 9-13",
    features: ["Stadtteilmarkt"]
  },
  // München
  {
    id: "14",
    name: "Viktualienmarkt",
    address: "Viktualienmarkt",
    city: "München",
    postalCode: "80331",
    openingHours: "Mo-Sa 8-20",
    features: ["Traditionsmarkt", "Regional", "Produkte"]
  },
  {
    id: "15",
    name: "Josephsplatz",
    address: "Josephsplatz",
    city: "München",
    postalCode: "80798",
    openingHours: "Di 12-18",
    features: ["Bio", "Regional"]
  },
  {
    id: "16",
    name: "Mariahilfplatz",
    address: "Mariahilfplatz",
    city: "München",
    postalCode: "81541",
    openingHours: "Sa 7-13",
    features: ["Groß", "Bauernmarkt"]
  },
  {
    id: "17",
    name: "Rosenkavaliersplatz",
    address: "Rosenkavaliersplatz",
    city: "München",
    postalCode: "81925",
    openingHours: "Do 8-18",
    features: ["Regional", "Vielfalt"]
  },
  {
    id: "18",
    name: "Kirchplatz",
    address: "Kirchplatz",
    city: "München",
    postalCode: "81543",
    openingHours: "Do 8-13",
    features: ["Nachbarschaftsmarkt"]
  },
  // Köln
  {
    id: "19",
    name: "Severinshof",
    address: "Severinshof",
    city: "Köln",
    postalCode: "50678",
    openingHours: "Di, Fr 8-14",
    features: ["Bio", "Regional"]
  },
  {
    id: "20",
    name: "Rudolfplatz",
    address: "Rudolfplatz",
    city: "Köln",
    postalCode: "50674",
    openingHours: "Mi 10-18, Sa",
    features: ["Bio", "Kunsthandwerk"]
  },
  {
    id: "21",
    name: "Münster Platz",
    address: "Münster Platz",
    city: "Köln",
    postalCode: "50733",
    openingHours: "Do 8-14",
    features: ["Bio", "Fleisch"]
  },
  // Frankfurt
  {
    id: "22",
    name: "Schillerplatz",
    address: "Schillerplatz",
    city: "Frankfurt",
    postalCode: "60313",
    openingHours: "Fr 7:30-18:30",
    features: ["Brotstand", "Fleisch", "International"]
  },
  {
    id: "23",
    name: "Berlinerhof Wochenmarkt",
    address: "Berlinerhof",
    city: "Frankfurt",
    postalCode: "60311",
    openingHours: "Di, Sa 8-16",
    features: ["Regional", "Bio"]
  },
  {
    id: "24",
    name: "Salzgasse",
    address: "Salzgasse",
    city: "Frankfurt",
    postalCode: "60311",
    openingHours: "Sa 8-16",
    features: ["Flohmarkt", "Regional"]
  },
  // Stuttgart
  {
    id: "25",
    name: "Großmarkthalle",
    address: "Großmarkthalle",
    city: "Stuttgart",
    postalCode: "70315",
    openingHours: "Di, Do, Sa",
    features: ["Großmarkthalle"]
  },
  {
    id: "26",
    name: "Markthalle",
    address: "Markthalle",
    city: "Stuttgart",
    postalCode: "70173",
    openingHours: "Mo-Sa",
    features: ["Markthalle"]
  },
  {
    id: "27",
    name: "Marienplatz",
    address: "Marienplatz",
    city: "Stuttgart",
    postalCode: "70178",
    openingHours: "Mi 10-18",
    features: ["Bio", "Regional"]
  },
  {
    id: "28",
    name: "Wilhelmsplatz",
    address: "Wilhelmsplatz",
    city: "Stuttgart",
    postalCode: "70182",
    openingHours: "Fr 8-13",
    features: ["Regional", "Bio"]
  },
  {
    id: "29",
    name: "Marktplatz Cannstatt",
    address: "Marktplatz Cannstatt",
    city: "Stuttgart",
    postalCode: "70372",
    openingHours: "Di, Do, Sa",
    features: ["Stadtteilmarkt"]
  },
  // Leipzig
  {
    id: "30",
    name: "Diezellshofer",
    address: "Diezellshofer",
    city: "Leipzig",
    postalCode: "04317",
    openingHours: "Do 8-13",
    features: ["Stadtteilmarkt"]
  },
  {
    id: "31",
    name: "Markgrafenstraße",
    address: "Markgrafenstraße",
    city: "Leipzig",
    postalCode: "04109",
    openingHours: "Mi, Sa 8-16",
    features: ["Regional", "Bio"]
  },
  {
    id: "32",
    name: "Inh Zentrum Grünau",
    address: "Zentrum Grünau",
    city: "Leipzig",
    postalCode: "04207",
    openingHours: "Do 8-16",
    features: ["Zentral", "Regional"]
  },
  {
    id: "33",
    name: "Wilhelm Külz-Ring",
    address: "Wilhelm Külz-Ring",
    city: "Leipzig",
    postalCode: "04109",
    openingHours: "Mi, Sa 8-16",
    features: ["Regional", "Bio"]
  },
  // Essen
  {
    id: "34",
    name: "Rüttenscheid",
    address: "Rüttenscheid",
    city: "Essen",
    postalCode: "45130",
    openingHours: "Di, Do, Sa",
    features: ["Vielfalt", "Bio"]
  },
  {
    id: "35",
    name: "Altenessen",
    address: "Altenessen",
    city: "Essen",
    postalCode: "45326",
    openingHours: "Mi, Do, Sa",
    features: ["Zentral", "Regional"]
  },
  {
    id: "36",
    name: "Altenessen Markt",
    address: "Altenessen Markt",
    city: "Essen",
    postalCode: "45326",
    openingHours: "Mi, Do, Sa",
    features: ["Stadtteilmarkt"]
  },
  // Dortmund
  {
    id: "37",
    name: "Markthof",
    address: "Markthof",
    city: "Dortmund",
    postalCode: "44135",
    openingHours: "Mi, Fr 7-13",
    features: ["Regional"]
  },
  {
    id: "38",
    name: "Mengede",
    address: "Mengede",
    city: "Dortmund",
    postalCode: "44359",
    openingHours: "Mi, Fr 7-13",
    features: ["Regional"]
  },
  {
    id: "39",
    name: "Mallinkckrodt-straße",
    address: "Mallinkckrodt-straße",
    city: "Dortmund",
    postalCode: "44147",
    openingHours: "Di, Fr 8-13",
    features: ["Regional"]
  },
  {
    id: "40",
    name: "Hausmarkt",
    address: "Hausmarkt",
    city: "Dortmund",
    postalCode: "44139",
    openingHours: "Mi, Sa 7-13",
    features: ["Regional"]
  },
  // Dresden
  {
    id: "41",
    name: "Fürstenhof",
    address: "Fürstenhof",
    city: "Dresden",
    postalCode: "01307",
    openingHours: "Di 8-18, Fr",
    features: ["Biothek", "Bio"]
  },
  {
    id: "42",
    name: "Bautzner",
    address: "Bautzner",
    city: "Dresden",
    postalCode: "01099",
    openingHours: "Di, Fr 8-18, Sa",
    features: ["Regional", "Bio"]
  },
  {
    id: "43",
    name: "Albertstadt",
    address: "Albertstadt",
    city: "Dresden",
    postalCode: "01099",
    openingHours: "Do 8-13",
    features: ["Stadtteilmarkt"]
  },
  // Düsseldorf
  {
    id: "44",
    name: "Carlsplatz",
    address: "Carlsplatz",
    city: "Düsseldorf",
    postalCode: "40213",
    openingHours: "Mo-Fr 8:00-18:00, Sa 8:00-16:00",
    features: ["Traditional", "Regional", "Bio"]
  },
  {
    id: "45",
    name: "Rheinischer Bauernmarkt (Pempelfort)",
    address: "Pempelforter Straße",
    city: "Düsseldorf",
    postalCode: "40211",
    openingHours: "Mi 8:30-13:00, Sa 8:30-13:30",
    features: ["Bauernmarkt", "Regional"]
  },
  {
    id: "46",
    name: "Hermannplatz (Fingern)",
    address: "Hermannplatz",
    city: "Düsseldorf",
    postalCode: "40233",
    openingHours: "Sa 7:00-13:00",
    features: ["Stadtteilmarkt"]
  },
  {
    id: "47",
    name: "Friedensplätzen (Unterbilk)",
    address: "Friedensplätzen",
    city: "Düsseldorf",
    postalCode: "40219",
    openingHours: "Di 8:00-13:00, Fr 9:00-17:00",
    features: ["Bio", "Regional"]
  },
  // Additional Dortmund markets
  {
    id: "48",
    name: "Wochenmarkt Aplerbeck",
    address: "Rodenbergstraße",
    city: "Dortmund",
    postalCode: "44287",
    openingHours: "Mi 08:00-13:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "49",
    name: "Wochenmarkt Asseln",
    address: "Asselner Hellweg / Niederste-Frielinghaus-Weg",
    city: "Dortmund", 
    postalCode: "44319",
    openingHours: "Fr 08:00-13:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "50", 
    name: "Wochenmarkt Brackel",
    address: "Brackeler Hellweg",
    city: "Dortmund",
    postalCode: "44309",
    openingHours: "Do 07:00-13:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "51",
    name: "Wochenmarkt Eving",
    address: "Evinger Platz",
    city: "Dortmund",
    postalCode: "44339",
    openingHours: "Di 07:00-13:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "52",
    name: "Wochenmarkt Hörde",
    address: "Hörder Bahnhofstraße / Ecke Benninghofer Straße",
    city: "Dortmund",
    postalCode: "44263", 
    openingHours: "Di, Fr 07:00-13:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "53",
    name: "Wochenmarkt Huckarde",
    address: "Urbanusstraße",
    city: "Dortmund",
    postalCode: "44369",
    openingHours: "Sa 07:00-14:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "54",
    name: "Wochenmarkt Lütgendortmund", 
    address: "Werner Hellweg",
    city: "Dortmund",
    postalCode: "44388",
    openingHours: "Do 08:00-13:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "55",
    name: "Wochenmarkt Mengede",
    address: "Bodelschwingher Straße / Ecke Westerfilder Straße",
    city: "Dortmund",
    postalCode: "44359",
    openingHours: "Mi, Fr 07:00-13:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "56",
    name: "Wochenmarkt Scharnhorst",
    address: "Mackenrothweg / Ecke Gleiwitzstraße",
    city: "Dortmund",
    postalCode: "44328",
    openingHours: "Fr 08:00-13:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "57",
    name: "Wochenmarkt Wambel",
    address: "Wambeler Hellweg / Ecke Schirrmannstraße", 
    city: "Dortmund",
    postalCode: "44143",
    openingHours: "Sa 07:00-13:00 Uhr", 
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "58",
    name: "Wochenmarkt Westerfilde",
    address: "Westerfilder Straße",
    city: "Dortmund",
    postalCode: "44357",
    openingHours: "Di 08:00-13:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  {
    id: "59",
    name: "Wochenmarkt Wickede",
    address: "Wickeder Hellweg / Ecke Im Odemsloh",
    city: "Dortmund",
    postalCode: "44319",
    openingHours: "Do 08:00-13:00 Uhr",
    features: ["Gemüse, Obst, Fleisch und Wurst, Backwaren, Fisch, Blumen und andere Artikel"]
  },
  // Duisburg markets
  {
    id: "60",
    name: "Wochenmarkt Duissern",
    address: "Düsseldorfer Straße",
    city: "Duisburg",
    postalCode: "47058",
    openingHours: "Mi, Sa 07:00-13:00 Uhr",
    features: ["Großer Markt mit ca. 60 Ständen in 2 Reihen Angebot an Obst und Gemüse, Fisch, Fleisch- und Wurstwaren, Käse und Molkereiprodukten, Backwaren, Blumen und Pflanzen sowie an sonstigen Marktartikeln"]
  },
  {
    id: "61", 
    name: "Wochenmarkt Neudorf",
    address: "Kaiser-Friedrich-Straße",
    city: "Duisburg",
    postalCode: "47057",
    openingHours: "Fr 08:00-13:00 Uhr",
    features: ["Kleinerer Markt mit Angebot an frischem Obst und Gemüse, Fleisch- und Wurstwaren, Backwaren, Blumen und an sonstigen Marktartikeln"]
  },
  {
    id: "62",
    name: "Wochenmarkt Alt-Hamborn",
    address: "Kaiser-Wilhelm-Straße",
    city: "Duisburg",
    postalCode: "47166",
    openingHours: "Do, Sa 08:00-13:00 Uhr",
    features: ["Großer Markt mit ca. 70 Ständen, Angebot an Obst und Gemüse, Fisch, Fleisch- und Wurstwaren, Käse und Molkereiprodukten, Backwaren, Blumen und Pflanzen sowie an sonstigen Marktartikeln"]
  },
  {
    id: "63",
    name: "Wochenmarkt Marxloh",
    address: "Kaiser-Wilhelm-Straße",
    city: "Duisburg", 
    postalCode: "47169",
    openingHours: "Di, Fr 08:00-13:00 Uhr",
    features: ["Mittlerer Markt mit ca. 30 Ständen, reiches Angebot"]
  },
  {
    id: "64",
    name: "Wochenmarkt Beeck",
    address: "Mercatorstraße",
    city: "Duisburg",
    postalCode: "47166",
    openingHours: "Mi 08:00-13:00 Uhr",
    features: ["Kleinerer Markt mit ca. 20 Ständen, reiches Angebot an frischen Waren"]
  },
  {
    id: "65",
    name: "Wochenmarkt Neumühl",
    address: "Obermarxloher Straße",
    city: "Duisburg",
    postalCode: "47167", 
    openingHours: "Sa 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot"]
  },
  {
    id: "66",
    name: "Wochenmarkt Röttgersbach",
    address: "Röttgersbacher Straße",
    city: "Duisburg",
    postalCode: "47239",
    openingHours: "Do 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "67", 
    name: "Wochenmarkt Meiderich",
    address: "Westender Straße",
    city: "Duisburg",
    postalCode: "47137", 
    openingHours: "Di, Fr 08:00-13:00 Uhr",
    features: ["Mittlerer Markt mit ca. 30 Ständen, reiches Angebot"]
  },
  {
    id: "68",
    name: "Wochenmarkt Ruhrort",
    address: "Am Schwanentor",
    city: "Duisburg",
    postalCode: "47119",
    openingHours: "Fr 08:00-13:00 Uhr",
    features: ["Kleinerer Markt mit ca. 20 Ständen, reiches Angebot an frischen Waren"]
  },
  {
    id: "69",
    name: "Wochenmarkt Buchholz",
    address: "Sittardsberger Allee",
    city: "Duisburg",
    postalCode: "47057",
    openingHours: "Sa 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "70",
    name: "Wochenmarkt Ungelsheim", 
    address: "Düsseldorfer Straße / Ecke Angertaler Straße",
    city: "Duisburg",
    postalCode: "47249",
    openingHours: "Do 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "71",
    name: "Wochenmarkt Großenbaum",
    address: "Großenbaumer Allee",
    city: "Duisburg",
    postalCode: "47249",
    openingHours: "Mi 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "72",
    name: "Wochenmarkt Süd",
    address: "Wanheimer Straße / Ecke Koloniestraße",
    city: "Duisburg",
    postalCode: "47166",
    openingHours: "Sa 08:00-13:00 Uhr", 
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "73",
    name: "Wochenmarkt Hüttenheim",
    address: "Koloniestraße",
    city: "Duisburg",
    postalCode: "47259",
    openingHours: "Fr 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "74",
    name: "Wochenmarkt Huckingen",
    address: "Düsseldorfer Landstraße",
    city: "Duisburg",
    postalCode: "47259", 
    openingHours: "Do 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "75",
    name: "Wochenmarkt Wedau",
    address: "Kalkweg / Ecke Masurenallee", 
    city: "Duisburg",
    postalCode: "47279",
    openingHours: "Fr 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "76", 
    name: "Wochenmarkt Bissingheim",
    address: "Bissingheimer Straße / Ecke Am Bissingheimer Berg",
    city: "Duisburg",
    postalCode: "47259",
    openingHours: "Sa 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "77",
    name: "Wochenmarkt Wanheimerort",
    address: "Am Wanheimer Ort / Ecke Dr.-Hammacher-Straße",
    city: "Duisburg", 
    postalCode: "47279",
    openingHours: "Do 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "78",
    name: "Wochenmarkt Rheinhausen-Mitte",
    address: "Rheinauestraße / Ecke Asterlager Straße",
    city: "Duisburg",
    postalCode: "47228",
    openingHours: "Mi, Sa 08:00-13:00 Uhr",
    features: ["Mittlerer Markt mit ca. 35 Ständen, reiches Angebot"]
  },
  {
    id: "79",
    name: "Wochenmarkt Friemersheim",
    address: "Moerser Straße",
    city: "Duisburg",
    postalCode: "47229",
    openingHours: "Fr 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "80",
    name: "Wochenmarkt Rumeln",
    address: "Rumeln-Kaldenhausen",
    city: "Duisburg",
    postalCode: "47229",
    openingHours: "Do 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "81",
    name: "Wochenmarkt Baerl",
    address: "Baerler Straße",
    city: "Duisburg",
    postalCode: "47239",
    openingHours: "Sa 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "82",
    name: "Wochenmarkt Homberg",
    address: "Rheinstraße / Ecke Duisburger Straße",
    city: "Duisburg",
    postalCode: "47198",
    openingHours: "Fr 08:00-13:00 Uhr",
    features: ["Kleinerer Markt, reiches Angebot an frischen Waren"]
  },
  {
    id: "83",
    name: "Wochenmarkt Wanhiem",
    address: "Am Tollberg/Moerser Straße",
    city: "Duisburg",
    postalCode: "47249",
    openingHours: "Mi, Sa 08:00-13:00 Uhr",
    features: ["Reiches Angebot an frischen Waren und Möglichkeit um Pflanzenheim"]
  },
  // Potsdam markets
  {
    id: "84",
    name: "Wochenmarkt Potsdam am Bassinplatz",
    address: "Bassinplatz",
    city: "Potsdam",
    postalCode: "14467",
    openingHours: "Mo-Fr 07:00-16:00 Uhr, Sa 07:00-13:00 Uhr (Apr-Okt), 07:00-12:00 (Nov-Mär)",
    features: ["Frisches vom Bauern", "Schnittblumen", "Käse", "Fisch", "Küchenkräuter und viele mehr"]
  },
  {
    id: "85",
    name: "Markt auf Nauener Tor",
    address: "Nauener Tor",
    city: "Potsdam",
    postalCode: "14467",
    openingHours: "Sa 9:00-16:00 Uhr",
    features: ["Frische Einkaufsplatz für Feinschmecker, mittwochs Streetfood, samstags Flohmarkt und Spezialitäten"]
  },
  {
    id: "86",
    name: "Wochenmarkt Weberplatz",
    address: "Weberplatz",
    city: "Potsdam",
    postalCode: "14482",
    openingHours: "Sa 07:00-14:00 Uhr", 
    features: ["Allgemeiner Wochenmarkt in Babelsberg"]
  },
  // Additional Hamburg Markets
  {
    id: "87",
    name: "Wandsbeker Wochenmarkt",
    address: "Quarree, Hamburg",
    city: "Hamburg",
    postalCode: "22041",
    openingHours: "Montag - Samstag, 08:00 - 13:00 Uhr",
    features: ["Bietet für eine große Auswahl an frischen Lebensmitteln mit imbesssarend und rund 100 Marktständen"]
  },
  {
    id: "88", 
    name: "St. Martin Markt Hamburg",
    address: "Sillemstraße 75, Hamburg", 
    city: "Hamburg",
    postalCode: "20257",
    openingHours: "Mittwoch: 15:00 - 22:00 Uhr; Samstag: 16:00 - 21:00 Uhr (Okt)",
    features: ["Bietet regionale und saisonale Produkte wie frisches Brot, Blumen und Grillgaze. Bis zu 50 Stände sind an sechs Tagen der Woche geöffnet"]
  },
  // Bremen Markets
  {
    id: "89",
    name: "Wochenmarkt Findorff", 
    address: "Neukirchstraße 45, 28215 Bremen",
    city: "Bremen",
    postalCode: "28215", 
    openingHours: "Dienstag, Donnerstag, 08:00 - 13:00 Uhr; Samstag, 08:00 - 14:00 Uhr",
    features: ["Herzstück des Stadtteils für saisonale, regionale und frische Lebensmittel"]
  },
  {
    id: "90", 
    name: "Wochenmarkt Gröpelingen",
    address: "Bürgermeister-Ehlers-Platz, Pastorenweg",
    city: "Bremen", 
    postalCode: "28237",
    openingHours: "Dienstag, Donnerstag, Samstag, 08:00 - 13:00 Uhr",
    features: ["Keine Angabe"]
  },
  {
    id: "91",
    name: "Wochenmarkt Oberwerland",
    address: "Oberwerland 8, 28219 Bremen",
    city: "Bremen",
    postalCode: "28219", 
    openingHours: "Freitag, 10:00 - 16:00 Uhr",
    features: ["Keine Angabe"]
  },
  {
    id: "92",
    name: "Bauernmarkt Unser-Lieben-Frauen",
    address: "Unser Lieben Frauen Kirchhof, 28195 Bremen",
    city: "Bremen",
    postalCode: "28195",
    openingHours: "Montag - Freitag, 08:00 - 14:00 Uhr; Samstag, 08:00 - 15:00 Uhr", 
    features: ["Keine Angabe"]
  },
  {
    id: "93",
    name: "Wochenmarkt Domshof",
    address: "Domshof, 28195 Bremen", 
    city: "Bremen",
    postalCode: "28195",
    openingHours: "Montag - Freitag, 08:00 - 14:00 Uhr; Samstag, 08:00 - 15:00 Uhr",
    features: ["Keine Angabe"]
  },
  {
    id: "94",
    name: "Wochenmarkt Walle",
    address: "Wartburgplatz 1, 28217 Bremen",
    city: "Bremen", 
    postalCode: "28217",
    openingHours: "Dienstag, Donnerstag, 08:00 - 13:00 Uhr",
    features: ["Keine Angabe"]
  },
  {
    id: "95", 
    name: "Wochenmarkt Horn-Lehe",
    address: "Ecke Robert-Bunsen-Straße/Bremen-Am Dobben", 
    city: "Bremen",
    postalCode: "28355",
    openingHours: "Donnerstag, Samstag, 08:00 - 13:00 Uhr",
    features: ["Keine Angabe"]
  },
  {
    id: "96",
    name: "Wochenmarkt Senior (Ziegenmärkt)",
    address: "Vor dem Steintor 50-62, 28203 Bremen",
    city: "Bremen",
    postalCode: "28203", 
    openingHours: "Mittwoch - Freitag, 08:00 - 18:00 Uhr; Samstag, 08:00 - 14:00 Uhr",
    features: ["Keine Angabe"]
  },
  {
    id: "97",
    name: "Wochenmarkt Vegesack",
    address: "Am Sedanplatz, 28757 Bremen",
    city: "Bremen",
    postalCode: "28757",
    openingHours: "Dienstag, Donnerstag, 08:00 - 13:00 Uhr; Samstag, 08:00 - 13:30 Uhr",
    features: ["Keine Angabe"]
  },
  {
    id: "98",
    name: "Bauernmarkt Fangturm", 
    address: "Fangturm, 28195 Bremen",
    city: "Bremen",
    postalCode: "28195",
    openingHours: "Freitag, 10:00 - 16:00 Uhr",
    features: ["Keine Angabe"]
  },
  {
    id: "99",
    name: "Wochenmarkt Osterholz",
    address: "Osterholzer Heerstraße, 28325 Bremen", 
    city: "Bremen",
    postalCode: "28325",
    openingHours: "Donnerstag, Samstag, 08:00 - 13:00 Uhr",
    features: ["Keine Angabe"]
  },
  {
    id: "100",
    name: "Wochenmarkt Schwachhausen",
    address: "Schwachhauser Heerstraße, 28209 Bremen",
    city: "Bremen",
    postalCode: "28209", 
    openingHours: "Mittwoch, 07:30 - 13:00 Uhr; Samstag, 07:30 - 13:30 Uhr",
    features: ["Keine Angabe"]
  },
  // Additional München Markets
  {
    id: "101",
    name: "Wochenmarkt Haidhausen",
    address: "Weißenburger Platz, 81667 München",
    city: "München",
    postalCode: "81667",
    openingHours: "Dienstag, 08:00 - 12:00 Uhr",
    features: ["Klassischer Wochenmarkt mit Obst, Gemüse, Fisch und Fleisch, ergänzt durch bayerische und italienische Texilwaren"]
  },
  {
    id: "102", 
    name: "Elisenhof",
    address: "St.-Anna-Platz 1, 80538 München",
    city: "München",
    postalCode: "80538",
    openingHours: "Donnerstag, 10:30 - 18:00 Uhr",
    features: ["Bietet eine breite Palette an Produkten von Obst, Gemüse, Fleisch, Fisch, bis zu Schloßkäse und Blumen. Seit 2011 in Rosenberg"]
  },
  {
    id: "103", 
    name: "Bauernmarkt Lehel",
    address: "St.-Anna-Platz 1, 80538 München", 
    city: "München",
    postalCode: "80538",
    openingHours: "Donnerstag, 10:30 - 18:00 Uhr",
    features: ["Einer der vier saisonalen Münchner Märkte mit hochpreisigem Angebot"]
  }
];

const Markets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [filteredMarkets, setFilteredMarkets] = useState(marketData);

  const handleSearch = () => {
    let filtered = marketData;

    // Filter by search term (city, postal code, or market name)
    if (searchTerm.trim()) {
      filtered = filtered.filter(market => 
        market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.postalCode.includes(searchTerm.trim()) ||
        market.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by weekday
    if (selectedDay) {
      const dayMap: { [key: string]: string[] } = {
        "mo": ["Mo", "Montag"],
        "di": ["Di", "Dienstag"],
        "mi": ["Mi", "Mittwoch"],
        "do": ["Do", "Donnerstag"],
        "fr": ["Fr", "Freitag"],
        "sa": ["Sa", "Samstag"],
        "so": ["So", "Sonntag"]
      };
      
      const searchDays = dayMap[selectedDay] || [];
      filtered = filtered.filter(market => 
        searchDays.some(day => market.openingHours.includes(day))
      );
    }

    setFilteredMarkets(filtered);
  };

  // Auto-search when search term or day changes
  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    // Auto-search after short delay
    setTimeout(() => {
      let filtered = marketData;
      
      if (value.trim()) {
        filtered = filtered.filter(market => 
          market.name.toLowerCase().includes(value.toLowerCase()) ||
          market.city.toLowerCase().includes(value.toLowerCase()) ||
          market.postalCode.includes(value.trim()) ||
          market.address.toLowerCase().includes(value.toLowerCase())
        );
      }

      if (selectedDay) {
        const dayMap: { [key: string]: string[] } = {
          "mo": ["Mo", "Montag"],
          "di": ["Di", "Dienstag"],
          "mi": ["Mi", "Mittwoch"],
          "do": ["Do", "Donnerstag"],
          "fr": ["Fr", "Freitag"],
          "sa": ["Sa", "Samstag"],
          "so": ["So", "Sonntag"]
        };
        
        const searchDays = dayMap[selectedDay] || [];
        filtered = filtered.filter(market => 
          searchDays.some(day => market.openingHours.includes(day))
        );
      }

      setFilteredMarkets(filtered);
    }, 300);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Wochenmärkte Deutschland",
    "description": "Vollständige Liste aller Wochenmärkte und Bauernmärkte in Deutschland mit Öffnungszeiten und Standorten",
    "url": "https://markt-atlas-finden.lovable.app/markets",
    "numberOfItems": marketData.length,
    "itemListElement": marketData.slice(0, 10).map((market, index) => ({
      "@type": "Place",
      "position": index + 1,
      "name": market.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": market.address,
        "addressLocality": market.city,
        "postalCode": market.postalCode,
        "addressCountry": "DE"
      },
      "openingHours": market.openingHours,
      "url": `https://markt-atlas-finden.lovable.app/markets/${market.id}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Alle Wochenmärkte Deutschland - Marktfinder mit Öffnungszeiten | MarktAtlas"
        description="Entdecke über 500 Wochenmärkte in Deutschland. Suche nach Stadt, PLZ oder Marktname. Aktuelle Öffnungszeiten, Standorte und welche Märkte heute geöffnet haben."
        keywords="wochenmärkte deutschland, bauernmärkte suchen, markt öffnungszeiten, märkte heute geöffnet, wochenmarkt berlin hamburg münchen köln, regional einkaufen"
        canonicalUrl="https://markt-atlas-finden.lovable.app/markets"
        schemaData={schemaData}
      />
      {/* Header */}
      <header className="bg-green-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              MarktAtlas
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Startseite
              </Link>
              <Link to="/markets" className="text-primary font-medium">
                Märkte
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground mb-2">
            Wochenmarkt Finder Deutschland - Alle Märkte mit Öffnungszeiten
          </h1>
          <h2 className="text-xl text-center text-muted-foreground mb-8">
            Finde Wochenmärkte in deiner Nähe - Markt heute geöffnet, Bauernmarkt Öffnungszeiten und regionale Direktvermarkter
          </h2>
          
          <div className="bg-card rounded-2xl shadow-card p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Stadt, PLZ oder Marktname eingeben..."
                  value={searchTerm}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="h-12 text-base"
                />
              </div>
              <div className="flex gap-2">
                <select 
                  value={selectedDay}
                  onChange={(e) => {
                    setSelectedDay(e.target.value);
                    // Trigger search immediately when day selection changes
                    setTimeout(() => {
                      let filtered = marketData;
                      
                      if (searchTerm.trim()) {
                        filtered = filtered.filter(market => 
                          market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          market.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          market.postalCode.includes(searchTerm.trim()) ||
                          market.address.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                      }

                      if (e.target.value) {
                        const dayMap: { [key: string]: string[] } = {
                          "mo": ["Mo", "Montag"],
                          "di": ["Di", "Dienstag"],
                          "mi": ["Mi", "Mittwoch"],
                          "do": ["Do", "Donnerstag"],
                          "fr": ["Fr", "Freitag"],
                          "sa": ["Sa", "Samstag"],
                          "so": ["So", "Sonntag"]
                        };
                        
                        const searchDays = dayMap[e.target.value] || [];
                        filtered = filtered.filter(market => 
                          searchDays.some(day => market.openingHours.includes(day))
                        );
                      }

                      setFilteredMarkets(filtered);
                    }, 100);
                  }}
                  className="h-12 px-4 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">Wochentag wählen</option>
                  <option value="mo">Montag</option>
                  <option value="di">Dienstag</option>
                  <option value="mi">Mittwoch</option>
                  <option value="do">Donnerstag</option>
                  <option value="fr">Freitag</option>
                  <option value="sa">Samstag</option>
                  <option value="so">Sonntag</option>
                </select>
                <Button onClick={handleSearch} size="lg" className="h-12">
                  <Search className="w-5 h-5 mr-2" />
                  Suchen
                </Button>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4 mr-2" />
                  Liste
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                >
                  <Map className="w-4 h-4 mr-2" />
                  Karte
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredMarkets.length} Märkte gefunden
            </p>
          </div>

          {viewMode === "list" ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredMarkets.map((market) => (
                <Card key={market.id} className="shadow-soft hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{market.name}</CardTitle>
                      {isMarketOpen(market.openingHours) ? (
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          Geöffnet
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700 border-red-200">
                          Geschlossen
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {market.address}, {market.postalCode} {market.city}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{market.openingHours}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {market.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link to={`/markets/${market.id}`}>
                      <Button variant="green" size="sm" className="w-full">
                        Details anzeigen
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Kartenansicht wird geladen...
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Markets;
