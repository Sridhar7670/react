import {Provider} from "react-redux"
import store from "./Store";
// import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import Product2 from "./Components/Product2";
import Product1 from "./Components/Product1";

// const Product1=()=>{
//     console.log("rendered prodcut 1");
//     const inc=()=>{
//         store.dispatch({type:"increment"})
//     }
//     return <button onClick={inc}>Add prodcut</button>
// }
// const Product2=()=>{
//     console.log("rendered prodcut 2");
//     const dec=()=>{store.dispatch({type:"decrement"})}
//     return <button onClick={dec}>Remove prodcut</button>
// }

// const Cart=()=>{
//     console.log("cart rendered ");
//     const [count,setCount]=useState(0)
//     useEffect(()=>{
//         store.subscribe(()=>{
//             console.log("count updated",store.getState());
//             setCount(store.getState().count)
//         })
//     },[])
//     return <h1>{count}</h1>
// }



const ReduxApp=()=>{
    return (
    <Provider store={store}>
        <Product1/>
        <Product2/>
        <Cart/>
    </Provider>
    )
}
export default ReduxApp;


/**
 * useSelector => useContext+useState  this is not making any reredners 
 * it only renders when there are only necessary 
 */