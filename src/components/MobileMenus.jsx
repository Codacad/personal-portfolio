import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBriefcase,
  faEnvelope,
  faFileLines,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { closeMobileMenu } from "../state/slices/mobileMenuSlice";

const menuItems = [
  { label: "About", path: "/", icon: faAddressCard },
  { label: "Resume", path: "/resume", icon: faFileLines },
  { label: "Projects", path: "/projects", icon: faBriefcase },
  { label: "Contact", path: "/contact", icon: faEnvelope },
];

const MobileMenus = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.mobileMenu);

  return (
    <div
      className={`fixed inset-0 z-40 md:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close navigation"
        className={`absolute inset-0 bg-slate-950/35 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => dispatch(closeMobileMenu())}
      />

      <aside
        className={`absolute right-3 top-24 flex max-h-[calc(100vh-112px)] w-[min(360px,calc(100%-24px))] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-2xl shadow-slate-900/20 transition duration-300 ${
          open ? "translate-x-0 opacity-100" : "translate-x-[110%] opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
              Navigate
            </p>
            <h2 className="mt-1 text-xl font-black text-slate-950">Portfolio</h2>
          </div>
          <button
            className="icon-button"
            type="button"
            aria-label="Close menu"
            onClick={() => dispatch(closeMobileMenu())}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <nav className="grid gap-2 p-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => dispatch(closeMobileMenu())}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-3xl px-4 py-4 text-base font-black transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                }`
              }
            >
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/80 text-blue-600">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto border-t border-slate-100 p-4">
          <a className="primary-button w-full" href="mailto:iam@rizwanansari.in">
            Start a Project
          </a>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenus;
