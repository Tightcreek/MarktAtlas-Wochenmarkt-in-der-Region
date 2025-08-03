import { useParams, Link } from "react-router-dom";
import { getChristmasMarketBySlug } from "@/data/weihnachtsmarktdata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, Globe } from "lucide-react";
import SEOHead from "@/components/SEOHead";
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

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${market.name} - Weihnachtsmarkt in ${market.city}`}
        description={`${market.description.substring(0, 160)}...`}
        keywords={`${market.name}, Weihnachtsmarkt ${market.city}, ${market.specialties.join(', ')}`}
      />
      
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

            {/* Website */}
            {market.website && (
              <Card>
                <CardHeader>
                  <CardTitle>Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <a 
                      href={market.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Globe className="h-4 w-4" />
                      Offizielle Website besuchen
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
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