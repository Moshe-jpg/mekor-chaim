import react from "react";

const Header = () => {
    return (
        <header>
      <a href="" className="brand-logo">
        <img src="assets\mekor-chaim-logo.webp" alt="mekor chaim logo"
      /></a>
      <ul className="links-container">
        <li className="nav-links"><a href="#about">About</a></li>
        <li className="nav-links"><a href="#contact">Contact</a></li>
        <li className="nav-links"><a href="#">Donate</a></li>
      </ul>
    </header>
    )
}

export default Header;