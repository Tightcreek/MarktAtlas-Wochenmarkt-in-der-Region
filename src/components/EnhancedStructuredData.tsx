import { useEffect } from 'react';

// Enhanced LocalBusiness Schema for individual markets
interface LocalBusinessSchemaProps {
  market: {
    name: string;
    description: string;
    address: string;
    city: string;
    postalCode: string;
    phone: string;
    email: string;
    website: string;
    openingHours: string;
    latitude?: number;
    longitude?: number;
    specialties: string[];
    facilities: string[];
    slug?: string;
  };
  isOpen?: boolean;
  rating?: { value: number; bestRating: number; ratingCount: number };
}

export const LocalBusinessSchema = ({ market, isOpen, rating }: LocalBusinessSchemaProps) => {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "FarmersMarket"],
      "@id": `https://markt-atlas-finden.lovable.app/market/${market.slug || 'default'}`,
      "name": market.name,
      "alternateName": `Wochenmarkt ${market.city}`,
      "description": market.description,
      "url": `https://markt-atlas-finden.lovable.app/market/${market.slug || 'default'}`,
      "image": [
        "https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
        "https://markt-atlas-finden.lovable.app/assets/organic-produce.jpg"
      ],
      "logo": "https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": market.address,
        "addressLocality": market.city,
        "postalCode": market.postalCode,
        "addressRegion": "Deutschland",
        "addressCountry": "DE"
      },
      ...(market.latitude && market.longitude && {
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": market.latitude,
          "longitude": market.longitude,
          "addressCountry": "DE"
        }
      }),
      "telephone": market.phone,
      "email": market.email,
      "sameAs": [
        market.website.startsWith('http') ? market.website : `https://${market.website}`,
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(market.address + ', ' + market.city)}`
      ],
      "openingHours": market.openingHours,
      "openingHoursSpecification": parseOpeningHours(market.openingHours),
      "isAccessibleForFree": true,
      "publicAccess": true,
      "smokingAllowed": false,
      "paymentAccepted": ["Cash", "Credit Card", "EC Card"],
      "currenciesAccepted": "EUR",
      "priceRange": "€-€€",
      "servesCuisine": ["German", "Regional", "Organic"],
      "knowsAbout": market.specialties,
      ...(market.latitude && market.longitude && {
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": market.latitude,
            "longitude": market.longitude
          },
          "geoRadius": "50000"
        }
      }),
      "amenityFeature": market.facilities.map(facility => ({
        "@type": "LocationFeatureSpecification",
        "name": facility,
        "value": true
      })),
      "hasMenu": {
        "@type": "Menu",
        "hasMenuSection": market.specialties.map(specialty => ({
          "@type": "MenuSection",
          "name": specialty,
          "hasMenuItem": {
            "@type": "MenuItem",
            "name": specialty,
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "EUR"
            }
          }
        }))
      },
      "makesOffer": market.specialties.map(specialty => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": specialty,
          "category": "Food & Beverage",
          "brand": {
            "@type": "Brand",
            "name": "Local Producer"
          }
        },
        "seller": {
          "@type": "Organization",
          "name": market.name
        },
        "availability": "https://schema.org/InStock",
        "priceCurrency": "EUR",
        "eligibleRegion": "DE"
      })),
      "areaServed": {
        "@type": "City",
        "name": market.city,
        "containedInPlace": {
          "@type": "Country",
          "name": "Deutschland"
        }
      },
      "keywords": [
        `wochenmarkt ${market.city.toLowerCase()}`,
        `markt ${market.city.toLowerCase()}`,
        `bauernmarkt ${market.city.toLowerCase()}`,
        `${market.city.toLowerCase()} markt heute`,
        ...market.specialties.map(s => s.toLowerCase()),
        ...market.facilities.map(f => f.toLowerCase())
      ].join(', '),
      ...(rating && {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": rating.value,
          "bestRating": rating.bestRating,
          "ratingCount": rating.ratingCount,
          "worstRating": 1
        }
      }),
      ...(isOpen !== undefined && {
        "isOpen": isOpen
      }),
      "potentialAction": [
        {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": market.website.startsWith('http') ? market.website : `https://${market.website}`,
            "inLanguage": "de"
          },
          "result": {
            "@type": "Reservation",
            "name": `Besuch ${market.name}`
          }
        },
        {
          "@type": "ViewAction",
          "target": `https://markt-atlas-finden.lovable.app/market/${market.slug}`
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    script.id = 'local-business-schema';
    
    // Remove existing schema
    const existing = document.getElementById('local-business-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const toRemove = document.getElementById('local-business-schema');
      if (toRemove) {
        toRemove.remove();
      }
    };
  }, [market, isOpen, rating]);

  return null;
};

// Enhanced Event Schema for Christmas markets
interface EventSchemaProps {
  market: {
    name: string;
    description: string;
    city: string;
    openingDates: string;
    openingHours: string;
    entryPrice?: string;
    specialties: string[];
    highlights?: string[];
    slug: string;
    website?: string;
  };
}

export const EventSchema = ({ market }: EventSchemaProps) => {
  useEffect(() => {
    const { startDate, endDate } = parseGermanDateRange(market.openingDates);
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Event",
      "@id": `https://markt-atlas-finden.lovable.app/weihnachtsmaerkte/${market.slug}`,
      "name": market.name,
      "description": market.description,
      "startDate": startDate,
      "endDate": endDate,
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": `${market.name} Standort`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": market.city,
          "addressCountry": "DE"
        }
      },
      "organizer": {
        "@type": "Organization",
        "name": `${market.city} Stadtverwaltung`,
        "url": market.website || `https://www.${market.city.toLowerCase()}.de`
      },
      "offers": {
        "@type": "Offer",
        "name": "Eintritt",
        "price": market.entryPrice === "Kostenfrei" || !market.entryPrice ? "0" : market.entryPrice,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": `https://markt-atlas-finden.lovable.app/weihnachtsmaerkte/${market.slug}`
      },
      ...(market.highlights && market.highlights.length > 0 && {
        "performer": market.highlights.map(highlight => ({
          "@type": "PerformingGroup",
          "name": highlight
        }))
      }),
      "about": market.specialties.map(specialty => ({
        "@type": "Thing",
        "name": specialty
      })),
      "keywords": [
        `weihnachtsmarkt ${market.city.toLowerCase()}`,
        `christkindlmarkt ${market.city.toLowerCase()}`,
        `advent ${market.city.toLowerCase()}`,
        ...market.specialties.map(s => s.toLowerCase())
      ].join(', '),
      "image": "https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
      "url": `https://markt-atlas-finden.lovable.app/weihnachtsmaerkte/${market.slug}`
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    script.id = 'event-schema';
    
    // Remove existing schema
    const existing = document.getElementById('event-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const toRemove = document.getElementById('event-schema');
      if (toRemove) {
        toRemove.remove();
      }
    };
  }, [market]);

  return null;
};

// Helper function to parse German date ranges
const parseGermanDateRange = (dateRange: string): { startDate: string; endDate: string } => {
  const currentYear = new Date().getFullYear();
  
  // Default fallback dates for Christmas markets
  let startDate = `${currentYear}-11-25`;
  let endDate = `${currentYear}-12-23`;
  
  try {
    // Try to parse various German date formats
    if (dateRange.includes(' bis ')) {
      const [start, end] = dateRange.split(' bis ');
      startDate = convertGermanDateToISO(start.trim(), currentYear);
      endDate = convertGermanDateToISO(end.trim(), currentYear);
    } else if (dateRange.includes(' - ')) {
      const [start, end] = dateRange.split(' - ');
      startDate = convertGermanDateToISO(start.trim(), currentYear);
      endDate = convertGermanDateToISO(end.trim(), currentYear);
    }
  } catch (error) {
    console.warn('Could not parse date range:', dateRange);
  }
  
  return { startDate, endDate };
};

// Helper function to convert German date to ISO format
const convertGermanDateToISO = (dateStr: string, year: number): string => {
  const monthMap: { [key: string]: string } = {
    'januar': '01', 'jan': '01',
    'februar': '02', 'feb': '02',
    'märz': '03', 'mär': '03',
    'april': '04', 'apr': '04',
    'mai': '05',
    'juni': '06', 'jun': '06',
    'juli': '07', 'jul': '07',
    'august': '08', 'aug': '08',
    'september': '09', 'sep': '09',
    'oktober': '10', 'okt': '10',
    'november': '11', 'nov': '11',
    'dezember': '12', 'dez': '12'
  };

  // Handle format like "25. November"
  const match = dateStr.match(/(\d{1,2})\.\s*(\w+)/i);
  if (match) {
    const day = match[1].padStart(2, '0');
    const monthName = match[2].toLowerCase();
    const month = monthMap[monthName] || '12';
    return `${year}-${month}-${day}`;
  }

  // Fallback
  return `${year}-11-25`;
};

// Helper function to parse opening hours into structured format
const parseOpeningHours = (openingHours: string) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const germanDays = ['montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonntag'];
  
  // Default specification if parsing fails
  const defaultSpec = days.map(day => ({
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": `https://schema.org/${day}`,
    "opens": "08:00",
    "closes": "18:00"
  }));

  try {
    // Parse German day-time combinations
    const specs = [];
    const lowerHours = openingHours.toLowerCase();
    
    germanDays.forEach((germanDay, index) => {
      if (lowerHours.includes(germanDay)) {
        // Extract time range for this day
        const timeMatch = lowerHours.match(/(\d{1,2}):?(\d{0,2})\s*[-–]\s*(\d{1,2}):?(\d{0,2})/);
        if (timeMatch) {
          const opens = `${timeMatch[1].padStart(2, '0')}:${(timeMatch[2] || '00').padStart(2, '0')}`;
          const closes = `${timeMatch[3].padStart(2, '0')}:${(timeMatch[4] || '00').padStart(2, '0')}`;
          
          specs.push({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": `https://schema.org/${days[index]}`,
            "opens": opens,
            "closes": closes
          });
        }
      }
    });
    
    return specs.length > 0 ? specs : defaultSpec;
  } catch (error) {
    return defaultSpec;
  }
};