import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { OrganizationSchema } from '@/components/StructuredData';

const Impressum = () => {
  return (
    <>
      <SEOHead
        title="Impressum - MarktAtlas Deutschland"
        description="Impressum und rechtliche Hinweise für MarktAtlas Deutschland, dem umfassenden Wochenmarkt Finder."
        keywords="impressum, rechtliche hinweise, marktfinder, wochenmärkte"
        canonicalUrl={`${window.location.origin}/impressum`}
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
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>
            
            <h1 className="text-4xl font-bold mb-4">Impressum</h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Angaben gemäß § 5 TMG</strong>
            </p>

            <div className="space-y-8">
              {/* Company Information */}
              <section>
                <div className="space-y-2">
                  <p className="font-semibold">Luka Schmalenbach</p>
                  <p>MarktAtlas - Wochenmärkte in der Region</p>
                  <p>Pluwiger Str. 16</p>
                  <p>54296 Trier</p>
                  <p>Deutschland</p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Kontakt:</h2>
                <div className="space-y-2">
                  <p>E-Mail: marktatlas@gmx.de</p>
                  <p>
                    Website: 
                    <Link 
                      to="/" 
                      className="text-primary hover:text-primary/80 ml-2"
                    >
                      https://www.marktatlas.de
                    </Link>
                  </p>
                </div>
              </section>

              {/* Responsible Person */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Vertreten durch:</h2>
                <p>Luka Schmalenbach</p>
              </section>

              {/* Legal Responsibility */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
                <div className="space-y-2">
                  <p>Luka Schmalenbach</p>
                  <p>Pluwiger Str. 16</p>
                  <p>54296 Trier</p>
                </div>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-xl font-semibold mb-4">Haftungsausschluss:</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
                      Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Haftung für Links</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                      Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Urheberrecht</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
                      Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                      bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impressum;