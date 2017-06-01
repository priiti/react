import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(
    <App>
        <h1>Tere</h1>
    </App>,
    document.getElementById('root'));
registerServiceWorker();
