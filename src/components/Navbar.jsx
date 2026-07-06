import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  { label: "About", path: "/" },
  { label: "Resume", path: "/resume" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        <NavLink to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
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
          onClick={() => setOpen((current) => !current)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBarsStaggered} />
        </button>
      </nav>

      <div
        className={`md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } fixed inset-x-3 top-24 rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-2xl shadow-slate-900/15 transition`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `mb-1 flex rounded-2xl px-4 py-4 text-base font-bold ${
                isActive ? "bg-blue-50 text-blue-700" : "text-slate-700"
              }`
            }
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <a className="primary-button mt-2 w-full" href="mailto:iam@rizwanansari.in">
          Start a Project
        </a>
      </div>
    </header>
  );
};

export default Navbar;
