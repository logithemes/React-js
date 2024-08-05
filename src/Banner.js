import React, { useState } from 'react';
import MyVerticallyCenteredModal from '../src/MyVerticallyCenteredModal';
import { Link } from 'react-router-dom';

function Banner() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='float banner'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-12 col-lg-6'>
            <div className='banner_text' data-aos="fade-right" data-aos-duration="700">
              <h1> <b className='highlight'>Brand</b>, Design & Development Agency</h1>
              <p>Sit amet consectetur adipiscing elit sed do eiusmod tem porincididunt ut labore et dolore magna aliqua. Quis psum suspendisse ultrices gravida commodo viverra</p>
              <div onClick={() => setModalShow(true)} className="theme-btn" bis_skin_checked="1">
                <Link to="#"><span>GET IN  TOUCH</span></Link>
              </div>
            </div>
          </div>
          <div className='col-md-12 col-lg-6'>
            <div className='banner_img '  data-aos="fade-Up" data-aos-duration="900">
              <img src={require('./assets/images/banner/hero-1.png')} alt="" />
            </div>
          </div>
        </div>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className='bg-color'>
        <span className='bg bg1'></span>
        <span className='bg bg2'></span>
      </div>
    </div>
  );
}

export default Banner;
