import React from "react";
import "./modal.css";
import HobbyData from "./HobbyData";
// import Home from "../../pages/Home";
// import { useState } from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
// import { ADD_HOBBY } from "../../utils/mutations";
// import { useMutation } from "@apollo/client";

const Hobbies = () => {
  // const [hobby, setHobby] = useState("");
  // console.log(hobby);

  // let searchInput = e => {
  //   setHobby(e.target.value);
  // };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="profileBackground">
      <div className="hobbyModal">
        <Link to="/me">
          <div className="closeIcon">ⓧ</div>
        </Link>
        <h2>Search for a Hobby</h2>
        <h5 className="hobbiesContainer" key={HobbyData.id}>
          {HobbyData.filter(val => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.hobby.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map(({ id, hobby }) => {
            return (
              <div className="hobbyCard" key={id} value={id} name={hobby}>
                {hobby}
              </div>
            );
          })}
        </h5>

        <form className="logInForm">
          <input
            className="rounded-input"
            type="text"
            id="hobbyInput"
            name="hobby"
            placeholder="Search for a Hobby"
            required={true}
            // onChange={e => setHobby(e.target.value)}
            onChange={event => {
              setSearchTerm(event.target.value);
            }}
          />
          <Link to="/AddHobbies">
            <button className="secondary-btn" type="submit">
              Search Hobbies
            </button>
          </Link>
        </form>
        <p>
          Dont see your hobby? <br />
          <a
            href="mailto:AddHobby@Friender.com"
            target="_blank"
            rel="noreferrer"
          >
            Email us
          </a>
          ! We will add it!
        </p>
      </div>
    </div>
  );
};

export default Hobbies;
