import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import {Apk,App,app, Card} from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
let elem = <h1>Welcome to React</h1>;
root.render(
    <React.StrictMode>
        {elem}
        <Apk id="abc" className="some"/>  
        {/* these are react elemnts  */}
        <App />
        {app}
        <Card id="card_1" text="hi bhaai" lastseen="3days ago"/>
        
    </React.StrictMode>
);
