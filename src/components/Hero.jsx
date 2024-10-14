import React from 'react';
import './Hero.css';
import { motion } from "framer-motion";

const Hero = () => {
    const text = "Framer Motion is a really cool tool".split(" ");

    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                {text.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: i / 10
                        }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                <h1>Lespilette Colin</h1>
            </div>
            <div className="background-container">
                <div className="image-part"></div>
            </div>
        </section>
    );
};

export default Hero;
