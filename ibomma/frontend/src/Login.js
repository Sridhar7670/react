import React,{ useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./App.css";
import axios from "axios";
import Context from "./Context";
import Cookies from "js-cookie"


function Login() {
  const { setActive } = useContext(Context);
  const [message, setMessage] = useState("");
  const [a, setA] = useState(false);
  const [temp, setTemp] = useState({ _id: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function validate() {
    const errs = {};
    if (!temp._id.includes("@")) {
      errs._id = "Invalid email format";
    }
    if (temp.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    return errs;
  }

  function Fun(e) {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  }

  const Fun1 = async () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    try {
      const res = await axios.post(`https://moviesbackend-tau.vercel.app/login`, temp);
      setMessage(res.data.msg);
      if (res.data.token) {
        Cookies.set("token", JSON.stringify(res.data.token), { expires: 1 });
        Cookies.set("name", JSON.stringify(res.data.name), { expires: 1 });
        setA(true);
        setTimeout(() => {
          navigate("/");
          setActive("home");
        }, 1000);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="login">
      <h1>Please Login</h1>
      <label htmlFor="email" className="label-login">Email ID</label>
      <input
        type="text"
        placeholder="Enter Mail ID"
        name="_id"
        id="email"
        value={temp._id}
        onChange={Fun}
      />
      {errors._id && <p className="error_login">{errors._id}</p>}
      <label htmlFor="password" className="label-login">Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        id="password"
        value={temp.password}
        onChange={Fun}
      />
      {errors.password && <p className="error_login">{errors.password}</p>}

      {message && <div className={a ? "success-msg" : "error-msg"}>{message}</div>}
      <button onClick={Fun1}>Login</button>

      <p className="signup-text">
        Don't have an account? <Link to="/register" className="signup-link">Sign up</Link>
      </p>
    </div>
  );
}


export default React.memo(Login);
