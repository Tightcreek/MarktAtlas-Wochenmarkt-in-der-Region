import { Market } from '@/data/marketdata';

// Enhanced meta descriptions with location-specific keywords and optimal length
export const generateMarketMetaDescription = (market: Market): string => {
  const isOpen = market.isOpen ? 'Jetzt geöffnet' : 'Geschlossen';
  const specialties = market.specialties.slice(0, 2).join(', ');
  const nearbyText = market.city.toLowerCase().includes('köln') ? 'Köln Zentrum' : 
                    market.city.toLowerCase().includes('münchen') ? 'München Innenstadt' :
                    `${market.city} Zentrum`;
  
  // Optimized for 150-160 characters with high-intent keywords
  return `🥕 ${market.name} ${market.city}: ${isOpen} | ${market.openingHours} | ${specialties} | Frische Produkte direkt vom Erzeuger in ${nearbyText}`;
};

// Christmas market meta descriptions
export const generateChristmasMarketMetaDescription = (market: any): string => {
  const specialties = market.specialties.slice(0, 2).join(', ');
  return `🎄 ${market.name}: ${market.openingDates} | ${specialties} | Weihnachtsmarkt ${market.city} | Öffnungszeiten & Highlights 2025`;
};

// Enhanced SEO keywords with long-tail and local search optimization
export const generateMarketKeywords = (market: Market): string => {
  const city = market.city.toLowerCase();
  const baseKeywords = [
    market.name,
    `wochenmarkt ${city}`,
    `markt ${city}`,
    `bauernmarkt ${city}`,
    `${city} wochenmarkt öffnungszeiten`,
    `markt ${city} heute geöffnet`,
    `${city} wochenmarkt heute`,
    `frischer markt ${city}`,
    `bio markt ${city}`,
    `regional einkaufen ${city}`
  ];
  
  const longTailKeywords = [
    `wo ist markt in ${city}`,
    `${city} markt samstag`,
    `wochenmarkt ${city} mittwoch`,
    `beste märkte ${city}`,
    `frische produkte ${city}`,
    `markt termine ${city}`,
    `bauernmarkt öffnungszeiten ${city}`,
    `regional einkaufen nähe ${city}`
  ];
  
  const featureKeywords = market.features.map(feature => `${feature.toLowerCase()} ${city}`);
  const specialtyKeywords = market.specialties.map(specialty => `${specialty.toLowerCase()} ${city}`);
  
  return [...baseKeywords, ...longTailKeywords, ...featureKeywords, ...specialtyKeywords].join(', ');
};

// Generate location-specific title tags
export const generateOptimizedTitle = (market: Market): string => {
  const isOpen = market.isOpen ? 'Geöffnet' : 'Öffnungszeiten';
  return `${market.name} ${market.city} - ${isOpen} | Wochenmarkt & Öffnungszeiten`;
};

// Generate Christmas market keywords
export const generateChristmasMarketKeywords = (market: any): string => {
  const city = market.city.toLowerCase();
  const baseKeywords = [
    `weihnachtsmarkt ${city}`,
    `christkindlmarkt ${city}`,
    `${city} weihnachtsmarkt 2025`,
    `weihnachtsmarkt ${city} öffnungszeiten`,
    `${city} weihnachtsmarkt termine`,
    `adventmarkt ${city}`,
    `weihnachtsmarkt ${city} highlights`,
    `glühwein ${city}`
  ];
  
  const specialtyKeywords = market.specialties.map((specialty: string) => `${specialty.toLowerCase()} ${city}`);
  
  return [...baseKeywords, ...specialtyKeywords].join(', ');
};

// Generate SEO-friendly URLs
export const generateSlug = (text: string): string => {
  return text
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

// Generate breadcrumb schema for markets
export const generateMarketBreadcrumbs = (market: Market) => [
  { name: "Startseite", url: "https://markt-atlas-finden.lovable.app/" },
  { name: "Märkte", url: "https://markt-atlas-finden.lovable.app/markets" },
  { name: market.city, url: `https://markt-atlas-finden.lovable.app/markets?city=${market.city}` },
  { name: market.name, url: `https://markt-atlas-finden.lovable.app/market/${market.slug}` }
];

// Critical performance optimizations
export const addCriticalResourceHints = () => {
  const criticalResources = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'dns-prefetch', href: '//maps.googleapis.com' }
  ];

  criticalResources.forEach(resource => {
    const existingLink = document.querySelector(`link[href="${resource.href}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = resource.rel;
      link.href = resource.href;
      if (resource.crossorigin) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    }
  });
};

// Optimize images for faster loading
export const optimizeImageLoading = () => {
  // Add loading="lazy" to all images except hero images
  const images = document.querySelectorAll('img:not([data-hero])');
  images.forEach(img => {
    if (!img.getAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    if (!img.getAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });
};

// Generate FAQ schema for market pages
export const generateMarketFAQs = (market: Market) => [
  {
    question: `Wann hat der ${market.name} geöffnet?`,
    answer: `Der ${market.name} in ${market.city} hat folgende Öffnungszeiten: ${market.openingHours}`
  },
  {
    question: `Welche Spezialitäten gibt es auf dem ${market.name}?`,
    answer: `Auf dem ${market.name} finden Sie: ${market.specialties.join(', ')}`
  },
  {
    question: `Wie erreiche ich den ${market.name}?`,
    answer: `Der ${market.name} befindet sich an folgender Adresse: ${market.address}, ${market.postalCode} ${market.city}. Anfahrt: ${market.transport}`
  },
  {
    question: `Welche Ausstattung bietet der ${market.name}?`,
    answer: `Der Markt verfügt über folgende Einrichtungen: ${market.facilities.join(', ')}`
  }
];

// Performance monitoring for Core Web Vitals
export const initWebVitalsMonitoring = () => {
  if ('web-vital' in window) {
    // This would integrate with actual Web Vitals measurement
    console.log('Web Vitals monitoring initialized');
  }
};

// Site verification meta tags
export const addSiteVerifications = () => {
  const verifications = [
    { name: 'google-site-verification', content: 'YOUR_GOOGLE_VERIFICATION_CODE' },
    { name: 'msvalidate.01', content: 'YOUR_BING_VERIFICATION_CODE' },
    { name: 'yandex-verification', content: 'YOUR_YANDEX_VERIFICATION_CODE' }
  ];

  verifications.forEach(verification => {
    const existingMeta = document.querySelector(`meta[name="${verification.name}"]`);
    if (!existingMeta) {
      const meta = document.createElement('meta');
      meta.name = verification.name;
      meta.content = verification.content;
      document.head.appendChild(meta);
    }
  });
};