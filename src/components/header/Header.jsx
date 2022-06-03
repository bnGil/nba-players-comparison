import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  const [left, setLeft] = useState(0);

  const handleMouseEnter = (e) => {
    setLeft(e.target.getBoundingClientRect().x);
  };

  return (
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
  );
}

export default Header;
