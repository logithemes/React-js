import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './responsive.css';
import Nav from './Nav';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Services from './Services';
import CaseStudies from './CaseStudies';
import Innovation from './Innovation';
import Testimonials from './Testimonials';
import Team from './Team';
import ContactUs from './ContactUs';
import Footer from './Footer';
import OffCanvasExample from './OffCanvasExample';

import AOS from 'aos';
import 'aos/dist/aos.css';

import MainLayout from './MainLayout '; // Corrected the path issue

// Initialize AOS animations
AOS.init();

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
        <MainLayout>
              <Nav />
              <Banner />
              <AboutUs />
              <Services />
              <CaseStudies />
              <Innovation />
              <Testimonials />
              <Team />
              <ContactUs />
              <Footer />
              <OffCanvasExample />
            </MainLayout>
          }
        />

        {/* Individual routes for each component */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<CaseStudies />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
