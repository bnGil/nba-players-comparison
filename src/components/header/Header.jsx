import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/comparison">Comparison</Link>
    </nav>
  );
}

export default Header;
