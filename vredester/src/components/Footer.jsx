import React from 'react'
import pattern from '../assets/images/footerbg.jpg'
import { logo } from '../assets';
import { HiArrowSmRight } from 'react-icons/hi';

export default function Footer() {
  return (
    <div className='relative text-white'>
        <img src={pattern} alt="" className='absolute inset-0 object-cover w-full h-full' />
  <div className='inset-0 bg-white dark:bg-[#060922] opacity-80 grid md:grid-cols-2 lg:grid-cols-5 justify-center gap-8 px-32 py-10'>
        <div className="flex flex-col col-span-2">
          <img src={logo} alt="" className='w-32 -ml-6' />
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus facere modi possimus dignissimos, aliquam nobis eaque? Voluptatem magnam quisquam rem.</span>
        </div>
        <div className="flex flex-col font-semibold gap-5">
          <span className='text-3xl font-bold'>Useful Links</span>
          <a href="/" className='flex gap-3 items-center cursor-pointer'><HiArrowSmRight /> X Twitter</a>
          <a href="/" className='flex gap-3 items-center cursor-pointer'><HiArrowSmRight /> Instagram</a>
          <a href="/" className='flex gap-3 items-center cursor-pointer'><HiArrowSmRight /> LinkedIn</a>
          <a href="/" className='flex gap-3 items-center cursor-pointer'><HiArrowSmRight /> Facebook</a>
        </div>
        <div className="flex flex-col font-semibold gap-5">
          <span className='text-3xl font-bold'>Navigation</span>
          <a href="/" className='flex gap-3 items-center cursor-pointer'>Home</a>
          <a href="/" className='flex gap-3 items-center cursor-pointer'>About</a>
          <a href="/" className='flex gap-3 items-center cursor-pointer'>Services</a>
          <a href="/" className='flex gap-3 items-center cursor-pointer'>Portfolio</a>
          <a href="/" className='flex gap-3 items-center cursor-pointer'>Contact</a>
        </div>
        <div className="flex flex-col font-semibold gap-5">
          <span className='text-3xl font-bold'>Contact Information</span>
          <a href="mailto:vredester@vredester.com">vredester@vredester.com</a>
          <a href="/">1, xyz st, abc city, Lagos, Nigeria</a>
          <a href="tel:+2348166846226">+2348166846226</a>
        </div>
      </div>
    </div>
  )
}
