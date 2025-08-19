import { marketData } from '../src/data/marketdata';
import { christmasMarkets } from '../src/data/weihnachtsmarktdata';
import { blogPosts } from '../src/data/blogdata';
import { writeFileSync } from 'fs';

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

// Generate all routes for prerendering
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

// Generate routes and save to file
const routes = generateAllRoutes();
writeFileSync('./scripts/routes.json', JSON.stringify(routes, null, 2));

console.log(`Generated ${routes.length} routes for static generation:`, routes.slice(0, 10), '...');