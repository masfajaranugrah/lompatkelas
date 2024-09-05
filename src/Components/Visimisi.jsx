import React from 'react'

function Visimisi() {
  return (
    <div>
         <section class="lj tp kr" >
         <div
 id='visi-and-misi'
          x-data="{ sectionTitle: `Visi Dan Misi`, sectionTitleText: `Visi Dan Misi Perusahaan.`}"
        >
          <div  class="animate_top bb ze rj ki xn vq">
    <h2 
            x-text="sectionTitle"
            class="text-[40px] font-bold text-black pb-2"
    >
    </h2>
    <p class="text-[17px] font-semibold" x-text="sectionTitleText"></p>
</div>


        </div>
 
        <div class="bb ze ki xn yq mb en">
 
          <div class="wc qf pn xo ng">
             <div class="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/icon-04.svg" alt="Icon" />
              <h4 class="ek zj kk wm nb _b">Visi</h4>
             
             <ul>
                <li>1. Menjadi perusahaan konsultan kekayaan intelektual yang terkemuka di indonesia</li>
             </ul>
            </div>

             <div class="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/icon-05.svg" alt="Icon" />
              <h4 class="ek zj kk wm nb _b">Misi</h4>
              <ul>
                <li>
                  1.  membantu pendaftaran kekayaan intelektual secara cepat dan akurat
                </li>
                <li>
               2. Memberikan sosialisasi dan edukasi kepada masyarakat luas tentang pentingnya perlindungan dan penghargaan terhadap kekayaan intelektual
                </li>
                <li>3. membangun kerja sma yang saling menguntungkan dengann stakeholder di bidang kekayaan intelektual</li>
              </ul>
            </div>

   

             
          </div>
        </div>
      </section>
    </div>
  )
}

export default Visimisi
