import React,{useEffect} from 'react'

function About() {
 
  return (
    <div id='about'>
         <section class="ji gp uq 2xl:ud-py-35 pg">
        <div class="bb ze ki xn wq">
          <div class="flex flex-col lg:flex-row md:flex-row xl:flex-row  wf gg qq">
             <div class="animate_left flex gn gg jn/2 i">
              <div>
                <img src="images/shape-05.svg" alt="Shape" class="h-[118px] -ud-left-5 x" />
                <img src="images/1.png" alt="About" class="ib w-[200px]" />
                <img src="images/2.jpg" alt="About" className='w-[200px]' />
              </div>
              <div>
                <img src="images/shape-06.svg" alt="Shape" />
                <img src="images/about-03.png" alt="About" class="ob gb" />
                <img src="images/shape-07.svg" alt="Shape" class="bb" />
              </div>
            </div>

             <div class="animate_right jn/2">
              <h4 class="text-[18px]  font-bold">Tentang Lompat Kelas</h4>
              <h2 class="text-[30px] text-black font-bold leading-10 my-2">Apakah kamu tau apa itu Lompat Kelas ?</h2>
              <p class="text-[18px]">
                Lompat Kelas adalah sebuah perusahaan yang bergerak dalam bidang konsultasi kekayaan intelektual. yang berpusat di  jakarta selatan. Perusahaan ini didirikan pada tanggal 8 september 2015. Para Pendiri perusahaan adalah  Bp. Eko Budi Santoso dan Ibu.Darwati. saat ini Bp. Eko Budi Santoso menjabat sebagai Direktur Utama (Chief Executive Officer), sedangkan Ibu.Darwati menjaabat sebagi Komisaris.  
              </p>

              <p href="#" data-fslightbox class="vc wf hg mb">
                <span class="tc wf xf be dd rg i gh ua">
                  <span class="nf h vc yc vd rg gh qk -ud-z-1"></span>
                  <img src="images/icon-play.svg" alt="Play" />
                </span>
                <span class="kk">Ayo "Patenkan" kan !</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
