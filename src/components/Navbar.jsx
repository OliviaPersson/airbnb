import React from "react";
import airbnbLogo from "../images/airbnb.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="airbnb-logo" src={airbnbLogo} alt="Airbnb Logo" />
    </div>
  );
};

export default Navbar;
