import React from 'react'
import bgimg from '../assets/images/jumbotronbg.jpg'
import diss from '../assets/images/jumbotronimg.png'

export default function Jumbotron() {
  return (
    <div className='relative'>
  <img src={bgimg} alt="" className='absolute inset-0 object-cover w-full h-full' />
  <div className='inset-0 bg-white dark:bg-[#060922] opacity-80'>
  <div className="flex justify-center items-center p-32">
    <div className="flex flex-col">
      <span>Social Icons</span>
      <span>it solutions</span>
      <span>Providing The Best Services & IT <span>Solutions</span></span>
      <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat facilis vero delectus, quis a deserunt excepturi voluptatum qui fugiat natus aliquam ipsa,</span>
    </div>
    <img src={diss} alt="" />
  </div>
</div>
  </div>

  )
}
