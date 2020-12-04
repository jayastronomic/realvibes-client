import React from "react";
import logo from "../assets/rvlogo6.png";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="flex items-center justify-around bg-gray-900 top-0 nav">
      <div>
        <img alt="" src={logo} width={60} />
      </div>
      <div className="flex space-x-8 text-white">
        <Link>About</Link>
        <Link>Team</Link>
        <Link>Contact Us</Link>
        <Link>Shop</Link>
      </div>
      <div className="flex space-x-8 text-white">
        <Link>Sign Up</Link>
        <Link>Log In</Link>
      </div>
    </nav>
  );
};

export default Nav;
