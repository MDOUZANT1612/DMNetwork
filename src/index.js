import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    return (
        <div className="app">
            <h1>Bienvenue sur DMN Network</h1>
            <p>Votre univers sportif et professionnel, façon Canal+ et Netflix.</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
