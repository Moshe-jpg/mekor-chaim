import { React, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bbqImg from "../../assets/bbq.webp";
import bowlingImg from "../../assets/bowling.webp";
import bkVaadImg from "../../assets/brooklyn-vaad.webp";
import escapeImg from "../../assets/escape-room.webp";
import fiveTcImg from "../../assets/five-towns-chabura.webp";
import lsImg from "../../assets/learning-seder.webp";
import simchaImg from "../../assets/mekor-chaim-simcha.webp";
import melavehhMalkaImg from "../../assets/melaveh-malka.webp";
import morningSederImg from "../../assets/morning-seder.webp";
import purimcImg from "../../assets/purim-chagiga.webp";
import purimSeudaImg from "../../assets/purim-seuda.webp";
import shabbatonImg from "../../assets/shabbaton.webp";
import softballImg from "../../assets/softball-game.webp";
import zoomImg from "../../assets/zoom-seder.webp";
import founderImg from "../../assets/founder.webp";

const About = () => {
  let bSize = {
    backgroundSize: "cover",
  };

  let bPosition = {
    backgroundPosition: "50%",
  };

  let bHeight = {
    minHeight: "100%",
  };

  let bWidth = {
    minWidth: "100%",
  };

  const [activities] = useState([
    {
      img: bkVaadImg,
      alt: "Brooklyn Vaad",
      caption: "Brooklyn Vaad",
    },
    {
      img: bbqImg,
      alt: "barbecue",
      caption: "BBQ",
    },
    {
      img: fiveTcImg,
      alt: "Five Towns Chaburah",
      caption: "Five Towns Chaburah",
    },
    {
      img: bowlingImg,
      alt: "Bowling",
      caption: "Bowling",
    },
    {
      img: lsImg,
      alt: "Learning Seder",
      caption: "Learning Seder",
    },
    {
      img: escapeImg,
      alt: "Escape Room",
      caption: "Escape Room",
    },

    {
      img: simchaImg,
      alt: "Mekor Chaim Simcha",
      caption: "Mekor Chaim Simcha",
    },
    {
      img: melavehhMalkaImg,
      alt: "Melaveh Malka",
      caption: "Melaveh Malka",
    },
    {
      img: morningSederImg,
      alt: "Morning Seder",
      caption: "Morning Seder",
    },
    {
      img: purimcImg,
      alt: "Purim Chagiga",
      caption: "Purim Chagiga",
    },
    {
      img: purimSeudaImg,
      alt: "Purim Seuda",
      caption: "Purim Seuda",
    },
    {
      img: shabbatonImg,
      alt: "Shabbaton",
      caption: "Shabbaton",
    },
    {
      img: softballImg,
      alt: "Softball Game",
      caption: "Softball Game",
    },
    {
      img: zoomImg,
      alt: "Zoom Seder",
      caption: "Zoom Seder",
    },
  ]);

  return (
    <>
      <section id="about">
        <article className="who-we-are">
          <h2>
            <span>Who We Are</span>
          </h2>
          <p>
            Mekor Chaim is a community for young men in their 20’s with
            career-oriented schedules. Our multitude of offerings & programming
            fully service every aspect of life after yeshiva providing the
            balance necessary for our talmidim, no matter their schedule or
            location, to stay fully focused on their careers while continuing on
            the path of true bnei torah.
          </p>
        </article>
      </section>
      <section id="offers">
        <h2>
          <span>What We Offer</span>
        </h2>
        <ul>
          <li>
            <span>Relatable Rebbeim</span>✔
          </li>
          <li>
            <span>Social Events</span>✔
          </li>
          <li>
            <span>In-Shabbosim</span>✔
          </li>
          <li>
            <span>Yuntif Retreats</span>✔
          </li>
          <li>
            <span>Career Assistance</span>✔
          </li>
          <li>
            <span>Shidduch Initiative</span>✔
          </li>
        </ul>
        <article className="what-we-offer">
          <Carousel fade>
            <div className="carousel-overlay"></div>
            {activities.map((activity) => (
              <Carousel.Item>
                <div
                  className="d-block"
                  style={{
                    background: `url(${activity.img})`,
                    ...bSize,
                    ...bPosition,
                    ...bHeight,
                    ...bWidth,
                  }}
                  alt={activity.alt}
                ></div>
                <Carousel.Caption>
                  <h3>{activity.caption}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </article>
        <ul>
          <li>
            <span>​Like-Minded Community</span>✔​
          </li>
          <li>
            <span>Zoom Shiurim</span>✔
          </li>
          <li>
            <span>Chavrusos 24/7</span>✔
          </li>
          <li>
            <span>Traveling Chaburos</span>✔
          </li>
          <li>
            <span>Hashkafa/Parsha Vaadim</span>✔
          </li>
          <li>
            <span>Shiurim Throughout The Day</span>✔
          </li>
        </ul>
      </section>
      <section id="founder">
        <div className="founder-card">
          <div className="founder-info">
            <h2>
              <span className="blue">Rabbi Dov Blumberg</span>
              <br></br>
              <br></br>
              <span className="orange">Founder</span>
            </h2>
            <p className="founder-desc">
              Under the tutelage of its Rosh haYeshiva, haRav Shaya Cohen,
              shlit”a, Rabbi Blumberg spent over a decade learning and carefully
              absorbing the hashkafa of his rebbeim in Yeshiva Zichon Aryeh.
              Towards the end of his years in Beis Medrash, he participated in
              Rav Cohen’s comprehensive teacher-training course. in 2018, Rabbi
              Blumberg founded Mekor Chaim. Rabbi Blumberg has a strong
              connection to ‘his guys’ and is providing them with a solid
              foundation to succeed in life as a ben Torah in the workforce.
            </p>
          </div>
          <div className="founder-pic">
            <img src={founderImg} alt="Rabbi Dov Blumberg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
