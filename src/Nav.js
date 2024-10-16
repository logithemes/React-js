import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import MyVerticallyCenteredModal from '../src/MyVerticallyCenteredModal';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OffCanvasExample from './OffCanvasExample';

function Nav() {
  const [modalShow, setModalShow] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleCloseClick = () => {
    setMenuActive(false);
  };

  const handleScroll = () => {
    const top = window.scrollY;
    if (top >= 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav_bar position-absolute ${isFixed ? 'fix-menu' : ''}`}>
      <div className='container'>
        <div className='align-items-center d-flex justify-content-between'>
          <div className='logo'>
            <Link to="/">
              <img src={require('../src/assets/images/logo.png')} alt="Company Logo" />
            </Link>
          </div>
          <div className={`menu_bar d-none ${menuActive ? 'menuact' : ''}`} onClick={handleMenuClick}>
            <span><FontAwesomeIcon className='menu_click_left' icon={faBars} /></span>
          </div>
          <div className={`nav_links ${menuActive ? 'menuact' : ''}`}>
            <ul className='d-flex align-items-center justify-content-center'>
              <li><Link to="">home</Link></li>
              <li><Link to="/about">about</Link></li>
              <li><Link to="/services">services</Link></li>
              <li><Link to="/projects">Portfolio</Link></li>
              <li><Link to="/testimonials">testimonials</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">contact us</Link></li>
            </ul>
            {menuActive && (
              <span className='close_button' onClick={handleCloseClick}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            )}
          </div>
        
            <div variant="primary " onClick={() => setShowOffCanvas(true)} className='side_bar me-2'>
              <span className='l1 deafult_style'></span>
              <span className='l2 deafult_style'></span>
              <span className='l3 deafult_style'></span>
            </div>
          
        </div>
      </div>
      <OffCanvasExample show={showOffCanvas} handleClose={() => setShowOffCanvas(false)} />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Nav;
