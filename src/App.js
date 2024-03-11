import React, { useState } from "react";
import "./App.css";
import Notestate from "./Context/Notes/Notestate";
import About from "./components/About";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
// dotenv.config("./.env");
function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <>
      <Notestate>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Home showalert={showalert} />} />
            <Route
              exact
              path="/about"
              element={<About showalert={showalert} />}
            />
            <Route
              exact
              path="/login"
              element={<Login showalert={showalert} />}
            />
            <Route
              exact
              path="/signup"
              element={<Signup showalert={showalert} />}
            />
          </Routes>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
