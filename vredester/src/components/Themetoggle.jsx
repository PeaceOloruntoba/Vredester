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
    <div>Themetoggle</div>
  )
}
