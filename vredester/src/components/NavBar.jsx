import React from 'react'
import logo from "../assets"
export default function NavBar() {
  return (
      <div className='grid text-xl font-bold'>
        <div className="flex text-sm px-12 py-2 items-center justify-between">
          <span>This is the header...</span>
          <span>Social Icons ...</span>
        </div>
    <div className='flex items-center justify-around px-6 py-2'>
      <img src="" alt="" />
      <ul className='flex gap-8'>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <p>Theme toggle</p>
      </div>
    </div>
  )
}
