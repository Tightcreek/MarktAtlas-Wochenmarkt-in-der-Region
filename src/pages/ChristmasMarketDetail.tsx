import { useParams, Link } from "react-router-dom";
import { getChristmasMarketBySlug } from "@/data/weihnachtsmarktdata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, Globe, Phone, Mail, Car } from "lucide-react";
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
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/weihnachtsmaerkte" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Übersicht
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {market.name}
          </h1>
          <div className="flex items-center text-lg text-muted-foreground mb-2">
            <MapPin className="h-5 w-5 mr-2" />
            {market.address}, {market.city}
          </div>
        </div>

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
                <div className="flex flex-wrap gap-2">
                  {market.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Image */}
            {market.imageUrl && (
              <Card>
                <CardContent className="p-0">
                  <img 
                    src={market.imageUrl} 
                    alt={`${market.name} Weihnachtsmarkt`}
                    className="w-full h-64 sm:h-80 object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Opening Hours & Dates */}
            <Card>
              <CardHeader>
                <CardTitle>Öffnungszeiten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Zeitraum</p>
                    <p className="text-muted-foreground">{market.openingDates}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Öffnungszeiten</p>
                    <p className="text-muted-foreground">{market.openingHours}</p>
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

            {/* Transport */}
            {market.transport && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    Anfahrt
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    {market.transport}
                  </div>
                </CardContent>
              </Card>
            )}
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