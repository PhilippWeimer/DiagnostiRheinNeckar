import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showModal, setShowModal] = useState(false);


    return (
        <>
        <nav className="bg-gray-100 py-1 px-6 w-full mb-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center">
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-14 w-auto mr-3 cursor-pointer" />
                </Link>
            </div>
    
            {/* Navigation Links */}
            <div className="flex items-center space-x-6 text-gray-700">
              <a href="#" className="hover:text-gray-900 transition">Services</a>
              <a href="#" className="hover:text-gray-900 transition">Über Uns</a>
              <a href="#" className="hover:text-gray-900 transition">Kontakt</a>
    
              <button 
                onClick={() => setShowModal(true)} 
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition"
              >
                Jetzt buchen
              </button>
            </div>
    
          </div>
        </nav>

        {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full h-[90vh] relative">
                    <button 
                        onClick={() => setShowModal(false)} 
                        className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 rounded-full px-3 py-1">
                        ✖
                    </button>
                    <iframe 
                        src="https://app.acuityscheduling.com/schedule/2af9a4e0/appointment/75685517/calendar/11734293" 
                        className="w-full h-[80vh] border-0">
                    </iframe>
                </div>
            </div>
        )}
        </>
      );
}

export default Navbar