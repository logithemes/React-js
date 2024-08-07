import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './responsive.css';

import Nav  from './Nav';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Services from './Services'
import CaseStudies from './CaseStudies'
import Innovation from './Innovation';
import Testimonials from './Testimonials'
import Team from './Team'
import ContactUs from './ContactUs';
import Footer from './Footer'

import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import OffCanvasExample from './OffCanvasExample';


import AOS from 'aos';
import 'aos/dist/aos.css';

import MainLayout from '..//src/MainLayout '; // Corrected the import

AOS.init();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
        <Nav/>
        <Banner/>
        <AboutUs/>
       <Services/>
       <CaseStudies/>
       <Innovation/>
       <Testimonials/>
       <Team/>
       <ContactUs/>
       <Footer/>
      <OffCanvasExample/>
   
 
          </MainLayout>
        } />

         <Route path="/about" element={<AboutUs />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/Services" element={<Services />} />
       
        <Route path="/projects" element={<CaseStudies></CaseStudies>} />
        <Route path="/testimonials" element={<Testimonials></Testimonials>} />
        <Route path="/team" element={<Team></Team>} />
      
        <Route path="/contact" element={<ContactUs />} />
       
      </Routes>
    </Router>
  );
}

export default App;
