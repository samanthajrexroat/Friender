import React from "react";
import "./nav.css";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Nav = () => {
  const authToken = true;

  return (
    <nav>
      <div className="logoContainer">
        <h1>
          <TiThMenuOutline /> Friender®{" "}
        </h1>
        <div className="inline">
          <input
            className="rounded-input"
            type="text"
            placeholder="Friend Search"
          />
          <button className="btn-grad">SEARCH </button>
        </div>
      </div>

      <Link to="/LogIn">
        <button className="primary-btn logIn">
          {authToken ? "Signout" : "Log In"}
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
