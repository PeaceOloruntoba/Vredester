import React from 'react'

export default function Choice() {
  return (
    <div className='bg-white dark:bg-[#060922] text-[#060922] dark:text-white lg:p-32 p-8 py-12'>
      <div className="grid lg:flex lg:flex-row-reverse"></div>
      <img src="" alt="" />
      <div className="flex flex-col">
        <span>--Why Choose Us--</span>
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
    </div>
  )
}
