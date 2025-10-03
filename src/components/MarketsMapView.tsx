import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { MapPin, Navigation } from 'lucide-react';

interface Market {
  id: string | number;
  name: string;
  city: string;
  latitude?: number;
  longitude?: number;
  address?: string;
  openingHours?: string;
  slug?: string;
}

interface MarketsMapViewProps {
  markets: Market[];
  userLocation?: { latitude: number; longitude: number } | null;
  onMarketClick?: (market: Market) => void;
}

const MAPBOX_TOKEN_KEY = 'mapbox_public_token';

export const MarketsMapView: React.FC<MarketsMapViewProps> = ({
  markets,
  userLocation,
  onMarketClick
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<string>('');
  const [isTokenSaved, setIsTokenSaved] = useState<boolean>(false);

  // Load saved token on mount
  useEffect(() => {
    const savedToken = localStorage.getItem(MAPBOX_TOKEN_KEY);
    if (savedToken) {
      setMapboxToken(savedToken);
      setIsTokenSaved(true);
    }
  }, []);

  // Save token to localStorage
  const handleSaveToken = () => {
    if (tokenInput.trim()) {
      localStorage.setItem(MAPBOX_TOKEN_KEY, tokenInput.trim());
      setMapboxToken(tokenInput.trim());
      setIsTokenSaved(true);
    }
  };

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    // Filter markets with coordinates
    const marketsWithCoords = markets.filter(m => m.latitude && m.longitude);

    // Calculate center point
    let centerLat = 51.1657; // Germany center
    let centerLng = 10.4515;
    let zoom = 5.5;

    if (marketsWithCoords.length > 0) {
      const sumLat = marketsWithCoords.reduce((sum, m) => sum + (m.latitude || 0), 0);
      const sumLng = marketsWithCoords.reduce((sum, m) => sum + (m.longitude || 0), 0);
      centerLat = sumLat / marketsWithCoords.length;
      centerLng = sumLng / marketsWithCoords.length;
      zoom = 6;
    }

    // If user location exists, center on it
    if (userLocation) {
      centerLat = userLocation.latitude;
      centerLng = userLocation.longitude;
      zoom = 10;
    }

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [centerLng, centerLat],
      zoom: zoom
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add user location marker if available
    if (userLocation) {
      const userMarker = document.createElement('div');
      userMarker.className = 'user-location-marker';
      userMarker.style.width = '20px';
      userMarker.style.height = '20px';
      userMarker.style.borderRadius = '50%';
      userMarker.style.backgroundColor = '#3b82f6';
      userMarker.style.border = '3px solid white';
      userMarker.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.5)';

      new mapboxgl.Marker(userMarker)
        .setLngLat([userLocation.longitude, userLocation.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div class="p-2"><strong>Ihr Standort</strong></div>')
        )
        .addTo(map.current);
    }

    // Add market markers
    marketsWithCoords.forEach((market) => {
      if (!map.current || !market.latitude || !market.longitude) return;

      const markerEl = document.createElement('div');
      markerEl.className = 'market-marker';
      markerEl.style.width = '30px';
      markerEl.style.height = '30px';
      markerEl.style.cursor = 'pointer';
      markerEl.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#16a34a" stroke="white" stroke-width="2"/>
          <circle cx="12" cy="9" r="2.5" fill="white"/>
        </svg>
      `;

      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="p-3">
          <h3 class="font-semibold text-sm mb-1">${market.name}</h3>
          <p class="text-xs text-gray-600 mb-1">${market.city}</p>
          ${market.openingHours ? `<p class="text-xs text-gray-500">${market.openingHours}</p>` : ''}
        </div>
      `);

      const marker = new mapboxgl.Marker(markerEl)
        .setLngLat([market.longitude, market.latitude])
        .setPopup(popup)
        .addTo(map.current);

      if (onMarketClick) {
        markerEl.addEventListener('click', () => {
          onMarketClick(market);
        });
      }
    });

    return () => {
      map.current?.remove();
    };
  }, [markets, userLocation, mapboxToken, onMarketClick]);

  if (!isTokenSaved) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <Alert className="mb-4">
          <MapPin className="h-4 w-4" />
          <AlertDescription>
            Um die Karte anzuzeigen, benötigen Sie einen Mapbox Public Token. 
            Erstellen Sie ein kostenloses Konto auf{' '}
            <a 
              href="https://mapbox.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              mapbox.com
            </a>
            {' '}und kopieren Sie Ihren Public Token hier ein.
          </AlertDescription>
        </Alert>
        
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Mapbox Public Token einfügen..."
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSaveToken} variant="default">
            Token speichern
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground mt-2">
          Ihr Token wird sicher in Ihrem Browser gespeichert und nicht an Dritte weitergegeben.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      
      <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg px-4 py-2">
        <div className="flex items-center gap-2">
          <Navigation className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">
            {markets.filter(m => m.latitude && m.longitude).length} Märkte auf der Karte
          </span>
        </div>
      </div>
    </div>
  );
};
