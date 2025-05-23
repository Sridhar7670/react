import React,{ useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./App.css";
import axios from "axios";
import Context from "./Context";
import Cookies from "js-cookie"


function Login() {
  const {setActive}=useContext(Context)
  const [message, setMessage] = useState("");
  const [a,setA]=useState(false)
  const [temp, setTemp] = useState({ _id: "", password: "" });
  const navigate=useNavigate()
  function Fun(e) {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  }

  const Fun1=async()=> {
    axios
      .post(`https://moviesbend.vercel.app/login`, temp)
      .then((res) => {
      setMessage(res.data.msg);

      if (res.data.token) {
        const sendtoken= JSON.stringify(res.data.token)
        Cookies.set('token',sendtoken,{expires:1})
        setA(true);
        setTimeout(() => {
          navigate("/");
          setActive("home");
        }, 1000);
      }
        })
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="login">
      <h1>Please Login</h1>
      <input
        type="text"
        placeholder="Enter Mail id"
        onChange={Fun}
        name="_id"
        value={temp._id}
      />
      <input
        type="password"
        placeholder="Enter password"
        onChange={Fun}
        name="password"
        value={temp.password}
      />
      {message && <div className={a ? "success-msg" : "error-msg"}>{message}</div>}
      <button onClick={Fun1}>Login</button>

      {/* Sign Up Link */}
      <p className="signup-text">
        Don't have an account?{" "}
        <Link to="/register" className="signup-link" >
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default React.memo(Login);
