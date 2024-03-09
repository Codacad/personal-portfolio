import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useState, useContext } from "react";
import MoblieMenuContext from "../context/MobileMenuContext";
const Navbar = () => {
  let { toggler, setToggler, mobileMenuHandler } =
    useContext(MoblieMenuContext);
  let [barOne, setBarOne] = useState("bar bar-one");
  let [barTwo, setBarTwo] = useState("bar bar-two");
  let [barThree, setBarThree] = useState("bar bar-three");

  const handleTogglerChange = () => {
    setToggler(!toggler);
    mobileMenuHandler()
     if (!toggler) {
      setBarOne("bar bar-one transform-bar-one");
      setBarTwo("bar bar-two transform-bar-two");
      setBarThree("bar bar-three transform-bar-three");
    } else {
      setBarOne("bar bar-one");
      setBarTwo("bar bar-two");
      setBarThree("bar bar-three");
    }
  };
  return (
    <>
      <nav className="flex md:p-12 py-8 px-4 items-center justify-between backdrop-blur-sm">
        <div className="brand flex items-center">
          {/* <img src={Logo} alt="" /> */}
          <h1 className="md:text-2xl max-sm:text-sm font-madimi_one font-black flex items-center uppercase">
            {" "}
            <span className="w-4 md:mt-[2px] max-sm:w-3 max-sm:h-3 h-4 mr-2 max-sm:mr-[.30rem] block bg-blue-700"></span>
            Mohd Rizwan
          </h1>
          <span className="uppercase max-sm:text-sm font-thin font-anta border-l-2 max-sm:border-l-1 ml-4 max-sm:ml-2 pl-4 max-sm:pl-2">
            Fullstack Developer
          </span>
        </div>
        <div className="menu-toggler max-md:flex hidden">
          <div className="bars" onClick={() => handleTogglerChange()}>
            <span className={`${barOne}`}></span>
            <span className={`${barTwo}`}></span>
            <span className={`${barThree}`}></span>
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
