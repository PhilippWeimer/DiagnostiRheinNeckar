import React from "react";

import angelikaImage from "../assets/angelika.jpg";

const UeberUns = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Bild */}
        <div className="w-full">
          <img
            src={angelikaImage}
            alt="Angelika Supper"
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Textinhalt */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Über Angelika Supper</h2>
          <p className="text-gray-700 mb-4">
            Angelika Supper, geboren am 20. Juli 1968 in Graz, ist Diplom-Psychologin und Psychotherapeutin mit über 18 Jahren Erfahrung.
          </p>
          <p className="text-gray-700 mb-4">
            Ende der 1990er Jahre spezialisierte sie sich auf die Diagnostik und Therapie von Rechenschwäche (Dyskalkulie) und gründete das Rechen-Therapie-Zentrum in Hirschberg an der Bergstraße.
          </p>
          <p className="text-gray-700 mb-4">
            Sie entwickelte die Wasserglasmethode® – ein didaktisches Material zur Vermittlung mathematischer Grundfähigkeiten vom Kindergarten bis zum Abitur. Die Wirksamkeit dieser Methode wurde wissenschaftlich an der Universität Heidelberg bestätigt.
          </p>
          <p className="text-gray-700 mb-4">
            Als Autorin veröffentlichte sie mehrere Bücher, die Kindern helfen, Mathematik spielerisch zu verstehen. Ihr Engagement gilt der Diagnostik (HOCHHAUSTEST®) und der pränatalen Ursachenforschung.
          </p>
          <a
            href="https://www.wasserglasmethode.com/lizenznehmer/angelika-supper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline font-medium"
          >
            Mehr erfahren →
          </a>
        </div>
      </div>
    </section>
  );
};

export default UeberUns;
