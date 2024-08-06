import React, { useState } from 'react';
import MyVerticallyCenteredModal from '../src/MyVerticallyCenteredModal';


function Footer() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='footer_main'>
      <div className="footer float pt_80 pb_80">
        <div className="container">
          <h2 className="footer-heading">Schedule a demo</h2>
          <p className="footer-subtext">
            Discover how Tedy can boost your benefits and energize your and corporate culture.
          </p>
          <button onClick={() => setModalShow(true)} className="footer-button">Watch A Demo</button>
          <div className="footer-bottom">
            <span>© 2024</span>
            <div className="footer-links">
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
            <span>Site by Kin</span>
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}

export default Footer;
