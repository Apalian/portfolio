// Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    // Fonction pour faire défiler vers une section
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
                    <span className="navbar-link" onClick={() => handleScroll('hero')}>Accueil</span>
                </li>
                <li className="navbar-item">
                    <span className="navbar-link" onClick={() => handleScroll('about')}>À propos</span>
                </li>
                <li className="navbar-item">
                    <span className="navbar-link" onClick={() => handleScroll('skills')}>Compétences</span>
                </li>
                <li className="navbar-item">
                    <span className="navbar-link" onClick={() => handleScroll('timeline')}>Timeline</span>
                </li>
                <li className="navbar-item">
                    <span className="navbar-link" onClick={() => handleScroll('projects')}>Projets</span>
                </li>
                <li className="navbar-item">
                    <span className="navbar-link" onClick={() => handleScroll('contact')}>Contact</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
