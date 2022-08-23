import React from 'react';
import styles from "../css/About.module.css";
import profile from "../images/profile.jpg"
import { motion, useScroll } from 'framer-motion';

const About = () => {

    const animations = {
        slideRight: {
            x: 0,
            transition: {
                type: 'spring',
                bounce: 0.2,
                durantion: 1.5
            }
        }
    }

    return (
        <div id="about" className={styles.container}>
            <a>
                <h1>About Me: </h1>
                <motion.div
                    className={styles.cardContainer}
                    variants={animations}
                    initial={{ x: -500, }}
                    whileInView="slideRight"
                >
                    <div className={styles.imageContainer}>
                        <img src={profile} alt="" />
                    </div>

                    <p className={styles.card}>

                        <span>
                            I am a Full Stack developer, who has a passion for beautiful web design.
                            I am an eager, fast learner that is always looking for an exciting new challenge.
                        </span>

                    </p>

                </motion.div>
            </a>
        </div>
    );
}

export default About;