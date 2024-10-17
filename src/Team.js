import React from 'react';

const teamMembers = [
  { name: 'Jacob Watson', role: 'Founder', img: '1.jpg', hoverImg: '1-hover.png', aos: { 'data-aos': 'fade-up', 'data-aos-duration': '300' }  },
  { name: 'Tony Stark', role: 'Founder', img: '2.jpg', hoverImg: '2-hover.png', aos: { 'data-aos': 'fade-up', 'data-aos-duration': '400' } },
  { name: 'Johnson', role: 'Founder', img: '3.jpg', hoverImg: '3-hover.png' , aos: { 'data-aos': 'fade-up', 'data-aos-duration': '500' }},
  { name: 'William', role: 'Founder', img: '4.jpg', hoverImg: '4-hover.png', aos: { 'data-aos': 'fade-up', 'data-aos-duration': '600' } },
  { name: 'Django', role: 'Founder', img: '5.jpg', hoverImg: '5-hover.png', aos: { 'data-aos': 'fade-up', 'data-aos-duration': '700' } },
  { name: 'Kevin', role: 'Founder', img: '6.jpg', hoverImg: '6-hover.png' , aos: { 'data-aos': 'fade-up', 'data-aos-duration': '800' }},
  { name: 'Peter Son', role: 'Founder', img: '7.jpg', hoverImg: '7-hover.png', aos: { 'data-aos': 'fade-up', 'data-aos-duration': '800' } },
];

function Team() {
  return (
    <div className='float team_main pt_120'>
    <div className='float team pt_120 pb_120'>
      <div className='container'>
        <div className='row align-items-center'>
          {teamMembers.map((member, index) => (
            <React.Fragment key={index} {...member.aso}>
              {index === 0 && (
                <div className='col-md-6 col-lg-3 col-ms-6'>
                  <div className='theme_heading text-left col-lg-12' data-aos='fade-up' data-aos-duration='600'>
                    <span className='sub d-block'>meet Our Team  </span>
                    <h2 className='main_heading'>Experience  Members</h2>
                  </div>
                </div>
              )}
              <div className='col-md-6 col-lg-3 col-ms-6'>
                <div className='team_mates'>
                  <div className='member_img'>
                    <img className='team_main' src={require(`./assets/images/Team/${member.img}`)} alt={member.name} />
                  </div>
                  <div className='team_details'>
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                    <ul>
                      <li>
                        <a href=''>BE</a>
                        <a href=''>IN</a>
                        <a href=''>LI</a>
                        <a href=''>FB</a>
                        <a href=''>TW</a>
                      </li>
                    </ul>
                  </div>
                  <img className='hover_img' src={require(`./assets/images/Team/${member.hoverImg}`)} alt={member.name} />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
     </div>
  );
}

export default Team;
