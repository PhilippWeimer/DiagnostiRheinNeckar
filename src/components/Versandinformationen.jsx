import React from "react";

const Versand = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 min-h-screen text-left">
      <div className="container max-w-3xl mx-auto text-gray-900 text-left">
        
        {/* Hauptüberschrift */}
        <h1 className="text-4xl font-bold mb-6 text-left">Versandinformationen</h1>

        {/* Versandzeiten und -kosten */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Versandzeiten & -kosten</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Bearbeitungszeit:</strong> Bestellungen werden innerhalb von <strong>1–3 Werktagen</strong> bearbeitet und versendet.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          <strong>Versandkosten innerhalb Deutschlands:</strong> Kostenloser Versand.
        </p>

        {/* Versanddienstleister */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Versanddienstleister</h2>
        <p className="text-gray-700 leading-relaxed">
          Unsere Produkte werden mit **renommierten Versanddienstleistern** verschickt, um eine schnelle und sichere Lieferung zu gewährleisten.
        </p>

        {/* Liefergebiet */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Liefergebiet</h2>
        <p className="text-gray-700 leading-relaxed">
          Derzeit liefern wir ausschließlich innerhalb <strong>Deutschlands</strong>.
        </p>

        {/* Hinweis */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Wichtige Hinweise</h2>
        <p className="text-gray-700 leading-relaxed">
          Bitte beachten Sie, dass es in Ausnahmefällen, wie z. B. bei hoher Nachfrage oder unvorhergesehenen 
          Ereignissen, zu Verzögerungen kommen kann. In solchen Fällen informieren wir Sie umgehend.
        </p>

        {/* Kontaktinformationen */}
        <h2 className="text-2xl font-semibold mt-8 mb-2">Kontakt</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Anschrift:</strong> <br />
          Dipl.-Psych. Angelika Supper <br />
          Winzerweg 2e, 69493 Hirschberg
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          <strong>Telefon:</strong> <a href="tel:+496201258954" className="text-blue-600 hover:underline">+49 (0) 6201 258954</a>
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          <strong>E-Mail:</strong> <a href="mailto:info@wasserglasmethode.de" className="text-red-600 font-bold hover:underline">info@wasserglasmethode.de</a>
        </p>

      </div>
    </section>
  );
};

export default Versand;
