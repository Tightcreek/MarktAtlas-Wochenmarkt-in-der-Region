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
  },
  {
    id: "heidelberger-weihnachtsmarkt",
    slug: "heidelberger-weihnachtsmarkt",
    name: "Heidelberger Weihnachtsmarkt",
    city: "Heidelberg",
    address: "Kornmarkt/Universitätsplatz, 69117 Heidelberg",
    description: "Der romantische Heidelberger Weihnachtsmarkt vor der Kulisse des weltberühmten Schlosses ist ein wahres Märchenland. Mit seinem besonderen Charme zwischen Neckar und Schloss bietet er eine der schönsten Weihnachtsmarkt-Atmosphären Deutschlands.",
    openingDates: "27.11.2025 - 22.12.2025",
    openingHours: "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-20 Uhr",
    imageUrl: "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    specialties: ["Heidelberger Studentenkuss", "Glühwein", "Kunsthandwerk", "Regionale Spezialitäten", "Weihnachtsbaumschmuck"],
    website: "https://heidelberg.de/weihnachtsmarkt"
  },
  {
    id: "luebecker-weihnachtsmarkt",
    slug: "luebecker-weihnachtsmarkt",
    name: "Lübecker Weihnachtsmarkt",
    city: "Lübeck",
    address: "Koberg/Breite Straße, 23552 Lübeck",
    description: "Der traditionelle Lübecker Weihnachtsmarkt in der UNESCO-Welterbestadt verzaubert mit hanseatischem Flair. Zwischen den historischen Backsteingebäuden der Altstadt bietet er eine besondere norddeutsche Weihnachtsatmosphäre mit maritimen Akzenten.",
    openingDates: "25.11.2025 - 30.12.2025",
    openingHours: "Mo-Sa 10-21 Uhr, So 11-21 Uhr",
    imageUrl: "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    specialties: ["Lübecker Marzipan", "Glögg", "Punsch", "Nordsee-Delikatessen", "Handwerkskunst"],
    website: "https://luebeck.de/weihnachtsmarkt"
  },
  {
    id: "augsburger-christkindlmarkt",
    slug: "augsburger-christkindlmarkt",
    name: "Augsburger Christkindlmarkt",
    city: "Augsburg",
    address: "Rathausplatz, 86150 Augsburg",
    description: "Der Augsburger Christkindlmarkt vor dem prächtigen Renaissance-Rathaus ist einer der schönsten Weihnachtsmärkte Bayerns. Mit über 80 Ständen und der besonderen Atmosphäre der historischen Fuggerstadt bietet er schwäbische Gemütlichkeit und Tradition.",
    openingDates: "29.11.2025 - 24.12.2025",
    openingHours: "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    imageUrl: "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    specialties: ["Lebkuchen", "Augsburger Zwetschgenmännle", "Glühwein", "Schwäbische Spezialitäten", "Christbaumschmuck"],
    website: "https://augsburg.de/christkindlmarkt"
  },
  {
    id: "erfurter-weihnachtsmarkt",
    slug: "erfurter-weihnachtsmarkt",
    name: "Erfurter Weihnachtsmarkt",
    city: "Erfurt",
    address: "Domplatz, 99084 Erfurt",
    description: "Der Erfurter Weihnachtsmarkt vor der imposanten Kulisse von Dom und Severikirche gilt als einer der schönsten Deutschlands. Mit über 200 Ständen auf dem historischen Domplatz bietet er thüringische Gemütlichkeit und eine einzigartige mittelalterliche Atmosphäre.",
    openingDates: "28.11.2025 - 22.12.2025",
    openingHours: "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    imageUrl: "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    specialties: ["Thüringer Rostbratwurst", "Feuerzangenbowle", "Stollen", "Töpferware", "Weihnachtspyramiden"],
    website: "https://erfurt.de/weihnachtsmarkt"
  },
  {
    id: "rothenburg-reiterlesmarkt",
    slug: "rothenburg-reiterlesmarkt",
    name: "Reiterlesmarkt Rothenburg",
    city: "Rothenburg ob der Tauber",
    address: "Marktplatz, 91541 Rothenburg ob der Tauber",
    description: "Der Reiterlesmarkt in Rothenburg ob der Tauber gilt als einer der romantischsten Weihnachtsmärkte Deutschlands. Eingebettet in die mittelalterliche Kulisse der besterhaltenen Stadtmauer Deutschlands bietet er ein märchenhaftes Weihnachtserlebnis.",
    openingDates: "21.11.2025 - 23.12.2025",
    openingHours: "Fr-So 11-19 Uhr, täglich in der Adventszeit 11-19 Uhr",
    imageUrl: "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    specialties: ["Lebkuchen", "Glühwein", "Schneeballen", "Weihnachtsschmuck", "Mittelalterliche Handwerkskunst"],
    website: "https://rothenburg.de/reiterlesmarkt"
  },
  {
    id: "bremer-weihnachtsmarkt",
    slug: "bremer-weihnachtsmarkt",
    name: "Bremer Weihnachtsmarkt",
    city: "Bremen",
    address: "Marktplatz/Liebfrauenkirchhof, 28195 Bremen",
    description: "Der Bremer Weihnachtsmarkt mit über 170 Ständen verzaubert vor der Kulisse des UNESCO-Welterbes Rathaus und Rolands. Der traditionelle Markt bietet hanseatisches Flair und maritime Atmosphäre inmitten der historischen Altstadt. Besonders beliebt ist der Schlachte-Zauber an der Weser.",
    openingDates: "24.11.2025 - 23.12.2025",
    openingHours: "Mo-Do 11-20:30 Uhr, Fr-Sa 11-21:30 Uhr, So 11-20:30 Uhr",
    imageUrl: "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    specialties: ["Bremer Klaben", "Glühwein", "Fischbrötchen", "Maritime Geschenke", "Nordsee-Spezialitäten"],
    website: "https://bremen.de/weihnachtsmarkt"
  },
  {
    id: "hannoverscher-weihnachtsmarkt",
    slug: "hannoverscher-weihnachtsmarkt",
    name: "Hannoverscher Weihnachtsmarkt",
    city: "Hannover",
    address: "Marktkirche/Hauptbahnhof, 30159 Hannover",
    description: "Das historische Weihnachtsdorf vor der Marktkirche und am Hauptbahnhof bietet niedersächsische Fachwerkarchitektur und urige Atmosphäre. Mit traditionellem Kunsthandwerk und regionalen Spezialitäten sorgt der Markt für eine besinnliche Adventszeit in der Landeshauptstadt.",
    openingDates: "24.11.2025 - 30.12.2025",
    openingHours: "Täglich 11-21 Uhr, 24.12. bis 14 Uhr, 25.12. geschlossen",
    imageUrl: "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    specialties: ["Lüneburger Heidekartoffeln", "Glühwein", "Handwerkskunst", "Regionale Spezialitäten", "Weihnachtsbaumschmuck"],
    website: "https://weihnachtsdorf-hannover.de"
  },
  {
    id: "wuerzburger-weihnachtsmarkt",
    slug: "wuerzburger-weihnachtsmarkt",
    name: "Würzburger Weihnachtsmarkt",
    city: "Würzburg",
    address: "Marktplatz, 97070 Würzburg",
    description: "Der Würzburger Weihnachtsmarkt vor der Kulisse der Marienkapelle und des Falkenhauses gehört zu den schönsten Frankens. Mit fränkischen Spezialitäten und regionalem Kunsthandwerk bietet er eine besondere Atmosphäre inmitten der barocken Residenzstadt.",
    openingDates: "29.11.2025 - 23.12.2025",
    openingHours: "Mo-Sa 10-20:30 Uhr, So 11-20:30 Uhr",
    imageUrl: "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    specialties: ["Fränkischer Sauerbraten", "Glühwein", "Lebkuchen", "Kunsthandwerk", "Weihnachtspyramiden"],
    website: "https://wuerzburg.de/weihnachtsmarkt"
  },
  {
    id: "regensburger-christkindlmarkt",
    slug: "regensburger-christkindlmarkt",
    name: "Regensburger Christkindlmarkt",
    city: "Regensburg",
    address: "Neupfarrplatz, 93047 Regensburg",
    description: "Der Regensburger Christkindlmarkt in der UNESCO-Welterbestadt verzaubert vor mittelalterlicher Kulisse. Mit über 50 Ständen bietet er bayerische Gemütlichkeit und traditionelles Handwerk inmitten der besterhaltenen mittelalterlichen Großstadt Deutschlands.",
    openingDates: "24.11.2025 - 23.12.2025",
    openingHours: "Mo-Do 9:30-20 Uhr, Fr-Sa 9:30-21 Uhr, So 11-20 Uhr",
    imageUrl: "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    specialties: ["Regensburger Wurst", "Lebkuchen", "Glühwein", "Bayerische Spezialitäten", "Christbaumschmuck"],
    website: "https://regensburg.de/christkindlmarkt"
  },
  {
    id: "bamberger-weihnachtsmarkt",
    slug: "bamberger-weihnachtsmarkt",
    name: "Bamberger Weihnachtsmarkt",
    city: "Bamberg",
    address: "Maximilianstraße/Grüner Markt, 96047 Bamberg",
    description: "Der Bamberger Weihnachtsmarkt in der UNESCO-Welterbestadt bietet eine einzigartige Atmosphäre zwischen barocken Bürgerhäusern und dem gotischen Dom. Die fränkische Bierstadt verwandelt sich in der Adventszeit in ein märchenhaftes Weihnachtswunderland.",
    openingDates: "25.11.2025 - 23.12.2025",
    openingHours: "Mo-Do 9:30-20 Uhr, Fr-Sa 9:30-21 Uhr, So 11-20 Uhr",
    imageUrl: "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    specialties: ["Bamberger Hörnla", "Rauchbier", "Lebkuchen", "Fränkische Spezialitäten", "Kunsthandwerk"],
    website: "https://bamberg.info/weihnachtsmarkt"
  },
  {
    id: "freiburger-weihnachtsmarkt",
    slug: "freiburger-weihnachtsmarkt",
    name: "Freiburger Weihnachtsmarkt",
    city: "Freiburg im Breisgau",
    address: "Münsterplatz/Rathausplatz, 79098 Freiburg",
    description: "Der Freiburger Weihnachtsmarkt vor der Kulisse des gotischen Münsters gehört zu den schönsten Südwestdeutschlands. Mit badischen Spezialitäten und Schwarzwälder Handwerk bietet er eine besondere Atmosphäre am Fuße des Schwarzwaldes.",
    openingDates: "21.11.2025 - 23.12.2025",
    openingHours: "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    imageUrl: "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    specialties: ["Schwarzwälder Kirschtorte", "Glühwein", "Geröstete Maronen", "Badische Spezialitäten", "Kuckucksuhren"],
    website: "https://weihnachtsmarkt.freiburg.de"
  },
  {
    id: "duesseldorfer-weihnachtsmarkt",
    slug: "duesseldorfer-weihnachtsmarkt",
    name: "Düsseldorfer Weihnachtsmarkt",
    city: "Düsseldorf",
    address: "Schadowplatz/Königsallee, 40212 Düsseldorf",
    description: "Der Düsseldorfer Weihnachtsmarkt verwandelt die Modestadt in ein Weihnachtswunderland. Mit internationaler Vielfalt und rheinischer Gemütlichkeit bietet er eine perfekte Mischung aus Tradition und Moderne entlang der berühmten Königsallee.",
    openingDates: "20.11.2025 - 30.12.2025",
    openingHours: "Mo-Sa 11-21 Uhr, So 12-21 Uhr, Fr-Sa bis 22 Uhr",
    imageUrl: "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    specialties: ["Rheinischer Sauerbraten", "Altbier", "Himmel un Ääd", "Internationale Spezialitäten", "Modeaccessoires"],
    website: "https://visitduesseldorf.de/weihnachtsmarkt"
  },
  {
    id: "essener-weihnachtsmarkt",
    slug: "essener-weihnachtsmarkt",
    name: "Internationaler Weihnachtsmarkt Essen",
    city: "Essen",
    address: "Kennedyplatz/Willy-Brandt-Platz, 45127 Essen",
    description: "Der Internationale Weihnachtsmarkt Essen ist einer der größten im Ruhrgebiet. Als Kulturhauptstadt Europas 2010 bietet Essen eine besondere Mischung aus Industriekultur und weihnachtlicher Gemütlichkeit mit internationalen Spezialitäten.",
    openingDates: "15.11.2025 - 23.12.2025",
    openingHours: "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 12-21 Uhr",
    imageUrl: "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    specialties: ["Currywurst", "Pfefferpotthast", "Glühwein", "Internationale Küche", "Ruhrpott-Souvenirs"],
    website: "https://visitessen.de/weihnachtsmarkt"
  },
  {
    id: "dortmunder-weihnachtsmarkt",
    slug: "dortmunder-weihnachtsmarkt",
    name: "Dortmunder Weihnachtsstadt",
    city: "Dortmund",
    address: "Hansaplatz, 44137 Dortmund",
    description: "Die Dortmunder Weihnachtsstadt ist einer der größten Weihnachtsmärkte Deutschlands mit über 300 Ständen. Der größte Weihnachtsbaum der Welt mit 1700 Fichten und 48.000 Lichtern macht ihn zu einem besonderen Erlebnis im Herzen des Ruhrgebiets.",
    openingDates: "21.11.2025 - 30.12.2025",
    openingHours: "Mo-Do 11-21 Uhr, Fr-Sa 11-22 Uhr, So 12-21 Uhr",
    imageUrl: "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    specialties: ["Currywurst", "Dortmunder Bier", "Pfefferpotthast", "Ruhrgebiet-Spezialitäten", "BVB-Fanartikei"],
    website: "https://weihnachtsstadt-do.de"
  },
  {
    id: "leipziger-weihnachtsmarkt",
    slug: "leipziger-weihnachtsmarkt",
    name: "Leipziger Weihnachtsmarkt",
    city: "Leipzig",
    address: "Markt/Naschmarkt, 04109 Leipzig",
    description: "Der Leipziger Weihnachtsmarkt blickt auf eine über 500-jährige Tradition zurück. Vor der Kulisse der Thomaskirche und des Alten Rathauses bietet er sächsische Gemütlichkeit und eine besondere musikalische Atmosphäre in der Stadt von Bach und Mendelssohn.",
    openingDates: "26.11.2025 - 23.12.2025",
    openingHours: "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 11-20 Uhr",
    imageUrl: "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    specialties: ["Leipziger Lerchen", "Sächsischer Stollen", "Glühwein", "Pulsnitzer Lebkuchen", "Erzgebirgische Volkskunst"],
    website: "https://leipzig.de/weihnachtsmarkt"
  },
  {
    id: "mainzer-weihnachtsmarkt",
    slug: "mainzer-weihnachtsmarkt",
    name: "Mainzer Weihnachtsmarkt",
    city: "Mainz",
    address: "Markt/Leichhof, 55116 Mainz",
    description: "Der Mainzer Weihnachtsmarkt vor dem imposanten Dom St. Martin gehört zu den schönsten Rheinland-Pfalz'. Mit über 120 Ständen und der besonderen rheinischen Atmosphäre bietet er eine perfekte Mischung aus Tradition und lebendiger Universitätsstadt-Kultur.",
    openingDates: "22.11.2025 - 23.12.2025",
    openingHours: "Mo-Do 10-20:30 Uhr, Fr-Sa 10-21:30 Uhr, So 11-20:30 Uhr",
    imageUrl: "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    specialties: ["Rheinischer Döppekuchen", "Glühwein", "Mainzer Fastnachtskrapfen", "Rheinland-Pfälzer Spezialitäten", "Gutenberg-Souvenirs"],
    website: "https://mainz.de/weihnachtsmarkt"
  },
  {
    id: "trierer-weihnachtsmarkt",
    slug: "trierer-weihnachtsmarkt",
    name: "Trierer Weihnachtsmarkt",
    city: "Trier",
    address: "Hauptmarkt/Domfreihof, 54290 Trier",
    description: "Der Trierer Weihnachtsmarkt in Deutschlands ältester Stadt verbindet 2000 Jahre Geschichte mit weihnachtlicher Gemütlichkeit. Vor der Kulisse der Porta Nigra und des Doms bietet er eine einzigartige römisch-mittelalterliche Atmosphäre.",
    openingDates: "19.11.2025 - 22.12.2025",
    openingHours: "Mo-Do 10-20 Uhr, Fr-Sa 10-21 Uhr, So 12-20 Uhr",
    imageUrl: "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    specialties: ["Trierer Weinbergspfirsiche", "Moselwein-Glühwein", "Römerbrot", "Eifel-Spezialitäten", "Antike Handwerkskunst"],
    website: "https://trier.de/weihnachtsmarkt"
  },
  {
    id: "konstanzer-weihnachtsmarkt",
    slug: "konstanzer-weihnachtsmarkt",
    name: "Konstanzer Weihnachtsmarkt",
    city: "Konstanz",
    address: "Münsterplatz/Marktstätte, 78462 Konstanz",
    description: "Der Konstanzer Weihnachtsmarkt am Bodensee bietet eine einzigartige Alpenkulisse mit Schweizer Flair. Mit direktem Blick auf den See und die Alpen verzaubert er Besucher mit süddeutscher Gemütlichkeit und internationaler Atmosphäre.",
    openingDates: "21.11.2025 - 22.12.2025",
    openingHours: "Mo-Do 11-20 Uhr, Fr-Sa 11-21 Uhr, So 11-20 Uhr",
    imageUrl: "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    specialties: ["Bodensee-Fischspezialitäten", "Schnapsbrenner-Erzeugnisse", "Schweizer Rösti", "Alpen-Käse", "Seehas-Lebkuchen"],
    website: "https://konstanz.de/weihnachtsmarkt"
  },
  {
    id: "goettinger-weihnachtsmarkt",
    slug: "goettinger-weihnachtsmarkt",
    name: "Göttinger Weihnachtsmarkt",
    city: "Göttingen",
    address: "Markt/Wilhelmsplatz, 37073 Göttingen",
    description: "Der Göttinger Weihnachtsmarkt in der traditionsreichen Universitätsstadt bietet eine besondere Mischung aus studentischem Leben und niedersächsischer Tradition. Vor dem historischen Gänseliesel-Brunnen entfaltet sich eine gemütliche Adventsatmosphäre.",
    openingDates: "22.11.2025 - 30.12.2025",
    openingHours: "Mo-Sa 10-20 Uhr, So 11-20 Uhr, Fr-Sa bis 21 Uhr",
    imageUrl: "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    specialties: ["Göttinger Pökelfleisch", "Studenten-Feuerzange", "Niedersächsischer Honig", "Universitäts-Souvenirs", "Harz-Spezialitäten"],
    website: "https://goettingen.de/weihnachtsmarkt"
  },
  {
    id: "kieler-weihnachtsmarkt",
    slug: "kieler-weihnachtsmarkt",
    name: "Kieler Weihnachtsmarkt",
    city: "Kiel",
    address: "Asmus-Bremer-Platz/Rathausplatz, 24103 Kiel",
    description: "Der Kieler Weihnachtsmarkt an der Förde verbindet maritime Tradition mit schleswig-holsteinischer Gemütlichkeit. Als Landeshauptstadt und Hafenstadt bietet Kiel eine besondere norddeutsche Weihnachtsatmosphäre mit Meeresblick.",
    openingDates: "20.11.2025 - 30.12.2025",
    openingHours: "Mo-Sa 11-20:30 Uhr, So 12-20:30 Uhr, Fr-Sa bis 21:30 Uhr",
    imageUrl: "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    specialties: ["Kieler Sprotten", "Förde-Fisch", "Pharisäer", "Maritime Geschenke", "Schleswig-Holstein Spezialitäten"],
    website: "https://kiel.de/weihnachtsmarkt"
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