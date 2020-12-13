import React from 'react';
//import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

function Website() {
  return (
    <div className='container-fluid'>
      <Navbar/>
      <Content/>
      <Footer/>
    </div>

    );
}

export default Website;
