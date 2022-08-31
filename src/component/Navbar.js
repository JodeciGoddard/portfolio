import React from 'react';
import styles from "../css/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#Contact">Contact</a>
            <a href="https://docs.google.com/document/d/1-Y-XC-egZzngyzfThIGhpCz6L--8Q0Ry/edit?usp=sharing&ouid=107704758589370832740&rtpof=true&sd=true" className={styles.link} >Download Resume</a>
        </div>
    );
}

export default Navbar;