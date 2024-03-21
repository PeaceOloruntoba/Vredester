import React from 'react'
import imge from '../../../assets/images/why.png'

export default function Choice() {
  return (
    <div className='bg-white dark:bg-[#060922] text-[#060922] dark:text-white lg:p-32 p-8 py-12'>
      <div className="grid lg:grid-cols-2 gap-16">
      <img src={imge} alt="" className='hidden lg:block' />
      <div className="flex flex-col">
        <span className='text-[#09aff4] text-2xl uppercase font-semibold'>--Why Choose Us--</span>
        <span>Why our customers choose <span>Working</span> with us</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</span>
        <span className='flex'>
          <span>01.</span>
          <div className="grid">
          <span>Latest Technology</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.</span>
          </div>
        </span>
      </div>
      <img src={imge} alt="" className='lg:hidden block' />
      </div>
    </div>
  )
}
