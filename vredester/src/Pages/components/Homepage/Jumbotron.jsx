import React from 'react'
import bgimg from '../../../assets/images/jumbotronbg.jpg'
import diss from '../../../assets/images/jumbotronimg.png'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5'

export default function Jumbotron() {
  return (
    <div className='relative'>
  <img src={bgimg} alt="" className='absolute inset-0 object-cover w-full h-full' />
  <div className='inset-0 bg-white dark:bg-[#060922] opacity-80 pt-24 lg:pt-0'>
  <div className="grid lg:grid-cols-2 justify-center items-center p-32">
    <div className="flex flex-col gap-8">
      <span className='flex gap-8 text-[#060922] dark:text-white text-xl px-3'>
        <a href="/" className='hover:text-[#09aff4]'><IoLogoFacebook/></a>
        <a href="/" className='hover:text-[#09aff4]'><IoLogoYoutube/></a>
        <a href="/" className='hover:text-[#09aff4]'><IoLogoInstagram/></a>
        <a href="/" className='hover:text-[#09aff4]'><IoLogoTwitter/></a>
      </span>
      <span className='text-2xl text-[#09aff4] font-bold uppercase'>-- it solutions  --</span>
      <span className='text-5xl font-semibold text-[#060922] dark:text-white'>Providing The Best Services & IT <span className='text-[#09aff4] text-pretty underline underline-offset-8'>Solutions</span></span>
      <span className='text-gray-400  text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto dolorum inventore totam adipisci</span>
      <a href="/"><button className='text-white text-xl uppercase bg-[#09aff4] w-fit px-10 py-4 opacity-80 font-bold hover:bg-transparent hover:dark:bg-transparent hover:text-[#09aff4] hover:dark:text-[#09aff4] rounded-tr-3xl rounded-bl-3xl hover:ring-2 ring-[#09aff4] transition-all duration-300 '>Contact us</button></a>
    </div>
    <div className="">
    <img src={diss} alt="" className='' />
    </div>
  </div>
</div>
  </div>

  )
}
