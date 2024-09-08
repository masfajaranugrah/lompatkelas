import React,{useEffect, lazy} from 'react'
import { useLocation } from 'react-router-dom';

const Header = lazy(() => import('../Components/Header'));
const Hero = lazy(() => import('../Components/Hero'));
const About = lazy(() => import('../Components/About'));
const Service = lazy(() => import('../Components/Service'));
const Team = lazy(() => import('../Components/Team'));
const Contact = lazy(() => import('../Components/Contact'));
const Footer = lazy(() => import('../Components/Footer'));
const Layanan = lazy(() => import('../Components/Layanan'));
const Visimisi = lazy(() => import('../Components/Visimisi'));
const Whatsapp = lazy(() => import('../Components/whatsapp'));
const According = lazy(() => import('../Components/According'));
 
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
       <Contact id="contact"/>
      <According/> 
      <Whatsapp/>
      <Footer/>
 
    </main>
  )
}

export default Home
