import React from "react";
import "./headerp2.css";
import logo from "../downloads/team.jpg";

function Header() {
  return (
    <div className="headerp2">
      <img src={logo} alt="" className="logop2" />
      <div className="headerrightp2">
        <p>Products</p>
        <p>Services</p>
        <p>Contact</p>
        <p>Log in</p>
        <div>Get Access</div>
      </div>
    </div>
  );
}

export default Header;
