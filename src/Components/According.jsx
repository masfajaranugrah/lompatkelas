import React, { useState } from 'react'
import { dataPertanyaan } from '/src/db/db.jsx';  // Make sure to adjust the path based on your file structure

const According = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };



  return (
   <section class="i pg qh rm ji hp">
        <img src="images/shape-11.svg" alt="Shape" class="of h ga ha ke" />
        <img src="images/shape-07.svg" alt="Shape" class="h ia o ae jf" />
        <img src="images/shape-14.svg" alt="Shape" class="h ja ka" />
        <img src="images/shape-15.svg" alt="Shape" class="h q p" />

        <div class="bb ze i va ki xn br px-4">
          <div class=" ">
          <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
      
          {dataPertanyaan.map((data, index) => {
  return (
    <div key={data.id}>
      <h2 id={`accordion-flush-heading-${index}`}>
        <button 
          type="button" 
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" 
          onClick={() => toggleAccordion(index)}
          aria-expanded={openIndex === index}
          aria-controls={`accordion-flush-body-${index}`}
        >
          <span>{data.question}</span>
          <span className="text-[30px]">{openIndex === index ? '-' : '+'}</span>
        </button>
      </h2>
      <div id={`accordion-flush-body-${index}`} className={`${openIndex === index ? '' : 'hidden'}`} aria-labelledby={`accordion-flush-heading-${index}`}>
        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           {data.answer}
          </p>
        
        </div>
      </div>
    </div>
  )
})}



      </div>
          </div>
        </div>
      </section>




   
 
  );
}

export default According;
