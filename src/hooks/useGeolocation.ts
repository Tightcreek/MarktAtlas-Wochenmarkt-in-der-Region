import { useState, useCallback } from 'react';

export interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;
  isLoading: boolean;
  error: string | null;
  isPermissionDenied: boolean;
}

export interface UseGeolocationReturn extends GeolocationState {
  getCurrentLocation: () => void;
  clearLocation: () => void;
  hasLocation: boolean;
}

const initialState: GeolocationState = {
  latitude: null,
  longitude: null,
  accuracy: null,
  isLoading: false,
  error: null,
  isPermissionDenied: false,
};

export const useGeolocation = (): UseGeolocationReturn => {
  const [state, setState] = useState<GeolocationState>(initialState);

  const getCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setState(prev => ({
        ...prev,
        error: 'Geolocation wird von Ihrem Browser nicht unterstützt',
        isLoading: false,
      }));
      return;
    }

    setState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      isPermissionDenied: false,
    }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          isLoading: false,
          error: null,
          isPermissionDenied: false,
        });
      },
      (error) => {
        let errorMessage = 'Standort konnte nicht ermittelt werden';
        let isPermissionDenied = false;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Standortzugriff wurde verweigert';
            isPermissionDenied = true;
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Standortinformationen nicht verfügbar';
            break;
          case error.TIMEOUT:
            errorMessage = 'Zeitüberschreitung beim Abrufen des Standorts';
            break;
        }

        setState({
          latitude: null,
          longitude: null,
          accuracy: null,
          isLoading: false,
          error: errorMessage,
          isPermissionDenied,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 minutes
      }
    );
  }, []);

  const clearLocation = useCallback(() => {
    setState(initialState);
  }, []);

  const hasLocation = state.latitude !== null && state.longitude !== null;

  return {
    ...state,
    getCurrentLocation,
    clearLocation,
    hasLocation,
  };
};
