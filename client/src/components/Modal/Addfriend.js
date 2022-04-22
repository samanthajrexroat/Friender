import React, { useState } from "react";
import "./modal.css";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../../utils/mutations";
import UserHobbies from "./UserHobbies";

const AddFriend = (hobbyFanId) => {
	const { loading, error, data } = useMutation(ADD_FRIEND, {
		variables: { friendId: hobbyFanId },
	});
	if (error) {
		console.log(JSON.stringify(error));
	}

	return <button className="secondary-btn">Add Friend</button>;
};

export default AddFriend;
