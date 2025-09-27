import { useParams, Link } from "react-router-dom";
import { marketData } from "@/data/marketdata";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import { generateMarketKeywords } from "@/utils/seo";

export default function CityMarkets() {
  const { city } = useParams<{ city: string }>();
  
  if (!city) return null;
  
  const decodedCity = decodeURIComponent(city);
  const marketsInCity = marketData.filter(
    market => market.city.toLowerCase() === decodedCity.toLowerCase()
  );

  if (marketsInCity.length === 0) {
    return (
      <>
        <SEOHead 
          title={`Wochenmärkte in ${decodedCity} - Markt Atlas`}
          description={`Leider haben wir aktuell keine Wochenmärkte in ${decodedCity} in unserer Datenbank. Entdecken Sie Märkte in anderen Städten.`}
          keywords={`wochenmarkt ${decodedCity.toLowerCase()}, märkte ${decodedCity.toLowerCase()}, bauernmarkt ${decodedCity.toLowerCase()}`}
          canonicalUrl={`https://markt-atlas-finden.lovable.app/markets/city/${encodeURIComponent(decodedCity)}`}
        />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Wochenmärkte in {decodedCity}</h1>
          <p className="text-muted-foreground">
            Leider haben wir aktuell keine Wochenmärkte in {decodedCity} in unserer Datenbank. 
            Besuchen Sie unsere <Link to="/markets" className="text-primary hover:underline">Märkte-Übersicht</Link> für andere Städte.
          </p>
        </div>
      </>
    );
  }

  // Generate comprehensive keywords from all markets in the city
  const cityKeywords = marketsInCity.map(market => generateMarketKeywords(market)).join(', ');
  
  return (
    <>
      <SEOHead 
        title={`${marketsInCity.length} Wochenmärkte in ${decodedCity} - Öffnungszeiten & Adressen`}
        description={`🥕 Alle ${marketsInCity.length} Wochenmärkte in ${decodedCity} auf einen Blick: Öffnungszeiten, Adressen, Spezialitäten & aktuelle Informationen. Frische Produkte direkt vom Erzeuger.`}
        keywords={cityKeywords}
        canonicalUrl={`https://markt-atlas-finden.lovable.app/markets/city/${encodeURIComponent(decodedCity)}`}
        breadcrumbs={[
          { name: "Startseite", url: "https://markt-atlas-finden.lovable.app/" },
          { name: "Märkte", url: "https://markt-atlas-finden.lovable.app/markets" },
          { name: decodedCity, url: `https://markt-atlas-finden.lovable.app/markets/city/${encodeURIComponent(decodedCity)}` }
        ]}
      />
      
      <main className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Wochenmärkte in {decodedCity}</h1>
          <p className="text-lg text-muted-foreground">
            {marketsInCity.length} Märkte in {decodedCity} - frische Produkte direkt vom Erzeuger
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketsInCity.map((market) => (
            <Link 
              key={market.id} 
              to={`/market/${market.slug || market.id}`}
              className="block"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{market.name}</CardTitle>
                    <Badge variant={market.isOpen ? "default" : "secondary"}>
                      {market.isOpen ? "Geöffnet" : "Geschlossen"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {market.address}, {market.postalCode} {market.city}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {market.openingHours}
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {market.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {market.specialties.slice(0, 3).map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Über Wochenmärkte in {decodedCity}</h2>
          <div className="prose max-w-none">
            <p className="text-muted-foreground">
              {decodedCity} bietet {marketsInCity.length} verschiedene Wochenmärkte, die regelmäßig frische, 
              regionale Produkte direkt von Erzeugern und Händlern anbieten. Von traditionellen Bauernmärkten 
              bis hin zu spezialisierten Bio-Märkten - hier finden Sie eine große Auswahl an saisonalen 
              Lebensmitteln, Blumen und regionalen Spezialitäten.
            </p>
            <p className="text-muted-foreground mt-4">
              Die Märkte in {decodedCity} sind wichtige Treffpunkte des gesellschaftlichen Lebens und 
              tragen zur nachhaltigen Versorgung mit frischen Lebensmitteln bei. Durch den direkten 
              Kontakt zu den Erzeugern erfahren Sie mehr über die Herkunft der Produkte und unterstützen 
              gleichzeitig die regionale Wirtschaft.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}