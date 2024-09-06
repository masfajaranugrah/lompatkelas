import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const page = "home"; // Replace this with actual page state logic

  // Function to handle scroll for sticky menu
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <> 
      <header className={`   g s r vd ya cj ${stickyMenu ? 'hh sm _k dj bl ll' : ''}`}>
        <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i container mx-auto">
          <div className="vd to/4 tc wf yf">
            <a href="index.html">
              <h1 className='text-[30px] text-black font-bold'>LK</h1>
            </a>

            {/* Hamburger Toggle BTN */}
            <button className="po rc" onClick={() => setNavigationOpen(!navigationOpen)}>
              <span className="rc i pf re pd">
                <span className="du-block h q vd yc">
                  <span className={`rc i r s eh um tg te rd eb ml jl dl ${!navigationOpen ? 'ue el' : ''}`}></span>
                  <span className={`rc i r s eh um tg te rd eb ml jl fl ${!navigationOpen ? 'ue qr' : ''}`}></span>
                  <span className={`rc i r s eh um tg te rd eb ml jl gl ${!navigationOpen ? 'ue hl' : ''}`}></span>
                </span>
                <span className="du-block h q vd yc lf">
                  <span className={`rc eh um tg ml jl el h na r ve yc ${!navigationOpen ? 'sd dl' : ''}`}></span>
                  <span className={`rc eh um tg ml jl qr h s pa vd rd ${!navigationOpen ? 'sd rr' : ''}`}></span>
                </span>
              </span>
            </button>
          </div>

          <div className={`vd wo/4 sd qo f ho oo wf yf ${navigationOpen ? 'd hh rm sr td ud qg ug jc yh' : ''}`}>
            <nav>
              <ul className="tc _o sf yo cg ep">
                <li>
                  <a 
                    href="/home" 
                    className={`xl font-bold  text-black ${page === 'home' ? 'mk' : ''}`} 
                    onClick={() => setNavigationOpen(false)}>
                      Home
                  </a>
                </li>
                <li>
                   <a 
                    href="/keunggulan" 
                    className="xl font-bold  text-black " 
                    onClick={() => setNavigationOpen(false)}>
                Keunggulan
                  </a>
                </li>   
              
                <li>
                  <a 
                    href="/visi-and-misi" 
                    className="xl font-bold  text-black " 
                    onClick={() => setNavigationOpen(false)}>
                    Visi&Misi
                  </a>
                </li>
                     <li>
                  <a 
                    href="/about" 
                    className="xl font-bold text-black" 
                    onClick={() => setNavigationOpen(false)}>
                    About
                  </a>
                </li>
                    <li>
                  <a 
                    href="/team" 
                    className="xl font-bold text-black" 
                    onClick={() => setNavigationOpen(false)}>
                    Team
                  </a>
                </li>
                <li>
                  <a 
                    href="/layanan" 
                    className="xl font-bold text-black" 
                    onClick={() => setNavigationOpen(false)}>
                    Layanan
                  </a>
                </li>
                <li><a href="/contact" className="xl font-bold text-black" onClick={() => setNavigationOpen(false)}>Contact</a></li>
                   
                {/* <li className="c i">
                  <a
                    href="#"
                    className={`xl  text-black font-bold tc wf yf bg ${['blog-grid', 'blog-single', 'signin', 'signup', '404'].includes(page) ? 'mk' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setDropdown(!dropdown);
                    }}
                  >
                   Lainya
                    <svg className={`th text-black mm we fd pf ${dropdown ? 'wh' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </a>

                  {/* Dropdown Start */}
                    {/* <UL></UL> */}
                  {/* {/* Dropdown End */}
                 {/* </li>     */}

              </ul>
            </nav>
         
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
