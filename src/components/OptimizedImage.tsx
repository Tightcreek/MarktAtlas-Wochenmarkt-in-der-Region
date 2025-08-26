import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width: number; // Required to prevent layout shift
  height: number; // Required to prevent layout shift
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  priority = false, 
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Mb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==",
  sizes
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [currentSrc, setCurrentSrc] = useState(priority ? src : placeholder);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (isInView && currentSrc === placeholder) {
      const img = new Image();
      img.onload = () => {
        setCurrentSrc(src);
        setIsLoaded(true);
      };
      img.src = src;
    }
  }, [isInView, src, currentSrc, placeholder]);

  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc.includes('/lovable-uploads/')) return undefined;
    
    const widths = [320, 640, 960, 1200, 1600];
    return widths
      .map(w => `${baseSrc}?w=${w}&q=75 ${w}w`)
      .join(', ');
  };

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      srcSet={generateSrcSet(src)}
      sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-70",
        className
      )}
      style={{
        aspectRatio: `${width}/${height}`,
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  );
};

export default OptimizedImage;