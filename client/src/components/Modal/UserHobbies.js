import React, { useState } from "react";
import "./modal.css";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { ADD_HOBBY } from "../../utils/mutations";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import SearchResults from "../../pages/Profile/SearchResults";

const UserHobbies = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const [hobbyId, setHobbyId] = useState("");

  const userId = Auth.getProfile().data._id;
  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleClick = event => {
    const hobbyId = event.target.id;
    setHobbyId(hobbyId);
  };

  return (
    <>
      <h5>
        {user.hobbies.map(hobby => (
          <div
            id={hobby._id}
            value={hobby.hobbyName}
            className="hobbyCard"
            onClick={handleClick}
          >
            {hobby.hobbyName}
          </div>
        ))}
      </h5>
      <div>
        <SearchResults globalHobbyId={hobbyId} />
      </div>
    </>
  );
};

export default UserHobbies;
