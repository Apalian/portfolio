import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Timeline from "./components/Timeline";
import Background from './components/Background';
import './App.css';
import DevBanner from "./components/DevBanner";

function App() {
    return (
        <div>
            <Background />
            <main className="App">
                <Navbar />
                <DevBanner />
                <Hero id="hero" />
                <About id="about" />
                <Skills id="skills" />
                <Timeline />
                <Projects id="projects"/>
                <Contact id="contact" />
            </main>
        </div>
    );
}

export default App;
