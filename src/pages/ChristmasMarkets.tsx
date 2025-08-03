import { Link } from "react-router-dom";
import { christmasMarkets } from "@/data/weihnachtsmarktdata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";

const ChristmasMarketsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Weihnachtsmärkte - Übersicht der schönsten Märkte Deutschlands"
        description="Entdecken Sie die schönsten Weihnachtsmärkte Deutschlands. Von Nürnberg bis Dresden - alle Infos zu Öffnungszeiten, Spezialitäten und Standorten."
        keywords="Weihnachtsmärkte, Christkindlmärkte, Weihnachtsmarkt Deutschland, Advent, Glühwein"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Startseite
            </Link>
            <span>/</span>
            <span className="text-foreground">Weihnachtsmärkte</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Übersicht der Weihnachtsmärkte
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie die zauberhafte Welt der deutschen Weihnachtsmärkte. 
            Von traditionellen Christkindlmärkten bis hin zu modernen Wintermärkten - 
            hier finden Sie alle Informationen für Ihre Adventszeit.
          </p>
        </div>

        {/* Markets Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            {christmasMarkets.length} Weihnachtsmärkte gefunden
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {christmasMarkets.map((market) => (
            <Card key={market.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-foreground line-clamp-2">
                    {market.name}
                  </CardTitle>
                </div>
                <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {market.city}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {market.openingDates}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {market.description}
                </p>
                
                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {market.specialties.slice(0, 3).map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                    {market.specialties.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{market.specialties.length - 3} weitere
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <Button asChild className="w-full">
                    <Link to={`/weihnachtsmaerkte/${market.slug}`}>
                      Details anzeigen
                    </Link>
                  </Button>
                  
                  {market.website && (
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={market.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Website besuchen
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Markets Link */}
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link to="/markets">
              Zu den Wochenmärkten
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChristmasMarketsPage;