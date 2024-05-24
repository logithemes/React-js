import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './index.css'; // Custom CSS
import { Nav, Banner, Light_Text, Section_State, Team_mates, Home_why, Brands, Bg_video, Card, Partner, Footer} from './Nav'; // Importing Nav and Banner as named exports

function App() {
  return (
    <div>
      <Nav />
      <Banner />
    <Light_Text/>
  <Section_State/>
<Team_mates/>
<Home_why/>
<Brands/>
<Bg_video/>
<Card/>
<Partner/>
<Footer/>
    </div>
  );
}

export default App;
