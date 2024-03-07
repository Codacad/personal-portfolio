import { Link, NavLink } from "react-router-dom";
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav className="flex md:p-12 py-8 px-4 items-center justify-between backdrop-blur-sm">
        <div className="brand flex items-center"> 
          {/* <img src={Logo} alt="" /> */}
          <h1 className="md:text-2xl max-sm:text-sm font-madimi_one font-black flex items-center uppercase"> <span className="w-4 md:mt-[2px] max-sm:w-3 max-sm:h-3 h-4 mr-2 max-sm:mr-[.30rem] block bg-blue-700"></span>Mohd Rizwan</h1>
          <span className="uppercase max-sm:text-sm font-thin font-anta border-l-2 max-sm:border-l-1 ml-4 max-sm:ml-2 pl-4 max-sm:pl-2">
            Fullstack Developer
          </span>
        </div>
        <div className="menu-toggler max-md:flex hidden">
          <div className="bars">
            <span className="bar bar-one"></span>
            <span className="bar bar-two"></span>
            <span className="bar bar-three"></span>
          </div>
        </div>
        <ul className="md:flex hidden justify-end gap-x-4 uppercase font-anta font-thin">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-blue-600 font-[100]" : ""}`
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `${isActive ? "text-blue-600 font-[100]" : ""}`
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${isActive ? "text-blue-600 font-[100]" : ""}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-blue-600 font-[100]" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
