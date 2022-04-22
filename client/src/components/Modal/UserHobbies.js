import React, { useState } from "react";
import "./modal.css";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { ADD_HOBBY } from "../../utils/mutations";

import Auth from "../../utils/auth";

const UserHobbies = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const userId = Auth.getProfile().data._id;
  const user = data?.me || data?.user || {};

  console.log(user);
  console.log(userId);
  if (loading) {
    return <div>Loading...</div>;
  }

  const onClick = event => {
    console.log(event.target.id);
  };

  return (
    <h5>
      {user.hobbies.map(hobby => (
        <div
          id={hobby._id}
          value={hobby.hobbyName}
          className="hobbyCard"
          onClick={onClick}
        >
          {hobby.hobbyName}
        </div>
      ))}
    </h5>
  );
};

export default UserHobbies;
