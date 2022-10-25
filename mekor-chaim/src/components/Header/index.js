import React from "react";
import logo from "../../assets/mekor-chaim-logo.webp";

const Header = () => {
    return (
        <header>
      <a href="/" className="brand-logo">
        <img src={logo} alt="mekor chaim logo"
      /></a>
      <ul className="links-container">
        <li className="nav-links"><a href="#about">About</a></li>
        <li className="nav-links"><a href="#contact">Contact</a></li>
        <li className="nav-links donate-link"><a href="/donate">Donate</a></li>
      </ul>
    </header>
    )
}

export default Header;