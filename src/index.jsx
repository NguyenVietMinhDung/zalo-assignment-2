import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration } from 'react-grid-system';
import './index.scss';
import './assets/images/favicon.png';
import App from './components/App';

setConfiguration({ maxScreenClass: 'xl' });

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
