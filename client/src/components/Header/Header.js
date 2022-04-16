import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <a className="nav-btn">
          <h1>FRIENDER</h1>
        </a>
        <a className="nav-btn"> Learn </a>
        <a className="nav-btn"> Safety </a>
        <a className="nav-btn"> Support </a>
        <div className="btn">LOG IN</div>
      </div>
    </>
  );
};

export default Header;
