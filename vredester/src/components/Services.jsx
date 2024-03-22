import React from 'react'
import { TbShoppingBagDiscount } from "react-icons/tb";
import { HiArrowSmRight } from 'react-icons/hi'

export default function Services() {
  return (
    <div className='bg-white dark:bg-[#060922] text-[#060922] dark:text-white lg:p-32 p-8 py-12'>
      <div className="grid gap-14">
        <div className="grid lg:grid-cols-2 items-center justify-center gap-6">
          <div className="grid lg:pr-44 gap-4">
            <span className='text-[#09aff4] text-2xl uppercase font-semibold'>--Services--</span>
            <span className='capitalize font-bold text-5xl'>Services We Offer</span>
            <span className='text-gray-400 font-semibold'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit OmnisId Atque Dignissimos Repellat Quae Ullam.</span>
          </div>
          <div className="flex lg:justify-end">
            <a href="/"><button className='text-white text-xl uppercase bg-[#09aff4] w-fit px-10 py-4 opacity-80 font-bold hover:bg-transparent hover:ring-2 ring-[#09aff4] hover:dark:bg-transparent hover:text-[#09aff4] hover:dark:text-[#09aff4] rounded-tr-3xl rounded-bl-3xl flex items-center justify-between gap-2 hover:gap-4 transition-all duration-300'>See all services <HiArrowSmRight /></button></a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="ring-2 ring-[#09a2ff] rounded-lg p-6 grid gap-3 group relative overflow-hidden">
            <span className="absolute inset-0 bg-[#09aff4] transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
            <div className="z-10 grid gap-4">
              <span className="text-[#09aff4] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </span>
              <span className="dark:text-white font-bold text-2xl">Web Development</span>
              <span className="text-gray-300 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis doloe obcarecati.</span>
              <a href="" className="font-semibold flex items-center justify-between gap-2 hover:gap-4 text-[#09aff4] w-fit group-hover:text-white transition-all duration-300 ">Read More <HiArrowSmRight /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
