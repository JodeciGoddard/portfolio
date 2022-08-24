import React from 'react';
import styles from '../css/AnimatedImages.module.css';
import { motion } from 'framer-motion'

const AnimatedImages = ({ leftImage, middleImage, rightImage }) => {

    const container = {
        initial: { opacity: 1 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const animations = {
        left: { x: -500 },
        right: { x: 200 },
        slideH: {
            x: 0,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.6,
            }
        },
        up: { y: -300, opacity: 0 },
        down: { y: 300, opacity: 0 },
        slideV: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.6,
            }
        },
        scale: {
            scale: 1.5,
            zIndex: 3,
            borderRadius: '20px',
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 0.6,
            }
        }
    }

    return (
        <motion.div className={styles.container}
            variants={container}
            initial="initial"
            animate="animate"
        >
            <div className={styles.topContainer}>
                <motion.div className={`${styles.leftImage} ${styles.imageContainer}`}
                    variants={animations}
                    initial="left"
                    whileInView="slideH"
                    whileTap="scale"
                    viewport={{ once: true }}
                >
                    <img src={leftImage} alt="" />
                </motion.div>
                <motion.div className={`${styles.rightImage} ${styles.imageContainer}`}
                    variants={animations}
                    initial="right"
                    whileInView="slideH"
                    whileTap="scale"
                    viewport={{ once: true }}
                >
                    <img src={rightImage} alt="" />
                </motion.div>
            </div>

            <motion.div className={`${styles.middleImage} ${styles.imageContainer}`}
                variants={animations}
                initial="down"
                whileInView="slideV"
                whileTap="scale"
                viewport={{ once: true }}
            >
                <img src={middleImage} alt="" />
            </motion.div>

        </motion.div>
    );
}

export default AnimatedImages;