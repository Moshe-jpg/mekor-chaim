import React from "react";
import learnImg from "../../assets/learn.png";
import torahImg from "../../assets/torah-scroll.png";
// import bbqImg from "../../assets/bbq.webp";
// import bowlingImg from "../../assets/bowling.webp";
// import bkVaadImg from "../../assets/brooklyn-vaad.webp";
// import escapeImg from "../../assets/escape-room.webp";
// import fiveTcImg from "../../assets/five-towns-chabura.webp";
// import lsImg from "../../assets/learning-seder.webp";
// import simchaImg from "../../assets/mekor-chaim-simcha.webp";
// import melavehhMalkaImg from "../../assets/melaveh-malka.webp";
// import morningSederImg from "../../assets/morning-seder.webp";
// import purimcImg from "../../assets/purim-chagiga.webp";
// import purimSeudaImg from "../../assets/purim-seuda.webp";
// import shabbatonImg from "../../assets/shabbaton.webp";
// import softballImg from "../../assets/softball-game.webp";
// import zoomImg from "../../assets/zoom-seder.webp";
// import founderImg from "../../assets/founder.webp";

const About = () => {
  // const activities = [
  //   {
  //     img: bkVaadImg,
  //     alt: "Brooklyn Vaad",
  //     caption: "Brooklyn Vaad",
  //   },
  //   {
  //     img: bbqImg,
  //     alt: "barbecue",
  //     caption: "BBQ",
  //   },
  //   {
  //     img: fiveTcImg,
  //     alt: "Five Towns Chaburah",
  //     caption: "Five Towns Chaburah",
  //   },
  //   {
  //     img: bowlingImg,
  //     alt: "Bowling",
  //     caption: "Bowling",
  //   },
  //   {
  //     img: lsImg,
  //     alt: "Learning Seder",
  //     caption: "Learning Seder",
  //   },
  //   {
  //     img: escapeImg,
  //     alt: "Escape Room",
  //     caption: "Escape Room",
  //   },

  //   {
  //     img: simchaImg,
  //     alt: "Mekor Chaim Simcha",
  //     caption: "Mekor Chaim Simcha",
  //   },
  //   {
  //     img: melavehhMalkaImg,
  //     alt: "Melaveh Malka",
  //     caption: "Melaveh Malka",
  //   },
  //   {
  //     img: morningSederImg,
  //     alt: "Morning Seder",
  //     caption: "Morning Seder",
  //   },
  //   {
  //     img: purimcImg,
  //     alt: "Purim Chagiga",
  //     caption: "Purim Chagiga",
  //   },
  //   {
  //     img: purimSeudaImg,
  //     alt: "Purim Seuda",
  //     caption: "Purim Seuda",
  //   },
  //   {
  //     img: shabbatonImg,
  //     alt: "Shabbaton",
  //     caption: "Shabbaton",
  //   },
  //   {
  //     img: softballImg,
  //     alt: "Softball Game",
  //     caption: "Softball Game",
  //   },
  //   {
  //     img: zoomImg,
  //     alt: "Zoom Seder",
  //     caption: "Zoom Seder",
  //   },
  // ];

  /*   */

  /* <span>What We Offer</span> */

  /* <span className="offers-item">Relatable Rebbeim</span>✔ */

  /* <span className="offers-item">​Like-Minded Community</span>✔​ */

  /* <span className="offers-item">Zoom Shiurim</span>✔ */

  /* <span className="offers-item">Chavrusos 24/7</span>✔ */

  /* <span className="offers-item">Traveling Chaburos</span>✔ */

  /* <span className="offers-item">Hashkafa/Parsha Vaadim</span>✔ */

  /* <span className="offers-item">Shiurim Throughout The Day</span>✔ */

  /* <span className="blue">Rabbi Dov Blumberg</span> */

  /* Under the tutelage of its Rosh HaYeshiva, HaRav Shaya Cohen,
              Shlit”a, Rabbi Blumberg spent over a decade learning and carefully
              absorbing the hashkafa of his Rebbeim in Yeshiva Zichon Aryeh.
              Towards the end of his years in Beis Medrash, he participated in
              Rav Cohen’s comprehensive teacher-training course. In 2018, Rabbi
              Blumberg founded Mekor Chaim. Rabbi Blumberg has a strong
              connection to ‘his guys’ and provides them with a solid foundation
              to succeed in life as a Ben Torah in the workforce. */



              
  return (
    <section id="about">
      <div className="about-header-container">
        <h2 className="about-header-text">
          <img src={learnImg} alt="community for learning"></img>
          <span>
            Mekor Chaim is a community for young men in their 20’s with
            career-oriented schedules. Our multitude of offerings & programming
            will fully service every aspect of life after yeshiva.
          </span>
        </h2>
        <div className="vertical-line"></div>
        <h2 className="about-header-text">
          <img
            src={torahImg}
            alt="career oriented, focused on learning Torah"
          ></img>
          <span>
            We provide the balance necessary for our talmidim, no matter their
            schedule or location, to stay fully focused on their careers while
            continuing on the path of true bnei torah.
          </span>
        </h2>
      </div>
    </section>
  );
};

export default About;
