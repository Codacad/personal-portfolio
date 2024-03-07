import React from "react";
import Logo from "../assets/logo_1.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex md:p-12 py-8 px-4 items-center justify-between backdrop-blur-sm">
        <div className="brand flex items-center"> 
          {/* <img src={Logo} alt="" /> */}
          <h1 className="md:text-2xl max-sm:text-sm font-madimi_one font-black flex items-center uppercase"> <span className="w-4 md:mt-[2px] h-4 mr-2 block bg-blue-700"></span> Mohd Rizwan</h1>
          <span className="uppercase max-sm:text-sm font-thin font-anta border-l-2 ml-4 pl-4">
            Fullstack Developer
          </span>
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
