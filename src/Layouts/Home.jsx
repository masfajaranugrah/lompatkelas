import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';

import Header from '../Components/Header'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Service from './../Components/Service';
import Team from '../Components/Team';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Testimoni from '../Components/Testimoni';
import Layanan from '../Components/Layanan';
import Visimisi from './../Components/Visimisi';
import Whatsapp from '../Components/whatsapp';
 
function Home() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const element = document.querySelector(`[id="${path.slice(1)}"]`);
    if (element) {
      const headerOffset = 70; // Sesuaikan dengan tinggi header tetap Anda
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [location]);
  return (
    <main>

<Header/>
      <Hero id="hero"/>
      <Layanan id="keunggulan"/>
      <About id="about"/>
      <Visimisi id="visi-and-misi"/>
      <Team id="team"/>
      <Service id="layanan"/>
      {/* <Testimoni id="testimoni"/> */}
      <Contact id="contact"/>
      <Whatsapp/>
      <Footer/>
 
    </main>
  )
}

export default Home
