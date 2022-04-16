import React from "react";
import "../assets/index.css";
import Modal from "../components/Modal/Modal";
import Nav from "../components/Navbar/Nav";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const authToken = false;
  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="background">
      <Nav setShowModal={setShowModal} showModal={showModal} />
      <div className="home">
        <h1>Let's Connect!</h1>
        <button className="primary-btn" onClick={handleClick}>
          {authToken ? "Signout" : "Create Account"}
        </button>
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default Home;
