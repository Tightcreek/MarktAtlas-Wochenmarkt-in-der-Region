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
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-green-50 dark:from-red-950/20 dark:to-green-950/20">
      <SEOHead 
        title="Weihnachtsmärkte - Übersicht der schönsten Märkte Deutschlands"
        description="Entdecken Sie die schönsten Weihnachtsmärkte Deutschlands. Von Nürnberg bis Dresden - alle Infos zu Öffnungszeiten, Spezialitäten und Standorten."
        keywords="Weihnachtsmärkte, Christkindlmärkte, Weihnachtsmarkt Deutschland, Advent, Glühwein"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-red-600 transition-colors">
              Startseite
            </Link>
            <span>/</span>
            <span className="text-red-700 dark:text-red-400 font-medium">Weihnachtsmärkte</span>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-red-200 dark:border-red-800 shadow-lg">
          <h1 className="text-4xl font-bold text-red-800 dark:text-red-200 mb-4">
            🎄 Übersicht der Weihnachtsmärkte 🎄
          </h1>
          <p className="text-lg text-red-600 dark:text-red-300 max-w-2xl mx-auto">
            Entdecken Sie die zauberhafte Welt der deutschen Weihnachtsmärkte. 
            Von traditionellen Christkindlmärkten bis hin zu modernen Wintermärkten - 
            hier finden Sie alle Informationen für Ihre Adventszeit.
          </p>
        </div>

        {/* Markets Count */}
        <div className="mb-8">
          <p className="text-red-600 dark:text-red-400 font-medium">
            🎅 {christmasMarkets.length} Weihnachtsmärkte gefunden
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {christmasMarkets.map((market) => (
            <Card key={market.id} className="hover:shadow-xl transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-600">
              <CardHeader className="bg-gradient-to-r from-red-50 to-green-50 dark:from-red-950/30 dark:to-green-950/30">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-red-800 dark:text-red-200 line-clamp-2">
                    {market.name}
                  </CardTitle>
                </div>
                <div className="flex items-center text-red-600 dark:text-red-400 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {market.city}
                </div>
                <div className="flex items-center text-red-600 dark:text-red-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {market.openingDates}
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {market.description}
                </p>
                
                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {market.specialties.slice(0, 3).map((specialty, index) => (
                      <Badge key={index} className="bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200 text-xs border-red-200 dark:border-red-700">
                        {specialty}
                      </Badge>
                    ))}
                    {market.specialties.length > 3 && (
                      <Badge variant="outline" className="text-xs border-red-300 text-red-600 dark:border-red-600 dark:text-red-400">
                        +{market.specialties.length - 3} weitere
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white border-none">
                    <Link to={`/weihnachtsmaerkte/${market.slug}`}>
                      🎁 Details anzeigen
                    </Link>
                  </Button>
                  
                  {market.website && (
                    <Button variant="outline" size="sm" asChild className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-950/20">
                      <a 
                        href={market.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        🌐 Website besuchen
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Back to Markets Link */}
        <div className="text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-green-200 dark:border-green-800">
          <Button variant="outline" asChild className="border-green-600 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-950/20">
            <Link to="/markets">
              🏪 Zu den Wochenmärkten
            </Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChristmasMarketsPage;