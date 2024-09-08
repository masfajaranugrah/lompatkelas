import React from 'react'
import { dataService } from '/src/db/db.jsx';  // Make sure to adjust the path based on your file structure

function Service() {
 
  return (
    <main>
        <section class="lj tp kr">
        <div>
  <div class="animate_top bb ze rj ki xn vq" id='layanan'>
  <h2 className='flex justify-center items-center font-bold text-[40px] text-black mb-7 leading-10'>Layanan Perusahaan</h2>

     <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 20"
      
      // width="100%"
      // height="30"
      className='w-[100%] h-[25px] lg:h-[40px] xl:h-[40px] md:h-[40px]'
    >
      <path 
        d="M0,10 Q50,0 100,10 T200,10"
        stroke="#f7c948"
        stroke-width="3"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    
    {/* <p class="text-[17px] font-semibold" x-text="sectionTitleText"></p> */}
  </div>
</div>

        
        <div class="bb ze ki xn yq mb en">
          <div>

             <ul role="list" class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
             
             {dataService.map((lay) => {
                return(
                       
                     <li class="rounded-2xl border border-gray-200 p-8" key={lay.id}>
                        {lay.logo}
                          <h3 class="mt-6 font-semibold text-gray-900 text-[30px] leading-10">{lay.name}</h3>
                          <p class="mt-2 text-gray-700 text-[15px]">{lay.des}</p>
                    </li> 
                )
              })
             }
                        </ul>


          </div>
        </div>
      </section>
    </main>
  )
}

export default Service
