import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import "../css/MobileMenu.css";
import { toggleMobileMenu } from "../state/slices/mobileMenuSlice";
const MobileMenus = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.mobileMenu);
  return (
    <div
      className={`mobile-menus max-md:block hidden ${
        open ? "collapse-mobile-menu" : ""
      }`}
    >
      <ul className="relative p-8 flex flex-col gap-6 justify-center items-center font-bold text-xl">
        <li onClick={() => dispatch(toggleMobileMenu(!open))}>
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
