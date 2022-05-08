import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initRaygun, onBeforeSend } from './errorMonitoring';

// initialising Raygun
// eslint-disable-next-line no-undef
// initRaygun({
//   apiKey: 'gNO6NrncN4Wx8omuxOmyLw'
// });
//
// onBeforeSend();

// initRaygun({
//   apiKey: 'gNO6NrncN4Wx8omuxOmyLw',
//   rg4js: rg4js
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

rg4js('apiKey', 'gNO6NrncN4Wx8omuxOmyLw');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
