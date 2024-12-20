import React from 'react';
import './App.css'
import CardRow from './components/CardRow/CardRow';

const cardsData = [
    { title: "1", image: "/about-mee.svg" },
    { title: "2", image: "/about-mee.svg" },
    //{ title: "3", image: "/about-mee.svg" },
    //{ title: "4", image: "/about-mee.svg" },
    //{ title: "5", image: "/about-mee.svg" },
    //{ title: "6", image: "/about-mee.svg" },
    //{ title: "7", image: "/about-mee.svg" },
    //                <CardRow cardsData={cardsData} animate={"invertLoopMove"}/>
    //                 <CardRow cardsData={cardsData} delay={2}/>
];

function App() {
    return (
        <div className="App">
            <main>
                <CardRow cardsData={cardsData} delay={0}/>

            </main>
        </div>
    );
}

export default App;
