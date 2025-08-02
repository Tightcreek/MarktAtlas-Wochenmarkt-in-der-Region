import { useEffect } from 'react';

interface WebsiteSchemaProps {
  siteName: string;
  url: string;
  description: string;
  logo: string;
}

interface OrganizationSchemaProps {
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
  description: string;
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

// Website Schema Component
export const WebsiteSchema = ({ siteName, url, description, logo }: WebsiteSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${url}#website`,
      "name": siteName,
      "url": url,
      "description": description,
      "publisher": {
        "@type": "Organization",
        "@id": `${url}#organization`,
        "name": siteName,
        "url": url,
        "logo": {
          "@type": "ImageObject",
          "url": logo,
          "width": 512,
          "height": 512
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${url}/markets?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://facebook.com/marktatlas",
        "https://twitter.com/marktatlas",
        "https://instagram.com/marktatlas"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'website-schema';
    
    // Remove existing schema
    const existing = document.getElementById('website-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const element = document.getElementById('website-schema');
      if (element) {
        element.remove();
      }
    };
  }, [siteName, url, description, logo]);

  return null;
};

// Organization Schema Component
export const OrganizationSchema = ({ name, url, logo, sameAs, description }: OrganizationSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${url}#organization`,
      "name": name,
      "url": url,
      "description": description,
      "logo": {
        "@type": "ImageObject",
        "@id": `${url}#logo`,
        "url": logo,
        "contentUrl": logo,
        "width": 512,
        "height": 512,
        "caption": name
      },
      "image": {
        "@id": `${url}#logo`
      },
      "sameAs": sameAs,
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "DE",
        "availableLanguage": ["German", "English"]
      },
      "areaServed": {
        "@type": "Country",
        "name": "Deutschland",
        "@id": "https://en.wikipedia.org/wiki/Germany"
      },
      "knowsAbout": [
        "Wochenmärkte",
        "Bauernmärkte", 
        "Regionale Produkte",
        "Frische Lebensmittel",
        "Märkte Deutschland"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'organization-schema';
    
    // Remove existing schema
    const existing = document.getElementById('organization-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const element = document.getElementById('organization-schema');
      if (element) {
        element.remove();
      }
    };
  }, [name, url, logo, sameAs, description]);

  return null;
};

// Breadcrumb Schema Component
export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": {
          "@type": "WebPage",
          "@id": item.url,
          "name": item.name,
          "url": item.url
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'breadcrumb-schema';
    
    // Remove existing schema
    const existing = document.getElementById('breadcrumb-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const element = document.getElementById('breadcrumb-schema');
      if (element) {
        element.remove();
      }
    };
  }, [items]);

  return null;
};

// FAQ Schema Component
export const FAQSchema = ({ faqs }: { faqs: Array<{ question: string; answer: string }> }) => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    script.id = 'faq-schema';
    
    // Remove existing schema
    const existing = document.getElementById('faq-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const element = document.getElementById('faq-schema');
      if (element) {
        element.remove();
      }
    };
  }, [faqs]);

  return null;
};