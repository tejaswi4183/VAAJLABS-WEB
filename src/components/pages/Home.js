import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import About from'../About'
import Contact from'../Contact'
import What from '../What'
import Footer from '../Footer';
import HeroSection from '../HeroSection';


function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
     
      <What />
      <About />
    <Contact />
    
    <Footer />


     
      
    </>
  );
}

export default Home;
