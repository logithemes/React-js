import React from 'react';

import ic1 from './assets/images/icons/ic1.png';
import ic2 from './assets/images/icons/ic2.png';
import ic5 from './assets/images/icons/ic5.png';
import ic6 from './assets/images/icons/ic6.png';

import Footer from './Footer';
const servicesData = [
  {
    imgSrc: ic1,
    title: 'Keyword Research',
    description: 'Get organic traffic and high rankings with multi-team collaboration that will help',
    linkText: 'Read more',
     aos: { 'data-aos': 'fade-up', 'data-aos-duration': '300' }
    
  },
  {
    imgSrc: ic2,
    title: 'Brand Strategy',
    description: 'Get organic traffic and high rankings with multi-team collaboration that will help',
    linkText: 'Read more',     aos: { 'data-aos': 'fade-up', 'data-aos-duration': '400' }
    
  },
  {
    imgSrc: ic1,
    title: 'Content Marketing',
    description: 'Get organic traffic and high rankings with multi-team collaboration that will help',
    linkText: 'Read more',     aos: { 'data-aos': 'fade-up', 'data-aos-duration': '500' }
  
  },
  {
    imgSrc: ic6,
    title: 'Brand Strategy',
    description: 'Get organic traffic and high rankings with multi-team collaboration that will help',
    linkText: 'Read more',     aos: { 'data-aos': 'fade-up', 'data-aos-duration': '600' }
 
  },

];

function Services() {
  return (
    <div className='float services pb_120 pt_120'>
      <div className='container '>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='theme_heading m_c_width text-center' data-aos="fade-up" data-aos-duration="600">
              <span className='sub'>
                <span className='l1'></span>Services <span className='l1 l2'></span>
              </span>
              <h2 className='main_heading'>Creative Design Solutions</h2>
            </div>
          </div>

          <div className='services_boxes pt_60'>
            <ul>
              {servicesData.map((service, index) => (
                <li key={index}>
                  <div className='s_box'>
                    <div className='s_box_img'>
                      <img src={service.imgSrc} alt={service.title} />
                    </div>
                   
                    <div className='ser_details'>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      {service.linkText && (
                        <a href="#">
                          {service.linkText}<i className="bi bi-arrow-right"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
