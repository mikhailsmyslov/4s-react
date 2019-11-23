import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'holderjs';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
