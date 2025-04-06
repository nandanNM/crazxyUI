import React, { useState } from 'react'

const Accordian = (props) => {

  const [accordianOpen, setAccordianOpen] = useState(false);

  return (
    <div className=" w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="p-6 ">
        <div className=" p-4 bg-gray-200 rounded-lg">
           <div className=' py-2'>
            <button onClick={() => setAccordianOpen(!accordianOpen)} 
            className=' flex justify-between w-full'>
               <span>
                {props.tittle}
              </span>
              {/* {accordianOpen ? <span>-</span> : <span>+</span>} */}
              <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  accordianOpen && "!rotate-180"
                }`}
              />
             <rect
                y="7"
               width="16"
               height="2"
               rx="1"
               className={`transform origin-center rotate-90 transition duration-200 ease-out ${
               accordianOpen && "!rotate-180"
             }`}
            />
          </svg>
           </button>
           <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordianOpen
            ? 'grid-rows-[1fr] opacity-100' 
            : 'grid-rows-[0fr] opacity-0'
           }`}>
            <div className=' overflow-hidden'>
              {props.answer}
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordian