import React from "react";
import videoBg from "../../assets/video-bg.mp4";

const LandingPage = () => {
    return (
        <section id="landingSection">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="landing-content">
          <h1>Mekor Chaim</h1>
          <p>Life After Yeshiva</p>
        </div>
      </section>
    )
}

export default LandingPage;