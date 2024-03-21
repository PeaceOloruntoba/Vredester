import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi'
import webdevelopment from '../../../assets/images/web-development.svg'

export default function Services() {
  return (
    <div className='bg-white dark:bg-[#060922] text-[#060922] dark:text-white'>
      <div className="grid p-32 gap-14">
        <div className="grid lg:grid-cols-2 items-center justify-center">
          <div className="grid lg:pr-44 gap-4">
        <span className='text-[#09aff4] text-2xl uppercase font-semibold'>--Services--</span>
        <span className='capitalize font-bold text-5xl'>Services We Offer</span>
        <span className='text-gray-400 font-semibold'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit OmnisId Atque Dignissimos Repellat Quae Ullam.</span>
          </div>
          <div className="flex flex-end justify-end">
            <a href="/"><button className='text-white text-xl uppercase bg-[#09aff4] w-fit px-10 py-4 opacity-80 font-bold hover:bg-transparent hover:ring-2 ring-[#09aff4] hover:dark:bg-transparent hover:text-[#09aff4] hover:dark:text-[#09aff4] rounded-tr-3xl rounded-bl-3xl flex items-center justify-between gap-2 hover:gap-4'>See all services <HiArrowSmRight /></button></a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <div className="ring-2 rounded-lg p-4 grid gap-2">
            <span><img src={webdevelopment} alt=""/></span>
            <span className='text-white font-bold text-2xl'>Web Development</span>
            <span className='text-gray-400 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis doloe obcarecati.</span>
            <a href="" className='flex items-center justify-between gap-2 hover:gap-4 text-[#09aff4] w-fit'>Read More <HiArrowSmRight /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
