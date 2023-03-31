import React, { useEffect, useRef } from "react";
import landingAnim from "../../helpers/landingAnim";
// import mcLogo from "../../assets/mekor-chaim-logo.webp";
// import videoBg from "../../assets/video-bg-edited.mp4";

const LandingPage = () => {
  const landRef = useRef(null);

  useEffect(() => {
    landingAnim(landRef.current);
  }, []);

  return (
    <section id="landing-page" ref={landRef}>
      <div className="landing-container">
        <h1 className="landing-header" title="Mekor Chaim">
          Mekor Chaim
        </h1>
        <div className="horizontal-line horizontal-line-first"></div>
        <p className="landing-text">Life After Yeshiva</p>
      </div>
    </section>
  );
};

export default LandingPage;
