
import './App.css';
import {legacy_createStore as createStore} from "redux"
// console.log(createStore)   //legacy_createStore(reducer, preloadedState, enhancer) {
//   //return createStore(reducer, preloadedState, enhancer) }

// console.log(typeof createStore);   //function 
// const reducer =()=>{
//   console.log('reducer') 
//   return {count:0}  //getState() treates this value
// }  
// let store= createStore(reducer)  
// console.log(store)  //{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}
// console.log(typeof store); //object 
// console.log("STATE :",store.getState());


const reducer=(state,action)=>{
  //console.log("reducer",state,action);  //reducer , uundefined , {type: '@@redux/INITw.0.w.4.1.c'}
  if(action.type=="increment") {
    return {count: state.count+1}
  }
  else if (action.type==="decrement") {
    return {count:state.count-1}
  }
  return {count:0}
  
}



let store=createStore(reducer);
store.subscribe(()=>{console.log("subrsciber 1",store.getState())})
store.subscribe(()=>{console.log("subscriber 2",store.getState())})
// console.log(store.getState());  //inital {count: 0}  returned by reducer  before that {type: '@@redux/INITw.0.w.4.1.c'}
// store.dispatch({type:"increment"})
function App() {
  const inc=()=>{store.dispatch({type:"increment"}); console.log(store.getState());}
  const dec=()=>{store.dispatch({type:"decrement"});console.log(store.getState());}
  return (
    <>
    <h1>USE REDUCER</h1>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>decrement</button>
    </>
  );
}

export default App;
