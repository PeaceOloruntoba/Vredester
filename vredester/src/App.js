import './App.css';
import { logo } from './assets';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <section>
        <nav className='flex items-center justify-around'>
          <div>
          <img src={logo} alt="" className='w-28'/>
          </div>
          <div>
          <ul className='flex gap-10 text-2xl font-bold uppercase'>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
          </div>
          <div>
            <button>Theme Toggle</button>
          </div>
        </nav>
      </section>

      <Footer />
    </div>
  );
}

export default App;
