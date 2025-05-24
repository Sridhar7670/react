import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"; // 👈 For navigation

const Register = () => {
  const [temp, setTemp] = useState({ _id: "", password: "", name: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    setTemp({ ...temp, [e.target.name]: e.target.value });
  }

  function handleRegister() {
    axios
      .post("https://react-8ypw.vercel.app/register", temp)
      .then((res) => {
        setMessage(res.data.msg);
        setIsError(false);
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

      {message && (
        <div className={isError ? "error-msg" : "success-msg"}>{message}</div>
      )}

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
