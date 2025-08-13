import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Search, RefreshCw } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import heroImage from "@/assets/hero-market.jpg";
import SEOHead from "@/components/SEOHead";
import { WebsiteSchema, OrganizationSchema } from '@/components/StructuredData';
import { useWebVitals } from '@/hooks/useSEO';
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  
  // Initialize Web Vitals monitoring
  useWebVitals();
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MarktAtlas Deutschland",
    "description": "Deutschlands umfassender Wochenmarkt Finder mit über 500 Märkten",
    "url": "https://markt-atlas-finden.lovable.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://markt-atlas-finden.lovable.app/markets?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Deutsche Wochenmärkte",
      "description": "Vollständige Liste aller Wochenmärkte und Bauernmärkte in Deutschland",
      "itemListElement": [
        {
          "@type": "Place",
          "name": "Wochenmärkte Berlin",
          "description": "Alle Wochenmärkte in Berlin mit Öffnungszeiten"
        },
        {
          "@type": "Place", 
          "name": "Wochenmärkte Hamburg",
          "description": "Alle Wochenmärkte in Hamburg mit Öffnungszeiten"
        },
        {
          "@type": "Place",
          "name": "Wochenmärkte München", 
          "description": "Alle Wochenmärkte in München mit Öffnungszeiten"
        }
      ]
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Wochenmarkt Finder Deutschland - Alle Märkte in deiner Nähe | MarktAtlas"
        description="Finde über 500 Wochenmärkte und Bauernmärkte in Deutschland. Aktuelle Öffnungszeiten, Standorte und frische Produkte direkt vom Erzeuger. Markt heute geöffnet in deiner Stadt."
        keywords="wochenmarkt finder, bauernmarkt deutschland, märkte heute geöffnet, wochenmarkt öffnungszeiten, frische produkte markt, regional einkaufen, markt samstag, wochenmarkt berlin hamburg münchen"
        canonicalUrl="https://markt-atlas-finden.lovable.app/"
        schemaData={schemaData}
      />
      
      {/* Structured Data */}
      <WebsiteSchema 
        siteName="MarktAtlas Deutschland"
        url="https://markt-atlas-finden.lovable.app"
        description="Deutschlands umfassendste Plattform für Wochenmärkte und Bauernmärkte"
        logo="https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png"
      />
      
      <OrganizationSchema 
        name="MarktAtlas Deutschland"
        url="https://markt-atlas-finden.lovable.app"
        logo="https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png"
        sameAs={[
          "https://facebook.com/marktatlas",
          "https://twitter.com/marktatlas",
          "https://instagram.com/marktatlas"
        ]}
        description="Deutschlands führende Plattform für die Suche nach Wochenmärkten und Bauernmärkten"
      />
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
            <Link
              to="/weihnachtsmaerkte"
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === '/weihnachtsmaerkte' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              Weihnachtsmärkte
            </Link>
            <Link
              to="/blog"
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                location.pathname === '/blog' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              Blog
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
                <img 
                  src="/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png" 
                  alt="MarktAtlas Logo" 
                  className="h-36 w-auto mb-18"
                />
                <h1 className="text-4xl lg:text-hero font-bold text-foreground leading-tight tracking-tight-custom">
                  Wochenmarkt Finder Deutschland - Alle Wochenmärkte in deiner Nähe
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Entdecke über 500 Wochenmärkte und Bauernmärkte in Deutschland, Österreich der Schweiz und Luxemburg. Finde Märkte heute geöffnet, aktuelle Öffnungszeiten und frische Produkte direkt vom Erzeuger - ganz in deiner Nähe.
                </p>
              </div>
              <Link to="/markets">
                <Button variant="hero" size="hero" className="group">
                  <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Nächster Wochenmarkt finden
                </Button>
              </Link>
            </div>
            <div className="lg:order-2">
              <img
                src={heroImage}
                alt="Wochenmarkt mit frischen Produkten und regionalen Spezialitäten"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Wochenmarkt Deutschland - Dein umfassender Marktfinder
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Wochenmarkt Öffnungszeiten</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Finde alle Wochenmärkte mit aktuellen Öffnungszeiten. Von Montag bis Sonntag - 
                  entdecke welcher Markt heute geöffnet hat und bietet frische, regionale Produkte direkt vom Bauernmarkt.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Wochenmärkte in meiner Nähe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Suche gezielt nach Stadt, Postleitzahl oder Marktname. Finde den nächsten Wochenmarkt 
                  und filtere nach Wochentag, Bio-Angebot oder besonderen Direktvermarkter-Spezialitäten.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-card transition-all duration-300 bg-gradient-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <RefreshCw className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Markt heute geöffnet</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aktuelle Marktzeiten und Standorte aller Wochenmärkte Deutschland. 
                  Bauernmarkt Öffnungszeiten, Sonderveranstaltungen und frische Produkte Markt-Updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Wochenmärkte in deutschen Großstädten
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Entdecke die besten Wochenmärkte und Bauernmärkte in allen deutschen Großstädten
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Norddeutschland</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/markets" className="hover:text-primary transition-colors">Wochenmarkt Hamburg</Link></li>
                <li><Link to="/markets" className="hover:text-primary transition-colors">Wochenmarkt Bremen</Link></li>
                <li><Link to="/markets" className="hover:text-primary transition-colors">Bauernmarkt Kiel</Link></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Westdeutschland</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/markets" className="hover:text-primary transition-colors">Wochenmarkt Köln</Link></li>
                <li><Link to="/markets" className="hover:text-primary transition-colors">Wochenmarkt Düsseldorf</Link></li>
                <li><Link to="/markets" className="hover:text-primary transition-colors">Wochenmarkt Dortmund</Link></li>
                <li><Link to="/markets" className="hover:text-primary transition-colors">Wochenmarkt Essen</Link></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Süddeutschland</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/markets" className="hover:text-primary transition-colors">Wochenmarkt München</Link></li>
                <li><Link to="/markets" className="hover:text-primary transition-colors">Wochenmarkt Stuttgart</Link></li>
                <li><Link to="/markets" className="hover:text-primary transition-colors">Bauernmarkt Frankfurt</Link></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Ostdeutschland</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/markets" className="hover:text-primary transition-colors">Wochenmarkt Berlin</Link></li>
                <li><Link to="/markets" className="hover:text-primary transition-colors">Wochenmarkt Leipzig</Link></li>
                <li><Link to="/markets" className="hover:text-primary transition-colors">Bauernmarkt Dresden</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weekdays Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Wochenmarkt Zeiten - Märkte nach Wochentagen
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Finde heraus, welche Märkte an welchem Tag geöffnet haben
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Wochenbeginn</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>🗓️ Markt Montag</li>
                <li>🗓️ Markt Dienstag</li>
                <li>🗓️ Markt Mittwoch</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Wochenmitte</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>🗓️ Markt Donnerstag</li>
                <li>🗓️ Markt Freitag</li>
                <li>🛒 Frische Produkte Markt</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Wochenende</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>🎪 Wochenmarkt Samstag</li>
                <li>🌅 Wochenmarkt Sonntag</li>
                <li>👨‍👩‍👧‍👦 Familienmarkt</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">Besondere Zeiten</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>🎊 Wochenmarkt Feiertag</li>
                <li>⏰ Markt täglich</li>
                <li>🌙 Abendmärkte</li>
              </ul>
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
      <Footer />
    </div>
  );
};

export default Index;
