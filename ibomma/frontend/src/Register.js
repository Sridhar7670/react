import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [temp, setTemp] = useState({ _id: "", password: "", name: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  }

  function validateForm() {
    const newErrors = {};

    if (!temp._id.trim()) {
      newErrors._id = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(temp._id)) {
      newErrors._id = "Invalid email format";
    }

    if (!temp.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!temp.password.trim()) {
      newErrors.password = "Password is required";
    } else if (temp.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleRegister() {
    if (!validateForm()) return;

    axios
      .post("https://moviesbackend-tau.vercel.app/register", temp)
      .then((res) => {
        setMessage(res.data.msg);
        setIsError(false);
        setErrors({});
      })
      .catch((err) => {
        if (err.response && err.response.data.msg) {
          setMessage(err.response.data.msg);
          setIsError(true);
        } else {
          setMessage("Something went wrong");
          setIsError(true);
        }
      });
  }

  return (
    <div className="register">
      <h1>Please Register</h1>

      <label htmlFor="register-email" className="label-register">Email ID</label>
      <input
        type="text"
        id="register-email"
        placeholder="Enter mail ID"
        onChange={handleChange}
        name="_id"
        value={temp._id}
      />
      {errors._id && <p className="error_login">{errors._id}</p>}

      <label htmlFor="register-name" className="label-register">Name</label>
      <input
        type="text"
        id="register-name"
        placeholder="Enter name"
        onChange={handleChange}
        name="name"
        value={temp.name}
      />
      {errors.name && <p className="error_login">{errors.name}</p>}

      <label htmlFor="register-password" className="label-register">Password</label>
      <input
        type="password"
        id="register-password"
        placeholder="Enter password"
        onChange={handleChange}
        name="password"
        value={temp.password}
      />
      {errors.password && <p className="error_login">{errors.password}</p>}

      {message && (
        <div className={isError ? "error-msg" : "success-msg"}>{message}</div>
      )}

      <button onClick={handleRegister}>Register</button>

      <p className="login-text">
        Already have an account?{" "}
        <Link to="/login" className="login-link">Login</Link>
      </p>
    </div>
  );
};

export default Register;


