import axios from "axios"
import { useState } from "react"

const Register =()=>{
    const [temp,setTemp]=useState({"_id":"","password":"","name":""})
    function fun(e){
        setTemp({...temp,[e.target.name]:e.target.value})
    }
    function fun1(){
        axios.post("http://localhost:5000/register",temp).then((res)=>console.log(res.data)).catch((err)=>console.log(err.message))
    }
    return(
        <div className="register"> 
        <h1>Please register</h1>
            <input type="text" placeholder="enter mail id " onChange={fun} name="_id"/>
            <input type="text" placeholder="enter name " onChange={fun} name="name"/>
            <input type="password" placeholder="Enter password" onChange={fun} name="password" value={temp.password} />
            <button onClick={fun1}>Register</button>


        </div>
    )
}
export default Register