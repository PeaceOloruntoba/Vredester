import React from 'react'
import imge from '../../../assets/images/aboutsec.png'
import peace from '../../../assets/images/Peace.png'

export default function About() {
  return (
    <div className='bg-white dark:bg-[#060922] text-[#060922] dark:text-white lg:p-32 p-8 py-12'>
      <div className="">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <span className='text-[#09aff4] text-2xl uppercase font-semibold'>--ABout us--</span>
            <span className='capitalize font-bold text-5xl'>Trusted by worldwide clients.</span>
            <span className='text-gray-400 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</span>
            <div className="grid grid-cols-2 gap-4 gap-y-8 my-8">
              <div className="flex justify-between gap-2 group">
                <div className='rounded bg-[#09AFF426] text-[#09aff4] w-fit h-fit p-3 group-hover:bg-[#09aff4] group-hover:text-white group-hover:-mt-1'>
                  
                </div>
                <div className="grid">
                  <span className='capitalize font-semibold text-2xl'>First on field</span>
                  <span className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</span>
                </div>
              </div>
              <div className="flex justify-between gap-2 group">
                <div className='rounded bg-[#09AFF426] text-[#09aff4] w-fit h-fit p-3 group-hover:bg-[#09aff4] group-hover:text-white group-hover:-mt-1'>
                  
                </div>
                <div className="grid">
                  <span className='capitalize font-semibold text-2xl'>First on field</span>
                  <span className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</span>
                </div>
              </div>
              <div className="flex justify-between gap-2 group">
                <div className='rounded bg-[#09AFF426] text-[#09aff4] w-fit h-fit p-3 group-hover:bg-[#09aff4] group-hover:text-white group-hover:-mt-1'>
                  
                </div>
                <div className="grid">
                  <span className='capitalize font-semibold text-2xl'>First on field</span>
                  <span className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</span>
                </div>
              </div>
              <div className="flex justify-between gap-2 group">
                <div className='rounded bg-[#09AFF426] text-[#09aff4] w-fit h-fit p-3 group-hover:bg-[#09aff4] group-hover:text-white group-hover:-mt-1'>
                  
                </div>
                <div className="grid">
                  <span className='capitalize font-semibold text-2xl'>First on field</span>
                  <span className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-center items-center -mt-4">
              <a href="/"><button className='text-white lg:text-xl uppercase bg-[#09aff4] w-fit lg:px-10 px-6 py-4 lg:font-bold font-semibold hover:bg-transparent hover:ring-2 ring-[#09aff4] hover:dark:bg-transparent hover:text-[#09aff4] hover:dark:text-[#09aff4] rounded-tr-3xl rounded-bl-3xl flex items-center justify-between gap-2 hover:gap-4 transition-all duration-300'>Get in touch</button></a>
              <img src={peace} alt="" />
            </div>
          </div>
          <div>
            <img src={imge} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
