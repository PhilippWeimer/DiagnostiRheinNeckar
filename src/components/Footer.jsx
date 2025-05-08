import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa"; 
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-22">
      <div className="container max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900 px-6">
        
        {/* Linke Spalte - Firmenadresse */}
        <div className="flex flex-col items-center text-center">
          <h3 className="font-semibold text-lg">Wasserglasmethode®</h3>
          <p className="mt-2 text-sm">
            Dipl.-Psych. Angelika Supper <br />
            Winzerweg 2e <br />
            69493 Hirschberg
          </p>
        </div>

        {/* Mittlere Spalte - SUPPERVERLAG mit Links */}
        <div className="border-l border-gray-300 pl-6 flex flex-col items-center text-center">
          <h3 className="font-semibold text-lg">SUPPERVERLAG</h3>
          <ul className="mt-2 space-y-2 text-sm w-full">
            <li>
              <Link to="/agb" className="flex items-center justify-center hover:underline">
                AGB <FaExternalLinkAlt className="ml-2 text-xs" />
              </Link>
            </li>            
            <li>
              <Link to="/versandinformationen" className="flex items-center justify-center hover:underline">
                Versandinformationen <FaExternalLinkAlt className="ml-2 text-xs" />
              </Link>
            </li>  
            <li>
              <Link to="/impressum" className="flex items-center justify-center hover:underline">
                Impressum <FaExternalLinkAlt className="ml-2 text-xs" />
              </Link>
            </li>  
            <li>
              <Link to="/datenschutzerklaerung" className="flex items-center justify-center hover:underline">
                Datenschutzerklärung <FaExternalLinkAlt className="ml-2 text-xs" />
              </Link>
            </li>  
          </ul>
        </div>

        {/* Rechte Spalte - Kontakt */}
        <div className="border-l border-gray-300 pl-6 flex flex-col items-center text-center">
          <h3 className="font-semibold text-lg">Kontakt</h3>
          <p className="mt-2 text-sm">
            Tel. <a href="tel:+496201258954" className="font-bold hover:underline">+49 (0) 6201 258954</a><br />
            <a href="mailto:info@wasserglasmethode.de" className="hover:underline">info@wasserglasmethode.de</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
