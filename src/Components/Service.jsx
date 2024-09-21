import React, { useState } from 'react';
import { dataService } from '@/db/db.jsx';  // Make sure to adjust the path based on your file structure
import LazyLoad from "react-lazyload";

function Service() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
  return (
    <main>
        <section class="lj tp kr mt-5">
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

        
        <div >
          <div className='container mx-auto'>

             <ul role="list" class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2">
             
             {dataService.map((lay) => {
                return(
                       
                     <li class="rounded-2xl  p-8" key={lay.id}>
                      <LazyLoad height={100} offset={100}>
                       <img className='w-[100%]' src={lay.images} alt="layanan" onClick={() => openImage(lay.images)}
 />
                     </LazyLoad> 
                    </li> 
                )
              })
             }
                        </ul>


          </div>
        </div>
      </section>


      {selectedImage && (
        <div
          className="fixed z-[99999] inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Full Size"
            className="max-w-full max-h-full rounded-lg"
          />
        </div>
      )}
    </main>
  )
}

export default Service
