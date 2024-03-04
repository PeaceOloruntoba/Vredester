// import { useState } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { logo } from './assets';
import Footer from './components/Footer';
import { IoSunnyOutline, IoMoon, IoDesktopOutline } from "react-icons/io5";
import HomePage from './Pages/HomePage';

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  )
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
  console.log(darkQuery, "darkQuery")
  const options = [
    {
      icon: <IoSunnyOutline />,
      text: "light"
    },
    {
      icon: <IoMoon />,
      text: "dark"
    },
    {
      icon: <IoDesktopOutline />,
      text: "system"
    }
  ]
  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark")
    }
  }
  onWindowMatch()
  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch()
        break;
    }
  }, [theme])
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark")
      } else {
        element.classList.remove("dark")
      }
    }
  })
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // }
  return (
    // <div className={`${darkMode && "dark"} App`}>
    <div>
        <nav className='flex items-center justify-between bg-gray-400 dark:bg-slate-900'>
          <div>
            <a href='/'>
              <img src={logo} alt="" className='w-20' />
            </a>
          </div>
          <div className=''>
            <ul className='lg:flex gap-10 text-xl font-bold uppercase'>
              <li className='my-1'><a href='/'>Home</a></li>
              <li className='my-1'><a href='/about'>About</a></li>
              <li className='my-1'><a href='/services'>Services</a></li>
              <li className='my-1'><a href='/portfolio'>Portfolio</a></li>
              <li className='my-1'><a href='/contact'>Contact</a></li>
            </ul>
          </div>
          <div className='dark:bg-slate-800 bg-gray-100 rounded hidden lg:block m-1'>
            {/* <button className='absolute rounded-full w-16 h-16 top-6 right-16 bg-slate-900 dark:bg-slate-300 text-white dark:text-black font-semibold' onClick={toggleDarkMode}>{darkMode? "LHT" : "DRK"}</button> */}
            {
              options?.map(opt => (
                <button key={opt.text} onClick={() => setTheme(opt.text)} className={`text-2xl rounded-full m-2 ${theme === opt.text && "text-sky-600"}`}>{opt.icon}</button>
              ))
            }
          </div>
          <div className="lg:hidden">
          <div className='dark:bg-slate-800 bg-gray-100 rounded'>
            {/* <button className='absolute rounded-full w-16 h-16 top-6 right-16 bg-slate-900 dark:bg-slate-300 text-white dark:text-black font-semibold' onClick={toggleDarkMode}>{darkMode? "LHT" : "DRK"}</button> */}
            {
              options?.map(opt => (
                <button key={opt.text} onClick={() => setTheme(opt.text)} className={`text-2xl rounded-full m-2 ${theme === opt.text && "text-sky-600"}`}>{opt.icon}</button>
              ))
            }
          </div>
          </div>
        </nav>

      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
