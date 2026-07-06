import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { closeMobileMenu, toggleMobileMenu } from "../state/slices/mobileMenuSlice";

const navItems = [
  { label: "About", path: "/" },
  { label: "Resume", path: "/resume" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.mobileMenu);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? "nav-link-active"
        : "text-slate-600 hover:bg-white/70 hover:text-slate-950"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 w-[min(1180px,calc(100%_-_32px))] items-center justify-between">
        <NavLink
          to="/"
          className="group flex items-center gap-3"
          onClick={() => dispatch(closeMobileMenu())}
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-900/15">
            MR
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-wide text-slate-950">
              Mohd Rizwan
            </span>
            <span className="block text-xs font-medium text-slate-500">
              Fullstack Developer
            </span>
          </span>
        </NavLink>

        <ul className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/55 p-1 shadow-sm md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a className="primary-button hidden md:inline-flex" href="mailto:iam@rizwanansari.in">
          Hire Me
        </a>

        <button
          className="icon-button md:hidden"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => dispatch(toggleMobileMenu())}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBarsStaggered} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
