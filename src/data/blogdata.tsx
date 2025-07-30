// Centralized blog data for market-related blog posts
// This file serves as the single source of truth for all blog posts related to markets

export interface BlogPost {
  id: string;
  slug: string; // URL-freundlicher Slug für den Blogbeitrag
  title: string;
  excerpt: string; // Fine kurze Zusammenfassung des Beitrags
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
    imageUrl: "/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png",
    link: "/blog/viktualienmarkt-muenchen-regionale-produkte",
    marketSlugs: ["viktualienmarkt-muenchen", "markt-elisabethplatz-muenchen"]
  },
  {
    id: "2",
    slug: "hackescher-markt-streetfood-trends",
    title: "Streetfood-Revolution am Hackeschen Markt Berlin",
    excerpt: "Wie sich der traditionelle Wochenmarkt zu einem Hotspot für internationale Küche entwickelt hat und welche neuen Stände Sie unbedingt probieren sollten.",
    imageUrl: "/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
    link: "/blog/hackescher-markt-streetfood-trends",
    marketSlugs: ["wochenmarkt-hackescher-markt-berlin", "wochenmarkt-kollwitzplatz-berlin"]
  },
  {
    id: "3",
    slug: "isemarkt-hamburg-nachhaltigkeit",
    title: "Nachhaltigkeit auf Hamburger Märkten: Der Isemarkt als Vorreiter",
    excerpt: "Erfahren Sie, wie der Isemarkt Hamburg mit Zero-Waste-Initiativen und Bio-Produkten neue Maßstäbe für umweltfreundliches Einkaufen setzt.",
    imageUrl: "/lovable-uploads/79363d5a-6bb6-4acb-8065-0964442b7ab1.png",
    link: "/blog/isemarkt-hamburg-nachhaltigkeit",
    marketSlugs: ["isemarkt-hamburg", "grossneumarkt-hamburg", "blankeneser-wochenmarkt-hamburg"]
  },
  {
    id: "4",
    slug: "herbst-spezialitaeten-deutsche-maerkte",
    title: "Saisonale Spezialitäten: Was der Herbst auf deutschen Märkten bringt",
    excerpt: "Von Kürbissen bis Pilzen - eine kulinarische Reise durch die Herbstschätze auf den Wochenmärkten in Frankfurt, Stuttgart und Düsseldorf.",
    imageUrl: "/lovable-uploads/d52436a8-406e-4325-8002-c87fd25c1ad5.png",
    link: "/blog/herbst-spezialitaeten-deutsche-maerkte",
    marketSlugs: ["kleinmarkthalle-frankfurt", "wochenmarkt-marktplatz-stuttgart", "carlsplatz-duesseldorf"]
  },
  {
    id: "5",
    slug: "kleinmarkthalle-frankfurt-geschichte",
    title: "Die Geschichte der Kleinmarkthalle Frankfurt: 60 Jahre Tradition",
    excerpt: "Eine Zeitreise durch sechs Jahrzehnte der berühmtesten Markthalle Deutschlands und ihre Entwicklung zum kulinarischen Zentrum Frankfurts.",
    link: "/blog/kleinmarkthalle-frankfurt-geschichte",
    marketSlugs: ["kleinmarkthalle-frankfurt", "erzeugermarkt-konstablerwache-frankfurt"]
  },
  {
    id: "6",
    slug: "maybachufer-berlin-internationale-kueche",
    title: "Internationale Küche am Maybachufer: Berlins multikultureller Markt",
    excerpt: "Wie der türkische Markt am Maybachufer Berlin zur ersten Adresse für authentische internationale Küche wurde.",
    link: "/blog/maybachufer-berlin-internationale-kueche",
    marketSlugs: ["wochenmarkt-maybachufer-berlin", "wochenmarkt-suedstern-berlin"]
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