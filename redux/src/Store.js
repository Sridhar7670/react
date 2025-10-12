//crates and exports store object 

import { legacy_createStore as createStore } from "redux";

const reducer=(state,action)=>{
    if(action.type=="increment") {
    return {count: state.count+1}
  }
  else if (action.type==="decrement") {
    return {count:state.count- 1}
    // return {count:state.count- action.payload}
  }
  return {count:0}

}
let store=createStore(reducer);
console.log(reducer,store)
export default store