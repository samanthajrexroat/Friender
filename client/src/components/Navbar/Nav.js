import React from "react";
import "./nav.css";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const Nav = ({ setShowSignInModal, showSignInModal }) => {
  const handleClick = () => {
    setShowSignInModal(true);
  };

  return (
    <nav>
      <div className="logoContainer">
        <h1>
          <TiThMenuOutline /> Friender{" "}
        </h1>
      </div>
      <Link to="/LogIn" onClick={handleClick} disabled={showSignInModal}>
        <button className="primary-btn logIn">Log in</button>
      </Link>
    </nav>
  );
};

export default Nav;
