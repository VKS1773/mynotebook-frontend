import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  let navigate = useNavigate();
  const handleclick = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            MyNoteBook
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-target="#navbarSupportedContent"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button> */}
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="navbar-toggler"
            >
              Login/signup
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link
                class={`dropdown-item ${
                  location.pathname === "/login" ? "active" : ""
                }`}
                to="/login"
              >
                Login
              </Link>
              <Link
                class={`dropdown-item ${
                  location.pathname === "/signup" ? "active" : ""
                }`}
                to="/signup"
              >
                SignUp
              </Link>
              <Link
                onClick={handleclick}
                class={`dropdown-item ${
                  location.pathname === "/logout" ? "active" : ""
                }`}
                to="/login"
              >
                LogOut
              </Link>
              <Link className="dropdown-item" to="/">
                Home
              </Link>
              <Link className="dropdown-item" to="/about">
                About
              </Link>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link  ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="mx-2"></div>
            {!localStorage.getItem("token") ? (
              <form className="d-flex " role="search">
                <Link
                  className="btn btn-primary mx-1"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-1"
                  to="/signup"
                  role="button"
                >
                  signup
                </Link>
              </form>
            ) : (
              <button onClick={handleclick} className="btn btn-primary">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

/* <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="navbar-toggler"
            >
              Login/signup
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link
                class={`dropdown-item ${
                  location.pathname == "/login" ? "active" : ""
                }`}
                to="/login"
              >
                Login
              </Link>
              <Link
                class={`dropdown-item ${
                  location.pathname == "/signup" ? "active" : ""
                }`}
                to="/signup"
              >
                SignUp
              </Link>
              <Link
                onClick={handleclick}
                class={`dropdown-item ${
                  location.pathname == "/logout" ? "active" : ""
                }`}
                to="/login"
              >
                LogOut
              </Link>
              <Link className="dropdown-item" to="/">
                Home
              </Link>
              <Link className="dropdown-item" to="/about">
                About
              </Link>
            </div>
          </div> */
