import React, { useState, useEffect } from "react";

function Footer() {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScroll = () => {
    setScrollTop(window.pageYOffset > 50);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
          <footer>
  <div class="bb ze ki xn 2xl:ud-px-0">
    
 
     <div class="bh ch pm tc uf sf yo wf xf ap cg fp bj">
      <div class="animate_top">
        <ul class="tc wf gg">
          <li><a href="#" class="xl">Disclaimer</a></li>
          <li><a href="#" class="xl">Privacy Policy</a></li>
          <li><a href="#" class="xl">Support</a></li>
        </ul>
      </div>

      <div class="animate_top">
        <p>&copy; 2024 Lompatkelas.com . All rights reserved</p>
      </div>
    </div>
   </div>
</footer>




<button
      className={`xc wf xf ie ld vg sr gh tr g sa ta _a ${scrollTop ? "uc" : ""}`}
      onClick={scrollToTop}
    >
      <svg className="uh se qd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
      </svg>
    </button>
    </div>



  )
}

export default Footer
