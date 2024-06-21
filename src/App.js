import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom"
import Home from './components/Home.js'
import Projects from './components/Projects';
import Layout from "./components/Layout"
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="*" element={<Projects />}/> 
       </Route>
    </Routes> 
  </BrowserRouter>
  );
}

export default App;
