import React from 'react'
import ReactDOM from 'react-dom/client'
import {createButton} from './App'
console.log('hello react ')

//method -1 

const h1=React.createElement('h1',{id:'test'},"hello h1 react")
const container=ReactDOM.createRoot(document.getElementById('container'))
container.render(h1)

//code snippet for react 17 and earlier 

// const h1=React.createElement('h1',{id:'test'},"hello h1 react")
// const root=document.getElementById('container')
// ReactDOM.render(h1,root)

const para=React.createElement('p',{id:'para'},"i am para ");
const bold=React.createElement('b',{className:'bold1'},"bold text here");
const span=React.createElement("span",null,"i am span")
const br=React.createElement('br',null,null)
const elem=React.createElement('div',{className:'test'},para,bold,br,span,br,createButton())

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(elem)

//insted doing all of these we can also do some things like this use (bable) -> jsx to react converter

{/* <div class="comtainer">
        <p>intro</p>
        <b>hello</b>
        <span>something </span>
    </div> */}
// it will auto convrt all thsee into react elems use this link "https://babeljs.io/repl"\

//javascript xml extedned markup language to javascript elements 

// to install bable into our folder we need to use npm i @babel/core @babel/preset-env @babel/preset-react 
//npm i babel-loader

const elem1=(<div id='test'>
    <p>INrto</p>
    <p>some sodi</p>
</div>)

const bable=ReactDOM.createRoot(document.getElementById('bable'))
bable.render(elem1)