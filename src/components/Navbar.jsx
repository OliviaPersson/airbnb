import React from "react";
import airbnbLogo from "../images/airbnb.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="airbnb-logo" src={airbnbLogo} alt="Airbnb Logo" />
    </nav>
  );
};

export default Navbar;
