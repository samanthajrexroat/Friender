// import React, { useState } from "react";
import "./modal.css";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../../utils/mutations";
// import UserHobbies from "./UserHobbies";
import Auth from "../../utils/auth";

const AddFriend = hobbyFanId => {
  const [addFriend, { loading, error, data }] = useMutation(ADD_FRIEND);
  if (error) {
    console.log(JSON.stringify(error));
  }
  const userId = Auth.getProfile().data._id;
  const handleClick = async hobbyFanId => {
    try {
      const { data } = await addFriend({
        variables: { userId: userId, friendId: hobbyFanId.hobbyFanId },
      });
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="buttons">
      <div
        className="sm-btn-secondary"
        onClick={() => {
          handleClick(hobbyFanId);
        }}
      >
        Add Friend
      </div>
      <div className="sm-btn-secondary">Message</div>
    </div>
  );
};

export default AddFriend;
