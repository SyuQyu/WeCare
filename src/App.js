
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Pages/Components/header';
function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="home" element={ <Home/> } />
      <Route path="about" element={ <About/> } />
    </Routes>
  </div>
  );
}

export default App;
