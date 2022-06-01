import React from 'react';
import "../css/Banner.css";
import Navbar from './Navbar';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Navbar />
            <div className="overlay">
                <h1>Jodeci Goddard</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
        </div>
    );
}

export default Banner;