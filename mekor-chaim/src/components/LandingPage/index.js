import React from "react";
// import mcLogo from "../../assets/mekor-chaim-logo.webp";
// import videoBg from "../../assets/video-bg-edited.mp4";

const LandingPage = () => {
  return (
    <section id="landing-page">
      <div className="landing-container">
        <h1 className="landing-header" title="Mekor Chaim">
          {/* <img src={mcLogo}></img> */}
          Mekor Chaim
        </h1>
        <div className="horizontal-line"></div>
        <p className="landing-text">Life After Yeshiva</p>
      </div>
    </section>
  );
};

export default LandingPage;
