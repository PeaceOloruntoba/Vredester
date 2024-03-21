import React from 'react'
import bgimg from '../../../assets/images/jumbotronbg.jpg'
import diss from '../../../assets/images/jumbotronimg.png'

export default function Jumbotron() {
  return (
    <div className='relative'>
  <img src={bgimg} alt="" className='absolute inset-0 object-cover w-full h-full' />
  <div className='inset-0 bg-white dark:bg-[#060922] opacity-80'>
  <div className="grid grid-cols-2 justify-center items-center p-32">
    <div className="flex flex-col">
      <span>Social Icons</span>
      <span className='text-3xl text-blue-600 font-bold uppercase'>-- it solutions  --</span>
      <span className='text-5xl font-semibold text-[#060922] dark:text-white'>Providing The Best Services & IT <span className='text-blue-600'>Solutions</span></span>
      <span className='text-[#06092] dark:text-white text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat facilis vero delectus, quis a deserunt excepturi voluptatum qui fugiat natus aliquam ipsa,</span>
    </div>
    <div className="">
    <img src={diss} alt="" className='' />
    </div>
  </div>
</div>
  </div>

  )
}
