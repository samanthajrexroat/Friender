import React, { useState } from "react";
import "./modal.css";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { ADD_HOBBY } from "../../utils/mutations";
import Auth from "../../utils/auth";
import SearchResults from "../../pages/Profile/SearchResults";

export default function UserHobbies() {
  const { loading, data } = useQuery(QUERY_ME);

  const userId = Auth.getProfile().data._id;
  const user = data?.me || data?.user || {};

  console.log(user);
  console.log(userId);
  if (loading) {
    return <div>Loading...</div>;
  }

  const hobbyQueryId = event => {
    // console.log(event.target.id);
    const hobbyQueryId = event.target.id;
    console.log(hobbyQueryId);
  };

  return (
    <>
      <h5>
        {user.hobbies.map(hobby => (
          <div
            id={hobby._id}
            value={hobby.hobbyName}
            className="hobbyCard"
            onClick={hobbyQueryId}
          >
            {hobby.hobbyName}
          </div>
        ))}
      </h5>
      <SearchResults hobbyQueryId={hobbyQueryId}></SearchResults>
    </>
  );
}

// export default UserHobbies;
