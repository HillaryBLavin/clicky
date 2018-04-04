import React from "react";
import "./Navbar.css";

// Navbar component
const Navbar = props => (
  <nav className="navbar navbar-dark navbar-custom p-3">
    <a className="navbar-brand" href="/">Clicky Game</a>
    <span className="navbar-text text-white">{props.message}</span>
    <span className="navbar-text text-white">Score: {props.score}, Tp Score: {props.topScore}</span>
  </nav>
);

export default Navbar;
