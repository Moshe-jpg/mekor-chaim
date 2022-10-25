import React from "react";
import videoBg from "../../assets/video-bg.mp4";
import whoWeAreImg from "../../assets/who-we-are-img.webp";


const About = () => {
  return (
    <>
      <section>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="landing-content">
          <h1>Mekor Chaim</h1>
          <p>Life After Yeshiva</p>
        </div>
      </section>
      <section id="about">
        <div className="about-content">
          <div className="who-we-are-text">
            <h2><span>Who We Are</span></h2>
            <p>
              Mekor Chaim is a community for young men in their 20’s with
              career-oriented schedules. Our multitude of offerings &
              programming fully service every aspect of life after yeshiva
              providing the balance necessary for our talmidim, no matter their
              schedule or location, to stay fully focused on their careers while
              continuing on the path of true bnei torah.
            </p>
          </div>
          <div className="who-we-are-img">
            <img src={whoWeAreImg} alt="Mekor Chaim group learning"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
