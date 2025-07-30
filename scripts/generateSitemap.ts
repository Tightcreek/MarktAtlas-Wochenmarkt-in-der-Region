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

// Generate sitemap XML content
const generateSitemap = (): string => {
  const baseUrl = 'https://markt-atlas-finden.lovable.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
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
  
  <!-- Individual market pages -->`;

  // Add all market URLs
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

// Generate and save sitemap
const main = () => {
  try {
    const sitemapContent = generateSitemap();
    const outputPath = resolve(__dirname, '../public/sitemap.xml');
    
    writeFileSync(outputPath, sitemapContent, 'utf8');
    
    console.log(`✅ Sitemap generated successfully!`);
    console.log(`📍 Location: ${outputPath}`);
    console.log(`📊 Total URLs: ${marketData.length + 2} (${marketData.length} markets + homepage + markets page)`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
main();