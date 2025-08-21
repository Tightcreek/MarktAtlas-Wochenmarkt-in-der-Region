import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  preloadImages?: string[];
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Update title
    document.title = config.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.description);

    // Update keywords if provided
    if (config.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', config.keywords);
    }

    // Update canonical URL if provided
    if (config.canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', config.canonicalUrl);
    }

    // Handle noindex
    if (config.noindex) {
      let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    }

    // Preload critical images
    if (config.preloadImages) {
      config.preloadImages.forEach((imageSrc, index) => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = imageSrc;
        preloadLink.id = `preload-image-${index}`;
        
        if (!document.getElementById(`preload-image-${index}`)) {
          document.head.appendChild(preloadLink);
        }
      });
    }

  }, [config]);
};

// Hook for lazy loading images
export const useLazyImages = () => {
  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    return () => {
      images.forEach(img => imageObserver.unobserve(img));
    };
  }, []);
};

// Hook for Web Vitals optimization
export const useWebVitals = () => {
  useEffect(() => {
    // Preconnect to external domains for faster resource loading
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
      'https://maps.googleapis.com'
    ];

    preconnectDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      
      if (!document.querySelector(`link[href="${domain}"]`)) {
        document.head.appendChild(link);
      }
    });

    // DNS prefetch for CDN and external resources
    const dnsPrefetchDomains = [
      '//cdn.jsdelivr.net',
      '//unpkg.com',
      '//cdnjs.cloudflare.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      if (!document.querySelector(`link[href="${domain}"]`)) {
        document.head.appendChild(link);
      }
    });

    // Optimize CSS delivery by removing unused styles (development helper)
    if (process.env.NODE_ENV === 'development') {
      const removeUnusedCSS = () => {
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        stylesheets.forEach(stylesheet => {
          (stylesheet as HTMLLinkElement).media = 'print';
          (stylesheet as HTMLLinkElement).onload = function() {
            (this as HTMLLinkElement).media = 'all';
          };
        });
      };
      
      // Defer CSS loading for non-critical styles
      setTimeout(removeUnusedCSS, 0);
    }

  }, []);
};