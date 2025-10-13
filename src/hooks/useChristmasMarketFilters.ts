import { useMemo, useCallback } from 'react';
import { ChristmasMarket } from '@/data/weihnachtsmarktdata';
import { calculateDistances, sortByDistance } from '@/utils/distanceCalculation';

export interface Filters {
  searchQuery: string;
  status: 'all' | 'open' | 'closed';
  admission: 'all' | 'free' | 'paid';
  features: string[];
}

export const useChristmasMarketFilters = (
  markets: ChristmasMarket[], 
  filters: Filters,
  userLocation?: { latitude: number; longitude: number }
) => {
  const filteredMarkets = useMemo(() => {
    let results = markets.filter((market) => {
      // Search filter
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase().trim();
        
        // Check if query matches city
        const cityMatch = market.city.toLowerCase().includes(query);
        const nameMatch = market.name.toLowerCase().includes(query);
        const addressMatch = market.address.toLowerCase().includes(query);
        
        // Only search in description and specialties if it's not a city name match
        // This prevents false matches when searching for city names
        const descriptionMatch = !cityMatch && market.description.toLowerCase().includes(query);
        const specialtyMatch = !cityMatch && market.specialties.some(s => s.toLowerCase().includes(query));
        
        const matchesSearch = cityMatch || nameMatch || addressMatch || descriptionMatch || specialtyMatch;
        
        if (!matchesSearch) return false;
      }

      // Status filter (simplified - you could enhance with actual date checking)
      if (filters.status !== 'all') {
        const currentDate = new Date();
        const isCurrentlyOpen = true; // Simplified - all markets are considered open during season
        
        if (filters.status === 'open' && !isCurrentlyOpen) return false;
        if (filters.status === 'closed' && isCurrentlyOpen) return false;
      }

      // Admission filter
      if (filters.admission !== 'all') {
        const isFree = market.entryPrice?.toLowerCase().includes('frei') || 
                      market.entryPrice?.toLowerCase().includes('kostenlos') ||
                      !market.entryPrice;
        
        if (filters.admission === 'free' && !isFree) return false;
        if (filters.admission === 'paid' && isFree) return false;
      }

      // Features filter
      if (filters.features.length > 0) {
        const marketFeatures = [
          ...market.specialties,
          ...(market.highlights || []),
          market.description
        ].join(' ').toLowerCase();

        const hasAllFeatures = filters.features.every(feature => {
          const featureLower = feature.toLowerCase();
          switch (featureLower) {
            case 'familienfreundlich':
              return marketFeatures.includes('kinder') || 
                     marketFeatures.includes('familie') ||
                     marketFeatures.includes('märchen');
            case 'bio-produkte':
              return marketFeatures.includes('bio') || 
                     marketFeatures.includes('ökologisch') ||
                     marketFeatures.includes('regional');
            case 'kunsthandwerk':
              return marketFeatures.includes('handwerk') || 
                     marketFeatures.includes('kunst') ||
                     marketFeatures.includes('töpfer') ||
                     marketFeatures.includes('glasbläser');
            case 'kulinarik':
              return marketFeatures.includes('glühwein') || 
                     marketFeatures.includes('bratwurst') ||
                     marketFeatures.includes('stollen') ||
                     marketFeatures.includes('lebkuchen');
            default:
              return marketFeatures.includes(featureLower);
          }
        });

        if (!hasAllFeatures) return false;
      }

      return true;
    });

    // Add distances if user location is available
    if (userLocation) {
      const withDistances = calculateDistances(
        userLocation.latitude,
        userLocation.longitude,
        results
      );
      results = sortByDistance(withDistances) as any;
    } else {
      // Sort results to prioritize city matches when no location
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        results.sort((a, b) => {
          const aCityMatch = a.city.toLowerCase() === query;
          const bCityMatch = b.city.toLowerCase() === query;
          const aCityIncludes = a.city.toLowerCase().includes(query);
          const bCityIncludes = b.city.toLowerCase().includes(query);
          
          // Exact city match has highest priority
          if (aCityMatch && !bCityMatch) return -1;
          if (!aCityMatch && bCityMatch) return 1;
          
          // City includes match has second priority
          if (aCityIncludes && !bCityIncludes) return -1;
          if (!aCityIncludes && bCityIncludes) return 1;
          
          return 0;
        });
      }
    }

    return results;
  }, [markets, filters, userLocation]);

  const resetFilters = useCallback((): Filters => ({
    searchQuery: '',
    status: 'all',
    admission: 'all',
    features: []
  }), []);

  return {
    filteredMarkets,
    resetFilters,
    resultCount: filteredMarkets.length
  };
};