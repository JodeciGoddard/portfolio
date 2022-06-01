import React from 'react';
import "../css/About.css";
import profile from "../images/profile.jpg"

const About = () => {
    return (
        <div className="about-container">
            <a id="about">
                <h1>About Me</h1>
                <div className="card-container">
                    <p className="card">
                        <img src={profile} alt="" />
                        I am a Full Stack developer, who has a passion for beautiful web design.
                        I am an eager, fast learner that is always looking for an exciting new challenge.
                    </p>
                </div>
            </a>
        </div>
    );
}

export default About;