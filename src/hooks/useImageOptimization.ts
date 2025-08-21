import { useEffect } from 'react';

export const useImageOptimization = () => {
  useEffect(() => {
    // Add intersection observer for all images without lazy loading
    const images = document.querySelectorAll('img:not([loading="lazy"])');
    
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            
            // Add performance optimizations
            img.setAttribute('decoding', 'async');
            
            // Add error handling for broken images
            img.addEventListener('error', () => {
              img.style.display = 'none';
              console.warn(`Failed to load image: ${img.src}`);
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

    images.forEach((img) => {
      // Skip images that are already loaded
      if ((img as HTMLImageElement).complete) return;
      
      imageObserver.observe(img);
    });

    // Preload critical images above the fold
    const criticalImages = [
      '/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png',
      '/assets/hero-market.jpg'
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.setAttribute('importance', 'high');
      
      if (!document.querySelector(`link[href="${src}"]`)) {
        document.head.appendChild(link);
      }
    });

    return () => {
      images.forEach((img) => imageObserver.unobserve(img));
    };
  }, []);
};