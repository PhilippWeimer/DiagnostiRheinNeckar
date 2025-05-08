import React from "react";

const services = [
  {
    title: "Rechen-Therapie-Zentrum",
    description: "Individuelle Therapie für Schüler aller Altersklassen zur Verbesserung der Mathematikfähigkeiten.",
    image: "https://www.wasserglasmethode.com/images/therapiezentrum.jpg",
  },
  {
    title: "Diagnostikzentrum Rhein-Neckar",
    description: "Professionelle, umfassende und individuelle Tests zur Feststellung von Begabungen und Defiziten bei Kindern und Jugendlichen.",
    image: "https://www.wasserglasmethode.com/images/diagnostikzentrum.jpg",
  },
  {
    title: "Ausbildung in der Wasserglasmethode",
    description: "Spannende, lehrreiche und praxisbezogene Fortbildungen für Lehrer, Therapeuten und Eltern.",
    image: "https://www.wasserglasmethode.com/images/ausbildung.jpg",
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          <span>Unsere Dienstleistungen</span>
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4">{service.description}</p>
                <button className="mt-auto bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                  Mehr erfahren
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
