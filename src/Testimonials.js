import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';

const images = [
  require('./assets/images/testimonials/1.png'),
  require('./assets/images/testimonials/2.png'),
  require('./assets/images/testimonials/3.png'),
  require('./assets/images/testimonials/4.png'),
  require('./assets/images/testimonials/5.png'),
  require('./assets/images/testimonials/6.png'),
  require('./assets/images/testimonials/7.png')
];

function Testimonials() {
  useEffect(() => {
    $(window).on('mousemove', function(e) {
      var w = $(window).width();
      var h = $(window).height();
      var offsetX = 0.5 - e.pageX / w / 15;
      var offsetY = 0.5 - e.pageY / h / 15;

      $(".parallax").each(function(i, el) {
        var offset = parseInt($(el).data('offset'));
        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

        $(el).css({
          '-webkit-transform': translate,
          'transform': translate,
          'moz-transform': translate
        });
      });
    });

    // Cleanup event listener on component unmount
    return () => {
      $(window).off('mousemove');
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className='float pt_120 pb_120 testimonials'>
      <div className='container'>
        <div className='row'>
          <div className="theme_heading text-center col-lg-12" data-aos="fade-up" data-aos-duration="600">
            <span className="sub d-block">Testimonials</span>
            <h2 className="main_heading">We have customers worldwide <br />read what they say</h2>
          </div>

          <div className='img_group'>
            {images.map((src, index) => (
              <img key={index} className={`im${index + 1} parallax`} src={src} alt={`Testimonial ${index + 1}`} data-offset={index * 20 + 20} />
            ))}
          </div>

          <div className="testimonial1-main wow fadeInUp" data-wow-duration="0.4s">
            <div className="testimonial1 pt_120">
              <Slider {...settings}>
                <div className="space_testi">
                  <div className="testimonial-img">
                    <div className="clint-img">
                      <img src={require('./assets/images/testimonials/1.png')} alt="Client 1" />
                      <h4>Guy Hawkins <span>UX Designer at GoDaddy</span></h4>
                    </div>
                    <p>Absolutely amazing. We can't believe how incredible this turned out. Yetta Thomas is a true professional, honest, decent, and reliable with great experience.</p>
                    <div className="star">
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                </div>
                <div className="space_testi">
                  <div className="testimonial-img">
                    <div className="clint-img">
                      <img src={require('./assets/images/testimonials/3.png')} alt="Client 2" />
                      <h4>Randy Orton <span>UX Designer</span></h4>
                    </div>
                    <p>Absolutely amazing. We can't believe how incredible this turned out. Yetta Thomas is a true professional, honest, decent, and reliable with great experience.</p>
                    <div className="star">
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                </div>
                <div className="space_testi">
                  <div className="testimonial-img">
                    <div className="clint-img">
                      <img src={require('./assets/images/testimonials/4.png')} alt="Client 3" />
                      <h4>Stone Cold <span>UX Designer</span></h4>
                    </div>
                    <p>Absolutely amazing. We can't believe how incredible this turned out. Yetta Thomas is a true professional, honest, decent, and reliable with great experience.</p>
                    <div className="star">
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                </div>
                <div className="space_testi">
                  <div className="testimonial-img">
                    <div className="clint-img">
                      <img src={require('./assets/images/testimonials/5.png')} alt="Client 4" />
                      <h4>Tony Stark <span>UX Designer</span></h4>
                    </div>
                    <p>Absolutely amazing. We can't believe how incredible this turned out. Yetta Thomas is a true professional, honest, decent, and reliable with great experience.</p>
                    <div className="star">
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                      <i className="bi bi-star"></i>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
