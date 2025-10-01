/**
 * Calculate distance between two coordinates using Haversine formula
 * Returns distance in kilometers
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return Math.round(distance * 10) / 10; // Round to 1 decimal place
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Format distance for display
 */
export function formatDistance(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toFixed(1)} km`;
}

/**
 * Calculate distances from user location to all items with coordinates
 */
export function calculateDistances<T extends { latitude?: number; longitude?: number }>(
  userLat: number,
  userLon: number,
  items: T[]
): (T & { distance: number })[] {
  return items.map(item => {
    if (item.latitude && item.longitude) {
      const distance = calculateDistance(userLat, userLon, item.latitude, item.longitude);
      return { ...item, distance };
    }
    return { ...item, distance: Infinity };
  });
}

/**
 * Sort items by distance (closest first)
 */
export function sortByDistance<T extends { distance?: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const distA = a.distance ?? Infinity;
    const distB = b.distance ?? Infinity;
    return distA - distB;
  });
}
