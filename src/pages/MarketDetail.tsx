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
      name: "Isemarkt",
      address: "Isestraße, Hamburg",
      city: "Hamburg",
      postalCode: "20251",
      openingHours: "Dienstag und Freitag 08:30 - 14:00 Uhr",
      features: ["Größter Europas", "Regional", "Bio"],
      isOpen: true,
      description: "Einer von Deutschlands größten und schönsten Wochenmärkten unter der Hochbahnbrücke, mit rund 200 Ständen und vielfältigen kulinarischen Angeboten von Bio-Bürgern bis Kaiserfleischbraten für eine internationale Atmosphäre. Die direkte Nähe zur U-Bahn macht diesen Markt bei Blauen und Satzhaus sehr beliebt.",
      phone: "+49 40 12345678",
      email: "info@isemarkt.de",
      website: "www.isemarkt.de",
      specialties: ["Bio-Obst & Gemüse", "Feinkost", "Internationale Küche", "Blumen & Pflanzen"],
      facilities: ["U-Bahn-Anschluss", "Überdacht", "Toiletten"],
      transport: "U1 Isestraße, U3 Hoheluftbrücke"
    },
    {
      id: "2",
      name: "St. Pauli Fischmarkt",
      address: "Große Elbstraße 9, Hamburg",
      city: "Hamburg",
      postalCode: "22767",
      openingHours: "Sonntag 05:00 - 09:30 Uhr",
      features: ["Kultmarkt", "Fisch", "Live-Musik"],
      isOpen: false,
      description: "Weltberühmte Hamburger Institution am Fischmarkt, mit atmosphärischem Marktschreien und Großartigen Produkten von regional gefangenen Fisch bis zu Blumen und Saucen, Würste zur Live-Musik.",
      phone: "+49 40 12345679",
      email: "info@fischmarkt-hamburg.de",
      website: "www.hamburger-fischmarkt.de",
      specialties: ["Frischer Fisch", "Obst & Gemüse", "Blumen", "Bratwurst"],
      facilities: ["Live-Musik", "Fischauktionshalle", "Gastronomie"],
      transport: "S-Bahn Reeperbahn, Bus 112"
    },
    {
      id: "3",
      name: "Volksdorfer Wochenmarkt",
      address: "Kathyhrem/Halbertshöhe, Hamburg",
      city: "Hamburg",
      postalCode: "22359",
      openingHours: "Mittwoch und Samstag 08:00 - 13:00 Uhr",
      features: ["Regional", "Bio", "Gemüse"],
      isOpen: true,
      description: "Bekannt für eine große Auswahl an frischen Lebensmitteln und Imbissständen sowie rund 100 Marktständen.",
      phone: "+49 40 12345680",
      email: "info@volksdorfer-markt.de",
      website: "www.volksdorfer-wochenmarkt.de",
      specialties: ["Regionale Lebensmittel", "Bio-Produkte", "Imbiss", "Gemüse"],
      facilities: ["Parkplätze", "Imbissstände"],
      transport: "U1 Volksdorf"
    },
    {
      id: "4",
      name: "Winterhuder Wochenmarkt",
      address: "Quarré, Hamburg",
      city: "Hamburg",
      postalCode: "22303",
      openingHours: "Montag - Samstag 08:00 - 13:00 Uhr",
      features: ["Regional", "Täglicher Markt"],
      isOpen: true,
      description: "Bietet regionale und saisonale Produkte täglich geöffnet von Blumen und Stärkung direkt im Herzen der Marktgemeinden.",
      phone: "+49 40 12345681",
      email: "info@winterhuder-markt.de",
      website: "www.winterhuder-wochenmarkt.de",
      specialties: ["Regionale Produkte", "Tägliche Frische", "Blumen", "Backwaren"],
      facilities: ["Täglicher Betrieb", "Zentrale Lage"],
      transport: "U3 Sierichstraße, Bus 20, 25"
    },
    {
      id: "5",
      name: "St. Pauli Nachtmarkt",
      address: "Spielbudenplatz, Hamburg",
      city: "Hamburg",
      postalCode: "20359",
      openingHours: "Mittwoch 16:00 - 22:00 Uhr (März-Sep), 16:00 - 21:00 Uhr (Okt-Feb)",
      features: ["Nachtmarkt", "Streetfood", "After-Work"],
      isOpen: false,
      description: "Ungewöhnlicher Wochenmarkt mit späten Öffnungszeiten, zentral am Spielbudenplatz/Reeperbahn gelegen. Ideal zum Einkaufen frischer Produkte und als After-Work-Treffpunkt.",
      phone: "+49 40 12345682",
      email: "info@stpauli-nachtmarkt.de",
      website: "www.stpauli-nachtmarkt.de",
      specialties: ["After-Work-Shopping", "Streetfood", "Frische Produkte", "Abendatmosphäre"],
      facilities: ["Abendöffnung", "Zentrale Lage", "Gastronomie"],
      transport: "S-Bahn Reeperbahn, U3 St. Pauli"
    },
    {
      id: "6",
      name: "Viktualienmarkt",
      address: "Viktualienmarkt 3, 80331 München",
      city: "München",
      postalCode: "80331",
      openingHours: "Montag - Samstag 08:00 - 20:00 Uhr",
      features: ["Traditionsmarkt", "Feinkost", "Biergarten"],
      isOpen: true,
      description: "Zentraler Hotspot für Feinschmecker mit über 100 Marktständen und breitem Angebot. Hier kann man auch ein bayerisches Weißwurstfrühstück oder ein Glas frische Weißbier für 10 Euro genießen.",
      phone: "+49 89 12345683",
      email: "info@viktualienmarkt.de",
      website: "www.viktualienmarkt.de",
      specialties: ["Feinkost", "Bayerische Spezialitäten", "Biergarten", "100+ Stände"],
      facilities: ["Biergarten", "Gastronomie", "Zentrale Lage"],
      transport: "S-Bahn Marienplatz, U3/U6 Marienplatz"
    },
    {
      id: "7",
      name: "Bauernmarkt am Pinakothek der Moderne",
      address: "Barer Straße 40, 80333 München",
      city: "München",
      postalCode: "80333",
      openingHours: "Samstag 07:00 - 13:00 Uhr",
      features: ["Bio", "Regional", "Kunstumgebung"],
      isOpen: false,
      description: "Kleiner Markt in München mit Bio-Fokus, drenzt um samstags frische regionale Produkte sowie Blumen und andere regionale Produkte anbietet.",
      phone: "+49 89 12345684",
      email: "info@bauernmarkt-pinakothek.de",
      website: "www.bauernmarkt-pinakothek.de",
      specialties: ["Bio-Produkte", "Regionale Erzeugnisse", "Kunstumgebung", "Wochenendmarkt"],
      facilities: ["Kunstmuseen in der Nähe", "Bio-Fokus"],
      transport: "U2 Königsplatz, Tram 27"
    },
    {
      id: "8",
      name: "Wochenmarkt Maxhausen",
      address: "Weißenburger Platz, 81667 München",
      city: "München",
      postalCode: "81667",
      openingHours: "Dienstag 08:00 - 12:00 Uhr",
      features: ["Klassischer Markt", "Regional"],
      isOpen: true,
      description: "Klassischer Wochenmarkt mit Obst, Gemüse, Fisch und Fleisch, ergänzt durch südländische Feinkost und Textilwaren.",
      phone: "+49 89 12345685",
      email: "info@markt-maxhausen.de",
      website: "www.wochenmarkt-maxhausen.de",
      specialties: ["Obst & Gemüse", "Fisch & Fleisch", "Südländische Feinkost", "Textilien"],
      facilities: ["Klassisches Sortiment", "Wöchentlicher Betrieb"],
      transport: "S-Bahn Ostbahnhof, Tram 19"
    },
    {
      id: "9",
      name: "Elisabethmarkt",
      address: "Elisabethplatz, 80796 München",
      city: "München",
      postalCode: "80796",
      openingHours: "Montag - Freitag 09:00 - 19:00 Uhr, Samstag 07:00 - 15:00 Uhr",
      features: ["Täglich", "Regional", "Schwabing"],
      isOpen: true,
      description: "Einer der vier fast täglich geöffneten Märkte Münchens, bietet alles für den täglichen Bedarf, von Obst und Gemüse bis zu Schokolade und Blumen. Seit 2021 in Renovierung.",
      phone: "+49 89 12345686",
      email: "info@elisabethmarkt.de",
      website: "www.elisabethmarkt.de",
      specialties: ["Täglicher Bedarf", "Obst & Gemüse", "Schokolade", "Blumen"],
      facilities: ["Fast täglich geöffnet", "Renoviert 2021"],
      transport: "U3/U6 Münchner Freiheit, Bus 154"
    },
    {
      id: "10",
      name: "Bauernmarkt Lehel",
      address: "St. Anna-Platz 2, 80538 München",
      city: "München",
      postalCode: "80538",
      openingHours: "Donnerstag 10:30 - 18:00 Uhr",
      features: ["Bio", "Exklusiv", "Zentral"],
      isOpen: false,
      description: "Bietet eine breite Palette an Angeboten von Wochenmarkt mit zwei Ständen bis hin zu acht Ständen und regionale Produzenten. Auch in den Beitrag Bio-Gurken und Auswählen aus Wildkräutern und -früchten. Frische Blumen runden das Angebot ab und ausgwähle Küchen Wuann.",
      phone: "+49 89 12345687",
      email: "info@bauernmarkt-lehel.de",
      website: "www.bauernmarkt-lehel.de",
      specialties: ["Bio-Gurken", "Wildkräuter", "Regionale Produzenten", "Frische Blumen"],
      facilities: ["Zentrale Lage", "Exklusive Produkte"],
      transport: "U4/U5 Lehel, Tram 16"
    },
    {
      id: "11",
      name: "Carlsplatz",
      address: "Carlsplatz, 40213 Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40213",
      openingHours: "Montag - Freitag 08:00 - 18:00 Uhr, Samstag 08:00 - 16:00 Uhr",
      features: ["Marktgalerie", "Feinkost", "Zentral"],
      isOpen: true,
      description: "Dauerhafter Markt und kulinarisches Zentrum mit erlesenen Spezialitäten, frischem Obst & Gemüse, Backwaren, Metzgerei, exotischen Blumen und Kräutern. Bietet ein Vielfalt, die auch zweifache und lokale Kunden anzieht.",
      phone: "+49 211 12345688",
      email: "info@carlsplatz.de",
      website: "www.carlsplatz-duesseldorf.de",
      specialties: ["Erlesene Spezialitäten", "Frisches Obst & Gemüse", "Backwaren", "Exotische Blumen"],
      facilities: ["Dauermarkt", "Kulinarisches Zentrum", "Zentrale Lage"],
      transport: "U-Bahn Heinrich-Heine-Allee, Straßenbahn"
    },
    {
      id: "12",
      name: "Rheinischer Bauernmarkt (Pempelfort)",
      address: "Königsplatz, 40212 Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40212",
      openingHours: "Mittwoch 09:00 - 13:00 Uhr, Samstag 08:30 - 13:00 Uhr",
      features: ["Bio", "Regional", "Bauernmarkt"],
      isOpen: false,
      description: "Kleiner Bauernmarkt mit regionalen und saisonalen Produkten direkt vom Feld. Qualitäts- & Gemüse bis zu Fleisch. Größere Auswahl alle für die Auswahl an Wildkräutern und -frühen. Frische gährend.",
      phone: "+49 211 12345689",
      email: "info@rheinischer-bauernmarkt.de",
      website: "www.rheinischer-bauernmarkt.de",
      specialties: ["Regionale Produkte", "Saisonales Gemüse", "Wildkräuter", "Direktvermarkter"],
      facilities: ["Bauernmarkt", "Regionale Erzeuger"],
      transport: "U78/U79 Pempelforter Straße"
    },
    {
      id: "13",
      name: "Hermesplatz",
      address: "Hermesplatz, 40235 Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40235",
      openingHours: "Samstag 07:00 - 13:00 Uhr",
      features: ["Traditionell", "Regional"],
      isOpen: true,
      description: "Keine Angabe",
      phone: "+49 211 12345690",
      email: "info@hermesplatz-markt.de",
      website: "www.hermesplatz-markt.de",
      specialties: ["Traditionelle Produkte", "Wochenendmarkt"],
      facilities: ["Samstagsmarkt"],
      transport: "Straßenbahn Linie 701"
    },
    {
      id: "14",
      name: "Friedensplätchen (Unterbilk)",
      address: "Friedensplätchen, 40219 Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40219",
      openingHours: "Dienstag 08:00 - 13:00 Uhr, Freitag 09:00 - 17:00 Uhr",
      features: ["Nachbarschaftsmarkt", "Klein"],
      isOpen: true,
      description: "Kleine Markt in Düsseldorf mit über zwei mit Ansaugung sich regionale Bio-Produzenten an exauschen und heimischen Früchten wie regionale Bio-Produkte für alle, die frische Qualität schätzen.",
      phone: "+49 211 12345691",
      email: "info@friedensplaetchen-markt.de",
      website: "www.friedensplaetchen-markt.de",
      specialties: ["Bio-Produkte", "Regionale Erzeugnisse", "Heimische Früchte", "Nachbarschaftsmarkt"],
      facilities: ["Kleiner Markt", "Bio-Fokus"],
      transport: "U71/U72/U73 Bilk S"
    },
    {
      id: "15",
      name: "Lessingplatz (Oberbilk)",
      address: "Lessingplatz, 40227 Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40227",
      openingHours: "Donnerstag 08:00 - 13:30 Uhr",
      features: ["Stadtteilmarkt", "Regional"],
      isOpen: false,
      description: "Bauernmarkt, der Oberbilk mit regionalen Spezialitäten versorgt. Bietet hauptsächlich frisches, regionales Obst und Gemüse von lokalen Bauern. Seit elf Jahren ein beliebter Treffpunkt.",
      phone: "+49 211 12345692",
      email: "info@lessingplatz-markt.de",
      website: "www.lessingplatz-markt.de",
      specialties: ["Regionale Spezialitäten", "Frisches Obst & Gemüse", "Lokale Bauern", "Stadtteilmarkt"],
      facilities: ["11 Jahre Tradition", "Stadtteilcharakter"],
      transport: "U71/U72/U73 Oberbilk"
    },
    {
      id: "16",
      name: "Gertrudenplatz (Eller)",
      address: "Gertrudenplatz, 40229 Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40229",
      openingHours: "Dienstag - Freitag 09:00 - 18:00 Uhr, Samstag 08:00 - 13:00 Uhr",
      features: ["Traditioneller Stadtteilmarkt", "Regional"],
      isOpen: true,
      description: "Traditioneller Stadtteilmarkt im Süddten Düsseldorfs. Bietet eine breite Palette an erschen und heimischen Früchten wie regionale Bio-Produkte für alle, die frische Qualität suchen.",
      phone: "+49 211 12345693",
      email: "info@gertrudenplatz-markt.de",
      website: "www.gertrudenplatz-markt.de",
      specialties: ["Traditionelles Sortiment", "Heimische Früchte", "Bio-Produkte", "Stadtteilmarkt"],
      facilities: ["Traditionell", "Süden Düsseldorfs"],
      transport: "U83 Eller Mitte"
    },
    {
      id: "17",
      name: "Altertsener Markt",
      address: "Altertsener, Essen",
      city: "Essen",
      postalCode: "45326",
      openingHours: "Dienstag - Freitag 09:00 - 18:00 Uhr, Samstag 08:00 - 13:00 Uhr",
      features: ["Stadtteilmarkt"],
      isOpen: true,
      description: "Keine Angabe (Für Lebensmittel im Frischebereich und Blumen laut PDF Quelle in Schöneberg)",
      phone: "+49 201 12345694",
      email: "info@altenessen-markt.de",
      website: "www.altenessen-markt.de",
      specialties: ["Frische Lebensmittel", "Blumen", "Stadtteilmarkt"],
      facilities: ["Stadtteilcharakter"],
      transport: "U11 Altenessen Mitte"
    },
    {
      id: "18",
      name: "Barbarossaplatz (Stoppenberg)",
      address: "Barbarossaplatz, Stoppenberg, Essen",
      city: "Essen",
      postalCode: "45138",
      openingHours: "Mittwoch und Freitag 08:00 - 13:00 Uhr",
      features: ["Regional"],
      isOpen: false,
      description: "Keine Angabe",
      phone: "+49 201 12345695",
      email: "info@barbarossaplatz-markt.de",
      website: "www.barbarossaplatz-markt.de",
      specialties: ["Regionale Produkte"],
      facilities: ["Zweimal wöchentlich"],
      transport: "Straßenbahn 105"
    },
    {
      id: "19",
      name: "Olympia Flachsmarkt",
      address: "Marktkirche, Essen-Stadtmitte",
      city: "Essen",
      postalCode: "45127",
      openingHours: "Dienstag und Freitag 09:00 - 18:00 Uhr",
      features: ["Zentral", "Regional"],
      isOpen: true,
      description: "Keine Angabe (für Lebensmittel im Frischebereich und Blumen laut PDF Quelle in Schöneberg)",
      phone: "+49 201 12345696",
      email: "info@olympia-markt.de",
      website: "www.olympia-markt.de",
      specialties: ["Frische Lebensmittel", "Zentrale Lage"],
      facilities: ["Stadtmitte", "Zweimal wöchentlich"],
      transport: "U11/U17 Essen Hauptbahnhof"
    },
    {
      id: "20",
      name: "Dreiringplatz (Steele)",
      address: "Dreiringplatz, Essen-Steele",
      city: "Essen",
      postalCode: "45276",
      openingHours: "Dienstag, Donnerstag, Samstag 08:00 - 13:00 Uhr",
      features: ["Stadtteilmarkt"],
      isOpen: false,
      description: "Keine Angabe",
      phone: "+49 201 12345697",
      email: "info@dreiringplatz-markt.de",
      website: "www.dreiringplatz-markt.de",
      specialties: ["Stadtteilversorgung"],
      facilities: ["Dreimal wöchentlich"],
      transport: "S6 Essen-Steele"
    },
    {
      id: "21",
      name: "Ehrenzeller Platz (Altendorf)",
      address: "Ehrenzeller Platz, Altendorf, Essen",
      city: "Essen",
      postalCode: "45143",
      openingHours: "Mittwoch und Samstag 08:00 - 13:00 Uhr",
      features: ["Regional"],
      isOpen: true,
      description: "Keine Angabe",
      phone: "+49 201 12345698",
      email: "info@ehrenzeller-markt.de",
      website: "www.ehrenzeller-markt.de",
      specialties: ["Regionale Produkte"],
      facilities: ["Zweimal wöchentlich"],
      transport: "Straßenbahn 101"
    },
    {
      id: "22",
      name: "Markt in der Elberstraße (Bergerhausen)",
      address: "Elberstraße, Bergerhausen, Essen",
      city: "Essen",
      postalCode: "45359",
      openingHours: "Freitag 14:00 - 18:00 Uhr",
      features: ["Abendmarkt"],
      isOpen: false,
      description: "Keine Angabe",
      phone: "+49 201 12345699",
      email: "info@elberstrasse-markt.de",
      website: "www.elberstrasse-markt.de",
      specialties: ["Abendmarkt", "Feierabend-Shopping"],
      facilities: ["Nachmittags geöffnet"],
      transport: "Bus 145"
    },
    {
      id: "23",
      name: "Frinioper Markt",
      address: "Frintrop, Essen",
      city: "Essen",
      postalCode: "45359",
      openingHours: "Samstag 08:00 - 13:00 Uhr",
      features: ["Stadtteilmarkt"],
      isOpen: true,
      description: "Keine Angabe",
      phone: "+49 201 12345700",
      email: "info@frintrop-markt.de",
      website: "www.frintrop-markt.de",
      specialties: ["Wochenendmarkt"],
      facilities: ["Samstagsmarkt"],
      transport: "Straßenbahn 103"
    },
    {
      id: "24",
      name: "Frohnhauser Markt",
      address: "Frohnhausen, Essen",
      city: "Essen",
      postalCode: "45144",
      openingHours: "Dienstag, Donnerstag, Samstag 08:00 - 13:00 Uhr",
      features: ["Regional", "Bio-Waren"],
      isOpen: false,
      description: "Einer der größeren Märkte der Stadt mit einer großen Auswahl an saisonalem Obst und Gemüse, frischen Kräutern, Bio-Waren und Pilzarten.",
      phone: "+49 201 12345701",
      email: "info@frohnhausen-markt.de",
      website: "www.frohnhausen-markt.de",
      specialties: ["Saisonales Obst & Gemüse", "Frische Kräuter", "Bio-Waren", "Pilzarten"],
      facilities: ["Großer Markt", "Dreimal wöchentlich"],
      transport: "U17 Margarethenhöhe"
    },
    {
      id: "25",
      name: "Gerscheder-Scholten-Straße (Horst)",
      address: "Gerscheder-Scholten-Straße, Horst, Essen",
      city: "Essen",
      postalCode: "45899",
      openingHours: "Donnerstag 08:00 - 13:00 Uhr",
      features: ["Stadtteilmarkt"],
      isOpen: true,
      description: "Keine Angabe",
      phone: "+49 201 12345702",
      email: "info@horst-markt.de",
      website: "www.horst-markt.de",
      specialties: ["Stadtteilversorgung"],
      facilities: ["Wöchentlicher Betrieb"],
      transport: "Bus 183"
    },
    {
      id: "26",
      name: "Heisingen",
      address: "Heisinger Marktplatz, Heisingen, Essen",
      city: "Essen",
      postalCode: "45259",
      openingHours: "Freitag 14:00 - 18:30 Uhr",
      features: ["Abendmarkt"],
      isOpen: false,
      description: "Keine Angabe",
      phone: "+49 201 12345703",
      email: "info@heisingen-markt.de",
      website: "www.heisingen-markt.de",
      specialties: ["Abendmarkt", "Wochenendvorbereitung"],
      facilities: ["Freitagnachmittag"],
      transport: "S6 Essen-Kupferdreh"
    },
    {
      id: "27",
      name: "Holsterhausen",
      address: "Gemärken/Sagenverstäße, Holsterhausen",
      city: "Essen",
      postalCode: "45147",
      openingHours: "Donnerstag 12:00 - 18:30 Uhr",
      features: ["Nachmittagsmarkt"],
      isOpen: true,
      description: "Keine Angabe",
      phone: "+49 201 12345704",
      email: "info@holsterhausen-markt.de",
      website: "www.holsterhausen-markt.de",
      specialties: ["Nachmittagsmarkt"],
      facilities: ["Donnerstagnachmittag"],
      transport: "U17 Holsterhausen"
    },
    {
      id: "28",
      name: "Neuser Tor (Gerresheim)",
      address: "Neuser Tor, 40625 Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40625",
      openingHours: "Dienstag und Donnerstag 08:00 - 17:00 Uhr, Samstag 07:00 - 13:00 Uhr",
      features: ["Stadtteilmarkt", "Vielfalt"],
      isOpen: true,
      description: "Sam Gemütlicher Wochenmarkt mit sehr freundlichen Händlern. Bietet Obst, Gemüse und einen schönen Blumenstand mit ungewöhnlichen Sorten.",
      phone: "+49 211 12345705",
      email: "info@gerresheim-markt.de",
      website: "www.gerresheim-markt.de",
      specialties: ["Obst & Gemüse", "Ungewöhnliche Blumensorten", "Freundliche Händler"],
      facilities: ["Gemütliche Atmosphäre", "Dreimal wöchentlich"],
      transport: "U83 Gerresheim"
    },
    {
      id: "29",
      name: "Marktplatz (Kaiserswerth)",
      address: "Kaiserswerther Markt, 40489 Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40489",
      openingHours: "Mittwoch 08:00 - 14:00 Uhr",
      features: ["Historisch", "Regional"],
      isOpen: false,
      description: "Malerischer Markt in historischer Ambiente mit dörflichem Flair. Lokale Schätze und hohe Qualität von frischen Lebensmitteln und Blumen.",
      phone: "+49 211 12345706",
      email: "info@kaiserswerth-markt.de",
      website: "www.kaiserswerth-markt.de",
      specialties: ["Historisches Ambiente", "Dörfliches Flair", "Lokale Schätze", "Hohe Qualität"],
      facilities: ["Historischer Standort", "Wöchentlicher Betrieb"],
      transport: "U79 Kaiserswerth"
    },
    {
      id: "30",
      name: "Botscheplatz (Oberkassel)",
      address: "Botscheplatz, 40545 Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40545",
      openingHours: "Dienstag und Freitag 08:00 - 18:00 Uhr",
      features: ["Stadtteilmarkt", "Lebensmittel"],
      isOpen: true,
      description: "Lebendiger Markt für Anwohner. Bietet Gemüse, Obst & Gemüse, Fleisch und Blumen. Ideal für einen Einkaufsbummel und anschließendes Mittagessen in der Nähe.",
      phone: "+49 211 12345707",
      email: "info@oberkassel-markt.de",
      website: "www.oberkassel-markt.de",
      specialties: ["Gemüse & Obst", "Fleisch", "Blumen", "Anwohnermarkt"],
      facilities: ["Lebendige Atmosphäre", "Gastronomie in der Nähe"],
      transport: "U70/U74/U77 Luegplatz"
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