import React from "react";
import "./modal.css";
import { useMutation } from "@apollo/client";
import { REMOVE_FRIEND } from "../../utils/mutations";

const RemoveFriend = (userId, { friend }) => {
	const [removeFriend, { error }] = useMutation(REMOVE_FRIEND);

	const handleDelete = async ({ userId, friendId }) => {
		try {
			const { data } = await removeFriend({
				variables: { userId: userId, friendId: friendId },
			});
		} catch (error) {
			console.log(JSON.stringify(error));
			throw error;
		}
	};
	return (
		<div id={friend._id} key={friend._id} onClick={() => handleDelete(friend)} className="sm-btn-delete">
			Delete {friend.firstName}
			{friend.lastName}
		</div>
	);
};
export default RemoveFriend;
