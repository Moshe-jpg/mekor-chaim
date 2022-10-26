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
      img: bbqImg,
      alt: "barbecue",
      caption: "BBQ",
    },
    {
      img: bowlingImg,
      alt: "Bowling",
      caption: "Bowling",
    },
    {
      img: bkVaadImg,
      alt: "Brooklyn Vaad",
      caption: "Brooklyn Vaad",
    },
    {
      img: escapeImg,
      alt: "Escape Room",
      caption: "Escape Room",
    },
    {
      img: fiveTcImg,
      alt: "Five Towns Chaburah",
      caption: "Five Towns Chaburah",
    },
    {
      img: lsImg,
      alt: "Learning Seder",
      caption: "Learning Seder",
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
          <li><span>Relatable Rebbeim</span>✔</li>
          <li><span>Social Events</span>✔</li>
          <li><span>In-Shabbosim</span>✔</li>
          <li><span>Yuntif Retreats</span>✔</li>
          <li><span>Career Assistance</span>✔</li>
          <li><span>Shidduch Initiative</span>✔</li>
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
          <li><span>​Like-Minded Community</span>✔​</li>
          <li><span>Zoom Shiurim</span>✔</li>
          <li><span>Chavrusos 24/7</span>✔</li>
          <li><span>Traveling Chaburos</span>✔</li>
          <li><span>Hashkafa/Parsha Vaadim</span>✔</li>
          <li><span>Shiurim Throughout The Day</span>✔</li>
        </ul>
      </section>
    </>
  );
};

export default About;
