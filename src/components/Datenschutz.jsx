import React from "react";

const Datenschutz = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 min-h-screen text-left">
      <div className="container max-w-3xl mx-auto text-gray-900">
        
        {/* Hauptüberschrift */}
        <h1 className="text-4xl font-bold mb-6 text-left">Datenschutzerklärung</h1>

        <h3 className="text-xl font-bold mt-4">Allgemeine Hinweise</h3>
        <p className="text-gray-700 leading-relaxed">
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
          wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
          werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>

        <h3 className="text-xl font-bold mt-4">Datenerfassung auf unserer Website</h3>
        <p className="text-gray-700 leading-relaxed">
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?<br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
          <a href="/impressum" className="text-blue-600 hover:underline"> Impressum</a> dieser Website entnehmen.
        </p>

        <h3 className="text-xl font-bold mt-4">Wie erfassen wir Ihre Daten?</h3>
        <p className="text-gray-700 leading-relaxed">
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, 
          die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme 
          erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
          Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
        </p>

        <h3 className="text-xl font-bold mt-4">Wofür nutzen wir Ihre Daten?</h3>
        <p className="text-gray-700 leading-relaxed">
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur 
          Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>

        <h3 className="text-xl font-bold mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
        <p className="text-gray-700 leading-relaxed">
          Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
          personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung 
          dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter 
          der im <a href="/impressum" className="text-blue-600 hover:underline">Impressum</a> angegebenen Adresse an uns wenden.
        </p>

        <h3 className="text-xl font-bold mt-4">Analyse-Tools und Tools von Drittanbietern</h3>
        <p className="text-gray-700 leading-relaxed">
        Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor 
        allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; 
        das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die 
        Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerklärung.
        Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren.
        </p>

        {/* 2. Allgemeine Hinweise und Pflichtinformationen */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h2>

        <h3 className="text-xl font-bold mt-4">Datenschutz</h3>
        <p className="text-gray-700 leading-relaxed">
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten 
        vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, 
        mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben 
        und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen 
        kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
        </p>

        <h3 className="text-xl font-bold mt-4">Hinweis zur verantwortlichen Stelle</h3>
        <p className="text-gray-700 leading-relaxed">
          Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
          <strong>Dipl.-Psych. Angelika Schlotmann</strong><br />
          Winzerweg 2e, 69493 Hirschberg<br />
          Telefon: <a href="tel:+496201258954" className="text-blue-600 hover:underline">06201 / 25 89 54</a><br />
          E-Mail: <a href="mailto:sekretariat@rechen-therapie-zentrum.eu" className="text-red-600 font-bold hover:underline">sekretariat@rechen-therapie-zentrum.eu</a>
        </p>

        <br />

        <h3 className="text-xl font-bold mt-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p className="text-gray-700 leading-relaxed">
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits 
        erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit 
        der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>

        <h3 className="text-xl font-bold mt-4">Recht auf Datenübertragbarkeit</h3>
        <p className="text-gray-700 leading-relaxed">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert 
            verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern 
            Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch 
            machbar ist.        
        </p>

        <h3 className="text-xl font-bold mt-4">SSL- bzw. TLS-Verschlüsselung</h3>
        <p className="text-gray-700 leading-relaxed">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel 
            Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine 
            verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt 
            und an dem Schloss-Symbol in Ihrer Browserzeile.
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten 
            mitgelesen werden.        
        </p>

        <h3 className="text-xl font-bold mt-4">Auskunft, Sperrung, Löschung</h3>
        <p className="text-gray-700 leading-relaxed">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre 
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein 
            Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene 
            Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.       
        </p>

        <h3 className="text-xl font-bold mt-4">Widerspruch gegen Werbe-Mails</h3>
        <p className="text-gray-700 leading-relaxed">
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich 
            angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich 
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.   
        </p>

        {/* 3. Datenerfassung auf unserer Website */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Datenerfassung auf unserer Website</h2>

        <h3 className="text-xl font-bold mt-4">Cookies</h3>
        <p className="text-gray-700 leading-relaxed">
        Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine 
        Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, 
        die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
        Die meisten der von uns verwendeten Cookies sind so genannte “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch 
        gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren 
        Browser beim nächsten Besuch wiederzuerkennen.
        <br /><br />
        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall 
        erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim 
        Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
        <br /><br />
        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter 
        Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der 
        Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten 
        Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden 
        diese in dieser Datenschutzerklärung gesondert behandelt.
        </p>

        <h3 className="text-xl font-bold mt-4">Server-Log-Dateien</h3>
        <p className="text-gray-700 leading-relaxed">
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien. Dazu gehören:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mt-2">
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul><br />
        <p className="text-gray-700 leading-relaxed">
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von Daten zur Erfüllung eines 
        Vertrags oder vorvertraglicher Maßnahmen gestattet.
        </p>

        {/* Letzte Aktualisierung */}
        <h3 className="text-xl font-bold mt-4">Kontaktformular</h3>
        <p className="text-gray-700 leading-relaxed">
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive 
        der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei 
        uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        <br /><br />Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer 
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose 
        Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf 
        unberührt.
        <br /><br />Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, 
        hre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener 
        Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.  
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Analyse Tools und Werbung</h2>

        <h3 className="text-xl font-bold mt-4">Google Analytics</h3>
        <p className="text-gray-700 leading-relaxed">
            Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, 
            Mountain View, CA 94043, USA.
            Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem Computer gespeichert werden und 
            die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre 
            Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat 
            ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren.
        </p>

        <h3 className="text-xl font-bold mt-4">IP Anonymisierung</h3>
        <p className="text-gray-700 leading-relaxed">
            Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von 
            Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor 
            der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA 
            übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung 
            der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der 
            Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von 
            Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
        </p>

        <h3 className="text-xl font-bold mt-4">Browser Plugin</h3>
        <p className="text-gray-700 leading-relaxed">
        Sie können darüber hinaus die Erfassung der durch den Cookie erzeugten und auf Ihre Nutzung der Website 
        bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google 
        verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: {" "} 
        <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Google Opt-Out Plugin
        </a>.
        </p>

        <h3 className="text-xl font-bold mt-4">Widerspruch gegen Datenerfassung</h3>
        <p className="text-gray-700 leading-relaxed mt-2">
            Sie können die Erfassung Ihrer Daten durch Google Analytics verhindern, indem Sie auf folgenden Link klicken. 
            Es wird ein Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei zukünftigen Besuchen dieser Website verhindert: 
        </p>
        <p className="mt-2">
        <a
        href="#"
        onClick={() => gaOptout()}
        className="text-red-600 font-bold hover:underline cursor-pointer"
        >
            Google Analytics deaktivieren
        </a>
        </p>

        <p className="text-gray-700 leading-relaxed mt-2">
        Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der {" "}
        <a href="https://support.google.com/analytics/answer/6004245?hl=de" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Datenschutzerklärung von Google
        </a>.
        </p>

        <h3 className="text-xl font-bold mt-4">Auftragsdatenverarbeitung</h3>
        <p className="text-gray-700 leading-relaxed">
            Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen 
            Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Plugins und Tools</h2>

        <h3 className="text-xl font-bold mt-4">YouTube</h3>
        <p className="text-gray-700 leading-relaxed">
        Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., 
        San Bruno, CA 94066, USA.
        Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube 
        hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
        Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil 
        zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
        Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes 
        Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
        Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der  {" "}
        <a href="https://www.google.de/intl/de/policies/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Datenschutzerklärung von Youtube
        </a>.
        </p>

        <h3 className="text-xl font-bold mt-4">Vimeo</h3>
        <p className="text-gray-700 leading-relaxed">
        Unsere Website nutzt Plugins des Videoportals Vimeo. Anbieter ist die Vimeo Inc., 555 West 18th Street, New York, New York 10011, USA.
        Wenn Sie eine unserer mit einem Vimeo-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von Vimeo hergestellt. 
        Dabei wird dem Vimeo-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Zudem erlangt Vimeo Ihre IP-Adresse. Dies gilt auch 
        dann, wenn Sie nicht bei Vimeo eingeloggt sind oder keinen Account bei Vimeo besitzen. Die von Vimeo erfassten Informationen werden 
        an den Vimeo-Server in den USA übermittelt.
        Wenn Sie in Ihrem Vimeo-Account eingeloggt sind, ermöglichen Sie Vimeo, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. 
        Dies können Sie verhindern, indem Sie sich aus Ihrem Vimeo-Account ausloggen.
        Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der {" "}
        <a href="https://vimeo.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            Datenschutzerklärung von Vimeo
        </a>.
        </p>

        <h3 className="text-xl font-bold mt-4">Google Web Fonts</h3>
        <p className="text-gray-700 leading-relaxed">
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. 
        Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
        Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google 
        Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse 
        einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 
        Abs. 1 lit. f DSGVO dar.
        Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
        Weitere Informationen zu Google Web Fonts finden Sie unter {" "}
        <a href="https://developers.google.com/fonts/faq" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            https://developers.google.com/fonts/faq
        </a> und in der {" "} 
        <a href="https://www.google.com/intl/de/policies/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
        Datenschutzerklärung von Google
        </a>.
        </p>


        <h3 className="text-xl font-bold mt-4">Google Maps</h3>
        <p className="text-gray-700 leading-relaxed">
        Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, 
        CA 94043, USA.
        Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel 
        an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese 
        Datenübertragung.
        Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten 
        Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von 
        Art. 6 Abs. 1 lit. f DSGVO dar.
        Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der  {" "}
        <a href="https://www.google.de/intl/de/policies/privacy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
        Datenschutzerklärung von Google
        </a>.
        </p>





      </div>
    </section>
  );
};

export default Datenschutz;
