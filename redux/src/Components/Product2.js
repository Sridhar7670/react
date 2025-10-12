import { useDispatch } from "react-redux";

const Product2=()=>{
    console.log("rendered Product 2");
    const dispatch=useDispatch();
    //dispatch is mandatory one and payload is not mandtory optional one 
    const dec=()=>{dispatch({type:"decrement",payload:3})}

    return <button onClick={dec}>Remove Prod</button>
}
export default Product2