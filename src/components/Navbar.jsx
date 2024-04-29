import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex w-auto h-auto justify-between mx-4 p-2">
      <div>
        <h1 className="text-4xl text-darkBlue font-bold from-neutral-900">
          Segun
        </h1>
      </div>
      <div className="space-x-4  text-darkBlue font-bold">
        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
