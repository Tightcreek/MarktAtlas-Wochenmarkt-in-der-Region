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
  // Hamburg
  {
    id: "1",
    name: "Isemarkt",
    address: "Isestraße, Hamburg",
    city: "Hamburg",
    postalCode: "20251",
    openingHours: "Dienstag und Freitag 08:30 - 14:00 Uhr",
    features: ["Größter Europas", "Regional", "Bio"],
    isOpen: true
  },
  {
    id: "2",
    name: "St. Pauli Fischmarkt",
    address: "Große Elbstraße 9, Hamburg",
    city: "Hamburg",
    postalCode: "22767",
    openingHours: "Sonntag 05:00 - 09:30 Uhr",
    features: ["Kultmarkt", "Fisch", "Live-Musik"],
    isOpen: false
  },
  {
    id: "3",
    name: "Volksdorfer Wochenmarkt",
    address: "Kathyhrem/Halbertshöhe, Hamburg",
    city: "Hamburg",
    postalCode: "22359",
    openingHours: "Mittwoch und Samstag 08:00 - 13:00 Uhr",
    features: ["Regional", "Bio", "Gemüse"],
    isOpen: true
  },
  {
    id: "4",
    name: "Winterhuder Wochenmarkt",
    address: "Quarré, Hamburg",
    city: "Hamburg",
    postalCode: "22303",
    openingHours: "Montag - Samstag 08:00 - 13:00 Uhr",
    features: ["Regional", "Täglicher Markt"],
    isOpen: true
  },
  {
    id: "5",
    name: "St. Pauli Nachtmarkt",
    address: "Spielbudenplatz, Hamburg",
    city: "Hamburg",
    postalCode: "20359",
    openingHours: "Mittwoch 16:00 - 22:00 Uhr (März-Sep), 16:00 - 21:00 Uhr (Okt-Feb)",
    features: ["Nachtmarkt", "Streetfood", "After-Work"],
    isOpen: false
  },
  // München
  {
    id: "6",
    name: "Viktualienmarkt",
    address: "Viktualienmarkt 3, 80331 München",
    city: "München",
    postalCode: "80331",
    openingHours: "Montag - Samstag 08:00 - 20:00 Uhr",
    features: ["Traditionsmarkt", "Feinkost", "Biergarten"],
    isOpen: true
  },
  {
    id: "7",
    name: "Bauernmarkt am Pinakothek der Moderne",
    address: "Barer Straße 40, 80333 München",
    city: "München",
    postalCode: "80333",
    openingHours: "Samstag 07:00 - 13:00 Uhr",
    features: ["Bio", "Regional", "Kunstumgebung"],
    isOpen: false
  },
  {
    id: "8",
    name: "Wochenmarkt Maxhausen",
    address: "Weißenburger Platz, 81667 München",
    city: "München",
    postalCode: "81667",
    openingHours: "Dienstag 08:00 - 12:00 Uhr",
    features: ["Klassischer Markt", "Regional"],
    isOpen: true
  },
  {
    id: "9",
    name: "Elisabethmarkt",
    address: "Elisabethplatz, 80796 München",
    city: "München",
    postalCode: "80796",
    openingHours: "Montag - Freitag 09:00 - 19:00 Uhr, Samstag 07:00 - 15:00 Uhr",
    features: ["Täglich", "Regional", "Schwabing"],
    isOpen: true
  },
  {
    id: "10",
    name: "Bauernmarkt Lehel",
    address: "St. Anna-Platz 2, 80538 München",
    city: "München",
    postalCode: "80538",
    openingHours: "Donnerstag 10:30 - 18:00 Uhr",
    features: ["Bio", "Exklusiv", "Zentral"],
    isOpen: false
  },
  // Düsseldorf
  {
    id: "11",
    name: "Carlsplatz",
    address: "Carlsplatz, 40213 Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40213",
    openingHours: "Montag - Freitag 08:00 - 18:00 Uhr, Samstag 08:00 - 16:00 Uhr",
    features: ["Marktgalerie", "Feinkost", "Zentral"],
    isOpen: true
  },
  {
    id: "12",
    name: "Rheinischer Bauernmarkt (Pempelfort)",
    address: "Königsplatz, 40212 Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40212",
    openingHours: "Mittwoch 09:00 - 13:00 Uhr, Samstag 08:30 - 13:00 Uhr",
    features: ["Bio", "Regional", "Bauernmarkt"],
    isOpen: false
  },
  {
    id: "13",
    name: "Hermesplatz",
    address: "Hermesplatz, 40235 Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40235",
    openingHours: "Samstag 07:00 - 13:00 Uhr",
    features: ["Traditionell", "Regional"],
    isOpen: true
  },
  {
    id: "14",
    name: "Friedensplätchen (Unterbilk)",
    address: "Friedensplätchen, 40219 Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40219",
    openingHours: "Dienstag 08:00 - 13:00 Uhr, Freitag 09:00 - 17:00 Uhr",
    features: ["Nachbarschaftsmarkt", "Klein"],
    isOpen: true
  },
  {
    id: "15",
    name: "Lessingplatz (Oberbilk)",
    address: "Lessingplatz, 40227 Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40227",
    openingHours: "Donnerstag 08:00 - 13:30 Uhr",
    features: ["Stadtteilmarkt", "Regional"],
    isOpen: false
  },
  {
    id: "16",
    name: "Gertrudenplatz (Eller)",
    address: "Gertrudenplatz, 40229 Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40229",
    openingHours: "Dienstag - Freitag 09:00 - 18:00 Uhr, Samstag 08:00 - 13:00 Uhr",
    features: ["Traditioneller Stadtteilmarkt", "Regional"],
    isOpen: true
  },
  // Weitere Düsseldorfer Märkte
  {
    id: "17",
    name: "Altertsener Markt",
    address: "Altertsener, Essen",
    city: "Essen",
    postalCode: "45326",
    openingHours: "Dienstag - Freitag 09:00 - 18:00 Uhr, Samstag 08:00 - 13:00 Uhr",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  {
    id: "18",
    name: "Barbarossaplatz (Stoppenberg)",
    address: "Barbarossaplatz, Stoppenberg, Essen",
    city: "Essen",
    postalCode: "45138",
    openingHours: "Mittwoch und Freitag 08:00 - 13:00 Uhr",
    features: ["Regional"],
    isOpen: false
  },
  {
    id: "19",
    name: "Olympia Flachsmarkt",
    address: "Marktkirche, Essen-Stadtmitte",
    city: "Essen",
    postalCode: "45127",
    openingHours: "Dienstag und Freitag 09:00 - 18:00 Uhr",
    features: ["Zentral", "Regional"],
    isOpen: true
  },
  {
    id: "20",
    name: "Dreiringplatz (Steele)",
    address: "Dreiringplatz, Essen-Steele",
    city: "Essen",
    postalCode: "45276",
    openingHours: "Dienstag, Donnerstag, Samstag 08:00 - 13:00 Uhr",
    features: ["Stadtteilmarkt"],
    isOpen: false
  },
  {
    id: "21",
    name: "Ehrenzeller Platz (Altendorf)",
    address: "Ehrenzeller Platz, Altendorf, Essen",
    city: "Essen",
    postalCode: "45143",
    openingHours: "Mittwoch und Samstag 08:00 - 13:00 Uhr",
    features: ["Regional"],
    isOpen: true
  },
  {
    id: "22",
    name: "Markt in der Elberstraße (Bergerhausen)",
    address: "Elberstraße, Bergerhausen, Essen",
    city: "Essen",
    postalCode: "45359",
    openingHours: "Freitag 14:00 - 18:00 Uhr",
    features: ["Abendmarkt"],
    isOpen: false
  },
  {
    id: "23",
    name: "Frinioper Markt",
    address: "Frintrop, Essen",
    city: "Essen",
    postalCode: "45359",
    openingHours: "Samstag 08:00 - 13:00 Uhr",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  {
    id: "24",
    name: "Frohnhauser Markt",
    address: "Frohnhausen, Essen",
    city: "Essen",
    postalCode: "45144",
    openingHours: "Dienstag, Donnerstag, Samstag 08:00 - 13:00 Uhr",
    features: ["Regional", "Bio-Waren"],
    isOpen: false
  },
  {
    id: "25",
    name: "Gerscheder-Scholten-Straße (Horst)",
    address: "Gerscheder-Scholten-Straße, Horst, Essen",
    city: "Essen",
    postalCode: "45899",
    openingHours: "Donnerstag 08:00 - 13:00 Uhr",
    features: ["Stadtteilmarkt"],
    isOpen: true
  },
  {
    id: "26",
    name: "Heisingen",
    address: "Heisinger Marktplatz, Heisingen, Essen",
    city: "Essen",
    postalCode: "45259",
    openingHours: "Freitag 14:00 - 18:30 Uhr",
    features: ["Abendmarkt"],
    isOpen: false
  },
  {
    id: "27",
    name: "Holsterhausen",
    address: "Gemärken/Sagenverstäße, Holsterhausen",
    city: "Essen",
    postalCode: "45147",
    openingHours: "Donnerstag 12:00 - 18:30 Uhr",
    features: ["Nachmittagsmarkt"],
    isOpen: true
  },
  // Düsseldorf Neuss Tor (Gerresheim)
  {
    id: "28",
    name: "Neuser Tor (Gerresheim)",
    address: "Neuser Tor, 40625 Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40625",
    openingHours: "Dienstag und Donnerstag 08:00 - 17:00 Uhr, Samstag 07:00 - 13:00 Uhr",
    features: ["Stadtteilmarkt", "Vielfalt"],
    isOpen: true
  },
  // Düsseldorf Marktplatz (Kaiserswerth)
  {
    id: "29",
    name: "Marktplatz (Kaiserswerth)",
    address: "Kaiserswerther Markt, 40489 Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40489",
    openingHours: "Mittwoch 08:00 - 14:00 Uhr",
    features: ["Historisch", "Regional"],
    isOpen: false
  },
  // Düsseldorf Botscheplatz (Oberkassel)
  {
    id: "30",
    name: "Botscheplatz (Oberkassel)",
    address: "Botscheplatz, 40545 Düsseldorf",
    city: "Düsseldorf",
    postalCode: "40545",
    openingHours: "Dienstag und Freitag 08:00 - 18:00 Uhr",
    features: ["Stadtteilmarkt", "Lebensmittel"],
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