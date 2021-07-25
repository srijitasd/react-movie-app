import React from "react";
import Logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

console.log(window.innerHeight, window.innerWidth);

function Header() {
  return (
    <div className="header_container">
      <img className="navbar-brand" src={Logo} alt="logo" />
      <div className="header-action-container">
        <button className="language-btn">
          <FontAwesomeIcon className="font_awesome_icon" icon="globe" />
          <select style={{ backgroundColor: "none" }}>
            <option value="English">English</option>
            <option value="Hindi">हिंदी</option>
          </select>
        </button>

        <button>
          <a href="signin">Sign In</a>
        </button>
      </div>
    </div>
  );
}

export default Header;
