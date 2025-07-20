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
      <section className="relative py-20 px-4 min-h-[600px] flex items-center" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Wochenmarkt{' '}
                <span className="text-primary">MarktAtlas</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Entdecken Sie frische, regionale Produkte und traditionelle Wochenmärkte 
                in Ihrer Nähe. Von saisonalem Obst und Gemüse bis hin zu lokalen 
                Spezialitäten.
              </p>
            </div>
            
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-2 flex">
              <input 
                type="text"
                placeholder="Stadt oder Postleitzahl eingeben..."
                className="flex-1 px-4 py-3 text-gray-700 bg-transparent outline-none"
              />
              <Link to="/markets">
                <Button size="lg" className="px-6">
                  Märkte suchen
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Wochenmärkte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">16</div>
                <div className="text-sm text-muted-foreground">Bundesländer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Händler</div>
              </div>
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
