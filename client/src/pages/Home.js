import React from "react";
import "../assets/index.css";
import Nav from "../components/Navbar/Nav";

const Home = () => {
  const authToken = true;
  const handleClick = () => {
    console.log("NEED TO SET UP THIS ONCLICK");
  };

  return (
    <>
      <div className="background">
        <Nav />
        <div className="home">
          <h1>HOME</h1>
          <button className="primary-btn" onClick={handleClick}>
            {authToken ? "Signout" : "Create Account"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
