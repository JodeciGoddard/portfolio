import React from 'react';
import styles from '../css/Projects.module.css';
import { motion } from 'framer-motion';

const Projects = () => {

    const animations = {
        offScreenLeft: {
            x: -500,

        },
        offScreenRight: {
            x: 500,
        },
        slideRight: {
            x: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1,
            }
        },
        slideLeft: {
            x: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1,
            }
        }

    }

    return (
        <div className={styles.container}>
            <motion.a id="projects"
                variants={animations}
                initial="offScreenLeft"
                whileInView="slideRight"
            >
                <h1>Projects</h1>
            </motion.a>
            <motion.h3
                variants={animations}
                initial="offScreenRight"
                whileInView="slideLeft"
            >
                Some of the projects I have worked on include:
            </motion.h3>
        </div>
    );
}



export default Projects;