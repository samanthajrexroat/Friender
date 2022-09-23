import React from "react";
import "./profile.css";
import { useQuery } from "@apollo/client";
import { QUERY_HOBBY_FANS } from "../../utils/queries";
import AddFriend from "../../components/Modal/Addfriend";
import defaultPicture from "../../assets/images/defaultPicture.png";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const SearchResults = ({ globalHobbyId }) => {
	const { error, data } = useQuery(QUERY_HOBBY_FANS, {
		variables: { hobbyId: globalHobbyId },
	});

	if (error) {
		console.log(JSON.stringify(error));
	}

	const hobbyFans = data?.hobbyFans || [];

	return (
		<Grid container justifyContent="center">
			{hobbyFans.map((hobbyFan) => (
				<Paper
					item
					elevation={3}
					style={{
						margin: "10px",
						padding: "1rem",
						borderRadius: "12px",
						background: "linear-gradient(to right, #ece9e6, #ffffff)",
						width: "450px",
					}}
					rounded={true}
				>
					<div ClassName="profileCard" key={hobbyFan._id} id={hobbyFan._id}>
						<h2>{hobbyFan.firstName}</h2>
						<div className="profile">
							<div className="img-container">
								<img src={hobbyFan.photo || defaultPicture} alt={"photo of " + hobbyFan.firstName} />
							</div>
						</div>
						<div className="hobbyFanDesc">
							<h4>{hobbyFan.city}</h4>
							<h5>{hobbyFan.age}</h5>
							<h5>{hobbyFan.description}</h5>
							<AddFriend hobbyFanId={hobbyFan._id} />
						</div>
					</div>
				</Paper>
			))}
		</Grid>
	);
};

export default SearchResults;
