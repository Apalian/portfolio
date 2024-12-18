// App.js
import React from 'react';
import './App.css';
import Card from './components/Card/Card';


function App() {
    return (
        <div className="App">
            <Card
                title="Test"
                image={"/about-me.svg"}
                />
        </div>
    );
}

export default App;
