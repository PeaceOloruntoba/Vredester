import React, { useState } from 'react'
import { useEffect } from 'react';
import { IoMoon } from 'react-icons/io5';
import { SlScreenDesktop } from 'react-icons/sl';
import { TiWeatherSunny } from 'react-icons/ti';

export default function Themetoggle() {
  const [theme, setTheme] = useState("system");
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
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
  function onWindowMatch() {
    if(localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)){
      element.classList.add("dark")
    } else {
      element.classList.remove("dark")
    }
  }
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
    <div>
      <div className="dark:bg-gray-950 bg-gray-100 rounded items-center justify-center dark:text-gray-100 p-2">
        {options?.map((opt) => (
          <button key={opt.text} onClick={() => setTheme(opt.text)} className={`rounded-full w-7 h-7 p-1 bg-slate-200 items-center justify-center text-center text-slate-800 m-1 ${ theme === opt.text && "bg-blue-900"}`}>{opt.icon}</button>
        ))}
      </div>
    </div>
  )
}
