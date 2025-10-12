import { useDispatch } from "react-redux";

const Product1=()=>{
    console.log("rendered Product 1");
    const dispatch=useDispatch();

    const inc=()=>{dispatch({type:"increment"})}

    return <button onClick={inc}>Add Prod</button>
}
export default Product1