import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Clock, Phone, Mail, Globe } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import marketsData, { isMarketOpen, type Market } from "@/data/markets";

// Get market by ID from unified data
const getMarketDetails = (id: string): Market | undefined => {
  return marketsData.find(market => market.id === id);
};

const MarketDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto pt-8">
          <p className="text-center text-muted-foreground">Markt ID nicht gefunden</p>
          <div className="text-center mt-4">
            <Link to="/markets">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zu den Märkten
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const market = getMarketDetails(id);

  if (!market) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
        <div className="max-w-4xl mx-auto pt-8">
          <p className="text-center text-muted-foreground">Markt nicht gefunden</p>
          <div className="text-center mt-4">
            <Link to="/markets">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zu den Märkten
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const marketIsOpen = isMarketOpen(market.openingHours);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <SEOHead 
        title={`${market.name} - Wochenmarkt Details`}
        description={market.description || `Informationen über den Wochenmarkt ${market.name} in ${market.city}`}
      />
      
      <div className="max-w-4xl mx-auto p-4 pt-8">
        <div className="mb-6">
          <Link to="/markets">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zu den Märkten
            </Button>
          </Link>
        </div>

        <div className="grid gap-6">
          {/* Header Card */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {market.name}
                  </CardTitle>
                  <div className="flex items-center text-muted-foreground mt-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{market.address}, {market.postalCode} {market.city}</span>
                  </div>
                </div>
                <Badge variant={marketIsOpen ? "default" : "secondary"}>
                  {marketIsOpen ? "Geöffnet" : "Geschlossen"}
                </Badge>
              </div>
            </CardHeader>
            
            {market.description && (
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {market.description}
                </p>
              </CardContent>
            )}
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Opening Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">{market.openingHours}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Besonderheiten</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {market.features.map((feature, index) => (
                    <Badge key={index} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          {(market.phone || market.email || market.website) && (
            <Card>
              <CardHeader>
                <CardTitle>Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {market.phone && (
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <a href={`tel:${market.phone}`} className="hover:underline">
                      {market.phone}
                    </a>
                  </div>
                )}
                {market.email && (
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <a href={`mailto:${market.email}`} className="hover:underline">
                      {market.email}
                    </a>
                  </div>
                )}
                {market.website && (
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                    <a 
                      href={market.website.startsWith('http') ? market.website : `https://${market.website}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline"
                    >
                      {market.website}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Specialties */}
          {market.specialties && market.specialties.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Spezialitäten</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-2">
                  {market.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>{specialty}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Facilities and Transport */}
          <div className="grid md:grid-cols-2 gap-6">
            {market.facilities && market.facilities.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Ausstattung</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {market.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {market.transport && (
              <Card>
                <CardHeader>
                  <CardTitle>Anfahrt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{market.transport}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDetail;