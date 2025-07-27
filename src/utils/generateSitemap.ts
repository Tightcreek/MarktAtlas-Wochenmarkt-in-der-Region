import { marketData } from '@/data/marketdata';

// Generate slug from market name
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/ü/g, 'ue')
    .replace(/ö/g, 'oe')
    .replace(/ä/g, 'ae')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
};

// Generate sitemap XML content
export const generateSitemap = (): string => {
  const baseUrl = 'https://markt-atlas-finden.lovable.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Main pages -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png</image:loc>
      <image:title>MarktAtlas Deutschland - Wochenmarkt Finder</image:title>
      <image:caption>Finde Wochenmärkte und Bauernmärkte in Deutschland</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/markets</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Market detail pages -->`;

  // Add all market URLs with slug-based URLs
  marketData.forEach(market => {
    const slug = market.slug || generateSlug(market.name);
    sitemap += `
  <url>
    <loc>${baseUrl}/market/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Function to save sitemap (for static generation)
export const saveSitemap = () => {
  const sitemapContent = generateSitemap();
  console.log('Generated sitemap with', marketData.length, 'market entries');
  return sitemapContent;
};