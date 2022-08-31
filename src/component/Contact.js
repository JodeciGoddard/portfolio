import React from 'react';
import styles from '../css/Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 id="Contact">Contact </h1>
            <div className={styles.formContainer}>
                <div className={styles.left}>
                    <p>Phone: +64212393357 </p>
                    <p>Email: jodecig23@hotmail.com</p>
                    <p>Location: Auckland, New Zealand</p>
                    <a href="https://docs.google.com/document/d/1-Y-XC-egZzngyzfThIGhpCz6L--8Q0Ry/edit?usp=sharing&ouid=107704758589370832740&rtpof=true&sd=true"> Download Resume</a>
                </div>
                <div className={styles.right}>
                    <form action="">
                        <p>Send Message</p>
                        <input type="email" name="email" id="email" placeholder='Your email' />
                        <textarea placeholder='Message' name="message" id="message" >
                        </textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;