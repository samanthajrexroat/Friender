import React, { useState } from "react";
import "./modal.css";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import { ADD_HOBBY } from "../../utils/mutations";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import LogIn from "./LogIn";

const UserHobbies = () => {
  const { loading, data } = useQuery(QUERY_ME);

  const userId = Auth.getProfile().data._id;
  const user = data?.me || data?.user || {};

  console.log(user);
  console.log(userId);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <h5 className="hobbiesContainer">
      {user.hobbies.map(hobby => (
        <div className="hobbyCard">{hobby.hobbyName}</div>
      ))}
    </h5>
  );
};

export default UserHobbies;
