import React from 'react';
import styles from "../css/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <a href="#about">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
            <a href="#" className={styles.link} >Download Resume</a>
        </div>
    );
}

export default Navbar;