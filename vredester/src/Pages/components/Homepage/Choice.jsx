import React from 'react'
import imge from '../../../assets/images/why.png'

export default function Choice() {
  return (
    <div className='bg-white dark:bg-[#060922] text-[#060922] dark:text-white lg:p-32 p-8 py-12'>
      <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
      <img src={imge} alt="" className='hidden lg:block' />
      <div className="flex flex-col gap-5">
        <span className='text-[#09aff4] text-2xl uppercase font-semibold'>--Why Choose Us--</span>
        <span className='capitalize font-bold text-5xl'>Why our customers choose <span className='text-[#09aff4] underline underline-offset-8'>Working</span> with us</span>
        <span className='text-gray-400 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</span>
        <span className='flex gap-6 p-6'>
          <span className='text-5xl text-[#09aff4] font-bold'>01.</span>
          <div className="grid">
          <span className='text-2xl font-bold'>Unique Solutions</span>
          <span className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</span>
          </div>
        </span>
        <span className='flex gap-6 p-6'>
          <span className='text-5xl text-[#09aff4] font-bold'>02.</span>
          <div className="grid">
          <span className='text-2xl font-bold'>Powerful Strategies</span>
          <span className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</span>
          </div>
        </span>
        <span className='flex gap-6 p-6'>
          <span className='text-5xl text-[#09aff4] font-bold'>03.</span>
          <div className="grid">
          <span className='text-2xl font-bold'>Latest Technology</span>
          <span className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</span>
          </div>
        </span>
        <span>
        <a href="/"><button className='text-white lg:text-xl uppercase bg-[#09aff4] w-fit lg:px-10 px-6 py-4 lg:font-bold font-semibold hover:bg-transparent hover:ring-2 ring-[#09aff4] hover:dark:bg-transparent hover:text-[#09aff4] hover:dark:text-[#09aff4] rounded-tr-3xl rounded-bl-3xl flex items-center justify-between gap-2 hover:gap-4 transition-all duration-300'>Get in touch</button></a>
        </span>
      </div>
      <img src={imge} alt="" className='lg:hidden block' />
      </div>
    </div>
  )
}
