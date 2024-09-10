import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
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
          <div className="vd to/4 tc wf  yf">
            <a href="/">
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

          <div className={`vd h-[100vh] wo/4 sd qo f ho oo wf yf ${navigationOpen ? 'd hh rm sr td ud qg ug jc yh' : ''}`}>
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
           
           
                <li className="relative">
          <button
            className="xl font-bold flex text-black items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Profile
            <svg
      className={`ml-2 transform ${dropdownOpen ? 'rotate-180' : ''}`}
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9L3 6h6L6 9z" fill="currentColor" />
    </svg>
          </button>

          {/* Dropdown Items */}
          {dropdownOpen && (
            <ul className="absolute mt-2 bg-white border rounded shadow-md w-[20rem] left-1/2 lg:left-[-4rem] xl:left-[-4rem] transform -translate-x-1/2">
              <li><a href="/profile-perusahaan" className="block px-4 py-2 text-black">Profile Perusahaan</a></li>
              <li><a href="/profile-ceo " className="block px-4 py-2 text-black">Profile CEO</a></li>
            </ul>
          )}
        </li>
                {/* <li>
                  <Link 
                    to="/visi-and-misi" 
                    className={`xl font-bold ${isActive('/visi-and-misi') ? 'text-blue-500' : 'text-black'}`} 
                    onClick={() => setNavigationOpen(false)}>
                    Visi & Misi
                  </Link>
                </li>
             */}
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
                    to="/testimoni" 
                    className={`xl font-bold ${isActive('/testimoni') ? 'text-blue-500' : 'text-black'}`} 
                    onClick={() => setNavigationOpen(false)}>
                    Testimoni
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/faq" 
                    className={`xl font-bold ${isActive('/faq') ? 'text-blue-500' : 'text-black'}`} 
                    onClick={() => setNavigationOpen(false)}>
                    FAQ
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
              
              
                <li className="relative">
          <button
            className="xl text-black font-bold flex items-center"
            onClick={() => setDropdownOpen1(!dropdownOpen1)}
          >
            Lainya
            <svg
      className={`ml-2 transform ${dropdownOpen1 ? 'rotate-180' : ''}`}
      width="12"
      height="12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9L3 6h6L6 9z" fill="currentColor" />
    </svg>
          </button>

          {/* Dropdown Items */}
        {dropdownOpen1 && (
            <ul className="absolute mt-2 bg-white border rounded shadow-md w-[20rem] left-1/2 lg:left-[-4rem] xl:left-[-4rem] transform -translate-x-1/2">
              <li><a href="/faq" className="block px-4 py-2 text-black">Kursus</a></li>
              <li><a href="https://lompatkelas.net/" className="block px-4 py-2 text-black">lompatkelas.net</a></li>
       
            </ul>
          )}  
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
