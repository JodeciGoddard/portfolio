import React from 'react';
import styles from '../css/Projects.module.css';

const Projects = ({ children }) => {
    return (
        <div className={styles.container}>
            <a id="projects">
                <h1>Projects</h1>
            </a>
            <h3>Some of the projects I have worked on include:</h3>
            <div style={styles.childContainer}>
                {children}
            </div>
        </div>
    );
}

export default Projects;