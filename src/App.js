// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero id="hero" />
            <About id="about"/>
            <Skills id="skills"/>
            <Projects id="projects"/>
            <Contact id="contact"/>
        </div>
    );
}

export default App;
