import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; // 👈 For navigation

const Register = () => {
  const [temp, setTemp] = useState({ _id: "", password: "", name: "" });
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  }

  function handleRegister() {
    axios
      .post("http://localhost:5000/register", temp)
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
      })
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="register">
      <h1>Please Register</h1>
      <input
        type="text"
        placeholder="Enter mail ID"
        onChange={handleChange}
        name="_id"
        value={temp._id}
      />
      <input
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
        name="name"
        value={temp.name}
      />
      <input
        type="password"
        placeholder="Enter password"
        onChange={handleChange}
        name="password"
        value={temp.password}
      />

      {success && <div className="success-msg">Registration Successful!</div>}

      <button onClick={handleRegister}>Register</button>

      <p className="login-text">
        Already have an account?{" "}
        <Link to="/login" className="login-link">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
