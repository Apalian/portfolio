import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="background-container">
                <div className="image-part"></div>
                <div className="gif-part"></div>
            </div>
            <div className="hero-content">
                <h1>Lespilette Colin</h1>
            </div>
        </section>
    );
};

export default Hero;
