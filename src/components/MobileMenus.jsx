import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/MobileMenu.css'
const MobileMenus = ({toggle, setToggle}) => {
  console.log(toggle)
  const handleMobileMenu = () => {
    setToggle(!toggle)
  }
  return (
    <div className={`${!toggle ? "mobile-menus max-md:block hidden" : "mobile-menus collapse-mobile-menu max-md:block hidden"}`}>
      <ul className="p-8 flex flex-col gap-6 justify-center items-center font-bold text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-blue-600" : ""}`
              }
             onClick={handleMobileMenu}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `${isActive ? "text-blue-600" : ""}`
              }
              onClick={handleMobileMenu}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${isActive ? "text-blue-600" : ""}`
              }
             
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-blue-600" : ""}`
              }
             
            >
              Contact
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default MobileMenus
