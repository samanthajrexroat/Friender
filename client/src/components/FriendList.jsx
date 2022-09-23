import React from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import LogIn from "../components/Modal/LogIn";
import { REMOVE_FRIEND } from "../utils/mutations";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const FriendList = () => {
	const { userId } = useParams();
	const { loading, data } = useQuery(QUERY_ME, {
		variables: { userId: userId },
	});
	const [removeFriend] = useMutation(REMOVE_FRIEND);

	const user = data?.me || data?.user || {};

	if (loading) {
		return <div>Loading...</div>;
	}
	const user_ID = user._id;
	const handleDelete = async (friend) => {
		try {
			await removeFriend({
				variables: { userId: user_ID, friendId: friend },
			});
		} catch (error) {
			console.log(JSON.stringify(error));
			throw error;
		}
	};

	if (!user?._id) {
		return (
			<>
				<h4 className="logInError ">You need to be logged in to see this. Use the navigation links above to sign up or log in!</h4>
				<LogIn />
			</>
		);
	}
	return (
		<Grid item sm={12} md={4} lg={3}>
			<Paper
				elevation={3}
				style={{
					margin: "10px",
					borderRadius: "12px",
					background: "linear-gradient(to right, #ece9e6, #ffffff)",
				}}
			>
				<div>
					<h5 className="friends">
						<p className="blackText">Friends:</p>
						{user.friends.map((friend) => (
							<div key={friend._id} value={friend._id}>
								<div className="friendList">
									{friend.firstName}
									<div className="friendsList">
										<div className="sm-btn-message">send message</div>
										<button key={friend._id} id={friend._id} onClick={() => handleDelete(friend._id)} className="sm-btn-delete">
											Delete {friend.firstName}
										</button>
									</div>
								</div>
							</div>
						))}
					</h5>
				</div>
			</Paper>
		</Grid>
	);
};

export default FriendList;
