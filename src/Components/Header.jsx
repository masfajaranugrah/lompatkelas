import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location
  
  // Function to handle scroll for sticky menu
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to check if the current menu item matches the current location
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <> 
      <header className={`g s r vd ya cj ${stickyMenu ? 'hh sm _k dj bl ll' : ''}`}>
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
                  <Link 
                    to="/home" 
                    className={`xl font-bold ${isActive('/home') ? 'text-blue-500' : 'text-black'}`} 
                    onClick={() => setNavigationOpen(false)}>
                      Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/keunggulan" 
                    className={`xl font-bold ${isActive('/keunggulan') ? 'text-blue-500' : 'text-black'}`} 
                    onClick={() => setNavigationOpen(false)}>
                      Keunggulan
                  </Link>
                </li>   
                <li>
                  <Link 
                    to="/visi-and-misi" 
                    className={`xl font-bold ${isActive('/visi-and-misi') ? 'text-blue-500' : 'text-black'}`} 
                    onClick={() => setNavigationOpen(false)}>
                    Visi & Misi
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className={`xl font-bold ${isActive('/about') ? 'text-blue-500' : 'text-black'}`} 
                    onClick={() => setNavigationOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/team" 
                    className={`xl font-bold ${isActive('/team') ? 'text-blue-500' : 'text-black'}`} 
                    onClick={() => setNavigationOpen(false)}>
                    Team
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/layanan" 
                    className={`xl font-bold ${isActive('/layanan') ? 'text-blue-500' : 'text-black'}`} 
                    onClick={() => setNavigationOpen(false)}>
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className={`xl font-bold ${isActive('/contact') ? 'text-blue-500' : 'text-black'}`} 
                    onClick={() => setNavigationOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
