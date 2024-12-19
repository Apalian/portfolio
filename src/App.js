import React from 'react';
import './App.css'
import CardRow from './components/CardRow/CardRow';

const cardsData = [
    { title: "1", image: "/about-me.svg" },
    { title: "2", image: "/about-me.svg" },
    { title: "3", image: "/about-me.svg" },
    { title: "4", image: "/about-me.svg" },
    { title: "5", image: "/about-me.svg" },
    { title: "6", image: "/about-me.svg" },
    { title: "7", image: "/about-me.svg" },
];

function App() {
    return (
        <div className="App">
            <main>
                <CardRow cardsData={cardsData} delay={0}/>
                <CardRow cardsData={cardsData} delay={1}/>
                <CardRow cardsData={cardsData} delay={2}/>
            </main>
        </div>
    );
}

export default App;
