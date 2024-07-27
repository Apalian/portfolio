import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#hero" className="navbar-logo">Mon Portfolio</a>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a href="#hero" className="navbar-link">Accueil</a></li>
                    <li className="navbar-item"><a href="#about" className="navbar-link">À propos</a></li>
                    <li className="navbar-item"><a href="#projects" className="navbar-link">Projets</a></li>
                    <li className="navbar-item"><a href="#contact" className="navbar-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
