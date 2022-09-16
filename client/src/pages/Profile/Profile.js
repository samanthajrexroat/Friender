import React from "react";
import "./profile.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import LogIn from "../../components/Modal/LogIn";
import UserHobbies from "../../components/Modal/UserHobbies";
import { ProfileCard } from "../../components/ProfileCard";
import FriendList from "../../components/FriendList";
import SearchBar from "../../components/SearchBar";
import Grid from "@mui/material/Grid";

const Profile = () => {
	const { userId } = useParams();
	const { loading, data } = useQuery(QUERY_ME, {
		variables: { userId: userId },
	});

	const user = data?.me || data?.user || {};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user?._id) {
		return (
			<>
				<h4 className="logInError ">You need to be logged in to see this. Use the navigation links above to sign up or log in!</h4>
				<LogIn />
			</>
		);
	}

	return (
		<div>
			<div className="pageFlex profileBackground profileContainer">
				<Grid container className="profileStretch">
					<ProfileCard />
					<SearchBar placeholder="Search Friends or Hobbies..." />
					<FriendList />
				</Grid>

				<div className="userHobbiesContainer">
					<p className="blackText">Add Hobbies to Search for Friends!</p>
					<Link to="/AddHobbies">
						<button className="sm-btn">Add hobbies</button>
					</Link>
					<UserHobbies />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Profile;
