import React from "react";

const Impressum = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 min-h-screen text-left">
      <div className="container max-w-3xl mx-auto text-gray-900 text-left">
        
        {/* Hauptüberschrift */}
        <h1 className="text-4xl font-bold mb-6 text-left">Impressum</h1>

        {/* § 5 TMG Angaben */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Angaben gemäß § 5 TMG:</h2>
        <p className="text-gray-700 leading-relaxed">
          Angelika Supper <br />
          Wasserglasmethode® - Die Mathematikdidaktik <br />
          Winzerweg 2e <br />
          69493 Hirschberg
        </p>

        {/* Kontakt */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Kontakt</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Telefon:</strong> <a href="tel:+496201258954" className="text-blue-600 hover:underline">06201 / 25 89 54</a><br />
          <strong>Telefax:</strong> 06201 / 25 89 85<br />
          <strong>E-Mail:</strong> <a href="mailto:sekretariat@rechen-therapie-zentrum.eu" className="text-red-600 font-bold hover:underline">sekretariat@rechen-therapie-zentrum.eu</a>
        </p>

        {/* Verantwortlichkeit nach § 55 Abs. 2 RStV */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
        <p className="text-gray-700 leading-relaxed">
          Dipl.-Psych. Angelika Supper <br />
          Winzerweg 2e <br />
          69493 Hirschberg
        </p>

        {/* Streitschlichtung */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Streitschlichtung</h2>
        <p className="text-gray-700 leading-relaxed">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        {/* Haftung für Inhalte */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Haftung für Inhalte</h2>
        <p className="text-gray-700 leading-relaxed">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
          Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen 
          zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden 
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        {/* Haftung für Links */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Haftung für Links</h2>
        <p className="text-gray-700 leading-relaxed">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
          Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. 
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        {/* Urheberrecht */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Urheberrecht</h2>
        <p className="text-gray-700 leading-relaxed">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
          bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
          nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
          Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung 
          aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir 
          derartige Inhalte umgehend entfernen.
        </p>

      </div>
    </section>
  );
};

export default Impressum;
