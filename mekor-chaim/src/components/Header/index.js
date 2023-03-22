import React, { useState } from "react";
import mcLogo from "../../assets/mekor-chaim-logo.webp";
import menuBar from "../../assets/menu.png";

const Header = () => {
  const [active, setActive] = useState("nav-menu");
  const [original, turned] = useState("menu-btn");

  const navToggler = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");
    original === "menu-btn"
      ? turned("menu-btn turned-btn")
      : turned("menu-btn");
  };

  return (
    <nav>
      <a className="nav-logo-container" href="/">
        <img src={mcLogo} className="nav-logo" alt="Mekor Chaim Logo"></img>
      </a>
      <ul className={active}>
        <li
          className="nav-item"
          id="about"
          onClick={() => {
            setActive("nav-menu");
            turned("menu-btn");
          }}
        >
          <a href="#about">About</a>
        </li>
        <li
          className="nav-item"
          id="donate"
          onClick={() => {
            setActive("nav-menu");
            turned("menu-btn");
          }}
        >
          <a href="#donate">Donate</a>
        </li>
        <li
          className="nav-item"
          id="contact"
          onClick={() => {
            setActive("nav-menu");
            turned("menu-btn");
          }}
        >
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div onClick={navToggler} className="toggler">
        <img
          rel="prefetch"
          src={menuBar}
          alt="open menu"
          className={original}
        ></img>
      </div>
    </nav>
  );
};

export default Header;
