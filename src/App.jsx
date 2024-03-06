import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import  About from "./pages/About";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact";
import Resume from './pages/Resume'

function App() {
  return (
    <>
      <Navbar />
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
