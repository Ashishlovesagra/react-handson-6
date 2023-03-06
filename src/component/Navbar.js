import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Student">Students</Link>
      </li>
      <li>
        <Link to="/AboutUs">Contact Us</Link>
      </li>
    </div>
  );
}

export default Navbar;
