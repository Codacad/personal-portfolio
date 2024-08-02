import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { toggleMobileMenu } from "../state/slices/mobileMenuSlice";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.mobileMenu);
  let [barOne, setBarOne] = useState("bar bar-one");
  let [barTwo, setBarTwo] = useState("bar bar-two");
  let [barThree, setBarThree] = useState("bar bar-three");
console.log(open)
  return (
    <>
      <nav className="flex z-10 bg-gray-50 md:p-6 py-4 px-4 items-center justify-between backdrop-blur-sm">
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
          <div onClick={() =>  dispatch(toggleMobileMenu(!open))} className="bars">
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
                `${
                  isActive
                    ? "text-blue-600 font-[100] relative after:absolute after:block after:-bottom-4 after:content-[''] after:w-[100%] after:h-[3px] after-rounded-md after:bg-blue-700"
                    : "relative after:absolute after:block after:-bottom-4 after:content-[''] hover:after:transition-width hover:after:ease-in-out hover:after:duration-500 after:w-[0] hover:after:w-[100%] after:h-[3px] after-rounded-md after:bg-blue-700"
                }`
              }
            >
              <motion.p whileTap={{ scale: 1 }} whileHover={{ scale: 0.95 }}>
                About Me
              </motion.p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-600 font-[100] relative after:absolute after:block after:-bottom-4 after:content-[''] after:w-[100%] after:h-[3px] after-rounded-md after:bg-blue-700"
                    : "relative after:absolute after:block after:-bottom-4 after:content-[''] hover:after:transition-width hover:after:ease-in-out hover:after:duration-500 after:w-[0] hover:after:w-[100%] after:h-[3px] after-rounded-md after:bg-blue-700"
                }`
              }
            >
              <motion.p whileTap={{ scale: 1 }} whileHover={{ scale: 0.95 }}>
                Resume
              </motion.p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-600 font-[100] relative after:absolute after:block after:-bottom-4 after:content-[''] after:w-[100%] after:h-[3px] after-rounded-md after:bg-blue-700"
                    : "relative after:absolute after:block after:-bottom-4 after:content-[''] hover:after:transition-width hover:after:ease-in-out hover:after:duration-500 after:w-[0] hover:after:w-[100%] after:h-[3px] after-rounded-md after:bg-blue-700"
                }`
              }
            >
              <motion.p whileTap={{ scale: 1 }} whileHover={{ scale: 0.95 }}>
                Projects
              </motion.p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-600 font-[100] relative after:absolute after:block after:-bottom-4 after:content-[''] after:w-[100%] after:h-[3px] after-rounded-md after:bg-blue-700"
                    : "relative after:absolute after:block after:-bottom-4 after:content-[''] hover:after:transition-width hover:after:ease-in-out hover:after:duration-500 after:w-[0] hover:after:w-[100%] after:h-[3px] after-rounded-md after:bg-blue-700"
                }`
              }
            >
              <motion.p whileTap={{ scale: 1 }} whileHover={{ scale: 0.95 }}>
                Contact
              </motion.p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
