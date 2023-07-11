import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import About from './components/About.js'
import Home from './components/Home.js'
function App() {
  
  return (
    <BrowserRouter>
    <header>
    <Link className="site-logo" to="/">Janna Litvinova</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/about" element={<About />}/>
    </Routes> 
  </BrowserRouter>
  );
}

export default App;
