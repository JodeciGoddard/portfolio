import React from 'react';
import "../css/Navbar.css";

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <a href="#about">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
            <a href="#" className='resume-link' >Download Resume</a>
        </div>
    );
}

export default Navbar;