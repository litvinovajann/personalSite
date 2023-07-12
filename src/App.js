import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './components/Home.js'
import Projects from './components/Projects';

function App() {
  
  return (
    <BrowserRouter>
    <header>
    <Link className="site-logo" to="/">Janna Litvinova</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
    
    <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/projects" element={<Projects />}/>
    </Routes> 
  </BrowserRouter>
  );
}

export default App;
