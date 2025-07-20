import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, RefreshCw } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import heroImage from "@/assets/hero-market.jpg";

const Index = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <Link
              to="/"
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === '/' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              Startseite
            </Link>
            <Link
              to="/markets"
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === '/markets' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              Märkte
            </Link>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-16 px-4 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-hero font-bold text-foreground leading-tight tracking-tight-custom">
                  Finde frische Vielfalt – dein digitaler Atlas für Wochenmärkte in Deutschland.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Entdecke regionale Märkte, saisonale Angebote und gesunde Ernährung – ganz in deiner Nähe.
                </p>
              </div>
              <Link to="/markets">
                <Button variant="hero" size="hero" className="group">
                  <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Markt in deiner Nähe finden
                </Button>
              </Link>
            </div>
            <div className="lg:order-2">
              <img
                src={heroImage}
                alt="Luftiger Bauernmarkt mit frischen Produkten"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Gesund & Regional</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wochenmärkte bieten frische, saisonale Produkte direkt vom Erzeuger. 
                  Kurze Wege, beste Qualität und Unterstützung der regionalen Landwirtschaft.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Einfach Finden</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suche gezielt nach Stadt, Postleitzahl oder Marktname. 
                  Filter nach Wochentag, Bio-Angebot oder besonderen Merkmalen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <RefreshCw className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Immer Aktuell</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Laufende Ergänzung und Pflege der Markt-Datenbank. 
                  Aktuelle Öffnungszeiten, Standorte und besondere Angebote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">
            Starte deine Entdeckungsreise
          </h2>
          <p className="text-xl text-muted-foreground">
            Über 500 Wochenmärkte warten darauf, von dir entdeckt zu werden.
          </p>
          <Link to="/markets">
            <Button variant="hero" size="hero">
              Jetzt Märkte entdecken
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
