import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import  About from "./pages/About";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact";
import Resume from './pages/Resume'
import MobileMenus from "./components/MobileMenus";

function App() {
  let [toggle, setToggle] = useState(false)
  return (
    <>
      <Navbar toggle={toggle} setToggle={setToggle}/>
      <MobileMenus toggle={toggle} setToggle={setToggle}/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
