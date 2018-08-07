import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "./Assets/css/font.css";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
