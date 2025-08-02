import { useEffect } from 'react';

interface PerformanceMonitorProps {
  reportWebVitals?: (metric: any) => void;
}

export const PerformanceMonitor = ({ reportWebVitals }: PerformanceMonitorProps) => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    // Core Web Vitals monitoring
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const lcp = entry.startTime;
          if (reportWebVitals) {
            reportWebVitals({
              name: 'LCP',
              value: lcp,
              rating: lcp < 2500 ? 'good' : lcp < 4000 ? 'needs-improvement' : 'poor'
            });
          }
        }
      });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as any; // Type assertion for FID-specific properties
          const fid = fidEntry.processingStart - fidEntry.startTime;
          if (reportWebVitals) {
            reportWebVitals({
              name: 'FID',
              value: fid,
              rating: fid < 100 ? 'good' : fid < 300 ? 'needs-improvement' : 'poor'
            });
          }
        }
      });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as any; // Type assertion for CLS-specific properties
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        }
        if (reportWebVitals) {
          reportWebVitals({
            name: 'CLS',
            value: clsValue,
            rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
          });
        }
      });

      // Time to First Byte (TTFB)
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const ttfb = navigationEntries[0].responseStart - navigationEntries[0].requestStart;
        if (reportWebVitals) {
          reportWebVitals({
            name: 'TTFB',
            value: ttfb,
            rating: ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs-improvement' : 'poor'
          });
        }
      }

      // Start observing
      try {
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        fidObserver.observe({ type: 'first-input', buffered: true });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (error) {
        console.warn('Performance observation not supported:', error);
      }

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    };

    const cleanup = measureWebVitals();

    // Critical resource loading optimization
    const optimizeResourceLoading = () => {
      // Preload critical fonts
      const fontPreloads = [
        'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
      ];

      fontPreloads.forEach(fontUrl => {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'font';
        preloadLink.type = 'font/woff2';
        preloadLink.href = fontUrl;
        preloadLink.crossOrigin = 'anonymous';
        
        if (!document.querySelector(`link[href="${fontUrl}"]`)) {
          document.head.appendChild(preloadLink);
        }
      });

      // Optimize image loading
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.getAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.getAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    optimizeResourceLoading();

    return cleanup;
  }, [reportWebVitals]);

  return null;
};

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};