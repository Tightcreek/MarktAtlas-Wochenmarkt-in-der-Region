import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Filter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import Footer from '@/components/Footer';
import { marketData, isMarketOpen, generateSEOKeywords, type Market } from '@/data/marketdata';

const Markets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [isListView, setIsListView] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();

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

  const handleSearch = () => {
    return marketData.filter(market => {
      const matchesSearch = searchTerm === '' || 
        market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.postalCode.includes(searchTerm);
      
      const matchesDay = selectedDay === '' || 
        market.openingHours.toLowerCase().includes(selectedDay.toLowerCase());
      
      return matchesSearch && matchesDay;
    });
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEOHead 
        title="Wochenmarkt Finder Deutschland - Alle Märkte in deiner Nähe"
        description="Finde über 500 Wochenmärkte und Bauernmärkte in Deutschland, Österreich und der Schweiz. Aktuelle Öffnungszeiten, Standorte und frische Produkte direkt vom Erzeuger. Markt heute geöffnet in deiner Stadt."
        keywords={generateSEOKeywords(marketData)}
        canonicalUrl="https://markt-atlas-finden.lovable.app/markets"
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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Entdecke über {marketData.length} Wochenmärkte und Bauernmärkte in ganz Deutschland, Österreich und der Schweiz. 
            Finde frische Produkte, regionale Spezialitäten und lokale Erzeuger in deiner Nähe.
          </p>
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
              onClick={() => setIsListView(!isListView)}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {isListView ? 'Kartenansicht' : 'Listenansicht'}
            </Button>
          </div>

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

        {/* Markets Grid */}
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