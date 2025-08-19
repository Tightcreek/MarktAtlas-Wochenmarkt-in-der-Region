#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { marketData } from '../src/data/marketdata';
import { christmasMarkets } from '../src/data/weihnachtsmarktdata';
import { blogPosts } from '../src/data/blogdata';

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

// Generate comprehensive sitemap with proper SEO attributes
const generateSitemap = (): string => {
  const baseUrl = 'https://markt-atlas-finden.lovable.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Homepage - Highest priority, updated weekly -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png</image:loc>
      <image:title>MarktAtlas Deutschland - Wochenmarkt Finder</image:title>
      <image:caption>Finde die besten Wochenmärkte und Bauernmärkte in Deutschland</image:caption>
    </image:image>
  </url>
  
  <!-- Main category pages - High priority -->
  <url>
    <loc>${baseUrl}/markets</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/weihnachtsmaerkte</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Individual market pages - High priority for local SEO -->`;

  // Add all market URLs with enhanced SEO data
  marketData.forEach(market => {
    const slug = market.slug || generateSlug(market.name);
    const isPopular = market.specialties && market.specialties.length > 3;
    const priority = isPopular ? '0.85' : '0.8';
    
    sitemap += `
  <url>
    <loc>${baseUrl}/market/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${baseUrl}/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png</image:loc>
      <image:title>${market.name} - Wochenmarkt in ${market.city}</image:title>
      <image:caption>${market.description.substring(0, 150)}...</image:caption>
    </image:image>
  </url>`;
  });

  sitemap += `
  
  <!-- Christmas markets - Seasonal high priority -->`;
  
  christmasMarkets.forEach(market => {
    const isActive = new Date().getMonth() >= 10 || new Date().getMonth() <= 1; // Nov-Jan
    const priority = isActive ? '0.9' : '0.7';
    const changefreq = isActive ? 'daily' : 'monthly';
    
    sitemap += `
  <url>
    <loc>${baseUrl}/weihnachtsmaerkte/${market.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${baseUrl}/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png</image:loc>
      <image:title>${market.name} - Weihnachtsmarkt in ${market.city}</image:title>
      <image:caption>${market.description.substring(0, 150)}...</image:caption>
    </image:image>
  </url>`;
  });

  // Add city-specific pages (important for local SEO)
  const cities = [...new Set(marketData.map(market => market.city))];
  cities.forEach(city => {
    const marketCount = marketData.filter(m => m.city === city).length;
    const priority = marketCount > 2 ? '0.7' : '0.6';
    
    sitemap += `
  <url>
    <loc>${baseUrl}/markets?city=${encodeURIComponent(city)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  // Add blog posts with content-based priority
  blogPosts.forEach(post => {
    const isRecent = new Date(post.publishDate) > new Date(Date.now() - 90 * 24 * 60 * 60 * 1000); // Last 90 days
    const priority = isRecent ? '0.6' : '0.5';
    const changefreq = isRecent ? 'weekly' : 'monthly';
    
    sitemap += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.publishDate || currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  sitemap += `
  
  <!-- Legal and informational pages - Lower priority -->
  <url>
    <loc>${baseUrl}/impressum</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/datenschutz</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`;

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
    
    console.log(`✅ Comprehensive SEO sitemap generated successfully!`);
    console.log(`📍 Location: ${outputPath}`);
    const cities = [...new Set(marketData.map(market => market.city))].length;
    const totalUrls = marketData.length + christmasMarkets.length + cities + blogPosts.length + 5; // all content + static pages
    console.log(`📊 Total URLs: ${totalUrls} (${marketData.length} markets + ${christmasMarkets.length} Christmas markets + ${cities} cities + ${blogPosts.length} blog posts + 5 other pages)`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the script
main();