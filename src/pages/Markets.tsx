import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Filter, Map, List } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { marketsData, isMarketOpen, type Market } from "@/data/markets";

const Markets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [filteredMarkets, setFilteredMarkets] = useState(marketsData);

  const handleSearch = () => {
    let filtered = marketsData;

    // Filter by search term (city, postal code, or market name)
    if (searchTerm.trim()) {
      filtered = filtered.filter(market => 
        market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        market.postalCode.includes(searchTerm.trim()) ||
        market.address.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by weekday
    if (selectedDay) {
      const dayMap: { [key: string]: string[] } = {
        "mo": ["Mo", "Montag"],
        "di": ["Di", "Dienstag"],
        "mi": ["Mi", "Mittwoch"],
        "do": ["Do", "Donnerstag"],
        "fr": ["Fr", "Freitag"],
        "sa": ["Sa", "Samstag"],
        "so": ["So", "Sonntag"]
      };
      
      const searchDays = dayMap[selectedDay] || [];
      filtered = filtered.filter(market => 
        searchDays.some(day => market.openingHours.includes(day))
      );
    }

    setFilteredMarkets(filtered);
  };

  // Auto-search when search term or day changes
  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    // Auto-search after short delay
                       setTimeout(() => {
                      let filtered = marketsData;
      
      if (value.trim()) {
        filtered = filtered.filter(market => 
          market.name.toLowerCase().includes(value.toLowerCase()) ||
          market.city.toLowerCase().includes(value.toLowerCase()) ||
          market.postalCode.includes(value.trim()) ||
          market.address.toLowerCase().includes(value.toLowerCase())
        );
      }

      if (selectedDay) {
        const dayMap: { [key: string]: string[] } = {
          "mo": ["Mo", "Montag"],
          "di": ["Di", "Dienstag"],
          "mi": ["Mi", "Mittwoch"],
          "do": ["Do", "Donnerstag"],
          "fr": ["Fr", "Freitag"],
          "sa": ["Sa", "Samstag"],
          "so": ["So", "Sonntag"]
        };
        
        const searchDays = dayMap[selectedDay] || [];
        filtered = filtered.filter(market => 
          searchDays.some(day => market.openingHours.includes(day))
        );
      }

      setFilteredMarkets(filtered);
    }, 300);
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Wochenmärkte Deutschland",
    "description": "Vollständige Liste aller Wochenmärkte und Bauernmärkte in Deutschland mit Öffnungszeiten und Standorten",
    "url": "https://markt-atlas-finden.lovable.app/markets",
    "numberOfItems": marketsData.length,
    "itemListElement": marketsData.slice(0, 10).map((market, index) => ({
      "@type": "Place",
      "position": index + 1,
      "name": market.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": market.address,
        "addressLocality": market.city,
        "postalCode": market.postalCode,
        "addressCountry": "DE"
      },
      "openingHours": market.openingHours,
      "url": `https://markt-atlas-finden.lovable.app/markets/${market.id}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Alle Wochenmärkte Deutschland - Marktfinder mit Öffnungszeiten | MarktAtlas"
        description="Entdecke über 500 Wochenmärkte in Deutschland. Suche nach Stadt, PLZ oder Marktname. Aktuelle Öffnungszeiten, Standorte und welche Märkte heute geöffnet haben."
        keywords="wochenmärkte deutschland, bauernmärkte suchen, markt öffnungszeiten, märkte heute geöffnet, wochenmarkt berlin hamburg münchen köln, regional einkaufen"
        canonicalUrl="https://markt-atlas-finden.lovable.app/markets"
        schemaData={schemaData}
      />
      {/* Header */}
      <header className="bg-green-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              MarktAtlas
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Startseite
              </Link>
              <Link to="/markets" className="text-primary font-medium">
                Märkte
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-foreground mb-2">
            Wochenmarkt Finder Deutschland - Alle Märkte mit Öffnungszeiten
          </h1>
          <h2 className="text-xl text-center text-muted-foreground mb-8">
            Finde Wochenmärkte in deiner Nähe - Markt heute geöffnet, Bauernmarkt Öffnungszeiten und regionale Direktvermarkter
          </h2>
          
          <div className="bg-card rounded-2xl shadow-card p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Stadt, PLZ oder Marktname eingeben..."
                  value={searchTerm}
                  onChange={(e) => handleInputChange(e.target.value)}
                  className="h-12 text-base"
                />
              </div>
              <div className="flex gap-2">
                <select 
                  value={selectedDay}
                  onChange={(e) => {
                    setSelectedDay(e.target.value);
                    // Trigger search immediately when day selection changes
                    setTimeout(() => {
                      let filtered = marketsData;
                      
                      if (searchTerm.trim()) {
                        filtered = filtered.filter(market => 
                          market.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          market.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          market.postalCode.includes(searchTerm.trim()) ||
                          market.address.toLowerCase().includes(searchTerm.toLowerCase())
                        );
                      }

                      if (e.target.value) {
                        const dayMap: { [key: string]: string[] } = {
                          "mo": ["Mo", "Montag"],
                          "di": ["Di", "Dienstag"],
                          "mi": ["Mi", "Mittwoch"],
                          "do": ["Do", "Donnerstag"],
                          "fr": ["Fr", "Freitag"],
                          "sa": ["Sa", "Samstag"],
                          "so": ["So", "Sonntag"]
                        };
                        
                        const searchDays = dayMap[e.target.value] || [];
                        filtered = filtered.filter(market => 
                          searchDays.some(day => market.openingHours.includes(day))
                        );
                      }

                      setFilteredMarkets(filtered);
                    }, 100);
                  }}
                  className="h-12 px-4 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">Wochentag wählen</option>
                  <option value="mo">Montag</option>
                  <option value="di">Dienstag</option>
                  <option value="mi">Mittwoch</option>
                  <option value="do">Donnerstag</option>
                  <option value="fr">Freitag</option>
                  <option value="sa">Samstag</option>
                  <option value="so">Sonntag</option>
                </select>
                <Button onClick={handleSearch} size="lg" className="h-12">
                  <Search className="w-5 h-5 mr-2" />
                  Suchen
                </Button>
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4 mr-2" />
                  Liste
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                >
                  <Map className="w-4 h-4 mr-2" />
                  Karte
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredMarkets.length} Märkte gefunden
            </p>
          </div>

          {viewMode === "list" ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredMarkets.map((market) => (
                <Card key={market.id} className="shadow-soft hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{market.name}</CardTitle>
                      {isMarketOpen(market.openingHours) ? (
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          Geöffnet
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700 border-red-200">
                          Geschlossen
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {market.address}, {market.postalCode} {market.city}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{market.openingHours}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {market.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link to={`/markets/${market.id}`}>
                      <Button variant="green" size="sm" className="w-full">
                        Details anzeigen
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Kartenansicht wird geladen...
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Markets;
