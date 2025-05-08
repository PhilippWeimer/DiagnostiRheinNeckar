import React from 'react';

const BookingSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-6">
          <div className="container max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-x-20">
            
            {/* Linke Seite: Text */}
            <div className="md:w-1/2 text-left max-w-xl">
              <h2 className="text-4xl font-bold text-gray-900">Buche einen Termin</h2>
              
              <p className="text-gray-700 mt-4 leading-relaxed">
                Mathematik sollte keine Hürde, sondern ein Erlebnis sein! 
                Mit der <strong>Wasserglasmethode®</strong> helfen wir Kindern, Jugendlichen und Erwachsenen, 
                ein intuitives und tiefgehendes Verständnis für Zahlen und Mengen zu entwickeln.
              </p>

              <p className="text-gray-700 mt-6 leading-relaxed">
                Unsere individuell abgestimmten Beratungsgespräche zeigen, 
                wie sich Rechenschwächen gezielt beheben und mathematische 
                Fähigkeiten nachhaltig verbessern lassen.
              </p>
            </div>
    
            {/* Rechte Seite: Acuity Scheduling iFrame */}
            <div className="md:w-1/2 mt-8 md:mt-0 bg-white p-6 shadow-lg rounded-lg w-full">
              <iframe 
                src="https://app.acuityscheduling.com/schedule/2af9a4e0/appointment/75685517/calendar/11734293" 
                className="w-full h-[500px] border-0">
              </iframe>
              <p className="text-gray-500 text-sm text-center mt-2">
                Powered by <strong>acuity:scheduling</strong>
              </p>
            </div>
    
          </div>
        </section>
    );
}

export default BookingSection;
