import React from "react";
import "./modal.css";
import { useQuery } from "@apollo/client";
import { QUERY_HOBBIES } from "../../utils/queries";
import { Link } from "react-router-dom";
import { useState } from "react";

const Hobbies = () => {
  const { loading, data } = useQuery(QUERY_HOBBIES);
  const hobbies = data?.hobbies || [];
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="profileBackground">
      <div className="hobbyModal">
        <Link to="/me">
          <div className="closeIcon">ⓧ</div>
        </Link>
        <h2>Search for a Hobby</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <h5 className="hobbiesContainer" key={hobbies.id}>
            {hobbies
              .filter(val => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.hobbyName.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(({ id, hobbyName }) => {
                return (
                  <div
                    className="hobbyCard"
                    key={id}
                    value={id}
                    name={hobbyName}
                  >
                    {hobbyName}
                  </div>
                );
              })}
          </h5>
        )}
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
          <Link to="/Me">
            <button className="secondary-btn" type="submit">
              BACK TO PROFILE
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
