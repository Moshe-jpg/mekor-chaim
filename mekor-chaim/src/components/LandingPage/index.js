import React from "react";
import videoBg from "../../assets/video-bg-edited.mp4";

const LandingPage = () => {
    return (
        <section id="landingSection">
        <div className="overlay"></div>
        <video id="video" src={videoBg} autoPlay loop muted />
        <div className="landing-content">
          <h1 className="landing-header">Mekor Chaim</h1>
          <p className="landing-text">Life After Yeshiva</p>
        </div>
      </section>
    )
}

export default LandingPage;