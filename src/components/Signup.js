import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleclick = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    });
    const note = await response.json();
    if (note.success) {
      ///save authtoken and redirect to home
      localStorage.setItem("token", note.authtoken);
      navigate("/");
      props.showalert("successfully created", "success");
    } else {
      props.showalert("Invalid data", "danger");
    }
  };
  return (
    <div className="container">
      <h2>Create an account to use Mynotebook</h2>
      <form onSubmit={handleclick}>
        <div className="form-group my-2">
          <label className="my-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={onChange}
            name="name"
          />
        </div>
        <div className="form-group my-2">
          <label className="my-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={onChange}
            name="email"
          />
        </div>
        <div className="form-group my-2">
          <label className="my-1" htmlFor="password">
            {" "}
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={onChange}
            name="password"
          />
        </div>
        <div className="form-group my-2">
          <label className="my-1" htmlFor="cpassword">
            Confirm Password
          </label>
          <input
            type="cpassword"
            className="form-control"
            id="cpassword"
            placeholder="Password"
            onChange={onChange}
            name="cpassword"
          />
        </div>
        <button type="submit" className="my-2 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
