import React from 'react';
import logo from '../src/assets/images/logo.png'; // Adjust path as necessary
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import funFactImage from '../src/assets/images/funfacts/1.jpg'; 
import funFactImage1 from '../src/assets/images/funfacts/2.jpg'; 
import funFactImage2 from '../src/assets/images/funfacts/3.jpg'; 
import team1 from '../src/assets/images/Team/1.jpg'
import team2 from '../src/assets/images/Team/2.jpg'
import team3 from '../src/assets/images/Team/3.jpg'
import team4 from '../src/assets/images/Team/4.jpg'
import team5 from '../src/assets/images/Team/5.jpg'
import team6 from '../src/assets/images/Team/6.jpg'
import brand1 from '../src/assets/images/brands/1.svg'
import resource1 from '../src/assets/images/Resources/1.webp'
import resource2 from '../src/assets/images/Resources/2.webp'
import resource3 from '../src/assets/images/Resources/3.webp'
import resource4 from '../src/assets/images/Resources/4.webp'
import brand2 from '../src/assets/images/brands/2.svg'
import footer from '../src/assets/images/footer_logo.png'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Nav() {
  let top_menu = {
    display: 'flex',
  };

  return (
    <div className='container'>
      {/* Menu start */}
      <div className='top_nav' style={top_menu}>
        <ul className='d-flex align-items-center justify-content-between w-100'>
          <li>
            <div className='logo'>
              <img src={logo} alt="Logo" />
            </div>
          </li>
          <li>
            <div className="menu">
              <ul className='d-flex align-items-center justify-content-center'>
                <li></li>
                <li><a href="index.html">Home</a></li>
                <li><a href="#webflow">Webflow</a></li>
                <li><a className="other-menu" href="#servics">Services</a></li>
                <li><a href="#awards">Awards</a></li>
                <li><a href="#team">Teams</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div className="nav_button_wrap d-flex align-items-center justify-content-between">
              <div className="theme_btn">
                <a className="btn_hrf" href="signin.html"><span>Try now</span></a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* Menu end */}
    </div>
  );
};



function Banner() {
  return (
    <div className='main_wrapere float w-100'>
      <div className='container'>
        <div className='float hero_sec float-left w-100 text-center  w-100 d-flex align-items-center justify-content-center flex-column'>
          <div className='hero_text'>
            <h1>unfold</h1>
          </div>
          <div className='event_facts'>
            <ul className='d-flex align-items-center justify-content-between'>
              <li><span>Volume 05</span></li>
              <li><span>Amsterdam</span></li>
              <li><span>Muziekgebouw</span></li>
              <li><span>29.05.2024</span></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Adding background video */}
      <div className="g_visual_wrap">
        <video 
          className="overlay w-100" 
          preload="metadata" 
          loop 
          muted 
          webkitPlaysInline 
          playsInline 
          autoPlay
        >
          <source 
            src="https://mewsunfold.com/assets/video/Unfold_Animation_Loop_0036_Compressed.mp4#t=0.5" 
            type="video/mp4" 
          />
        </video>
      </div>
      <div className='bero_bg_color'></div>
    </div>
  );
}



// Light_Text
function Light_Text() {
  return (
    <div className='ligh_text_mani bg_black float w-100 pt_120 '>

      <div className='container'>
        <div className='light_text w-100'>
          <p>Unfold is an annual hospitality tech forum hosted by Mews. The fifth edition will bring together hundreds of the industry's most inspiring innovators, visionaries and thinkers to the Muziekgebouw in Amsterdam.</p>
        </div>
      </div>
      <div className='text_loop pt_150 pb_150'>
        <span>Shaping Hospitality’s Future</span>
        <span>Shaping Hospitality’s Future</span>
        <span>Shaping Hospitality’s Future</span>
      </div>
    </div>
  )
}




function Section_State() {
  return (
    <div className='fun_facts float w-100 bg_black'>
      <div className='container'>
        <div className='fun_fact_inner'>
          <div className='row align-items-center'>
            <div className='col-lg-5 col-md-6 col-sm-12'>
              <div className='ss_outline'>
                <i>900 + </i>
                <span>Attendees</span>
              </div>
            </div>
            <div className='col-lg-2 col-md-6 col-sm-12'>
              <div className='ss_img'>
             
              <img src={funFactImage} alt="Fun Fact Image" />   
                 </div>
            </div>

            <div className='col-lg-5 col-md-6 col-sm-12'>
              <div className='ss_outline'>
                <i>20 + </i>
                <span>Sessions</span>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='ss_img s_img_1 text-end'>
             
              <img src={funFactImage1} alt="Fun Fact Image" />   
                 </div>
            </div>

            
            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='ss_outline s_img_1'>
                <i>1 </i>
                <span>Unmissable day</span>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-12'>
              <div className='ss_img ss_o1 text-start'>
             
              <img src={funFactImage2} alt="Fun Fact Image" />   
                 </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}



function Team_mates() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div  className='bg_black Team_mates float w-100 pt_150 pb_120'>
      <div className='container'>
        <div className='team_mates_inner'>
          <div className='theme_heading text-center pb_40'>
            <h2 className='heading'>This year's speakers</h2>
          </div>
          <ul>
          <Slider {...settings}>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img src={team1} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                  <h2>Niko Karstikko</h2>
                  <span>Founder & Director,</span>
                </div>
            </div>
           

            </li>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img src={team2} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                  <h2>Dr. R. David Edelman</h2>
                  <span>Founder & Director,</span>
                </div>
            </div>
           

            </li>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img src={team3} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                  <h2>Marion Barrère</h2>
                  <span>Founder & Director,</span>
                </div>
            </div>
           

            </li>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img src={team4} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                  <h2>Denis Montrelay</h2>
                  <span>Founder & Director,</span>
                </div>
            </div>
           

            </li>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img src={team5} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                  <h2>Joanne Dreyfus</h2>
                  <span>Founder & Director,</span>
                </div>
            </div>
           

            </li>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img src={team6} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                  <h2>Dimitris Manikis</h2>
                  <span>Founder & Director,</span>
                </div>
            </div>
           

            </li>
            </Slider>
          </ul>
          <div class="theme_btn d-block text-center float w-100" bis_skin_checked="1"><a class="btn_hrf" href="signin.html"><span>More speakers</span></a></div>

        </div>

      </div>
    </div>
  )
}






function Home_why() {
  return (
    <div className='home_why float w-100 bg_black pb_150'>
    <div className='container'>
    <div className='row align-items-center'>
    <div className='theme_heading pb_40  row col-lg-12 align-items-center pb_80'>
            <h2 className='heading col-lg-7'>Why you <br /> should attend</h2>
            <p className='col-lg-5'>Want to be inspired? Dozens of presentations, panels, breakout sessions and more will help you push your property to greater heights. Plus, there’s plenty of networking space and downtime to connect with your peers. The FOMO is real.</p>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='toggle-audience act' id='c1'>
              <h3>Owners</h3>
            </div>
          </div>
          
          <div className='col-lg-3 col-md-6'>
            <div className='toggle-audience' id='c2'>
              <h3>General Managers</h3>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='toggle-audience' id='c3'>
              <h3>Revenue managers</h3>
            </div>
          </div>

          <div className='col-lg-3 col-md-6'>
            <div className='toggle-audience' id='c4'>
              <h3>IT Leaders</h3>
            </div>
          </div>

    <div className='single-audience-reasons_main'> 
          <div className='single-audience-reasons row act' id='c1_view'>
            <div className='single-reason col-lg-4'>
              <i>01</i> 
              <p>See what digital transformation means for hospitality in 2024</p>
            </div>

            <div className='single-reason col-lg-4'>
              <i>02</i> 
              <p>See what digital transformation means for hospitality in 2024</p>
            </div>

            <div className='single-reason col-lg-4'>
              <i>03</i> 
              <p>See what digital transformation means for hospitality in 2024</p>
            </div>

          </div>
          </div>


   </div>
    </div>


    </div>
  )
}







function Brands() {
  return (
    <div className='float w-100 pt_150 brands_main bg_light pb_150'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-4 col-md-12'>
            <div className='bands_text'>
            <div className='theme_heading'>
            <h2 className='heading'>Meet our <br /> sponsors</h2>
            <p className='para'>This year's theme is the Shaping Hospitality’s Future, so we've partnered with some true industry innovators that are best placed to do exactly that</p>
            <div className="theme_btn">
                <a className="btn_hrf" href="signin.html"><span>More partners</span></a>
              </div>
          </div>

            </div>
          </div>

          <div className='col-lg-8 col-md-12 text-end'>
            <div className='brnads_logo row'>
      <div className='col-lg-4 col-md-4'>
        <div className='brands_inner'>
        <img src={brand1} alt="" />
        </div>
      </div>
      <div className='col-lg-4 col-md-4'>
        <div className='brands_inner'>
        <img src={brand1} alt="" />
        </div>
      </div>
      <div className='col-lg-4 col-md-4'>
        <div className='brands_inner'>
        <img src={brand1} alt="" />
        </div>
      </div>
      
      <div className='col-lg-4 col-md-4'>
        <div className='brands_inner'>
        <img src={brand2} alt="" />
        </div>
      </div>
      <div className='col-lg-4 col-md-4'>
        <div className='brands_inner'>
        <img src={brand2} alt="" />
        </div>
      </div>
      <div className='col-lg-4 col-md-4'>
        <div className='brands_inner'>
        <img src={brand2} alt="" />
        </div>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



function Bg_video() {
  return (
    <div className='bg_video float w-100 bg_light pb_120'>
      <div className='container'>
        <div className='bg_fixied'>
        <div className="g_visual_wrap">
        <video 
          className="overlay w-100" 
          preload="metadata" 
          loop 
          muted 
          webkitPlaysInline 
          playsInline 
          autoPlay
        >
          <source 
            src="https://mewsunfold.com/media/pages/home/49ccc81d4c-1710765506/240102_Unfold_Homepage_Venue_Compressed.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      <div className='video_content row align-items-center'>
    <div className='col-lg-6 col-md-12'>
    <div className='event_facts'>
            <ul className='d-flex align-items-center justify-content-between'>
              <li><span>Volume 05</span></li>
              <li><span>Amsterdam</span></li>
              <li><span>Muziekgebouw</span></li>
          
            </ul>
          </div>

    </div>

    <div className='col-lg-6 col-md-12'>
    <div className='theme_heading pb_40 '>
           
            <p>Want to be inspired? Dozens of presentations, panels, breakout sessions and more will help you push your property to greater heights. Plus, there’s plenty of networking space and downtime to connect with your peers. The FOMO is real.</p>
          </div>
      
    </div>
      </div>
        </div>
      </div>
    </div>
  )
}





function Card() {
  return (
    <div className='float w-100 card_main bg_light pb_120'>
      <div className='container'>
      <div className='row'>
      <div className='theme_heading pb_40  text-center col-lg-12 align-items-center pb_80'>
            <h2 className='heading'>
Unfold 2024</h2>
            <p>for hoteliers to learn, be inspired and share knowledge. That means hoteliers get priority when it comes to tickets.</p>
          </div>

          <div className='col-lg-6 col-md-12'>
            <div className='card_inner bg_black'>
    <h3>Hotelier tickets</h3>
    <p>If you’re currently working at or with a hotel, this ticket is for you. Each property can order up to five tickets – different workshops and talks will be suited for different departments, so talk with your colleagues about who will benefit most.</p>
    <div className="theme_btn">
                <a className="btn_hrf" href="signin.html"><span>Try now</span></a>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-12'>
            <div className='card_inner card_inner1'>
    <h3>Hotelier tickets</h3>
    <p>If you’re currently working at or with a hotel, this ticket is for you. Each property can order up to five tickets – different workshops and talks will be suited for different departments, so talk with your colleagues about who will benefit most.</p>
    <div className="theme_btn">
                <a className="btn_hrf" href="signin.html"><span>Try now</span></a>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}





function Partner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div  className='bg_black Team_mates float w-100 pt_150 pb_120'>
      <div className='container'>
        <div className='team_mates_inner'>
          <div className='theme_heading text-center pb_40'>
            <h2 className='heading'>Resources</h2>
          </div>
          <ul>
          <Slider {...settings}>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img src={resource1} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                  <h2>Unfold Unpacked - 2023 Unfold insights</h2>
                
                </div>
            </div>
           

            </li>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img className='height'  src={resource2} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                  <h2>Hospitality insights with Matt Welle and Leah Anathan</h2>
            
                </div>
            </div>
           

            </li>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img src={resource3} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                <h2>Unfold Unpacked - 2023 Unfold insights</h2>
                 
                </div>
            </div>
           

            </li>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img className='height' src={resource4} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                  <h2>Mews Kiosk revolutionizing the guest experience</h2>
                
                </div>
            </div>
           

            </li>
            <li>
            <div className='tm_info'>
                <div className='team_img'>
                <img className='height' src={resource2} alt="" />
                <i>Keynote</i>
                </div>
                <div className='team_names'>
                  <h2>Customer story: Strawberry - transforming hotel operations</h2>
                  
                </div>
            </div>
           

            </li>
          
            </Slider>
          </ul>
      

        </div>

      </div>
    </div>
  )
}






function Footer() {
  return (
    <div className='footer float w-100  bg_black pb_120'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2 col-md-6'>
            <div className='footer_logo'>
<img src={footer} alt="" />
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='footer_links'>
              <u className='row'>
                <li className='col-lg-4 col-md-12'>
                <a href="">Speakers</a>
                <a href="">Venue</a>
                <a href="">
Agenda</a>
                <a href="">Partners</a>
                <a href="">Awards</a>
                </li>

                <li className='col-lg-6 col-md-12'>
                  <a href="">Mews LinkedIn</a>
                  <a href="">Mews Instagram</a>
                  <a href="">Mews Facebook</a>
                  <a href="">Mews X</a>
                </li>
              </u>
            </div>
          </div>

<div className='col-lg-6 col-md-12'>
  <div className='newsletter'>
    <h3>Stay up to date on all things Unfold 2024</h3>
    <a href="">join our newsletter</a>
    <span>Subscribe to our Unfold mailing list for all updates surrounding the event.</span>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}





export { Nav, Banner, Light_Text, Section_State, Team_mates, Home_why, Brands, Bg_video, Card, Partner, Footer};
