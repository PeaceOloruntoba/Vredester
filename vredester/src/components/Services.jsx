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
              <a href="/" className="font-semibold flex items-center justify-between gap-2 hover:gap-4 text-[#09aff4] w-fit group-hover:text-white transition-all duration-300 ">Read More <HiArrowSmRight /></a>
            </div>
          </div>
          <div className="ring-2 ring-[#09a2ff] rounded-lg p-6 grid gap-3 group relative overflow-hidden">
            <span className="absolute inset-0 bg-[#09aff4] transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
            <div className="z-10 grid gap-4">
              <span className="text-[#09aff4] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </span>
              <span className="dark:text-white font-bold text-2xl">Mobile Development</span>
              <span className="text-gray-300 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis doloe obcarecati.</span>
              <a href="/" className="font-semibold flex items-center justify-between gap-2 hover:gap-4 text-[#09aff4] w-fit group-hover:text-white transition-all duration-300 ">Read More <HiArrowSmRight /></a>
            </div>
          </div>
          <div className="ring-2 ring-[#09a2ff] rounded-lg p-6 grid gap-3 group relative overflow-hidden">
            <span className="absolute inset-0 bg-[#09aff4] transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
            <div className="z-10 grid gap-4">
              <span className="text-[#09aff4] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </span>
              <span className="dark:text-white font-bold text-2xl">Data Analysis</span>
              <span className="text-gray-300 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis doloe obcarecati.</span>
              <a href="/" className="font-semibold flex items-center justify-between gap-2 hover:gap-4 text-[#09aff4] w-fit group-hover:text-white transition-all duration-300 ">Read More <HiArrowSmRight /></a>
            </div>
          </div>
          <div className="ring-2 ring-[#09a2ff] rounded-lg p-6 grid gap-3 group relative overflow-hidden">
            <span className="absolute inset-0 bg-[#09aff4] transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
            <div className="z-10 grid gap-4">
              <span className="text-[#09aff4] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
              </span>
              <span className="dark:text-white font-bold text-2xl">Graphics Design</span>
              <span className="text-gray-300 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis doloe obcarecati.</span>
              <a href="/" className="font-semibold flex items-center justify-between gap-2 hover:gap-4 text-[#09aff4] w-fit group-hover:text-white transition-all duration-300 ">Read More <HiArrowSmRight /></a>
            </div>
          </div>
          <div className="ring-2 ring-[#09a2ff] rounded-lg p-6 grid gap-3 group relative overflow-hidden">
            <span className="absolute inset-0 bg-[#09aff4] transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
            <div className="z-10 grid gap-4">
              <span className="text-[#09aff4] group-hover:text-white">
                <TbShoppingBagDiscount className='w-24 h-24' />
              </span>
              <span className="dark:text-white font-bold text-2xl">Digital Marketing</span>
              <span className="text-gray-300 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis doloe obcarecati.</span>
              <a href="/" className="font-semibold flex items-center justify-between gap-2 hover:gap-4 text-[#09aff4] w-fit group-hover:text-white transition-all duration-300 ">Read More <HiArrowSmRight /></a>
            </div>
          </div>
          <div className="ring-2 ring-[#09a2ff] rounded-lg p-6 grid gap-3 group relative overflow-hidden">
            <span className="absolute inset-0 bg-[#09aff4] transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></span>
            <div className="z-10 grid gap-4">
              <span className="text-[#09aff4] group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                </svg>
              </span>
              <span className="dark:text-white font-bold text-2xl">Real Estate</span>
              <span className="text-gray-300 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis doloe obcarecati.</span>
              <a href="/" className="font-semibold flex items-center justify-between gap-2 hover:gap-4 text-[#09aff4] w-fit transition-all duration-300 group-hover:text-white">Read More <HiArrowSmRight /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
