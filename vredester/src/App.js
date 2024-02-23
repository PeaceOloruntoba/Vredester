import { useState } from 'react';
import './App.css';
import { logo } from './assets';
import Footer from './components/Footer';

function App() {
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
          <ul className='flex gap-10 text-2xl font-bold uppercase'>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About</a></li>
          <li><a href='/'>Services</a></li>
          <li><a href='/'>Portfolio</a></li>
          <li><a href='/'>Contact</a></li>
        </ul>
          </div>
          <div>
            {/* <button className='absolute rounded-full w-16 h-16 top-6 right-16 bg-slate-900 dark:bg-slate-300 text-white dark:text-black font-semibold' onClick={toggleDarkMode}>{darkMode? "LHT" : "DRK"}</button> */}
          </div>
        </nav>
      </section>

      <Footer />
    </div>
  );
}

export default App;
