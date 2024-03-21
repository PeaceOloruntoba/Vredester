import React from 'react'
import pattern from '../../../assets/images/patternbg.jpg'

export default function Span() {
  return (
    <div className='relative text-white'>
        <img src={pattern} alt="" className='absolute inset-0 object-cover w-full h-full' />
  <div className='inset-0 bg-white dark:bg-[#060922] opacity-80 lg:p-32 lg:py-24 p-8 py-12 grid md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-16'>
        <div className="rounded-b ring-2 w-full h-full ring-[#09aff2] grid items-center justify-center text-center border-t-8 border-t-[#09aff2] py-12">
          <span>icon</span>
          <span className='font-bold text-3xl'>750+</span>
          <span className='font-semibold text-xl capitalize'>finished projects</span>
        </div>
        <div className="rounded-b ring-2 w-full h-full ring-[#09aff2] grid items-center justify-center text-center border-t-8 border-t-[#09aff2] py-12">
          <span>icon</span>
          <span className='font-bold text-3xl'>5+</span>
          <span className='font-semibold text-xl capitalize'>created jobs</span>
        </div>
        <div className="rounded-b ring-2 w-full h-full ring-[#09aff2] grid items-center justify-center text-center border-t-8 border-t-[#09aff2] py-12">
          <span>icon</span>
          <span className='font-bold text-3xl'>10+</span>
          <span className='font-semibold text-xl capitalize'> happy customers</span>
        </div>
        <div className="rounded-b ring-2 w-full h-full ring-[#09aff2] grid items-center justify-center text-center border-t-8 border-t-[#09aff2] py-12">
          <span>icon</span>
          <span className='font-bold text-3xl'>2+</span>
          <span className='font-semibold text-xl capitalize'>years of experience</span>
        </div>
      </div>
    </div>
  )
}
