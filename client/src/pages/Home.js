import React from "react";
import { Link } from "react-router-dom";
import "../assets/index.css";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <div className="homepageGrid">
      <div className="background">
        <div className="home HPdiv1">
          <h1>Find Connections!</h1>
          <Link to="/SignUp">
            <button className="primary-btn">Sign Up</button>
          </Link>
        </div>
      </div>
      <div className="HPdiv2">
        <Footer />
      </div>
    </div>
  );
};
export default Homepage;
