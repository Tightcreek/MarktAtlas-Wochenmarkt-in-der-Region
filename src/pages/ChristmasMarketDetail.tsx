import { useParams, Link } from "react-router-dom";
import { getChristmasMarketBySlug } from "@/data/weihnachtsmarktdata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, Globe, Phone, Mail, Car, Wine, Cake, Coffee, Gift, Music, Star, Ticket, ParkingCircle, Bus, Train } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema } from "@/components/StructuredData";
import Footer from "@/components/Footer";

const ChristmasMarketDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Markt nicht gefunden</h1>
          <Button asChild>
            <Link to="/weihnachtsmaerkte">Zurück zur Übersicht</Link>
          </Button>
        </div>
      </div>
    );
  }

  const market = getChristmasMarketBySlug(slug);

  if (!market) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Weihnachtsmarkt nicht gefunden</h1>
          <p className="text-muted-foreground mb-4">
            Der gewünschte Weihnachtsmarkt konnte nicht gefunden werden.
          </p>
          <Button asChild>
            <Link to="/weihnachtsmaerkte">Zurück zur Übersicht</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://marktatlas.lovable.app/weihnachtsmaerkte/${market.slug}`;
  
  const breadcrumbItems = [
    { name: 'Startseite', url: 'https://marktatlas.lovable.app/' },
    { name: 'Weihnachtsmärkte', url: 'https://marktatlas.lovable.app/weihnachtsmaerkte' },
    { name: market.name, url: currentUrl }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${market.name} 2025 ✨ Weihnachtsmarkt ${market.city} | Alle Termine & Infos`}
        description={`🎄 ${market.name} in ${market.city} 2025: ${market.description.substring(0, 120)}... ✨ Öffnungszeiten, Spezialitäten, Anfahrt & Insider-Tipps für Ihren perfekten Weihnachtsmarkt-Besuch!`}
        keywords={`${market.name.toLowerCase()}, weihnachtsmarkt ${market.city.toLowerCase()} 2025, ${market.city.toLowerCase()} christkindlmarkt, ${market.specialties.slice(0, 5).join(', ').toLowerCase()}, weihnachtsmarkt öffnungszeiten ${market.city.toLowerCase()}, advent ${market.city.toLowerCase()}, glühwein ${market.city.toLowerCase()}, weihnachtsmarkt termine 2025`}
        canonicalUrl={currentUrl}
        ogImage={market.imageUrl || "/lovable-uploads/2b8ae1e1-72bb-4669-bda0-58a94434bd80.png"}
        ogType="place"
        siteName="MarktAtlas Deutschland"
        breadcrumbs={breadcrumbItems}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Event",
          "name": market.name,
          "description": market.description,
          "url": currentUrl,
          "image": market.imageUrl,
          "startDate": "2025-11-25",
          "endDate": "2025-12-23",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "location": {
            "@type": "Place",
            "name": market.name,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": market.address,
              "addressLocality": market.city,
              "addressCountry": "DE"
            }
          },
          "organizer": {
            "@type": "Organization", 
            "name": `${market.city} Stadtverwaltung`,
            "url": market.website
          },
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "validFrom": "2025-11-25",
            "validThrough": "2025-12-23"
          },
          "subEvent": market.specialties.map(specialty => ({
            "@type": "Event",
            "name": specialty,
            "superEvent": market.name
          })),
          "audience": {
            "@type": "Audience",
            "audienceType": "Families, Tourists, Local Residents"
          },
          "inLanguage": "de-DE"
        }}
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <div className="relative h-96 lg:h-[500px] overflow-hidden">
        {market.imageUrl ? (
          <img 
            src={market.imageUrl} 
            alt={`${market.name} Weihnachtsmarkt`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-primary" />
        )}
        
        {/* Hero Overlay */}
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                {market.name}
              </h1>
              <div className="flex items-center text-lg lg:text-xl mb-6">
                <MapPin className="h-6 w-6 mr-3" />
                {market.address}, {market.city}
              </div>
              <Button variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/weihnachtsmaerkte" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Zurück zur Übersicht
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Beschreibung</CardTitle>
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
                <CardTitle>Spezialitäten & Angebote</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {market.specialties.map((specialty, index) => {
                    const getSpecialtyIcon = (specialty: string) => {
                      const lowerSpecialty = specialty.toLowerCase();
                      if (lowerSpecialty.includes('glühwein') || lowerSpecialty.includes('wein')) return Wine;
                      if (lowerSpecialty.includes('bratwurst') || lowerSpecialty.includes('wurst')) return Coffee;
                      if (lowerSpecialty.includes('lebkuchen') || lowerSpecialty.includes('kuchen') || lowerSpecialty.includes('süß')) return Cake;
                      if (lowerSpecialty.includes('kunsthandwerk') || lowerSpecialty.includes('geschenk')) return Gift;
                      if (lowerSpecialty.includes('musik') || lowerSpecialty.includes('bühne')) return Music;
                      return Star;
                    };
                    
                    const IconComponent = getSpecialtyIcon(specialty);
                    
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <IconComponent className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">
                          {specialty}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Highlights & Programm */}
            {market.highlights && market.highlights.length > 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Highlights & Programm
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {market.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-muted">
                        <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                          <Star className="h-3 w-3 text-primary" />
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    Highlights & Programm
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-muted">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">
                        Traditioneller Weihnachtsmarkt mit festlicher Atmosphäre
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-muted">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">
                        Vielfältige Auswahl an lokalen Spezialitäten
                      </p>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-muted">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <Star className="h-3 w-3 text-primary" />
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">
                        Handwerkskunst und weihnachtliche Geschenke
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Entry Price */}
            <Card className="border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-transparent dark:from-green-950/20">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <Ticket className="h-5 w-5" />
                  Eintritt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <Ticket className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-green-700 dark:text-green-400">
                      {market.entryPrice || "Eintritt frei"}
                    </p>
                    {!market.entryPrice && (
                      <p className="text-sm text-green-600 dark:text-green-500">
                        Kostenloser Zugang für alle Besucher
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Opening Hours & Dates */}
            <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Calendar className="h-5 w-5" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-background/80 rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Zeitraum</p>
                      <p className="text-foreground text-lg">{market.openingDates}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Öffnungszeiten</p>
                      <p className="text-foreground text-lg">{market.openingHours}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card>
              <CardHeader>
                <CardTitle>Adresse</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-foreground">{market.address}</p>
                    <p className="text-muted-foreground">{market.city}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {market.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">
                      {market.phone}
                    </span>
                  </div>
                )}
                {market.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href={`mailto:${market.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {market.email}
                    </a>
                  </div>
                )}
                {market.website && (
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <a 
                      href={market.website.startsWith('http') ? market.website : `https://${market.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline cursor-pointer"
                    >
                      {market.website}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Parken & Anfahrt */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Parken & Anfahrt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* ÖPNV */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Bus className="h-4 w-4 text-primary" />
                    Öffentliche Verkehrsmittel
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {market.publicTransport || market.transport}
                  </p>
                </div>
                
                {/* Parking */}
                {market.parking && (
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <ParkingCircle className="h-4 w-4 text-primary" />
                      Parkplätze
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {market.parking}
                    </p>
                  </div>
                )}
                
                {!market.parking && (
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <ParkingCircle className="h-4 w-4 text-primary" />
                      Parkplätze
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Wir empfehlen die Anreise mit öffentlichen Verkehrsmitteln. Parkplätze in der Innenstadt sind begrenzt und oft kostenpflichtig.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/weihnachtsmaerkte" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Weihnachtsmarkt-Übersicht
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChristmasMarketDetailPage;