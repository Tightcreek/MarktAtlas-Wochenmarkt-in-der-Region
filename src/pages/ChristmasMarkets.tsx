import { Link, useLocation } from "react-router-dom";
import { christmasMarkets } from "@/data/weihnachtsmarktdata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { BreadcrumbSchema, FAQSchema, OrganizationSchema } from "@/components/StructuredData";
import Footer from "@/components/Footer";
import { ChristmasMarketSearch } from "@/components/ChristmasMarketSearch";
import { ChristmasMarketFilters } from "@/components/ChristmasMarketFilters";
import { useChristmasMarketFilters, Filters } from "@/hooks/useChristmasMarketFilters";
import { useState } from "react";

const ChristmasMarketsPage = () => {
  const location = useLocation();
  
  const [filters, setFilters] = useState<Filters>({
    searchQuery: '',
    status: 'all',
    admission: 'all',
    features: []
  });

  const { filteredMarkets, resetFilters, resultCount } = useChristmasMarketFilters(christmasMarkets, filters);

  const handleFiltersChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleReset = () => {
    setFilters(resetFilters());
  };
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://marktatlas.lovable.app/weihnachtsmaerkte';
  
  const breadcrumbItems = [
    { name: 'Startseite', url: 'https://marktatlas.lovable.app/' },
    { name: 'Weihnachtsmärkte', url: currentUrl }
  ];

  const faqs = [
    {
      question: "Wann öffnen die Weihnachtsmärkte in Deutschland?",
      answer: "Die meisten Weihnachtsmärkte in Deutschland öffnen Ende November und bleiben bis zum 23. Dezember geöffnet. Einige beginnen bereits Anfang November und wenige bleiben bis nach Neujahr geöffnet."
    },
    {
      question: "Was sind die bekanntesten Weihnachtsmärkte Deutschlands?",
      answer: "Zu den bekanntesten gehören der Nürnberger Christkindlmarkt, der Dresdner Striezelmarkt und der Kölner Weihnachtsmarkt. Jeder hat seine eigenen Traditionen und Spezialitäten."
    },
    {
      question: "Welche Spezialitäten gibt es auf deutschen Weihnachtsmärkten?",
      answer: "Typische Spezialitäten sind Glühwein, geröstete Mandeln, Lebkuchen, Stollen, Bratwurst, Reibekuchen und handwerkliche Weihnachtsdekoration."
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-green-50 dark:from-red-950/20 dark:to-green-950/20">
      <SEOHead 
        title="Weihnachtsmärkte 2025 | Deutschland, Österreich & Schweiz"
        description="Entdecke die schönsten Weihnachtsmärkte 2025 in Deutschland, Österreich & Schweiz. Termine, Öffnungszeiten & Highlights der besten Christkindlmärkte."
        keywords="weihnachtsmärkte 2025, christkindlmärkte deutschland, weihnachtsmarkt termine 2025, advent märkte, weihnachtsmarkt öffnungszeiten"
        canonicalUrl="https://markt-atlas-finden.lovable.app/weihnachtsmaerkte"
        ogImage="https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png"
        ogType="website"
        siteName="MarktAtlas Deutschland"
        breadcrumbs={breadcrumbItems}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Die besten Weihnachtsmärkte Deutschland 2025",
          "description": "Kompletter Guide zu den schönsten Weihnachtsmärkten in Deutschland 2025 mit allen Terminen, Öffnungszeiten, Spezialitäten und Anfahrtsinformationen",
          "url": currentUrl,
          "inLanguage": "de-DE",
          "about": {
            "@type": "Thing",
            "name": "Weihnachtsmärkte",
            "description": "Traditionelle deutsche Weihnachtsmärkte mit Glühwein, Lebkuchen und Kunsthandwerk"
          },
          "mainEntity": {
            "@type": "ItemList",
           "numberOfItems": filteredMarkets.length,
           "itemListElement": filteredMarkets.map((market, index) => ({
              "@type": "Event",
              "name": market.name,
              "location": {
                "@type": "Place",
                "name": market.city,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": market.city,
                  "addressCountry": "DE"
                }
              },
              "description": market.description,
              "startDate": "2025-11-25",
              "endDate": "2025-12-23",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "organizer": {
                "@type": "Organization",
                "name": market.city + " Stadtverwaltung"
              },
              "position": index + 1
            }))
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://marktatlas.lovable.app/weihnachtsmaerkte?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        }}
      />
      
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
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
                  : 'border-transparent text-muted-foreground hover:border-muted-foreground'
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          🎄 Die besten Weihnachtsmärkte 2025 🎄
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Entdecken Sie Deutschlands magischste Weihnachtsmärkte mit allen Terminen & Geheimtipps
        </p>
        
        {/* Christmas Market Image */}
        <div className="max-w-4xl mx-auto mb-6">
          <img 
            src="/lovable-uploads/2b8ae1e1-72bb-4669-bda0-58a94434bd80.png"
            alt="Weihnachtsmarkt mit festlicher Beleuchtung und traditionellen Holzbuden"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

        {/* Search and Filters Section */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <ChristmasMarketSearch
              value={filters.searchQuery}
              onChange={(value) => handleFiltersChange({ ...filters, searchQuery: value })}
            />
          </div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto">
            <ChristmasMarketFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onReset={handleReset}
            />
          </div>
        </div>

        {/* Markets Count */}
        <div className="mb-8">
          <p className="text-red-600 dark:text-red-400 font-medium">
            🎅 {resultCount} Weihnachtsmarkt{resultCount !== 1 ? 'märkte' : ''} gefunden
            {resultCount !== christmasMarkets.length && (
              <span className="text-muted-foreground"> (von {christmasMarkets.length} gesamt)</span>
            )}
          </p>
        </div>

        {/* Markets Grid */}
        {resultCount === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              🔍 Keine Weihnachtsmärkte gefunden
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Versuchen Sie andere Suchbegriffe oder entfernen Sie einige Filter
            </p>
            <Button onClick={handleReset} variant="outline" className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-950/20">
              Alle Filter zurücksetzen
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredMarkets.map((market) => (
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
        )}

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