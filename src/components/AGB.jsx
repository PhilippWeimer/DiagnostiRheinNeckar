import React from "react";

const AGB = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 min-h-screen">
      <div className="container max-w-3xl mx-auto text-gray-900">
        
        {/* Hauptüberschrift */}
        <h1 className="text-4xl font-bold mb-6 text-left">Allgemeine Geschäftsbedingungen (AGB)</h1>

        {/* § 1 Geltungsbereich */}
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-left">§ 1 Geltungsbereich</h2>
        <p className="text-gray-700 leading-relaxed text-left">
          Für die Geschäftsbeziehung zwischen dem Supperverlag und dem Besteller gelten ausschließlich die 
          nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung. 
          Abweichende Bedingungen des Bestellers erkennt der Supperverlag nicht an, es sei denn, der Supperverlag 
          hätte ausdrücklich schriftlich ihrer Geltung zugestimmt.
        </p>

        {/* § 2 Vertragsschluss */}
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-left">§ 2 Vertragsschluss</h2>
        <p className="text-gray-700 leading-relaxed text-left">
          Ihre Bestellung stellt ein Angebot an uns zum Abschluss eines Kaufvertrages dar. Wenn Sie eine Bestellung 
          beim Supperverlag aufgeben, schicken wir Ihnen eine E-Mail, die den Eingang Ihrer Bestellung bei uns bestätigt 
          und deren Einzelheiten aufführt (Bestellbestätigung). Diese Bestellbestätigung stellt keine Annahme Ihres 
          Angebotes dar, sondern soll Sie nur darüber informieren, dass Ihre Bestellung bei uns eingegangen ist. 
          Ein Kaufvertrag kommt erst dann zustande, wenn wir das bestellte Produkt an Sie versenden.
        </p>

        <p className="text-gray-700 leading-relaxed text-left mt-4">
        Bitte beachten Sie, dass wir sämtliche Produkte nur in haushaltsüblichen Mengen verkaufen. 
        Dies bezieht sich sowohl auf die Anzahl der bestellten Produkte im Rahmen einer Bestellung als 
        auch auf die Aufgabe mehrerer Bestellungen des selben Produkts, bei denen die einzelnen Bestellungen 
        eine haushaltsübliche Menge umfassen.
        </p>

        {/* § 3 Widerrufsrecht */}
        {/* § 3 Widerrufsrecht */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-left">§ 3 Widerrufsrecht bis zu 2 Wochen, Ausschluss des Widerrufs</h2>

        {/* Widerrufsbelehrung */}
        <h3 className="text-xl font-bold mt-4 text-left">Widerrufsbelehrung</h3>
        <h4 className="text-lg font-medium mt-2 text-left">Widerrufsrecht</h4>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
        Sie können Ihre Vertragserklärung innerhalb von zwei Wochen ohne Angabe von Gründen 
        in Textform (z. B. Brief, E-Mail) oder durch Rücksendung der Sache widerrufen.  
        Die Frist beginnt frühestens mit Eingang der Ware und nicht vor Erhalt dieser Belehrung.  
        Zur Wahrung der Widerrufsfrist genügt die rechtzeitige Absendung des Widerrufs oder der Sache.
        </p>

        {/* Rücksende-Adresse */}
        <h4 className="text-lg font-medium mt-4 text-left">Rücksendeadresse:</h4>
        <p className="text-gray-700 leading-relaxed text-left">
        Supperverlag, Winzerweg 2e, 69493 Hirschberg
        </p>

        {/* E-Mail für Widerruf */}
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
        Der Widerruf kann per E-Mail erfolgen unter:   
        <span className="text-red-600 font-bold text-left"> info@wasserglasmethode.de</span>
        </p>

        {/* Widerrufsfolgen */}
        <h3 className="text-xl font-bold mt-6 text-left">Widerrufsfolgen:</h3>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
        Im Falle eines wirksamen Widerrufs sind die beiderseits empfangenen Leistungen zurückzugewähren 
        und ggf. gezogene Nutzungen (z. B. für den Gebrauch der Sache eine Nutzungsgebühr) herauszugeben.
        </p>

        <ul className="list-disc pl-6 mt-2 text-gray-700 leading-relaxed text-left">
        <li>Können Sie uns die empfangene Leistung ganz oder teilweise nicht oder nur in verschlechtertem Zustand zurückgewähren, müssen Sie uns ggf. Wertersatz leisten.</li>
        <li>Bei der Überlassung von Sachen gilt dies nicht, wenn die Verschlechterung ausschließlich auf deren Prüfung zurückzuführen ist.</li>
        <li>Sie können die Wertersatzpflicht vermeiden, indem Sie die Sache nicht wie Ihr Eigentum in Gebrauch nehmen.</li>
        <li>Paketversandfähige Sachen sind zurückzusenden.</li>
        <li>Sie haben die Kosten der Rücksendung zu tragen, wenn die gelieferte Ware der bestellten entspricht und der Preis der zurückzusendenden Sache 50 Euro nicht übersteigt.</li>
        </ul>

        {/* Ausschluss des Widerrufs */}
        <h3 className="text-xl font-bold mt-6 text-left">Ausschluss des Widerrufs</h3>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
        Das Widerrufsrecht besteht nicht bei Fernabsatzverträgen zur Lieferung von Waren, 
        die nach Kundenspezifikation angefertigt werden oder eindeutig auf die persönlichen 
        Bedürfnisse zugeschnitten sind oder die auf Grund ihrer Beschaffenheit nicht für eine 
        Rücksendung geeignet sind oder schnell verderben können oder deren Verfalldatum überschritten würde.
        </p>


        {/* § 4 Lieferung */}
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-left">§ 4 Lieferung</h2>
        <p className="text-gray-700 leading-relaxed text-left">
        Sofern nicht anders vereinbart, erfolgt die Lieferung ab dem Lager vom Supperverlag an die vom 
        Besteller angegebene Lieferadresse. Angaben über die Lieferfrist sind unverbindlich, soweit nicht 
        ausnahmsweise der Liefertermin verbindlich zugesagt wurde.
        </p>

        <p className="text-gray-700 leading-relaxed text-left mt-4">
        Falls der Supperverlag ohne eigenes Verschulden zur Lieferung der bestellten Ware nicht in der Lage 
        ist, weil ein Lieferant des Supperverlags seine vertraglichen Verpflichtungen nicht erfüllt, ist der 
        Supperverlag dem Besteller gegenüber zum Rücktritt berechtigt. In diesem Fall wird der Besteller unverzüglich 
        darüber informiert, dass das bestellte Produkt nicht zur Verfügung steht. Die gesetzlichen Ansprüche des 
        Bestellers bleiben unberührt. Soweit eine Lieferung an den Besteller nicht möglich ist, weil die gelieferte 
        Ware nicht durch die Eingangstür, Haustür oder den Treppenaufgang des Bestellers passt oder weil der Besteller 
        nicht unter der von ihm angegebenen Lieferadresse angetroffen wird, obwohl der Lieferzeitpunkt dem Besteller mit 
        angemessener Frist angekündigt wurde, trägt der Besteller die Kosten für die erfolglose Anlieferung.
        </p>

        {/* § 5 Zahlung */}
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-left">§ 5 Fälligkeit und Zahlung, Verzug</h2>
        <p className="text-gray-700 leading-relaxed text-left">
          Der Besteller kann den Kaufpreis per Paypal oder Lastschriftverfahren zahlen. Kommt der Besteller 
          in Zahlungsverzug, so ist der Supperverlag berechtigt, Verzugszinsen in Höhe von 5 % über dem von 
          der Europäischen Zentralbank bekannt gegebenen Basiszinssatz p.a. zu fordern. Falls dem Supperverlag ein 
          höherer Verzugsschaden nachweisbar entstanden ist, ist der Supperverlag berechtigt, diesen geltend zu machen.
        </p>

        {/* § 6 Eigentumsvorbehalt */}
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-left">§ 6 Eigentumsvorbehalt</h2>
        <p className="text-gray-700 leading-relaxed text-left">
        Die gelieferte Ware bleibt bis zur vollständigen Bezahlung im Eigentum vom Supperverlag.
        </p>

        {/* § 7 Mängelhaftung */}
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-left">§ 7 Mängelhaftung</h2>
        <p className="text-gray-700 leading-relaxed text-left">
        Liegt ein Mangel der Kaufsache vor, gelten die gesetzlichen Vorschriften. Die Abtretung dieser Ansprüche 
        des Bestellers ist ausgeschlossen. Soweit sich nachstehend nichts anderes ergibt, sind weitergehende Ansprüche 
        des Bestellers -- gleich aus welchen Rechtsgründen -- ausgeschlossen. Der Supperverlag haftet deshalb nicht 
        für Schäden, die nicht am Liefergegenstand selbst entstanden sind; insbesondere haftet der Supperverlag nicht 
        für entgangenen Gewinn oder für sonstige Vermögensschäden des Bestellers. Soweit die vertragliche Haftung vom 
        Supperverlag ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung von Arbeitnehmern, 
        Vertretern und Erfüllungsgehilfen. Vorstehende Haftungsbeschränkung gilt nicht, soweit die Schadensursache auf 
        Vorsatz oder grober Fahrlässigkeit beruht oder ein Personenschaden vorliegt. Sofern der Supperverlag fahrlässig eine 
        vertragswesentliche Pflicht verletzt, ist die Ersatzpflicht für Sachschäden auf den typischerweise entstehenden Schaden beschränkt.
        </p>

        <p className="text-gray-700 leading-relaxed text-left mt-4">
        Ist die Nacherfüllung im Wege der Ersatzlieferung erfolgt, ist der Besteller dazu verpflichtet, die zuerst gelieferte 
        Ware innerhalb von 30 Tagen an den Supperverlag auf Kosten vom Supperverlag zurückzusenden. Die Rücksendung der mangelhaften 
        Ware hat nach den gesetzlichen Vorschriften zu erfolgen. Der Supperverlag behält sich vor, unter den gesetzlich geregelten 
        Voraussetzungen Schadensersatz geltend zu machen. Die Verjährungsfrist beträgt vierundzwanzig Monate, gerechnet ab Lieferung.
        </p>

        {/* § 8 Datennutzung */}
        <h2 className="text-2xl font-semibold mt-8 mb-2 text-left">§ 8 Erhebung, Verarbeitung und Nutzung von persönlichen Informationen</h2>
        <p className="text-gray-700 leading-relaxed text-left">
        Informationen, die wir von Ihnen bekommen, helfen uns, Ihre Einkaufsmöglichkeiten beim Supperverlag individuell 
        zu gestalten und stetig zu verbessern. Wir nutzen diese Informationen für die Abwicklung von Bestellungen, die 
        Lieferung von Waren und das Erbringen von Dienstleistungen sowie die Abwicklung der Zahlung (bei Rechnungskauf auch 
        für erforderliche Prüfungen). Wir verwenden Ihre Informationen auch, um mit Ihnen über Bestellungen, Produkte, Dienstleistungen 
        und über Marketingangebote zu kommunizieren sowie dazu, unsere Datensätze zu aktualisieren und Ihre Kundenkonten bei uns zu 
        unterhalten und zu pflegen sowie dazu, Ihnen Produkte oder Dienstleistungen zu empfehlen, die Sie interessieren könnten. Wir 
        nutzen Ihre Informationen auch dazu, unsere Plattform zu verbessern, einem Missbrauch unserer Website vorzubeugen oder einen 
        zu entdecken oder Dritten die Durchführung technischer, logistischer oder anderer Dienstleistungen in unserem Auftrag zu ermöglichen.
        </p>

        {/* Letzte Aktualisierung */}
        <h3 className="text-xl font-bold mt-6 text-left">Rücksendung von Waren</h3>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
        Wenn Sie Waren zurücksenden möchten, erstatten wir die Rücksendekosten nur dann, wenn Sie die 
        anfallenden Kosten für die Rücksendung bei Ihrer Post zunächst übernehmen. Die Kosten für UNFREI 
        zurückgesendete Ware stellen wir Ihnen in jedem Fall in Rechnung. Bitte senden Sie keine Ware unfrei 
        an uns zurück. Wenn Sie Fragen zur Rücksendung haben, kontaktieren Sie uns bitte.
        </p>

      </div>
    </section>
  );
};

export default AGB;
