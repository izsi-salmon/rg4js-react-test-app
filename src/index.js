import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initRaygun, onBeforeSend, setUser, generateUser } from './errorMonitoring';
import { generateRandomUser } from './dataGeneration';

initRaygun({
  apiKey: '5NhsJzTwlsaJ00Q5wLzwA'
});

// Log payload before send
onBeforeSend();

function initUser(){
  var user = generateRandomUser();

  setUser(user.email, user.firstName, user.fullName);
}

initUser();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
