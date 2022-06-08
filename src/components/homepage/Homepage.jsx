import React from "react";
import { NavLink } from "react-router-dom";

import "./homepage.css";

function Homepage() {
  return (
    <header className="landing">
      <div className="landing-content">
        <h1>COMPARE NBA PLAYERS AND READ WHAT PEOPLE THINK ABOUT THEM</h1>
        <NavLink to="/about">
          <button className="btn landing-btn">Learn more</button>
        </NavLink>
      </div>
    </header>
  );
}

export default Homepage;
