// import { useState } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { logo } from './assets';
import Footer from './components/Footer';
import { IoSunnyOutline, IoMoon, IoDesktopOutline } from "react-icons/io5";

function App() {
  const [theme, setTheme] = useState("system")
  const element = document.documentElement
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
  console.log(darkQuery,"darkQuery")
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
  function onWindowMatch(){
    // if(localStorage.theme === 'dark' || ){

    // }
  }
  useEffect(()=>{
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
        break;
    }
  },[theme])
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // }
  return (
    // <div className={`${darkMode && "dark"} App`}>
    <div>
      <section>
        <nav className='flex items-center justify-around bg-gray-400 dark:bg-slate-900'>
          <div>
          <img src={logo} alt="" className='w-28'/>
          </div>
          <div>
          <ul className='flex gap-10 text-xl font-bold uppercase'>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Services</a></li>
          <li><a href='/'>Portfolio</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
          </div>
          <div className='dark:bg-slate-800 bg-gray-100 rounded'>
            {/* <button className='absolute rounded-full w-16 h-16 top-6 right-16 bg-slate-900 dark:bg-slate-300 text-white dark:text-black font-semibold' onClick={toggleDarkMode}>{darkMode? "LHT" : "DRK"}</button> */}
            {
              options?.map(opt=>(
            <button key={opt.text} onClick={()=>setTheme(opt.text)} className={`text-2xl rounded-full m-2 ${theme === opt.text && "text-sky-600"}`}>
               {opt.icon}
            </button>

              ))
            }
          </div>
        </nav>
      </section>

      <Footer />
    </div>
  );
}

export default App;
