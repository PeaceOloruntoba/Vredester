import React from 'react'

export default function Services() {
  return (
    <div className='bg-white dark:bg-[#060922] text-[#060922] dark:text-white'>
      <div className="grid p-32">
        <div className="grid lg:grid-cols-2 items-center justify-center">
          <div className="grid lg:pr-44 gap-4">
        <span className='text-blue-600 text-2xl uppercase font-semibold'>--Services--</span>
        <span className='capitalize font-bold text-5xl'>Services We Offer</span>
        <span className='text-gray-400 font-semibold'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit OmnisId Atque Dignissimos Repellat Quae Ullam.</span>
          </div>
          <div className="button flex flex-end justify-end">
            <a href="/"><button>See all services</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
