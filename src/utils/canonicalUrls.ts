// Canonical URL management for SEO
export const SITE_URL = 'https://markt-atlas-finden.lovable.app';

// Generate canonical URLs for all page types
export const generateCanonicalUrl = (path: string): string => {
  // Remove query parameters and ensure clean URL structure
  const cleanPath = path.split('?')[0].toLowerCase();
  
  // Ensure path starts with /
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  
  // Remove trailing slash except for root
  const finalPath = normalizedPath === '/' ? '/' : normalizedPath.replace(/\/$/, '');
  
  return `${SITE_URL}${finalPath}`;
};

// Specific canonical URL generators
export const getMarketCanonicalUrl = (slug: string): string => {
  return generateCanonicalUrl(`/market/${slug}`);
};

export const getChristmasMarketCanonicalUrl = (slug: string): string => {
  return generateCanonicalUrl(`/weihnachtsmaerkte/${slug}`);
};

export const getBlogPostCanonicalUrl = (slug: string): string => {
  return generateCanonicalUrl(`/blog/${slug}`);
};

export const getCityMarketsCanonicalUrl = (city: string): string => {
  return generateCanonicalUrl(`/markets?city=${encodeURIComponent(city)}`);
};

// URL validation and cleanup
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Generate alternate URLs for multilingual support (future-proofing)
export const generateAlternateUrls = (path: string): Record<string, string> => {
  // Currently German-only, but structure ready for expansion
  return {
    'de': generateCanonicalUrl(path),
    'x-default': generateCanonicalUrl(path)
  };
};

// SEO-friendly URL structure validation
export const validateUrlStructure = (url: string): boolean => {
  const patterns = {
    market: /^\/market\/[a-z0-9-]+$/,
    christmasMarket: /^\/weihnachtsmaerkte\/[a-z0-9-]+$/,
    blog: /^\/blog\/[a-z0-9-]+$/,
    static: /^\/(markets|blog|impressum|datenschutz)$/,
    root: /^\/$/
  };

  return Object.values(patterns).some(pattern => pattern.test(url));
};