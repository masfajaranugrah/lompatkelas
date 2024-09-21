import React from 'react'
import {datalayanan} from '@/db/db.jsx';
 function Layanan() {
  return (
    <div id="keunggulan">
      <section  className='my-20'>
      <div className="relative pb-6 flex justify-center items-center">
  <h1 className="text-[40px] font-bold text-black relative z-10">Keungulan</h1>
  <svg
    className="absolute bottom-0 left-0 right-0"
    width="100%"
    height="40"
  
    viewBox="0 0 100 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 15 Q25 10, 50 15 T100 15"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
</div>


        <div class="bb ze ki yn 2xl:ud-px-12.5 mt-20">
         
          <div class="lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 uf zo xf ap zf bp mq grid ">

        {datalayanan.map((data) => {
          return (
            <div class="animate_top kn to/kk tc cg oq">
            <div class="tc wf xf cf ae cd rg">
             <img width="60" height="60" src={data.logo} alt="image"/>              
             </div>
            <div>
            <h4 class="font-bold text-[20px] text-black pb-2">{data.name}</h4>
            <p>{data.desc}</p>
            </div>
          </div>
      
          )
        })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Layanan
