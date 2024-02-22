import React from 'react'
import { logo } from '../assets'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between mr-56'>
      <div className="logo">
        <img src={logo} alt="" className='w-32'/>
      </div>
      <div className="">
        <ul className='flex gap-10 text-2xl font-bold uppercase'>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div className="hidden">
        <button>Switch Toggle</button>
      </div>
    </div>
  )
}
