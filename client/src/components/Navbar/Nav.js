import React from "react";

import "./nav.css";

const Nav = () => {
  const handleClick = () => {
    console.log("NEED TO SET UP THIS ONCLICK");
  };

  return (
    <nav>
      <div className="logoContainer">
        <h1> Friender </h1>
      </div>

      <button className="primary-btn" onClick={handleClick}>
        Log in
      </button>
    </nav>
  );
};

export default Nav;
