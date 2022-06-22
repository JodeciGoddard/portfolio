import React from 'react';
import styles from "../css/Banner.module.css";
import Navbar from './Navbar';

const Banner = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.overlay}>
                <h1>Jodeci Goddard</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
        </div>
    );
}

export default Banner;