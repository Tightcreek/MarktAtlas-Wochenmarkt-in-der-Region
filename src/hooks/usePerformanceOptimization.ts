import { useEffect } from 'react';

interface PerformanceConfig {
  enableResourceHints?: boolean;
  enableCriticalResourcePreload?: boolean;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
}

export const usePerformanceOptimization = (config: PerformanceConfig = {}) => {
  const {
    enableResourceHints = true,
    enableCriticalResourcePreload = true,
    enableLazyLoading = true,
    enableImageOptimization = true
  } = config;

  useEffect(() => {
    // Resource hints for faster loading
    if (enableResourceHints) {
      const resourceHints = [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'dns-prefetch', href: 'https://maps.googleapis.com' }
      ];

      resourceHints.forEach(({ rel, href, crossorigin }) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
          const link = document.createElement('link');
          link.rel = rel;
          link.href = href;
          if (crossorigin) link.setAttribute('crossorigin', '');
          document.head.appendChild(link);
        }
      });
    }

    // Preload critical resources
    if (enableCriticalResourcePreload) {
      const criticalResources = [
        '/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png',
        '/assets/hero-market.jpg'
      ];

      criticalResources.forEach(src => {
        if (!document.querySelector(`link[href="${src}"]`)) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          link.setAttribute('fetchpriority', 'high');
          document.head.appendChild(link);
        }
      });
    }

    // Enhanced lazy loading for images
    if (enableLazyLoading) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              
              // Add performance optimizations
              img.setAttribute('decoding', 'async');
              img.setAttribute('fetchpriority', 'low');
              
              // Error handling
              img.addEventListener('error', () => {
                console.warn(`Failed to load image: ${img.src}`);
                img.style.display = 'none';
              });
              
              imageObserver.unobserve(img);
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.1
        }
      );

      // Observe all lazy images
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      lazyImages.forEach(img => imageObserver.observe(img));

      return () => {
        lazyImages.forEach(img => imageObserver.unobserve(img));
      };
    }

    // Image optimization detection
    if (enableImageOptimization) {
      const checkWebPSupport = () => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          document.documentElement.classList.toggle('webp', webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      };
      
      checkWebPSupport();
    }
  }, [enableResourceHints, enableCriticalResourcePreload, enableLazyLoading, enableImageOptimization]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any;
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              console.log('CLS:', clsEntry.value);
            }
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.warn('Performance Observer not fully supported');
      }

      return () => observer.disconnect();
    }
  }, []);
};