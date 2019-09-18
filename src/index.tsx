import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import { App } from './app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('shell'));
serviceWorker.register();
