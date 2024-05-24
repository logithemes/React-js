import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Functional from './Functional';
// import Class from './Class';
import List from './List';
// import UseEffects from './UseEffects';
import UseRef from './UseRef';
import UseConText from './UseConText';
import CreateRef from './CreateRef';
// import UseId from './UseId';
import '../src/index.css'

import Form from './Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';

import ErrorBoundry from './img/ErrorBoundry';
import Get from './Get';

import Modal from './Modal';

function App() {
  return (
    <div>

      
<Modal/>
      <Get/>

      <ErrorBoundry ></ErrorBoundry>
      <BrowserRouter>
        <Nav />
        <Routes>
       
          <Route path="/home" element={<Nav />} />
          <Route path="/about" element={<List />} />
        </Routes>
      </BrowserRouter>

      <Functional data1="this is my first projects" />
      <CreateRef />
      <List />
      {/* <UseEffects /> */}
      <UseRef />
      <UseConText />
      <Form />
    </div>
  );
}

export default App;
