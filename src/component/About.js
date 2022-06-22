import React from 'react';
import styles from "../css/About.module.css";
import profile from "../images/profile.jpg"

const About = () => {
    return (
        <div className={styles.container}>
            <a id="about">
                <h1>About Me</h1>
                <div className={styles.cardContainer}>
                    <p className={styles.card}>
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