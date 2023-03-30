import React from "react";
import gmailLogo from "../../assets/gmail.png";
import PhoneLogo from "../../assets/phone.png";
import linkedInLogo from "../../assets/linkedin.png";
import spotifyLogo from "../../assets/spotify.png";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="contact-links">
        <li id="gmail">
          <a href="mailto:dblumberg@mekorchaim.com">
            <img src={gmailLogo} alt="gmail Mekor Chaim"></img>
          </a>
        </li>
        <li id="phone">
          <a href="tel:5168874257">
            <img src={PhoneLogo} alt="call phone"></img>
          </a>
        </li>
        <li>
          <a href="http://www.linkedin.com/in/dovblumberg/">
            <img src={linkedInLogo} alt="Mekor Chaim LinkedIn"></img>
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/show/39fPnP576LNs6wSP186XOB?si=PEpL8fcTQKO4Gl1H79t54A&utm_source=native-share-menu">
            <img src={spotifyLogo} alt="Mekor Chaim Podcast"></img>
          </a>
        </li>
      </ul>
      <div className="horizontal-line"></div>
      <h6>
        Site Created By&nbsp;
        <a href="https://ca.linkedin.com/in/moshe-gadol">Moshe Gadol</a>
      </h6>
    </footer>
  );
};

export default Footer;
