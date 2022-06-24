import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import UserHobbies from "./Modal/UserHobbies";
import { QUERY_ME } from "../utils/queries";
import { Link, Navigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { REMOVE_FRIEND } from "../utils/mutations";
import LogIn from "../components/Modal/LogIn";
import Auth from "../utils/auth";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const MyComponent = styled("div")({
	color: "darkslategray",
	backgroundColor: "aliceblue",
	padding: 8,
	borderRadius: 4,
});

export const ProfileCard = () => {
	const { userId } = useParams();
	const { loading, data } = useQuery(QUERY_ME, {
		variables: { userId: userId },
	});
	const [removeFriend] = useMutation(REMOVE_FRIEND);

	const user = data?.me || data?.user || {};

	const errorMessage = "You need to be logged in to see this. Use the navigation links above to sign up or log in!";

	if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
		return <Navigate to="/me" />;
	}

	if (loading) {
		return <div>Loading...</div>;
	}
	const user_ID = user._id;
	const handleDelete = async (friend) => {
		try {
			const { data } = await removeFriend(
				{
					variables: { userId: user_ID, friendId: friend },
				},
				window.location.reload(false)
			);
		} catch (error) {
			console.log(JSON.stringify(error));
			throw error;
		}
	};

	if (!user?._id) {
		return (
			<>
				<h4 className="logInError ">
					You need to be logged in to see this. Use the navigation links above to sign up or log in!
					{errorMessage}
				</h4>
				<LogIn />
			</>
		);
	}
	return (
		<Grid item sm={12} md={4} lg={3} ClassName="profileCard">
			<Paper
				elevation={3}
				style={{
					margin: "10px",
					borderRadius: "12px",
					background: "linear-gradient(to right, #ece9e6, #ffffff)",
				}}
				rounded={true}
			>
				<card>
					<h2>
						{user.firstName} {user.lastName}
					</h2>
					<br />
					<div className="img-container">
						<img src={user.photo} alt={"photo of " + user.firstName} /> <br />
					</div>
					<h3>Location: {user.city}</h3>
					<h4>Age: {user.age}</h4>
					<br />
					<h4 style={{ borderBottom: "1px solid" }}>
						About:
						<br /> {user.description}
					</h4>
					<br />

					<h4>Friends: {user.friends.length}</h4>
					<h4>Hobbies: {user.hobbies.length}</h4>
				</card>
			</Paper>
		</Grid>
	);
};
