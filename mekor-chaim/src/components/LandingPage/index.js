import React from "react";
import videoBg from "../../assets/video-bg-edited.mp4";

const LandingPage = () => {
    return (
        <section id="landingSection">
        <div className="overlay"></div>
        <div
        dangerouslySetInnerHTML={{ __html: `
        <video
          loop
          muted
          autoPlay
          playsInline
          src="${videoBg}"
          id='video'"
          type="video/mp4"
        />,
      ` }}
        ></div>
        <div className="landing-content">
          <h1 className="landing-header">Mekor Chaim</h1>
          <p className="landing-text">Life After Yeshiva</p>
        </div>
      </section>
    )
}

export default LandingPage;