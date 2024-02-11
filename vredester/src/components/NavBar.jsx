import React, { useEffect, useState } from 'react'
import logo from "../assets/images/1.png"
import { TiWeatherSunny } from "react-icons/ti"
import { IoMoon } from "react-icons/io5"
import { SlScreenDesktop } from "react-icons/sl";

export default function NavBar() {
  const [theme, setTheme] = useState("system");
  const element = document.documentElement
  const options = [
    {
      icon: <TiWeatherSunny />,
      text: "light",
    },
    {
      icon: <IoMoon />,
      text: "dark",
    },
    {
      icon: <SlScreenDesktop />,
      text: "system",
    },
  ];
  useEffect(()=>{
    switch(theme) {
      case "dark":
        element.classList.add('dark')
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove('dark')
        localStorage.setItem("theme", "light");
      default:
        localStorage.setItem("theme");
        break;
    }
  }, [theme])
  return (
      <div className='flex p-2 items-center justify-around text-xl font-bold dark:bg-slate-800 bg-slate-100'>
      <div>
      <img src={logo} alt="" className='rounded-lg w-16' />
      </div>
      <div>
      <ul className='flex gap-8'>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      </div>
      <div className="dark:bg-gray-950 bg-gray-100 rounded items-center justify-center dark:text-gray-100 p-2">
        {options?.map((opt) => (
          <button key={opt.text} onClick={() => setTheme(opt.text)} className={`rounded-full w-7 h-7 p-1 bg-slate-200 items-center justify-center text-center text-slate-800 m-1 ${ theme === opt.text && "bg-blue-900"}`}>{opt.icon}</button>
        ))}
      </div>
    </div>
  )
}
