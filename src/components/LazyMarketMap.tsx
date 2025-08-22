import { lazy, Suspense } from 'react';

// Lazy load the heavy MarketMap component
const MarketMap = lazy(() => import('./MarketMap'));

interface LazyMarketMapProps {
  latitude?: number;
  longitude?: number;
  address: string;
  marketName: string;
  city: string;
  postalCode: string;
}

const LazyMarketMap = ({ latitude, longitude, address, marketName, city, postalCode }: LazyMarketMapProps) => {
  return (
    <Suspense fallback={
      <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="text-sm text-muted-foreground">Karte wird geladen...</p>
        </div>
      </div>
    }>
      <MarketMap 
        latitude={latitude}
        longitude={longitude}
        address={address}
        marketName={marketName}
        city={city}
        postalCode={postalCode}
      />
    </Suspense>
  );
};

export default LazyMarketMap;