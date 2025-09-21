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
  phone: string;
  email: string;
  transport: string;
  highlights?: string[]; // Besondere Events und Highlights
  parking?: string; // Parkplatz-Informationen
  publicTransport?: string; // ÖPNV-Informationen
  entryPrice?: string; // Eintrittspreis oder "frei"
}

export const christmasMarkets: ChristmasMarket[] = [
[
  {
    "id": "1",
    "slug": "nuernberger-christkindlmaerkte",
    "name": "Nürnberger Christkindlmärkte",
    "city": "Nürnberg",
    "address": "Hauptmarkt, 90403 Nürnberg",
    "description": "Einer der berühmtesten Weihnachtsmärkte Deutschlands mit über 180 Ständen. Der Nürnberger Christkindlmarkt verzaubert jährlich über 2 Millionen Besucher mit seinem besonderen Flair, traditionellem Handwerk und kulinarischen Köstlichkeiten. Das berühmte Christkind eröffnet jeden Advent den Markt mit einem feierlichen Prolog.",
    "openingDates": "28.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 10-21 Uhr",
    "imageUrl": "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    "specialties": [
      "Lebkuchen",
      "Glühwein",
      "Rostbratwürste",
      "Handwerkskunst",
      "Christbaumschmuck"
    ],
    "website": "https://christkindlesmarkt.de",
    "phone": "+49 911 2336055",
    "email": "info@christkindlesmarkt.de",
    "transport": "U-Bahn: Linie U1 bis Lorenzkirche, S-Bahn: S1, S2, S3, S4 bis Hauptbahnhof",
    "highlights": [
      "Eröffnung durch das weltberühmte Christkind am 28.11.2025 um 17:30 Uhr",
      "Tägliche Auftritte des Christkinds auf dem Balkon der Hauptkirche um 17:30 Uhr",
      "Traditioneller Weihnachtsmarkt für Kinder mit Karussell und Kinderständen",
      "Lebkuchen-Werkstatt mit Live-Vorführungen täglich 14-18 Uhr",
      "Historische Handwerksvorführungen: Glasbläser, Zuckerbäcker, Spielzeugmacher"
    ],
    "entryPrice": "Eintritt frei",
    "publicTransport": "U-Bahn: U1 bis Lorenzkirche (3 Min. Fußweg), S-Bahn: S1, S2, S3, S4 bis Hauptbahnhof (8 Min. Fußweg)",
    "parking": "Parkhaus Hauptmarkt (200m), Parkhaus Katharinenhof (300m), Tiefgarage am Hauptbahnhof (800m). Alle Parkplätze kostenpflichtig (2-3€/Std). An Wochenenden sehr begrenzt verfügbar."
  },
  {
    "id": "2",
    "slug": "dresdner-striezelmarkt",
    "name": "Dresdner Striezelmarkt",
    "city": "Dresden",
    "address": "Altmarkt, 01067 Dresden",
    "description": "Deutschlands ältester Weihnachtsmarkt mit einer über 580-jährigen Tradition. Der Striezelmarkt ist berühmt für den original Dresdner Christstollen und bietet eine einzigartige Atmosphäre vor der Kulisse der historischen Altstadt. Highlight ist die größte erzgebirgische Stufenpyramide der Welt.",
    "openingDates": "26.11.2025 - 24.12.2025",
    "openingHours": "26.11: 16-21 Uhr, 27.11-23.12: 10-21 Uhr, 24.12: 10-14 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Dresdner Stollen",
      "Glühwein",
      "Erzgebirgische Volkskunst",
      "Pflaumentoffel",
      "Gebackene Muscheln"
    ],
    "website": "https://striezelmarkt.dresden.de",
    "phone": "+49 351 4914025",
    "email": "striezelmarkt@dresden.de",
    "transport": "S-Bahn: S1, S2, S3 bis Bahnhof Dresden-Mitte, Straßenbahn: Linien 1, 2, 4 bis Altmarkt",
    "highlights": [
      "Größte erzgebirgische Stufenpyramide der Welt (14,62 m hoch)",
      "Traditionelles Stollenfest am 2. Advent mit 4-Tonnen-Riesenstollen",
      "Tägliche Handwerksvorführungen: Töpfern, Glasbläserei, Holzschnitzerei",
      "Dresdner Christstollen-Museum mit historischen Exponaten",
      "Märchenstunde für Kinder jeden Samstag 15 Uhr"
    ],
    "entryPrice": "Eintritt frei",
    "publicTransport": "S-Bahn: S1, S2, S3 bis Dresden-Mitte (5 Min. Fußweg), Straßenbahn: 1, 2, 4 bis Altmarkt (direkt am Markt)",
    "parking": "Parkhaus Altmarkt-Galerie (200m), Q-Park Altstadt (400m). Kosten: 1,50-2€/Std. Begrenzte Kapazität, ÖPNV empfohlen."
  },
  {
    "id": "3",
    "slug": "koelner-weihnachtsmaerkte",
    "name": "Kölner Weihnachtsmärkte",
    "city": "Köln",
    "address": "Roncalliplatz/Neumarkt/Rudolfplatz, 50667 Köln",
    "description": "Köln verwandelt sich in der Adventszeit in ein wahres Weihnachtswunderland mit gleich mehreren stimmungsvollen Märkten. Der Weihnachtsmarkt am Dom, der Heinzels Winter Märchen und weitere Märkte bieten eine vielfältige Mischung aus Tradition und Moderne vor der imposanten Kulisse des Kölner Doms.",
    "openingDates": "24.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Feuerzangenbowle",
      "Reibekuchen",
      "Kölsch",
      "Kunsthandwerk",
      "Süßwaren"
    ],
    "website": "https://koeln.de/weihnachtsmaerkte",
    "phone": "+49 221 22123456",
    "email": "weihnachtsmarkt@koeln.de",
    "transport": "U-Bahn: Linien U5, U16, U18 bis Dom/Hbf, S-Bahn: S6, S11, S12, S13, S19 bis Köln Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "4",
    "slug": "muenchner-christkindlmarkt",
    "name": "Münchner Christkindlmarkt",
    "city": "München",
    "address": "Marienplatz, 80331 München",
    "description": "Der traditionelle Münchner Christkindlmarkt am Marienplatz ist einer der ältesten und schönsten Weihnachtsmärkte Deutschlands. Vor der malerischen Kulisse des Neuen Rathauses und der Frauenkirche bietet er eine einzigartige Atmosphäre. Mit über 140 Ständen lädt er zum Bummeln und Genießen ein.",
    "openingDates": "24.11.2025 - 24.12.2025",
    "openingHours": "Mo-Sa 10-21 Uhr, So 10-20 Uhr, 24.12. 10-14 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Gebrannte Mandeln",
      "Lebkuchenherzen",
      "Münchner Weißwurst",
      "Handwerk",
      "Christbaumschmuck"
    ],
    "website": "https://christkindlmarkt-muenchen.de",
    "phone": "+49 89 23300272",
    "email": "christkindlmarkt@muenchen.de",
    "transport": "U-Bahn/S-Bahn: Linien U3, U6, S1-S8 bis Marienplatz",
    "highlights": [
      "Tägliches Glockenspiel im Neuen Rathaus um 11, 12 und 17 Uhr (bis 21 Uhr in der Adventszeit)",
      "Münchner Christkind-Auftritte jeden Samstag um 17 Uhr auf dem Rathausbalkon",
      "Traditionelle Lebkuchen-Bäckerei mit Live-Vorführungen",
      "Sternsinger-Auftritte am 6. Januar",
      "Kinderprogramm mit Märchenerzählungen jeden Sonntag 15-16 Uhr"
    ],
    "entryPrice": "Eintritt frei",
    "publicTransport": "U-Bahn: U3, U6 bis Marienplatz (direkt am Marktplatz), S-Bahn: S1-S8 bis Marienplatz (Fußgängerzone)",
    "parking": "Tiefgarage Marienplatz (direkt unter dem Platz), Parkhaus Katharinenhof (300m), Tiefgarage am Hauptbahnhof (800m). Alle Parkplätze kostenpflichtig (2-3€/Std). An Wochenenden sehr begrenzt verfügbar."
  },
  {
    "id": "5",
    "slug": "frankfurter-weihnachtsmarkt",
    "name": "Frankfurter Weihnachtsmarkt",
    "city": "Frankfurt am Main",
    "address": "Römerberg, 60311 Frankfurt am Main",
    "description": "Der Frankfurter Weihnachtsmarkt am historischen Römerberg zählt zu den größten und schönsten Weihnachtsmärkten Deutschlands. Mit einer über 600-jährigen Tradition erstreckt er sich über mehrere Plätze der Altstadt und bietet eine perfekte Mischung aus Tradition und Moderne.",
    "openingDates": "24.11.2025 - 22.12.2025",
    "openingHours": "Mo-Sa 10-21 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Frankfurter Bethmännchen",
      "Glühwein",
      "Brannte Mandeln",
      "Kunsthandwerk",
      "Riesenbrezeln"
    ],
    "website": "https://frankfurt-tourismus.de/weihnachtsmarkt",
    "phone": "+49 69 21238800",
    "email": "weihnachtsmarkt@frankfurt.de",
    "transport": "U-Bahn: Linien U4, U5 bis Dom/Römer, S-Bahn: S1-S9 bis Hauptwache",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "6",
    "slug": "berliner-weihnachtszauber",
    "name": "Berliner Weihnachtszauber",
    "city": "Berlin",
    "address": "Gendarmenmarkt, 10117 Berlin",
    "description": "Der Weihnachtsmarkt am Gendarmenmarkt gilt als einer der schönsten und elegantesten Weihnachtsmärkte Berlins. Eingebettet zwischen dem Konzerthaus und den beiden Domen bietet er eine einzigartige Kulisse und hochwertige Produkte in festlicher Atmosphäre.",
    "openingDates": "24.11.2025 - 31.12.2025",
    "openingHours": "Mo-Do 11-22 Uhr, Fr-Sa 11-23 Uhr, So 11-22 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Currywurst",
      "Stollen",
      "Feuerzangenbowle",
      "Berliner Weisse",
      "Handwerkskunst"
    ],
    "website": "https://weihnachtszeit-berlin.de",
    "phone": "+49 30 25002333",
    "email": "info@weihnachtszeit-berlin.de",
    "transport": "U-Bahn: Linie U6 bis Französische Straße, Linie U2 bis Stadtmitte",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "7",
    "slug": "hamburger-weihnachtsmarkt",
    "name": "Hamburger Weihnachtsmarkt",
    "city": "Hamburg",
    "address": "Rathausmarkt, 20095 Hamburg",
    "description": "Der traditionelle Hamburger Weihnachtsmarkt vor dem prächtigen Rathaus ist ein maritimer Weihnachtstraum. Mit über 150 Ständen und der besonderen norddeutschen Atmosphäre bietet er eine perfekte Mischung aus Tradition und hanseatischem Flair.",
    "openingDates": "22.11.2025 - 23.12.2025",
    "openingHours": "Mo-Sa 10-21 Uhr, So 10-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Fischbrötchen",
      "Glögg",
      "Geröstete Maronen",
      "Nordsee-Spezialitäten",
      "Maritime Geschenke"
    ],
    "website": "https://hamburg.de/weihnachtsmarkt",
    "phone": "+49 40 30051401",
    "email": "weihnachtsmarkt@hamburg.de",
    "transport": "U-Bahn: Linien U1, U3 bis Rathaus, S-Bahn: S1, S3 bis Jungfernstieg",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "8",
    "slug": "stuttgarter-weihnachtsmarkt",
    "name": "Stuttgarter Weihnachtsmarkt",
    "city": "Stuttgart",
    "address": "Marktplatz, 70173 Stuttgart",
    "description": "Einer der größten und ältesten Weihnachtsmärkte Deutschlands mit über 280 Ständen. Der Stuttgarter Weihnachtsmarkt erstreckt sich über die gesamte Innenstadt und bietet schwäbische Spezialitäten sowie traditionelles Kunsthandwerk in einer gemütlichen Atmosphäre.",
    "openingDates": "26.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Stuttgarter Weihnachtsstollen",
      "Zwiebelrostbraten",
      "Spätzle",
      "Schwäbische Maultaschen",
      "Handwerkskunst"
    ],
    "website": "https://stuttgart.de/weihnachtsmarkt",
    "phone": "+49 711 22228460",
    "email": "weihnachtsmarkt@stuttgart.de",
    "transport": "U-Bahn: Linien U5, U6, U7, U12 bis Staatsgalerie, S-Bahn: S1-S6 bis Hauptbahnhof",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "9",
    "slug": "heidelberger-weihnachtsmarkt",
    "name": "Heidelberger Weihnachtsmarkt",
    "city": "Heidelberg",
    "address": "Kornmarkt/Universitätsplatz, 69117 Heidelberg",
    "description": "Der romantische Heidelberger Weihnachtsmarkt vor der Kulisse des weltberühmten Schlosses ist ein wahres Märchenland. Mit seinem besonderen Charme zwischen Neckar und Schloss bietet er eine der schönsten Weihnachtsmarkt-Atmosphären Deutschlands.",
    "openingDates": "27.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Heidelberger Studentenkuss",
      "Glühwein",
      "Kunsthandwerk",
      "Regionale Spezialitäten",
      "Weihnachtsbaumschmuck"
    ],
    "website": "https://heidelberg.de/weihnachtsmarkt",
    "phone": "+49 6221 5844444",
    "email": "weihnachtsmarkt@heidelberg.de",
    "transport": "Straßenbahn: Linien 5, 21, 22 bis Bismarckplatz, Bus: Linien 31, 32 bis Universitätsplatz",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "10",
    "slug": "luebecker-weihnachtsmarkt",
    "name": "Lübecker Weihnachtsmarkt",
    "city": "Lübeck",
    "address": "Koberg/Breite Straße, 23552 Lübeck",
    "description": "Der traditionelle Lübecker Weihnachtsmarkt in der UNESCO-Welterbestadt verzaubert mit hanseatischem Flair. Zwischen den historischen Backsteingebäuden der Altstadt bietet er eine besondere norddeutsche Weihnachtsatmosphäre mit maritimen Akzenten.",
    "openingDates": "25.11.2025 - 30.12.2025",
    "openingHours": "Mo-Sa 10-21 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Lübecker Marzipan",
      "Glögg",
      "Punsch",
      "Nordsee-Delikatessen",
      "Handwerkskunst"
    ],
    "website": "https://luebeck.de/weihnachtsmarkt",
    "phone": "+49 451 8899700",
    "email": "weihnachtsmarkt@luebeck.de",
    "transport": "Bus: Linien 1, 3, 11 bis Koberg, Regionalbahn: bis Lübeck Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "11",
    "slug": "augsburger-christkindlmarkt",
    "name": "Augsburger Christkindlmarkt",
    "city": "Augsburg",
    "address": "Rathausplatz, 86150 Augsburg",
    "description": "Der Augsburger Christkindlmarkt vor dem prächtigen Renaissance-Rathaus ist einer der schönsten Weihnachtsmärkte Bayerns. Mit über 80 Ständen und der besonderen Atmosphäre der historischen Fuggerstadt bietet er schwäbische Gemütlichkeit und Tradition.",
    "openingDates": "29.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Lebkuchen",
      "Augsburger Zwetschgenmännle",
      "Glühwein",
      "Schwäbische Spezialitäten",
      "Christbaumschmuck"
    ],
    "website": "https://augsburg.de/christkindlmarkt",
    "phone": "+49 821 502070",
    "email": "christkindlmarkt@augsburg.de",
    "transport": "Straßenbahn: Linien 1, 2 bis Rathausplatz, Bus: Linie 22 bis Fuggerstraße",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "12",
    "slug": "erfurter-weihnachtsmarkt",
    "name": "Erfurter Weihnachtsmarkt",
    "city": "Erfurt",
    "address": "Domplatz, 99084 Erfurt",
    "description": "Der Erfurter Weihnachtsmarkt vor der imposanten Kulisse von Dom und Severikirche gilt als einer der schönsten Deutschlands. Mit über 200 Ständen auf dem historischen Domplatz bietet er thüringische Gemütlichkeit und eine einzigartige mittelalterliche Atmosphäre.",
    "openingDates": "28.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Thüringer Rostbratwurst",
      "Feuerzangenbowle",
      "Stollen",
      "Töpferware",
      "Weihnachtspyramiden"
    ],
    "website": "https://erfurt.de/weihnachtsmarkt",
    "phone": "+49 361 6642265",
    "email": "weihnachtsmarkt@erfurt.de",
    "transport": "Straßenbahn: Linien 1, 3, 5 bis Domplatz, Bus: Linie 9 bis Domplatz",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "13",
    "slug": "rothenburg-reiterlesmarkt",
    "name": "Reiterlesmarkt Rothenburg",
    "city": "Rothenburg ob der Tauber",
    "address": "Marktplatz, 91541 Rothenburg ob der Tauber",
    "description": "Der Reiterlesmarkt in Rothenburg ob der Tauber gilt als einer der romantischsten Weihnachtsmärkte Deutschlands. Eingebettet in die mittelalterliche Kulisse der besterhaltenen Stadtmauer Deutschlands bietet er ein märchenhaftes Weihnachtserlebnis.",
    "openingDates": "21.11.2025 - 23.12.2025",
    "openingHours": "Fr-So 11-19 Uhr, täglich in der Adventszeit 11-19 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Lebkuchen",
      "Glühwein",
      "Schneeballen",
      "Weihnachtsschmuck",
      "Mittelalterliche Handwerkskunst"
    ],
    "website": "https://rothenburg.de/reiterlesmarkt",
    "phone": "+49 9861 404800",
    "email": "reiterlesmarkt@rothenburg.de",
    "transport": "Bus: Regionalbus bis Marktplatz, Auto: A7 Ausfahrt Rothenburg",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "14",
    "slug": "bremer-weihnachtsmarkt",
    "name": "Bremer Weihnachtsmarkt",
    "city": "Bremen",
    "address": "Marktplatz/Liebfrauenkirchhof, 28195 Bremen",
    "description": "Der Bremer Weihnachtsmarkt mit über 170 Ständen verzaubert vor der Kulisse des UNESCO-Welterbes Rathaus und Rolands. Der traditionelle Markt bietet hanseatisches Flair und maritime Atmosphäre inmitten der historischen Altstadt. Besonders beliebt ist der Schlachte-Zauber an der Weser.",
    "openingDates": "24.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 11-20:30 Uhr, Fr-Sa 11-21:30 Uhr, So 11-20:30 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Bremer Klaben",
      "Glühwein",
      "Fischbrötchen",
      "Maritime Geschenke",
      "Nordsee-Spezialitäten"
    ],
    "website": "https://bremen.de/weihnachtsmarkt",
    "phone": "+49 421 30800010",
    "email": "weihnachtsmarkt@bremen.de",
    "transport": "Straßenbahn: Linien 1, 8 bis Domsheide, S-Bahn: RS1, RS4 bis Bremen Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "15",
    "slug": "hannoverscher-weihnachtsmarkt",
    "name": "Hannoverscher Weihnachtsmarkt",
    "city": "Hannover",
    "address": "Marktkirche/Hauptbahnhof, 30159 Hannover",
    "description": "Das historische Weihnachtsdorf vor der Marktkirche und am Hauptbahnhof bietet niedersächsische Fachwerkarchitektur und urige Atmosphäre. Mit traditionellem Kunsthandwerk und regionalen Spezialitäten sorgt der Markt für eine besinnliche Adventszeit in der Landeshauptstadt.",
    "openingDates": "24.11.2025 - 30.12.2025",
    "openingHours": "Täglich 11-21 Uhr, 24.12. bis 14 Uhr, 25.12. geschlossen",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Lüneburger Heidekartoffeln",
      "Glühwein",
      "Handwerkskunst",
      "Regionale Spezialitäten",
      "Weihnachtsbaumschmuck"
    ],
    "website": "https://weihnachtsdorf-hannover.de",
    "phone": "+49 511 12345150",
    "email": "weihnachtsdorf@hannover.de",
    "transport": "S-Bahn: S1-S7 bis Hannover Hbf, U-Bahn: U1-U9 bis Hauptbahnhof",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "16",
    "slug": "wuerzburger-weihnachtsmarkt",
    "name": "Würzburger Weihnachtsmarkt",
    "city": "Würzburg",
    "address": "Marktplatz, 97070 Würzburg",
    "description": "Der Würzburger Weihnachtsmarkt vor der Kulisse der Marienkapelle und des Falkenhauses gehört zu den schönsten Frankens. Mit fränkischen Spezialitäten und regionalem Kunsthandwerk bietet er eine besondere Atmosphäre inmitten der barocken Residenzstadt.",
    "openingDates": "29.11.2025 - 23.12.2025",
    "openingHours": "Mo-Sa 10-20:30 Uhr, So 11-20:30 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Fränkischer Sauerbraten",
      "Glühwein",
      "Lebkuchen",
      "Kunsthandwerk",
      "Weihnachtspyramiden"
    ],
    "website": "https://wuerzburg.de/weihnachtsmarkt",
    "phone": "+49 931 372398",
    "email": "weihnachtsmarkt@wuerzburg.de",
    "transport": "Straßenbahn: Linien 1, 3, 5 bis Juliuspromenade, Bus: Linien 8, 14 bis Marktplatz",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "17",
    "slug": "regensburger-christkindlmarkt",
    "name": "Regensburger Christkindlmarkt",
    "city": "Regensburg",
    "address": "Neupfarrplatz, 93047 Regensburg",
    "description": "Der Regensburger Christkindlmarkt in der UNESCO-Welterbestadt verzaubert vor mittelalterlicher Kulisse. Mit über 50 Ständen bietet er bayerische Gemütlichkeit und traditionelles Handwerk inmitten der besterhaltenen mittelalterlichen Großstadt Deutschlands.",
    "openingDates": "24.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 9:30-20 Uhr, Fr-Sa 9:30-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Regensburger Wurst",
      "Lebkuchen",
      "Glühwein",
      "Bayerische Spezialitäten",
      "Christbaumschmuck"
    ],
    "website": "https://regensburg.de/christkindlmarkt",
    "phone": "+49 941 5073410",
    "email": "christkindlmarkt@regensburg.de",
    "transport": "Bus: Linien 1, 2, 6 bis Neupfarrplatz, Regionalbahn: bis Regensburg Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "18",
    "slug": "bamberger-weihnachtsmarkt",
    "name": "Bamberger Weihnachtsmarkt",
    "city": "Bamberg",
    "address": "Maximilianstraße/Grüner Markt, 96047 Bamberg",
    "description": "Der Bamberger Weihnachtsmarkt in der UNESCO-Welterbestadt bietet eine einzigartige Atmosphäre zwischen barocken Bürgerhäusern und dem gotischen Dom. Die fränkische Bierstadt verwandelt sich in der Adventszeit in ein märchenhaftes Weihnachtswunderland.",
    "openingDates": "25.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 9:30-20 Uhr, Fr-Sa 9:30-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Bamberger Hörnla",
      "Rauchbier",
      "Lebkuchen",
      "Fränkische Spezialitäten",
      "Kunsthandwerk"
    ],
    "website": "https://bamberg.info/weihnachtsmarkt",
    "phone": "+49 951 29760200",
    "email": "weihnachtsmarkt@bamberg.info",
    "transport": "Bus: Linien 901, 902 bis Maxplatz, Regionalbahn: bis Bamberg Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "19",
    "slug": "freiburger-weihnachtsmarkt",
    "name": "Freiburger Weihnachtsmarkt",
    "city": "Freiburg im Breisgau",
    "address": "Münsterplatz/Rathausplatz, 79098 Freiburg",
    "description": "Der Freiburger Weihnachtsmarkt vor der Kulisse des gotischen Münsters gehört zu den schönsten Südwestdeutschlands. Mit badischen Spezialitäten und Schwarzwälder Handwerk bietet er eine besondere Atmosphäre am Fuße des Schwarzwaldes.",
    "openingDates": "21.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Schwarzwälder Kirschtorte",
      "Glühwein",
      "Geröstete Maronen",
      "Badische Spezialitäten",
      "Kuckucksuhren"
    ],
    "website": "https://weihnachtsmarkt.freiburg.de",
    "phone": "+49 761 388150",
    "email": "weihnachtsmarkt@freiburg.de",
    "transport": "Straßenbahn: Linien 1, 3 bis Bertoldsbrunnen, Bus: Linien 11, 27 bis Rathausplatz",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "20",
    "slug": "duesseldorfer-weihnachtsmarkt",
    "name": "Düsseldorfer Weihnachtsmarkt",
    "city": "Düsseldorf",
    "address": "Schadowplatz/Königsallee, 40212 Düsseldorf",
    "description": "Der Düsseldorfer Weihnachtsmarkt verwandelt die Modestadt in ein Weihnachtswunderland. Mit internationaler Vielfalt und rheinischer Gemütlichkeit bietet er eine perfekte Mischung aus Tradition und Moderne entlang der berühmten Königsallee.",
    "openingDates": "20.11.2025 - 30.12.2025",
    "openingHours": "Mo-Sa 11-21 Uhr, So 12-21 Uhr, Fr-Sa bis 22 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Rheinischer Sauerbraten",
      "Altbier",
      "Himmel un Ääd",
      "Internationale Spezialitäten",
      "Modeaccessoires"
    ],
    "website": "https://visitduesseldorf.de/weihnachtsmarkt",
    "phone": "+49 211 8994077",
    "email": "weihnachtsmarkt@duesseldorf.de",
    "transport": "U-Bahn: Linien U70, U74, U75, U76, U77, U78, U79 bis Heinrich-Heine-Allee",
    "highlights": [
      "Luxuriöse Weihnachtsdekoration entlang der Königsallee",
      "Japanischer Weihnachtsmarkt in der Little Tokyo (größte japanische Gemeinde Deutschlands)",
      "Kunsthandwerkermarkt mit internationalen Designern",
      "Tägliche Modenschauen um 16 Uhr",
      "Gourmet-Glühwein-Bar mit über 20 verschiedenen Sorten"
    ],
    "entryPrice": "Eintritt frei",
    "publicTransport": "U-Bahn: U70-U79 bis Heinrich-Heine-Allee (2 Min.), S-Bahn: S1, S6, S11, S28 bis Düsseldorf Hbf (10 Min.)",
    "parking": "Parkhaus Königsallee (direkt), Parkhaus Kö-Galerie (200m). Kosten: 2,50-4€/Std. Am Wochenenden schnell belegt."
  },
  {
    "id": "21",
    "slug": "essener-weihnachtsmarkt",
    "name": "Essener Weihnachtsmarkt",
    "city": "Essen",
    "address": "Kennedyplatz/Willy-Brandt-Platz, 45127 Essen",
    "description": "Der Internationale Weihnachtsmarkt Essen ist einer der größten im Ruhrgebiet. Als Kulturhauptstadt Europas 2010 bietet Essen eine besondere Mischung aus Industriekultur und weihnachtlicher Gemütlichkeit mit internationalen Spezialitäten.",
    "openingDates": "15.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 12-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Currywurst",
      "Pfefferpotthast",
      "Glühwein",
      "Internationale Küche",
      "Ruhrpott-Souvenirs"
    ],
    "website": "https://visitessen.de/weihnachtsmarkt",
    "phone": "+49 201 8877220",
    "email": "weihnachtsmarkt@essen.de",
    "transport": "U-Bahn: Linien U11, U17, U18 bis Hauptbahnhof, S-Bahn: S1, S3, S9 bis Essen Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "22",
    "slug": "dortmunder-weihnachtsstadt",
    "name": "Dortmunder Weihnachtsstadt",
    "city": "Dortmund",
    "address": "Hansaplatz, 44137 Dortmund",
    "description": "Die Dortmunder Weihnachtsstadt ist einer der größten Weihnachtsmärkte Deutschlands mit über 300 Ständen. Der größte Weihnachtsbaum der Welt mit 1700 Fichten und 48.000 Lichtern macht ihn zu einem besonderen Erlebnis im Herzen des Ruhrgebiets.",
    "openingDates": "21.11.2025 - 30.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 12-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Currywurst",
      "Dortmunder Bier",
      "Pfefferpotthast",
      "Ruhrgebiet-Spezialitäten",
      "BVB-Fanartikei"
    ],
    "website": "https://weihnachtsstadt-do.de",
    "phone": "+49 231 54755333",
    "email": "weihnachtsstadt@dortmund.de",
    "transport": "U-Bahn: Linien U41, U45, U47, U49 bis Stadtgarten, S-Bahn: S1, S2, S4, S5 bis Dortmund Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "23",
    "slug": "leipziger-weihnachtsmarkt",
    "name": "Leipziger Weihnachtsmarkt",
    "city": "Leipzig",
    "address": "Markt/Naschmarkt, 04109 Leipzig",
    "description": "Der Leipziger Weihnachtsmarkt blickt auf eine über 500-jährige Tradition zurück. Vor der Kulisse der Thomaskirche und des Alten Rathauses bietet er sächsische Gemütlichkeit und eine besondere musikalische Atmosphäre in der Stadt von Bach und Mendelssohn.",
    "openingDates": "26.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Leipziger Lerchen",
      "Sächsischer Stollen",
      "Glühwein",
      "Pulsnitzer Lebkuchen",
      "Erzgebirgische Volkskunst"
    ],
    "website": "https://leipzig.de/weihnachtsmarkt",
    "phone": "+49 341 7104260",
    "email": "weihnachtsmarkt@leipzig.de",
    "transport": "Straßenbahn: Linien 4, 7, 12, 15 bis Augustusplatz, S-Bahn: S1, S2, S3, S4, S5 bis Leipzig Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "24",
    "slug": "mainzer-weihnachtsmarkt",
    "name": "Mainzer Weihnachtsmarkt",
    "city": "Mainz",
    "address": "Markt/Leichhof, 55116 Mainz",
    "description": "Der Mainzer Weihnachtsmarkt vor dem imposanten Dom St. Martin gehört zu den schönsten Rheinland-Pfalz'. Mit über 120 Ständen und der besonderen rheinischen Atmosphäre bietet er eine perfekte Mischung aus Tradition und lebendiger Universitätsstadt-Kultur.",
    "openingDates": "22.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-20:30 Uhr, Fr-Sa 10-21:30 Uhr, So 11-20:30 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Rheinischer Döppekuchen",
      "Glühwein",
      "Mainzer Fastnachtskrapfen",
      "Rheinland-Pfälzer Spezialitäten",
      "Gutenberg-Souvenirs"
    ],
    "website": "https://mainz.de/weihnachtsmarkt",
    "phone": "+49 6131 122647",
    "email": "weihnachtsmarkt@mainz.de",
    "transport": "S-Bahn: S8 bis Mainz Hauptbahnhof, Bus: Linien 6, 50, 54, 55 bis Höfchen/Markt",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "25",
    "slug": "trierer-weihnachtsmarkt",
    "name": "Trierer Weihnachtsmarkt",
    "city": "Trier",
    "address": "Hauptmarkt/Domfreihof, 54290 Trier",
    "description": "Der Trierer Weihnachtsmarkt in Deutschlands ältester Stadt verbindet 2000 Jahre Geschichte mit weihnachtlicher Gemütlichkeit. Vor der Kulisse der Porta Nigra und des Doms bietet er eine einzigartige römisch-mittelalterliche Atmosphäre.",
    "openingDates": "19.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 12-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Trierer Weinbergspfirsiche",
      "Moselwein-Glühwein",
      "Römerbrot",
      "Eifel-Spezialitäten",
      "Antike Handwerkskunst"
    ],
    "website": "https://trier.de/weihnachtsmarkt",
    "phone": "+49 651 97808520",
    "email": "weihnachtsmarkt@trier.de",
    "transport": "Bus: Linien 1, 2, 12 bis Porta Nigra, Regionalbahn: bis Trier Hauptbahnhof",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "26",
    "slug": "konstanzer-weihnachtsmarkt",
    "name": "Konstanzer Weihnachtsmarkt",
    "city": "Konstanz",
    "address": "Münsterplatz/Marktstätte, 78462 Konstanz",
    "description": "Der Konstanzer Weihnachtsmarkt am Bodensee bietet eine einzigartige Alpenkulisse mit Schweizer Flair. Mit direktem Blick auf den See und die Alpen verzaubert er Besucher mit süddeutscher Gemütlichkeit und internationaler Atmosphäre.",
    "openingDates": "21.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Bodensee-Fischspezialitäten",
      "Schnapsbrenner-Erzeugnisse",
      "Schweizer Rösti",
      "Alpen-Käse",
      "Seehas-Lebkuchen"
    ],
    "website": "https://konstanz.de/weihnachtsmarkt",
    "phone": "+49 7531 900160",
    "email": "weihnachtsmarkt@konstanz.de",
    "transport": "Bus: Linien 1, 4, 13 bis Marktstätte, Regionalbahn: bis Konstanz Bahnhof",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "27",
    "slug": "goettinger-weihnachtsmarkt",
    "name": "Göttinger Weihnachtsmarkt",
    "city": "Göttingen",
    "address": "Markt/Wilhelmsplatz, 37073 Göttingen",
    "description": "Der Göttinger Weihnachtsmarkt in der traditionsreichen Universitätsstadt bietet eine besondere Mischung aus studentischem Leben und niedersächsischer Tradition. Vor dem historischen Gänseliesel-Brunnen entfaltet sich eine gemütliche Adventsatmosphäre.",
    "openingDates": "22.11.2025 - 30.12.2025",
    "openingHours": "Mo-Sa 10-20 Uhr, So 11-20 Uhr, Fr-Sa bis 21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Göttinger Pökelfleisch",
      "Studenten-Feuerzange",
      "Niedersächsischer Honig",
      "Universitäts-Souvenirs",
      "Harz-Spezialitäten"
    ],
    "website": "https://goettingen.de/weihnachtsmarkt",
    "phone": "+49 551 4996800",
    "email": "weihnachtsmarkt@goettingen.de",
    "transport": "Bus: Linien 21, 22, 23 bis Markt, Regionalbahn: bis Göttingen Bahnhof",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "28",
    "slug": "kieler-weihnachtsmarkt",
    "name": "Kieler Weihnachtsmarkt",
    "city": "Kiel",
    "address": "Asmus-Bremer-Platz/Rathausplatz, 24103 Kiel",
    "description": "Der Kieler Weihnachtsmarkt an der Förde verbindet maritime Tradition mit schleswig-holsteinischer Gemütlichkeit. Als Landeshauptstadt und Hafenstadt bietet Kiel eine besondere norddeutsche Weihnachtsatmosphäre mit Meeresblick.",
    "openingDates": "20.11.2025 - 30.12.2025",
    "openingHours": "Mo-Sa 11-20:30 Uhr, So 12-20:30 Uhr, Fr-Sa bis 21:30 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Kieler Sprotten",
      "Förde-Fisch",
      "Pharisäer",
      "Maritime Geschenke",
      "Schleswig-Holstein Spezialitäten"
    ],
    "website": "https://kiel.de/weihnachtsmarkt",
    "phone": "+49 431 901901",
    "email": "weihnachtsmarkt@kiel.de",
    "transport": "Bus: Linien 4, 11, 12 bis Rathausplatz, S-Bahn: S3 bis Kiel Hauptbahnhof",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "29",
    "slug": "potsdamer-weihnachtsmarkt",
    "name": "Potsdamer Weihnachtsmarkt",
    "city": "Potsdam",
    "address": "Brandenburger Straße/Luisenplatz, 14467 Potsdam",
    "description": "Der Potsdamer Weihnachtsmarkt in der preußischen Residenzstadt bietet königliches Ambiente vor der Kulisse des Brandenburger Tors und der historischen Altstadt. Schlösser und Gärten verleihen diesem Markt eine besondere märchenhafte Atmosphäre.",
    "openingDates": "22.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Brandenburger Spezialitäten",
      "Preußische Leckereien",
      "Glühwein",
      "Sanssouci-Souvenirs",
      "Kunsthandwerk"
    ],
    "website": "https://potsdam.de/weihnachtsmarkt",
    "phone": "+49 331 2755880",
    "email": "weihnachtsmarkt@potsdam.de",
    "transport": "Straßenbahn: Linien 91, 92, 96 bis Brandenburger Tor, S-Bahn: S1, S7 bis Potsdam Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "30",
    "slug": "magdeburger-weihnachtsmarkt",
    "name": "Magdeburger Weihnachtsmarkt",
    "city": "Magdeburg",
    "address": "Alter Markt/Breiter Weg, 39104 Magdeburg",
    "description": "Der Magdeburger Weihnachtsmarkt in der Ottostadt verbindet über 1000 Jahre Geschichte mit moderner Weihnachtsatmosphäre. Vor dem gotischen Dom und dem historischen Rathaus entfaltet sich sachsen-anhaltinische Gemütlichkeit.",
    "openingDates": "20.11.2025 - 30.12.2025",
    "openingHours": "Mo-Sa 10-20 Uhr, So 11-20 Uhr, Fr-Sa bis 21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Magdeburger Halver Hahn",
      "Baumkuchen",
      "Glühwein",
      "Otto-Souvenirs",
      "Altmark-Spezialitäten"
    ],
    "website": "https://magdeburg.de/weihnachtsmarkt",
    "phone": "+49 391 5403200",
    "email": "weihnachtsmarkt@magdeburg.de",
    "transport": "Straßenbahn: Linien 1, 2, 4, 6 bis Alter Markt, S-Bahn: S1 bis Magdeburg Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "31",
    "slug": "kasseler-weihnachtsmarkt",
    "name": "Kasseler Weihnachtsmarkt",
    "city": "Kassel",
    "address": "Königsplatz/Friedrichsplatz, 34117 Kassel",
    "description": "Der Kasseler Weihnachtsmarkt in der documenta-Stadt bietet eine besondere Mischung aus Kunst, Kultur und hessischer Tradition. Die Nähe zum Bergpark Wilhelmshöhe und der internationale Kunstflair machen ihn zu etwas Besonderem.",
    "openingDates": "21.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 12-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Ahle Wurscht",
      "Hessischer Apfelwein-Glühwein",
      "Kasseler Streuselkuchen",
      "documenta-Souvenirs",
      "Nordhessische Spezialitäten"
    ],
    "website": "https://kassel.de/weihnachtsmarkt",
    "phone": "+49 561 787690",
    "email": "weihnachtsmarkt@kassel.de",
    "transport": "Straßenbahn: Linien 1, 3, 4, 5, 6, 7, 8 bis Königsplatz, RegioTram: RT1, RT4, RT5, RT9",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "32",
    "slug": "osnabruecker-weihnachtsmarkt",
    "name": "Osnabrücker Weihnachtsmarkt",
    "city": "Osnabrück",
    "address": "Markt/Nikolaiort, 49074 Osnabrück",
    "description": "Der Osnabrücker Weihnachtsmarkt in der Friedensstadt des Westfälischen Friedens verbindet niedersächsische Tradition mit westfälischer Kultur. Die historische Altstadt mit gotischen Kirchen bildet eine stimmungsvolle Kulisse.",
    "openingDates": "22.11.2025 - 30.12.2025",
    "openingHours": "Mo-Sa 10-20:30 Uhr, So 11-20:30 Uhr, Fr-Sa bis 21:30 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Westfälischer Schinken",
      "Pumpernickel",
      "Glühwein",
      "Friedens-Souvenirs",
      "Osnabrücker Möhrchen"
    ],
    "website": "https://osnabrueck.de/weihnachtsmarkt",
    "phone": "+49 541 3234567",
    "email": "weihnachtsmarkt@osnabrueck.de",
    "transport": "Bus: Linien 21, 31, 32 bis Neumarkt, Regionalbahn: bis Osnabrück Hauptbahnhof",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "33",
    "slug": "aachener-weihnachtsmarkt",
    "name": "Aachener Weihnachtsmarkt",
    "city": "Aachen",
    "address": "Markt/Katschhof, 52062 Aachen",
    "description": "Der traditionelle Aachener Weihnachtsmarkt vor der Kulisse des gotischen Doms ist ein wahres Wintermärchen. Mit über 130 Ständen und der besonderen Atmosphäre der Kaiserstadt bietet er eine einzigartige Mischung aus Geschichte und Tradition. Berühmt für seine Aachener Printen und die gemütliche Karls-Platz Atmosphäre.",
    "openingDates": "21.11.2025 - 23.12.2025",
    "openingHours": "Täglich 11-21 Uhr, Sa 21.12. bis 22 Uhr",
    "imageUrl": "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    "specialties": [
      "Aachener Printen",
      "Glühwein",
      "Reibekuchen",
      "Kunsthandwerk",
      "Weihnachtsbaumschmuck"
    ],
    "website": "https://aachenweihnachtsmarkt.de",
    "phone": "+49 241 4321234",
    "email": "info@aachenweihnachtsmarkt.de",
    "transport": "Bus: Linien 1, 11, 21 bis Elisenbrunnen, Regionalbahn: bis Aachen Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "34",
    "slug": "quedlinburger-weihnachtsmarkt",
    "name": "Quedlinburger Weihnachtsmarkt",
    "city": "Quedlinburg",
    "address": "Marktplatz, 06484 Quedlinburg",
    "description": "Der Quedlinburger Weihnachtsmarkt vor dem Renaissance-Rathaus in der UNESCO-Welterbestadt ist ein mittelalterliches Märchen. Zwischen über 1.000 Fachwerkhäusern und der beeindruckenden Stiftskirche bietet er eine einzigartige historische Atmosphäre und traditionelles Handwerk aus dem Harz.",
    "openingDates": "26.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 10-19 Uhr, Fr-Sa 10-20 Uhr, So 11-19 Uhr",
    "imageUrl": "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    "specialties": [
      "Harzer Käse",
      "Glühwein",
      "Lebkuchen",
      "Erzgebirgische Volkskunst",
      "Weihnachtspyramiden"
    ],
    "website": "https://adventsstadt.quedlinburg-info.de",
    "phone": "+49 3946 905624",
    "email": "weihnachtsmarkt@quedlinburg.de",
    "transport": "Regionalbahn: bis Quedlinburg Hbf, Bus: Linie 260 bis Marktplatz",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "35",
    "slug": "goslarer-weihnachtswald",
    "name": "Goslarer Weihnachtswald",
    "city": "Goslar",
    "address": "Marktplatz/Schuhhof, 38640 Goslar",
    "description": "Der Goslarer Weihnachtswald in der UNESCO-Welterbestadt am Harz ist ein einzigartiges Weihnachtserlebnis. Mit über 90 Ständen zwischen mittelalterlichen Gassen und dem Kaiserpfalz bietet er Harzer Tradition und eine märchenhafte Atmosphäre inmitten der historischen Bergstadt.",
    "openingDates": "22.11.2025 - 30.12.2025",
    "openingHours": "Täglich 10-20 Uhr, 24.12. bis 14 Uhr, 25.12. geschlossen",
    "imageUrl": "/lovable-uploads/2b8ae1e1-72bb-4669-bda0-58a94434bd80.png",
    "specialties": [
      "Harzer Schnitzkäse",
      "Glühwein",
      "Harzer Rouladen",
      "Bergbau-Souvenirs",
      "Erzgebirgische Kunst"
    ],
    "website": "https://goslar.de/weihnachtsmarkt",
    "phone": "+49 5321 780060",
    "email": "weihnachtswald@goslar.de",
    "transport": "Regionalbahn: bis Goslar Hbf, Bus: Linien 830, 840 bis Marktplatz",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "36",
    "slug": "marburger-weihnachtsmarkt",
    "name": "Marburger Weihnachtsmarkt",
    "city": "Marburg",
    "address": "Marktplatz/Oberstadt, 35037 Marburg",
    "description": "Der romantische Marburger Weihnachtsmarkt in der mittelalterlichen Oberstadt ist ein Märchen aus Fachwerk und Tradition. Vor der Kulisse der Elisabeth-Kirche und des Landgrafenschlosses bietet er eine einzigartige universitäre Atmosphäre und hessische Gemütlichkeit.",
    "openingDates": "24.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    "specialties": [
      "Hessische Ahle Worscht",
      "Feuerzangenbowle",
      "Lebkuchen",
      "Universitäts-Souvenirs",
      "Kunsthandwerk"
    ],
    "website": "https://marburg-tourismus.de/weihnachtsmarkt",
    "phone": "+49 6421 99120",
    "email": "weihnachtsmarkt@marburg.de",
    "transport": "Bus: Linien 1, 7 bis Rudolphsplatz, Regionalbahn: bis Marburg Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "37",
    "slug": "weimarer-weihnachtsmarkt",
    "name": "Weimarer Weihnachtsmarkt",
    "city": "Weimar",
    "address": "Marktplatz/Theaterplatz, 99423 Weimar",
    "description": "Der Weimarer Weihnachtsmarkt in der Stadt der deutschen Klassik verzaubert vor der Kulisse des Deutschen Nationaltheaters. Mit kulturellem Erbe von Goethe und Schiller bietet er eine einzigartige literarische Atmosphäre und thüringische Traditionen in UNESCO-Welterbe-Umgebung.",
    "openingDates": "28.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    "specialties": [
      "Thüringer Rostbratwurst",
      "Stollen",
      "Glühwein",
      "Goethe-Souvenirs",
      "Literarische Geschenke"
    ],
    "website": "https://weimar.de/weihnachtsmarkt",
    "phone": "+49 3643 762020",
    "email": "weihnachtsmarkt@weimar.de",
    "transport": "Bus: Linien 1, 6 bis Goetheplatz, Regionalbahn: bis Weimar Hbf",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "38",
    "slug": "wiesbadener-sternschnuppenmarkt",
    "name": "Wiesbadener Sternschnuppenmarkt",
    "city": "Wiesbaden",
    "address": "Schlossplatz/Marktkirche, 65183 Wiesbaden",
    "description": "Der Wiesbadener Sternschnuppenmarkt verdankt seinen Namen den funkelnden Lichtern, die die Kurstadt in der Adventszeit zum Leuchten bringen. Zwischen dem barocken Stadtschloss und der neogotischen Marktkirche entfaltet sich ein besonders eleganter Weihnachtsmarkt.",
    "openingDates": "22.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 12-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Rheingauer Wein",
      "Sekt aus dem Rheingau",
      "Wiesbadener Kochkäse",
      "Hessische Spezialitäten",
      "Kurstadt-Süßwaren"
    ],
    "website": "https://wiesbaden.de/sternschnuppenmarkt",
    "phone": "+49 611 172829",
    "email": "sternschnuppenmarkt@wiesbaden.de",
    "transport": "Bus: Linien 1, 8, 16 bis Schlossplatz, S-Bahn: S1, S8, S9 bis Wiesbaden Hbf",
    "highlights": [
      "Barocke Kulisse des Wiesbadener Stadtschlosses",
      "Rheingauer Weinstand mit Verkostungen",
      "Kurhaus und Casino in unmittelbarer Nähe",
      "Wiesbadener Thermalquellen-Museum",
      "Hessisches Staatsballet mit Weihnachtsaufführungen"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "39",
    "slug": "berlin-potsdamer-platz",
    "name": "WeihnachtsZauber Potsdamer Platz",
    "city": "Berlin",
    "address": "Potsdamer Platz, 10785 Berlin",
    "description": "Der WeihnachtsZauber am Potsdamer Platz ist Berlins modernster Weihnachtsmarkt mit spektakulärer Skyline-Kulisse. Mit über 100 Ständen, Fahrgeschäften und einer 20 Meter hohen Weihnachtspyramide bietet er eine einzigartige Mischung aus Tradition und Moderne.",
    "openingDates": "22.11.2025 - 06.01.2026",
    "openingHours": "Mo-Do 11-22 Uhr, Fr-Sa 11-23 Uhr, So 11-22 Uhr",
    "imageUrl": "/lovable-uploads/2b8ae1e1-72bb-4669-bda0-58a94434bd80.png",
    "specialties": [
      "Internationale Küche",
      "Berliner Currywurst",
      "Glühwein-Variationen",
      "Moderne Handwerkskunst",
      "Street Food"
    ],
    "website": "https://weihnachtszauber-potsdamer-platz.de",
    "phone": "+49 30 25472583",
    "email": "info@weihnachtszauber.de",
    "transport": "S-Bahn: S1, S2, S25 bis Potsdamer Platz, U-Bahn: U2 bis Potsdamer Platz",
    "highlights": [
      "20 Meter hohe Weihnachtspyramide mit LED-Beleuchtung",
      "Spektakuläre Skyline-Kulisse der Moderne",
      "Fahrgeschäfte und Kinderkarussell bis 6. Januar",
      "Silvesterfeier mit großem Feuerwerk am 31.12.",
      "Internationale Food-Trucks mit Spezialitäten aus aller Welt"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "40",
    "slug": "berlin-charlottenburg",
    "name": "Charlottenburger Weihnachtsmarkt",
    "city": "Berlin",
    "address": "Spandauer Damm/Schloss Charlottenburg, 14059 Berlin",
    "description": "Der romantische Weihnachtsmarkt vor Schloss Charlottenburg bietet königliche Atmosphäre im barocken Ambiente. Mit über 80 Ständen im Schlossgarten entsteht eine märchenhafte Kulisse zwischen Winterbeleuchtung und historischer Architektur.",
    "openingDates": "26.11.2025 - 26.12.2025",
    "openingHours": "Mo-Do 12-21 Uhr, Fr-Sa 12-22 Uhr, So 12-21 Uhr",
    "imageUrl": "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    "specialties": [
      "Königsberger Klopse",
      "Preußischer Glühwein",
      "Berliner Pfannkuchen",
      "Kunsthandwerk",
      "Königlicher Stollen"
    ],
    "website": "https://weihnachtsmarkt-charlottenburg.de",
    "phone": "+49 30 32093445",
    "email": "info@charlottenburg-markt.de",
    "transport": "U-Bahn: U7 bis Richard-Wagner-Platz, Bus: M45, 109 bis Luisenplatz",
    "highlights": [
      "Barockes Schloss Charlottenburg als majestätische Kulisse",
      "Märchenhafte Beleuchtung im Schlossgarten",
      "Konzerte im Schloss jeden Samstag um 18 Uhr",
      "Königliche Weihnachtsbäckerei mit Hofkonditoren",
      "Historische Handwerksvorführungen im Barockstil"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "41",
    "slug": "muenchen-schwabing",
    "name": "Schwabinger Weihnachtsmarkt",
    "city": "München",
    "address": "Münchner Freiheit, 80802 München",
    "description": "Der Schwabinger Weihnachtsmarkt bringt studentisches Flair und Künstler-Atmosphäre in die Münchener Vorweihnachtszeit. Mit über 60 Ständen rund um die Münchner Freiheit bietet er eine alternative, kreative Weihnachtsmarktatmosphäre.",
    "openingDates": "27.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 12-21 Uhr, Fr-Sa 12-22 Uhr, So 13-21 Uhr",
    "imageUrl": "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    "specialties": [
      "Craft Beer",
      "Künstler-Glühwein",
      "Bio-Lebkuchen",
      "Vintage-Handwerk",
      "Schwabinger Spezialitäten"
    ],
    "website": "https://schwabinger-weihnachtsmarkt.de",
    "phone": "+49 89 38665544",
    "email": "info@schwabing-markt.de",
    "transport": "U-Bahn: U3, U6 bis Münchner Freiheit, Bus: 154 bis Münchner Freiheit",
    "highlights": [
      "Künstler-Viertel Schwabing mit kreativer Atmosphäre",
      "Live-Musik von lokalen Bands jeden Abend ab 19 Uhr",
      "Kunsthandwerk von Münchener Künstlern",
      "Schwabinger Kneipen-Tour mit Glühwein-Stationen",
      "Alternative Weihnachtsbäume aus Recycling-Material"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "42",
    "slug": "hamburg-speicherstadt",
    "name": "Weihnachtsmarkt Speicherstadt",
    "city": "Hamburg",
    "address": "Am Sandtorkai/Speicherstadt, 20457 Hamburg",
    "description": "Der maritime Weihnachtsmarkt in der historischen Speicherstadt bietet einzigartige Hanseaten-Atmosphäre zwischen Backsteingebäuden und Kanälen. Mit über 70 Ständen entsteht eine besondere Weihnachtsstimmung im UNESCO-Welterbe.",
    "openingDates": "25.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 12-21 Uhr, Fr-Sa 12-22 Uhr, So 12-21 Uhr",
    "imageUrl": "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    "specialties": [
      "Hamburger Fischsuppe",
      "Glögg",
      "Maritime Geschenke",
      "Speicher-Kaffee",
      "Hanseaten-Spezialitäten"
    ],
    "website": "https://speicherstadt-weihnachtsmarkt.de",
    "phone": "+49 40 36138877",
    "email": "info@speicherstadt-markt.de",
    "transport": "U-Bahn: U1 bis Meßberg, U4 bis Überseequartier, Bus: 111 bis Speicherstadt",
    "highlights": [
      "UNESCO-Welterbe Speicherstadt als einzigartige Kulisse",
      "Maritime Dekoration mit Schiffslichtern und Ankern",
      "Speicher-Konzerte in historischen Gebäuden",
      "Hafenrundfahrt mit Glühwein jeden Samstag 15 Uhr",
      "Miniatur Wunderland Weihnachts-Sonderausstellung"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "43",
    "slug": "koeln-wilhelmsplatz-weihnachtsmarkt",
    "name": "Wilhelmsplatz Weihnachtsmarkt Köln",
    "city": "Köln",
    "address": "Wilhelmsplatz, 50668 Köln",
    "description": "Ein weiterer bezaubernder Weihnachtsmarkt in Köln, der Wilhelmsplatz-Markt bietet eine intimere Atmosphäre abseits der großen Touristenströme. Mit lokalen Kunsthandwerkern und regionalen Spezialitäten ist er ein Geheimtipp für Einheimische.",
    "openingDates": "26.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 12-21 Uhr, Fr-Sa 12-22 Uhr, So 12-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Reibekuchen",
      "Himmel un Ääd",
      "Kölsch",
      "Handwerk",
      "Lokale Spezialitäten"
    ],
    "website": "https://koeln.de/wilhelmsplatz-markt",
    "phone": "+49 221 22133445",
    "email": "wilhelmsplatz@koeln.de",
    "transport": "U-Bahn: U3, U4 bis Severinstraße, Bus: 106, 132 bis Wilhelmsplatz",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "44",
    "slug": "berlin-kulturbrauerei-weihnachtsmarkt",
    "name": "Weihnachtsmarkt Kulturbrauerei Berlin",
    "city": "Berlin",
    "address": "Schönhauser Allee 36, 10435 Berlin",
    "description": "Der Weihnachtsmarkt in der Kulturbrauerei in Prenzlauer Berg ist ein alternativer Markt mit skandinavischem Flair. In den historischen Brauereigebäuden bietet er handgemachte Produkte, Bio-Glühwein und ein besonderes Ambiente.",
    "openingDates": "25.11.2025 - 30.12.2025",
    "openingHours": "Mo-Do 16-22 Uhr, Fr 16-23 Uhr, Sa 12-23 Uhr, So 12-22 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Bio-Glühwein",
      "Skandinavische Spezialitäten",
      "Handwerk",
      "Vegane Optionen",
      "Design-Artikel"
    ],
    "website": "https://weihnachtsmarkt-kulturbrauerei.de",
    "phone": "+49 30 44357100",
    "email": "info@kulturbrauerei-weihnachtsmarkt.de",
    "transport": "U-Bahn: U2 bis Eberswalder Straße, Tram: M1, M12 bis Eberswalder Straße",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "45",
    "slug": "darmstadt-weihnachtsmarkt",
    "name": "Darmstädter Weihnachtsmarkt",
    "city": "Darmstadt",
    "address": "Marktplatz, 64283 Darmstadt",
    "description": "Der Darmstädter Weihnachtsmarkt rund um das Alte Rathaus bietet hessische Gemütlichkeit in einer studentischen Atmosphäre. Mit über 80 Ständen und regionalen Spezialitäten ist er ein beliebter Treffpunkt für Familien und Studenten.",
    "openingDates": "27.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Apfelwein",
      "Handkäs mit Musik",
      "Rippchen",
      "Glühwein",
      "Hessische Spezialitäten"
    ],
    "website": "https://darmstadt.de/weihnachtsmarkt",
    "phone": "+49 6151 132823",
    "email": "weihnachtsmarkt@darmstadt.de",
    "transport": "Straßenbahn: Linien 2, 3, 5 bis Luisenplatz, Bus: K, H bis Marktplatz",
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "46",
    "slug": "koeln-heinzelmaennchen-weihnachtsmarkt",
    "name": "Heinzelmännchen Weihnachtsmarkt Köln",
    "city": "Köln",
    "address": "Heumarkt, 50667 Köln",
    "description": "Der Heinzelmännchen Weihnachtsmarkt am Kölner Heumarkt ist ein märchenhafter Markt mit besonderen kölschen Traditionen. Mit über 100 Ständen und der legendären Heinzelmännchen-Atmosphäre bietet er eine einzigartige Alternative zu den klassischen Kölner Weihnachtsmärkten.",
    "openingDates": "25.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Kölsch",
      "Himmel un Ääd",
      "Halver Hahn",
      "Kölsche Kamelle",
      "Heinzelmännchen-Souvenirs"
    ],
    "website": "https://heinzelmaennchen-weihnachtsmarkt.de",
    "phone": "+49 221 98765432",
    "email": "info@heinzelmaennchen-weihnachtsmarkt.de",
    "transport": "U-Bahn: U1, U7 bis Heumarkt, Bus: 106, 132 bis Heumarkt",
    "highlights": [
      "Täglich Heinzelmännchen-Aufführungen um 18 Uhr",
      "Kölsche Live-Musik jeden Freitag und Samstag",
      "Traditionelle Brauhausküche im Weihnachtsambiente"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "47",
    "slug": "genfer-marche-noel",
    "name": "Genfer Marché de Noël",
    "city": "Genf",
    "address": "Place du Molard, 1204 Genf, Schweiz",
    "description": "Der Genfer Weihnachtsmarkt am Place du Molard ist einer der größten der Schweiz. Mit über 180 Ständen und internationaler Atmosphäre bietet er eine einzigartige Mischung aus Schweizer Tradition und kosmopolitischem Flair direkt am Genfersee.",
    "openingDates": "25.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-22 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Schweizer Schokolade",
      "Raclette",
      "Vin chaud",
      "Uhren",
      "Alpenprodukte"
    ],
    "website": "https://geneve.ch/marche-noel",
    "phone": "+41 22 909 7000",
    "email": "marche.noel@geneve.ch",
    "transport": "Tram: Linien 12, 14, 17 bis Molard, Bus: Linien 1, 8, 25 bis Molard",
    "highlights": [
      "Internationales Konzertprogramm täglich 18-19 Uhr",
      "Schweizer Alphorn-Konzerte jeden Freitag 19 Uhr",
      "Kinderkarussell und Märchenzelt für die Kleinen",
      "Schokoladen-Verkostungen mit Schweizer Chocolatiers",
      "Blick auf den beleuchteten Jet d'Eau und die Alpen"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "48",
    "slug": "thuner-weihnachtsmarkt",
    "name": "Thuner Weihnachtsmarkt",
    "city": "Thun",
    "address": "Rathausplatz, 3600 Thun, Schweiz",
    "description": "Der Thuner Weihnachtsmarkt vor der malerischen Kulisse des Schlosses Thun und mit Blick auf Thuner- und Brienzersee bietet eine einzigartige Alpen-Atmosphäre. Die charmante Berner Oberland-Stadt verwandelt sich in ein Weihnachtsmärchen.",
    "openingDates": "29.11.2025 - 23.12.2025",
    "openingHours": "Mo-Sa 10-20 Uhr, So 11-19 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Berner Lebkuchen",
      "Älplermagronen",
      "Glühwein",
      "Schweizer Käse",
      "Holzschnitzereien"
    ],
    "website": "https://thun.ch/weihnachtsmarkt",
    "phone": "+41 33 225 9000",
    "email": "weihnachtsmarkt@thun.ch",
    "transport": "Zug: S-Bahn bis Thun Bahnhof, Bus: STI-Linien bis Rathausplatz",
    "highlights": [
      "Märchenhafte Beleuchtung des Schlosses Thun ab 17 Uhr",
      "Traditionelle Berner Alphornbläser jeden Samstag 16 Uhr",
      "Kinderchor-Auftritte aus dem Berner Oberland",
      "Käse-Verkostungen mit lokalen Produzenten",
      "Panoramablick auf Eiger, Mönch und Jungfrau bei klarem Wetter"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "49",
    "slug": "villacher-advent",
    "name": "Villacher Advent",
    "city": "Villach",
    "address": "Hauptplatz, 9500 Villach, Österreich",
    "description": "Der Villacher Advent in Kärnten verzaubert mit südlicher Gemütlichkeit und alpinem Flair. Vor der malerischen Kulisse der historischen Altstadt bietet er österreichische Traditionen, Kärntner Spezialitäten und handwerkliche Kostbarkeiten in weihnachtlicher Atmosphäre.",
    "openingDates": "22.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 14-20 Uhr, Fr-Sa 10-21 Uhr, So 10-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Kärntner Reindling",
      "Feuerzangenbowle",
      "Glühmost",
      "Kärntner Speck",
      "Alpine Handwerkskunst"
    ],
    "website": "https://villach.at/advent",
    "phone": "+43 4242 205-4000",
    "email": "advent@villach.at",
    "transport": "ÖBB: Regionalbahn bis Villach Hbf, Stadtbus: Linie 1, 2 bis Hauptplatz",
    "highlights": [
      "Villacher Adventfenster: täglich neue Überraschungen in den Geschäften",
      "Kärntner Volksmusik jeden Samstag 17 Uhr auf der Hauptplatz-Bühne",
      "Adventkonzerte in der Stadtpfarrkirche St. Jakob",
      "Wichtelwerkstatt für Kinder jeden Sonntag 15-17 Uhr",
      "Krampuslauf am 5. Dezember ab 19 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "50",
    "slug": "kufsteiner-christkindlmarkt",
    "name": "Kufsteiner Christkindlmarkt",
    "city": "Kufstein",
    "address": "Stadtplatz, 6330 Kufstein, Österreich",
    "description": "Der Kufsteiner Christkindlmarkt vor der imposanten Festung Kufstein ist einer der schönsten Weihnachtsmärkte Tirols. Mit Blick auf die majestätische Festung und die umliegenden Berge bietet er authentische Tiroler Gemütlichkeit und traditionelles Handwerk in märchenhafter Alpenkulisse.",
    "openingDates": "22.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-19 Uhr, Fr-Sa 10-20 Uhr, So 10-19 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Kufsteiner Glühwein",
      "Kaiserschmarrn",
      "Tiroler Speck",
      "Lebkuchen",
      "Bergkäse"
    ],
    "website": "https://kufstein.at/christkindlmarkt",
    "phone": "+43 5372 62207",
    "email": "christkindlmarkt@kufstein.at",
    "transport": "ÖBB: Bahnhof Kufstein, Bus: Regionalbus 4010 bis Stadtplatz",
    "highlights": [
      "Festung Kufstein mit spektakulärer Bergkulisse",
      "Traditionelle Tiroler Blasmusik jeden Samstag 16 Uhr",
      "Handwerksvorführungen: Filzen, Schnitzen, Töpfern",
      "Advent-Konzerte in der Stadtpfarrkirche (jeden Sonntag 17 Uhr)",
      "Kinderprogramm mit Ponyreiten und Märchenerzählungen"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "51",
    "slug": "appenzeller-weihnachtsmarkt",
    "name": "Appenzeller Weihnachtsmärt",
    "city": "Appenzell",
    "address": "Landsgemeindeplatz, 9050 Appenzell, Schweiz",
    "description": "Der traditionelle Appenzeller Weihnachtsmärt im Herzen des Appenzellerlandes ist ein authentisches Schweizer Weihnachtserlebnis. Umgeben von den charakteristischen Appenzeller Häusern und mit Blick auf die Alpstein-Kette bietet er echte Schweizer Traditionen und regionale Spezialitäten.",
    "openingDates": "06.12.2025 - 22.12.2025",
    "openingHours": "Fr-Sa 14-20 Uhr, So 11-18 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Appenzeller Käse",
      "Glühwein",
      "Lebkuchen",
      "Öpfelchüechli",
      "Appenzeller Biberli"
    ],
    "website": "https://appenzell.ch/weihnachtsmaert",
    "phone": "+41 71 788 9641",
    "email": "weihnachtsmaert@appenzell.ch",
    "transport": "Appenzeller Bahnen: AB bis Appenzell, Postauto: Linie 300 ab St. Gallen",
    "highlights": [
      "Authentisches Appenzeller Ambiente mit traditionellen Häusern",
      "Alpstein-Panorama mit Säntis-Blick",
      "Live-Auftritte der Appenzeller Streichmusik",
      "Käse-Verkostung direkt vom Produzenten",
      "Weihnachtsbaumverkauf mit lokalen Tannen"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "52",
    "slug": "villacher-adventmarkt",
    "name": "Villacher Adventmarkt",
    "city": "Villach",
    "address": "Hauptplatz, 9500 Villach, Österreich",
    "description": "Der Villacher Adventmarkt in Kärntens zweitgrößter Stadt begeistert mit südalpinem Flair. Umgeben von den Karawanken und der warmen Kärntner Gastfreundschaft bietet er eine entspannte Weihnachtsatmosphäre mit italienischen und slowenischen Einflüssen.",
    "openingDates": "23.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 10-19 Uhr, Fr-Sa 10-20 Uhr, So 10-19 Uhr, 24.12. 10-14 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Kärntner Kasnudeln",
      "Feuerzangenbowle",
      "Reindling",
      "Speck",
      "Alpe-Adria-Spezialitäten"
    ],
    "website": "https://villach.at/adventmarkt",
    "phone": "+43 4242 205100",
    "email": "adventmarkt@villach.at",
    "transport": "ÖBB: Bahnhof Villach, Stadtbus: Linien 1, 2 bis Hauptplatz",
    "highlights": [
      "Alpe-Adria-Region mit italienischen und slowenischen Einflüssen",
      "Kärntner Volksmusik jeden Donnerstag 18 Uhr",
      "Mehrsprachige Atmosphäre (Deutsch, Italienisch, Slowenisch)",
      "Handwerkskunst aus drei Ländern",
      "Weihnachtsbaumbeleuchtung am 1. Advent um 17 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "53",
    "slug": "zuercher-christkindlimarkt",
    "name": "Zürcher Christkindlimärt",
    "city": "Zürich",
    "address": "Hauptbahnhof/Niederdorf, 8001 Zürich, Schweiz",
    "description": "Der traditionelle Zürcher Christkindlimärt verwandelt die Bahnhofshalle und das historische Niederdorf in ein festliches Weihnachtswunderland. Als größter Indoor-Weihnachtsmarkt der Schweiz bietet er eine einzigartige Atmosphäre mit über 160 liebevoll dekorierten Ständen und Schweizer Spezialitäten.",
    "openingDates": "22.11.2025 - 24.12.2025",
    "openingHours": "Mo-Sa 11-22 Uhr, So 11-20 Uhr, 24.12: 11-17 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Zürcher Läckerli",
      "Heisser Wii",
      "Raclette",
      "Schweizer Schokolade",
      "Handgemachte Uhren"
    ],
    "website": "https://christkindlimaerkt.ch",
    "phone": "+41 44 2151515",
    "email": "info@christkindlimaerkt.ch",
    "transport": "S-Bahn: S2-S24 bis Zürich HB, Tram: 3, 4, 6, 7, 10, 11, 13 bis Hauptbahnhof",
    "highlights": [
      "Spektakulärer 15m Swarovski-Kristall-Weihnachtsbaum in der Bahnhofshalle",
      "Traditionelle Schweizer Alphornbläser täglich 18 Uhr",
      "Zürcher Samichlaus-Besuche für Kinder jeden Samstag 15 Uhr",
      "Live-Schokoladen-Herstellung in der Confiserie-Werkstatt",
      "Weihnachtlicher Jodler-Chor jeden Freitag 19 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "54",
    "slug": "strasbourg-christkindelsmaerik",
    "name": "Christkindelsmärik Strasbourg",
    "city": "Strasbourg",
    "address": "Place Kléber/Place de la Cathédrale, 67000 Strasbourg",
    "description": "Der berühmte Straßburger Christkindelsmärik ist einer der ältesten und schönsten Weihnachtsmärkte Frankreichs. Als 'Capitale de Noël' bietet Straßburg mit über 300 Ständen eine einzigartige Mischung aus französischer Eleganz und elsässischer Tradition vor gotischer Kathedralkulisse.",
    "openingDates": "22.11.2025 - 30.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vin chaud",
      "Bredele",
      "Foie gras",
      "Choucroute",
      "Kougelhopf"
    ],
    "website": "https://noel.strasbourg.eu",
    "phone": "+33 3 88 52 28 28",
    "email": "christkindelsmaerik@strasbourg.eu",
    "transport": "Tram: Ligne A, D bis Langstross-Grand'Rue, Bus: 10, 70 bis Place Kléber",
    "highlights": [
      "Ältester Weihnachtsmarkt Frankreichs (seit 1570)",
      "30-Meter Weihnachtsbaum auf der Place Kléber",
      "Gotische Kathedrale mit berühmter astronomischer Uhr",
      "Europäisches Parlament Weihnachtskonzerte",
      "Elsässer Traditions-Workshops täglich 15-17 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "55",
    "slug": "lyoner-marche-de-noel-bellecour",
    "name": "Marché de Noël Place Bellecour",
    "city": "Lyon",
    "address": "Place Bellecour, 69002 Lyon",
    "description": "Der elegante Lyoner Weihnachtsmarkt auf Europas größtem Fußgängerplatz bietet französische Raffinesse und Gastronomie-Hauptstadt-Flair. Als UNESCO-Welterbe-Stadt vereint Lyon kulinarische Tradition mit festlicher Atmosphäre zwischen Rhône und Saône.",
    "openingDates": "20.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vin chaud",
      "Saucisson de Lyon",
      "Pralines roses",
      "Lyonnaise Spezialitäten",
      "Beaujolais"
    ],
    "website": "https://marchenoel.lyon.fr",
    "phone": "+33 4 72 77 69 69",
    "email": "noel@lyon.fr",
    "transport": "Métro: Ligne A bis Bellecour, Tram: T1, T2 bis Bellecour, Bus: C3, C14",
    "highlights": [
      "Europas größter Fußgängerplatz als Marktplatz",
      "UNESCO-Welterbe Renaissance-Vieux Lyon als Kulisse",
      "Lyoner Gastronomie-Hauptstadt Spezialitäten",
      "Fête des Lumières Vorbereitung (8. Dezember)",
      "Rhône und Saône Fluss-Panorama"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "56",
    "slug": "luxemburger-winterlights",
    "name": "Luxemburger Winterlights",
    "city": "Luxembourg City",
    "address": "Place d'Armes/Place Guillaume II, 2011 Luxembourg",
    "description": "Der Luxemburger Winterlights Weihnachtsmarkt im Herzen der Hauptstadt verbindet französische Eleganz mit deutscher Gemütlichkeit. Vor der Kulisse des Großherzoglichen Palastes bietet er internationale Spezialitäten und luxemburgische Traditionen in mehrsprachiger Atmosphäre.",
    "openingDates": "22.11.2025 - 06.01.2026",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vin chaud",
      "Gromperekichelcher",
      "Quetschentaart",
      "Luxemburger Kachkéis",
      "Internationale Delikatessen"
    ],
    "website": "https://lcto.lu/winterlights",
    "phone": "+352 22 28 09",
    "email": "winterlights@lcto.lu",
    "transport": "Bus: Linie 16, 18 bis Place d'Armes, Tram: bis Hamilius",
    "highlights": [
      "Mehrsprachiger Markt (Lëtzebuergesch, Französisch, Deutsch)",
      "Großherzogliche Palast-Kulisse mit Beleuchtung",
      "Internationale Küche aus über 15 Ländern",
      "Luxemburger Blasmusik jeden Samstag 18 Uhr",
      "EU-Weihnachtstraditions-Präsentation täglich"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "57",
    "slug": "esch-weihnachtsmarkt",
    "name": "Escher Weihnachtsmarkt",
    "city": "Esch-sur-Alzette",
    "address": "Place de la Résistance, 4024 Esch-sur-Alzette",
    "description": "Der Escher Weihnachtsmarkt in Luxemburgs zweitgrößter Stadt bietet eine familiäre Atmosphäre mit starken industriellen Wurzeln. Als Teil der Kulturhauptstadt-Region 2022 verbindet er Tradition mit moderner Kultur im Süden Luxemburgs.",
    "openingDates": "28.11.2025 - 29.12.2025",
    "openingHours": "Mo-Fr 16-21 Uhr, Sa-So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Bouneschlupp",
      "Vin chaud",
      "Gehaktsbällchen",
      "Luxemburger Bier",
      "Regionale Produkte"
    ],
    "website": "https://esch.lu/weihnachtsmarkt",
    "phone": "+352 54 16 37",
    "email": "weihnachtsmarkt@esch.lu",
    "transport": "Zug: CFL bis Esch/Alzette, Bus: Linie 1, 2 bis Résistance",
    "highlights": [
      "Familiärer Weihnachtsmarkt mit persönlicher Atmosphäre",
      "Luxemburger Minett-Kulturgut und Industriegeschichte",
      "Live-Jazz und Blues-Konzerte jeden Freitag 19 Uhr",
      "Kinderworkshops jeden Sonntag 14-16 Uhr",
      "Grenznahe Spezialitäten aus Frankreich und Belgien"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "58",
    "slug": "bruegger-weihnachtsmarkt",
    "name": "Brügger Weihnachtsmarkt",
    "city": "Brügge",
    "address": "Grote Markt/Burg, 8000 Brügge",
    "description": "Der Brügger Weihnachtsmarkt in der UNESCO-Welterbe Stadt ist ein mittelalterliches Märchenland. Zwischen den gotischen Zunfthäusern und dem berühmten Belfried bietet er belgische Schokolade, Bier und Spitzenhandwerk in romantischer Kanalstadt-Atmosphäre.",
    "openingDates": "24.11.2025 - 05.01.2026",
    "openingHours": "Mo-Do 11-19 Uhr, Fr-So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Belgische Schokolade",
      "Glühwein",
      "Belgische Waffeln",
      "Brügger Bier",
      "Spitzenhandwerk"
    ],
    "website": "https://visitbruges.be/weihnachtsmarkt",
    "phone": "+32 50 44 46 46",
    "email": "weihnachtsmarkt@visitbruges.be",
    "transport": "Zug: NMBS bis Brügge, Bus: De Lijn bis Markt",
    "highlights": [
      "UNESCO-Welterbe mittelalterliche Altstadt als Kulisse",
      "Belgische Chocolatiers mit Live-Vorführungen",
      "Brügger Belfried-Glockenkonzerte täglich 14 und 17 Uhr",
      "Kanalrundfahrten mit Weihnachtsbeleuchtung",
      "Flämische Spitzenklöppel-Demonstrationen"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "59",
    "slug": "genter-winterfeesten",
    "name": "Genter Winterfeesten",
    "city": "Gent",
    "address": "Sint-Baafsplein/Korenmarkt, 9000 Gent",
    "description": "Die Genter Winterfeesten vor der imposanten Sint-Baafskathedraal bieten eine lebendige flämische Weihnachtstradition. Mit über 100 Ständen rund um die historischen Zunfthäuser verbindet der Markt belgische Gemütlichkeit mit internationaler Vielfalt.",
    "openingDates": "18.12.2025 - 05.01.2026",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Gentse Waterzooi",
      "Belgisches Bier",
      "Cuberdons",
      "Glühwein",
      "Flämische Spezialitäten"
    ],
    "website": "https://visit.gent.be/winterfeesten",
    "phone": "+32 9 266 56 60",
    "email": "winterfeesten@visit.gent.be",
    "transport": "Zug: NMBS bis Gent-Sint-Pieters, Tram: De Lijn bis Korenmarkt",
    "highlights": [
      "Sint-Baafskathedraal mit Van Eyck-Altar als Kulisse",
      "Genter Lichtfestival parallel zum Weihnachtsmarkt",
      "Belgische Bier-Verkostung mit über 50 Sorten",
      "Flämischer Chor-Gesang jeden Sonntag 16 Uhr",
      "Silvester-Party mit Live-Bands auf 3 Bühnen"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "60",
    "slug": "antwerpen-winterwonderland",
    "name": "Antwerpen Winter Wonderland",
    "city": "Antwerpen",
    "address": "Grote Markt/Groenplaats, 2000 Antwerpen",
    "description": "Das Antwerpen Winter Wonderland vor der Liebfrauenkathedrale und dem Renaissance-Rathaus ist Belgiens größter Weihnachtsmarkt. Mit über 150 Ständen, einer Eisbahn und Riesenrad bietet er eine komplette Winterwelt im Herzen der Diamantenstadt.",
    "openingDates": "08.12.2025 - 06.01.2026",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Antwerpse Handjes",
      "Belgische Pralinen",
      "Diamanten-Schmuck",
      "Glühwein",
      "Internationale Küche"
    ],
    "website": "https://visitantwerpen.be/winterwonderland",
    "phone": "+32 3 232 01 03",
    "email": "winterwonderland@visitantwerpen.be",
    "transport": "Zug: NMBS bis Antwerpen-Centraal, Tram: De Lijn bis Groenplaats",
    "highlights": [
      "Größter Weihnachtsmarkt Belgiens mit Eisbahn und Riesenrad",
      "Liebfrauenkathedrale mit Rubens-Gemälden als Kulisse",
      "Antwerpener Diamanten-Schmuck-Ateliers",
      "Belgische Pralineurs mit Live-Schokoladen-Shows",
      "Winter-Terrassen mit Hafenblick"
    ],
    "entryPrice": "Eintritt frei, Attraktionen kostenpflichtig"
  },
  {
    "id": "61",
    "slug": "prager-weihnachtsmaerkte",
    "name": "Prager Weihnachtsmärkte",
    "city": "Prag",
    "address": "Altstädter Ring/Wenzelsplatz, 110 00 Prag",
    "description": "Die Prager Weihnachtsmärkte gehören zu den schönsten Europas. Vor der Kulisse der gotischen Teynkirche und des berühmten Rathauses mit der astronomischen Uhr bieten sie böhmische Traditionen, Kristallglas und kulinarische Spezialitäten der Goldenen Stadt.",
    "openingDates": "30.11.2025 - 06.01.2026",
    "openingHours": "Mo-So 10-22 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Svařák (Glühwein)",
      "Trdelník",
      "Böhmisches Kristallglas",
      "Pražská šunka",
      "Lebkuchen"
    ],
    "website": "https://prague.eu/weihnachtsmaerkte",
    "phone": "+420 221 714 444",
    "email": "weihnachtsmaerkte@prague.eu",
    "transport": "Metro: Linie A bis Staroměstská, Tram: 17, 18 bis Staroměstská",
    "highlights": [
      "Astronomische Uhr mit stündlichem Figurenspiel",
      "Böhmisches Kristallglas und Granate als Weihnachtsschmuck",
      "Traditionelle tschechische Marionetten-Theater",
      "Moldau-Weihnachtsschifffahrten mit Glühwein",
      "Prager Philharmonie-Konzerte in der Teynkirche"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "62",
    "slug": "budapester-weihnachtsmarkt",
    "name": "Budapester Weihnachtsmarkt",
    "city": "Budapest",
    "address": "Vörösmarty tér, 1051 Budapest",
    "description": "Der Budapester Weihnachtsmarkt am Vörösmarty tér ist der größte und schönste Ungarns. Vor der prächtigen Kulisse der Donau-Metropole bietet er ungarische Spezialitäten, Kunsthandwerk und die berühmte Weihnachtsbaumbeleuchtung mit über 100.000 Lichtern.",
    "openingDates": "08.11.2025 - 06.01.2026",
    "openingHours": "Mo-So 10-22 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Glögg",
      "Kürtőskalács",
      "Ungarische Salamis",
      "Tokajer Wein",
      "Paprika-Produkte"
    ],
    "website": "https://budapestinfo.hu/weihnachtsmarkt",
    "phone": "+36 1 438 8080",
    "email": "weihnachtsmarkt@budapestinfo.hu",
    "transport": "Metro: M1 bis Vörösmarty tér, Bus: 16, 105 bis Vörösmarty tér",
    "highlights": [
      "Größter Weihnachtsmarkt Ungarns mit über 100 Ständen",
      "Spektakuläre Donau-Kulisse mit Parlamentsblick",
      "Ungarische Volksmusik und Csárdás-Tänze täglich 18 Uhr",
      "Tokajer Wein-Verkostung in historischen Kellern",
      "Silvester-Feuerwerk über der Donau"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "63",
    "slug": "warschauer-weihnachtsmarkt",
    "name": "Warschauer Weihnachtsmarkt",
    "city": "Warschau",
    "address": "Rynek Starego Miasta, 00-272 Warschau",
    "description": "Der Warschauer Weihnachtsmarkt in der rekonstruierten Altstadt (UNESCO-Welterbe) bietet polnische Traditionen vor historischer Kulisse. Mit über 80 Ständen rund um die bunten Bürgerhäuser vereint er slawische Weihnachtsbräuche mit moderner europäischer Atmosphäre.",
    "openingDates": "29.11.2025 - 06.01.2026",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-So 10-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Grzane wino",
      "Pierogi",
      "Oscypek-Käse",
      "Makowiec",
      "Polnisches Bernsteinhandwerk"
    ],
    "website": "https://warsawtour.pl/weihnachtsmarkt",
    "phone": "+48 22 19431",
    "email": "weihnachtsmarkt@warsawtour.pl",
    "transport": "Metro: M1 bis Ratusz Arsenał, Bus: 175, 180 bis Stare Miasto",
    "highlights": [
      "UNESCO-Welterbe Altstadt als authentische Kulisse",
      "Polnische Bernstein-Schmuckwerkstätten",
      "Traditionelle Pierogi-Kochkurse jeden Samstag",
      "Weihnachtskrippen-Ausstellung mit Szopkas",
      "Weichsel-Weihnachtsschifffahrten mit polnischen Liedern"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "64",
    "slug": "krakauer-weihnachtsmarkt",
    "name": "Krakauer Weihnachtsmarkt",
    "city": "Krakau",
    "address": "Hauptmarkt (Rynek Główny), 31-042 Krakau",
    "description": "Der Krakauer Weihnachtsmarkt auf dem größten mittelalterlichen Marktplatz Europas ist ein magisches Erlebnis. Vor der Kulisse der Marienkirche und der Tuchhallen bietet er polnische Traditionen, Handwerk und Kulinarik in einer der schönsten Städte Europas.",
    "openingDates": "24.11.2025 - 26.12.2025",
    "openingHours": "Mo-So 10-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Grzane wino",
      "Kielbasa",
      "Obwarzanek",
      "Krakauer Lebkuchen",
      "Salzbergwerk-Souvenirs"
    ],
    "website": "https://krakow.pl/weihnachtsmarkt",
    "phone": "+48 12 417 58 10",
    "email": "weihnachtsmarkt@krakow.pl",
    "transport": "Tram: 1, 8, 18 bis Teatr Bagatela, Bus: 124, 152 bis Plac Wszystkich Świętych",
    "highlights": [
      "Größter mittelalterlicher Marktplatz Europas als Kulisse",
      "Marienkirche mit berühmtem Hejnał-Trompetensignal stündlich",
      "Krakauer Szopka-Weihnachtskrippen-Wettbewerb",
      "Traditionelle polnische Weihnachtslieder-Konzerte",
      "Wawel-Schloss Weihnachtsbeleuchtung als Hintergrund"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "65",
    "slug": "amsterdamer-winter-wonderland",
    "name": "Amsterdamer Winter Wonderland",
    "city": "Amsterdam",
    "address": "Museumplein/Leidseplein, 1071 Amsterdam",
    "description": "Das Amsterdamer Winter Wonderland kombiniert traditionelle niederländische Gemütlichkeit mit internationaler Vielfalt. Zwischen Rijksmuseum und Van Gogh Museum bietet es eine einzigartige Kunststadt-Atmosphäre mit Grachten-Romantik und holländischen Spezialitäten.",
    "openingDates": "16.12.2025 - 19.01.2026",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Oliebollen",
      "Glühwein",
      "Holländischer Käse",
      "Stroopwafels",
      "Erwtensoep"
    ],
    "website": "https://amsterdam.nl/winter-wonderland",
    "phone": "+31 20 702 6000",
    "email": "winter-wonderland@amsterdam.nl",
    "transport": "Tram: 2, 5, 12 bis Van Baerlestraat, Metro: 52 bis De Pijp",
    "highlights": [
      "Kunststadt-Atmosphäre zwischen Weltklasse-Museen",
      "Grachten-Rundfahrten mit Weihnachtsbeleuchtung",
      "Holländische Käse-Verkostung mit over 50 Sorten",
      "Amsterdam Light Festival parallel zum Wintermarkt",
      "Eislaufbahn vor dem Rijksmuseum"
    ],
    "entryPrice": "Eintritt frei, Attraktionen kostenpflichtig"
  },
  {
    "id": "66",
    "slug": "maastrichter-magical-maastricht",
    "name": "Magical Maastricht",
    "city": "Maastricht",
    "address": "Vrijthof/Markt, 6211 Maastricht",
    "description": "Magical Maastricht ist einer der schönsten Weihnachtsmärkte der Niederlande. Vor der Kulisse der Sankt-Servatius-Basilika und historischen Gebäude bietet er limburgische Spezialitäten und internationale Atmosphäre im Dreiländereck zu Deutschland und Belgien.",
    "openingDates": "10.12.2025 - 03.01.2026",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 12-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Glühwein",
      "Limburgse vlaai",
      "Zoervleis",
      "Duitse specialiteiten",
      "Belgische pralines"
    ],
    "website": "https://vvvmaastricht.nl/magical-maastricht",
    "phone": "+31 43 325 2121",
    "email": "magical-maastricht@vvvmaastricht.nl",
    "transport": "Zug: NS bis Maastricht, Bus: Arriva 1, 5 bis Vrijthof",
    "highlights": [
      "Dreiländereck-Spezialitäten aus NL, D und B",
      "Sankt-Servatius-Basilika als romanische Kulisse",
      "Limburgsche Koor-Konzerte jeden Sonntag 16 Uhr",
      "Maas-Weihnachtsschifffahrten zu drei Ländern",
      "Ondergrondse (Katakomben) Weihnachts-Führungen"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "67",
    "slug": "pariser-weihnachtsmarkt-champs-elysees",
    "name": "Marché de Noël des Champs-Élysées",
    "city": "Paris",
    "address": "Avenue des Champs-Élysées, 75008 Paris",
    "description": "Der prestigeträchtige Weihnachtsmarkt auf der berühmtesten Straße der Welt bietet französische Eleganz und Savoir-vivre. Mit über 160 Chalets erstreckt er sich von der Place de la Concorde bis zum Arc de Triomphe und vereint Pariser Chic mit Weihnachtszauber.",
    "openingDates": "17.11.2025 - 07.01.2026",
    "openingHours": "Mo-Do 11-22 Uhr, Fr-Sa 11-23 Uhr, So 11-22 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vin chaud",
      "Crêpes",
      "Foie gras",
      "Französische Patisserie",
      "Champagner"
    ],
    "website": "https://noel.paris.fr",
    "phone": "+33 1 49 52 42 63",
    "email": "marche.noel@paris.fr",
    "transport": "Métro: Linie 1, 8, 12 bis Concorde, RER A bis Charles de Gaulle-Étoile",
    "highlights": [
      "Spektakuläre Beleuchtung der Champs-Élysées",
      "Grande Roue (Riesenrad) mit 360°-Blick über Paris",
      "Französische Gourmet-Verkostungen täglich 16-19 Uhr",
      "Haute Couture Weihnachtsschmuck aus Pariser Ateliers",
      "Silvesterfeier mit Feuerwerk am Arc de Triomphe"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "68",
    "slug": "londoner-winter-wonderland",
    "name": "Winter Wonderland Hyde Park",
    "city": "London",
    "address": "Hyde Park, W2 2UH London",
    "description": "Das größte Weihnachtsfestival Großbritanniens im Herzen Londons bietet eine magische Winterwelt mit über 200 Ständen, Fahrgeschäften und Shows. Das Winter Wonderland vereint deutsche Weihnachtstradition mit britischem Charme in einer spektakulären 6-Hektar-Anlage.",
    "openingDates": "21.11.2025 - 05.01.2026",
    "openingHours": "Mo-Do 10-22 Uhr, Fr-Sa 10-23 Uhr, So 10-22 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Mulled Wine",
      "Fish & Chips",
      "Mince Pies",
      "British Pudding",
      "Internationale Küche"
    ],
    "website": "https://hydeparkwinterwonderland.com",
    "phone": "+44 20 7298 2000",
    "email": "info@hydeparkwinterwonderland.com",
    "transport": "Underground: Central Line bis Marble Arch, Piccadilly Line bis Hyde Park Corner",
    "highlights": [
      "Größtes Riesenrad Londons mit Thames-Blick",
      "Magical Ice Kingdom mit -8°C Eispalast",
      "Zippos Circus mit täglichen Vorstellungen",
      "Queens Weihnachtsmarkt mit Royal Collection",
      "Silvester-Gala mit Feuerwerk über dem Hyde Park"
    ],
    "entryPrice": "Eintritt frei, Attraktionen kostenpflichtig"
  },
  {
    "id": "69",
    "slug": "kopenhagener-jul-paa-kongens-nytorv",
    "name": "Jul på Kongens Nytorv",
    "city": "København",
    "address": "Kongens Nytorv, 1050 København K",
    "description": "Der elegante Kopenhagener Weihnachtsmarkt auf dem königlichen Platz verbindet dänische Hygge mit skandinavischem Design. Vor der Kulisse des Königlichen Theaters bietet er nordische Gemütlichkeit und Design-Weihnachtsschmuck in königlicher Atmosphäre.",
    "openingDates": "18.11.2025 - 30.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Gløgg",
      "Æbleskiver",
      "Smørrebrød",
      "Dänisches Design",
      "Nordic Craft Beer"
    ],
    "website": "https://julmarked.kk.dk",
    "phone": "+45 33 66 25 82",
    "email": "julmarked@kk.dk",
    "transport": "Metro: M1, M2 bis Kongens Nytorv, Bus: 1A, 26 bis Holmens Kanal",
    "highlights": [
      "Königliches Theater als majestätische Kulisse",
      "Dänisches Design-Weihnachtsschmuck von lokalen Künstlern",
      "Hygge-Lounge mit Kaminfeuer und Fellen",
      "Nordische Lichtinstallationen nach dem Lagom-Prinzip",
      "Tivoli-Karussell im Vintage-Stil"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "70",
    "slug": "stockholmer-julmarknad-gamla-stan",
    "name": "Julmarknad Gamla Stan",
    "city": "Stockholm",
    "address": "Stortorget, 111 29 Stockholm",
    "description": "Der atmosphärische Stockholmer Weihnachtsmarkt in der mittelalterlichen Altstadt ist Skandinaviens schönster. Zwischen den bunten Patrizierhäusern am Stortorget bietet er schwedische Gemütlichkeit und nordisches Handwerk in märchenhafter Kulisse.",
    "openingDates": "19.11.2025 - 22.12.2025",
    "openingHours": "Mo-Fr 11-19 Uhr, Sa 10-20 Uhr, So 11-18 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Glögg",
      "Pepparkakor",
      "Köttbullar",
      "Schwedisches Kunsthandwerk",
      "Aquavit"
    ],
    "website": "https://julmarknad.stockholm.se",
    "phone": "+46 8 508 28 508",
    "email": "julmarknad@stockholm.se",
    "transport": "T-bana: Blå linjen bis Kungsträdgården, Grön linjen bis Gamla Stan",
    "highlights": [
      "Mittelalterliche Kulisse mit bunten Patrizierhäusern",
      "Nobelpreismuseum-Café mit Glögg-Spezialitäten",
      "Schwedische Folk-Musik jeden Samstag 16 Uhr",
      "Dalarna-Pferde Malerei-Workshop für Kinder",
      "Lucia-Fest am 13. Dezember mit Lichterprozession"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "71",
    "slug": "osloer-julemarked-spikersuppa",
    "name": "Julemarked Spikersuppa",
    "city": "Oslo",
    "address": "Spikersuppa, Karl Johans gate, 0154 Oslo",
    "description": "Der traditionelle Osloer Weihnachtsmarkt vor dem Nationaltheater ist Norwegens Hauptstadt-Highlight der Adventszeit. Mit dem berühmten Weihnachtsbaum aus den norwegischen Wäldern und Blick auf das Königliche Schloss bietet er nordische Weihnachtsromantik.",
    "openingDates": "25.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 12-19 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Gløgg",
      "Lefse",
      "Fårikål",
      "Norwegisches Kunsthandwerk",
      "Akevitt"
    ],
    "website": "https://julemarked.oslo.kommune.no",
    "phone": "+47 23 46 12 75",
    "email": "julemarked@oslo.kommune.no",
    "transport": "T-bane: Linje 1, 2, 3 bis Nationaltheatret, Bus: 30, 31, 54",
    "highlights": [
      "25-Meter Weihnachtsbaum aus norwegischen Wäldern",
      "Königliches Schloss als majestätische Kulisse",
      "Norwegische Folklore-Aufführungen jeden Freitag 18 Uhr",
      "Samische Handwerkskunst und Rentier-Produkte",
      "Polarlichter-Simulator für Kinder"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "72",
    "slug": "helsinkier-joulumarkkinat-senaatintori",
    "name": "Joulumarkkinat Senaatintori",
    "city": "Helsinki",
    "address": "Senaatintori, 00170 Helsinki",
    "description": "Der festliche Helsinkier Weihnachtsmarkt auf dem Senatsplatz vor dem majestätischen Dom bietet finnische Sisu-Atmosphäre. Als nördlichster Weihnachtsmarkt Europas vereint er skandinavische Gemütlichkeit mit finnischer Sauna-Kultur und Designtradition.",
    "openingDates": "01.12.2025 - 20.12.2025",
    "openingHours": "Mo-Do 11-19 Uhr, Fr-Sa 11-20 Uhr, So 12-18 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Glögi",
      "Karjalanpiirakka",
      "Ruisleipä",
      "Finnisches Design",
      "Koskenkorva"
    ],
    "website": "https://joulumarkkinat.hel.fi",
    "phone": "+358 9 310 1641",
    "email": "joulumarkkinat@hel.fi",
    "transport": "Metro: M1 bis Helsingin yliopisto, Raitiovaunu: 1, 2, 3 bis Senaatintori",
    "highlights": [
      "Helsinkier Dom als spektakuläre neoklassizistische Kulisse",
      "Finnische Sauna-Hütte für authentisches Erlebnis",
      "Marimekko und Iittala Design-Weihnachtsschmuck",
      "Rentier-Schlitten aus Lappland jeden Samstag",
      "Nordlicht-Lichtshow täglich 17-19 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "73",
    "slug": "roemischer-mercatino-piazza-navona",
    "name": "Mercatino di Natale Piazza Navona",
    "city": "Roma",
    "address": "Piazza Navona, 00186 Roma",
    "description": "Der traditionelle römische Weihnachtsmarkt auf der berühmten Piazza Navona vor Berninis Fontana dei Quattro Fiumi bietet italienische Weihnachtskultur mit südlichem Flair. Zwischen barocken Palästen und Kirchen vereint er römische Storia mit weihnachtlicher Magia.",
    "openingDates": "08.12.2025 - 06.01.2026",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-22 Uhr, So 10-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vin brulé",
      "Panettone",
      "Torrone",
      "Italienische Patisserie",
      "Prosecco"
    ],
    "website": "https://mercatinonatale.roma.it",
    "phone": "+39 06 0608",
    "email": "mercatino@roma.it",
    "transport": "Metro: Linie A bis Spagna, Bus: 70, 81, 87, 492 bis Corso del Rinascimento",
    "highlights": [
      "Berninis barocke Fontana dei Quattro Fiumi als Zentrum",
      "Römische Krippen-Tradition (Presepe) mit Live-Darstellungen",
      "Italienische Opera-Aufführungen jeden Sonntag 18 Uhr",
      "Epiphanie-Fest (La Befana) am 6. Januar",
      "Vatikan-Blick und Petersdom-Beleuchtung"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "74",
    "slug": "mailaender-mercatini-castello-sforzesco",
    "name": "Mercatini di Natale Castello Sforzesco",
    "city": "Milano",
    "address": "Piazza Castello, 20121 Milano",
    "description": "Der elegante Mailänder Weihnachtsmarkt vor dem imposanten Castello Sforzesco verbindet lombardische Tradition mit internationalem Design-Flair. Als Mode- und Designhauptstadt bietet Mailand einen der stilvollsten Weihnachtsmärkte Italiens mit Premium-Qualität.",
    "openingDates": "25.11.2025 - 07.01.2026",
    "openingHours": "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 10-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vin brulé",
      "Panettone milanese",
      "Risotto",
      "Design-Artikel",
      "Aperitivo natalizio"
    ],
    "website": "https://mercatinimilano.it",
    "phone": "+39 02 8845 5555",
    "email": "mercatini@milano.it",
    "transport": "Metro: Linie M1 bis Cairoli, M2 bis Lanza, Tram: 1, 2, 4, 12, 14",
    "highlights": [
      "Castello Sforzesco als majestätische Renaissance-Kulisse",
      "Mailänder Design-Weihnachtsschmuck von lokalen Ateliers",
      "Modenschau mit Weihnachts-Kollektionen jeden Samstag",
      "Lombardische Käse- und Wein-Degustation täglich 17-19 Uhr",
      "La Scala Opern-Aufführungen im Weihnachtsprogramm"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "75",
    "slug": "barcelonaer-mercat-santa-llucia",
    "name": "Mercat de Santa Llúcia",
    "city": "Barcelona",
    "address": "Plaça de la Seu, 08002 Barcelona",
    "description": "Der älteste Weihnachtsmarkt Spaniens vor der gotischen Kathedrale von Barcelona bietet katalanische Weihnachtstradition seit 1786. Mit über 280 Ständen rund um die imposante Kathedrale vereint er mediterrane Wärme mit gotischer Pracht und katalanischer Kultur.",
    "openingDates": "23.11.2025 - 23.12.2025",
    "openingHours": "Mo-So 10-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vi calent",
      "Turró",
      "Neules",
      "Caganer",
      "Katalanische Spezialitäten"
    ],
    "website": "https://mercatsantallucia.barcelona.cat",
    "phone": "+34 93 285 38 32",
    "email": "mercat@barcelona.cat",
    "transport": "Metro: Linie L4 bis Jaume I, L3 bis Liceu, Bus: V13, V15, 45",
    "highlights": [
      "Ältester Weihnachtsmarkt Spaniens (seit 1786)",
      "Gotische Kathedrale als spektakuläre Kulisse",
      "Katalanische Caganer und Tió de Nadal Traditionen",
      "Sardana-Tänze jeden Sonntag 12 Uhr",
      "Els Tres Reis (Heilige Drei Könige) am 6. Januar"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "76",
    "slug": "madrider-mercado-navidad-plaza-mayor",
    "name": "Mercado Navideño Plaza Mayor",
    "city": "Madrid",
    "address": "Plaza Mayor, 28012 Madrid",
    "description": "Der traditionelle Madrider Weihnachtsmarkt auf der berühmten Plaza Mayor ist Spaniens wichtigster Weihnachtsmarkt. Seit 1860 bietet er in der prächtigen Kulisse der Habsburg-Architektur kastilische Weihnachtstradition und spanische Lebensfreude im Herzen der Hauptstadt.",
    "openingDates": "29.11.2025 - 31.12.2025",
    "openingHours": "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vino caliente",
      "Turrón",
      "Polvorones",
      "Castañas asadas",
      "Jamón ibérico"
    ],
    "website": "https://mercadonavidad.madrid.es",
    "phone": "+34 91 588 16 36",
    "email": "mercado@madrid.es",
    "transport": "Metro: Linie L1, L2, L3 bis Sol, Bus: 3, 17, 18, 23, 31",
    "highlights": [
      "Traditioneller Markt seit 1860 mit historischer Bedeutung",
      "Habsburg-Architektur der Plaza Mayor als Kulisse",
      "Spanische Lotería de Navidad (Weihnachtslotterie) Verkauf",
      "Flamenco-Aufführungen jeden Freitag 19 Uhr",
      "Campanadas de Fin de Año (Silvester-Glocken) Vorbereitung"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "77",
    "slug": "lissaboner-mercado-natal-rossio",
    "name": "Mercado de Natal do Rossio",
    "city": "Lisboa",
    "address": "Praça Dom Pedro IV (Rossio), 1100-200 Lisboa",
    "description": "Der charmante Lissaboner Weihnachtsmarkt auf dem historischen Rossio-Platz bietet portugiesische Weihnachtstradition mit atlantischem Flair. Vor der Kulisse des Nationaltheaters Dona Maria II und mit Blick auf die Hügel Lissabons vereint er Saudade mit festlicher Stimmung.",
    "openingDates": "01.12.2025 - 06.01.2026",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-22 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vinho quente",
      "Bolo Rei",
      "Pastéis de nata",
      "Chouriço",
      "Vinho do Porto"
    ],
    "website": "https://mercadonatal.lisboa.pt",
    "phone": "+351 21 358 92 00",
    "email": "natal@lisboa.pt",
    "transport": "Metro: Linha Azul/Verde bis Rossio, Tram: 28, Bus: 207, 711, 732",
    "highlights": [
      "Historischer Rossio-Platz mit charakteristischen Wellenmuster",
      "Nationaltheater Dona Maria II als neoklassizistische Kulisse",
      "Portugiesische Fado-Konzerte jeden Donnerstag 20 Uhr",
      "Janeiras (Neujahrssingen) Tradition am 1. Januar",
      "Elevador de Santa Justa Blick über Lissabon"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "78",
    "slug": "dubliner-christmas-market-stephens-green",
    "name": "Christmas Market St. Stephen's Green",
    "city": "Dublin",
    "address": "St. Stephen's Green, Dublin 2, Irland",
    "description": "Der lebendige Dubliner Weihnachtsmarkt im berühmten St. Stephen's Green Park bietet irische Gemütlichkeit und keltischen Charme. Inmitten der georgianischen Architektur und mit Blick auf das Grün des Parks vereint er irische Traditionen mit internationalem Weihnachtsflair.",
    "openingDates": "24.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 12-19 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Mulled Wine",
      "Irish Stew",
      "Mince Pies",
      "Guinness",
      "Irish Whiskey"
    ],
    "website": "https://christmasmarket.dublin.ie",
    "phone": "+353 1 222 5324",
    "email": "christmas@dublin.ie",
    "transport": "Luas: Green Line bis St. Stephen's Green, Bus: 4, 7, 8, 11, 13",
    "highlights": [
      "Georgianische Architektur als elegante Kulisse",
      "Irische Celtic Music jeden Freitag 18 Uhr",
      "Dublin Writers Museum Weihnachts-Lesungen",
      "Trinity College Christmas Carol Service",
      "Irish Dance Aufführungen jeden Samstag"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "79",
    "slug": "edinburgher-christmas-market-princes-street",
    "name": "Edinburgh Christmas Market",
    "city": "Edinburgh",
    "address": "Princes Street Gardens, EH2 2HG Edinburgh",
    "description": "Der spektakuläre Edinburgher Weihnachtsmarkt in den Princes Street Gardens vor der Kulisse des Edinburgh Castle bietet schottische Traditionen mit königlichem Flair. Zwischen der Old Town und New Town vereint er Highland-Kultur mit Weihnachtszauber in einzigartiger Atmosphäre.",
    "openingDates": "16.11.2025 - 04.01.2026",
    "openingHours": "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 10-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Mulled Wine",
      "Haggis",
      "Shortbread",
      "Scottish Whisky",
      "Tablet"
    ],
    "website": "https://edinburghschristmas.com",
    "phone": "+44 131 473 2000",
    "email": "christmas@edinburgh.gov.uk",
    "transport": "Bus: 3, 4, 15, 22, 25, 33 bis Princes Street, Tram: bis West End",
    "highlights": [
      "Edinburgh Castle als majestätische Kulisse",
      "Schottische Bagpiper täglich 17 Uhr",
      "Royal Mile Walking Tours mit Weihnachtsthema",
      "Hogmanay (Silvester) Vorbereitungen und Tickets",
      "Scottish Highland Games Demonstrationen"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "80",
    "slug": "strassburger-christkindelsmaerik",
    "name": "Christkindelsmärik Strasbourg",
    "city": "Strasbourg",
    "address": "Place Kléber/Place de la Cathédrale, 67000 Strasbourg",
    "description": "Der berühmte Straßburger Christkindelsmärik ist einer der ältesten und schönsten Weihnachtsmärkte Frankreichs. Als 'Capitale de Noël' bietet Straßburg mit über 300 Ständen eine einzigartige Mischung aus französischer Eleganz und elsässischer Tradition vor gotischer Kathedralkulisse.",
    "openingDates": "22.11.2025 - 30.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vin chaud",
      "Bredele",
      "Foie gras",
      "Choucroute",
      "Kougelhopf"
    ],
    "website": "https://noel.strasbourg.eu",
    "phone": "+33 3 88 52 28 28",
    "email": "christkindelsmaerik@strasbourg.eu",
    "transport": "Tram: Ligne A, D bis Langstross-Grand'Rue, Bus: 10, 70 bis Place Kléber",
    "highlights": [
      "Ältester Weihnachtsmarkt Frankreichs (seit 1570)",
      "30-Meter Weihnachtsbaum auf der Place Kléber",
      "Gotische Kathedrale mit berühmter astronomischer Uhr",
      "Europäisches Parlament Weihnachtskonzerte",
      "Elsässer Traditions-Workshops täglich 15-17 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "81",
    "slug": "lyoner-marche-noel-bellecour",
    "name": "Marché de Noël Place Bellecour",
    "city": "Lyon",
    "address": "Place Bellecour, 69002 Lyon",
    "description": "Der elegante Lyoner Weihnachtsmarkt auf Europas größtem Fußgängerplatz bietet französische Raffinesse und Gastronomie-Hauptstadt-Flair. Als UNESCO-Welterbe-Stadt vereint Lyon kulinarische Tradition mit festlicher Atmosphäre zwischen Rhône und Saône.",
    "openingDates": "20.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Vin chaud",
      "Saucisson de Lyon",
      "Pralines roses",
      "Lyonnaise Spezialitäten",
      "Beaujolais"
    ],
    "website": "https://marchenoel.lyon.fr",
    "phone": "+33 4 72 77 69 69",
    "email": "noel@lyon.fr",
    "transport": "Métro: Ligne A bis Bellecour, Tram: T1, T2 bis Bellecour, Bus: C3, C14",
    "highlights": [
      "Europas größter Fußgängerplatz als Marktplatz",
      "UNESCO-Welterbe Renaissance-Vieux Lyon als Kulisse",
      "Lyoner Gastronomie-Hauptstadt Spezialitäten",
      "Fête des Lumières Vorbereitung (8. Dezember)",
      "Rhône und Saône Fluss-Panorama"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "82",
    "slug": "freiburger-weihnachtsmarkt",
    "name": "Freiburger Weihnachtsmarkt",
    "city": "Freiburg im Breisgau",
    "address": "Rathausplatz/Münsterplatz, 79098 Freiburg",
    "description": "Der zauberhafte Freiburger Weihnachtsmarkt vor dem gotischen Münster ist einer der schönsten Weihnachtsmärkte im Schwarzwald. Mit über 120 Ständen und der besonderen Atmosphäre der historischen Altstadt bietet er badische Gemütlichkeit und regionale Spezialitäten.",
    "openingDates": "20.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Feuerzangenbowle",
      "Schwarzwälder Kirschtorte",
      "Spätzle",
      "Badische Weine",
      "Kunsthandwerk"
    ],
    "website": "https://freiburg.de/weihnachtsmarkt",
    "phone": "+49 761 201 3001",
    "email": "weihnachtsmarkt@freiburg.de",
    "transport": "Straßenbahn: Linien 1, 3, 5 bis Bertoldsbrunnen, Bus: 11, 27 bis Münsterplatz",
    "highlights": [
      "Gotisches Freiburger Münster als beeindruckende Kulisse",
      "Schwarzwälder Handwerk-Demonstrationen täglich 14-18 Uhr",
      "Münstermarkt mit regionalen Produkten jeden Samstag",
      "Weihnachtliches Bächle-Schmücken mit Lichtern",
      "Badische Wein-Verkostungen jeden Donnerstag 18 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "83",
    "slug": "regensburger-weihnachtsmarkt",
    "name": "Regensburger Weihnachtsmarkt",
    "city": "Regensburg",
    "address": "Neupfarrplatz/Haidplatz, 93047 Regensburg",
    "description": "Der Regensburger Weihnachtsmarkt in der UNESCO-Welterbestadt verzaubert mit mittelalterlichem Flair vor der Kulisse des gotischen Doms. Die historische Altstadt bietet eine einzigartige Atmosphäre mit über 50 liebevoll dekorierten Ständen.",
    "openingDates": "27.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr, 24.12. 10-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Regensburger Bratwurst",
      "Glühwein",
      "Lebkuchen",
      "Bayerische Spezialitäten",
      "Donau-Weine"
    ],
    "website": "https://regensburg.de/weihnachtsmarkt",
    "phone": "+49 941 507 4410",
    "email": "weihnachtsmarkt@regensburg.de",
    "transport": "Bus: Linien 1, 2, 6 bis Neupfarrplatz, Regionalbahn bis Regensburg Hbf",
    "highlights": [
      "UNESCO-Welterbe Altstadt als historische Kulisse",
      "Gotischer Dom zu St. Peter mit berühmten Regensburger Domspatzen",
      "Mittelalterliche Steinerne Brücke über die Donau",
      "Thurn und Taxis Weihnachtsmarkt im Schloss",
      "Historic Sausage Kitchen - älteste Bratwurst-Küche der Welt"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "84",
    "slug": "lueneburg-weihnachtsmarkt",
    "name": "Lüneburger Weihnachtsmarkt",
    "city": "Lüneburg",
    "address": "Am Markt/Am Sande, 21335 Lüneburg",
    "description": "Der romantische Lüneburger Weihnachtsmarkt vor der gotischen Kulisse von St. Johannis und dem historischen Rathaus ist ein Juwel der Hansezeit. Die mittelalterliche Salzstadt bietet mit ihrer einzigartigen Backstein-Architektur eine märchenhafte Atmosphäre.",
    "openingDates": "25.11.2025 - 22.12.2025",
    "openingHours": "Mo-Sa 10-20 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Heidehonig",
      "Salzsiederei-Produkte",
      "Glühwein",
      "Lüneburger Salzstangen",
      "Heidelamm"
    ],
    "website": "https://lueneburg.de/weihnachtsmarkt",
    "phone": "+49 4131 207 6620",
    "email": "weihnachtsmarkt@lueneburg.de",
    "transport": "Regionalbahn: Hamburg-Lüneburg bis Lüneburg, Bus: Linien 5001, 5010 bis Marktplatz",
    "highlights": [
      "Salzmuseum mit Weihnachts-Sonderausstellung 'Salz und Weihnachten'",
      "Rathausführungen mit historischen Weihnachtsbräuchen",
      "Heidjer Bauernmarkt mit regionalen Produkten jeden Samstag",
      "St. Nikolai Kirchenkonzerte jeden Freitag 19 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "85",
    "slug": "konstanzer-weihnachtsmarkt",
    "name": "Konstanzer Weihnachtsmarkt",
    "city": "Konstanz",
    "address": "Münsterplatz/Marktstätte, 78462 Konstanz",
    "description": "Der Konstanzer Weihnachtsmarkt am Bodensee verzaubert mit seiner einzigartigen Atmosphäre zwischen Deutschland und der Schweiz. Vor der Kulisse des romanischen Münsters und mit Blick auf den Bodensee vereint er alemannische Tradition mit internationaler Ausstrahlung.",
    "openingDates": "28.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Bodensee-Fischspezialitäten",
      "Glühwein",
      "Alemannische Köstlichkeiten",
      "Schweizer Spezialitäten",
      "Seehas-Bier"
    ],
    "website": "https://konstanz.de/weihnachtsmarkt",
    "phone": "+49 7531 900 2376",
    "email": "weihnachtsmarkt@konstanz.de",
    "transport": "Regionalbahn: Seehas-Linie bis Konstanz, Bus: Linien 1, 5, 9 bis Münsterplatz",
    "highlights": [
      "Romanisches Konstanzer Münster mit reicher Geschichte",
      "Bodensee-Panorama und Alpensicht bei klarem Wetter",
      "Konzilgebäude - historischer Ort des Konstanzer Konzils",
      "Schweizer Grenze und Kreuzlingen nur 5 Minuten entfernt",
      "Bodensee-Schifffahrt zu Schweizer und Österreichischen Häfen"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "86",
    "slug": "winterthurer-weihnachtsmarkt",
    "name": "Winterthurer Weihnachtsmarkt",
    "city": "Winterthur",
    "address": "Neumarkt/Steinberggasse, 8400 Winterthur",
    "description": "Der charmante Winterthurer Weihnachtsmarkt in der Kulturstadt am Rhein bietet Schweizer Gemütlichkeit und hochwertige Handwerkskunst. Mit über 70 Ständen in der historischen Altstadt verbindet er alpine Tradition mit urbanem Flair der größten Stadt im Kanton Zürich.",
    "openingDates": "05.12.2025 - 23.12.2025",
    "openingHours": "Mo-Sa 11-20 Uhr, So 11-19 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Glühwein",
      "Raclette",
      "Schweizer Schokolade",
      "Zürcher Geschnetzeltes",
      "Appenzeller Käse"
    ],
    "website": "https://winterthur.ch/weihnachtsmarkt",
    "phone": "+41 52 267 51 51",
    "email": "weihnachtsmarkt@win.ch",
    "transport": "S-Bahn: S3, S8, S12 bis Winterthur, Bus: 1, 5, 12 bis Neumarkt",
    "highlights": [
      "Historische Altstadt mit gut erhaltenen Zunfthäusern",
      "Winterthurer Stadtkirche mit 99m hohem Turm",
      "Schweizer Handwerks-Demonstrationen täglich 15-18 Uhr",
      "Foto-Museum Winterthur Weihnachts-Ausstellung",
      "Technorama - Schweizer Science Center in der Nähe"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "87",
    "slug": "st-galler-weihnachtsmarkt",
    "name": "St. Galler Weihnachtsmarkt",
    "city": "St. Gallen",
    "address": "Klosterhof/Marktplatz, 9000 St. Gallen",
    "description": "Der St. Galler Weihnachtsmarkt vor der UNESCO-Welterbe Stiftsbibliothek und dem barocken Dom bietet eine einzigartige Mischung aus Kultur und Tradition. Als Tor zur Ostschweiz verbindet er alemannische Gemütlichkeit mit dem Charme einer lebendigen Studentenstadt.",
    "openingDates": "29.11.2025 - 24.12.2025",
    "openingHours": "Mo-Sa 10-20 Uhr, So 11-19 Uhr, 24.12. 10-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "St. Galler Bratwurst",
      "Glühwein",
      "Appenzeller Käse",
      "Biber (Lebkuchen)",
      "Ostschweizer Spezialitäten"
    ],
    "website": "https://stadt.sg.ch/weihnachtsmarkt",
    "phone": "+41 71 224 53 53",
    "email": "weihnachtsmarkt@stadt.sg.ch",
    "transport": "S-Bahn: S2, S4, S23 bis St. Gallen, Bus: 1, 7, 9 bis Marktplatz",
    "highlights": [
      "UNESCO-Welterbe Stiftsbibliothek mit 170.000 Büchern",
      "Barocker Dom mit seiner prächtigen Architektur",
      "St. Galler Textilmuseum mit weltberühmten Stickereien",
      "Drei Weieren - historische Weiher mit Stadtblick",
      "Appenzeller Land in 30 Minuten erreichbar"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "88",
    "slug": "schaffhauser-weihnachtsmarkt",
    "name": "Schaffhauser Weihnachtsmarkt",
    "city": "Schaffhausen",
    "address": "Fronwagplatz/Herrenacker, 8200 Schaffhausen",
    "description": "Der gemütliche Schaffhauser Weihnachtsmarkt am Rhein bietet eine einzigartige Atmosphäre zwischen der Schweiz und Deutschland. Vor der Kulisse der berühmten Erker und mit Blick auf das Munot-Fort verbindet er Rheinromantik mit Schweizer Qualität und Gemütlichkeit.",
    "openingDates": "06.12.2025 - 23.12.2025",
    "openingHours": "Do-Sa 11-20 Uhr, So 11-19 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Schaffhauser Wein",
      "Glühwein",
      "Rheinforelle",
      "Schweizer Käse",
      "Munot-Honig"
    ],
    "website": "https://schaffhausen.ch/weihnachtsmarkt",
    "phone": "+41 52 632 40 20",
    "email": "weihnachtsmarkt@stadt.sh.ch",
    "transport": "S-Bahn: S9, S33 bis Schaffhausen, Bus: 1, 3, 6 bis Fronwagplatz",
    "highlights": [
      "Munot-Festung mit Rundturm und Panoramablick",
      "Rheinfall - Europas größter Wasserfall nur 3km entfernt",
      "Altstadt mit berühmten Erkerfassaden und Fresken",
      "All Saints Museum Schaffhausen",
      "Grenze zu Deutschland - Konstanz in 20 Minuten"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "89",
    "slug": "wiener-weihnachtsmarkt-schoenbrunn",
    "name": "Weihnachtsmarkt Schloss Schönbrunn",
    "city": "Wien",
    "address": "Schloss Schönbrunn, 1130 Wien",
    "description": "Der kaiserliche Weihnachtsmarkt vor Schloss Schönbrunn bietet vor der Kulisse des UNESCO-Welterbes eine der romantischsten Weihnachtsmarkt-Atmosphären Europas. Mit über 70 Ständen und dem Charme der k.u.k. Monarchie verbindet er Wiener Tradition mit imperialem Flair.",
    "openingDates": "20.11.2025 - 26.12.2025",
    "openingHours": "Mo-Do 10-21 Uhr, Fr-So 10-22 Uhr, 24.12. 10-18 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Wiener Schnitzel",
      "Kaiserschmarrn",
      "Punsch",
      "Sachertorte",
      "Wiener Würstel"
    ],
    "website": "https://schoenbrunn.at/weihnachtsmarkt",
    "phone": "+43 1 811 13 239",
    "email": "weihnachtsmarkt@schoenbrunn.at",
    "transport": "U-Bahn: U4 bis Schönbrunn, Straßenbahn: 10, 58 bis Schloss Schönbrunn",
    "highlights": [
      "UNESCO-Welterbe Schloss Schönbrunn als majestätische Kulisse",
      "Kaiserliche Parkanlage mit barocker Gartenarchitektur",
      "Gloriette mit Panoramablick über Wien",
      "Schönbrunner Tiergarten - ältester Zoo der Welt",
      "Wiener Philharmoniker Weihnachtskonzerte im Schloss"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "90",
    "slug": "grazer-adventmarkt",
    "name": "Grazer Adventmärkte",
    "city": "Graz",
    "address": "Hauptplatz/Schloßberg, 8010 Graz",
    "description": "Die Grazer Adventmärkte verwandeln die UNESCO-Welterbe Altstadt in ein Winterwunderland. Mit dem Hauptmarkt am Hauptplatz und dem romantischen Bergadvent am Schloßberg bietet Graz eine einzigartige Kombination aus städtischem Flair und alpiner Romantik mit steirischen Spezialitäten.",
    "openingDates": "23.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 10-20 Uhr",
    "imageUrl": "/public/lovable-uploads/organic-produce.jpg",
    "specialties": [
      "Steirischer Glühmost",
      "Lebkuchen",
      "Käferbohnen",
      "Kürbiskernöl",
      "Steirisches Kunsthandwerk"
    ],
    "website": "https://graz.at/adventmaerkte",
    "phone": "+43 316 872430",
    "email": "advent@graz.at",
    "transport": "Straßenbahn: Linien 1, 3, 6 bis Hauptplatz, Bus: 30, 31, 32 bis Schloßberg",
    "highlights": [
      "Bergadvent am Schloßberg mit Panoramablick über Graz",
      "Steirischer Glühmost aus regionalen Äpfeln und Birnen",
      "Handwerkerdorf mit traditioneller steirischer Volkskunst",
      "Märchenbahn für Kinder durch die Altstadt jeden Samstag",
      "Advent-Konzerte im Landhaushof jeden Sonntag 17 Uhr"
    ],
    "entryPrice": "Eintritt frei, Schloßbergbahn 2,70€"
  },
  {
    "id": "91",
    "slug": "klagenfurter-christkindlmarkt",
    "name": "Klagenfurter Christkindlmarkt",
    "city": "Klagenfurt",
    "address": "Neuer Platz/Alter Platz, 9020 Klagenfurt",
    "description": "Der Klagenfurter Christkindlmarkt in der Landeshauptstadt Kärntens verbindet alpine Tradition mit südlichem Flair. Umgeben von Renaissance-Bauten und mit Blick auf die nahegelegenen Alpen bietet der Markt Kärntner Spezialitäten und eine besonders warme, sonnige Atmosphäre.",
    "openingDates": "25.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 10-20 Uhr",
    "imageUrl": "/public/lovable-uploads/organic-produce.jpg",
    "specialties": [
      "Kärntner Kasnudeln",
      "Glühwein",
      "Reindling",
      "Alpen-Käse",
      "Kärntner Nudeln"
    ],
    "website": "https://klagenfurt.at/christkindlmarkt",
    "phone": "+43 463 537223",
    "email": "christkindlmarkt@klagenfurt.at",
    "transport": "Bus: Linien 10, 11, 12 bis Neuer Platz, Regionalbahn: bis Klagenfurt Hbf",
    "highlights": [
      "Kärntner Kasnudeln frisch zubereitet am Markt",
      "Alpenblick von der Aussichtsplattform am Neuen Platz",
      "Zweisprachiger Markt (Deutsch/Slowenisch) nahe slowenischer Grenze",
      "Kärntner Reindling-Bäckerei mit traditionellen Rezepten",
      "Advent-Singen in Kärntnerdialekt jeden Donnerstag 18 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "92",
    "slug": "lausanner-marche-de-noel",
    "name": "Marché de Noël de Lausanne",
    "city": "Lausanne",
    "address": "Place de la Palud/Rue de Bourg, 1003 Lausanne",
    "description": "Der Lausanner Weihnachtsmarkt in der französischsprachigen Schweiz bietet eine elegante Mischung aus lateinischem Flair und alpiner Tradition. Mit Blick auf den Genfersee und die Alpen verbindet der Markt französische Raffinesse mit Schweizer Qualität.",
    "openingDates": "29.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 10-22 Uhr, So 11-20 Uhr",
    "imageUrl": "/public/lovable-uploads/organic-produce.jpg",
    "specialties": [
      "Vin chaud",
      "Fondue",
      "Chocolat suisse",
      "Saucisson vaudois",
      "Fromage de montagne"
    ],
    "website": "https://lausanne.ch/marche-noel",
    "phone": "+41 21 315 7333",
    "email": "noel@lausanne.ch",
    "transport": "Métro: M2 bis Lausanne-Flon, Bus: 1, 2 bis Place de la Palud",
    "highlights": [
      "Zweisprachiger Markt (Französisch/Deutsch) mit internationalem Flair",
      "Waadtländer Weinverkostung aus den Lavaux-Weinbergen",
      "Schweizer Schokoladen-Werkstatt mit Live-Demonstrationen",
      "Fondue-Caquelon direkt am Marktstand",
      "Genfersee-Rundfahrt mit Weihnachtsbeleuchtung"
    ],
    "entryPrice": "Entrée libre"
  },
  {
    "id": "93",
    "slug": "zuericher-christkindlmarkt",
    "name": "Zürcher Christkindlimärt",
    "city": "Zürich",
    "address": "Hauptbahnhof/Bahnhofstrasse, 8001 Zürich",
    "description": "Der größte Weihnachtsmarkt der Schweiz erstreckt sich entlang der weltberühmten Bahnhofstrasse und am Sechseläutenplatz. Mit über 150 Ständen und der einzigartigen Atmosphäre zwischen Zürichsee und Alpen bietet er schweizerische Weihnachtstradition auf höchstem Niveau.",
    "openingDates": "21.11.2025 - 24.12.2025",
    "openingHours": "Mo-Sa 11-22 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Zürcher Geschnetzeltes",
      "Glühwein",
      "Raclette",
      "Marroni",
      "Schweizer Schokolade"
    ],
    "website": "https://zuerich.com/weihnachtsmarkt",
    "phone": "+41 44 215-4000",
    "email": "weihnachtsmarkt@zuerich.ch",
    "transport": "S-Bahn: alle Linien bis Zürich HB, Tram: Linien 3, 4, 6, 7, 10, 15 bis Bahnhofstrasse",
    "highlights": [
      "Größter schwimmender Weihnachtsbaum Europas auf dem Zürichsee",
      "Alphorn-Konzerte jeden Samstag um 16 Uhr",
      "Schweizer Schokolade-Workshop für Kinder",
      "Fondue- und Raclette-Stände mit Alpenblick",
      "Swarovski-Kristall-Weihnachtsbaum am Sechseläutenplatz"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "94",
    "slug": "berner-christchindlimaert",
    "name": "Berner Christchindlimärt",
    "city": "Bern",
    "address": "Münsterplatz/Waisenhausplatz, 3011 Bern",
    "description": "Der Berner Christchindlimärt in der UNESCO-Welterbe Altstadt bietet schweizerische Gemütlichkeit vor der Kulisse des gotischen Münsters. Mit über 150 Ständen erstreckt er sich über mehrere historische Plätze der Bundeshauptstadt.",
    "openingDates": "23.11.2025 - 24.12.2025",
    "openingHours": "Mo-Sa 11-20 Uhr, So 11-18 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Berner Lebkuchen",
      "Glühwein",
      "Emmentaler Käse",
      "Schweizer Schokolade",
      "Holzschnitzereien"
    ],
    "website": "https://bern.com/christchindlimaert",
    "phone": "+41 31 328 12 12",
    "email": "christchindlimaert@bern.com",
    "transport": "Tram: 6, 7, 8 bis Bärenplatz, Bus: 11, 19 bis Münsterplatz",
    "highlights": [
      "Turmbläser vom Münster jeden Freitag um 18 Uhr",
      "Schweizer Volksmusik-Auftritte jeden Samstag 16-17 Uhr",
      "Kinderweihnacht mit Märchenerzählungen jeden Sonntag 15 Uhr",
      "Käse-Degustationen mit Emmentaler-Produzenten"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "95",
    "slug": "basler-weihnachtsmarkt",
    "name": "Basler Weihnachtsmarkt",
    "city": "Basel",
    "address": "Barfüsserplatz/Münsterplatz, 4051 Basel",
    "description": "Der Basler Weihnachtsmarkt verzaubert die Drei-Länder-Stadt mit seinem besonderen Charme zwischen Rhein und Münster. Mit über 180 Ständen auf verschiedenen Plätzen der Altstadt bietet er eine einzigartige Mischung aus schweizerischer, deutscher und französischer Tradition.",
    "openingDates": "28.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-19 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Basler Leckerli",
      "Glögg",
      "Elsässer Bredele",
      "Schweizer Rösti",
      "Trinationaler Christbaumschmuck"
    ],
    "website": "https://basel.com/weihnachtsmarkt",
    "phone": "+41 61 268 68 68",
    "email": "weihnachtsmarkt@basel.com",
    "transport": "Tram: 1, 8, 14 bis Barfüsserplatz, S-Bahn: S1, S6 bis Basel SBB",
    "highlights": [
      "Trinationaler Weihnachtsmarkt mit deutschen, französischen und schweizerischen Spezialitäten",
      "Münster-Orgelkonzerte jeden Sonntag um 17 Uhr",
      "Fasnachts-Guggenmusik spielt Weihnachtslieder jeden Samstag",
      "Rheinschifffahrt mit Glühwein-Ausschank (Nov-Dez)"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "96",
    "slug": "passauer-christkindlmarkt",
    "name": "Passauer Christkindlmarkt",
    "city": "Passau",
    "address": "Residenzplatz/Domplatz, 94032 Passau",
    "description": "Der Passauer Christkindlmarkt an der Drei-Flüsse-Stadt verzaubert vor der barocken Kulisse des Stephansdoms. Mit Blick auf Donau, Inn und Ilz bietet er eine einzigartige Atmosphäre zwischen österreichischen und bayerischen Traditionen mit über 60 liebevoll gestalteten Ständen.",
    "openingDates": "27.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr, 24.12: 10-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Passauer Lebkuchen",
      "Feuerzangenbowle",
      "Drei-Flüsse-Punsch",
      "Glaskunst aus Böhmen",
      "Donau-Fisch-Spezialitäten"
    ],
    "website": "https://passau.de/christkindlmarkt",
    "phone": "+49 851 396610",
    "email": "christkindlmarkt@passau.de",
    "transport": "Bus: Stadtbus bis Residenzplatz, Regionalbahn: bis Passau Hbf",
    "highlights": [
      "Orgelkonzerte im Stephansdom täglich 12 und 17 Uhr (größte Domorgel der Welt)",
      "Drei-Flüsse-Rundfahrt mit Glühwein jeden Samstag 14 und 16 Uhr",
      "Böhmisches Glashandwerk mit Live-Vorführungen",
      "Christkindl-Postamt mit historischen Briefmarken",
      "Adventssingen der Passauer Domspatzen jeden Sonntag 17 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "97",
    "slug": "villacher-advent",
    "name": "Villacher Advent",
    "city": "Villach",
    "address": "Hauptplatz, 9500 Villach, Österreich",
    "description": "Der Villacher Advent in Kärnten verzaubert mit südlicher Gemütlichkeit und alpinem Flair. Vor der malerischen Kulisse der historischen Altstadt bietet er österreichische Traditionen, Kärntner Spezialitäten und handwerkliche Kostbarkeiten in weihnachtlicher Atmosphäre.",
    "openingDates": "22.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 14-20 Uhr, Fr-Sa 10-21 Uhr, So 10-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Kärntner Reindling",
      "Feuerzangenbowle",
      "Glühmost",
      "Kärntner Speck",
      "Alpine Handwerkskunst"
    ],
    "website": "https://villach.at/advent",
    "phone": "+43 4242 205-4000",
    "email": "advent@villach.at",
    "transport": "ÖBB: Regionalbahn bis Villach Hbf, Stadtbus: Linie 1, 2 bis Hauptplatz",
    "highlights": [
      "Villacher Adventfenster: täglich neue Überraschungen in den Geschäften",
      "Kärntner Volksmusik jeden Samstag 17 Uhr auf der Hauptplatz-Bühne",
      "Adventkonzerte in der Stadtpfarrkirche St. Jakob",
      "Wichtelwerkstatt für Kinder jeden Sonntag 15-17 Uhr",
      "Krampuslauf am 5. Dezember ab 19 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "98",
    "slug": "klagenfurt-christkindlmarkt",
    "name": "Klagenfurter Christkindlmarkt",
    "city": "Klagenfurt",
    "address": "Neuer Platz, 9020 Klagenfurt, Österreich",
    "description": "Der Klagenfurter Christkindlmarkt am Neuen Platz ist das Herz der Kärntner Weihnachtszeit. Umgeben von der historischen Kulisse des Landhauses und vor dem berühmten Lindwurmbrunnen bietet er österreichische Gemütlichkeit und südalpines Flair mit über 80 Ständen.",
    "openingDates": "20.11.2025 - 26.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 10-20 Uhr, 24.-26.12: 10-18 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Kärntner Kasnudeln",
      "Glühmost",
      "Kranjska Klobasa",
      "Wörthersee-Honig",
      "Kärntner Handwerk"
    ],
    "website": "https://klagenfurt.at/christkindlmarkt",
    "phone": "+43 463 537-2223",
    "email": "christkindlmarkt@klagenfurt.at",
    "transport": "ÖBB: Regionalbahn bis Klagenfurt Hbf, Stadtbus: Linien 10, 11, 12 bis Neuer Platz",
    "highlights": [
      "Klagenfurter Christkind-Auftritte jeden Samstag 16 Uhr am Lindwurmbrunnen",
      "Kärntner Adventkonzerte im Landhaus jeden Freitag 19 Uhr",
      "Punschstand am Wörthersee mit Seeblick (10 Min. vom Markt)",
      "Traditionelle Kärntner Tänze jeden Sonntag 15 Uhr",
      "Wichtelpostamt für Kinderbriefe ans Christkind"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "99",
    "slug": "zuerich-christkindlimaert",
    "name": "Zürcher Christkindlimärt",
    "city": "Zürich",
    "address": "Hauptbahnhof/Bahnhofstrasse, 8001 Zürich",
    "description": "Der traditionelle Zürcher Christkindlimärt am Hauptbahnhof ist einer der größten Indoor-Weihnachtsmärkte Europas. Mit über 160 Ständen in der imposanten Bahnhofshalle bietet er Schweizer Qualität, alpine Spezialitäten und einzigartiges Kunsthandwerk in festlicher Atmosphäre.",
    "openingDates": "21.11.2025 - 24.12.2025",
    "openingHours": "Mo-Sa 10-22 Uhr, So 11-20 Uhr, 24.12. 10-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Raclette",
      "Glühwein",
      "Schweizer Schokolade",
      "Älplermagronen",
      "Uhren und Schmuck"
    ],
    "website": "https://christchindlimaert.ch",
    "phone": "+41 44 2151515",
    "email": "info@christchindlimaert.ch",
    "transport": "S-Bahn: Alle Linien bis Zürich HB, Tram: 3, 4, 6, 7, 10, 15 bis Hauptbahnhof",
    "highlights": [
      "Riesenadventskalender an der Hauptbahnhof-Fassade",
      "Schweizer Alphornbläser täglich 18 Uhr",
      "Kinderkarussell im Hauptbahnhof",
      "Grossmünster Weihnachtskonzerte",
      "Zürichsee-Rundfahrt mit Fondue an Bord"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "100",
    "slug": "basel-weihnachtsmarkt",
    "name": "Basler Weihnachtsmarkt",
    "city": "Basel",
    "address": "Barfüsserplatz/Münsterplatz, 4051 Basel",
    "description": "Der Basler Weihnachtsmarkt in der historischen Altstadt verzaubert mit seinem mittelalterlichen Charme. Verteilt auf Barfüsserplatz und Münsterplatz bietet er schweizerische und regionale Spezialitäten vor der Kulisse des romanisch-gotischen Münsters.",
    "openingDates": "23.11.2025 - 23.12.2025",
    "openingHours": "Mo-Sa 11-20 Uhr, So 11-19 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Basler Leckerli",
      "Glühwein",
      "Raclette",
      "Rösti",
      "Schweizer Handwerk"
    ],
    "website": "https://basel.com/weihnachtsmarkt",
    "phone": "+41 61 2686868",
    "email": "weihnachtsmarkt@basel.com",
    "transport": "Tram: 3, 6, 8, 11, 15, 16 bis Barfüsserplatz, Bus: 30, 33 bis Münsterplatz",
    "highlights": [
      "Basler Münster mit Weihnachtskonzerten",
      "Kunstmuseum Basel Weihnachtsausstellung",
      "Rheinschifffahrt mit Glühwein-Ausschank",
      "Basler Fasnacht Vorbereitungen (Laternen-Workshop)",
      "Mittelalterlicher Handwerkermarkt am Münsterplatz"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "101",
    "slug": "berner-weihnachtsmarkt",
    "name": "Berner Weihnachtsmarkt",
    "city": "Bern",
    "address": "Waisenhausplatz/Münstergasse, 3011 Bern",
    "description": "Der Berner Weihnachtsmarkt in der UNESCO-Welterbe Altstadt bietet schweizerische Gemütlichkeit unter den historischen Laubengängen. Mit über 50 Ständen verzaubert er vor der Kulisse des gotischen Münsters und der mittelalterlichen Stadtarchitektur.",
    "openingDates": "28.11.2025 - 24.12.2025",
    "openingHours": "Mo-Sa 9-20 Uhr, So 10-18 Uhr, 24.12. 9-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Berner Rüeblitorte",
      "Glühwein",
      "Cervelat",
      "Emmentaler Käse",
      "Berner Handwerk"
    ],
    "website": "https://bern.com/weihnachtsmarkt",
    "phone": "+41 31 3281212",
    "email": "weihnachtsmarkt@bern.com",
    "transport": "Bus: 10, 19 bis Waisenhausplatz, Tram: 6, 7, 8 bis Bärenplatz",
    "highlights": [
      "Berner Münster mit 344 Stufen Turm-Aufstieg",
      "Zytglogge Glockenspiel täglich zur vollen Stunde",
      "Bundeshaus Führungen mit Weihnachtsspecial",
      "Aare-Schwimmen auch im Winter (nur für Mutige!)",
      "Einstein-Museum Sonderausstellung zu Weihnachten"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "102",
    "slug": "bamberger-weihnachtsmarkt",
    "name": "Bamberger Weihnachtsmarkt",
    "city": "Bamberg",
    "address": "Maximilianstraße/Gabelmann, 96047 Bamberg",
    "description": "Der Bamberger Weihnachtsmarkt in der UNESCO-Welterbestadt verzaubert mit mittelalterlichem Flair. Zwischen den historischen Fachwerkhäusern und vor der Kulisse des Kaiserdoms bietet er fränkische Gemütlichkeit und traditionelles Handwerk in einer der schönsten Altstädte Deutschlands.",
    "openingDates": "25.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Bamberger Hörnla",
      "Rauchbier-Glühwein",
      "Lebkuchen",
      "Fränkische Bratwurst",
      "Handwerkskunst"
    ],
    "website": "https://bamberg.de/weihnachtsmarkt",
    "phone": "+49 951 87-1161",
    "email": "weihnachtsmarkt@stadt.bamberg.de",
    "transport": "Bus: Linien 901, 902, 910 bis Gabelmann, Regionalbahn: bis Bamberg Hbf",
    "highlights": [
      "Tägliche Domführungen mit Weihnachtskonzerten um 18 Uhr",
      "Bamberger Krippenweg durch die historische Altstadt",
      "Brauereiführungen mit Rauchbier-Verkostung jeden Samstag 15 Uhr",
      "Kunsthandwerkermarkt am Klein Venedig jeden Sonntag",
      "Märchenerzählungen für Kinder jeden Samstag 16 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "103",
    "slug": "passauer-christkindlmarkt",
    "name": "Passauer Christkindlmarkt",
    "city": "Passau",
    "address": "Residenzplatz/Domplatz, 94032 Passau",
    "description": "Der Passauer Christkindlmarkt an der Drei-Flüsse-Stadt verzaubert vor der barocken Kulisse des Stephansdoms. Mit Blick auf Donau, Inn und Ilz bietet er eine einzigartige Atmosphäre zwischen österreichischen und bayerischen Traditionen mit über 60 liebevoll gestalteten Ständen.",
    "openingDates": "27.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr, 24.12: 10-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Passauer Lebkuchen",
      "Feuerzangenbowle",
      "Drei-Flüsse-Punsch",
      "Glaskunst aus Böhmen",
      "Donau-Fisch-Spezialitäten"
    ],
    "website": "https://passau.de/christkindlmarkt",
    "phone": "+49 851 396610",
    "email": "christkindlmarkt@passau.de",
    "transport": "Bus: Stadtbus bis Residenzplatz, Regionalbahn: bis Passau Hbf",
    "highlights": [
      "Orgelkonzerte im Stephansdom täglich 12 und 17 Uhr (größte Domorgel der Welt)",
      "Drei-Flüsse-Rundfahrt mit Glühwein jeden Samstag 14 und 16 Uhr",
      "Böhmisches Glashandwerk mit Live-Vorführungen",
      "Christkindl-Postamt mit historischen Briefmarken",
      "Adventssingen der Passauer Domspatzen jeden Sonntag 17 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "104",
    "slug": "freiburger-weihnachtsmarkt",
    "name": "Freiburger Weihnachtsmarkt",
    "city": "Freiburg im Breisgau",
    "address": "Rathausplatz/Münsterplatz, 79098 Freiburg",
    "description": "Der Freiburger Weihnachtsmarkt vor der gotischen Kulisse des Münsters ist einer der stimmungsvollsten in Baden-Württemberg. Mit über 120 Ständen rund um das historische Münster bietet er badische Gemütlichkeit, regionale Spezialitäten und Kunsthandwerk aus dem Schwarzwald.",
    "openingDates": "22.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Schwarzwälder Kirschtorte",
      "Schwarzwälder Schinken",
      "Glühwein",
      "Kuckucksuhren",
      "Bollenhut-Souvenirs"
    ],
    "website": "https://freiburg.de/weihnachtsmarkt",
    "phone": "+49 761 3881880",
    "email": "weihnachtsmarkt@freiburg.de",
    "transport": "Straßenbahn: Linien 1, 3, 5 bis Bertoldsbrunnen, Bus: Linien 11, 12 bis Münsterplatz",
    "highlights": [
      "Münsterkonzerte jeden Freitag und Samstag 19:30 Uhr",
      "Schwarzwälder Handwerk-Vorführungen: Uhrmacher, Holzschnitzer",
      "Kinderkarussell und Märchenbühne am Münsterplatz",
      "Glühwein-Wanderung durch die Altstadt jeden Donnerstag 18 Uhr",
      "Adventsmarkt der Künstler am Augustinerplatz"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "105",
    "slug": "villacher-advent",
    "name": "Villacher Advent",
    "city": "Villach",
    "address": "Hauptplatz, 9500 Villach, Österreich",
    "description": "Der Villacher Advent in Kärnten verzaubert mit südlicher Gemütlichkeit und alpinem Flair. Vor der malerischen Kulisse der historischen Altstadt bietet er österreichische Traditionen, Kärntner Spezialitäten und handwerkliche Kostbarkeiten in weihnachtlicher Atmosphäre.",
    "openingDates": "22.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 14-20 Uhr, Fr-Sa 10-21 Uhr, So 10-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Kärntner Reindling",
      "Feuerzangenbowle",
      "Glühmost",
      "Kärntner Speck",
      "Alpine Handwerkskunst"
    ],
    "website": "https://villach.at/advent",
    "phone": "+43 4242 205-4000",
    "email": "advent@villach.at",
    "transport": "ÖBB: Regionalbahn bis Villach Hbf, Stadtbus: Linie 1, 2 bis Hauptplatz",
    "highlights": [
      "Villacher Adventfenster: täglich neue Überraschungen in den Geschäften",
      "Kärntner Volksmusik jeden Samstag 17 Uhr auf der Hauptplatz-Bühne",
      "Adventkonzerte in der Stadtpfarrkirche St. Jakob",
      "Wichtelwerkstatt für Kinder jeden Sonntag 15-17 Uhr",
      "Krampuslauf am 5. Dezember ab 19 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "106",
    "slug": "klagenfurt-christkindlmarkt",
    "name": "Klagenfurter Christkindlmarkt",
    "city": "Klagenfurt",
    "address": "Neuer Platz, 9020 Klagenfurt, Österreich",
    "description": "Der Klagenfurter Christkindlmarkt am Neuen Platz ist das Herz der Kärntner Weihnachtszeit. Umgeben von der historischen Kulisse des Landhauses und vor dem berühmten Lindwurmbrunnen bietet er österreichische Gemütlichkeit und südalpines Flair mit über 80 Ständen.",
    "openingDates": "20.11.2025 - 26.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 10-20 Uhr, 24.-26.12: 10-18 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Kärntner Kasnudeln",
      "Glühmost",
      "Kranjska Klobasa",
      "Wörthersee-Honig",
      "Kärntner Handwerk"
    ],
    "website": "https://klagenfurt.at/christkindlmarkt",
    "phone": "+43 463 537-2223",
    "email": "christkindlmarkt@klagenfurt.at",
    "transport": "ÖBB: Regionalbahn bis Klagenfurt Hbf, Stadtbus: Linien 10, 11, 12 bis Neuer Platz",
    "highlights": [
      "Klagenfurter Christkind-Auftritte jeden Samstag 16 Uhr am Lindwurmbrunnen",
      "Kärntner Adventkonzerte im Landhaus jeden Freitag 19 Uhr",
      "Punschstand am Wörthersee mit Seeblick (10 Min. vom Markt)",
      "Traditionelle Kärntner Tänze jeden Sonntag 15 Uhr",
      "Wichtelpostamt für Kinderbriefe ans Christkind"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "107",
    "slug": "zuerich-christkindlimaert",
    "name": "Zürcher Christkindlimärt",
    "city": "Zürich",
    "address": "Hauptbahnhof/Bahnhofstrasse, 8001 Zürich",
    "description": "Der traditionelle Zürcher Christkindlimärt am Hauptbahnhof ist einer der größten Indoor-Weihnachtsmärkte Europas. Mit über 160 Ständen in der imposanten Bahnhofshalle bietet er Schweizer Qualität, alpine Spezialitäten und einzigartiges Kunsthandwerk in festlicher Atmosphäre.",
    "openingDates": "21.11.2025 - 24.12.2025",
    "openingHours": "Mo-Sa 10-22 Uhr, So 11-20 Uhr, 24.12. 10-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Raclette",
      "Glühwein",
      "Schweizer Schokolade",
      "Älplermagronen",
      "Uhren und Schmuck"
    ],
    "website": "https://christchindlimaert.ch",
    "phone": "+41 44 2151515",
    "email": "info@christchindlimaert.ch",
    "transport": "S-Bahn: Alle Linien bis Zürich HB, Tram: 3, 4, 6, 7, 10, 15 bis Hauptbahnhof",
    "highlights": [
      "Riesenadventskalender an der Hauptbahnhof-Fassade",
      "Schweizer Alphornbläser täglich 18 Uhr",
      "Kinderkarussell im Hauptbahnhof",
      "Grossmünster Weihnachtskonzerte",
      "Zürichsee-Rundfahrt mit Fondue an Bord"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "108",
    "slug": "basel-weihnachtsmarkt",
    "name": "Basler Weihnachtsmarkt",
    "city": "Basel",
    "address": "Barfüsserplatz/Münsterplatz, 4051 Basel",
    "description": "Der Basler Weihnachtsmarkt in der historischen Altstadt verzaubert mit seinem mittelalterlichen Charme. Verteilt auf Barfüsserplatz und Münsterplatz bietet er schweizerische und regionale Spezialitäten vor der Kulisse des romanisch-gotischen Münsters.",
    "openingDates": "23.11.2025 - 23.12.2025",
    "openingHours": "Mo-Sa 11-20 Uhr, So 11-19 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Basler Leckerli",
      "Glühwein",
      "Raclette",
      "Rösti",
      "Schweizer Handwerk"
    ],
    "website": "https://basel.com/weihnachtsmarkt",
    "phone": "+41 61 2686868",
    "email": "weihnachtsmarkt@basel.com",
    "transport": "Tram: 3, 6, 8, 11, 15, 16 bis Barfüsserplatz, Bus: 30, 33 bis Münsterplatz",
    "highlights": [
      "Basler Münster mit Weihnachtskonzerten",
      "Kunstmuseum Basel Weihnachtsausstellung",
      "Rheinschifffahrt mit Glühwein-Ausschank",
      "Basler Fasnacht Vorbereitungen (Laternen-Workshop)",
      "Mittelalterlicher Handwerkermarkt am Münsterplatz"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "109",
    "slug": "berner-weihnachtsmarkt",
    "name": "Berner Weihnachtsmarkt",
    "city": "Bern",
    "address": "Waisenhausplatz/Münstergasse, 3011 Bern",
    "description": "Der Berner Weihnachtsmarkt in der UNESCO-Welterbe Altstadt bietet schweizerische Gemütlichkeit unter den historischen Laubengängen. Mit über 50 Ständen verzaubert er vor der Kulisse des gotischen Münsters und der mittelalterlichen Stadtarchitektur.",
    "openingDates": "28.11.2025 - 24.12.2025",
    "openingHours": "Mo-Sa 9-20 Uhr, So 10-18 Uhr, 24.12. 9-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Berner Rüeblitorte",
      "Glühwein",
      "Cervelat",
      "Emmentaler Käse",
      "Berner Handwerk"
    ],
    "website": "https://bern.com/weihnachtsmarkt",
    "phone": "+41 31 3281212",
    "email": "weihnachtsmarkt@bern.com",
    "transport": "Bus: 10, 19 bis Waisenhausplatz, Tram: 6, 7, 8 bis Bärenplatz",
    "highlights": [
      "Berner Münster mit 344 Stufen Turm-Aufstieg",
      "Zytglogge Glockenspiel täglich zur vollen Stunde",
      "Bundeshaus Führungen mit Weihnachtsspecial",
      "Aare-Schwimmen auch im Winter (nur für Mutige!)",
      "Einstein-Museum Sonderausstellung zu Weihnachten"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "110",
    "slug": "karlsruher-christkindlmarkt",
    "name": "Karlsruher Christkindlmarkt",
    "city": "Karlsruhe",
    "address": "Marktplatz, 76133 Karlsruhe",
    "description": "Der Karlsruher Christkindlmarkt vor dem Schloss verzaubert mit badischer Gemütlichkeit. Mit über 130 Ständen rund um die Pyramide bietet er eine einzigartige Atmosphäre vor der Kulisse der Fächerstadt und des barocken Schlosses.",
    "openingDates": "27.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 12-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Badische Weine",
      "Flädlesuppe",
      "Lebkuchen",
      "Schwarzwälder Schinken",
      "Kunsthandwerk"
    ],
    "website": "https://karlsruhe.de/christkindlmarkt",
    "phone": "+49 721 1336000",
    "email": "christkindlmarkt@karlsruhe.de",
    "transport": "Straßenbahn: S1, S11, S4, S41 bis Marktplatz, Bus: 10, 11 bis Marktplatz",
    "highlights": [
      "Karlsruher Schloss mit Weihnachtsausstellung",
      "Badisches Landesmuseum Adventsführungen",
      "Pyramide-Illumination täglich ab 17 Uhr",
      "Fächerstadt-Rundgang mit Glühwein-Pause",
      "KIT Planetarium Weihnachtsprogramm"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "111",
    "slug": "mannheimer-weihnachtsmarkt",
    "name": "Mannheimer Weihnachtsmarkt",
    "city": "Mannheim",
    "address": "Paradeplatz/Wasserturm, 68161 Mannheim",
    "description": "Der Mannheimer Weihnachtsmarkt in der Quadratestadt bietet badisch-pfälzische Spezialitäten vor dem berühmten Wasserturm. Mit über 140 Ständen verteilt auf mehrere Plätze verzaubert er mit seinem besonderen Flair zwischen Rhein und Neckar.",
    "openingDates": "25.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 12-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Pfälzer Saumagen",
      "Leberwurst",
      "Glühwein",
      "Döppekuchen",
      "Kunsthandwerk"
    ],
    "website": "https://mannheim.de/weihnachtsmarkt",
    "phone": "+49 621 2936372",
    "email": "weihnachtsmarkt@mannheim.de",
    "transport": "Straßenbahn: 1, 3, 7 bis Paradeplatz, S-Bahn: S3, S4 bis Hauptbahnhof",
    "highlights": [
      "Wasserturm-Illumination täglich ab 17 Uhr",
      "Mannheimer Schloss Weihnachtsführungen",
      "Luisenpark Winterlichter-Festival",
      "Quadrate-Rundgang mit Glühwein-Verkostung",
      "Planetarium Mannheim Weihnachtsprogramm"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "112",
    "slug": "essener-weihnachtsmarkt",
    "name": "Essener Weihnachtsmarkt",
    "city": "Essen",
    "address": "Kennedyplatz/Markt, 45127 Essen",
    "description": "Der Essener Weihnachtsmarkt verwandelt die Kulturhauptstadt Europas 2010 in ein weihnachtliches Erlebnis. Mit über 250 Ständen erstreckt er sich über mehrere Plätze und bietet eine perfekte Mischung aus Tradition und industriellem Ruhrgebietsflair vor der Kulisse der beeindruckenden Essener Innenstadt.",
    "openingDates": "25.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-21 Uhr, Fr-Sa 10-22 Uhr, So 11-21 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Currywurst",
      "Glühwein",
      "Reibekuchen",
      "Bergmann-Spezialitäten",
      "Ruhrgebiet-Souvenirs"
    ],
    "website": "https://essen.de/weihnachtsmarkt",
    "phone": "+49 201 88433000",
    "email": "weihnachtsmarkt@essen.de",
    "transport": "U-Bahn: U11, U17, U18 bis Hauptbahnhof/Berliner Platz, S-Bahn: S1, S3, S9 bis Essen Hbf",
    "highlights": [
      "Illumination der Zeche Zollverein als weihnachtliches Highlight",
      "Traditioneller Bergmannsmarkt mit historischen Exponaten",
      "Kinderkarussell und Märchenzelt täglich 14-18 Uhr",
      "Live-Konzerte auf der Weihnachtsmarktbühne jeden Samstag 17 Uhr",
      "Spezielle Ruhrgebiet-Weihnachtsspezialitäten und Industriekultur-Souvenirs"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "113",
    "slug": "duesseldorfer-weihnachtsmarkt",
    "name": "Düsseldorfer Weihnachtsmarkt",
    "city": "Düsseldorf",
    "address": "Schadowplatz/Marktplatz, 40213 Düsseldorf",
    "description": "Der elegante Düsseldorfer Weihnachtsmarkt erstreckt sich über die gesamte Altstadt und die berühmte Königsallee. Als einer der größten Weihnachtsmärkte am Rhein bietet er Mode-Metropole-Flair mit gehobenen Produkten und internationaler Küche inmitten der stilvollen Rheinmetropole.",
    "openingDates": "22.11.2025 - 30.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 11-21 Uhr, 24./31.12. 11-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Rheinischer Sauerbraten",
      "Killepitsch",
      "Himmel un Ääd",
      "Designer-Handwerk",
      "Altbier"
    ],
    "website": "https://duesseldorf.de/weihnachtsmarkt",
    "phone": "+49 211 172020",
    "email": "weihnachtsmarkt@duesseldorf.de",
    "transport": "U-Bahn: U70, U74, U75, U76, U77, U79 bis Heinrich-Heine-Allee, S-Bahn: S1, S6, S11, S28 bis Düsseldorf Hbf",
    "highlights": [
      "Illumination der Königsallee - eine der luxuriösesten Einkaufsstraßen Europas",
      "Japanischer Weihnachtsmarkt in der Immermannstraße (größte japanische Gemeinde Deutschlands)",
      "Rheinische Spezialitäten-Verkostung jeden Donnerstag 18-20 Uhr",
      "Fashion-Weihnachtsmarkt auf der Königsallee mit Designer-Produkten",
      "Altstadt-Brauereitouren mit Weihnachtsmarkt-Rundgang jeden Freitag 16 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "114",
    "slug": "dortmunder-weihnachtsmarkt",
    "name": "Dortmunder Weihnachtsmarkt",
    "city": "Dortmund",
    "address": "Hansaplatz/Reinoldikirchplatz, 44135 Dortmund",
    "description": "Der größte Weihnachtsmarkt Nordrhein-Westfalens mit über 300 Ständen verwandelt die Dortmunder Innenstadt in ein Weihnachtswunderland. Mit dem weltweit größten Weihnachtsbaum (45 Meter hoch) aus 1.700 Rotfichten ist er ein echtes Highlight und zieht jährlich über 3,5 Millionen Besucher an.",
    "openingDates": "21.11.2025 - 30.12.2025",
    "openingHours": "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 12-21 Uhr, 24./31.12. 11-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Currywurst",
      "Dortmunder Bergmann-Bier",
      "Reibekuchen",
      "Pott-Spezialitäten",
      "BVB-Fanartikel"
    ],
    "website": "https://dortmund.de/weihnachtsmarkt",
    "phone": "+49 231 18999430",
    "email": "weihnachtsmarkt@dortmund.de",
    "transport": "U-Bahn: U41, U45, U46, U47, U49 bis Stadtgarten, S-Bahn: S1, S2, S4, S5 bis Dortmund Hbf",
    "highlights": [
      "Weltgrößter Weihnachtsbaum aus 1.700 Rotfichten (45m hoch) mit 48.000 LED-Lichtern",
      "Tägliche Illumination des Weihnachtsbaums um 17 Uhr mit musikalischer Untermalung",
      "BVB-Weihnachtsmarktstand mit Vereinsprodukten und Bratwurst",
      "Bergmann-Tradition mit historischer Zechen-Dekoration",
      "Kinderkarussell im Bergwerk-Design und tägliche Märchenstunden 15-16 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "115",
    "slug": "wuerzburger-weihnachtsmarkt",
    "name": "Würzburger Weihnachtsmarkt",
    "city": "Würzburg",
    "address": "Marktplatz/Residenzplatz, 97070 Würzburg",
    "description": "Der Würzburger Weihnachtsmarkt vor der UNESCO-Welterbe Residenz gilt als einer der schönsten Weihnachtsmärkte Frankens. Mit über 80 Ständen bietet er fränkische Gemütlichkeit und kulinarische Spezialitäten vor der barocken Kulisse des Residenzschlosses und inmitten der historischen Altstadt.",
    "openingDates": "25.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr, 23.12. 10-16 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Fränkische Bratwurst",
      "Glühwein",
      "Lebkuchen",
      "Silvaner-Punsch",
      "Fränkisches Handwerk"
    ],
    "website": "https://wuerzburg.de/weihnachtsmarkt",
    "phone": "+49 931 372336",
    "email": "weihnachtsmarkt@wuerzburg.de",
    "transport": "Straßenbahn: Linien 1, 2, 3, 4, 5 bis Residenz, Bus: Linien 10, 14, 20 bis Residenz",
    "highlights": [
      "Illuminierte UNESCO-Welterbe Residenz als romantische Kulisse",
      "Fränkische Weinprobe mit Glühwein aus regionalen Trauben jeden Freitag 18-20 Uhr",
      "Historisches Handwerk mit Live-Vorführungen: Töpferei, Glasbläserei, Holzschnitzerei",
      "Weihnachtsmarkt in der Residenz mit exklusiven Kunsthandwerksprodukten",
      "Würzburger Kinderchor-Auftritte jeden Sonntag 16 Uhr vor der Residenz"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "116",
    "slug": "bamberger-weihnachtsmarkt",
    "name": "Bamberger Weihnachtsmarkt",
    "city": "Bamberg",
    "address": "Maximilianstraße/Gabelmann, 96047 Bamberg",
    "description": "Der Bamberger Weihnachtsmarkt in der UNESCO-Welterbestadt bietet mittelalterliches Flair zwischen den historischen Gebäuden der Altstadt. Mit über 40 Ständen erstreckt er sich durch die romantischen Gassen und bietet fränkische Spezialitäten vor der einzigartigen Kulisse der Sieben-Hügel-Stadt.",
    "openingDates": "26.11.2025 - 24.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr, 24.12. 10-14 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Bamberger Rauchbier",
      "Schäuferla",
      "Lebkuchen",
      "Fränkische Bratwurst",
      "Zwiebeln"
    ],
    "website": "https://bamberg.de/weihnachtsmarkt",
    "phone": "+49 951 871161",
    "email": "weihnachtsmarkt@bamberg.de",
    "transport": "Bus: Linien 901, 902, 910, 915 bis ZOB, Regionalbahn: bis Bamberg Hbf",
    "highlights": [
      "UNESCO-Welterbe Altstadt als märchenhafte Kulisse für den Weihnachtsmarkt",
      "Bamberger Rauchbier-Glühwein - eine lokale Spezialität nur hier erhältlich",
      "Mittelalterlicher Handwerkermarkt mit authentischen Vorführungen",
      "Weihnachtsmarkt im Dom-Viertel mit religiösen Kunsthandwerksprodukten",
      "Gärtnerstadt-Produkte: frische Zwiebeln, regionale Kräuter und Gemüse"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "117",
    "slug": "chemnitzer-weihnachtsmarkt",
    "name": "Chemnitzer Weihnachtsmarkt",
    "city": "Chemnitz",
    "address": "Markt/Neumarkt, 09111 Chemnitz",
    "description": "Der traditionsreiche Chemnitzer Weihnachtsmarkt mit über 120 Ständen verwandelt die sächsische Stadt in ein weihnachtliches Erlebnis. Besonders bekannt ist er für seine erzgebirgische Handwerkskunst und die größte Nussknacker-Sammlung Sachsens. Die Nähe zum Erzgebirge spiegelt sich in den authentischen Produkten wider.",
    "openingDates": "27.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "https://media.istockphoto.com/id/520625727/de/foto/weihnachts-markt-in-frankfurt.jpg?s=612x612&w=0&k=20&c=AaRAxjIqZgNVlPJ-MPqhbbTkKzjJ7c_NQgjLJA1gSHE=",
    "specialties": [
      "Erzgebirgische Nussknacker",
      "Räuchermännchen",
      "Schwibbögen",
      "Sächsische Stollen",
      "Feuerzangenbowle"
    ],
    "website": "https://chemnitz.de/weihnachtsmarkt",
    "phone": "+49 371 488442",
    "email": "weihnachtsmarkt@chemnitz.de",
    "transport": "Straßenbahn: Linien 1, 2, 3, 4 bis Zentralhaltestelle, Bus: Linien 21, 22, 31 bis Zentralhaltestelle",
    "highlights": [
      "Größte Nussknacker-Ausstellung Sachsens mit über 500 handgeschnitzten Exemplaren",
      "Erzgebirgische Handwerksvorführungen: Spielzeugmacher, Holzschnitzer, Räuchermännchen-Hersteller",
      "Traditionelle Bergparade mit Bergmännern in historischen Uniformen jeden Samstag 17 Uhr",
      "Live-Weihnachtspyramide mit 15 Metern Höhe und traditionellen erzgebirgischen Figuren",
      "Kinderbackstube für Stollen und Lebkuchen jeden Sonntag 14-17 Uhr"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "118",
    "slug": "braunschweiger-weihnachtsmarkt",
    "name": "Braunschweiger Weihnachtsmarkt",
    "city": "Braunschweig",
    "address": "Burgplatz/Kohlmarkt, 38100 Braunschweig",
    "description": "Der traditionelle Braunschweiger Weihnachtsmarkt vor der historischen Kulisse der Dom- und Burganlage verzaubert mit niedersächsischem Charme. Mit über 120 Ständen rund um die Burg Dankwarderode und den Löwen Heinrichs des Löwen bietet er eine einzigartige mittelalterliche Atmosphäre.",
    "openingDates": "26.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    "specialties": [
      "Braunschweiger Mumme",
      "Lebkuchen",
      "Glühwein",
      "Regionale Wurst",
      "Töpferware"
    ],
    "website": "https://braunschweig.de/weihnachtsmarkt",
    "phone": "+49 531 4704040",
    "email": "weihnachtsmarkt@braunschweig.de",
    "transport": "Straßenbahn: Linien 1, 2, 5 bis Kohlmarkt, Bus: Linien 411, 413 bis Burgplatz",
    "highlights": [
      "Historische Burg Dankwarderode als Kulisse",
      "Traditionelle Handwerksvorführungen im Burginnenhof",
      "Mittelalterlicher Markt mit authentischen Produkten",
      "Glühwein-Verkostung mit regionalen Spirituosen",
      "Kinderprogramm mit Märchenerzählungen jeden Samstag"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "119",
    "slug": "kieler-weihnachtsmarkt",
    "name": "Kieler Weihnachtsmarkt",
    "city": "Kiel",
    "address": "Rathausplatz/Holstenstraße, 24103 Kiel",
    "description": "Der maritime Kieler Weihnachtsmarkt bringt skandinavischen Flair an die Ostsee. Mit über 100 Ständen rund um das historische Rathaus und entlang der Förde bietet er eine einzigartige nordische Weihnachtsatmosphäre mit Blick aufs Wasser.",
    "openingDates": "27.11.2025 - 22.12.2025",
    "openingHours": "Mo-Sa 10-20 Uhr, So 11-20 Uhr",
    "imageUrl": "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    "specialties": [
      "Glögg",
      "Räucherfisch",
      "Fischbrötchen",
      "Maritime Geschenke",
      "Ostseeschmuck"
    ],
    "website": "https://kiel.de/weihnachtsmarkt",
    "phone": "+49 431 9013030",
    "email": "weihnachtsmarkt@kiel.de",
    "transport": "Bus: Linien 1, 2, 11, 12 bis Rathausplatz, S-Bahn: S11 bis Kiel Hbf",
    "highlights": [
      "Skandinavischer Weihnachtsmarkt mit nordischen Spezialitäten",
      "Maritime Dekoration und Ostseeflair",
      "Glögg-Verkostung mit authentischen Rezepten",
      "Fischbrötchen-Stand direkt vom Kieler Hafen",
      "Kinderkarussell mit Seetiermotiven"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "120",
    "slug": "oldenburger-weihnachtsmarkt",
    "name": "Oldenburger Weihnachtsmarkt",
    "city": "Oldenburg",
    "address": "Schlossplatz/Lange Straße, 26122 Oldenburg",
    "description": "Der charmante Oldenburger Weihnachtsmarkt vor dem barocken Schloss verbindet norddeutsche Tradition mit fürstlichem Ambiente. Mit etwa 80 Ständen rund um das Oldenburger Schloss bietet er eine gemütliche Atmosphäre in der lebendigen Universitätsstadt.",
    "openingDates": "28.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 12-20 Uhr",
    "imageUrl": "/lovable-uploads/2b8ae1e1-72bb-4669-bda0-58a94434bd80.png",
    "specialties": [
      "Oldenburger Grünkohl",
      "Glühwein",
      "Pinkel",
      "Norddeutsche Süßwaren",
      "Handwerk"
    ],
    "website": "https://oldenburg.de/weihnachtsmarkt",
    "phone": "+49 441 2352525",
    "email": "weihnachtsmarkt@oldenburg.de",
    "transport": "Bus: Linien 301, 302, 306 bis Schlossplatz, Regionalbahn: RE15, RB58 bis Oldenburg Hbf",
    "highlights": [
      "Barockes Schloss als festliche Kulisse",
      "Traditionelle Grünkohl-Verkostung",
      "Norddeutsche Handwerkskunst",
      "Universitäts-Glühwein mit speziellen Sorten",
      "Studentische Weihnachtskonzerte am Wochenende"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "121",
    "slug": "osnabruecker-weihnachtsmarkt",
    "name": "Osnabrücker Weihnachtsmarkt",
    "city": "Osnabrück",
    "address": "Marktplatz/Große Straße, 49074 Osnabrück",
    "description": "Der Osnabrücker Weihnachtsmarkt in der Friedensstadt verbindet Geschichte mit Gemütlichkeit. Vor der Kulisse des gotischen Rathauses und der Marienkirche bietet er mit über 140 Ständen eine besondere niedersächsische Weihnachtsatmosphäre.",
    "openingDates": "25.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    "specialties": [
      "Osnabrücker Lebkuchen",
      "Glühwein",
      "Currywurst",
      "Westfälische Spezialitäten",
      "Friedensschmuck"
    ],
    "website": "https://osnabrueck.de/weihnachtsmarkt",
    "phone": "+49 541 3234567",
    "email": "weihnachtsmarkt@osnabrueck.de",
    "transport": "Bus: Linien 21, 22, 31, 32 bis Neumarkt, S-Bahn: S1 bis Osnabrück Hbf",
    "highlights": [
      "Gotisches Rathaus der Friedensstadt als Kulisse",
      "Friedensmarkt mit symbolischen Produkten",
      "Westfälische Spezialitäten-Verkostung",
      "Historische Handwerksvorführungen",
      "Friedenslichtzeremonie am 3. Advent"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "122",
    "slug": "bielefelder-weihnachtsmarkt",
    "name": "Bielefelder Weihnachtsmarkt",
    "city": "Bielefeld",
    "address": "Altstädter Kirchplatz/Obernstraße, 33602 Bielefeld",
    "description": "Der gemütliche Bielefelder Weihnachtsmarkt in der lebendigen Ostwestfalen-Metropole bietet über 120 Stände in der historischen Altstadt. Zwischen Altstädter Kirche und Sparrenburg-Burgberg entfaltet sich eine besondere westfälische Weihnachtsatmosphäre.",
    "openingDates": "26.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    "specialties": [
      "Westfälischer Pumpernickel",
      "Glühwein",
      "Pickert",
      "Leberwurst",
      "Ravensberger Spezialitäten"
    ],
    "website": "https://bielefeld.de/weihnachtsmarkt",
    "phone": "+49 521 512345",
    "email": "weihnachtsmarkt@bielefeld.de",
    "transport": "Stadtbahn: Linien 1, 2, 3, 4 bis Jahnplatz, Bus: Linien 21, 22 bis Altstädter Kirchplatz",
    "highlights": [
      "Historische Altstädter Kirche als Kulisse",
      "Sparrenburg-Blick von der Obernstraße",
      "Westfälische Spezialitäten-Verkostung",
      "Ravensberger Handwerkskunst",
      "Pickert-Bäckerei mit Live-Vorführungen"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "123",
    "slug": "darmstaedter-weihnachtsmarkt",
    "name": "Darmstädter Weihnachtsmarkt",
    "city": "Darmstadt",
    "address": "Marktplatz/Stadtkirchplatz, 64283 Darmstadt",
    "description": "Der Darmstädter Weihnachtsmarkt in der Wissenschaftsstadt verbindet Tradition mit modernem Flair. Vor der Kulisse des Residenzschlosses und der Stadtkirche bietet er mit etwa 100 Ständen eine einzigartige südhessische Weihnachtsatmosphäre.",
    "openingDates": "27.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-20 Uhr",
    "imageUrl": "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    "specialties": [
      "Darmstädter Davidskuchen",
      "Glühwein",
      "Südhessische Bratwurst",
      "Wissenschaftsschmuck",
      "Handwerk"
    ],
    "website": "https://darmstadt.de/weihnachtsmarkt",
    "phone": "+49 6151 134567",
    "email": "weihnachtsmarkt@darmstadt.de",
    "transport": "Straßenbahn: Linien 2, 3, 5, 9 bis Luisenplatz, S-Bahn: S3, S4 bis Darmstadt Hbf",
    "highlights": [
      "Residenzschloss als fürstliche Kulisse",
      "Wissenschaftsstadt-Themenmarkt",
      "Südhessische Spezialitäten-Verkostung",
      "Moderne Kunsthandwerker aus der Region",
      "Jugendstil-Architektur der Mathildenhöhe im Hintergrund"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "124",
    "slug": "kasseler-weihnachtsmarkt",
    "name": "Kasseler Weihnachtsmarkt",
    "city": "Kassel",
    "address": "Königsplatz/Wilhelmsstraße, 34117 Kassel",
    "description": "Der traditionelle Kasseler Weihnachtsmarkt in der documenta-Stadt verbindet nordhessische Gemütlichkeit mit kulturellem Flair. Mit über 130 Ständen rund um den Königsplatz und entlang der Wilhelmsstraße bietet er eine lebendige Weihnachtsatmosphäre.",
    "openingDates": "25.11.2025 - 23.12.2025",
    "openingHours": "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    "imageUrl": "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    "specialties": [
      "Kasseler Leberwurst",
      "Glühwein",
      "Ahle Worscht",
      "Nordhessische Spezialitäten",
      "Kunsthandwerk"
    ],
    "website": "https://kassel.de/weihnachtsmarkt",
    "phone": "+49 561 787654",
    "email": "weihnachtsmarkt@kassel.de",
    "transport": "Straßenbahn: Linien 1, 3, 6, 8 bis Königsplatz, RegioTram: RT1, RT4, RT5 bis Hauptbahnhof",
    "highlights": [
      "documenta-Stadt mit kulturellem Ambiente",
      "Nordhessische Spezialitäten-Verkostung",
      "Ahle Worscht direkt vom Produzenten",
      "Kunsthandwerk aus der Kunstregion",
      "Wilhelmshöhe Schlosspark in der Nähe"
    ],
    "entryPrice": "Eintritt frei"
  },
  {
    "id": "125",
    "slug": "potsdamer-weihnachtsmarkt",
    "name": "Potsdamer Weihnachtsmarkt",
    "city": "Potsdam",
    "address": "Alter Markt/Brandenburger Straße, 14467 Potsdam",
    "description": "Der königliche Potsdamer Weihnachtsmarkt vor der Kulisse von Stadtschloss und Nikolaikirche verbindet preußische Eleganz mit gemütlicher Weihnachtsatmosphäre. Mit etwa 110 Ständen bietet er ein einzigartiges Erlebnis in der UNESCO-Welterbestadt.",
    "openingDates": "24.11.2025 - 22.12.2025",
    "openingHours": "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-20 Uhr",
    "imageUrl": "/lovable-uploads/2b8ae1e1-72bb-4669-bda0-58a94434bd80.png",
    "specialties": [
      "Königsberger Klopse",
      "Glühwein",
      "Preußische Lebkuchen",
      "Sanssouci-Produkte",
      "Kunsthandwerk"
    ],
    "website": "https://potsdam.de/weihnachtsmarkt",
    "phone": "+49 331 289123",
    "email": "weihnachtsmarkt@potsdam.de",
    "transport": "S-Bahn: S7 bis Potsdam Hauptbahnhof, Straßenbahn: 91, 92, 96 bis Alter Markt",
    "highlights": [
      "Stadtschloss und Nikolaikirche als königliche Kulisse",
      "UNESCO-Welterbe-Atmosphäre",
      "Preußische Spezialitäten-Verkostung",
      "Sanssouci-Themenmarkt mit Schloss-Produkten",
      "Holländisches Viertel in Laufnähe"
    ],
    "entryPrice": "Eintritt frei"
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
