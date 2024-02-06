import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credential, setCredential] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_DATABASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credential.email,
          password: credential.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      ///save authtoken and redirect to home
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showalert("Logged in seccessfully", "success");
    } else {
      props.showalert("Invalid credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handlesubmit}>
        <h2>Login to continue to Mynotebook</h2>
        <div className="form-group my-1">
          <label className="my-1" htmlFor="email ">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={credential.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group my-2">
          <label className="my-1" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credential.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
