// import React from 'react'

// export default function Hero() {
//   return (
//     <main id='helo'>
//           <section className="gj do ir hj sp jr i pg">
//          <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r">
//           <img src="images/shape-01.svg" alt="shape" class="xc 2xl:ud-block h t -ud-left-[10%] ua ms:block" />
//           <img src="images/shape-02.svg" alt="shape" class="xc 2xl:ud-block h u p va" />
//           <img src="images/shape-03.svg" alt="shape" class="xc 2xl:ud-block h v w va" />
//           <img src="images/shape-04.svg" alt="shape" class="h q r" />
//           <img src="images/hero.png" alt="Woman" className="h q r ua" />
//         </div>

//          <div className="bb ze ki xn 2xl:ud-px-0">
//           <div className="tc _o">
//             <div className="animate_left jn/2">
//               <h1 className="text-[15px] font-bold text-[#fa9161] text-center xl:text-left lg:text-left md:text-left">#LOMPAT KELAS</h1>
//               <p className="lg:text-[50px] xl:text-[50px] lg:text-left xl:text-left text-black font-bold leading-[2rem] 
//               xl:leading-[3rem] lg:leading-[3rem] text-center text-[25px] md:text-left">
//                 Patenkan Karyamu, Lindungi Merekmu! Ayo Jadikan Indonesia Lebih Kuat!
//               </p>

//               <div className="tc tf yo zf mb text-center md:text-left xl:text-left lg:text-left">
//                 <a href="/about" className="ek jk lk gh gi hi rg ml il vc lg:_d sm:_d md:_d xl:_d _l flex justify-center items-center"
//                   >Tentang Kami
//                   </a
//                 >
 
//                 <span className="tc sf ">
//                   <p   className="inline-block ek xj kk wm"> Call  (+62) 812 2699 0080 </p>
//                   <span className="inline-block">Untuk bertanya lebih lanjut</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//     </main>
//   )
// }


import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
     
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                   Lompat
                    <span class="text-5xl sm:text-7xl">
                        Kelas
                    </span>
                </h1>
                <p class="text-[20px] my-10 sm:text-[15px] text-gray-700 dark:text-white">
                     Patenkan Karyamu, Lindungi Merekmu! Ayo Jadikan Indonesia Lebih Kuat!
                </p>
                <div class="flex mt-8">
                    <a href="/about" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Tentang Kami
                    </a>
                   
                </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="https://www.tailwind-kit.com/images/object/10.png" class="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
  
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
