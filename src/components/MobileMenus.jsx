import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/MobileMenu.css";
import MoblieMenuContext from "../context/MobileMenuContext";
const MobileMenus = () => {
  const { setIsOpen, openCloseHandler, mobileMenuClasses } = useContext(MoblieMenuContext);
  return (
    <div className={mobileMenuClasses}>
      <ul className="relative p-8 flex flex-col gap-6 justify-center items-center font-bold text-xl">
        <li onClick={() => openCloseHandler()}>
          <NavLink
            to="/"
            className={({ isActive }) => `${isActive ? "text-blue-600" : ""}`}
          >
            About Me
          </NavLink>
        </li>
        <li onClick={() => openCloseHandler()}>
          <NavLink
            to="/resume"
            className={({ isActive }) => `${isActive ? "text-blue-600" : ""}`}
          >
            Resume
          </NavLink>
        </li>
        <li onClick={() => openCloseHandler()}>
          <NavLink
            to="/projects"
            className={({ isActive }) => `${isActive ? "text-blue-600" : ""}`}
          >
            Projects
          </NavLink>
        </li>
        <li onClick={() => openCloseHandler()}>
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
