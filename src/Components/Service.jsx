import React from 'react'

function Service() {
  return (
    <main>
        <section class="lj tp kr">
         <div 
          x-data="{ sectionTitle: `Layanan Perusahaan`, sectionTitleText: `Berikut ini beberapa Layanan yang kami tawarkan.`}"
        >
             <div class="animate_top bb ze rj ki xn vq" id='layanan'>
    <h2
            x-text="sectionTitle"
            class="text-[40px] font-bold text-black pb-2 leading-10"
    >
    </h2>
    <p class="text-[17px] font-semibold" x-text="sectionTitleText"></p>
</div>
        </div>
        <div class="bb ze ki xn yq mb en">
          <div class="wc qf pn xo ng">
             <div class="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/icon-04.svg" alt="Icon" />
              <h4 class="ek zj kk wm nb _b">Pendaftaran Merek (Brand) dan Logo</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
            </div>

             <div class="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/icon-05.svg" alt="Icon" />
              <h4 class="ek zj kk wm nb _b">Pendaftarn Hak Cipta</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
            </div>

             <div class="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/icon-06.svg" alt="Icon" />
              <h4 class="ek zj kk wm nb _b">Pendaftaran Paten</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
            </div>

             <div class="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/icon-07.svg" alt="Icon" />
              <h4 class="ek zj kk wm nb _b">Pendaftaran Design Industri</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
            </div>

             <div class="animate_top sg oi pi zq ml il am cn _m">
              <img src="images/icon-05.svg" alt="Icon" />
              <h4 class="ek zj kk wm nb _b">Pendaftaran Indikasi Geografis</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor.</p>
            </div>

             
          </div>
        </div>
      </section>
    </main>
  )
}

export default Service
