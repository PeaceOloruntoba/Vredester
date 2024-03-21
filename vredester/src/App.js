// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import { logo } from './assets';
import Footer from './components/Footer';
import { IoSunnyOutline, IoMoon, IoDesktopOutline } from "react-icons/io5";
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';

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
    <Router>

        <nav className='flex items-center justify-between bg-white dark:bg-[#060922] fixed z-10 w-full dark:text-white text-[#060922]'>
          <div>
            <Link to='/'>
              <img src={logo} alt="" className='w-20' />
            </Link>
          </div>
          <div className=''>
            <ul className='lg:flex gap-10 text-xl font-bold uppercase'>
              <li className='my-1'><Link to='/'>Home</Link></li>
              <li className='my-1'><Link to='/about'>About</Link></li>
              <li className='my-1'><Link to='/services'>Services</Link></li>
              <li className='my-1'><Link to='/portfolio'>Portfolio</Link></li>
              <li className='my-1'><Link to='/contact'>Contact</Link></li>
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

        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
