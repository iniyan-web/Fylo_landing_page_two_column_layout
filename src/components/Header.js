import React from "react";
import headerLogo from "../images/logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <img className="header__logo" src={headerLogo} alt="Home." />
        <ul className="nav">
          <li className="nav__item">Features</li>
          <li className="nav__item">Team</li>
          <li className="nav__item">Sign In</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
