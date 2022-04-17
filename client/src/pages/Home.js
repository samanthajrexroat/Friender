import React from "react";
import { Link } from "react-router-dom";
import "../assets/index.css";

const Homepage = () => {
  return (
    <div className="background">
      <div className="home">
        <h1>Find Connections!</h1>
        <Link to="/SignUp">
          <button className="primary-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};
export default Homepage;
