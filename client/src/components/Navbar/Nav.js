import React from "react";
import "./nav.css";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";



const Nav = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav>
      <div className="logoContainer">
        <h1>
          <TiThMenuOutline /> Friender®{" "}
        </h1>
       
        {/* <div className="inline">
          <input
            className="rounded-input"
            type="text"
            placeholder="Friend Search"
          />
          <button className="btn-grad">SEARCH </button>
        </div> */}
      </div>

      {Auth.loggedIn() ? (
        <>
          <Link className="primary-btn me" to="/me">
            View My Profile
          </Link>
          <button className="primary-btn logout" onClick={logout} to="/">
            Logout
          </button>
        </>

      ): (
        <>
        <Link className="btn btn-lg btn-primary m-2" to="/LogIn">
          LogIn
        </Link>
        <Link className="btn btn-lg btn-light m-2" to="/SignUp">
          Signup
        </Link>
      </>
      )}
   
    </nav>
   );
};

export default Nav;
