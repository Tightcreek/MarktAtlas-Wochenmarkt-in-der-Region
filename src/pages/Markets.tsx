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
  // Berlin (existing)
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
  // Hamburg (from image)
  {
    id: "3",
    name: "Isemarkt",
    address: "Isestraße, Hamburg",
    city: "Hamburg",
    postalCode: "20144",
    openingHours: "Di, Fr 8:30-14:00",
    features: ["Großmarkt", "Traditional"],
    isOpen: true
  },
  {
    id: "4",
    name: "St. Pauli Fischmarkt",
    address: "Große Elbstraße 9, Hamburg",
    city: "Hamburg",
    postalCode: "22767",
    openingHours: "So 5:00-9:30",
    features: ["Fischmarkt", "Kultmarkt"],
    isOpen: false
  },
  {
    id: "5",
    name: "Volksdorfer Wochenmarkt",
    address: "Kathjarien-Halensee, Hamburg",
    city: "Hamburg",
    postalCode: "22359",
    openingHours: "Mi, Sa 8:00-13:00",
    features: ["Regional", "Bio"],
    isOpen: true
  },
  {
    id: "6",
    name: "Wandsbeker Wochenmarkt",
    address: "Quarree, Hamburg",
    city: "Hamburg",
    postalCode: "22041",
    openingHours: "Mo-Sa 8:00-13:00",
    features: ["Regional", "Saisonale Produkte"],
    isOpen: false
  },
  {
    id: "7",
    name: "St. Pauli Nachtmarkt",
    address: "Spielbudenplatz, Hamburg",
    city: "Hamburg",
    postalCode: "20359",
    openingHours: "Mo 16:00-22:00, Mi-Sa 16:00-23:00",
    features: ["Nachtmarkt", "Streetfood"],
    isOpen: true
  },
  // München (from image)
  {
    id: "8",
    name: "Viktualienmarkt",
    address: "Viktualienmarkt 3, München",
    city: "München",
    postalCode: "80331",
    openingHours: "Mo-Sa 8:00-20:00",
    features: ["Traditional", "Feinkost"],
    isOpen: true
  },
  {
    id: "9",
    name: "Bauernmarkt am Maximilianstrasse",
    address: "Maximilianstrasse, München",
    city: "München",
    postalCode: "80539",
    openingHours: "Sa 7:00-13:00",
    features: ["Bauernmarkt", "Regional"],
    isOpen: false
  },
  {
    id: "10",
    name: "Wochenmarkt Haidhausen",
    address: "Weißenburger Platz, München",
    city: "München",
    postalCode: "81667",
    openingHours: "Di 8:00-12:00",
    features: ["Klassisch", "Feinkost"],
    isOpen: true
  },
  {
    id: "11",
    name: "Elisabethmarkt",
    address: "Elisabethplatz, München",
    city: "München",
    postalCode: "80796",
    openingHours: "Mo-Fr 9:00-19:00, Sa 7:00-18:00",
    features: ["Täglich", "Schönheitsplatz"],
    isOpen: false
  },
  {
    id: "12",
    name: "Bauernmarkt Lehel",
    address: "St.-Anna-Platz 2, München",
    city: "München",
    postalCode: "80538",
    openingHours: "Do 10:00-18:00",
    features: ["Bio", "Premium"],
    isOpen: true
  },
  // Düsseldorf (from image)
  {
    id: "13",
    name: "Carlsplatz",
    address: "Carlsplatz, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40213",
    openingHours: "Mo-Fr 8:00-18:00, Sa 8:00-16:00",
    features: ["Marktzenrum", "Vielfalt"],
    isOpen: true
  },
  {
    id: "14",
    name: "Rheinischer Bauernmarkt (Pempelfort)",
    address: "Kolpingplatz, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40477",
    openingHours: "Mi 9:00-13:00, Sa 9:30-13:00",
    features: ["Bauernmarkt", "Regional"],
    isOpen: false
  },
  {
    id: "15",
    name: "Hermannplatz (Oberbilk)",
    address: "Hermannplatz, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40225",
    openingHours: "Sa 7:00-13:00",
    features: ["Günstig", "Lokal"],
    isOpen: true
  },
  {
    id: "16",
    name: "Friedensplätzen (Unterbilk)",
    address: "Friedensplätzen, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40219",
    openingHours: "Di 8:00-13:00, Fr 9:00-17:00",
    features: ["Rheinischer Bauernmarkt", "Alternative"],
    isOpen: false
  },
  {
    id: "17",
    name: "Marktplatz (Benrath)",
    address: "Benrather Marktplatz, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40597",
    openingHours: "Sa 8:00-13:00",
    features: ["Benrather Markt", "Auswahl"],
    isOpen: true
  },
  {
    id: "18",
    name: "Lessingplatz (Oberbilk)",
    address: "Lessingplatz, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40227",
    openingHours: "Do 8:00-13:30",
    features: ["Bauernmarkt", "Oberbilk"],
    isOpen: false
  },
  {
    id: "19",
    name: "Neusser Tor (Gerresheim)",
    address: "Neusser Tor, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40625",
    openingHours: "Di, Do 8:00-17:00",
    features: ["Gerreshiem", "Gemütlich"],
    isOpen: true
  },
  {
    id: "20",
    name: "Marktplatz (Kaiserswerth)",
    address: "Kaiserswerther Markt, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40489",
    openingHours: "Mi 8:00-14:00",
    features: ["Malerischer Markt", "Historisch"],
    isOpen: false
  },
  {
    id: "21",
    name: "Barbarossaplatz (Oberkassel)",
    address: "Barbarossaplatz, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40545",
    openingHours: "Di, Fr 7:00-18:00",
    features: ["Lebensmittel", "Frischbereich"],
    isOpen: true
  },
  {
    id: "22",
    name: "Lessingplatz (Oberbilk)",
    address: "Lessingplatz, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40227",
    openingHours: "Do 8:00-13:30",
    features: ["Bauernmarkt", "Oberbilk"],
    isOpen: false
  },
  {
    id: "23",
    name: "Gertrudisplatz (Eller)",
    address: "Gertrudisplatz, Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40229",
    openingHours: "Di-Fr 8:00-16:00, Sa 8:00-13:00",
    features: ["Traditioneller Stadtmarkt", "Bio-Produkte"],
    isOpen: true
  },
  {
    id: "24",
    name: "Altenessener Markt",
    address: "Altenessen, Essen",
    city: "Essen",
    postalCode: "45329",
    openingHours: "Di, Fr, Sa 9:00-13:00",
    features: ["Keine Angabe"],
    isOpen: false
  },
  // Essen (from image)
  {
    id: "25",
    name: "Barbarossaplatz (Stoppenberg)",
    address: "Barbarossaplatz, Stoppenberg, Essen",
    city: "Essen",
    postalCode: "45141",
    openingHours: "Mi, Fr 8:00-13:00",
    features: ["Keine Angabe"],
    isOpen: true
  },
  {
    id: "26",
    name: "Oberhausen Fischplatz",
    address: "Marktkirche, Essen-Stadtmitte",
    city: "Essen",
    postalCode: "45127",
    openingHours: "Di, Fr 9:00-18:00",
    features: ["Frische Lebensmittel", "Schokoladen"],
    isOpen: false
  },
  {
    id: "27",
    name: "Dreiringplatz (Steele)",
    address: "Dreiringplatz, Essen-Steele",
    city: "Essen",
    postalCode: "45276",
    openingHours: "Di, Do, Sa 8:00-13:00",
    features: ["Keine Angabe"],
    isOpen: true
  },
  {
    id: "28",
    name: "Ehrenzeller Platz (Altendorf)",
    address: "Ehrenzeller Platz, Altendorf, Essen",
    city: "Essen",
    postalCode: "45143",
    openingHours: "Mi, Sa 8:00-13:00",
    features: ["Keine Angabe"],
    isOpen: false
  },
  {
    id: "29",
    name: "Markt in der Elbestraße (Bergerhausen)",
    address: "Elbestraße, Bergerhausen, Essen",
    city: "Essen",
    postalCode: "45356",
    openingHours: "Fr 14:00-18:00",
    features: ["Keine Angabe"],
    isOpen: true
  },
  {
    id: "30",
    name: "Frintropstr Markt",
    address: "Frintrop, Essen",
    city: "Essen",
    postalCode: "45359",
    openingHours: "Sa 8:00-13:00",
    features: ["Keine Angabe"],
    isOpen: false
  },
  {
    id: "31",
    name: "Frohnhauser Markt",
    address: "Frohnhausen, Essen",
    city: "Essen",
    postalCode: "45145",
    openingHours: "Di, Do, Sa 8:00-13:00",
    features: ["Großer Markt", "Saisonales Obst und Gemüse"],
    isOpen: true
  },
  {
    id: "32",
    name: "Geschwister-Scholl-Straße (Holsterhausen)",
    address: "Geschwister-Scholl-Straße, Holsterhausen, Essen",
    city: "Essen",
    postalCode: "45147",
    openingHours: "Do 8:00-13:00",
    features: ["Keine Angabe"],
    isOpen: false
  },
  {
    id: "33",
    name: "Heisingen",
    address: "Heisinger Marktplatz, Heisingen, Essen",
    city: "Essen",
    postalCode: "45259",
    openingHours: "Fr 14:00-18:30",
    features: ["Keine Angabe"],
    isOpen: true
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
                  onChange={(e) => {
                    setSelectedDay(e.target.value);
                    // Trigger search immediately when day selection changes
                    setTimeout(() => {
                      let filtered = marketData;
                      
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