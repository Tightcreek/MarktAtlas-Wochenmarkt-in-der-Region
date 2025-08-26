import { useEffect } from 'react';

interface PreloadResource {
  href: string;
  as: 'script' | 'style' | 'image' | 'font';
  crossorigin?: 'anonymous' | 'use-credentials';
  importance?: 'high' | 'low' | 'auto';
}

export const useResourcePreload = (resources: PreloadResource[]) => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    resources.forEach(({ href, as, crossorigin, importance }) => {
      // Check if resource is already preloaded
      if (document.querySelector(`link[href="${href}"]`)) return;

      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      
      if (crossorigin) {
        link.crossOrigin = crossorigin;
      }
      
      if (importance) {
        link.setAttribute('importance', importance);
      }

      // Add to head
      document.head.appendChild(link);
      links.push(link);
    });

    // Cleanup function
    return () => {
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [resources]);
};

// Hook for DNS prefetch optimization
export const useDNSPrefetch = (domains: string[]) => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    domains.forEach(domain => {
      if (document.querySelector(`link[href="${domain}"]`)) return;

      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      
      document.head.appendChild(link);
      links.push(link);
    });

    return () => {
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [domains]);
};