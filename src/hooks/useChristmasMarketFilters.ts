import { useMemo, useCallback } from 'react';
import { ChristmasMarket } from '@/data/weihnachtsmarktdata';

export interface Filters {
  searchQuery: string;
  status: 'all' | 'open' | 'closed';
  admission: 'all' | 'free' | 'paid';
  features: string[];
}

export const useChristmasMarketFilters = (markets: ChristmasMarket[], filters: Filters) => {
  const filteredMarkets = useMemo(() => {
    return markets.filter((market) => {
      // Search filter
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesSearch = 
          market.name.toLowerCase().includes(query) ||
          market.city.toLowerCase().includes(query) ||
          market.address.toLowerCase().includes(query) ||
          market.description.toLowerCase().includes(query) ||
          market.specialties.some(s => s.toLowerCase().includes(query));
        
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
  }, [markets, filters]);

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