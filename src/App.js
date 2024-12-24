import React, {useContext} from 'react';
import './App.css'
import CardRow from './components/CardRow/CardRow';
import Hobbies from "./components/Modals/Hobbies";
import {ModalContext} from "./components/Modal/ModalContext";

const cardRow1 = [
    { },
    { },
    { },
    { },
    { },
    { },
    { },

];

const cardRow2 = [
    { },
    { },
    { },
    { },
    { },
    { },
    { },

];

const cardRow3 = [
    { content: <Hobbies/>, image: "/Escalade.svg" },
    { },
    { },
    { },
    { },
    { },
    { },
];

function App() {
    const { isModalOpen, modalContent, closeModal } = useContext(ModalContext);

    return (
        <div className="App">
            <main>
                <CardRow cardsData={cardRow1} delay={1}/>
                <CardRow cardsData={cardRow2} animation={"invertLoopMove"}/>
                <CardRow cardsData={cardRow3} delay={2}/>
            </main>
        </div>
    );
}

export default App;
