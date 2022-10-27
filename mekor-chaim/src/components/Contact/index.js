import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import mapLogo from "../../assets/google-maps.png";
import gmailLogo from "../../assets/gmail.png";
import PhoneLogo from "../../assets/phone.png";
import linkedInLogo from "../../assets/linkedin.png";
import spotifyLogo from "../../assets/spotify.png";

emailjs.init("iwUP8eH1NlcSvoxkb");

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yzucm0t",
        "contact_form",
        form.current,
        "iwUP8eH1NlcSvoxkb"
      )
      .then(
        (result) => {
          console.log(result.text);
          let inputs = document.querySelectorAll("input");
          inputs.forEach((input) => (input.value = ""));

          let contactHeader = document.getElementById("contact-header");
          contactHeader.style.fontSize = "35px";
          contactHeader.style.color = "green";
          contactHeader.textContent = "Message Sent ✔";

          let submitBtn = document.getElementById("submitBtn");
          submitBtn.style.backgroundColor = "green";

        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <ul className="locations-container">
        <li><span className="city">Brooklyn</span><a href="https://goo.gl/maps/2jA22C9UDbMrtDeR8">1912 New York Ave. <img src={mapLogo} alt="google maps"></img></a></li>
        <li><span className="city">Cedarhurst</span><a href="https://goo.gl/maps/FENmfRaTYEhBGrqG8">545 Arbuckle Ave. <img src={mapLogo} alt="google maps"></img></a></li>
        <li><span className="city">Queens</span><a href="https://goo.gl/maps/SK2z2MVHB7ekp6J29">141-56 73rd Ave. <img src={mapLogo} alt="google maps"></img></a></li>
      </ul>
      <div className="contact-form">
        <h4 className="contact-header" id="contact-header">
          <span>Contact</span>
        </h4>
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputBox">
            <input
              type="text"
              name="user_name"
              required="required"
              className="input1"
            />
            <span>Name:</span>
          </div>
          <div className="inputBox">
            <input type="email" name="user_email" required="required" />
            <span>Email address:</span>
          </div>
          <div className="inputBox inputBoxMessage">
            <input name="message" type="text" required="required" className="inputBoxMessageInput"/>
            <span>Message:</span>
          </div>
          <div className="inputBoxBtnContainer">
            <button type="submit" className="inputBoxBtn" value="send" id="submitBtn" >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ul className="contact-links">
        <li id="gmail"><a href="mailto:dblumberg@mekorchaim.com"><img src={gmailLogo} alt="gmail Mekor Chaim"></img></a></li>
        <li id="phone"><a href="tel:5168874257"><img src={PhoneLogo} alt="call phone"></img></a></li>
        <li><a href="http://www.linkedin.com/in/dovblumberg/"><img src={linkedInLogo} alt="Mekor Chaim LinkedIn"></img></a></li>
        <li><a href="https://open.spotify.com/show/39fPnP576LNs6wSP186XOB?si=PEpL8fcTQKO4Gl1H79t54A&utm_source=native-share-menu"><img src={spotifyLogo} alt="Mekor Chaim Podcast"></img></a></li>
      </ul>
    </section>
  );
};

export default Contact;
