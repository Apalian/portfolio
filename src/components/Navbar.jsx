// Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="#hero" className="navbar-link" onClick={() => handleScroll('hero')}>Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#about" className="navbar-link" onClick={() => handleScroll('about')}>About</a>
                </li>
                <li className="navbar-item">
                    <a href="#projects" className="navbar-link" onClick={() => handleScroll('projects')}>Work</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
