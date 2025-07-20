import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Phone, Mail, Globe } from "lucide-react";

interface Market {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  openingHours: string;
  features: string[];
  isOpen: boolean;
  description?: string;
  phone?: string;
  email?: string;
  website?: string;
  specialties?: string[];
  facilities?: string[];
  transport?: string;
}

// Extended market data with additional details
const getMarketDetails = (id: string): Market | undefined => {
  const baseMarkets = [
    // Berlin
    {
      id: "1",
      name: "Winterfeldtmarkt",
      address: "Winterfeldtplatz",
      city: "Berlin",
      postalCode: "10781",
      openingHours: "Mittwoch 8-14, Samstag 8-16",
      features: ["Bio", "International", "Streetfood"],
      isOpen: true,
      description: "Der Winterfeldtmarkt ist einer der beliebtesten Wochenmärkte Berlins. Im Herzen von Schöneberg gelegen, bietet er eine große Auswahl an ökologischen und regionalen Produkten. Der Markt ist bekannt für seine entspannte Atmosphäre und die hohe Qualität der angebotenen Waren.",
      phone: "+49 30 12345678",
      email: "info@winterfeldtmarkt.de",
      website: "www.winterfeldtmarkt.de",
      specialties: ["Bio-Gemüse", "Backwaren", "Käse & Milchprodukte", "Blumen & Pflanzen"],
      facilities: ["Toiletten", "Fahrradständer"],
      transport: "U-Bahn: Nollendorfplatz, Tram M2, M10"
    },
    {
      id: "2", 
      name: "Kollwitzplatz",
      address: "Kollwitzplatz",
      city: "Berlin",
      postalCode: "10435",
      openingHours: "Donnerstag 12-19, Samstag 9-16",
      features: ["Bio", "Kunsthandwerk", "Regional"],
      isOpen: false,
      description: "Der Markt am Kollwitzplatz besteht seit über 20 Jahren und hat sich zu einem der wichtigsten Bio-Märkte Berlins entwickelt. Benannt nach der Künstlerin Käthe Kollwitz, spiegelt der Markt den kreativen und umweltbewussten Geist des Kiezes wider.",
      phone: "+49 30 12345679",
      email: "info@kollwitzplatz-markt.de", 
      website: "www.kollwitzplatz-markt.de",
      specialties: ["Bio-Gemüse", "Backwaren", "Käse & Milchprodukte", "Blumen & Pflanzen", "Regionale Fleischwaren", "Honig & Marmeladen"],
      facilities: ["Toiletten", "Sitzgelegenheiten"],
      transport: "Öffentliche Verkehrsmittel: U2 Senefelderplatz, Tram M2, M10"
    },
    // Hamburg
    {
      id: "3",
      name: "Isemarkt",
      address: "Isestraße, Hamburg",
      city: "Hamburg",
      postalCode: "20144",
      openingHours: "Dienstag und Freitag 8:30 - 14:00 Uhr",
      features: ["Großmarkt", "Traditional"],
      isOpen: true,
      description: "Einer von Deutschlands größten und schönsten Wochenmärkten unter der Hochbahnbrücke, mit rund 300 Ständen und vielfältigen kulinarischen Angeboten von Ost-Düringen bis Kaiser Wilhelm in alle möglichen gefrorenen und Marktspezialitäten. Die direkte Anbindung an die U-Bahn macht ihn zentral und auch für Bistet ist eine vielfältige Bio-Produktauswahl im etwa 130 Metern.",
      phone: "+49 40 428 54 2345",
      email: "info@isemarkt-hamburg.de",
      website: "www.isemarkt-hamburg.de",
      specialties: ["Frisches Obst", "Gemüse", "Backwaren", "Fleischwaren", "Fisch", "Blumen"],
      facilities: ["U-Bahn-Anbindung", "Großes Angebot"],
      transport: "U-Bahn: Hoheluftbrücke, Eppendorfer Baum"
    },
    {
      id: "4",
      name: "St. Pauli Fischmarkt",
      address: "Große Elbstraße 9, Hamburg",
      city: "Hamburg",
      postalCode: "22767",
      openingHours: "Sonntag 5:00 - 9:30 Uhr",
      features: ["Fischmarkt", "Kultmarkt"],
      isOpen: false,
      description: "Bietet regionale und saisonale Produkte wie frisches Brot, Blumen und Säugling. Sie zu 90 Stände sind an zwei Tagen in der Woche geöffnet und nach Gefühle und internationale After-Work-Treffpunkt.",
      phone: "+49 40 428 54 2346",
      email: "info@fischmarkt-hamburg.de",
      website: "www.fischmarkt-hamburg.de",
      specialties: ["Fisch", "Meeresfrüchte", "Obst", "Gemüse", "Backwaren"],
      facilities: ["Markthalle", "Fischauktionshalle"],
      transport: "S-Bahn: Landungsbrücken, Bus 112"
    },
    {
      id: "5",
      name: "Volksdorfer Wochenmarkt",
      address: "Kathjarien-Halensee, Hamburg",
      city: "Hamburg",
      postalCode: "22359",
      openingHours: "Mittwoch und Samstag 8:00 - 13:00 Uhr",
      features: ["Regional", "Bio"],
      isOpen: true,
      description: "Bekannt für eine große Auswahl an frischen Lebensmitteln und imbisstständen auf rund 100 Marktständen.",
      phone: "+49 40 428 54 2347",
      email: "info@volksdorf-markt.de",
      website: "www.volksdorf-markt.de",
      specialties: ["Bio-Produkte", "Regionale Ware", "Backwaren", "Fleisch"],
      facilities: ["Großes Angebot", "Imbissstände"],
      transport: "U-Bahn: Volksdorf"
    },
    {
      id: "6",
      name: "Wandsbeker Wochenmarkt",
      address: "Quarree, Hamburg",
      city: "Hamburg",
      postalCode: "22041",
      openingHours: "Montag - Samstag 8:00 - 13:00 Uhr",
      features: ["Regional", "Saisonale Produkte"],
      isOpen: false,
      description: "Bietet regionale und saisonale Produkte wie frisches Brot, Blumen und Säugling. Sie zu 90 Stände sind an sechs Tagen in der Woche geöffnet und bilden einen zentralen und auch für Bistet ist ansprechenden Urban nach Gefühle und internationale After-Work-Treffpunkt.",
      phone: "+49 40 428 54 2348",
      email: "info@wandsbek-markt.de",
      website: "www.wandsbek-markt.de",
      specialties: ["Regionale Produkte", "Saisonales Obst", "Gemüse", "Backwaren"],
      facilities: ["Täglicher Markt", "Zentrale Lage"],
      transport: "U-Bahn: Wandsbek Markt"
    },
    {
      id: "7",
      name: "St. Pauli Nachtmarkt",
      address: "Spielbudenplatz, Hamburg",
      city: "Hamburg",
      postalCode: "20359",
      openingHours: "Montag 16:00 - 22:00 Uhr, Mittwoch-Samstag 16:00 - 23:00 Uhr",
      features: ["Nachtmarkt", "Streetfood"],
      isOpen: true,
      description: "Zentraler Hotspot für Feinschmecker mit über 100 Marktständen und breitem Angebot. Hier kann man auch am bayerisches Weißwurstfrühstück oder ein frisches Bier genießen. Kleiner Markt ist in München häufiger Musemsnstraße und regionale Produkte sowie Blumen arbeiten.",
      phone: "+49 40 428 54 2349",
      email: "info@nachtmarkt-stpauli.de",
      website: "www.nachtmarkt-stpauli.de",
      specialties: ["Streetfood", "Internationale Küche", "Getränke"],
      facilities: ["Abendmarkt", "Unterhaltung"],
      transport: "U-Bahn: St. Pauli, S-Bahn: Landungsbrücken"
    },
    // München
    {
      id: "8",
      name: "Viktualienmarkt",
      address: "Viktualienmarkt 3, München",
      city: "München",
      postalCode: "80331",
      openingHours: "Montag - Samstag 8:00 - 20:00 Uhr",
      features: ["Traditional", "Feinkost"],
      isOpen: true,
      description: "Zentraler Hotspot für Feinschmecker mit über 100 Marktständen und breitem Angebot. Hier kann man auch am bayerisches Weißwurstfrühstück oder ein frisches Bier genießen. Der Markt ist in München kein häufiger Musemnsstraße und regionale Produkte sowie Blumen arbeiten.",
      phone: "+49 89 233 30000",
      email: "info@viktualienmarkt.de",
      website: "www.viktualienmarkt.de",
      specialties: ["Bayerische Spezialitäten", "Feinkost", "Fleisch", "Käse", "Bier"],
      facilities: ["Biergarten", "über 100 Stände"],
      transport: "U-Bahn/S-Bahn: Marienplatz"
    },
    {
      id: "9",
      name: "Bauernmarkt am Maximilianstrasse",
      address: "Maximilianstrasse, München",
      city: "München",
      postalCode: "80539",
      openingHours: "Samstag 7:00 - 13:00 Uhr",
      features: ["Bauernmarkt", "Regional"],
      isOpen: false,
      description: "Kleine Markt ist in München häufiger Musemsnstraße mit ökologisch orientierten Produkten aus der Region and auch Blumen verkauft werden. Das Angebot umfasst auch regionale Produkte, Obst und Gemüse von lokalen Bauern. Seit 1987 Jahren an beliebter Treffpunkt für für Kinder und Familien. Ideal zum Einkaufen frischer Produkte und als über After-Work-Treffpunkt.",
      phone: "+49 89 233 30001",
      email: "info@bauernmarkt-maximilianstrasse.de",
      website: "www.bauernmarkt-maximilianstrasse.de",
      specialties: ["Bio-Produkte", "Regionale Ware", "Obst", "Gemüse"],
      facilities: ["Wochenmarkt", "Bio-Fokus"],
      transport: "U-Bahn: Lehel"
    },
    {
      id: "10",
      name: "Wochenmarkt Haidhausen",
      address: "Weißenburger Platz, München",
      city: "München",
      postalCode: "81667",
      openingHours: "Dienstag 8:00 - 12:00 Uhr",
      features: ["Klassisch", "Feinkost"],
      isOpen: true,
      description: "Klassischer Wochenmarkt mit Obst, Gemüse, Fisch und Fleisch, ergänzt durch südländische Feinkost und Textilwaren.",
      phone: "+49 89 233 30002",
      email: "info@haidhausen-markt.de",
      website: "www.haidhausen-markt.de",
      specialties: ["Obst", "Gemüse", "Fisch", "Fleisch", "Feinkost"],
      facilities: ["Klassischer Markt", "Textilwaren"],
      transport: "S-Bahn: Rosenheimer Platz"
    },
    {
      id: "11",
      name: "Elisabethmarkt",
      address: "Elisabethplatz, München",
      city: "München",
      postalCode: "80796",
      openingHours: "Montag - Freitag 9:00 - 19:00 Uhr, Samstag 7:00 - 18:00 Uhr",
      features: ["Täglich", "Schönheitsplatz"],
      isOpen: false,
      description: "Einer der vier täglich geöffneten Märkte Münchens, bietet alles für den täglichen Bedarf, von Obst und Gemüse bis Schokoladen und Blumen. Seit 2021 in Renovierung.",
      phone: "+49 89 233 30003",
      email: "info@elisabethmarkt.de",
      website: "www.elisabethmarkt.de",
      specialties: ["Täglicher Bedarf", "Obst", "Gemüse", "Schokoladen", "Blumen"],
      facilities: ["Täglich geöffnet", "Renoviert"],
      transport: "U-Bahn: Giselastraße"
    },
    {
      id: "12",
      name: "Bauernmarkt Lehel",
      address: "St.-Anna-Platz 2, München",
      city: "München",
      postalCode: "80538",
      openingHours: "Donnerstag 10:00 - 18:00 Uhr",
      features: ["Bio", "Premium"],
      isOpen: true,
      description: "Bietet eine breite Palette an Produkten mit frischem Obst und Gemüse, zentral und auch aus gehobenen Preisklasse. Der hoch Sortiment ist auch ausgeprägte und vielfältige Käse, Fisch, Fleisch und ausgeprägter. Auch sehr zentral gelegen. Ideal zum Einkaufen frischer Produkte und als vom Stadtentführt verkauft werden können.",
      phone: "+49 89 233 30004",
      email: "info@bauernmarkt-lehel.de",
      website: "www.bauernmarkt-lehel.de",
      specialties: ["Premium-Produkte", "Obst", "Gemüse", "Käse", "Fisch"],
      facilities: ["Gehobenes Sortiment", "Zentrale Lage"],
      transport: "U-Bahn: Lehel"
    },
    // Düsseldorf
    {
      id: "13",
      name: "Carlsplatz",
      address: "Carlsplatz, Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40213",
      openingHours: "Montag - Freitag 8:00 - 18:00 Uhr, Samstag 8:00 - 16:00 Uhr",
      features: ["Marktzenrum", "Vielfalt"],
      isOpen: true,
      description: "Dauerhafter Markt und kulinarisches Zentrum mit erlestenen Spezialitäten, frischem Obst & Gemüse, Backwaren, Metzgerei, exotischen Blumen und Kräutern. Bietet saisonale Gemüse, Feinkost, Geflügel, Käse und einen schönen Blumenseiten mit ungewöhnlichen Sorten.",
      phone: "+49 211 8994000",
      email: "info@carlsplatz-markt.de",
      website: "www.carlsplatz-markt.de",
      specialties: ["Feinkost", "Frisches Obst & Gemüse", "Käse", "Geflügel", "Blumen"],
      facilities: ["Dauerhafter Markt", "Kulinarisches Zentrum"],
      transport: "U-Bahn: Heinrich-Heine-Allee"
    },
    {
      id: "14",
      name: "Rheinischer Bauernmarkt (Pempelfort)",
      address: "Kolpingplatz, Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40477",
      openingHours: "Mittwoch 9:00 - 13:00 Uhr, Samstag 9:30 - 13:00 Uhr",
      features: ["Bauernmarkt", "Regional"],
      isOpen: false,
      description: "Kleiner Bauernmarkt mit regionalen und saisonalen Produkten direkt vom Feld. Obst & Gemüse, Backwaren bis zu Fleisch. Bekannt für die Auswahl an Wildkäutern und Salaten. Frische, gut! Außerdem: Ein neuen, kuscheligen Wohnung, gut zum entspannten Einkaufen direkt von heimischen Früchten sowie regionalen Bio-Produkten für alle, die frische Qualität der Preisklasse.",
      phone: "+49 211 8994001",
      email: "info@bauernmarkt-pempelfort.de",
      website: "www.bauernmarkt-pempelfort.de",
      specialties: ["Regionale Produkte", "Wildkräuter", "Bio-Obst & Gemüse", "Backwaren"],
      facilities: ["Kleiner Markt", "Entspannte Atmosphäre"],
      transport: "U-Bahn: Victoriaplatz"
    },
    {
      id: "15",
      name: "Hermannplatz (Oberbilk)",
      address: "Hermannplatz, Düsseldorf",
      city: "Düsseldorf",
      postalCode: "40225",
      openingHours: "Samstag 7:00 - 13:00 Uhr",
      features: ["Günstig", "Lokal"],
      isOpen: true,
      description: "Günstiger Obdach für Anwohner mit saisonalen Spezialitäten, frischem Obst und Gemüse sowie einem schönen Brot. Der direkte Marktplatz mit regionalen Bio-Produkten kunt für alle, die frische Qualität zu einem günstigen Preis suchen. Bekannt ist die grossen Auswahl an Wildkräutern.",
      phone: "+49 211 8994002",
      email: "info@hermannplatz-markt.de",
      website: "www.hermannplatz-markt.de",
      specialties: ["Günstiges Sortiment", "Saisonale Spezialitäten", "Obst & Gemüse"],
      facilities: ["Günstiger Markt", "Lokaler Bezug"],
      transport: "Straßenbahn: Hermannplatz"
    },
    // Essen
    {
      id: "25",
      name: "Barbarossaplatz (Stoppenberg)",
      address: "Barbarossaplatz, Stoppenberg, Essen",
      city: "Essen",
      postalCode: "45141",
      openingHours: "Mittwoch und Freitag 8:00 - 13:00 Uhr",
      features: ["Keine Angabe"],
      isOpen: true,
      description: "Lokaler Wochenmarkt mit grundlegenden Lebensmitteln und regionalen Produkten. Der Markt versorgt die Bewohner von Stoppenberg mit frischen Waren.",
      phone: "+49 201 8851000",
      email: "info@barbarossaplatz-markt.de",
      website: "www.barbarossaplatz-markt.de",
      specialties: ["Regionale Produkte", "Frische Waren", "Grundversorgung"],
      facilities: ["Stadtteilmarkt", "Lokale Versorgung"],
      transport: "Bus: Stoppenberg"
    },
    {
      id: "31",
      name: "Frohnhauser Markt",
      address: "Frohnhausen, Essen",
      city: "Essen",
      postalCode: "45145",
      openingHours: "Dienstag, Donnerstag, Samstag 8:00 - 13:00 Uhr",
      features: ["Großer Markt", "Saisonales Obst und Gemüse"],
      isOpen: true,
      description: "Einer der größeren Märkte der Stadt mit einer großen Auswahl an saisonalem Obst und Gemüse, frischen Kräutern, Bio-Waren und Pilzarten.",
      phone: "+49 201 8851001",
      email: "info@frohnhauser-markt.de",
      website: "www.frohnhauser-markt.de",
      specialties: ["Saisonales Obst", "Gemüse", "Kräuter", "Bio-Waren", "Pilze"],
      facilities: ["Großer Markt", "Vielfältiges Angebot"],
      transport: "Straßenbahn: Frohnhausen"
    }
  ];

  return baseMarkets.find(market => market.id === id);
};

const MarketDetail = () => {
  const { id } = useParams<{ id: string }>();
  const market = getMarketDetails(id || "");

  if (!market) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Markt nicht gefunden</h1>
          <Link to="/markets">
            <Button>Zurück zu den Märkten</Button>
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link to="/markets">
          <Button variant="outline" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Märkten
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-green-600 to-green-700 overflow-hidden">
        <img 
          src="/lovable-uploads/1236a97e-b09b-4957-9450-7b9e7f2da7f5.png"
          alt="Frisches Obst und Gemüse am Wochenmarkt"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl font-bold mb-2">{market.name}</h1>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{market.address}, {market.postalCode} {market.city}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>Über den Markt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {market.description}
                </p>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle>Spezialitäten</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {market.specialties?.map((specialty, index) => (
                    <div key={index} className="bg-green-50 p-3 rounded-lg text-center">
                      <span className="text-sm font-medium text-green-700">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card>
              <CardHeader>
                <CardTitle>Ausstattung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {market.facilities?.map((facility, index) => (
                    <Badge key={index} variant="outline" className="text-green-700 border-green-200">
                      • {facility}
                    </Badge>
                  ))}
                  {market.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-green-700 border-green-200">
                      • {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Opening Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${market.isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-sm font-medium">
                      {market.isOpen ? 'Geöffnet' : 'Geschlossen'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {market.openingHours}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {market.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{market.phone}</span>
                  </div>
                )}
                {market.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{market.email}</span>
                  </div>
                )}
                {market.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-green-600" />
                    <span className="text-sm">{market.website}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Address */}
            <Card>
              <CardHeader>
                <CardTitle>Adresse</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">{market.address}</p>
                <p className="text-muted-foreground">
                  {market.postalCode} {market.city}
                </p>
              </CardContent>
            </Card>

            {/* Transport */}
            <Card>
              <CardHeader>
                <CardTitle>Anfahrt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Öffentliche Verkehrsmittel</p>
                  <p className="text-sm text-muted-foreground">
                    {market.transport}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetail;