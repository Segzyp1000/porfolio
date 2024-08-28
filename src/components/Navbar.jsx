import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between mx-4 p-2  md:flex-row md:items-center">
      <div className="flex space-x-2">
        <Link to="/">
          <h1 className="text-4xl text-darkBlue font-bold from-neutral-900">
            Segun
          </h1>
        </Link>
      </div>
      <div className="hidden space-x-4 text-darkBlue font-bold md:flex">
        <Link to="/project" className="hover:text-slate-50">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-slate-50">
          Contact
        </Link>
        <a
          href="https://drive.google.com/file/d/1iSCam2_dhoojFdXUJPfdGbuBFCmOCiZw/view?usp=drive_link"
          className="text-white bg-blue-500 px-2 rounded-lg hover:bg-slate-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-darkBlue font-bold focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-5 text-white font-bold">
          <Link to="/project" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <a
            onClick={toggleMenu}
            href="https://drive.google.com/file/d/1vfQFM1Xdf_cd6Qf2p004iBPWauliVyVQ/view"
            className="text-white bg-blue-500 px-2 rounded-lg hover:bg-slate-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
