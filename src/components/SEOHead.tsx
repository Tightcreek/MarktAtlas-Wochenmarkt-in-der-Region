import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schemaData?: object;
}

const SEOHead = ({ 
  title = "Wochenmarkt Finder Deutschland - Alle Märkte in deiner Nähe", 
  description = "Finde über 500 Wochenmärkte und Bauernmärkte in Deutschland. Aktuelle Öffnungszeiten, Standorte und frische Produkte direkt vom Erzeuger - MarktAtlas Deutschland.",
  keywords = "wochenmarkt, bauernmarkt, märkte deutschland, markt heute geöffnet, wochenmarkt öffnungszeiten, frische produkte, regional einkaufen",
  canonicalUrl,
  ogImage = "https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
  schemaData
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

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:card', 'summary_large_image');
    
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

    // Add JSON-LD schema if provided
    if (schemaData) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    }
    
  }, [title, description, keywords, canonicalUrl, ogImage, schemaData]);

  return null;
};

export default SEOHead;