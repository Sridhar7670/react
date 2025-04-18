import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
App()

// Create a root DOM element react 18+
const h1=React.createElement('h1',{id:"test"},"hello react ")
const container=ReactDOM.createRoot(document.getElementById('container'))
container.render(h1)

