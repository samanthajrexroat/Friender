import * as React from "react";
import { QUERY_ME } from "../utils/queries";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import LogIn from "../components/Modal/LogIn";
import defaultPicture from "../assets/images/defaultPicture.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export const ProfileCard = () => {
	const { userId } = useParams();
	const { loading, data } = useQuery(QUERY_ME, {
		variables: { userId: userId },
	});

	const user = data?.me || data?.user || {};

	const errorMessage = "You need to be logged in to see this. Use the navigation links above to sign up or log in!";

	if (loading) {
		return <div>Loading...</div>;
	}

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
		<Grid item sm={12} md={4} lg={3} className="profileCard">
			<Paper
				elevation={3}
				style={{
					borderRadius: "10px",
					justifyContent: "space-evenly",
					padding: "10px",
					background: "linear-gradient(to right, #ece9e6, #ffffff)",
				}}
			>
				<div>
					<h2>{user.firstName}</h2>
					<h2>{user.lastName}</h2>
					<br />
					<div className="img-container">
						<img src={user.photo || defaultPicture} alt={"photo of " + user.firstName} id="profile-image" />
					</div>
					<h3>Location: {user.city}</h3>
					<h4>Age: {user.age}</h4>
					<br />
					<h4>
						About:
						<br /> {user.description}
					</h4>
					<br />

					<h4>Friends: {user.friends.length}</h4>
					<h4>Hobbies: {user.hobbies.length}</h4>
					<Link to="/EditProfile">
						<button className="sm-btn">Edit profile</button>
					</Link>
				</div>
			</Paper>
		</Grid>
	);
};
