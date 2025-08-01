import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const Datenschutz = () => {
  return (
    <>
      <SEOHead
        title="Datenschutzerklärung - MarktAtlas Deutschland"
        description="Datenschutzerklärung und Informationen zum Datenschutz für MarktAtlas Deutschland, dem umfassenden Wochenmarkt Finder."
        keywords="datenschutz, datenschutzerklärung, dsgvo, marktfinder, wochenmärkte"
        canonicalUrl={`${window.location.origin}/datenschutz`}
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
            
            <h1 className="text-4xl font-bold mb-4">Datenschutzerklärung</h1>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Datenschutz auf einen Blick */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold mb-4">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold mb-4">Datenerfassung auf dieser Website</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
                Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-
                Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Zeit 
                des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Wofür nutzen wir Ihre Daten?</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere 
                Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge 
                geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, 
                Bestellungen oder sonstige Auftragsanfragen verarbeitet.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder 
                Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
                können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter 
                bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>

              <h3 className="text-xl font-semibold mb-4">Analyse-Tools und Tools von Drittanbietern</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor 
                allem mit sogenannten Analyseprogrammen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden 
                Datenschutzerklärung.
              </p>
            </section>

            {/* Hosting */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">2. Hosting</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <h3 className="text-xl font-semibold mb-4">IONOS</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Anbieter ist die IONOS SE, Eigentümer Str. 57, 56410 Montabaur (nachfolgend IONOS). Wenn Sie unsere 
                Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie 
                der Datenschutzerklärung von IONOS:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <a href="https://www.ionos.de/terms-gtc/terms-privacy" className="text-primary hover:text-primary/80">
                  https://www.ionos.de/terms-gtc/terms-privacy
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein 
                berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine 
                entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 
                6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
              </p>
            </section>

            {/* Allgemeine Hinweise und Pflichtinformationen */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold mb-4">Datenschutz</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                dieser Datenschutzerklärung.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende 
                Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie 
                und zu welchem Zweck das geschieht.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) 
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht 
                möglich.
              </p>

              <h3 className="text-xl font-semibold mb-4">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-muted-foreground">TC Service</p>
                <p className="text-muted-foreground">Pluwiger Str. 16</p>
                <p className="text-muted-foreground">54296 Trier</p>
                <p className="text-muted-foreground">Deutschland</p>
                <p className="text-muted-foreground">Musterweg 10</p>
                <p className="text-muted-foreground">90210 Musterstadt</p>
                <p className="text-muted-foreground">Telefon: +49 (0) 123 44 55 66</p>
                <p className="text-muted-foreground">E-Mail: tcservice.rental@gmail.com</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über 
                die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) 
                entscheidet.
              </p>

              <h3 className="text-xl font-semibold mb-4">Speicherdauer</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
                berechtigtes Löschersuchen stellen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
                werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
                personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im 
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
              </p>
            </section>

            {/* Widerruf Ihrer Einwilligung zur Datenverarbeitung */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine 
                bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten 
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="text-xl font-semibold mb-4">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
              <div className="bg-muted/30 p-6 rounded-lg mb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO 
                  ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN 
                  SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN 
                  WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES 
                  PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, 
                  ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, 
                  WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES 
                  SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG 
                  NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE 
                  VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON 
                  RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes 
                oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger 
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>

              <h3 className="text-xl font-semibold mb-4">Recht auf Datenübertragbarkeit</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags 
                automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format 
                aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen 
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>

              <h3 className="text-xl font-semibold mb-4">Auskunft, Berichtigung und Löschung</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den 
                Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie 
                zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
              </p>

              <h3 className="text-xl font-semibold mb-4">Recht auf Einschränkung der Verarbeitung</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in 
                folgenden Fällen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von 
                ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder 
                Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder 
                juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder 
                eines Mitgliedstaats verarbeitet werden.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datenschutz;