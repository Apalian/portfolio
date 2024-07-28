import React, { useEffect } from 'react';
import { animate } from 'popmotion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Timeline from "./components/Timeline";
import './App.css';

function App() {
    const shapes = Array.from({ length: 128 }, (_, i) => ({
        id: i,
        top: Math.random() * 90, // Initial position as a percentage of the viewport height
        left: Math.random() * 90, // Initial position as a percentage of the viewport width
        size: Math.random() * 60 + 20, // Size between 20px and 80px
        opacity: Math.random() * 0.3 + 0.1 // Opacity between 0.1 and 0.4
    }));

    useEffect(() => {
        shapes.forEach(shape => {
            animate({
                from: { top: shape.top, left: shape.left },
                to: { top: Math.random() * 90, left: Math.random() * 90 },
                duration: Math.random() * 10000 + 10000, // Duration between 10s and 20s
                repeat: Infinity,
                repeatType: 'mirror',
                onUpdate: ({ top, left }) => {
                    const element = document.getElementById(`shape-${shape.id}`);
                    if (element) {
                        element.style.top = `${top}vh`;
                        element.style.left = `${left}vw`;
                    }
                }
            });
        });
    }, [shapes]);

    return (
        <div>
            <div className="shapes-container">
                {shapes.map(shape => (
                    <div
                        key={shape.id}
                        id={`shape-${shape.id}`}
                        className="shape"
                        style={{
                            top: `${shape.top}vh`,
                            left: `${shape.left}vw`,
                            width: `${shape.size}px`,
                            height: `${shape.size}px`,
                            opacity: shape.opacity
                        }}
                    ></div>
                ))}
            </div>
            <main className="App">
                <Navbar />
                <Hero id="hero" />
                <About id="about" />
                <Skills id="skills" />
                <Timeline />
                <Projects id="projects" />
                <Contact id="contact" />
            </main>
        </div>
    );
}

export default App;
