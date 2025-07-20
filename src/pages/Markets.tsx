import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Filter, Map, List } from "lucide-react";
import { Link } from "react-router-dom";

interface Market {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  openingHours: string;
  features: string[];
  isOpen: boolean;
}

// Market data from wochenmarkt-deutschland.de
const marketData: Market[] = [
  // Berlin
  {
    id: "1",
    name: "Winterfeldtmarkt",
    address: "Winterfeldtplatz",
    city: "Berlin",
    postalCode: "10781",
    openingHours: "Mi 8-14, Sa 8-16",
    features: ["Bio", "International", "Streetfood"],
    isOpen: true
  },
  {
    id: "2",
    name: "Kollwitzplatz",
    address: "Kollwitzplatz",
    city: "Berlin", 
    postalCode: "10405",
    openingHours: "Do 12-18, Sa 9-16",
    features: ["Bio", "Kunsthandwerk", "Regional"],
    isOpen: false
  },
  {
    id: "3",
    name: "Maybachufer",
    address: "Maybachufer, Neukölln",
    city: "Berlin",
    postalCode: "12047",
    openingHours: "Di, Fr 11-18:30",
    features: ["International", "Großmarkt", "Streetfood"],
    isOpen: true
  },
  {
    id: "4",
    name: "Boxhagener Platz",
    address: "Boxhagener Platz",
    city: "Berlin",
    postalCode: "10245",
    openingHours: "Sa 9-15:30",
    features: ["Bio", "Regional", "Produkte", "Imbisse"],
    isOpen: false
  },
  {
    id: "5",
    name: "Arkonaplatz",
    address: "Arkonaplatz",
    city: "Berlin",
    postalCode: "10435",
    openingHours: "Fr 12-19",
    features: ["Feinkost", "Lokal"],
    isOpen: true
  },
  {
    id: "6",
    name: "Mexikoplatz",
    address: "Mexikoplatz",
    city: "Berlin",
    postalCode: "14163",
    openingHours: "Sa 9-15",
    features: ["Bio", "Kunsthandwerk", "Dorf-Atmosphäre"],
    isOpen: false
  },
  {
    id: "7",
    name: "Karl-August-Platz",
    address: "Karl-August-Platz",
    city: "Berlin",
    postalCode: "10625",
    openingHours: "Mi 8-13, Sa 8-14",
    features: ["Blumen", "Gemüse", "Feinkost"],
    isOpen: true
  },
  {
    id: "8",
    name: "DIE DICKE LINDA",
    address: "Kranoldplatz, Neukölln",
    city: "Berlin",
    postalCode: "12051",
    openingHours: "Sa 10-16",
    features: ["Regional", "Bio", "Musik", "Streetfood"],
    isOpen: false
  },
  // Hamburg
  {
    id: "9",
    name: "Isemarkt",
    address: "Isestraße/Hoheluft",
    city: "Hamburg",
    postalCode: "20144",
    openingHours: "Di, Fr 8:30-14",
    features: ["Großer Europas", "Regional", "Bio"],
    isOpen: true
  },
  {
    id: "10",
    name: "Großneumarkt",
    address: "Großneumarkt",
    city: "Hamburg",
    postalCode: "20354",
    openingHours: "Mi, Sa 8:30-13:30",
    features: ["Historischer Stadtmarkt"],
    isOpen: false
  },
  {
    id: "11",
    name: "Fischmarkt",
    address: "Große Elbstraße 9",
    city: "Hamburg",
    postalCode: "22767",
    openingHours: "So 5-9:30",
    features: ["Kultmarkt", "Fisch", "Musik"],
    isOpen: true
  },
  {
    id: "12",
    name: "Goldbekmarkt",
    address: "Goldbekplatz",
    city: "Hamburg",
    postalCode: "22303",
    openingHours: "Di, Do, Sa 8:30-13",
    features: ["Regional", "Bio"],
    isOpen: false
  },
  {
    id: "13",
    name: "Billstedt",
    address: "Möllner Landstraße",
    city: "Hamburg",
    postalCode: "22111",
    openingHours: "Di 9-13, Fr 9-13",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  // München
  {
    id: "14",
    name: "Viktualienmarkt",
    address: "Viktualienmarkt",
    city: "München",
    postalCode: "80331",
    openingHours: "Mo-Sa 8-20",
    features: ["Traditionsmarkt", "Regional", "Produkte"],
    isOpen: true
  },
  {
    id: "15",
    name: "Josephsplatz",
    address: "Josephsplatz",
    city: "München",
    postalCode: "80798",
    openingHours: "Di 12-18",
    features: ["Bio", "Regional"],
    isOpen: false
  },
  {
    id: "16",
    name: "Mariahilfplatz",
    address: "Mariahilfplatz",
    city: "München",
    postalCode: "81541",
    openingHours: "Sa 7-13",
    features: ["Groß", "Bauernmarkt"],
    isOpen: true
  },
  {
    id: "17",
    name: "Rosenkavaliersplatz",
    address: "Rosenkavaliersplatz",
    city: "München",
    postalCode: "81925",
    openingHours: "Do 8-18",
    features: ["Regional", "Vielfalt"],
    isOpen: false
  },
  {
    id: "18",
    name: "Kirchplatz",
    address: "Kirchplatz",
    city: "München",
    postalCode: "81543",
    openingHours: "Do 8-13",
    features: ["Nachbarschaftsmarkt"],
    isOpen: true
  },
  // Köln
  {
    id: "19",
    name: "Wilhelmsplatz (Nippes)",
    address: "Wilhelmsplatz",
    city: "Köln",
    postalCode: "50733",
    openingHours: "Mo-Sa 7-13",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  {
    id: "20",
    name: "Wiener Platz",
    address: "Wiener Platz",
    city: "Köln",
    postalCode: "51065",
    openingHours: "Di, Do, Sa 7-14",
    features: ["Regional"],
    isOpen: false
  }
];

const Markets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [filteredMarkets, setFilteredMarkets] = useState(marketData);

  const handleSearch = () => {
    let filtered = marketData;

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
      let filtered = marketData;
      
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

  return (
    <div className="min-h-screen bg-background">
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
          <h1 className="text-3xl font-bold text-center text-foreground mb-8">
            Alle Wochenmärkte in deiner Nähe
          </h1>
          
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
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="h-12 px-4 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">Wochentag wählen</option>
                  <option value="mo">Montag</option>
                  <option value="di">Dienstag</option>
                  <option value="mi">Mittwoch</option>
                  <option value="do">Donnerstag</option>
                  <option value="fr">Freitag</option>
                  <option value="sa">Samstag</option>
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
                      {market.isOpen && (
                        <Badge className="bg-green-100 text-green-700 border-green-200">
                          Geöffnet
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
                      <Button variant="outline" size="sm" className="w-full">
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