import React,{useEffect, lazy} from 'react'
import { useLocation } from 'react-router-dom';
import JasaWeb from '../Components/JasaWeb';
 

const Header = lazy(() => import('@/Components/Header'));
const Hero = lazy(() => import('@/Components/Hero'));
// const About = lazy(() => import('@/Components/About'));
const Service = lazy(() => import('@/Components/Service'));
// const Team = lazy(() => import('@/Components/Team'));
const Contact = lazy(() => import('@/Components/Contact'));
const Footer = lazy(() => import('@/Components/Footer'));
const Layanan = lazy(() => import('@/Components/Layanan'));
const Visimisi = lazy(() => import('@/Components/Visimisi'));
const Whatsapp = lazy(() => import('@/Components/whatsapp'));
const According = lazy(() => import('@/Components/According'));
const Testimonials = lazy(() => import('@/Components/Testimonials'));
const ProfilePrusahaan = lazy(() => import('@/Components/ProfilePrusahaan'));
 
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
       {/* <About id="about"/> */}

      <ProfilePrusahaan id="tentang-kami"/>
      <Visimisi id="visi-and-misi"/>

      {/* <ProfileCEO/> */}
      {/* <Team id="team"/> */}
      <Service id="layanan"/>
      <Testimonials id="testimoni"/> 
      <According id="faq"/> 
      <JasaWeb/>
       <Contact id="contact"/>
      <Whatsapp/>
      <Footer/>
 
    </main>
  )
}

export default Home
