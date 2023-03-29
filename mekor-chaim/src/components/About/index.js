import React from "react";
import LazyLoad from "react-lazyload";
// import learnImg from "../../assets/learn.png";
// import torahImg from "../../assets/torah-scroll.png";
import lsImg from "../../assets/learning-seder.webp";
import fiveTcImg from "../../assets/five-towns-chabura.webp";
import bkVaadImg from "../../assets/brooklyn-vaad.webp";
import simchaImg from "../../assets/mekor-chaim-simcha.webp";
import purimcImg from "../../assets/purim-chagiga.webp";
import shabbatonImg from "../../assets/shabbaton.webp";
import founderImg from "../../assets/founder.webp";
import mapLogo from "../../assets/google-maps.png";
// import softballImg from "../../assets/softball-game.webp";
// import zoomImg from "../../assets/zoom-seder.webp";
// import purimSeudaImg from "../../assets/purim-seuda.webp";
// import melavehhMalkaImg from "../../assets/melaveh-malka.webp";
// import morningSederImg from "../../assets/morning-seder.webp";
// import bbqImg from "../../assets/bbq.webp";
// import bowlingImg from "../../assets/bowling.webp";
// import escapeImg from "../../assets/escape-room.webp";

const About = () => {
  const InfoBoxes = () => {
    const activities = [
      {
        img: lsImg,
        alt: "Learning Seder",
        title: "Learning Seder",
        infoText:
          "Mekor Chaim is a unique community designed for young men in their 20s who are career-oriented. One of the key features that sets Mekor Chaim apart from other programs is its relatable rebbeim. The program's rebbeim are experienced and knowledgeable, and they understand the challenges that young men face when transitioning from yeshiva to the working world. The rebbeim provide guidance and support that is both practical and meaningful.",
        headingNumber: "1",
        textSide: "left",
        id: 0,
        infoLast: "",
      },
      {
        img: fiveTcImg,
        alt: "Five Towns Chaburah",
        title: "Five Towns Chaburah",
        infoText:
          "Mekor Chaim is a like-minded community. Members of the community share a common goal of balancing their careers with their Torah values, and this creates a sense of camaraderie that is both supportive and motivating. With Chavrusos available 24/7, members can always find someone to learn with, no matter what time of day it is. Mekor Chaim is a vibrant and dynamic community that provides a supportive environment for those seeking to live a balanced and fulfilling life.",
        headingNumber: "2",
        textSide: "right",
        id: 1,
        infoLast: "",
      },
      {
        img: bkVaadImg,
        alt: "Brooklyn Vaad",
        title: "Brooklyn Vaad",
        infoText:
          "Mekor Chaim offers a variety of social activities that foster a sense of camaraderie and provide members with opportunities to connect and unwind. These activities include baseball games, barbecues, and Shabbatons, among others. They provide a much-needed break from the demands of work and allow members to enjoy each other's company in a relaxed setting.",
        headingNumber: "3",
        textSide: "left",
        id: 2,
        infoLast: "",
      },

      {
        img: simchaImg,
        alt: "Mekor Chaim Simcha",
        title: "Mekor Chaim Simcha",
        infoText:
          "The program's emphasis on social activities is an important aspect of the community. These activities enable members to build strong relationships with each other and provide a support network that is essential when navigating the challenges of the working world. They also help members develop a sense of community and connection that is vital to maintaining a healthy work-life balance.",
        headingNumber: "4",
        textSide: "right",
        id: 3,
        infoLast: "",
      },
      {
        img: purimcImg,
        alt: "Purim Chagiga",
        title: "Purim Chagiga",
        infoText:
          "In addition to its programming, Mekor Chaim offers regular Hashkafa/Parsha Vaadim and Shiurim throughout the day. These sessions are designed to provide members with the Torah knowledge and spiritual guidance they need to navigate the challenges of the working world while staying true to their values. This is the true definition of being Kovea Itim, and allows guys the opportunity to be consistent in their learning.",
        headingNumber: "5",
        textSide: "left",
        id: 4,
        infoLast: "",
      },
      {
        img: shabbatonImg,
        alt: "Shabbaton",
        title: "Shabbaton",
        infoText:
          "In summary, Mekor Chaim is a comprehensive program that offers a supportive community, experienced rebbeim, and a wide range of programming to help young men balance their careers with their Torah values. With features like Chavrusos available 24/7, traveling chaburos, and regular Hashkafa/Parsha Vaadim and Shiurim throughout the day, Mekor Chaim is an ideal community for those looking to stay true to their Torah values while pursuing their career goals.",
        headingNumber: "6",
        textSide: "right",
        id: 5,
        infoLast: "info-box-last",
      },
    ];

    return activities.map((activity) => (
      <React.Fragment key={activity.id}>
        <div className={`${activity.textSide} info-box ${activity.infoLast}`}>
          <span>{activity.headingNumber}.</span>
          <h3 className={"info-text"}>{activity.infoText}</h3>
          <div className="vertical-line small-hidden"></div>
          <LazyLoad height={200} offset={400}>
            <img
              className="info-img"
              src={activity.img}
              alt={activity.alt}
              title={activity.title}
            ></img>
          </LazyLoad>
        </div>
        <div className="horizontal-line large-hidden"></div>
      </React.Fragment>
    ));
  };

  return (
    <section id="about">
      <div className="about-header-container">
        <h2 className="about-header">
          What Is&nbsp;<span>Mekor Chaim</span>?
        </h2>
      </div>
      <div className="info-container">
        <InfoBoxes />
      </div>
      <div className="founder-container">
        <h2 className="about-header about-header-last">
          Who Runs&nbsp;<span>Mekor Chaim</span>?
        </h2>
        <div className="founder-info">
          <div className="founder-img-container">
            <img src={founderImg} alt="Rabbi Blumberg"></img>
            <h4 className="founder-name">Rabbi Dov Blumberg</h4>
          </div>
          <div className="vertical-line small-hidden"></div>
          <div className="horizontal-line large-hidden"></div>
          <p className="founder-text">
            Under the tutelage of its Rosh HaYeshiva, HaRav Shaya Cohen,
            Shlit”a, Rabbi Blumberg spent over a decade learning and carefully
            absorbing the hashkafa of his Rebbeim in Yeshiva Zichon Aryeh.
            Towards the end of his years in Beis Medrash, he participated in Rav
            Cohen’s comprehensive teacher-training course.
            <br className="large-hidden"></br>
            <br className="large-hidden"></br>In 2018, Rabbi Blumberg founded
            Mekor Chaim. Rabbi Blumberg has a strong connection to ‘his guys’
            and provides them with a solid foundation to succeed in life as a
            Ben Torah in the workforce.
          </p>
        </div>
      </div>
      <div className="location-container">
        <h2 className="about-header about-header-last">
          Where is&nbsp;<span>Mekor Chaim</span>?
        </h2>
        <ul className="locations">
          <li>
            <h4>Brooklyn</h4>
            <div className="horizontal-line"></div>
            <a href="https://goo.gl/maps/2jA22C9UDbMrtDeR8">
              <i>1912 New York Ave.</i>
              <img
                className="map-logo"
                src={mapLogo}
                alt="1912 New York Ave."
              ></img>
            </a>
          </li>
          <li>
            <h4>Cedarhurst</h4>
            <div className="horizontal-line"></div>
            <a href="https://goo.gl/maps/FENmfRaTYEhBGrqG8">
              <i>545 Arbuckle Ave.</i>
              <img
                className="map-logo"
                src={mapLogo}
                alt="545 Arbuckle Ave."
              ></img>
            </a>
          </li>
          <li>
            <h4>Queens</h4>
            <div className="horizontal-line"></div>
            <a href="https://goo.gl/maps/SK2z2MVHB7ekp6J29">
              <i>141-56 73rd Ave.</i>
              <img
                className="map-logo"
                src={mapLogo}
                alt="141-56 73rd Ave."
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
