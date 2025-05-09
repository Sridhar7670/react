import { useState } from "react"
// import { useNavigate } from 'react-router-dom';
import axios from "axios"
function Login(){
const[temp,setTemp]=useState({"_id":"","password":""})
// let navigate=useNavigate()
function Fun(e){
    setTemp({...temp,[e.target.name]:e.target.value})
}
function Fun1(){
axios.post(`http://localhost:5000/login`,temp).then((res)=>{alert( res.data.token)}).catch((err)=>console.log(err.message))
}
    return(

        <div className="login">
            <h1>Please Login</h1>
            <input type="text" placeholder="Enter Mail id" onChange={Fun} name="_id" value={temp._id}/>
            <input type="password" placeholder="Enter password" onChange={Fun} name="password" value={temp.password} />
            {/* {a && <div> Login Sucessfull</div>} */}
            <button onClick={Fun1}>Login</button>

        </div>
    )
}
export default Login