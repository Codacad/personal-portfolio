import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/MobileMenu.css";
import MoblieMenuContext from "../context/MobileMenuContext";
const MobileMenus = () => {
  const { setIsOpen, mobileMenuClasses } = useContext(MoblieMenuContext);
  return (
    <div className={mobileMenuClasses}>
      <ul className="relative -z-1 p-8 flex flex-col gap-6 justify-center items-center font-bold text-xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "text-blue-600" : ""}`}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) => `${isActive ? "text-blue-600" : ""}`}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${isActive ? "text-blue-600" : ""}`}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `${isActive ? "text-blue-600" : ""}`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenus;
