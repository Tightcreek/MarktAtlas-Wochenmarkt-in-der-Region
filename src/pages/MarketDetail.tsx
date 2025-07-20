import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Phone, Mail, Globe } from "lucide-react";

interface Market {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  openingHours: string;
  features: string[];
  isOpen: boolean;
  description?: string;
  phone?: string;
  email?: string;
  website?: string;
  specialties?: string[];
  facilities?: string[];
  transport?: string;
}

// Extended market data with additional details
const getMarketDetails = (id: string): Market | undefined => {
  const baseMarkets = [
    {
      id: "1",
      name: "Winterfeldtmarkt",
      address: "Winterfeldtplatz",
      city: "Berlin",
      postalCode: "10781",
      openingHours: "Mittwoch 8-14, Samstag 8-16",
      features: ["Bio", "International", "Streetfood"],
      isOpen: true,
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
      name: "Kollwitzplatz",
      address: "Kollwitzplatz",
      city: "Berlin",
      postalCode: "10435",
      openingHours: "Donnerstag 12-19, Samstag 9-16",
      features: ["Bio", "Kunsthandwerk", "Regional"],
      isOpen: false,
      description: "Der Markt am Kollwitzplatz besteht seit über 20 Jahren und hat sich zu einem der wichtigsten Bio-Märkte Berlins entwickelt. Benannt nach der Künstlerin Käthe Kollwitz, spiegelt der Markt den kreativen und umweltbewussten Geist des Kiezes wider.",
      phone: "+49 30 12345679",
      email: "info@kollwitzplatz-markt.de", 
      website: "www.kollwitzplatz-markt.de",
      specialties: ["Bio-Gemüse", "Backwaren", "Käse & Milchprodukte", "Blumen & Pflanzen", "Regionale Fleischwaren", "Honig & Marmeladen"],
      facilities: ["Toiletten", "Sitzgelegenheiten"],
      transport: "Öffentliche Verkehrsmittel: U2 Senefelderplatz, Tram M2, M10"
    },
    {
      id: "3",
      name: "Maybachufer",
      address: "Maybachufer, Neukölln",
      city: "Berlin",
      postalCode: "12047",
      openingHours: "Dienstag, Freitag 11-18:30",
      features: ["International", "Großmarkt", "Streetfood"],
      isOpen: true,
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
      name: "Boxhagener Platz",
      address: "Boxhagener Platz",
      city: "Berlin",
      postalCode: "10245",
      openingHours: "Samstag 9-15:30",
      features: ["Bio", "Regional", "Produkte", "Imbisse"],
      isOpen: false,
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
      name: "Arkonaplatz",
      address: "Arkonaplatz",
      city: "Berlin",
      postalCode: "10435",
      openingHours: "Freitag 12-19",
      features: ["Feinkost", "Lokal"],
      isOpen: true,
      description: "Der kleine aber feine Wochenmarkt am Arkonaplatz in Mitte besticht durch sein hochwertiges Angebot an Feinkost und lokalen Spezialitäten. Trotz seiner kompakten Größe bietet er eine sorgfältig kuratierte Auswahl an Produkten.",
      phone: "+49 30 45678901",
      email: "info@arkonaplatz-markt.de",
      website: "www.arkonaplatz-markt.de",
      specialties: ["Feinkost", "Käse", "Wein", "Backwaren", "Lokale Spezialitäten"],
      facilities: ["Fahrradständer"],
      transport: "U-Bahn: Bernauer Straße (U8), Tram M1, M12"
    },
    {
      id: "6",
      name: "Mexikoplatz",
      address: "Mexikoplatz",
      city: "Berlin",
      postalCode: "14163",
      openingHours: "Samstag 9-15",
      features: ["Bio", "Kunsthandwerk", "Dorf-Atmosphäre"],
      isOpen: false,
      description: "Der Wochenmarkt am Mexikoplatz in Zehlendorf verkörpert das dörfliche Flair des Stadtteils. Mit seinem Fokus auf Bio-Produkte und Kunsthandwerk bietet er eine gemütliche Alternative zu den größeren Märkten der Innenstadt.",
      phone: "+49 30 56789012",
      email: "info@mexikoplatz-markt.de",
      website: "www.mexikoplatz-markt.de",
      specialties: ["Bio-Produkte", "Kunsthandwerk", "Blumen", "Backwaren", "Lokale Erzeugnisse"],
      facilities: ["Toiletten", "Sitzgelegenheiten", "Fahrradständer"],
      transport: "S-Bahn: Mexikoplatz (S1), Bus 112, 115"
    },
    {
      id: "7",
      name: "Karl-August-Platz",
      address: "Karl-August-Platz",
      city: "Berlin",
      postalCode: "10625",
      openingHours: "Mittwoch 8-13, Samstag 8-14",
      features: ["Blumen", "Gemüse", "Feinkost"],
      isOpen: true,
      description: "Der traditionelle Wochenmarkt am Karl-August-Platz in Charlottenburg ist bekannt für sein umfangreiches Angebot an frischen Blumen, Gemüse und Feinkost. Ein etablierter Markt mit langjährigen Händlern und treuer Kundschaft.",
      phone: "+49 30 67890123",
      email: "info@karl-august-markt.de",
      website: "www.karl-august-markt.de",
      specialties: ["Blumen", "Frisches Gemüse", "Feinkost", "Backwaren", "Milchprodukte"],
      facilities: ["Toiletten", "Fahrradständer"],
      transport: "U-Bahn: Sophie-Charlotte-Platz (U2), Bus M45"
    },
    {
      id: "8",
      name: "DIE DICKE LINDA",
      address: "Kranoldplatz, Neukölln",
      city: "Berlin",
      postalCode: "12051",
      openingHours: "Samstag 10-16",
      features: ["Regional", "Bio", "Musik", "Streetfood"],
      isOpen: false,
      description: "DIE DICKE LINDA am Kranoldplatz ist mehr als nur ein Wochenmarkt - es ist ein kultureller Treffpunkt mit Live-Musik, regionalen Bio-Produkten und kreativen Streetfood-Ständen. Ein lebendiger Markt, der Gemeinschaft und Nachhaltigkeit vereint.",
      phone: "+49 30 78901234",
      email: "info@dickielinda.de",
      website: "www.dickielinda.de",
      specialties: ["Bio-Produkte", "Streetfood", "Handwerk", "Lokale Erzeugnisse", "Vintage"],
      facilities: ["Musik-Bühne", "Sitzgelegenheiten", "Toiletten"],
      transport: "S-Bahn: Lichterfelde Süd, Bus 187, 284"
    },
    // Hamburg
    {
      id: "9",
      name: "Isemarkt",
      address: "Isestraße/Hoheluft",
      city: "Hamburg",
      postalCode: "20144",
      openingHours: "Dienstag, Freitag 8:30-14",
      features: ["Großer Europas", "Regional", "Bio"],
      isOpen: true,
      description: "Der Isemarkt gilt als einer der größten und schönsten Wochenmärkte Norddeutschlands. Mit über 300 Ständen bietet er eine beeindruckende Vielfalt an regionalen und internationalen Produkten in lebendiger Atmosphäre.",
      phone: "+49 40 12345678",
      email: "info@isemarkt.de",
      website: "www.isemarkt.de",
      specialties: ["Fisch & Meeresfrüchte", "Norddeutsche Spezialitäten", "Bio-Produkte", "Backwaren", "Blumen"],
      facilities: ["Toiletten", "Fahrradständer", "Imbissstände"],
      transport: "U-Bahn: Hoheluftbrücke (U3), Bus 5, 15"
    },
    {
      id: "10",
      name: "Großneumarkt",
      address: "Großneumarkt",
      city: "Hamburg",
      postalCode: "20354",
      openingHours: "Mittwoch, Samstag 8:30-13:30",
      features: ["Historischer Stadtmarkt"],
      isOpen: false,
      description: "Der historische Markt am Großneumarkt in der Hamburger Neustadt blickt auf eine jahrhundertelange Tradition zurück. In zentraler Lage bietet er klassische Marktwaren in authentischer Atmosphäre.",
      phone: "+49 40 23456789",
      email: "info@grossneumarkt.de",
      website: "www.grossneumarkt-hamburg.de",
      specialties: ["Traditionelle Marktwaren", "Fisch", "Gemüse", "Backwaren", "Fleischwaren"],
      facilities: ["Historisches Ambiente", "Zentrale Lage"],
      transport: "U-Bahn: Gänsemarkt (U2), Bus 35, 36"
    },
    {
      id: "11",
      name: "Fischmarkt",
      address: "Große Elbstraße 9",
      city: "Hamburg",
      postalCode: "22767",
      openingHours: "Sonntag 5-9:30",
      features: ["Kultmarkt", "Fisch", "Musik"],
      isOpen: true,
      description: "Der weltberühmte Hamburger Fischmarkt ist mehr als nur ein Markt - er ist eine Institution. Jeden Sonntagmorgen lockt er mit frischem Fisch, Live-Musik und der einzigartigen Atmosphäre des traditionellen Marktschreis tausende Besucher an.",
      phone: "+49 40 34567890",
      email: "info@hamburger-fischmarkt.de",
      website: "www.hamburger-fischmarkt.de",
      specialties: ["Frischer Fisch", "Meeresfrüchte", "Obst", "Souvenirs", "Live-Musik"],
      facilities: ["Fischmarkthalle", "Live-Bühne", "Gastronomie"],
      transport: "S-Bahn: Reeperbahn (S1, S3), Bus 112"
    },
    {
      id: "12",
      name: "Goldbekmarkt",
      address: "Goldbekplatz",
      city: "Hamburg",
      postalCode: "22303",
      openingHours: "Dienstag, Donnerstag, Samstag 8:30-13",
      features: ["Regional", "Bio"],
      isOpen: false,
      description: "Der Goldbekmarkt in Winterhude ist ein beliebter Stadtteilmarkt, der sich durch sein hochwertiges Angebot an regionalen und Bio-Produkten auszeichnet. Ein Markt mit familiärer Atmosphäre und persönlicher Beratung.",
      phone: "+49 40 45678901",
      email: "info@goldbekmarkt.de",
      website: "www.goldbekmarkt.de",
      specialties: ["Bio-Gemüse", "Regionale Produkte", "Backwaren", "Käse", "Blumen"],
      facilities: ["Fahrradständer", "Sitzgelegenheiten"],
      transport: "U-Bahn: Kellinghusenstraße (U3), Bus 6, 25"
    },
    {
      id: "13",
      name: "Billstedt",
      address: "Möllner Landstraße",
      city: "Hamburg",
      postalCode: "22111",
      openingHours: "Dienstag 9-13, Freitag 9-13",
      features: ["Stadtteilmarkt"],
      isOpen: true,
      description: "Der Stadtteilmarkt in Billstedt versorgt die östlichen Stadtteile Hamburgs mit frischen Produkten und alltäglichen Marktartikeln. Ein bodenständiger Markt mit faire Preisen und freundlicher Atmosphäre.",
      phone: "+49 40 56789012",
      email: "info@billstedt-markt.de",
      website: "www.billstedt-markt.de",
      specialties: ["Frisches Gemüse", "Obst", "Backwaren", "Haushaltsartikel", "Textilien"],
      facilities: ["Parkplätze", "Fahrradständer"],
      transport: "S-Bahn: Billwerder-Moorfleet (S2, S21), Bus 8, 230"
    },
    // München
    {
      id: "14",
      name: "Viktualienmarkt",
      address: "Viktualienmarkt",
      city: "München",
      postalCode: "80331",
      openingHours: "Montag-Samstag 8-20",
      features: ["Traditionsmarkt", "Regional", "Produkte"],
      isOpen: true,
      description: "Der Viktualienmarkt im Herzen Münchens ist der berühmteste Markt der Stadt und ein wahres Paradies für Feinschmecker. Seit über 200 Jahren bietet er beste bayerische und internationale Spezialitäten in einzigartiger Atmosphäre.",
      phone: "+49 89 12345678",
      email: "info@viktualienmarkt.de",
      website: "www.viktualienmarkt-muenchen.de",
      specialties: ["Bayerische Spezialitäten", "Feinkost", "Blumen", "Gewürze", "Metzgereiwaren", "Käse"],
      facilities: ["Biergarten", "Toiletten", "Maypole", "Brunnen"],
      transport: "U-Bahn/S-Bahn: Marienplatz, U3/U6 Marienplatz"
    },
    {
      id: "15",
      name: "Josephsplatz",
      address: "Josephsplatz",
      city: "München",
      postalCode: "80798",
      openingHours: "Dienstag 12-18",
      features: ["Bio", "Regional"],
      isOpen: false,
      description: "Der kleine aber feine Biomarkt am Josephsplatz in Schwabing ist ein Geheimtipp für qualitätsbewusste Einkäufer. Mit seinem Fokus auf biologische und regionale Produkte bietet er eine persönliche Alternative zu größeren Märkten.",
      phone: "+49 89 23456789",
      email: "info@josephsplatz-markt.de",
      website: "www.josephsplatz-biomarkt.de",
      specialties: ["Bio-Gemüse", "Naturkost", "Vollkornbackwaren", "Bio-Fleisch", "Naturkosmetik"],
      facilities: ["Fahrradständer", "Beratung"],
      transport: "U-Bahn: Josephsplatz (U2), Bus 154"
    },
    {
      id: "16",
      name: "Mariahilfplatz",
      address: "Mariahilfplatz",
      city: "München",
      postalCode: "81541",
      openingHours: "Samstag 7-13",
      features: ["Groß", "Bauernmarkt"],
      isOpen: true,
      description: "Der Bauernmarkt am Mariahilfplatz in der Au ist einer der größten und traditionsreichsten Wochenmärkte Münchens. Hier treffen sich Bauern aus dem Umland, um ihre frischen Erzeugnisse direkt zu vermarkten.",
      phone: "+49 89 34567890",
      email: "info@mariahilfplatz-markt.de",
      website: "www.mariahilfplatz-bauernmarkt.de",
      specialties: ["Direktvermarkter", "Bauernhof-Produkte", "Saisonales Gemüse", "Fleisch vom Bauernhof", "Milchprodukte"],
      facilities: ["Parkplätze", "Toiletten", "Fahrradständer"],
      transport: "S-Bahn: Rosenheimer Platz (S1-S8), Bus 52"
    },
    {
      id: "17",
      name: "Rosenkavaliersplatz",
      address: "Rosenkavaliersplatz",
      city: "München",
      postalCode: "81925",
      openingHours: "Donnerstag 8-18",
      features: ["Regional", "Vielfalt"],
      isOpen: false,
      description: "Der Wochenmarkt am Rosenkavaliersplatz in Bogenhausen zeichnet sich durch seine große Vielfalt und das hochwertige Angebot aus. Ein beliebter Treffpunkt für die Anwohner des gehobenen Stadtteils.",
      phone: "+49 89 45678901",
      email: "info@rosenkavaliersplatz-markt.de",
      website: "www.rosenkavaliersplatz-markt.de",
      specialties: ["Feinkost", "Internationale Küche", "Bio-Produkte", "Blumen", "Backwaren"],
      facilities: ["Sitzgelegenheiten", "Fahrradständer"],
      transport: "U-Bahn: Böhmerwaldplatz (U4), Bus 187"
    },
    {
      id: "18",
      name: "Kirchplatz",
      address: "Kirchplatz",
      city: "München",
      postalCode: "81543",
      openingHours: "Donnerstag 8-13",
      features: ["Nachbarschaftsmarkt"],
      isOpen: true,
      description: "Der gemütliche Nachbarschaftsmarkt am Kirchplatz in Haidhausen ist ein echter Geheimtipp. In familiärer Atmosphäre finden Sie hier alles für den täglichen Bedarf und können dabei die persönliche Beratung der Händler genießen.",
      phone: "+49 89 56789012",
      email: "info@kirchplatz-markt.de",
      website: "www.kirchplatz-haidhausen.de",
      specialties: ["Nachbarschaftliche Atmosphäre", "Frische Produkte", "Backwaren", "Käse", "Blumen"],
      facilities: ["Kleine Größe", "Persönliche Betreuung"],
      transport: "S-Bahn: Rosenheimer Platz (S1-S8), Tram 15, 25"
    },
    // Köln
    {
      id: "19",
      name: "Severinshof",
      address: "Severinshof",
      city: "Köln",
      postalCode: "50678",
      openingHours: "Dienstag, Freitag 8-14",
      features: ["Bio", "Regional"],
      isOpen: true,
      description: "Der Biomarkt am Severinshof in der Südstadt ist ein Paradies für umweltbewusste Einkäufer. Mit seinem konsequent ökologischen Angebot und der zentralen Lage ist er ein wichtiger Anlaufpunkt für nachhaltige Lebensmittel.",
      phone: "+49 221 12345678",
      email: "info@severinshof-markt.de",
      website: "www.severinshof-biomarkt.de",
      specialties: ["Zertifizierte Bio-Produkte", "Naturkost", "Vollkorn", "Bio-Fleisch", "Öko-Textilien"],
      facilities: ["Bio-Zertifizierung", "Beratung", "Fahrradständer"],
      transport: "KVB: Chlodwigplatz (Linien 15, 16), U-Bahn U16, U18"
    },
    {
      id: "20",
      name: "Rudolfplatz",
      address: "Rudolfplatz",
      city: "Köln",
      postalCode: "50674",
      openingHours: "Mittwoch 10-18, Samstag",
      features: ["Bio", "Kunsthandwerk"],
      isOpen: false,
      description: "Der Markt am Rudolfplatz im Herzen der Kölner Innenstadt kombiniert hochwertiges Bio-Angebot mit kreativem Kunsthandwerk. Ein urbaner Markt, der Nachhaltigkeit und Kreativität vereint.",
      phone: "+49 221 23456789",
      email: "info@rudolfplatz-markt.de",
      website: "www.rudolfplatz-koeln.de",
      specialties: ["Bio-Lebensmittel", "Kunsthandwerk", "Design", "Vintage", "Lokale Produkte"],
      facilities: ["Zentrale Lage", "Kulturelles Ambiente"],
      transport: "KVB: Rudolfplatz (Linien 1, 7, 12, 15), U-Bahn U1, U7"
    },
    {
      id: "21",
      name: "Münster Platz",
      address: "Münster Platz",
      city: "Köln",
      postalCode: "50733",
      openingHours: "Donnerstag 8-14",
      features: ["Bio", "Fleisch"],
      isOpen: true,
      description: "Der traditionelle Wochenmarkt am Münster Platz in Nippes ist bekannt für seine hochwertigen Bio-Produkte und exzellente Fleischwaren. Ein Markt mit langer Tradition und treuer Stammkundschaft.",
      phone: "+49 221 34567890",
      email: "info@muensterplatz-markt.de",
      website: "www.muensterplatz-nippes.de",
      specialties: ["Bio-Fleisch", "Metzgereiwaren", "Regionale Erzeugnisse", "Backwaren", "Käse"],
      facilities: ["Fleischerei-Spezialist", "Bio-Zertifikat"],
      transport: "KVB: Florastraße (Linie 18), S-Bahn: Nippes"
    },
    // Frankfurt
    {
      id: "22",
      name: "Schillerplatz",
      address: "Schillerplatz",
      city: "Frankfurt",
      postalCode: "60313",
      openingHours: "Freitag 7:30-18:30",
      features: ["Brotstand", "Fleisch", "International"],
      isOpen: true,
      description: "Der Wochenmarkt am Schillerplatz im Frankfurter Westend ist ein lebendiger Stadtteilmarkt mit internationalem Flair. Besonders bekannt für seine exzellenten Brot- und Fleischstände sowie das vielfältige internationale Angebot.",
      phone: "+49 69 12345678",
      email: "info@schillerplatz-markt.de",
      website: "www.schillerplatz-frankfurt.de",
      specialties: ["Handwerksbäckerei", "Metzgereiwaren", "Internationale Spezialitäten", "Feinkost", "Blumen"],
      facilities: ["Lange Öffnungszeiten", "Vielfalt"],
      transport: "U-Bahn: Westend (U6, U7), Bus 36, 50"
    },
    {
      id: "23",
      name: "Berlinerhof Wochenmarkt",
      address: "Berlinerhof",
      city: "Frankfurt",
      postalCode: "60311",
      openingHours: "Dienstag, Samstag 8-16",
      features: ["Regional", "Bio"],
      isOpen: false,
      description: "Der Wochenmarkt am Berlinerhof in der Frankfurter Innenstadt bietet eine sorgfältige Auswahl regionaler und biologischer Produkte. Mit seiner zentralen Lage ist er ein beliebter Anlaufpunkt für Berufstätige und Anwohner.",
      phone: "+49 69 23456789",
      email: "info@berlinerhof-markt.de",
      website: "www.berlinerhof-frankfurt.de",
      specialties: ["Regionale Erzeuger", "Bio-Sortiment", "Feinkost", "Backwaren", "Käse"],
      facilities: ["Zentrale Lage", "Bio-Fokus"],
      transport: "U-Bahn: Hauptwache (U1-U5), S-Bahn: Hauptwache"
    },
    {
      id: "24",
      name: "Salzgasse",
      address: "Salzgasse",
      city: "Frankfurt",
      postalCode: "60311",
      openingHours: "Samstag 8-16",
      features: ["Flohmarkt", "Regional"],
      isOpen: true,
      description: "Der Markt in der Salzgasse verbindet traditionellen Wochenmarkt mit Flohmarkt-Charakter. In der historischen Altstadt gelegen, bietet er neben regionalen Produkten auch Antiquitäten und Besonderheiten.",
      phone: "+49 69 34567890",
      email: "info@salzgasse-markt.de",
      website: "www.salzgasse-altstadt.de",
      specialties: ["Regionale Produkte", "Antiquitäten", "Vintage", "Handwerk", "Besonderheiten"],
      facilities: ["Historische Altstadt", "Flohmarkt-Charakter"],
      transport: "U-Bahn: Dom/Römer (U4, U5), S-Bahn: Konstablerwache"
    },
    // Stuttgart
    {
      id: "25",
      name: "Großmarkthalle",
      address: "Großmarkthalle",
      city: "Stuttgart",
      postalCode: "70315",
      openingHours: "Dienstag, Donnerstag, Samstag",
      features: ["Großmarkthalle"],
      isOpen: false,
      description: "Die Großmarkthalle Stuttgart ist das Zentrum des Lebensmittelgroßhandels in der Region. Hier können auch Privatkunden an bestimmten Tagen einkaufen und von der großen Auswahl und den Großhandelspreisen profitieren.",
      phone: "+49 711 12345678",
      email: "info@grossmarkthalle-stuttgart.de",
      website: "www.grossmarkthalle-stuttgart.de",
      specialties: ["Großhandel", "Gastronomiebedarf", "Frische Ware", "Großpackungen", "Gastronomie"],
      facilities: ["Großmarkt", "Parkplätze", "Ladezonen"],
      transport: "S-Bahn: Cannstatt (S1-S3), Bus 52, 55"
    },
    {
      id: "26",
      name: "Markthalle",
      address: "Markthalle",
      city: "Stuttgart",
      postalCode: "70173",
      openingHours: "Montag-Samstag",
      features: ["Markthalle"],
      isOpen: true,
      description: "Die historische Markthalle Stuttgart ist ein architektonisches Juwel und kulinarisches Paradies. Unter dem prächtigen Jugendstil-Dach finden Sie eine einzigartige Vielfalt an Feinkost, internationalen Spezialitäten und traditionellen Produkten.",
      phone: "+49 711 23456789",
      email: "info@markthalle-stuttgart.de",
      website: "www.markthalle-stuttgart.de",
      specialties: ["Internationale Küche", "Feinkost", "Gewürze", "Käse", "Backwaren", "Süßwaren"],
      facilities: ["Historisches Gebäude", "Gastronomie", "Events"],
      transport: "U-Bahn: Charlottenplatz (U5-U7, U12), S-Bahn: Stadtmitte"
    },
    {
      id: "27",
      name: "Marienplatz",
      address: "Marienplatz",
      city: "Stuttgart",
      postalCode: "70178",
      openingHours: "Mittwoch 10-18",
      features: ["Bio", "Regional"],
      isOpen: false,
      description: "Der Biomarkt am Marienplatz in Stuttgart-Süd ist ein wichtiger Anlaufpunkt für umweltbewusste Einkäufer. Mit seinem konsequent ökologischen Sortiment und der entspannten Atmosphäre zieht er Kunden aus der ganzen Stadt an.",
      phone: "+49 711 34567890",
      email: "info@marienplatz-biomarkt.de",
      website: "www.marienplatz-stuttgart.de",
      specialties: ["Zertifizierte Bio-Produkte", "Demeter", "Naturkost", "Bio-Fleisch", "Vollkorn"],
      facilities: ["Bio-Zertifizierung", "Lange Öffnungszeiten"],
      transport: "U-Bahn: Marienplatz (U1, U14), Bus 42, 44"
    },
    {
      id: "28",
      name: "Wilhelmsplatz",
      address: "Wilhelmsplatz",
      city: "Stuttgart",
      postalCode: "70182",
      openingHours: "Freitag 8-13",
      features: ["Regional", "Bio"],
      isOpen: true,
      description: "Der gemütliche Wochenmarkt am Wilhelmsplatz in Cannstatt verbindet regionale Tradition mit modernem Bio-Bewusstsein. Ein authentischer Stadtteilmarkt mit persönlicher Atmosphäre und hochwertigen Produkten.",
      phone: "+49 711 45678901",
      email: "info@wilhelmsplatz-markt.de",
      website: "www.wilhelmsplatz-cannstatt.de",
      specialties: ["Regionale Erzeuger", "Bio-Sortiment", "Schwäbische Spezialitäten", "Backwaren", "Blumen"],
      facilities: ["Stadtteil-Charakter", "Stammkundschaft"],
      transport: "S-Bahn: Cannstatt (S1-S3), Bus 52, 55"
    },
    {
      id: "29",
      name: "Marktplatz Cannstatt",
      address: "Marktplatz Cannstatt",
      city: "Stuttgart",
      postalCode: "70372",
      openingHours: "Dienstag, Donnerstag, Samstag",
      features: ["Stadtteilmarkt"],
      isOpen: false,
      description: "Der traditionelle Marktplatz Cannstatt ist das Herz des historischen Stadtteils. Mit seiner langen Geschichte und dem vielfältigen Angebot ist er ein wichtiger sozialer und wirtschaftlicher Mittelpunkt der Gemeinde.",
      phone: "+49 711 56789012",
      email: "info@marktplatz-cannstatt.de",
      website: "www.marktplatz-cannstatt.de",
      specialties: ["Traditionelle Marktwaren", "Regionale Produkte", "Backwaren", "Fleisch", "Gemüse"],
      facilities: ["Historischer Marktplatz", "Tradition"],
      transport: "S-Bahn: Cannstatt (S1-S3), U-Bahn: Cannstatter Wasen"
    },
    // Leipzig
    {
      id: "30",
      name: "Diezellshofer",
      address: "Diezellshofer",
      city: "Leipzig",
      postalCode: "04317",
      openingHours: "Donnerstag 8-13",
      features: ["Stadtteilmarkt"],
      isOpen: true,
      description: "Der Stadtteilmarkt in Diezellshofer versorgt die Anwohner mit frischen Produkten und alltäglichen Marktartikeln. Ein bodenständiger Markt mit fairen Preisen und persönlicher Betreuung.",
      phone: "+49 341 12345678",
      email: "info@diezellshofer-markt.de",
      website: "www.diezellshofer-leipzig.de",
      specialties: ["Frisches Gemüse", "Obst", "Backwaren", "Fleischwaren", "Haushaltsartikel"],
      facilities: ["Stadtteil-Versorgung", "Fahrradständer"],
      transport: "Tram: Linie 7, Bus 70, 80"
    },
    {
      id: "31",
      name: "Markgrafenstraße",
      address: "Markgrafenstraße",
      city: "Leipzig",
      postalCode: "04109",
      openingHours: "Mittwoch, Samstag 8-16",
      features: ["Regional", "Bio"],
      isOpen: false,
      description: "Der Wochenmarkt in der Markgrafenstraße im Zentrum Leipzigs bietet eine gute Mischung aus regionalen Erzeugnissen und Bio-Produkten. Mit seiner zentralen Lage ist er ein beliebter Anlaufpunkt für Anwohner und Besucher.",
      phone: "+49 341 23456789",
      email: "info@markgrafenstrasse-markt.de",
      website: "www.markgrafenstrasse-leipzig.de",
      specialties: ["Regionale Erzeuger", "Bio-Produkte", "Sächsische Spezialitäten", "Backwaren", "Käse"],
      facilities: ["Zentrale Lage", "Stadtnahe"],
      transport: "Tram: Goerdelerring (Linien 4, 6, 8, 10, 11), S-Bahn: Leipzig City Tunnel"
    },
    {
      id: "32",
      name: "Inh Zentrum Grünau",
      address: "Zentrum Grünau",
      city: "Leipzig",
      postalCode: "04207",
      openingHours: "Donnerstag 8-16",
      features: ["Zentral", "Regional"],
      isOpen: true,
      description: "Der zentrale Markt in Leipzig-Grünau ist ein wichtiger Versorgungspunkt für den Stadtteil. Mit seinem regionalen Fokus und der guten Erreichbarkeit dient er als sozialer Mittelpunkt der Gemeinde.",
      phone: "+49 341 34567890",
      email: "info@zentrum-gruenau-markt.de",
      website: "www.zentrum-gruenau.de",
      specialties: ["Regionale Erzeugnisse", "Frische Produkte", "Backwaren", "Fleisch", "Gemüse"],
      facilities: ["Zentrale Lage", "Stadtteil-Zentrum"],
      transport: "Tram: Allee-Center (Linie 1), S-Bahn: Leipzig-Grünau"
    },
    {
      id: "33",
      name: "Wilhelm Külz-Ring",
      address: "Wilhelm Külz-Ring",
      city: "Leipzig",
      postalCode: "04109",
      openingHours: "Mittwoch, Samstag 8-16",
      features: ["Regional", "Bio"],
      isOpen: false,
      description: "Der Markt am Wilhelm Külz-Ring im Leipziger Zentrum vereint regionale Tradition mit modernem Bio-Bewusstsein. Ein urbaner Markt mit vielfältigem Angebot und entspannter Atmosphäre.",
      phone: "+49 341 45678901",
      email: "info@wilhelm-kuelz-ring-markt.de",
      website: "www.wilhelm-kuelz-ring.de",
      specialties: ["Bio-Sortiment", "Regionale Produkte", "Naturkost", "Vollkorn", "Käse"],
      facilities: ["Zentrumsnahe", "Bio-Fokus"],
      transport: "Tram: Wilhelm-Külz-Platz (Linien 4, 6, 8, 10, 11)"
    },
    // Essen
    {
      id: "34",
      name: "Rüttenscheid",
      address: "Rüttenscheid",
      city: "Essen",
      postalCode: "45130",
      openingHours: "Dienstag, Donnerstag, Samstag",
      features: ["Vielfalt", "Bio"],
      isOpen: true,
      description: "Der Wochenmarkt in Rüttenscheid ist bekannt für seine große Vielfalt und das hochwertige Bio-Sortiment. Als einer der beliebtesten Märkte in Essen zieht er Kunden aus der ganzen Stadt an.",
      phone: "+49 201 12345678",
      email: "info@ruettenscheid-markt.de",
      website: "www.ruettenscheid-essen.de",
      specialties: ["Bio-Produkte", "Internationale Küche", "Feinkost", "Backwaren", "Blumen"],
      facilities: ["Große Vielfalt", "Bio-Fokus"],
      transport: "U-Bahn: Rüttenscheider Stern (U11), Bus 146, 166"
    },
    {
      id: "35",
      name: "Altenessen",
      address: "Altenessen",
      city: "Essen",
      postalCode: "45326",
      openingHours: "Mittwoch, Donnerstag, Samstag",
      features: ["Zentral", "Regional"],
      isOpen: false,
      description: "Der zentrale Stadtteilmarkt in Altenessen versorgt die nördlichen Stadtteile Essens mit regionalen Produkten und alltäglichen Marktartikeln. Ein authentischer Markt mit starkem Bezug zur lokalen Gemeinde.",
      phone: "+49 201 23456789",
      email: "info@altenessen-markt.de",
      website: "www.altenessen-essen.de",
      specialties: ["Regionale Erzeugnisse", "Frische Produkte", "Fleischwaren", "Gemüse", "Backwaren"],
      facilities: ["Stadtteil-Zentrum", "Regional"],
      transport: "Tram: Altenessen Bf (Linien 101, 106), S-Bahn: Essen-Altenessen"
    },
    {
      id: "36",
      name: "Altenessen Markt",
      address: "Altenessen Markt",
      city: "Essen",
      postalCode: "45326",
      openingHours: "Mittwoch, Donnerstag, Samstag",
      features: ["Stadtteilmarkt"],
      isOpen: true,
      description: "Der traditionelle Stadtteilmarkt in Altenessen ist ein wichtiger sozialer und wirtschaftlicher Mittelpunkt. Mit seinem authentischen Charakter und den fairen Preisen ist er bei den Anwohnern sehr beliebt.",
      phone: "+49 201 34567890",
      email: "info@altenessen-stadtteilmarkt.de",
      website: "www.altenessen-stadtteilmarkt.de",
      specialties: ["Traditionelle Marktwaren", "Lokale Erzeuger", "Haushaltsartikel", "Textilien", "Backwaren"],
      facilities: ["Authentisch", "Gemeinschaftlich"],
      transport: "Tram: Altenessen Markt (Linien 101, 106), Bus 145"
    },
    // Dortmund
    {
      id: "37",
      name: "Markthof",
      address: "Markthof",
      city: "Dortmund",
      postalCode: "44135",
      openingHours: "Mittwoch, Freitag 7-13",
      features: ["Regional"],
      isOpen: false,
      description: "Der Markthof im Zentrum Dortmunds ist ein traditioneller Wochenmarkt mit Fokus auf regionale Erzeugnisse. Mit seiner langen Geschichte und dem authentischen Charakter ist er ein wichtiger Teil der Dortmunder Marktkultur.",
      phone: "+49 231 12345678",
      email: "info@markthof-dortmund.de",
      website: "www.markthof-dortmund.de",
      specialties: ["Regionale Erzeuger", "Westfälische Spezialitäten", "Fleischwaren", "Backwaren", "Gemüse"],
      facilities: ["Zentrale Lage", "Tradition"],
      transport: "U-Bahn: Stadtgarten (U41, U45, U49), Bus 440, 460"
    },
    {
      id: "38",
      name: "Mengede",
      address: "Mengede",
      city: "Dortmund",
      postalCode: "44359",
      openingHours: "Mittwoch, Freitag 7-13",
      features: ["Regional"],
      isOpen: true,
      description: "Der Stadtteilmarkt in Mengede versorgt den nördlichen Teil Dortmunds mit regionalen Produkten. Ein bodenständiger Markt mit persönlicher Atmosphäre und direktem Kontakt zu den Erzeugern.",
      phone: "+49 231 23456789",
      email: "info@mengede-markt.de",
      website: "www.mengede-dortmund.de",
      specialties: ["Regionale Erzeuger", "Frische Produkte", "Fleisch", "Gemüse", "Backwaren"],
      facilities: ["Stadtteil-Versorgung", "Direktvermarkter"],
      transport: "S-Bahn: Mengede (S2), Bus 462, 463"
    },
    {
      id: "39",
      name: "Mallinkckrodt-straße",
      address: "Mallinkckrodt-straße",
      city: "Dortmund",
      postalCode: "44147",
      openingHours: "Dienstag, Freitag 8-13",
      features: ["Regional"],
      isOpen: false,
      description: "Der Wochenmarkt in der Mallinkckrodt-straße ist ein kleiner aber feiner Stadtteilmarkt mit regionalem Charakter. Hier finden Sie frische Produkte aus der Region in persönlicher und entspannter Atmosphäre.",
      phone: "+49 231 34567890",
      email: "info@mallinkckrodt-markt.de",
      website: "www.mallinkckrodt-dortmund.de",
      specialties: ["Regionale Erzeugnisse", "Frisches Gemüse", "Backwaren", "Fleisch", "Blumen"],
      facilities: ["Klein aber fein", "Regional"],
      transport: "Bus 440, 447, U-Bahn: Stadtgarten"
    },
    {
      id: "40",
      name: "Hausmarkt",
      address: "Hausmarkt",
      city: "Dortmund",
      postalCode: "44139",
      openingHours: "Mittwoch, Samstag 7-13",
      features: ["Regional"],
      isOpen: true,
      description: "Der Hausmarkt in Dortmund ist ein traditioneller Stadtteilmarkt mit starkem regionalen Bezug. Mit seinem authentischen Charakter und der guten Auswahl an regionalen Produkten ist er bei den Anwohnern sehr geschätzt.",
      phone: "+49 231 45678901",
      email: "info@hausmarkt-dortmund.de",
      website: "www.hausmarkt-dortmund.de",
      specialties: ["Regionale Tradition", "Westfälische Produkte", "Fleischwaren", "Gemüse", "Backwaren"],
      facilities: ["Traditionell", "Authentisch"],
      transport: "U-Bahn: Reinoldikirche (U41, U45), Bus 440"
    },
    // Dresden
    {
      id: "41",
      name: "Fürstenhof",
      address: "Fürstenhof",
      city: "Dresden",
      postalCode: "01307",
      openingHours: "Dienstag 8-18, Freitag",
      features: ["Biothek", "Bio"],
      isOpen: false,
      description: "Der Biomarkt am Fürstenhof in Dresden-Strehlen ist ein Spezialist für ökologische Lebensmittel und nachhaltige Produkte. Mit seinem konsequent ökologischen Sortiment und der kompetenten Beratung ist er ein wichtiger Anlaufpunkt für umweltbewusste Einkäufer.",
      phone: "+49 351 12345678",
      email: "info@fuerstenhof-biomarkt.de",
      website: "www.fuerstenhof-dresden.de",
      specialties: ["Zertifizierte Bio-Produkte", "Demeter", "Naturkost", "Bio-Fleisch", "Vollkorn", "Naturkosmetik"],
      facilities: ["Bio-Spezialist", "Beratung"],
      transport: "Tram: Strehlen (Linien 9, 13), Bus 66, 85"
    },
    {
      id: "42",
      name: "Bautzner",
      address: "Bautzner",
      city: "Dresden",
      postalCode: "01099",
      openingHours: "Dienstag, Freitag 8-18, Samstag",
      features: ["Regional", "Bio"],
      isOpen: true,
      description: "Der Wochenmarkt an der Bautzner Straße in der Dresdner Neustadt vereint regionale Tradition mit modernem Bio-Bewusstsein. Mit seinen langen Öffnungszeiten und der vielfältigen Auswahl ist er ein beliebter Treffpunkt.",
      phone: "+49 351 23456789",
      email: "info@bautzner-markt.de",
      website: "www.bautzner-dresden.de",
      specialties: ["Regionale Erzeuger", "Bio-Sortiment", "Sächsische Spezialitäten", "Backwaren", "Käse"],
      facilities: ["Lange Öffnungszeiten", "Neustadt-Flair"],
      transport: "Tram: Bautzner/Rothenburger Str. (Linien 11, 13), Bus 64"
    },
    {
      id: "43",
      name: "Albertstadt",
      address: "Albertstadt",
      city: "Dresden",
      postalCode: "01099",
      openingHours: "Donnerstag 8-13",
      features: ["Stadtteilmarkt"],
      isOpen: false,
      description: "Der kleine Stadtteilmarkt in der Albertstadt versorgt das historische Viertel mit frischen Produkten und alltäglichen Marktartikeln. Ein gemütlicher Markt mit persönlicher Atmosphäre und direktem Kontakt zwischen Händlern und Kunden.",
      phone: "+49 351 34567890",
      email: "info@albertstadt-markt.de",
      website: "www.albertstadt-dresden.de",
      specialties: ["Stadtteil-Versorgung", "Frische Produkte", "Backwaren", "Gemüse", "Blumen"],
      facilities: ["Klein und persönlich", "Historisches Viertel"],
      transport: "Tram: Albertplatz (Linien 3, 6, 7, 8, 13), Bus 64"
    },
    // Düsseldorf
    {
      id: "44",
      name: "Carlsplatz",
      address: "Carlsplatz",
      city: "Düsseldorf",
      postalCode: "40213",
      openingHours: "Montag-Freitag 8:00-18:00, Samstag 8:00-16:00",
      features: ["Traditional", "Regional", "Bio"],
      isOpen: true,
      description: "Der Carlsplatz ist Düsseldorfs ältester und bekanntester Markt im Herzen der Altstadt. Seit über 700 Jahren werden hier frische Lebensmittel und regionale Spezialitäten angeboten. Mit seiner zentralen Lage und dem vielfältigen Angebot ist er ein beliebter Treffpunkt für Einheimische und Touristen.",
      phone: "+49 211 12345678",
      email: "info@carlsplatz-duesseldorf.de",
      website: "www.carlsplatz.de",
      specialties: ["Rheinische Spezialitäten", "Frisches Gemüse", "Backwaren", "Fleischwaren", "Käse", "Blumen"],
      facilities: ["Historischer Marktplatz", "Zentrale Lage", "Toiletten", "Gastronomie"],
      transport: "U-Bahn: Heinrich-Heine-Allee (U70-U79), Straßenbahn 704, 709"
    },
    {
      id: "45",
      name: "Rheinischer Bauernmarkt (Pempelfort)",
      address: "Pempelforter Straße",
      city: "Düsseldorf",
      postalCode: "40211",
      openingHours: "Mittwoch 8:30-13:00, Samstag 8:30-13:30",
      features: ["Bauernmarkt", "Regional"],
      isOpen: false,
      description: "Der Rheinische Bauernmarkt in Pempelfort ist ein authentischer Bauernmarkt, der regionale Erzeuger und deren frische Produkte direkt aus der Umgebung präsentiert. Mit seinem Fokus auf Direktvermarktung bietet er höchste Qualität und Frische.",
      phone: "+49 211 23456789",
      email: "info@bauernmarkt-pempelfort.de",
      website: "www.rheinischer-bauernmarkt.de",
      specialties: ["Direktvermarkter", "Regionale Erzeugnisse", "Saisonales Gemüse", "Obst", "Milchprodukte", "Fleisch vom Bauernhof"],
      facilities: ["Bauernhof-Direktverkauf", "Regionale Erzeuger", "Saisonale Produkte"],
      transport: "U-Bahn: Pempelforter Straße (U78, U79), Bus 722, 832"
    },
    {
      id: "46",
      name: "Hermannplatz (Fingern)",
      address: "Hermannplatz",
      city: "Düsseldorf",
      postalCode: "40233",
      openingHours: "Samstag 7:00-13:00",
      features: ["Stadtteilmarkt"],
      isOpen: true,
      description: "Der Stadtteilmarkt am Hermannplatz in Düsseldorf-Flingern versorgt den beliebten Stadtteil mit frischen Produkten und alltäglichen Marktartikeln. Ein lebendiger Markt mit nachbarschaftlicher Atmosphäre im Herzen von Flingern.",
      phone: "+49 211 34567890",
      email: "info@hermannplatz-markt.de",
      website: "www.hermannplatz-flingern.de",
      specialties: ["Stadtteil-Versorgung", "Frische Lebensmittel", "Backwaren", "Obst und Gemüse", "Blumen"],
      facilities: ["Nachbarschaftsmarkt", "Flingern-Atmosphäre", "Wochenendmarkt"],
      transport: "S-Bahn: Düsseldorf-Flingern (S1, S6, S11, S28), U-Bahn: Flingern (U70-U77)"
    },
    {
      id: "47",
      name: "Friedensplätzen (Unterbilk)",
      address: "Friedensplätzen",
      city: "Düsseldorf",
      postalCode: "40219",
      openingHours: "Dienstag 8:00-13:00, Freitag 9:00-17:00",
      features: ["Bio", "Regional"],
      isOpen: false,
      description: "Der Markt am Friedensplatz in Unterbilk ist ein Spezialist für Bio- und regionale Produkte. Mit seinem bewusst nachhaltigen Sortiment und der entspannten Atmosphäre zieht er umweltbewusste Kunden aus ganz Düsseldorf an.",
      phone: "+49 211 45678901",
      email: "info@friedensplatz-markt.de",
      website: "www.friedensplatz-unterbilk.de",
      specialties: ["Bio-Produkte", "Regionale Erzeugnisse", "Naturkost", "Ökologische Lebensmittel", "Vollkornbäckerei"],
      facilities: ["Bio-Schwerpunkt", "Nachhaltige Produkte", "Umweltbewusst"],
      transport: "U-Bahn: Friedrichstadt (U70-U74, U76-U79), Straßenbahn 701, 705"
    },
    {
      id: "48",
      name: "Marktplatz (Benrath)",
      address: "Benrather Marktplatz",
      city: "Düsseldorf",
      postalCode: "40597",
      openingHours: "Montag-Freitag 8:00-18:00, Samstag 8:00-14:00",
      features: ["Traditional", "Regional"],
      isOpen: true,
      description: "Der traditionelle Markt am Benrather Marktplatz ist das Herzstück des südlichen Düsseldorfer Stadtteils. Mit seinen langen Öffnungszeiten und dem umfangreichen Angebot versorgt er die Anwohner mit allem, was das tägliche Leben braucht.",
      phone: "+49 211 56789012",
      email: "info@marktplatz-benrath.de",
      website: "www.benrather-markt.de",
      specialties: ["Traditioneller Markt", "Vollsortiment", "Regionale Produkte", "Fleischwaren", "Backwaren", "Haushaltsartikel"],
      facilities: ["Lange Öffnungszeiten", "Vollsortiment", "Stadtteilzentrum", "Parkplätze"],
      transport: "S-Bahn: Benrath (S6, S68), U-Bahn: Benrath (U71, U73, U83), Bus 788, 789"
    },
    {
      id: "49",
      name: "Neusser Tor (Gerresheim)",
      address: "Neusser Tor",
      city: "Düsseldorf",
      postalCode: "40625",
      openingHours: "Dienstag und Donnerstag 8:00-17:00, Samstag 8:00-14:00",
      features: ["Stadtteilmarkt"],
      isOpen: false,
      description: "Der Stadtteilmarkt am Neusser Tor in Gerresheim ist ein wichtiger Versorgungspunkt für den östlichen Stadtteil. Mit seinem vielfältigen Angebot und den regelmäßigen Markttagen bietet er eine zuverlässige Einkaufsmöglichkeit.",
      phone: "+49 211 67890123",
      email: "info@neusser-tor-markt.de",
      website: "www.gerresheim-markt.de",
      specialties: ["Stadtteil-Versorgung", "Regelmäßige Markttage", "Frische Lebensmittel", "Backwaren", "Gemüse"],
      facilities: ["Mehrere Markttage", "Gerresheim-Versorgung", "Regelmäßig"],
      transport: "U-Bahn: Gerresheim (U71, U73, U83), S-Bahn: Düsseldorf-Gerresheim (S8, S68)"
    },
    {
      id: "50",
      name: "Marktplatz (Kaiserswerth)",
      address: "Kaiserswerther Marktplatz",
      city: "Düsseldorf",
      postalCode: "40489",
      openingHours: "Mittwoch und Samstag 8:00-14:00",
      features: ["Historic", "Regional"],
      isOpen: true,
      description: "Der historische Markt am Kaiserswerther Marktplatz vereint Geschichte und Tradition. In der malerischen Altstadt von Kaiserswerth gelegen, bietet er regionale Produkte in einzigartigem historischen Ambiente.",
      phone: "+49 211 78901234",
      email: "info@kaiserswerth-markt.de",
      website: "www.kaiserswerther-markt.de",
      specialties: ["Historisches Ambiente", "Regionale Tradition", "Altstadt-Flair", "Handwerk", "Lokale Erzeugnisse"],
      facilities: ["Historischer Marktplatz", "Altstadt", "Rhein-Nähe", "Traditionell"],
      transport: "U-Bahn: Kaiserswerth (U79), Bus 760, 896"
    },
    {
      id: "51",
      name: "Barbarossaplatz (Oberkassel)",
      address: "Barbarossaplatz",
      city: "Düsseldorf",
      postalCode: "40545",
      openingHours: "Dienstag und Freitag 7:00-18:00",
      features: ["Bio", "International"],
      isOpen: false,
      description: "Der Markt am Barbarossaplatz im noblen Stadtteil Oberkassel zeichnet sich durch sein hochwertiges Bio-Sortiment und internationale Spezialitäten aus. Mit seinen langen Öffnungszeiten und der gehobenen Auswahl spricht er anspruchsvolle Kunden an.",
      phone: "+49 211 89012345",
      email: "info@barbarossaplatz-markt.de",
      website: "www.oberkassel-markt.de",
      specialties: ["Bio-Qualität", "Internationale Küche", "Feinkost", "Delikatessen", "Gehobenes Sortiment"],
      facilities: ["Lange Öffnungszeiten", "Gehobenes Niveau", "Oberkassel-Qualität"],
      transport: "U-Bahn: Luegplatz (U70-U74, U76-U79), Bus 834, 835"
    },
    {
      id: "52",
      name: "Lessingplatz (Oberbilk)",
      address: "Lessingplatz",
      city: "Düsseldorf",
      postalCode: "40227",
      openingHours: "Donnerstag 8:00-13:30",
      features: ["Neighborhood"],
      isOpen: true,
      description: "Der Nachbarschaftsmarkt am Lessingplatz in Oberbilk ist ein gemütlicher Wochenmarkt, der den Stadtteil mit frischen Produkten versorgt. Mit seinem familiären Charakter und der persönlichen Atmosphäre ist er bei den Anwohnern sehr beliebt.",
      phone: "+49 211 90123456",
      email: "info@lessingplatz-markt.de",
      website: "www.oberbilk-markt.de",
      specialties: ["Nachbarschaftsmarkt", "Persönliche Atmosphäre", "Frische Produkte", "Lokale Händler"],
      facilities: ["Familiär", "Nachbarschaftlich", "Wöchentlich"],
      transport: "S-Bahn: Düsseldorf-Bilk (S1, S6, S11, S28), U-Bahn: Oberbilk (U71, U72, U73)"
    },
    {
      id: "53",
      name: "Gertrudisplatz Östetelbekhausen",
      address: "Gertrudisplatz",
      city: "Düsseldorf",
      postalCode: "40225",
      openingHours: "Dienstag und Freitag 8:00-18:00, Samstag 8:00-14:00",
      features: ["Regional", "Bio"],
      isOpen: false,
      description: "Der Markt am Gertrudisplatz kombiniert regionale Tradition mit modernem Bio-Bewusstsein. Mit mehreren Markttagen pro Woche und einem ausgewogenen Sortiment ist er ein zuverlässiger Versorger für den Stadtteil.",
      phone: "+49 211 01234567",
      email: "info@gertrudisplatz-markt.de",
      website: "www.gertrudisplatz.de",
      specialties: ["Regionale Bio-Produkte", "Mehrere Markttage", "Ausgewogenes Sortiment", "Stadtteil-Versorgung"],
      facilities: ["Regelmäßige Öffnung", "Bio-Regional", "Dreimal wöchentlich"],
      transport: "U-Bahn: Oberbilk (U71, U72, U73), Straßenbahn 701, 705, 706"
    },
    // Bremen
    {
      id: "54",
      name: "Wochenmarkt Findorff",
      address: "Neukirchstraße 45",
      city: "Bremen",
      postalCode: "28215",
      openingHours: "Dienstag, Donnerstag und Samstag 8:00-13:00, Samstag 8:00-14:00",
      features: ["Regional", "Bio"],
      isOpen: true,
      description: "Der Wochenmarkt in Findorff ist ein lebendiger Stadtteilmarkt, der für sein hochwertiges Angebot an regionalen und Bio-Produkten bekannt ist. Mit drei Markttagen pro Woche ist er ein wichtiger Anlaufpunkt für die Bewohner des beliebten Bremer Stadtteils.",
      phone: "+49 421 12345678",
      email: "info@findorff-markt.de",
      website: "www.findorff-wochenmarkt.de",
      specialties: ["Norddeutsche Spezialitäten", "Bio-Gemüse", "Regionale Erzeuger", "Fisch & Meeresfrüchte", "Backwaren"],
      facilities: ["Drei Markttage", "Stadtteilzentrum", "Bio-Schwerpunkt"],
      transport: "Straßenbahn: Findorff (Linie 2, 10), Bus 20, 21"
    },
    {
      id: "55",
      name: "Wochenmarkt Gröpelingen",
      address: "Bürgermeister-Ehlers-Platz, Pastorenweg",
      city: "Bremen",
      postalCode: "28239",
      openingHours: "Dienstag, Donnerstag, Samstag 8:00-13:00",
      features: ["Stadtteilmarkt"],
      isOpen: false,
      description: "Der Stadtteilmarkt in Gröpelingen versorgt einen der vielfältigsten Stadtteile Bremens mit frischen Lebensmitteln und alltäglichen Bedarfsartikeln. Mit seiner multikulturellen Atmosphäre spiegelt er die Internationalität des Stadtteils wider.",
      phone: "+49 421 23456789",
      email: "info@groepelingen-markt.de",
      website: "www.groepelingen-wochenmarkt.de",
      specialties: ["Internationale Küche", "Multikulturell", "Stadtteil-Versorgung", "Günstige Preise", "Vielfalt"],
      facilities: ["Multikulturell", "Drei Markttage", "Günstig"],
      transport: "Straßenbahn: Gröpelingen (Linie 2, 10), S-Bahn: Bremen-Oslebshausen"
    },
    {
      id: "56",
      name: "Wochenmarkt Osterholz-Scharmbeck",
      address: "Regine-Hildebrandt-Platz",
      city: "Bremen",
      postalCode: "28239",
      openingHours: "Mittwoch, Freitag 8:00-13:00",
      features: ["Regional"],
      isOpen: true,
      description: "Der Wochenmarkt in Osterholz-Scharmbeck ist ein traditioneller norddeutscher Markt mit starkem regionalen Bezug. Mit seinem authentischen Charakter und der guten Auswahl an lokalen Produkten ist er bei den Anwohnern sehr geschätzt.",
      phone: "+49 421 34567890",
      email: "info@osterholz-markt.de",
      website: "www.osterholz-wochenmarkt.de",
      specialties: ["Norddeutsche Tradition", "Regionale Erzeuger", "Fischspezialitäten", "Saisonales Gemüse"],
      facilities: ["Regional", "Zweimal wöchentlich", "Traditionell"],
      transport: "Straßenbahn: Osterholz (Linie 4), Bus 24, 25"
    },
    {
      id: "57",
      name: "Bauernmarkt Fangelm",
      address: "Fangelm",
      city: "Bremen",
      postalCode: "28195",
      openingHours: "Freitag 10:00-16:00",
      features: ["Bauernmarkt", "Bio"],
      isOpen: false,
      description: "Der Bauernmarkt in Fangelm ist ein Spezialist für Bio-Produkte und Direktvermarktung. Mit seinem Fokus auf ökologische Landwirtschaft und nachhaltiger Produktion bietet er höchste Qualität direkt vom Erzeuger.",
      phone: "+49 421 45678901",
      email: "info@bauernmarkt-fangelm.de",
      website: "www.fangelm-bauernmarkt.de",
      specialties: ["Bio-Direktvermarkter", "Ökologische Landwirtschaft", "Nachhaltige Produktion", "Demeter", "Bioland"],
      facilities: ["Bio-Zertifiziert", "Direktvermarkter", "Nachhaltig"],
      transport: "Straßenbahn: Domsheide (Linie 4, 6, 8), Bus 24, 25"
    },
    {
      id: "58",
      name: "Blumenmarkt Unser-Lieben-Frauen",
      address: "Unser Lieben Frauen Kirchhof",
      city: "Bremen",
      postalCode: "28195",
      openingHours: "Montag-Freitag 8:00-14:00, Samstag 8:00-15:00",
      features: ["Blumen", "Pflanzen"],
      isOpen: true,
      description: "Der Blumenmarkt am Unser-Lieben-Frauen-Kirchhof ist Bremens traditioneller Blumenmarkt im Herzen der Altstadt. Mit seinem vielfältigen Angebot an Schnittblumen, Topfpflanzen und Gartenzubehör ist er ein Paradies für Blumenliebhaber.",
      phone: "+49 421 56789012",
      email: "info@blumenmarkt-bremen.de",
      website: "www.blumenmarkt-altstadt.de",
      specialties: ["Schnittblumen", "Topfpflanzen", "Gartenzubehör", "Saisonale Dekoration", "Hochzeitsservice"],
      facilities: ["Blumen-Spezialist", "Altstadt-Lage", "Täglich geöffnet", "Kirchhof"],
      transport: "Straßenbahn: Domsheide (Linie 2, 3, 4, 6, 8, 10), Innenstadt"
    },
    {
      id: "59",
      name: "Wochenmarkt Domshof",
      address: "Domshof",
      city: "Bremen",
      postalCode: "28195",
      openingHours: "Montag-Freitag 8:00-14:00, Samstag 8:00-15:00",
      features: ["Historic", "Traditional"],
      isOpen: false,
      description: "Der traditionelle Wochenmarkt am Domshof ist einer der ältesten Märkte Bremens. In direkter Nachbarschaft zum berühmten Bremer Dom gelegen, bietet er eine einzigartige Kombination aus Geschichte, Tradition und frischen Produkten.",
      phone: "+49 421 67890123",
      email: "info@domshof-markt.de",
      website: "www.domshof-bremen.de",
      specialties: ["Bremer Tradition", "Historisches Ambiente", "Dom-Nähe", "Norddeutsche Küche", "Touristen-Attraktion"],
      facilities: ["Historisch", "Dom-Nähe", "Täglich", "Zentral"],
      transport: "Straßenbahn: Domsheide (alle Linien), Bremen Hauptbahnhof zu Fuß"
    },
    {
      id: "60",
      name: "Wochenmarkt Walle",
      address: "Wartburgstraße 12",
      city: "Bremen",
      postalCode: "28217",
      openingHours: "Dienstag, Donnerstag, Samstag 8:00-13:00",
      features: ["Stadtteilmarkt"],
      isOpen: true,
      description: "Der Stadtteilmarkt in Walle ist ein bodenständiger Nachbarschaftsmarkt, der die Bewohner mit frischen Produkten und alltäglichen Bedarfsartikeln versorgt. Mit seiner familiären Atmosphäre und den fairen Preisen ist er ein wichtiger Bestandteil des Stadtteils.",
      phone: "+49 421 78901234",
      email: "info@walle-markt.de",
      website: "www.walle-wochenmarkt.de",
      specialties: ["Nachbarschaftsmarkt", "Faire Preise", "Stadtteil-Versorgung", "Familiär", "Bodenständig"],
      facilities: ["Drei Markttage", "Nachbarschaftlich", "Günstig"],
      transport: "Straßenbahn: Walle (Linie 2, 10), Bus 20, 90"
    },
    {
      id: "61",
      name: "Wochenmarkt Horn-Lehe",
      address: "Ecke Robert-Bunsen-Straße/Wilhelm-Raabe-Straße",
      city: "Bremen",
      postalCode: "28359",
      openingHours: "Donnerstag, Samstag 8:00-13:00",
      features: ["Regional"],
      isOpen: false,
      description: "Der Wochenmarkt in Horn-Lehe ist ein gemütlicher Stadtteilmarkt am östlichen Stadtrand Bremens. Mit seinem Fokus auf regionale Produkte und der entspannten Atmosphäre bietet er eine Alternative zu den größeren Märkten der Innenstadt.",
      phone: "+49 421 89012345",
      email: "info@horn-lehe-markt.de",
      website: "www.horn-lehe-wochenmarkt.de",
      specialties: ["Regionale Erzeuger", "Entspannte Atmosphäre", "Stadtteil-Charakter", "Kleinerer Markt"],
      facilities: ["Zweimal wöchentlich", "Regional", "Ruhig"],
      transport: "Bus 31, 33, S-Bahn: Mahndorf"
    },
    {
      id: "62",
      name: "Wochenmarkt Steintor (Zegenmarkt)",
      address: "Vor dem Steintor 82",
      city: "Bremen",
      postalCode: "28203",
      openingHours: "Dienstag, Freitag 8:00-18:00, Samstag 8:00-14:00",
      features: ["Urban", "International"],
      isOpen: true,
      description: "Der urbane Wochenmarkt am Steintor, auch bekannt als Zegenmarkt, ist ein lebendiger Treffpunkt im multikulturellen Steintor-Viertel. Mit seinem internationalen Flair und den langen Öffnungszeiten spricht er eine vielfältige Kundschaft an.",
      phone: "+49 421 90123456",
      email: "info@steintor-markt.de",
      website: "www.zegenmarkt-bremen.de",
      specialties: ["Internationale Küche", "Multikulturell", "Urban", "Lange Öffnungszeiten", "Szene-Viertel"],
      facilities: ["International", "Drei Markttage", "Lange Öffnung", "Urban"],
      transport: "Straßenbahn: Steintor (Linie 2, 3, 10), Bus 24, 25"
    },
    {
      id: "63",
      name: "Wochenmarkt Blödelt",
      address: "Einkaufszentrum Blödelt, Max-Säume",
      city: "Bremen",
      postalCode: "28279",
      openingHours: "Freitag 8:00-13:00",
      features: ["Shopping Center"],
      isOpen: false,
      description: "Der Wochenmarkt im Einkaufszentrum Blödelt verbindet traditionellen Marktcharakter mit modernem Shopping-Komfort. Als einziger überdachter Markt in Bremen bietet er bei jedem Wetter optimale Einkaufsbedingungen.",
      phone: "+49 421 01234567",
      email: "info@bloedelt-markt.de",
      website: "www.bloedelt-wochenmarkt.de",
      specialties: ["Überdacht", "Shopping-Center", "Wetterunabhängig", "Modern", "Komfort"],
      facilities: ["Überdacht", "Einkaufszentrum", "Wetterschutz", "Parkplätze"],
      transport: "Bus 52, 53, 55, Parkplätze im Einkaufszentrum"
    },
    {
      id: "64",
      name: "Wochenmarkt Osterholz",
      address: "Schweizer Eck (Weser)",
      city: "Bremen",
      postalCode: "28325",
      openingHours: "Dienstag, Donnerstag, Samstag 8:00-13:00",
      features: ["Stadtteilmarkt"],
      isOpen: true,
      description: "Der Stadtteilmarkt in Osterholz am Schweizer Eck bietet eine malerische Lage in der Nähe der Weser. Mit seinem vielfältigen Angebot und der entspannten Atmosphäre ist er ein beliebter Treffpunkt für die Anwohner des Stadtteils.",
      phone: "+49 421 11234567",
      email: "info@osterholz-markt.de",
      website: "www.osterholz-wochenmarkt.de",
      specialties: ["Weser-Nähe", "Malerische Lage", "Stadtteil-Charakter", "Entspannt", "Vielfältig"],
      facilities: ["Drei Markttage", "Weser-Nähe", "Malerisch"],
      transport: "Straßenbahn: Osterholz (Linie 4), Bus 40, 41"
    },
    {
      id: "65",
      name: "Bauernmarkt Steglitzstraße",
      address: "Steglitzstraße 56",
      city: "Bremen",
      postalCode: "28209",
      openingHours: "Donnerstag 10:00-16:00",
      features: ["Bauernmarkt"],
      isOpen: false,
      description: "Der Bauernmarkt an der Steglitzstraße ist ein authentischer Direktvermarkter-Markt mit Fokus auf regionaler Landwirtschaft. Mit seinem nachmittäglichen Öffnungszeiten bietet er eine bequeme Alternative für Berufstätige.",
      phone: "+49 421 21234567",
      email: "info@steglitz-bauernmarkt.de",
      website: "www.steglitzstrasse-markt.de",
      specialties: ["Direktvermarkter", "Regionale Landwirtschaft", "Nachmittags geöffnet", "Authentisch"],
      facilities: ["Bauernhof-direkt", "Nachmittags", "Regional"],
      transport: "Straßenbahn: Schwachhauser Heerstraße (Linie 4, 6, 8), Bus 21, 22"
    },
    {
      id: "66",
      name: "Wochenmarkt Schwachhausen (Bürgerpark)",
      address: "Benquestraße",
      city: "Bremen",
      postalCode: "28209",
      openingHours: "Mittwoch 7:30-13:00, Samstag 7:30-13:30",
      features: ["Park Setting"],
      isOpen: true,
      description: "Der Wochenmarkt in Schwachhausen nahe dem Bürgerpark verbindet städtisches Marktleben mit der grünen Oase des Parks. Mit seinem gehobenen Angebot und der ruhigen Lage ist er bei qualitätsbewussten Kunden sehr beliebt.",
      phone: "+49 421 31234567",
      email: "info@schwachhausen-markt.de",
      website: "www.buergerpark-markt.de",
      specialties: ["Park-Nähe", "Gehobenes Angebot", "Grüne Lage", "Qualitätsbewusst", "Ruhig"],
      facilities: ["Bürgerpark-Nähe", "Grün", "Zweimal wöchentlich"],
      transport: "Straßenbahn: Schwachhauser Heerstraße (Linie 4, 6, 8), Bus 21"
    },
    {
      id: "67",
      name: "Wochenmarkt Schwachhausen (H.-J.-Weier-Allee)",
      address: "Ecke H.-J.-Weier-Allee/Hans Kausen",
      city: "Bremen",
      postalCode: "28211",
      openingHours: "Freitag und Samstag 8:00-13:00",
      features: ["Neighborhood"],
      isOpen: false,
      description: "Der Nachbarschaftsmarkt an der H.-J.-Weier-Allee ist ein kleiner, feiner Wochenmarkt im Herzen von Schwachhausen. Mit seinem persönlichen Charakter und der hohen Qualität der angebotenen Waren hat er sich eine treue Stammkundschaft aufgebaut.",
      phone: "+49 421 41234567",
      email: "info@weier-allee-markt.de",
      website: "www.schwachhausen-nachbarschaftsmarkt.de",
      specialties: ["Nachbarschaftsmarkt", "Persönlich", "Hohe Qualität", "Treue Kundschaft", "Klein und fein"],
      facilities: ["Nachbarschaftlich", "Zweimal wöchentlich", "Persönlich"],
      transport: "Straßenbahn: Schwachhauser Ring (Linie 4, 6), Bus 21, 22"
    },
    {
      id: "68",
      name: "Wochenmarkt Großer Kurfürst",
      address: "Eislebener Straße 66",
      city: "Bremen",
      postalCode: "28329",
      openingHours: "Freitag 8:00-13:00",
      features: ["Local"],
      isOpen: true,
      description: "Der lokale Wochenmarkt am Großen Kurfürst ist ein traditioneller Stadtteilmarkt, der die Bewohner mit frischen Produkten und alltäglichen Bedarfsartikeln versorgt. Mit seinem einmal wöchentlichen Rhythmus ist er ein fester Bestandteil des Stadtteils.",
      phone: "+49 421 51234567",
      email: "info@grosser-kurfuerst-markt.de",
      website: "www.kurfuerst-wochenmarkt.de",
      specialties: ["Stadtteil-Versorgung", "Traditionell", "Wöchentlich", "Lokal", "Bodenständig"],
      facilities: ["Einmal wöchentlich", "Stadtteil", "Traditionell"],
      transport: "Bus 42, 52, S-Bahn: Mahndorf"
    },
    {
      id: "69",
      name: "Wochenmarkt Vahr",
      address: "Berliner Freiheit",
      city: "Bremen",
      postalCode: "28327",
      openingHours: "Dienstag, Donnerstag, Samstag 8:00-13:30",
      features: ["Shopping Area"],
      isOpen: false,
      description: "Der Wochenmarkt in der Vahr am Berliner Freiheit ist ein moderner Stadtteilmarkt in einem der größten Wohngebiete Bremens. Mit seiner zentralen Lage und dem umfangreichen Angebot ist er ein wichtiger Versorgungspunkt für die Anwohner.",
      phone: "+49 421 61234567",
      email: "info@vahr-markt.de",
      website: "www.berliner-freiheit-markt.de",
      specialties: ["Großwohnsiedlung", "Zentrale Lage", "Umfangreiches Angebot", "Modern", "Versorgungszentrum"],
      facilities: ["Drei Markttage", "Shopping-Area", "Modern", "Zentral"],
      transport: "Straßenbahn: Berliner Freiheit (Linie 1, 8), Bus 30, 31"
    },
    {
      id: "70",
      name: "Wochenmarkt Borgfeld",
      address: "Platz zur Linde",
      city: "Bremen",
      postalCode: "28357",
      openingHours: "Mittwoch, Samstag 8:00-13:00",
      features: ["Village Setting"],
      isOpen: true,
      description: "Der Wochenmarkt in Borgfeld am malerischen Platz zur Linde verkörpert das dörfliche Flair des östlichsten Bremer Stadtteils. Mit seinem authentischen Charakter und der idyllischen Lage bietet er eine entspannte Alternative zu den urbanen Märkten.",
      phone: "+49 421 71234567",
      email: "info@borgfeld-markt.de",
      website: "www.platz-zur-linde-markt.de",
      specialties: ["Dörfliches Flair", "Idyllische Lage", "Authentisch", "Entspannt", "Malerisch"],
      facilities: ["Dörflich", "Zweimal wöchentlich", "Idyllisch"],
      transport: "Bus 33, 34, ländliche Lage"
    },
    {
      id: "71",
      name: "Wochenmarkt Arbergen",
      address: "Dorfplatz, Colehornstraße 36",
      city: "Bremen",
      postalCode: "28307",
      openingHours: "Freitag 8:00-13:00",
      features: ["Rural"],
      isOpen: false,
      description: "Der ländliche Wochenmarkt in Arbergen auf dem traditionellen Dorfplatz ist der kleinste und ländlichste Markt Bremens. Mit seinem authentischen Dorfcharakter und der persönlichen Atmosphäre bietet er ein einzigartiges Markterlebnis.",
      phone: "+49 421 81234567",
      email: "info@arbergen-markt.de",
      website: "www.dorfplatz-arbergen.de",
      specialties: ["Ländlich", "Dorfcharakter", "Authentisch", "Kleinster Markt", "Persönlich"],
      facilities: ["Ländlich", "Dorfplatz", "Einmal wöchentlich"],
      transport: "Bus 53, ländliche Lage, Parkplätze vorhanden"
    },
    {
      id: "72",
      name: "Wochenmarkt Hastedt",
      address: "Ecke Bei den drei Pfahlen, Hermine-Berthold-Straße",
      city: "Bremen",
      postalCode: "28199",
      openingHours: "Freitag 8:00-13:00",
      features: ["Community"],
      isOpen: true,
      description: "Der Gemeinschaftsmarkt in Hastedt ist ein lebendiger Stadtteilmarkt, der für seine starke Verbindung zur lokalen Gemeinschaft bekannt ist. Mit seinem einmal wöchentlichen Rhythmus und der freundlichen Atmosphäre ist er ein wichtiger sozialer Treffpunkt.",
      phone: "+49 421 91234567",
      email: "info@hastedt-markt.de",
      website: "www.hastedt-gemeinschaftsmarkt.de",
      specialties: ["Gemeinschaftsmarkt", "Sozialer Treffpunkt", "Lokale Verbindung", "Freundlich", "Stadtteil"],
      facilities: ["Gemeinschaftlich", "Einmal wöchentlich", "Sozialer Treffpunkt"],
      transport: "Straßenbahn: Westerstraße (Linie 2, 10), Bus 24, 25"
    },
    {
      id: "73",
      name: "Wochenmarkt Neustadt (Kornstraße)",
      address: "Ecke Am Sodenmatt/Berntalstr.",
      city: "Bremen",
      postalCode: "28199",
      openingHours: "Mittwoch, Samstag 8:00-13:00, Freitag 7:00-13:30",
      features: ["Traditional"],
      isOpen: false,
      description: "Der traditionelle Wochenmarkt in der Neustadt an der Kornstraße ist einer der etabliertesten Märkte Bremens. Mit seinen drei Markttagen und dem vielfältigen Angebot ist er ein wichtiger Versorgungspunkt für die südliche Innenstadt.",
      phone: "+49 421 02345678",
      email: "info@neustadt-kornstrasse.de",
      website: "www.kornstrasse-markt.de",
      specialties: ["Traditionell", "Etabliert", "Drei Markttage", "Vielfältig", "Neustadt-Versorgung"],
      facilities: ["Drei Markttage", "Traditionell", "Zentral"],
      transport: "Straßenbahn: Neustadt (Linie 1, 4), Bus 24, 26"
    },
    {
      id: "74",
      name: "Wochenmarkt Neustadt (Delmestraße)",
      address: "Ecke Delmestraße, Papedistraße",
      city: "Bremen",
      postalCode: "28199",
      openingHours: "Montag-Freitag 8:00-13:00, Samstag 8:00-14:00",
      features: ["Central"],
      isOpen: true,
      description: "Der zentrale Wochenmarkt in der Neustadt an der Delmestraße ist mit seinen täglichen Öffnungszeiten der zugänglichste Markt Bremens. Mit seinem umfangreichen Angebot und der zentralen Lage ist er ein wichtiger Anlaufpunkt für die gesamte südliche Innenstadt.",
      phone: "+49 421 12345670",
      email: "info@delmestrasse-markt.de",
      website: "www.neustadt-zentral-markt.de",
      specialties: ["Täglich geöffnet", "Zentral", "Umfangreiches Angebot", "Zugänglich", "Vollversorgung"],
      facilities: ["Täglich geöffnet", "Zentral", "Vollsortiment"],
      transport: "Straßenbahn: Neustadt (Linie 1, 4), Bus 24, 26, zentrale Lage"
    },
    {
      id: "75",
      name: "Wochenmarkt Neustadt (Gottfried-Menken-Straße)",
      address: "Gottfried-Menken-Straße",
      city: "Bremen",
      postalCode: "28201",
      openingHours: "Freitag und Samstag 8:00-13:00",
      features: ["Residential"],
      isOpen: false,
      description: "Der Wohngebietsmarkt an der Gottfried-Menken-Straße ist ein ruhiger Stadtteilmarkt, der die Bewohner der Neustadt mit frischen Produkten versorgt. Mit seinen zwei Markttagen am Wochenende ist er besonders für Berufstätige attraktiv.",
      phone: "+49 421 23456701",
      email: "info@gottfried-menken-markt.de",
      website: "www.menkenstrasse-markt.de",
      specialties: ["Wohngebiet", "Ruhig", "Wochenend-Markt", "Berufstätige", "Neustadt"],
      facilities: ["Wohngebiet", "Wochenende", "Ruhig"],
      transport: "Bus 26, 27, Wohngebiet-Lage"
    },
    {
      id: "76",
      name: "Wochenmarkt Habenhausen",
      address: "Anna-Seghers-Straße",
      city: "Bremen",
      postalCode: "28279",
      openingHours: "Donnerstag 15:00-18:00",
      features: ["Afternoon Market"],
      isOpen: true,
      description: "Der Nachmittagsmarkt in Habenhausen ist ein einzigartiger Wochenmarkt mit späten Öffnungszeiten. Als einziger Nachmittagsmarkt Bremens bietet er berufstätigen Menschen die Möglichkeit, nach der Arbeit frisch einzukaufen.",
      phone: "+49 421 34567012",
      email: "info@habenhausen-markt.de",
      website: "www.nachmittagsmarkt-bremen.de",
      specialties: ["Nachmittagsmarkt", "Einzigartige Zeiten", "Berufstätige", "Nach der Arbeit", "Innovativ"],
      facilities: ["Nachmittags", "Einmalig", "Berufstätige"],
      transport: "Bus 52, 55, Wohngebiet-Lage"
    },
    {
      id: "77",
      name: "Wochenmarkt Obervieland",
      address: "Kattenturner Marktplatz, Anna-Stegmann-Str.",
      city: "Bremen",
      postalCode: "28277",
      openingHours: "Mittwoch, Freitag 8:00-13:00",
      features: ["Suburban"],
      isOpen: false,
      description: "Der Vorstadtmarkt in Obervieland am Kattenturner Marktplatz versorgt die südlichen Stadtteile Bremens mit frischen Produkten. Mit seinem vorstädtischen Charakter und der entspannten Atmosphäre bietet er eine ruhige Alternative zu den innerstädtischen Märkten.",
      phone: "+49 421 45670123",
      email: "info@obervieland-markt.de",
      website: "www.kattenturner-markt.de",
      specialties: ["Vorstädtisch", "Süden Bremens", "Entspannt", "Ruhig", "Vorstadt-Charakter"],
      facilities: ["Vorstädtisch", "Zweimal wöchentlich", "Ruhig"],
      transport: "Bus 52, 53, 57, S-Bahn: Kattenturm"
    },
    {
      id: "78",
      name: "Wochenmarkt Woltmershausen",
      address: "Pusdorfer Marktplatz",
      city: "Bremen",
      postalCode: "28197",
      openingHours: "Dienstag, Donnerstag, Samstag 8:00-13:00",
      features: ["Harbor Area"],
      isOpen: true,
      description: "Der Hafengebietsmarkt in Woltmershausen am Pusdorfer Marktplatz verbindet maritime Atmosphäre mit traditionellem Marktcharakter. Mit seiner Nähe zum Hafen und den drei Markttagen ist er ein wichtiger Versorger für das Hafengebiet.",
      phone: "+49 421 56701234",
      email: "info@woltmershausen-markt.de",
      website: "www.pusdorfer-marktplatz.de",
      specialties: ["Hafengebiet", "Maritim", "Traditionell", "Hafen-Nähe", "Arbeitermarkt"],
      facilities: ["Hafengebiet", "Drei Markttage", "Maritim"],
      transport: "Straßenbahn: Woltmershausen (Linie 1), Bus 50, 51"
    },
    {
      id: "79",
      name: "Wochenmarkt Lesum",
      address: "Hindenburgstraße",
      city: "Bremen",
      postalCode: "28717",
      openingHours: "Freitag 8:00-13:00",
      features: ["North Bremen"],
      isOpen: false,
      description: "Der nördlichste Wochenmarkt Bremens in Lesum versorgt die Bewohner des ländlich geprägten Stadtteils mit frischen Produkten. Mit seinem einmal wöchentlichen Rhythmus und der ruhigen Lage bietet er eine entspannte Einkaufsatmosphäre.",
      phone: "+49 421 67012345",
      email: "info@lesum-markt.de",
      website: "www.lesum-wochenmarkt.de",
      specialties: ["Nördlichster Markt", "Ländlich geprägt", "Entspannt", "Ruhig", "Nord-Bremen"],
      facilities: ["Nord-Bremen", "Einmal wöchentlich", "Ländlich"],
      transport: "Bus 70, 71, S-Bahn: Lesum, ländliche Lage"
    },
    {
      id: "80",
      name: "Wochenmarkt Marßel",
      address: "Stockholmer Straße",
      city: "Bremen",
      postalCode: "28719",
      openingHours: "Freitag 8:00-13:00",
      features: ["Local Market"],
      isOpen: true,
      description: "Der lokale Markt in Marßel an der Stockholmer Straße ist ein kleiner, aber feiner Stadtteilmarkt im Norden Bremens. Mit seinem persönlichen Charakter und der Nähe zu den Anwohnern hat er sich eine treue Stammkundschaft aufgebaut.",
      phone: "+49 421 70123456",
      email: "info@marssel-markt.de",
      website: "www.stockholmer-markt.de",
      specialties: ["Klein und fein", "Persönlich", "Stammkundschaft", "Nord-Bremen", "Lokal"],
      facilities: ["Klein", "Einmal wöchentlich", "Persönlich"],
      transport: "Bus 70, 90, nördliche Lage"
    },
    {
      id: "81",
      name: "Wochenmarkt Vegesack",
      address: "Am Sedanplatz",
      city: "Bremen",
      postalCode: "28757",
      openingHours: "Mittwoch, Samstag 8:00-13:00, Samstag 8:00-13:30",
      features: ["Coastal", "Traditional"],
      isOpen: false,
      description: "Der traditionsreiche Wochenmarkt in Vegesack am Sedanplatz verbindet maritime Geschichte mit lebendiger Markttradition. Als nördlichster Stadtbezirk Bremens bietet Vegesack mit seinem Hafen und der Weser-Nähe eine einzigartige Marktkulisse.",
      phone: "+49 421 80123456",
      email: "info@vegesack-markt.de",
      website: "www.sedanplatz-markt.de",
      specialties: ["Traditionsreich", "Maritim", "Weser-Nähe", "Hafen", "Norddeutsch"],
      facilities: ["Küsten-Nähe", "Zweimal wöchentlich", "Traditionell", "Hafen"],
      transport: "S-Bahn: Vegesack (S1, S10), Bus 90, 91, 92, Hafen-Nähe"
    }
  ];

  return baseMarkets.find(market => market.id === id);
};

const MarketDetail = () => {
  const { id } = useParams<{ id: string }>();
  const market = getMarketDetails(id || "");

  if (!market) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Markt nicht gefunden</h1>
          <Link to="/markets">
            <Button>Zurück zu den Märkten</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
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

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link to="/markets">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Märkten
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-700 overflow-hidden">
        <img 
          src="/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png"
          alt="Frisches Obst und Gemüse am Wochenmarkt"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{market.name}</h1>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{market.address}, {market.postalCode} {market.city}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>Über den Markt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {market.description}
                </p>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle>Spezialitäten</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {market.specialties?.map((specialty, index) => (
                    <div key={index} className="bg-green-50 p-3 rounded-lg text-center">
                      <span className="text-sm font-medium text-green-700">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card>
              <CardHeader>
                <CardTitle>Ausstattung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {market.facilities?.map((facility, index) => (
                    <Badge key={index} variant="outline" className="text-green-700 border-green-200">
                      • {facility}
                    </Badge>
                  ))}
                  {market.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-green-700 border-green-200">
                      • {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Opening Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${market.isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-sm font-medium">
                      {market.isOpen ? 'Geöffnet' : 'Geschlossen'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {market.openingHours}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {market.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{market.phone}</span>
                  </div>
                )}
                {market.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{market.email}</span>
                  </div>
                )}
                {market.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{market.website}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Address */}
            <Card>
              <CardHeader>
                <CardTitle>Adresse</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">{market.address}</p>
                <p className="text-muted-foreground">
                  {market.postalCode} {market.city}
                </p>
              </CardContent>
            </Card>

            {/* Transport */}
            <Card>
              <CardHeader>
                <CardTitle>Anfahrt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Öffentliche Verkehrsmittel</p>
                  <p className="text-sm text-muted-foreground">
                    {market.transport}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetail;