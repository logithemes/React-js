import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CaseStudies() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

  return (
    <div className='float case_studies pt_120 pb_80'>
   


        <div className='case_studies_box'>
        <div className='theme_heading text-center' data-aos="fade-up" data-aos-duration="600">
                <span className='sub d-block'>
                Latest Work
                </span>
                <h2 className='main_heading'>Professional Experience</h2>
               
              </div>
                <ul className='pt_50'>
                <Slider {...settings}>
                    <li>
                        <div className='projects'>
                            <div className='pr_img'>
                            <img src={require('./assets/images/let’s_work/1.webp')} alt="" />
                            </div>
                            <div className='case_details'>
                               
                            <i className="bi bi-arrow-up-right-circle"></i>
                                <h3>it solution for <br /> business</h3>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='projects'>
                            <div className='pr_img'>
                            <img src={require('./assets/images/let’s_work/2.webp')} alt="" />
                            </div>
                            <div className='case_details'>
                               
                            <i className="bi bi-arrow-up-right-circle"></i>
                                <h3>Data Backup <br /> Solutions</h3>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='projects'>
                            <div className='pr_img'>
                            <img src={require('./assets/images/let’s_work/3.webp')} alt="" />
                            </div>
                            <div className='case_details'>
                               
                            <i className="bi bi-arrow-up-right-circle"></i>
                                <h3>Help Desk <br /> Optimization</h3>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='projects'>
                            <div className='pr_img'>
                            <img src={require('./assets/images/let’s_work/4.webp')} alt="" />
                            </div>
                            <div className='case_details'>
                               
                            <i className="bi bi-arrow-up-right-circle"></i>
                                <h3>Help Desk <br /> Optimization</h3>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='projects'>
                            <div className='pr_img'>
                            <img src={require('./assets/images/let’s_work/5.webp')} alt="" />
                            </div>
                            <div className='case_details'>
                               
                            <i className="bi bi-arrow-up-right-circle"></i>
                                <h3>Help Desk <br /> Optimization</h3>
                            </div>
                            
                        </div>
                    </li>
                    </Slider>
                </ul>
        </div>
   
</div>
  )
}

export default CaseStudies