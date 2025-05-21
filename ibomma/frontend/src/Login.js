import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./App.css";
import axios from "axios";
import Context from "./Context";
function Login() {
  const {setActive}=useContext(Context)
  const [a, setA] = useState(false);
  const [temp, setTemp] = useState({ _id: "", password: "" });
  const navigate=useNavigate()
  function Fun(e) {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  }

  function Fun1() {
    axios
      .post(`http://localhost:5000/login`, temp)
      .then((res) => {
        alert(res.data.token);
       if(res.data.token){
         setA(true);
       setTimeout(() => {
        navigate("/")
        setActive("home")
         
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
      {a && <div className="success-msg">Login Successful</div>}
      <button onClick={Fun1}>Login</button>

      {/* Sign Up Link */}
      <p className="signup-text">
        Don't have an account?{" "}
        <Link to="/signup" className="signup-link" >
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default Login;
