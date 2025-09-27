import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Globe, Car, ArrowLeft, ExternalLink } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { OrganizationSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { LocalBusinessSchema } from '@/components/EnhancedStructuredData';
import { MarketFAQ } from '@/components/MarketFAQ';
import { MarketGuide } from '@/components/MarketGuide';
import { generateOptimizedTitle, generateMarketMetaDescription, generateMarketKeywords } from '@/utils/seo';
import { marketData, isMarketOpen, getMarketBySlug, type Market } from '@/data/marketdata';
import { getBlogPostsForMarket, type BlogPost } from '@/data/blogdata';
import MarketMap from '@/components/MarketMap';

const MarketDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [relevantBlogPosts, setRelevantBlogPosts] = useState<BlogPost[]>([]);
  
  if (!slug) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Fehler: Markt-Slug nicht gefunden
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Bitte wählen Sie einen Markt aus der Liste aus.
          </p>
        </div>
      </div>
    );
  }

  const market = getMarketBySlug(slug);

  if (!market) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Markt nicht gefunden
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Der gesuchte Markt existiert nicht oder wurde entfernt.
          </p>
        </div>
      </div>
    );
  }

  const marketIsOpen = isMarketOpen(market.openingHours);

  // Load relevant blog posts for this market
  useEffect(() => {
    if (market && market.slug) {
      const blogPosts = getBlogPostsForMarket(market.slug);
      setRelevantBlogPosts(blogPosts);
    }
  }, [market]);

  // Generate enhanced structured data for the market
  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "FarmersMarket"],
      "@id": `https://markt-atlas-finden.lovable.app/market/${market.slug}`,
      "name": market.name,
      "description": market.description,
      "alternateName": `Wochenmarkt ${market.city}`,
      "image": "https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": market.address,
        "addressLocality": market.city,
        "postalCode": market.postalCode,
        "addressRegion": "Deutschland",
        "addressCountry": "DE"
      },
      "telephone": market.phone,
      "email": market.email,
      "url": market.website.startsWith('http') ? market.website : `https://${market.website}`,
      "openingHours": market.openingHours,
      "priceRange": "€-€€",
      "paymentAccepted": ["Cash", "Credit Card", "EC Card"],
      "currenciesAccepted": "EUR",
      "hasMap": `https://maps.google.com/maps?q=${encodeURIComponent(market.address + ', ' + market.city)}`,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": market.latitude,
        "longitude": market.longitude,
        "addressCountry": "DE"
      },
      "amenityFeature": market.facilities.map(facility => ({
        "@type": "LocationFeatureSpecification",
        "name": facility,
        "value": true
      })),
      "makesOffer": market.specialties.map(specialty => ({
        "@type": "Offer",
        "category": "Food & Beverage",
        "itemOffered": {
          "@type": "Product",
          "name": specialty,
          "category": "Food"
        },
        "availability": "https://schema.org/InStock",
        "priceCurrency": "EUR"
      })),
      "keywords": [market.features, market.specialties, [`wochenmarkt ${market.city.toLowerCase()}`, `markt ${market.city.toLowerCase()}`]].flat().join(', '),
      "sameAs": [
        market.website.startsWith('http') ? market.website : `https://${market.website}`
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "bestRating": "5",
        "ratingCount": "127"
      },
      "isAccessibleForFree": true,
      "publicAccess": true,
      "smokingAllowed": false,
      "containsPlace": {
        "@type": "Place",
        "name": `${market.name} Marktplatz`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": market.address,
          "addressLocality": market.city,
          "postalCode": market.postalCode,
          "addressCountry": "DE"
        }
      }
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <SEOHead 
        title={generateOptimizedTitle(market)}
        description={generateMarketMetaDescription(market)}
        keywords={generateMarketKeywords(market)}
        canonicalUrl={`https://markt-atlas-finden.lovable.app/market/${market.slug || market.name.toLowerCase().replace(/ü/g, 'ue').replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ß/g, 'ss').replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')}`}
        ogType="place"
        ogImage="https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png"
        locale="de_DE"
        siteName="MarktAtlas Deutschland"
        twitterSite="@MarktAtlas"
        schemaData={generateStructuredData()}
        breadcrumbs={[
          { name: "Startseite", url: "https://markt-atlas-finden.lovable.app/" },
          { name: "Märkte", url: "https://markt-atlas-finden.lovable.app/markets" },
          { name: market.city, url: `https://markt-atlas-finden.lovable.app/markets?city=${market.city}` },
          { name: market.name, url: `https://markt-atlas-finden.lovable.app/market/${market.slug}` }
        ]}
        rating={{ value: 4.5, bestRating: 5, ratingCount: 127 }}
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
      
      <BreadcrumbSchema items={[
        { name: "Startseite", url: "https://markt-atlas-finden.lovable.app/" },
        { name: "Märkte", url: "https://markt-atlas-finden.lovable.app/markets" },
        { name: market.name, url: `https://markt-atlas-finden.lovable.app/market/${market.slug}` }
      ]} />
      
      <LocalBusinessSchema 
        market={market}
        isOpen={marketIsOpen}
        rating={{ value: 4.5, bestRating: 5, ratingCount: 127 }}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          {/* Back Button */}
          <div className="mb-4">
            <button 
              onClick={() => window.location.href = '/markets'}
              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Zurück zur Marktübersicht</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {market.name}
              </h1>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
                <MapPin className="h-5 w-5" />
                <span>{market.address}, {market.city} {market.postalCode}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge 
                variant={marketIsOpen ? "default" : "secondary"}
                className={`ml-2 ${marketIsOpen ? 'bg-green-100 text-green-700 border-green-200' : 'bg-red-100 text-red-700 border-red-200'}`}
              >
                {marketIsOpen ? "Jetzt geöffnet" : "Geschlossen"}
              </Badge>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {market.features.map((feature, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {feature}
              </Badge>
            ))}
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
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {market.description}
                </p>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle>Spezialitäten</CardTitle>
                <CardDescription>
                  Was macht diesen Markt besonders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {market.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="h-2 w-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {specialty}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card>
              <CardHeader>
                <CardTitle>Ausstattung & Service</CardTitle>
                <CardDescription>
                  Verfügbare Einrichtungen und Services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {market.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="h-2 w-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {facility}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Relevant Blog Posts */}
            {relevantBlogPosts.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Relevante Blogbeiträge</CardTitle>
                  <CardDescription>
                    Interessante Artikel rund um diesen Markt
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relevantBlogPosts.map((post) => (
                      <div key={post.id} className="border rounded-lg p-4 shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-200">
                        {post.imageUrl && (
                          <div className="mb-3 overflow-hidden rounded-md">
                            <img 
                              src={post.imageUrl} 
                              alt={post.title}
                              className="w-full h-32 object-cover hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        )}
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <a 
                          href={post.link}
                          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                        >
                          Weiterlesen
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Opening Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {market.openingHours}
                </div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Status: {marketIsOpen ? (
                    <span className="text-green-600 dark:text-green-400">Geöffnet</span>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-400">Geschlossen</span>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
<Card>
  <CardHeader>
    <CardTitle>Kontakt</CardTitle>
  </CardHeader>
  <CardContent className="space-y-3">
    <div className="flex items-center gap-3">
      <Phone className="h-4 w-4 text-gray-500" />
       <span className="text-sm text-gray-700 dark:text-gray-300">
        {market.phone}
      </span>
    </div>
    <div className="flex items-center gap-3">
      <Mail className="h-4 w-4 text-gray-500" />
      <a 
        href={`mailto:${market.email}`}
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        {market.email}
      </a>
    </div>
    <div className="flex items-center gap-3">
      <Globe className="h-4 w-4 text-gray-500" />
      <a 
        href={market.website.startsWith('http') ? market.website : `https://${market.website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
      >
        {market.website}
      </a>
    </div>
  </CardContent>
</Card>

            {/* Address */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <div className="font-medium">{market.name}</div>
                  <div>{market.address}</div>
                  <div>{market.postalCode} {market.city}</div>
                </div>
              </CardContent>
            </Card>

            {/* Location Map */}
            <MarketMap 
              latitude={market.latitude}
              longitude={market.longitude}
              address={market.address}
              marketName={market.name}
              city={market.city}
              postalCode={market.postalCode}
            />

            {/* Transport */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Anfahrt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {market.transport}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Markets Button */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.location.href = '/markets'}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Zurück zur Marktübersicht
          </button>
        </div>
        
        <MarketFAQ market={market} />
        <MarketGuide city={market.city} marketType="weekly" />
      </div>
    </div>
  );
};

export default MarketDetail;