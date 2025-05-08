import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import BookingSection from './components/BookingSection';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/Services';
import UeberUns from './components/UeberUns';
import Footer from './components/Footer';
import AGB from './components/AGB';
import HomePage from './HomePage';
import Versandinformationen from './components/Versandinformationen';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import "./index.css";
import ScrollToTop from './utils/ScrollToTop';

function App() {

    return (

      <Router>
        <ScrollToTop />
        <Navbar />
        <VideoSection />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="agb" element={<AGB />} />
          <Route path="versandinformationen" element={<Versandinformationen />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutzerklaerung" element={<Datenschutz />} />
        </Routes>
        <Footer />
      </Router>
    )

}

export default App
