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