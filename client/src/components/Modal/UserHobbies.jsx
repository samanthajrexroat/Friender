import React, { useState } from "react";
import "./modal.css";
import { useQuery, selectHttpOptionsAndBodyInternal } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { ADD_HOBBY, REMOVE_HOBBY } from "../../utils/mutations";
import Grid from "@mui/material/Grid";
import Auth from "../../utils/auth";
import SearchResults from "../../pages/Profile/SearchResults";
import { Link, Navigate, useParams } from "react-router-dom";

const UserHobbies = () => {
	const { loading, data } = useQuery(QUERY_ME);

	const [hobbyId, setHobbyId, updateList] = useState("");

	const userId = Auth.getProfile().data._id;
	const user = data?.me || data?.user || {};
	if (loading) {
		return <div>Loading...</div>;
	}

	const handleClick = (event) => {
		const hobbyId = event.target.id;
		setHobbyId(hobbyId);
	};

	const handleRemoveHobby = (e) => {
		const name = e.target.getAttribute("name");
		updateList(hobbyId.filter((hobby) => hobby._id !== name));
	};

	return (
		<>
			<Grid container sm={12} md={4} lg={3} className="userHobbies">
				<h4 className="blackText">Add Hobbies to Search for Friends!</h4>
				<br />
				<Link to="/AddHobbies">
					<button className="sm-btn">Add hobbies</button>
				</Link>
				<div className="inline">
					{user.hobbies.map((hobby) => (
						<div id={hobby._id} key={hobby._id} value={hobby.hobbyName} className="hobbyBtn" onClick={handleClick}>
							{hobby.hobbyName}
							<div key={hobby._id} className="closeIcon black" name={hobby.hobbyName} onClick={handleRemoveHobby}>
								<div key={hobby._id} className="tab">
									{" "}
								</div>
							</div>
						</div>
					))}
				</div>
			</Grid>
			<div className="hobbySearchResults">
				<SearchResults globalHobbyId={hobbyId} />
			</div>
		</>
	);
};

export default UserHobbies;
