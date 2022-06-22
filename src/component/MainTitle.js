import React from 'react';
import styles from "../css/MainTitle.module.css";

const MainTitle = ({ title, subtitle, blurb }) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{blurb}</p>
        </div>
    );
}

export default MainTitle;