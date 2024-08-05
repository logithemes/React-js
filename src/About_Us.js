import React from 'react';

function About_Us() {
  return (
    <div className='float pt_120 pb_120' id='about'>
      <div className='container'>
        <div className='row align-items-center'>
        <div className='col-md-12 col-lg-6 order-2 order-lg-1'>
            <div className='about_img'  data-aos="fade-up" data-aos-duration="700">
              <img src={require('./assets/images/about/about.jpg')} alt="" />
            </div>
          </div>
          <div className='col-md-12 col-lg-6 order-1 order-lg-2'>
            <div className='about_us'>
              <div className='theme_heading text-left' data-aos="fade-up" data-aos-duration="800">
                <span className='sub d-block'>
                  <span className='l1'></span> about us <span className='l1 l2'></span>
                </span>
                <h2 className='main_heading'>We’re Creative Agency Since 1993</h2>
                <p className='para'>On the other hand denounce with righteous and dislike men who beguile and demoralizes by the charms of pleasure thes moment, so blinded by desire that they cannot Penatibus quo nostra odio distinctio phasellus anii.</p>
              </div>

              <div className='features_list' data-aos="fade-up" data-aos-duration="800">
                <ul>
                  <li>
                    <div className='features_item d-flex align-items-center'>
                      <i className='bi bi-check-lg'></i>
                     <h4>Digital Creative Agency</h4>
                    </div>
                  </li>
                  <li>
                    <div className='features_item d-flex align-items-center'>
                      <i className='bi bi-check-lg'></i>
                      <h4>Web Design & Development</h4>
                    </div>
                  </li>
                  <li>
                    <div className='features_item d-flex align-items-center'>
                      <i className='bi bi-check-lg'></i>
                      <h4>Professional Problem Solutions</h4>
                    </div>
                  </li>
                </ul>
                <div class="abt-student" bis_skin_checked="1" data-aos="fade-up" data-aos-duration="800">
              <img src={require('./assets/images/testimonials/1.png')} alt="" />
                <div class="abt-name-det" bis_skin_checked="1">
                  <h5>Alexardy Ditartina</h5>
                  <span class="abt">( Chairman / Principle )</span>
                </div>
               <img className='strdent-sign' src={require('./assets/images/brands/1.png')} alt="" />
              </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default About_Us;
