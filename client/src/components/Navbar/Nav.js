import React from "react";

import "./nav.css";

const Nav = ({ setShowModal, showModal }) => {
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <nav>
      <div className="logoContainer">
        <h1> Friender </h1>
      </div>

      <button
        className="primary-btn"
        onClick={handleClick}
        disabled={showModal}
      >
        Log in
      </button>
    </nav>
  );
};

export default Nav;
