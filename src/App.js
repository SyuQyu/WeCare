
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Consult from './Pages/Consult';
import Care from './Pages/Care';
import Header from './Pages/Components/header';
import Footer from './Pages/Components/footer';
function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="Home" element={ <Home/> } />
      <Route path="About" element={ <About/> } />
      <Route path="Consult" element={ <Consult/> } />
      <Route path="Care" element={ <Care/> } />
    </Routes>
    {/* <Footer /> */}
  </div>
  );
}

export default App;
