import React from "react";
import videoBg from "../../assets/video-bg.mp4"

const About = () => {
    return (
        <section className="about-section">
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <h1>Mekor Chaim</h1>
                <p>Life After Yeshiva</p>
            </div>
        </section>
    )
}

export default About;