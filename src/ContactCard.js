import React from 'react';
import OffCanvasExample from './OffCanvasExample';

function ContactCard() {
  return (
    
    <div className="contact-card">
      <div className="logo">
    
        <div className="logo-text"><img className='canva_logo' src={require('./assets/images/logo.png')} alt="" /></div>
      </div>
      <div className="description">
        We deploy world-class Creative on demand.
      </div>
      <div className="contact-info">
        <h3>Contact Us</h3>
        <div className="contact-item">
          <span className="star1">★</span> Melbone st, Australia, Ny 12099
        </div>
        <div className="contact-item">
          <span className="star1">★</span> +81 800 123 456 78
        </div>
        <div className="contact-item">
          <span className="star">★</span> Domain@gmail.com
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
