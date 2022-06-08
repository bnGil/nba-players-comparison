import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./header.css";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";

function Header() {
  const [left, setLeft] = useState(0);
  const { pathname } = useLocation();

  const handleMouseEnter = (e) => {
    setLeft(e.target.getBoundingClientRect().x);
  };

  return (
    <div
      className="navbar-container"
      style={{ backgroundColor: pathname === "/" ? "#151515" : "#000000" }}
    >
      <nav className="navbar">
        <div className="links-container">
          <NavLink
            className="navlink"
            onMouseEnter={handleMouseEnter}
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="navlink"
            onMouseEnter={handleMouseEnter}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="navlink"
            onMouseEnter={handleMouseEnter}
            to="/comparison"
          >
            Comparison
          </NavLink>
          <div className="stripe" style={{ left: left }}></div>
        </div>
        <NavLink exact to="/">
          <img className="logo" src={logo2} alt="logo" />
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
