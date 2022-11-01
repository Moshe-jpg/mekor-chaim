import React from "react";
import logo from "../../assets/mekor-chaim-logo.webp";

const Header = () => {

  const lightMode = () => {
    document.querySelector("header").style.background = "rgba(0, 0, 0, 0.3)";
    document.querySelector(".donate-link #donate").style.background =
      "var(--secondary-light)";
    document.querySelector("#landingSection").style.backgroundColor =
      "var(--primary-light)";
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("#about").style.backgroundColor =
      "var(--primary-light)";
    document.querySelector(".who-we-are h2 span").style.backgroundColor =
      "var(--secondary-light)";
    document.querySelector("#offers").style.background = "var(--primary-light)";
    document.querySelector("#offers h2 span").style.background =
      "var(--secondary-light)";
    const changeOffersLi = () => {
      var elems = document.querySelectorAll("#offers ul li span");
      var index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.backgroundColor = "var(--secondary-light)";
      }
    };

    document.querySelector(".offers-item").style.background =
      "var(--secondary-light)";
    document.querySelector("#founder").style.background =
      "var(--secondary-light)";
    document.querySelector(".orange").style.color = "var(--secondary-light)";
    document.querySelector("#contact").style.background =
      "var(--primary-light)";

    const changeLocationsContainer = () => {
      var elems = document.querySelectorAll(".locations-container li span");
      var index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.background = "var(--secondary-light)";
      }
    };

    const changeLocationsAnchor = () => {
      var elems = document.querySelectorAll(".locations-container li a");
      var index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.color = "var(--tertiary-light)";
      }
    };

    document.querySelector(
      ".contact-form .contact-header span"
    ).style.backgroundColor = "#4649FF";
    document.querySelector(".contact-form .contact-header span").style.color =
      "var(--primary-light)";
    const changeInputBg = () => {
      var elems = document.querySelectorAll(".inputBox input");
      var index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.background = "var(--secondary-light)";
        elems[index].style.color = "var(--tertiary-light)";
      }
    };

    document.querySelector(".inputBoxBtn").style.backgroundColor = "#4649FF";
    document.querySelector(".inputBoxBtn").style.color = "var(--primary-light)";

    changeOffersLi();
    changeLocationsContainer();
    changeLocationsAnchor();
    changeInputBg();
  };

  const darkMode = () => {
    document.querySelector("header").style.background = "none";
    document.querySelector(".donate-link #donate").style.background =
      "var(--secondary-dark)";
    document.querySelector("#landingSection").style.backgroundColor =
      "var(--primary-dark)";
    document.querySelector(".overlay").style.display = "initial";
    document.querySelector("#about").style.backgroundColor =
      "var(--primary-dark)";
    document.querySelector(".who-we-are h2 span").style.backgroundColor =
      "var(--secondary-dark)";
    document.querySelector("#offers").style.background = "var(--primary-dark)";
    document.querySelector("#offers h2 span").style.background =
      "var(--secondary-dark)";
    const changeOffersLi = () => {
      var elems = document.querySelectorAll("#offers ul li span");
      var index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.backgroundColor = "var(--secondary-dark)";
      }
    };

    document.querySelector(".offers-item").style.background =
      "var(--secondary-dark)";
    document.querySelector("#founder").style.background =
      "var(--secondary-dark)";
    document.querySelector(".orange").style.color = "var(--secondary-dark)";
    document.querySelector("#contact").style.background = "var(--primary-dark)";

    const changeLocationsContainer = () => {
      var elems = document.querySelectorAll(".locations-container li span");
      var index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.background = "var(--secondary-dark)";
      }
    };

    const changeLocationsAnchor = () => {
      var elems = document.querySelectorAll(".locations-container li a");
      var index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.color = "var(--tertiary-dark)";
      }
    };

    document.querySelector(
      ".contact-form .contact-header span"
    ).style.backgroundColor = "var(--secondary-dark)";
    document.querySelector(".contact-form .contact-header span").style.color =
      "var(--tertiary-dark)";
    const changeInputBg = () => {
      var elems = document.querySelectorAll(".inputBox input");
      var index = 0,
        length = elems.length;
      for (; index < length; index++) {
        elems[index].style.background = "var(--secondary-dark)";
        elems[index].style.color = "var(--tertiary-dark)";
      }
    };

    document.querySelector(".inputBoxBtn").style.backgroundColor =
      "var(--secondary-dark)";
    document.querySelector(".inputBoxBtn").style.color = "var(--tertiary-dark)";

    changeOffersLi();
    changeLocationsContainer();
    changeLocationsAnchor();
    changeInputBg();
  };

  return (
    <header>
      <a href="/mekor-chaim" className="brand-logo">
        <img src={logo} alt="mekor chaim logo" />
      </a>
      <ul className="links-container">
        <ul className="color-way">
          <li>
            <div className="light-mode" onClick={lightMode}></div>
          </li>
          <li>
            <div className="dark-mode" onClick={darkMode}></div>
          </li>
        </ul>
        <li className="nav-links">
          <a href="#about">About</a>
        </li>
        <li className="nav-links">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav-links donate-link">
          <a href="/donate" id="donate">
            Donate
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
