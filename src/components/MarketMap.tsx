import React, { useRef, useEffect, useState } from 'react';
import { useGoogleMaps } from '@/hooks/useGoogleMaps';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Loader2, AlertCircle } from 'lucide-react';

interface MarketMapProps {
  latitude?: number;
  longitude?: number;
  address: string;
  marketName: string;
  city: string;
  postalCode: string;
}

const MarketMap: React.FC<MarketMapProps> = ({
  latitude,
  longitude,
  address,
  marketName,
  city,
  postalCode
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const { isLoaded, isLoading, error } = useGoogleMaps('AIzaSyCowLTBLlhP7SfUI5zp6Lki32QVZshYkK8');
  const [mapError, setMapError] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;

    const initializeMap = async () => {
      try {
        let lat: number;
        let lng: number;

        // Use coordinates if available, otherwise geocode the address
        if (latitude && longitude) {
          lat = latitude;
          lng = longitude;
        } else {
          // Fallback to geocoding
          const fullAddress = `${address}, ${postalCode} ${city}, Germany`;
          const geocoder = new window.google.maps.Geocoder();
          
          const geocodeResult = await new Promise<any>((resolve, reject) => {
            geocoder.geocode({ address: fullAddress }, (results: any, status: any) => {
              if (status === 'OK' && results[0]) {
                resolve(results[0]);
              } else {
                reject(new Error(`Geocoding failed: ${status}`));
              }
            });
          });

          lat = geocodeResult.geometry.location.lat();
          lng = geocodeResult.geometry.location.lng();
        }

        // Initialize map
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: 15,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
        });

        // Add marker
        const marker = new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
          title: marketName,
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px; max-width: 200px;">
              <h3 style="margin: 0 0 4px 0; font-size: 14px; font-weight: bold;">${marketName}</h3>
              <p style="margin: 0; font-size: 12px; color: #666;">${address}</p>
              <p style="margin: 0; font-size: 12px; color: #666;">${postalCode} ${city}</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });

        mapInstanceRef.current = map;
      } catch (err) {
        setMapError(err instanceof Error ? err.message : 'Failed to load map');
      }
    };

    initializeMap();
  }, [isLoaded, latitude, longitude, address, marketName, city, postalCode]);

  if (error || mapError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            📍 Standort
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertCircle className="h-4 w-4" />
            <span className="text-sm">Karte konnte nicht geladen werden</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {address}, {postalCode} {city}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            📍 Standort
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-48">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Karte wird geladen...
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          📍 Standort
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          ref={mapRef} 
          className="w-full h-48 rounded-lg border border-gray-200 dark:border-gray-700"
          style={{ minHeight: '200px' }}
        />
        <p className="text-xs text-gray-500 mt-2">
          {address}, {postalCode} {city}
        </p>
      </CardContent>
    </Card>
  );
};

export default MarketMap;