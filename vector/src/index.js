import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  App14, { App,App1, App10, App11, App12, App13, App15, App2, App3, App4, App5, App6, App7, App8, App9, ParentComponentWithCallback } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App1/>
    <App2/>
    <App3/>
    <App4/>
    <App5/>
    <App6/>
    <App7/>
    <App8/>
    <App9/>
    <App10/>
    <App11/>
    <App12/>
    <App13/>
    <App14/>
    <App15/>
    <ParentComponentWithCallback/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

