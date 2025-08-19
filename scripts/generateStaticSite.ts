import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { marketData } from '../src/data/marketdata.js';
import { christmasMarkets } from '../src/data/weihnachtsmarktdata.js';
import { blogPosts } from '../src/data/blogdata.js';

// Generate slug helper function
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

// Generate all routes for static generation
const generateAllRoutes = (): string[] => {
  const routes = [
    "/",
    "/markets",
    "/weihnachtsmaerkte", 
    "/blog",
    "/impressum",
    "/datenschutz"
  ];

  // Add market detail routes
  marketData.forEach(market => {
    const slug = market.slug || generateSlug(market.name);
    routes.push(`/market/${slug}`);
  });

  // Add Christmas market detail routes
  christmasMarkets.forEach(market => {
    routes.push(`/weihnachtsmaerkte/${market.slug}`);
  });

  // Add blog post detail routes
  blogPosts.forEach(post => {
    routes.push(`/blog/${post.slug}`);
  });

  return routes;
};

const generateStaticHTML = async () => {
  const distPath = path.join(process.cwd(), 'dist');
  const indexHTMLPath = path.join(distPath, 'index.html');
  
  if (!fs.existsSync(indexHTMLPath)) {
    console.error('No dist/index.html found. Please run build first.');
    process.exit(1);
  }

  const baseHTML = fs.readFileSync(indexHTMLPath, 'utf-8');
  const routes = generateAllRoutes();

  console.log(`Generating static HTML for ${routes.length} routes...`);

  for (const route of routes) {
    // Create directory structure
    const routePath = route === '/' ? '/index' : route;
    const fullPath = path.join(distPath, routePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Generate HTML for this route
    let html = baseHTML;
    
    // Update title and meta tags based on route
    html = updateHTMLForRoute(html, route);
    
    // Save HTML file
    const fileName = route === '/' ? 'index.html' : 'index.html';
    const filePath = route === '/' ? path.join(distPath, fileName) : path.join(fullPath, fileName);
    
    fs.writeFileSync(filePath, html);
    console.log(`Generated: ${route} -> ${filePath}`);
  }

  console.log('Static site generation completed!');
};

const updateHTMLForRoute = (html: string, route: string): string => {
  // Update title and meta description based on route
  let title = 'Wochenmarkt Finder Deutschland';
  let description = 'Finden Sie die besten Wochenmärkte in Deutschland. Aktuelle Öffnungszeiten, Standorte und Spezialitäten.';
  
  if (route.startsWith('/market/')) {
    const slug = route.replace('/market/', '');
    const market = marketData.find(m => (m.slug || generateSlug(m.name)) === slug);
    if (market) {
      title = `${market.name} - Wochenmarkt in ${market.city} | MarktAtlas`;
      description = `${market.description.substring(0, 150)}...`;
    }
  } else if (route.startsWith('/weihnachtsmaerkte/')) {
    const slug = route.replace('/weihnachtsmaerkte/', '');
    const market = christmasMarkets.find(m => m.slug === slug);
    if (market) {
      title = `${market.name} - Weihnachtsmarkt in ${market.city} | MarktAtlas`;
      description = `${market.description.substring(0, 150)}...`;
    }
  } else if (route.startsWith('/blog/')) {
    const slug = route.replace('/blog/', '');
    const post = blogPosts.find(p => p.slug === slug);
    if (post) {
      title = `${post.title} | MarktAtlas Blog`;
      description = post.excerpt;
    }
  } else if (route === '/markets') {
    title = 'Alle Wochenmärkte in Deutschland | MarktAtlas';
    description = 'Entdecken Sie alle Wochenmärkte in Deutschland. Suchen Sie nach Stadt, Tag oder Spezialitäten.';
  } else if (route === '/weihnachtsmaerkte') {
    title = 'Weihnachtsmärkte in Deutschland 2025 | MarktAtlas';
    description = 'Die schönsten Weihnachtsmärkte in Deutschland 2025. Termine, Öffnungszeiten und Highlights.';
  } else if (route === '/blog') {
    title = 'Markt-Blog | MarktAtlas';
    description = 'Interessante Artikel rund um deutsche Wochenmärkte, Spezialitäten und Marktkultur.';
  }
  
  // Replace title and meta description
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${description}"`);
  
  // Update Open Graph tags
  html = html.replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${title}"`);
  html = html.replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${description}"`);
  html = html.replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="https://marktatlas.de${route}"`);
  
  // Update canonical URL
  html = html.replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="https://marktatlas.de${route}"`);
  
  return html;
};

// Run the generator
generateStaticHTML().catch(console.error);