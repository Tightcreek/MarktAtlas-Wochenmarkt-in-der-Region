import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Navigation, ExternalLink, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface MarketMapProps {
  latitude?: number;
  longitude?: number;
  address: string;
  marketName: string;
  city: string;
  postalCode: string;
}

const MAPBOX_TOKEN_KEY = 'mapbox_public_token';

const MarketMap: React.FC<MarketMapProps> = ({
  latitude,
  longitude,
  address,
  marketName,
  city,
  postalCode
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<mapboxgl.Map | null>(null);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<string>('');
  const [isTokenSaved, setIsTokenSaved] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

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

  // Get user location
  const handleShowMyLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation wird von Ihrem Browser nicht unterstützt');
      return;
    }

    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        setUserLocation({ lat: userLat, lng: userLng });
        setIsLoadingLocation(false);

        // Add user location marker
        if (mapInstanceRef.current) {
          // Remove existing user marker if any
          if (userMarkerRef.current) {
            userMarkerRef.current.remove();
          }

          // Create user marker element
          const userMarkerEl = document.createElement('div');
          userMarkerEl.style.width = '20px';
          userMarkerEl.style.height = '20px';
          userMarkerEl.style.borderRadius = '50%';
          userMarkerEl.style.backgroundColor = '#3b82f6';
          userMarkerEl.style.border = '3px solid white';
          userMarkerEl.style.boxShadow = '0 0 10px rgba(59, 130, 246, 0.5)';

          userMarkerRef.current = new mapboxgl.Marker(userMarkerEl)
            .setLngLat([userLng, userLat])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML('<div class="p-2"><strong>Ihr Standort</strong></div>')
            )
            .addTo(mapInstanceRef.current);

          // Fit map to show both markers
          if (latitude && longitude) {
            const bounds = new mapboxgl.LngLatBounds();
            bounds.extend([longitude, latitude]);
            bounds.extend([userLng, userLat]);
            mapInstanceRef.current.fitBounds(bounds, { padding: 100 });
          }
        }
      },
      (error) => {
        setIsLoadingLocation(false);
        let errorMessage = 'Standort konnte nicht ermittelt werden';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Standortzugriff wurde verweigert';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Standortinformationen nicht verfügbar';
            break;
          case error.TIMEOUT:
            errorMessage = 'Zeitüberschreitung beim Abrufen des Standorts';
            break;
        }
        alert(errorMessage);
      }
    );
  };

  // Get directions
  const handleGetDirections = () => {
    if (!latitude || !longitude) {
      alert('Keine Koordinaten für diesen Markt verfügbar');
      return;
    }

    const destination = `${latitude},${longitude}`;
    const origin = userLocation ? `${userLocation.lat},${userLocation.lng}` : '';
    
    // Open Google Maps with directions
    const url = `https://www.google.com/maps/dir/${origin}/${destination}`;
    window.open(url, '_blank');
  };

  // Initialize map
  useEffect(() => {
    if (!mapboxToken || !mapRef.current || !latitude || !longitude) return;

    mapboxgl.accessToken = mapboxToken;

    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [longitude, latitude],
      zoom: 14
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add market marker
    const markerEl = document.createElement('div');
    markerEl.style.width = '30px';
    markerEl.style.height = '30px';
    markerEl.innerHTML = `
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#16a34a" stroke="white" stroke-width="2"/>
        <circle cx="12" cy="9" r="2.5" fill="white"/>
      </svg>
    `;

    new mapboxgl.Marker(markerEl)
      .setLngLat([longitude, latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-3">
            <h3 class="font-semibold text-sm mb-1">${marketName}</h3>
            <p class="text-xs text-gray-600">${address}</p>
            <p class="text-xs text-gray-600">${postalCode} ${city}</p>
          </div>
        `)
      )
      .addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
      }
    };
  }, [mapboxToken, latitude, longitude, address, marketName, city, postalCode]);

  if (!isTokenSaved) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            📍 Standort
          </CardTitle>
        </CardHeader>
        <CardContent>
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
          
          <div className="flex gap-2 mb-3">
            <Input
              type="text"
              placeholder="Mapbox Public Token einfügen..."
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSaveToken} variant="default">
              Speichern
            </Button>
          </div>
          
          <p className="text-xs text-gray-500">
            {address}, {postalCode} {city}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!latitude || !longitude) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            📍 Standort
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {address}, {postalCode} {city}
          </p>
          <p className="text-xs text-muted-foreground">
            Keine Koordinaten für diesen Markt verfügbar
          </p>
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
          className="w-full h-64 rounded-lg border border-gray-200 dark:border-gray-700 mb-4"
        />
        
        <div className="space-y-3">
          <p className="text-xs text-gray-500">
            {address}, {postalCode} {city}
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleShowMyLocation}
              disabled={isLoadingLocation}
              className="flex items-center gap-2"
            >
              {isLoadingLocation ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Navigation className="h-4 w-4" />
              )}
              Meinen Standort anzeigen
            </Button>
            
            <Button
              variant="default"
              size="sm"
              onClick={handleGetDirections}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <ExternalLink className="h-4 w-4" />
              Route planen
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketMap;
