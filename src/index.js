import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "./Assets/css/font.css";
import registerServiceWorker from './registerServiceWorker';

const NODE_DOM = document.getElementById('root')
ReactDOM.render(
    <App />, 
    NODE_DOM
);
registerServiceWorker();
