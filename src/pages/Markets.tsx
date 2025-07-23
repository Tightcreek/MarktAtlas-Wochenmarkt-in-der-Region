import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Filter, Map, List } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import marketsData, { isMarketOpen, type Market } from "@/data/markets";

const Markets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Get unique cities for filter
  const cities = ["all", ...Array.from(new Set(marketsData.map(market => market.city)))];

  // Get unique features for filter
  const allFeatures = Array.from(new Set(marketsData.flatMap(market => market.features)));

  // Filter markets based on search and filters
  const filteredMarkets = marketsData.filter(market => {
    const matchesSearch = market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         market.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         market.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCity = selectedCity === "all" || market.city === selectedCity;
    
    const matchesFeatures = selectedFeatures.length === 0 || 
                           selectedFeatures.every(feature => market.features.includes(feature));
    
    return matchesSearch && matchesCity && matchesFeatures;
  });

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCity("all");
    setSelectedFeatures([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <SEOHead 
        title="Wochenmärkte in Deutschland - Finden Sie Ihren lokalen Markt"
        description="Entdecken Sie die besten Wochenmärkte in deutschen Städten. Finden Sie Öffnungszeiten, Standorte und Besonderheiten von Märkten in Berlin, Hamburg, München und weiteren Städten."
      />
      
      <div className="max-w-7xl mx-auto p-4 pt-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Deutsche Wochenmärkte
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entdecken Sie die Vielfalt der deutschen Wochenmärkte - von Bio-Produkten bis hin zu internationalen Spezialitäten.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Nach Markt, Stadt oder Adresse suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* City Filter */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-3 py-2 border border-input rounded-md bg-background text-sm"
            >
              {cities.map(city => (
                <option key={city} value={city}>
                  {city === "all" ? "Alle Städte" : city}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Map className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Feature Filters */}
          <div className="flex flex-wrap gap-2">
            {allFeatures.map(feature => (
              <Button
                key={feature}
                variant={selectedFeatures.includes(feature) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFeature(feature)}
              >
                {feature}
              </Button>
            ))}
            {(selectedFeatures.length > 0 || selectedCity !== "all" || searchTerm) && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <Filter className="h-4 w-4 mr-2" />
                Filter zurücksetzen
              </Button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredMarkets.length} {filteredMarkets.length === 1 ? 'Markt gefunden' : 'Märkte gefunden'}
          </p>
        </div>

        {/* Markets Grid/List */}
        <div className={viewMode === "grid" 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-4"
        }>
          {filteredMarkets.map((market) => {
            const marketIsOpen = isMarketOpen(market.openingHours);
            
            return (
              <Card key={market.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-primary mb-2">
                        {market.name}
                      </CardTitle>
                      <div className="flex items-center text-muted-foreground text-sm mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{market.address}, {market.city}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{market.openingHours}</span>
                      </div>
                    </div>
                    <Badge variant={marketIsOpen ? "default" : "secondary"}>
                      {marketIsOpen ? "Geöffnet" : "Geschlossen"}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {market.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  {market.description && (
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {market.description}
                    </p>
                  )}
                  
                  <Link to={`/market/${market.id}`}>
                    <Button className="w-full">
                      Details anzeigen
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredMarkets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              Keine Märkte gefunden, die Ihren Suchkriterien entsprechen.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Filter zurücksetzen
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Markets;