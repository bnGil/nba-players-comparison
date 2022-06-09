import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./header.css";

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
      </nav>
    </div>
  );
}

export default Header;
