import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaData?: object;
  ogType?: string;
  locale?: string;
  siteName?: string;
  twitterSite?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  alternateUrls?: { [lang: string]: string };
  breadcrumbs?: Array<{ name: string; url: string }>;
  rating?: { value: number; bestRating: number; ratingCount: number };
}

const SEOHead = ({ 
  title = "Wochenmarkt Finder Deutschland - Alle Märkte in deiner Nähe", 
  description = "Finde über 500 Wochenmärkte und Bauernmärkte in Deutschland. Aktuelle Öffnungszeiten, Standorte und frische Produkte direkt vom Erzeuger - MarktAtlas Deutschland.",
  keywords = "wochenmarkt, bauernmarkt, märkte deutschland, markt heute geöffnet, wochenmarkt öffnungszeiten, frische produkte, regional einkaufen",
  canonicalUrl,
  ogImage = "https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
  schemaData,
  ogType = "website",
  locale = "de_DE", 
  siteName = "MarktAtlas Deutschland",
  twitterSite = "@MarktAtlas",
  articlePublishedTime,
  articleModifiedTime,
  alternateUrls,
  breadcrumbs,
  rating
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector) as HTMLMetaElement;
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };

    // Enhanced meta tags for better crawler control and indexing
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('bingbot', 'index, follow, max-snippet:-1, max-image-preview:large');
    updateMetaTag('language', 'de');
    updateMetaTag('content-language', 'de-DE');
    updateMetaTag('geo.region', 'DE');
    updateMetaTag('geo.country', 'Germany');
    updateMetaTag('author', siteName);
    updateMetaTag('publisher', siteName);
    updateMetaTag('copyright', `© ${new Date().getFullYear()} ${siteName}`);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('theme-color', '#22c55e');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('msapplication-TileColor', '#22c55e');
    
    // Performance and Core Web Vitals optimization
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('dns-prefetch-control', 'on');
    updateMetaTag('preconnect', 'https://fonts.googleapis.com');
    updateMetaTag('preconnect', 'https://fonts.gstatic.com');
    updateMetaTag('referrer', 'strict-origin-when-cross-origin');
    updateMetaTag('x-ua-compatible', 'IE=edge');
    
    // Schema.org verification and SEO enhancement tags
    updateMetaTag('generator', 'MarktAtlas Deutschland SEO Engine v2.0');
    updateMetaTag('rating', 'general');
    updateMetaTag('distribution', 'global');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('expires', 'never');
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:locale', locale, true);
    updateMetaTag('og:site_name', siteName, true);
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl, true);
    }
    
    // Article-specific meta tags if provided
    if (articlePublishedTime) {
      updateMetaTag('article:published_time', articlePublishedTime, true);
    }
    if (articleModifiedTime) {
      updateMetaTag('article:modified_time', articleModifiedTime, true);
    }
    
    // Enhanced Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', `${title} - ${siteName}`);
    updateMetaTag('twitter:creator', '@MarktAtlas');
    if (twitterSite) {
      updateMetaTag('twitter:site', twitterSite);
    }
    
    // Additional SEO meta tags
    updateMetaTag('application-name', siteName);
    updateMetaTag('msapplication-TileColor', '#22c55e');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('apple-mobile-web-app-title', siteName);
    
    // Update canonical URL if provided
    if (canonicalUrl) {
      let linkTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'canonical');
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute('href', canonicalUrl);
    }

    // Enhanced hreflang implementation with proper fallbacks
    if (alternateUrls) {
      Object.entries(alternateUrls).forEach(([lang, url]) => {
        let linkTag = document.querySelector(`link[hreflang="${lang}"]`) as HTMLLinkElement;
        if (!linkTag) {
          linkTag = document.createElement('link');
          linkTag.setAttribute('rel', 'alternate');
          linkTag.setAttribute('hreflang', lang);
          document.head.appendChild(linkTag);
        }
        linkTag.setAttribute('href', url);
      });
    } else if (canonicalUrl) {
      // Default hreflang setup for German sites
      const hreflangs = [
        { lang: 'de', url: canonicalUrl },
        { lang: 'de-DE', url: canonicalUrl },
        { lang: 'x-default', url: canonicalUrl }
      ];
      
      hreflangs.forEach(({ lang, url }) => {
        let linkTag = document.querySelector(`link[hreflang="${lang}"]`) as HTMLLinkElement;
        if (!linkTag) {
          linkTag = document.createElement('link');
          linkTag.setAttribute('rel', 'alternate');
          linkTag.setAttribute('hreflang', lang);
          document.head.appendChild(linkTag);
        }
        linkTag.setAttribute('href', url);
      });
    }
    
    // Add preload hints for critical resources
    const addPreloadHint = (href: string, as: string, type?: string) => {
      if (!document.querySelector(`link[rel="preload"][href="${href}"]`)) {
        const linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'preload');
        linkTag.setAttribute('href', href);
        linkTag.setAttribute('as', as);
        if (type) linkTag.setAttribute('type', type);
        document.head.appendChild(linkTag);
      }
    };
    
    // Preload critical fonts and styles
    addPreloadHint('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', 'style');
    if (ogImage) {
      addPreloadHint(ogImage, 'image');
    }

    // Add enhanced JSON-LD schema
    const enhancedSchema = schemaData ? {
      ...schemaData,
      ...(breadcrumbs && {
        breadcrumb: {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": crumb.url
          }))
        }
      }),
      ...(rating && {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": rating.value,
          "bestRating": rating.bestRating,
          "ratingCount": rating.ratingCount
        }
      })
    } : schemaData;

    if (enhancedSchema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(enhancedSchema);
    }
    
    // Enhanced DNS prefetch and preconnect for performance
    const addDnsPrefetch = (domain: string) => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`)) {
        const linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'dns-prefetch');
        linkTag.setAttribute('href', domain);
        document.head.appendChild(linkTag);
      }
    };
    
    const addPreconnect = (domain: string, crossorigin = false) => {
      if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
        const linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'preconnect');
        linkTag.setAttribute('href', domain);
        if (crossorigin) linkTag.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(linkTag);
      }
    };
    
    // Critical domains for preconnect (faster than DNS prefetch)
    addPreconnect('https://fonts.googleapis.com');
    addPreconnect('https://fonts.gstatic.com', true);
    
    // Secondary domains for DNS prefetch
    addDnsPrefetch('//www.google-analytics.com');
    addDnsPrefetch('//maps.googleapis.com');
    addDnsPrefetch('//www.googletagmanager.com');
    addDnsPrefetch('//connect.facebook.net');
    addDnsPrefetch('//static.xx.fbcdn.net');
    addDnsPrefetch('//www.google.com');
    addDnsPrefetch('//www.gstatic.com');
    
  }, [title, description, keywords, canonicalUrl, ogImage, schemaData, alternateUrls, breadcrumbs, rating]);

  return null;
};

export default SEOHead;