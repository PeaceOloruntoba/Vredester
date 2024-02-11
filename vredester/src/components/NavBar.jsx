import React from 'react'
import logo from "../assets/images/1.png"
import { TiWeatherSunny } from "react-icons/ti"
import { IoMoon } from "react-icons/io5"
import { SlScreenDesktop } from "react-icons/sl";

export default function NavBar() {
  const options = [
    {
      icon: "TiWeatherSunny",
      text: "light",
    },
    {
      icon: "IoMoon",
      text: "dark",
    },
    {
      icon: "SlScreenDesktop",
      text: "system",
    },
  ]
  return (
      <div className='grid text-xl font-bold dark:bg-slate-800 bg-slate-100'>
    <div className='flex items-center justify-around px-6 py-2'>
      <img src={logo} alt="" className='rounded-lg w-16' />
      <ul className='flex gap-8'>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <div className="fixed top-5 right-10 duration-100 dark:bg-gray-950 bg-gray-100 rounded items-center justify-center dark:text-gray-100">
        {options?.map((opt) => (
          <button key={opt.text}>{opt.icon}</button>
        ))}
      </div>
      </div>
    </div>
  )
}
