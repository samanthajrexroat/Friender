import React from "react";
import "./modal.css";
// import Home from "../../pages/Home";
// import { useState } from "react";
import { Link } from "react-router-dom";
import useState from "react";
import { ADD_HOBBY } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const Hobbies = ({ userId }) => {
  const [hobby, setHobby] = useState("");
  const [addHobby] = useMutation(ADD_HOBBY);

  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log("submitted");

    try {
      const data = await addHobby({
        variables: { userId, hobby },
      });

      setHobby("");
    } catch (err) {
      console.error(err);
    }
    alert("Hobby added");
  };

  return (
    <div className="profileBackground">
      <div className="signInModal">
        <Link to="/me">
          <div className="closeIcon">ⓧ</div>
        </Link>
        <h2>Add A Hobby</h2>
        <p>one at a time</p>
        <form className="logInForm" onSubmit={handleFormSubmit}>
          <input
            className="rounded-input"
            type="text"
            id="hobby"
            name="hobby"
            placeholder="Hobby"
            value={hobby}
            onChange={event => setHobby(event.target.value)}
            required={true}
          />
          <Link to="/AddHobbies">
            <button className="secondary-btn" type="submit">
              Add Hobby
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Hobbies;
