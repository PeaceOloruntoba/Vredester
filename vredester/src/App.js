import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <div className="App">
      <NavBar/>
        <HomePage/>
      <Footer />
    </div>
  );
}

export default App;