// Centralized blog data for market-related blog posts
// This file serves as the single source of truth for all blog posts related to markets

export interface BlogPost {
  id: string;
  slug: string; // URL-freundlicher Slug für den Blogbeitrag
  title: string;
  excerpt: string; // Fine kurze Zusammenfassung des Beitrags
  content: string; // Vollständiger Inhalt des Blogbeitrags
  imageUrl?: string; // Optionaler Link zu einem Bild für den Beitrag (relative URL)
  link: string; // Der vollständige Link zum Blogbeitrag (kann ein externer Link sein)
  marketSlugs: string[]; // Ein Array von Slugs, die angeben, zu welchen Märkten der Beitrag gehört
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "viktualienmarkt-muenchen-regionale-produkte",
    title: "Die besten regionalen Produkte auf dem Viktualienmarkt München",
    excerpt: "Entdecken Sie die Vielfalt der bayerischen Küche und lernen Sie die traditionsreichsten Stände des berühmten Münchner Marktes kennen.",
    content: `<h2>Der Viktualienmarkt: Ein Paradies für Feinschmecker</h2>
    <p>Der Viktualienmarkt im Herzen Münchens ist seit über 200 Jahren der zentrale Anlaufpunkt für alle, die Wert auf regionale und qualitativ hochwertige Lebensmittel legen. Mit über 140 Ständen bietet er eine einzigartige Vielfalt bayerischer Spezialitäten.</p>
    
    <h3>Die traditionsreichsten Stände</h3>
    <p><strong>Käserei Bergader:</strong> Seit 1902 verkauft die Familie Bergader ihre preisgekrönten bayerischen Käsesorten. Probieren Sie unbedingt den Blauschimmelkäse "Edelpilz".</p>
    
    <p><strong>Schmalznudel Cafe Frischhut:</strong> Die original Münchner Schmalznudeln werden hier seit 1973 nach traditionellem Rezept frisch zubereitet.</p>
    
    <p><strong>Der Obststand Schneider:</strong> Drei Generationen versorgen die Münchner mit frischem Obst aus der Region. Die Äpfel vom Bodensee sind besonders empfehlenswert.</p>
    
    <h3>Saisonale Highlights</h3>
    <p>Im Herbst locken frische Maronen und der erste Federweiße. Im Frühjahr begeistern Spargel aus Schrobenhausen und die ersten Erdbeeren. Jede Jahreszeit bringt ihre eigenen kulinarischen Schätze hervor.</p>`,
    imageUrl: "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    link: "/blog/viktualienmarkt-muenchen-regionale-produkte",
    marketSlugs: ["viktualienmarkt-muenchen", "markt-elisabethplatz-muenchen"]
  },
  {
    id: "2",
    slug: "hackescher-markt-streetfood-trends",
    title: "Streetfood-Revolution am Hackeschen Markt Berlin",
    excerpt: "Wie sich der traditionelle Wochenmarkt zu einem Hotspot für internationale Küche entwickelt hat und welche neuen Stände Sie unbedingt probieren sollten.",
    content: `<h2>Von traditionell zu trendig: Die Entwicklung des Hackeschen Marktes</h2>
    <p>Was einst ein klassischer Wochenmarkt mit regionalen Produkten war, hat sich in den letzten Jahren zu einem pulsierenden Zentrum der internationalen Streetfood-Szene entwickelt.</p>
    
    <h3>Die neuen Streetfood-Stars</h3>
    <p><strong>Korean BBQ Truck:</strong> Authentische koreanische Bulgogi-Burger und Kimchi-Fries haben hier eine treue Fangemeinde gefunden.</p>
    
    <p><strong>Mama's Arepa Bar:</strong> Venezuelanische Arepas gefüllt mit kreativen Zutaten - von klassischem Pulled Pork bis hin zu veganen Varianten.</p>
    
    <p><strong>The Dumpling Brothers:</strong> Handgemachte Dumplings aus verschiedenen asiatischen Traditionen, täglich frisch zubereitet.</p>
    
    <h3>Fusion trifft Tradition</h3>
    <p>Besonders spannend ist die Verschmelzung traditioneller deutscher Produkte mit internationalen Geschmäckern. So entstehen Currywurst mit hausgemachten indischen Gewürzmischungen oder Döner mit regionalen Gemüse aus Brandenburg.</p>`,
    imageUrl: "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    link: "/blog/hackescher-markt-streetfood-trends",
    marketSlugs: ["wochenmarkt-hackescher-markt-berlin", "wochenmarkt-kollwitzplatz-berlin"]
  },
  {
    id: "3",
    slug: "isemarkt-hamburg-nachhaltigkeit",
    title: "Nachhaltigkeit auf Hamburger Märkten: Der Isemarkt als Vorreiter",
    excerpt: "Erfahren Sie, wie der Isemarkt Hamburg mit Zero-Waste-Initiativen und Bio-Produkten neue Maßstäbe für umweltfreundliches Einkaufen setzt.",
    content: `<h2>Grüne Revolution auf dem Isemarkt</h2>
    <p>Der Isemarkt in Hamburg setzt neue Maßstäbe in Sachen Nachhaltigkeit und Umweltschutz. Als einer der ersten Märkte Deutschlands hat er ein umfassendes Zero-Waste-Konzept eingeführt.</p>
    
    <h3>Zero-Waste-Initiativen</h3>
    <p><strong>Pfandsystem für Verpackungen:</strong> Viele Stände bieten wiederverwendbare Behälter an, die gegen Pfand ausgeliehen werden können.</p>
    
    <p><strong>Kompostierung vor Ort:</strong> Organische Abfälle werden direkt auf dem Markt kompostiert und als Dünger an die regionalen Bauern zurückgegeben.</p>
    
    <p><strong>Plastikfreie Zone:</strong> Seit 2023 ist der Markt komplett plastikfrei. Alle Verpackungen bestehen aus kompostierbaren Materialien.</p>
    
    <h3>Bio-Produzenten im Fokus</h3>
    <p>Über 80% der Stände verkaufen ausschließlich Bio-Produkte. Die Waren kommen größtenteils aus einem Umkreis von 50 Kilometern und werden teilweise noch am selben Tag geerntet.</p>`,
    imageUrl: "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    link: "/blog/isemarkt-hamburg-nachhaltigkeit",
    marketSlugs: ["isemarkt-hamburg", "grossneumarkt-hamburg", "blankeneser-wochenmarkt-hamburg"]
  },
  {
    id: "4",
    slug: "herbst-spezialitaeten-deutsche-maerkte",
    title: "Saisonale Spezialitäten: Was der Herbst auf deutschen Märkten bringt",
    excerpt: "Von Kürbissen bis Pilzen - eine kulinarische Reise durch die Herbstschätze auf den Wochenmärkten in Frankfurt, Stuttgart und Düsseldorf.",
    content: `<h2>Herbstzeit ist Marktzeit</h2>
    <p>Der Herbst verwandelt deutsche Wochenmärkte in wahre Schatzkammern regionaler Köstlichkeiten. Von bunten Kürbissen bis hin zu aromatischen Pilzen - die Saison bietet eine Fülle an frischen, lokalen Produkten.</p>
    
    <h3>Kürbisvielfalt in Frankfurt</h3>
    <p>Die Kleinmarkthalle Frankfurt zeigt sich im Herbst von ihrer buntesten Seite. Über 20 verschiedene Kürbissorten - vom klassischen Hokkaido bis zum exotischen Butternut - stapeln sich an den Ständen.</p>
    
    <h3>Pilzsaison in Stuttgart</h3>
    <p>Der Wochenmarkt am Marktplatz Stuttgart ist berühmt für seine Pilzvielfalt. Steinpilze aus dem Schwarzwald, Pfifferlinge aus den Schwäbischen Alpen und seltene Trüffel aus der Region.</p>
    
    <h3>Apfelernte in Düsseldorf</h3>
    <p>Der Carlsplatz feiert die Apfelernte mit über 40 regionalen Sorten. Von süßen Dessertäpfeln bis hin zu sauren Kochäpfeln - hier findet jeder seinen Favoriten.</p>`,
    imageUrl: "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    link: "/blog/herbst-spezialitaeten-deutsche-maerkte",
    marketSlugs: ["kleinmarkthalle-frankfurt", "wochenmarkt-marktplatz-stuttgart", "carlsplatz-duesseldorf"]
  },
  {
    id: "5",
    slug: "kleinmarkthalle-frankfurt-geschichte",
    title: "Die Geschichte der Kleinmarkthalle Frankfurt: 60 Jahre Tradition",
    excerpt: "Eine Zeitreise durch sechs Jahrzehnte der berühmtesten Markthalle Deutschlands und ihre Entwicklung zum kulinarischen Zentrum Frankfurts.",
    content: `<h2>60 Jahre Kleinmarkthalle: Eine Erfolgsgeschichte</h2>
    <p>Seit ihrer Eröffnung 1963 ist die Kleinmarkthalle Frankfurt das kulinarische Herz der Mainmetropole. Was mit 40 Ständen begann, ist heute zu einem internationalen Foodparadies mit über 150 Verkaufsständen gewachsen.</p>
    
    <h3>Die Anfänge</h3>
    <p>Nach dem Krieg brauchte Frankfurt einen zentralen Marktplatz. Die alte Kleinmarkthalle war zu klein geworden, also wurde die neue Halle geplant - modern, funktional und mit Platz für Wachstum.</p>
    
    <h3>Internationale Küche kommt dazu</h3>
    <p>In den 80er Jahren wandelte sich die Halle grundlegend. Türkische, italienische und später asiatische Händler brachten neue Geschmäcker und Produkte mit. Heute ist die Kleinmarkthalle ein Spiegel der Frankfurter Gesellschaft.</p>
    
    <h3>Modernisierung und Zukunft</h3>
    <p>2010 wurde die Halle grundlegend renoviert. Moderne Kühlung, bessere Belüftung und barrierefreie Zugänge machten sie fit für die Zukunft, ohne den traditionellen Charme zu verlieren.</p>`,
    link: "/blog/kleinmarkthalle-frankfurt-geschichte",
    marketSlugs: ["kleinmarkthalle-frankfurt", "erzeugermarkt-konstablerwache-frankfurt"]
  },
  {
    id: "6",
    slug: "maybachufer-berlin-internationale-kueche",
    title: "Internationale Küche am Maybachufer: Berlins multikultureller Markt",
    excerpt: "Wie der türkische Markt am Maybachufer Berlin zur ersten Adresse für authentische internationale Küche wurde.",
    content: `<h2>Ein Markt, viele Kulturen</h2>
    <p>Der Wochenmarkt am Maybachufer, liebevoll "Türkenmarkt" genannt, ist weit mehr als nur ein türkischer Markt. Er ist ein lebendiges Beispiel für Berlins kulturelle Vielfalt und kulinarische Offenheit.</p>
    
    <h3>Authentische türkische Spezialitäten</h3>
    <p>Von frisch gebackenem Pide über eingelegte Oliven bis hin zu orientalischen Süßwaren - hier finden Sie alles für die authentische türkische Küche. Die Qualität ist hervorragend, die Preise fair.</p>
    
    <h3>Internationale Erweiterung</h3>
    <p>In den letzten Jahren haben sich auch arabische, persische und levantinische Händler angesiedelt. So entstehen kulinarische Brücken zwischen verschiedenen Kulturen des Nahen Ostens.</p>
    
    <h3>Ein sozialer Treffpunkt</h3>
    <p>Der Markt ist mehr als ein Einkaufsort - er ist ein sozialer Raum, wo sich Menschen verschiedener Kulturen begegnen, austauschen und voneinander lernen. Diese Atmosphäre macht den besonderen Charme des Maybachufer-Marktes aus.</p>`,
    link: "/blog/maybachufer-berlin-internationale-kueche",
    marketSlugs: ["wochenmarkt-maybachufer-berlin", "wochenmarkt-suedstern-berlin"]
  },
  {
  id: "7",
  slug: "wochenmarkt-wilhelmsplatz-koeln-nachhaltigkeit-vielfalt",
  title: "Der Wochenmarkt am Wilhelmsplatz: Ein Juwel für regionales Essen in Köln",
  excerpt: "Entdecken Sie, warum der Wochenmarkt am Wilhelmsplatz in Köln mehr als nur ein Einkaufsort ist – ein Ort für nachhaltige Produkte, Vielfalt und Gemeinschaft.",
  content: `<h2>Willkommen am Wilhelmsplatz: Kölns grüner Treffpunkt</h2>
  <p>Im Herzen des Kölner Stadtteils Nippes liegt der Wochenmarkt am Wilhelmsplatz, ein wahres Highlight für alle Liebhaber von frischen, regionalen und nachhaltigen Lebensmitteln. Zweimal pro Woche verwandelt sich der Platz in einen lebendigen Treffpunkt, der weit über die Grenzen des Veedels hinaus bekannt ist.</p>
  
  <h3>Die besten regionalen Anbieter</h3>
  <p>Der Markt am Wilhelmsplatz zeichnet sich durch seine Vielfalt aus. Hier finden Sie nicht nur das klassische Obst und Gemüse, sondern auch eine beeindruckende Auswahl an Spezialitäten:</p>
  <ul>
    <li><strong>Käse aus dem Bergischen Land:</strong> Von mildem Ziegenkäse bis hin zu würzigem Schnittkäse.</li>
    <li><strong>Frisches Geflügel vom Niederrhein:</strong> Freilandhähnchen und Enten direkt vom Erzeuger.</li>
    <li><strong>Brot und Backwaren vom Bio-Bäcker:</strong> Handgebackenes Brot nach traditionellen Rezepten.</li>
  </ul>
  
  <h3>Nachhaltigkeit im Fokus</h3>
  <p>Viele Händler legen großen Wert auf Nachhaltigkeit. Sie fördern den Kauf von saisonalen Produkten, reduzieren Verpackungsmüll und bieten oft plastikfreie Alternativen an. Dieser Fokus macht den Wochenmarkt zu einer umweltbewussten Alternative zum Supermarkt und ist ein wichtiger Grund für seine Beliebtheit.</p>
  
  <h3>Mehr als nur einkaufen: Ein Ort der Begegnung</h3>
  <p>Der Markt ist ein sozialer Treffpunkt. Man trifft Nachbarn, tauscht sich über Rezepte aus und genießt die lebendige Atmosphäre. Eine Kaffeebude lädt zum Verweilen ein und bietet die perfekte Gelegenheit, das bunte Treiben zu beobachten.</p>
  
  <h3>Anfahrt und Öffnungszeiten</h3>
  <p>Der Wochenmarkt am Wilhelmsplatz ist gut mit öffentlichen Verkehrsmitteln erreichbar und findet in der Regel am <strong>Dienstag und Freitag von 7 bis 13 Uhr</strong> statt. Es empfiehlt sich, früh zu kommen, um die beste Auswahl zu haben.</p>`,
  imageUrl: "/lovable-uploads/wilhelmsplatz-koeln-markt.jpg", // Passe den Pfad bei Bedarf an
  link: "/blog/wochenmarkt-wilhelmsplatz-koeln-nachhaltigkeit-vielfalt",
  marketSlugs: ["wochenmarkt-wilhelmsplatz-koeln"]
  }

  
];

// Helper function to get blog posts for a specific market
export const getBlogPostsForMarket = (marketSlug: string): BlogPost[] => {
  return blogPosts.filter(post => post.marketSlugs.includes(marketSlug));
};

// Helper function to get a blog post by ID
export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

// Helper function to get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};