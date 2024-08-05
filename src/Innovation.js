import React from 'react'

function Innovation() {
  return (
    <div className='float innovation pt_120 pb_120'>
    <div className='container'>
        <div className='row align-items-center'>
            
        <div class="theme_heading text-center col-lg-12  aos-init aos-animate" data-aos="fade-up" data-aos-duration="600" bis_skin_checked="1"><span class="sub d-block">Our Features</span><h2 class="main_heading">We Specialize in Crafting <br />
        Digital Experiences</h2></div>
        <div className='row row1 align-items-center'>
        <div className='col-md-12 col-lg-4 ho_light'>
    <div className='inn_ideas' data-aos="fade-left" data-aos-duration="600">
        <h3>Strategic Prowess</h3>
        <p>With a deep understanding of online platforms, emerging technologies, and shifting consumer behaviors.</p>
    </div>

    <div className='inn_ideas' data-aos="fade-left" data-aos-duration="600">
        <h3>Digital Mastery</h3>
        <p>With a deep understanding of online platforms, emerging technologies, and shifting consumer behaviors.</p>
    </div>
        </div>
        <div className='col-md-12 col-lg-4 ho_light'>
            <div className='inn_img' data-aos="fade-up" data-aos-duration="600">
                <img className='img1' src={require('./assets/images/idea/light-bulb-1.png')} alt="" />
                <img  className='img2 position-absolute' src={require('./assets/images/idea/light-bulb-2.png')} alt="" />
            </div>
            </div>
            <div className='col-md-12 col-lg-4 ho_light'>
            <div className='inn_ideas text-end' data-aos="fade-right" data-aos-duration="600">
        <h3>Design Excellence</h3>
        <p>With a deep understanding of online platforms, emerging technologies, and shifting consumer behaviors.</p>
    </div>

    <div className='inn_ideas text-end' data-aos="fade-right" data-aos-duration="600">
        <h3>Partners in Success</h3>
        <p>With a deep understanding of online platforms, emerging technologies, and shifting consumer behaviors.</p>
    </div>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Innovation