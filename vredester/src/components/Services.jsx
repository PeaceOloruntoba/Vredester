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
      </div>
    </div>
  )
}
