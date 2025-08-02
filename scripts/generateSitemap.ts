#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { marketData } from '../src/data/marketdata';

// Generate slug from market name (fallback if no slug exists)
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

// Generate enhanced sitemap XML content with city pages and blog posts
const generateSitemap = (): string => {
  const baseUrl = 'https://markt-atlas-finden.lovable.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <!-- Homepage -->
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
  
  <!-- Markets directory page -->
  <url>
    <loc>${baseUrl}/markets</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Blog main page -->
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Individual market pages -->`;

  // Add all market URLs with enhanced data
  marketData.forEach(market => {
    const slug = market.slug || generateSlug(market.name);
    sitemap += `
  <url>
    <loc>${baseUrl}/market/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${baseUrl}/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png</image:loc>
      <image:title>${market.name} - Wochenmarkt in ${market.city}</image:title>
      <image:caption>${market.description.substring(0, 100)}</image:caption>
    </image:image>
  </url>`;
  });

  // Add city-specific pages (virtual pages for SEO)
  const cities = [...new Set(marketData.map(market => market.city))];
  cities.forEach(city => {
    sitemap += `
  <url>
    <loc>${baseUrl}/markets?city=${encodeURIComponent(city)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  // Add blog posts
  const blogPosts = [
    'viktualienmarkt-muenchen-regionale-produkte',
    'hackescher-markt-streetfood-trends',
    'isemarkt-hamburg-nachhaltigkeit',
    'herbst-spezialitaeten-deutsche-maerkte',
    'kleinmarkthalle-frankfurt-geschichte',
    'maybachufer-berlin-internationale-kueche',
    'wochenmarkt-wilhelmsplatz-koeln-nachhaltigkeit-vielfalt',
    'markt-elisabethplatz-muenchen-schwabing'
  ];

  blogPosts.forEach(slug => {
    sitemap += `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
  });

  // Add legal pages
  const legalPages = ['impressum', 'datenschutz'];
  legalPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Generate and save sitemap
const main = () => {
  try {
    const sitemapContent = generateSitemap();
    const outputPath = resolve(__dirname, '../public/sitemap.xml');
    
    writeFileSync(outputPath, sitemapContent, 'utf8');
    
    console.log(`✅ Enhanced sitemap generated successfully!`);
    console.log(`📍 Location: ${outputPath}`);
    const cities = [...new Set(marketData.map(market => market.city))].length;
    const totalUrls = marketData.length + cities + 12; // markets + cities + static pages + blog posts
    console.log(`📊 Total URLs: ${totalUrls} (${marketData.length} markets + ${cities} cities + 12 other pages)`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
main();