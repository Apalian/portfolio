import React from 'react';
import './Hero.css';
import { motion } from "framer-motion";

const Hero = () => {
    const text = "Lespilette Colin";

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                {text.split("").map((letter, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: i * 0.1
                        }}
                        key={i}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </div>
            <div className="background-container">
                <div className="image-part"></div>
            </div>
        </section>
    );
};

export default Hero;
