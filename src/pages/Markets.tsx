import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Filter, Navigation, Map, List } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Footer from '@/components/Footer';
import { OrganizationSchema } from '@/components/StructuredData';
import { marketData, isMarketOpen, generateSEOKeywords, type Market } from '@/data/marketdata';
import organicProduceImage from '@/assets/organic-produce.jpg';
import { useGeolocation } from '@/hooks/useGeolocation';
import { calculateDistances, sortByDistance, formatDistance } from '@/utils/distanceCalculation';
import { MarketsMapView } from '@/components/MarketsMapView';
import { toast } from 'sonner';

const Markets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [sortBy, setSortBy] = useState<'relevance' | 'distance'>('relevance');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();
  const geolocation = useGeolocation();

  // Update current time every minute to keep badges accurate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (): (Market & { relevanceScore: number; distance?: number })[] => {
    let searchResults = marketData.map(market => {
      let relevanceScore = 0;
      const searchLower = searchTerm.toLowerCase().trim();
      
      if (searchTerm === '') {
        relevanceScore = 1;
      } else {
        if (market.city.toLowerCase() === searchLower) {
          relevanceScore += 100;
        } else if (market.city.toLowerCase().startsWith(searchLower)) {
          relevanceScore += 70;
        }
        
        if (market.name.toLowerCase() === searchLower) {
          relevanceScore += 90;
        } else if (market.name.toLowerCase().startsWith(searchLower)) {
          relevanceScore += 60;
        }
        
        if (market.postalCode === searchTerm) {
          relevanceScore += 50;
        } else if (market.postalCode.startsWith(searchTerm)) {
          relevanceScore += 40;
        }
        
        if (relevanceScore < 60) {
          const exactWordRegex = new RegExp(`\\b${searchLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
          if (exactWordRegex.test(market.name)) {
            relevanceScore += 30;
          }
        }
        
        if (relevanceScore < 70) {
          const exactWordRegex = new RegExp(`\\b${searchLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
          if (exactWordRegex.test(market.city)) {
            relevanceScore += 35;
          }
        }
        
        if (relevanceScore === 0) {
          const exactWordRegex = new RegExp(`\\b${searchLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
          if (exactWordRegex.test(market.address)) {
            relevanceScore += 5;
          }
        }
      }
      
      return { ...market, relevanceScore };
    }).filter(market => {
      const matchesSearch = searchTerm === '' || market.relevanceScore >= 5;
      const matchesDay = selectedDay === '' || 
        market.openingHours.toLowerCase().includes(selectedDay.toLowerCase());
      const marketIsOpen = isMarketOpen(market.openingHours);
      const matchesStatus = selectedStatus === '' || 
        (selectedStatus === 'geöffnet' && marketIsOpen) ||
        (selectedStatus === 'geschlossen' && !marketIsOpen);
      
      return matchesSearch && matchesDay && matchesStatus;
    });

    // Add distances if user location is available
    if (geolocation.hasLocation && geolocation.latitude && geolocation.longitude) {
      const withDistances = calculateDistances(
        geolocation.latitude,
        geolocation.longitude,
        searchResults
      );
      searchResults = withDistances as typeof searchResults;
    }

    // Sort by distance or relevance
    if (sortBy === 'distance' && geolocation.hasLocation) {
      const sorted = sortByDistance(searchResults);
      searchResults = sorted as typeof searchResults;
    } else {
      searchResults = searchResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
    }
    
    return searchResults;
  };

  const handleGetLocation = () => {
    geolocation.getCurrentLocation();
    toast.success('Standort wird ermittelt...');
  };

  const filteredMarkets = handleSearch();

  const dayButtons = [
    { value: '', label: 'Alle Tage' },
    { value: 'montag', label: 'Montag' },
    { value: 'dienstag', label: 'Dienstag' },
    { value: 'mittwoch', label: 'Mittwoch' },
    { value: 'donnerstag', label: 'Donnerstag' },
    { value: 'freitag', label: 'Freitag' },
    { value: 'samstag', label: 'Samstag' },
    { value: 'sonntag', label: 'Sonntag' }
  ];

  const statusButtons = [
    { value: '', label: 'Alle' },
    { value: 'geöffnet', label: 'Geöffnet' },
    { value: 'geschlossen', label: 'Geschlossen' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEOHead 
        title="Alle Wochenmärkte Deutschland | 500+ Märkte durchsuchen"
        description="Durchsuche über 500 Wochenmärkte & Bauernmärkte in Deutschland. Filter nach Stadt, Tag & Öffnungszeiten. Finde frische, regionale Produkte in deiner Nähe."
        keywords="wochenmärkte deutschland, bauernmärkte suchen, markt heute offen, wochenmarkt finder, regionale produkte deutschland, frische lebensmittel"
        canonicalUrl="https://markt-atlas-finden.lovable.app/markets"
        ogImage="https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png"
      />
      
      <OrganizationSchema 
        name="MarktAtlas Deutschland"
        url="https://markt-atlas-finden.lovable.app"
        logo="https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png"
        sameAs={[
          "https://facebook.com/marktatlas",
          "https://twitter.com/marktatlas", 
          "https://instagram.com/marktatlas"
        ]}
        description="Deutschlands führende Plattform für die Suche nach Wochenmärkten und Bauernmärkten"
      />
      
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <Link
              to="/"
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === '/' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              Startseite
            </Link>
            <Link
              to="/markets"
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === '/markets' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              Märkte
            </Link>
            <Link
              to="/weihnachtsmaerkte"
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === '/weihnachtsmaerkte' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              Weihnachtsmärkte
            </Link>
            <Link
              to="/blog"
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === '/blog' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Wochenmarkt Finder Deutschland
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Entdecke über {marketData.length} Wochenmärkte und Bauernmärkte in ganz Deutschland, Österreich, der Schweiz und Luxemburg. 
            Finde frische Produkte, regionale Spezialitäten und lokale Erzeuger in deiner Nähe.
          </p>
          
          {/* Organic Produce Image */}
          <div className="max-w-4xl mx-auto mb-6">
            <img 
              src={organicProduceImage} 
              alt="Frische regionale Bio-Produkte vom Wochenmarkt - Obst, Gemüse und Kräuter direkt vom lokalen Erzeuger"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Suche nach Marktname, Stadt oder Postleitzahl..."
                value={searchTerm}
                onChange={handleInputChange}
                className="pl-10"
              />
            </div>
            <Button
              variant={geolocation.hasLocation ? "default" : "outline"}
              onClick={handleGetLocation}
              disabled={geolocation.isLoading}
              className="whitespace-nowrap"
            >
              <Navigation className="h-4 w-4 mr-2" />
              {geolocation.isLoading ? 'Wird ermittelt...' : geolocation.hasLocation ? 'Standort aktualisieren' : 'Standort finden'}
            </Button>
          </div>

          {/* Location Status */}
          {geolocation.error && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-md text-sm">
              {geolocation.error}
            </div>
          )}
          
          {geolocation.hasLocation && (
            <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-md text-sm flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Navigation className="h-4 w-4" />
                Standort ermittelt - Märkte werden nach Entfernung sortiert
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  geolocation.clearLocation();
                  setSortBy('relevance');
                }}
                className="text-xs"
              >
                Löschen
              </Button>
            </div>
          )}

          {/* Day Filter */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Filter nach Wochentag:
            </p>
            <div className="flex flex-wrap gap-2">
              {dayButtons.map(day => (
                <Button
                  key={day.value}
                  variant={selectedDay === day.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDay(day.value)}
                  className="text-xs"
                >
                  {day.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Filter nach Status:
            </p>
            <div className="flex flex-wrap gap-2">
              {statusButtons.map(status => (
                <Button
                  key={status.value}
                  variant={selectedStatus === status.value ? "green" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStatus(status.value)}
                  className="text-xs"
                >
                  {status.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort and View Options */}
          <div className="mb-4 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sortieren nach:
              </p>
              <div className="flex gap-2">
                <Button
                  variant={sortBy === 'relevance' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy('relevance')}
                  className="text-xs"
                >
                  Relevanz
                </Button>
                <Button
                  variant={sortBy === 'distance' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSortBy('distance')}
                  disabled={!geolocation.hasLocation}
                  className="text-xs"
                >
                  Entfernung
                </Button>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Ansicht:
              </p>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'list' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="text-xs"
                >
                  <List className="h-4 w-4 mr-1" />
                  Liste
                </Button>
                <Button
                  variant={viewMode === 'map' ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode('map')}
                  className="text-xs"
                >
                  <Map className="h-4 w-4 mr-1" />
                  Karte
                </Button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {filteredMarkets.length} von {marketData.length} Märkten gefunden
          </div>
        </div>

        {/* Current Time Display for Debugging */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6 text-center">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Aktuelle Zeit: {currentTime.toLocaleDateString('de-DE', { weekday: 'long' })}, {currentTime.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>

        {/* Map or List View */}
        {viewMode === 'map' ? (
          <MarketsMapView 
            markets={filteredMarkets}
            userLocation={geolocation.hasLocation ? { latitude: geolocation.latitude!, longitude: geolocation.longitude! } : null}
            onMarketClick={(market) => {
              const slug = market.slug || market.name.toLowerCase()
                .replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ß/g, 'ss')
                .replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
              window.location.href = `/market/${slug}`;
            }}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMarkets.map((market) => {
            // Calculate market open status dynamically on each render
            const marketIsOpen = isMarketOpen(market.openingHours);
            
            return (
              <Card key={market.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{market.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 mt-1">
                        <MapPin className="h-4 w-4" />
                        {market.city}, {market.postalCode}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant={marketIsOpen ? "default" : "secondary"}
                      className={`ml-2 ${marketIsOpen ? 'bg-green-100 text-green-700 border-green-200' : 'bg-red-100 text-red-700 border-red-200'}`}
                    >
                      {marketIsOpen ? "Geöffnet" : "Geschlossen"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      {market.openingHours}
                    </div>
                    
                    {(market as any).distance !== undefined && (market as any).distance !== Infinity && (
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <Navigation className="h-4 w-4" />
                        {formatDistance((market as any).distance)} entfernt
                      </div>
                    )}
                    
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {market.address}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {market.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                     <Button 
                       variant="default"
                       size="sm"
                       className="w-full bg-green-600 hover:bg-green-700"
                       onClick={() => {
                         const slug = market.slug || market.name.toLowerCase()
                           .replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ß/g, 'ss')
                           .replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
                         window.location.href = `/market/${slug}`;
                       }}
                     >
                       Details anzeigen
                     </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          </div>
        )}

        {/* Empty State */}
        {filteredMarkets.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Keine Märkte gefunden
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Versuche es mit einem anderen Suchbegriff oder ändere die Filter.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Markets;