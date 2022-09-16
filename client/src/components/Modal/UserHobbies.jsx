import React, { useState } from "react";
import "./modal.css";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import Grid from "@mui/material/Grid";
import SearchResults from "../../pages/Profile/SearchResults";
import Paper from "@mui/material/Paper";

const UserHobbies = () => {
	const { loading, data } = useQuery(QUERY_ME);

	const [hobbyId, setHobbyId, updateList] = useState("");

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
				<Paper
					elevation={3}
					style={{
						padding: "10px",
						margin: "10px",
						borderRadius: "12px",
					}}
					rounded="true"
				>
					<h5 className="userHobbies">
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
					</h5>
				</Paper>
			</Grid>
			<div className="hobbySearchResults">
				<SearchResults globalHobbyId={hobbyId} />
			</div>
		</>
	);
};

export default UserHobbies;
