import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Phone, Mail, Globe } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { marketsData, isMarketOpen, type Market } from "@/data/markets";

// Get market details by ID from unified data source
const getMarketDetails = (id: string): Market | undefined => {
  return marketsData.find(market => market.id === id);
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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://markt-atlas-finden.lovable.app/markets/${market.id}`,
    "name": market.name,
    "description": market.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": market.address,
      "addressLocality": market.city,
      "postalCode": market.postalCode,
      "addressCountry": "DE"
    },
    "openingHours": market.openingHours,
    "telephone": market.phone,
    "email": market.email,
    "url": market.website,
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "DE"
    },
    "priceRange": "€",
    "paymentAccepted": "Cash",
    "currenciesAccepted": "EUR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marktangebot",
      "itemListElement": market.specialties?.map(specialty => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": specialty
        }
      }))
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${market.name} ${market.city} - Wochenmarkt Öffnungszeiten & Infos | MarktAtlas`}
        description={`${market.name} in ${market.city}: ${market.description?.substring(0, 150)}... Öffnungszeiten: ${market.openingHours}. Adresse, Anfahrt und alle Details zum Wochenmarkt.`}
        keywords={`${market.name}, wochenmarkt ${market.city}, markt ${market.postalCode}, ${market.features?.join(', ')}, öffnungszeiten ${market.city}`}
        canonicalUrl={`https://markt-atlas-finden.lovable.app/markets/${market.id}`}
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
                    <Badge key={`facility-${index}`} variant="outline" className="text-green-700 border-green-200">
                      • {facility}
                    </Badge>
                  ))}
                  {market.features.map((feature, index) => (
                    <Badge key={`feature-${index}`} variant="outline" className="text-green-700 border-green-200">
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
                    <div className={`w-2 h-2 rounded-full ${isMarketOpen(market.openingHours) ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-sm font-medium">
                      {isMarketOpen(market.openingHours) ? 'Geöffnet' : 'Geschlossen'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {market.openingHours}
                  </p>
                </div>
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