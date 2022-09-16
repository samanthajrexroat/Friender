import React, { useEffect, useState } from "react";
import "../../components/Modal/modal.css";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { UPDATE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const EditProfile = () => {
	const { error: queryerror, data } = useQuery(QUERY_ME);
	if (queryerror) {
		console.log(JSON.stringify(queryerror));
	}
	const user = data?.me || null;

	const [updateUser, { error }] = useMutation(UPDATE_USER);
	if (error) {
		console.log(JSON.stringify(error));
	}
	const [modifiableData, setModifiableData] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		description: user.description,
		city: user.city,
		age: user.age,
		photo: user.photo,
	});
	useEffect((user) => {
		if (user) {
			setModifiableData({
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				description: user.description,
				city: user.city,
				age: user.age,
				photo: user.photo,
			});
		}
	}, []);

	if (error) {
		console.log(JSON.stringify(error));
	}

	const handleChange = e => {
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		const name = e.target.name;
		setModifiableData({ ...modifiableData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await updateUser({
				variables: { ...modifiableData, userId: user._id },
			});

			Auth.login(data.updateUser.token);
		} catch (e) {
			console.error(JSON.stringify(e));
		}
	};

	return (
		<div className="profileBackground">
			<div className="signUpContainer editProfileModal">
				<Link to="/me">
					<div className="closeIcon text-white">ⓧ</div>
				</Link>
				<h2 className="text-white">Edit Profile</h2>
				<div className="formWrapper">
					<form className="signUpForm" onSubmit={handleFormSubmit}>
						<div className="block">
							<label className="div1">
								First Name
								<input
									className="rounded-input"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="First Name"
									required={true}
									value={modifiableData.firstName}
									onChange={handleChange}
								/>
							</label>
							<label className="div2">
								Last Name
								<input
									className="rounded-input"
									type="text"
									id="lastName"
									name="lastName"
									placeholder="Last Name"
									required={true}
									value={modifiableData.lastName}
									onChange={handleChange}
								/>
							</label>
							<label className="div3">
								{" "}
								E-Mail
								<input
									className="rounded-input"
									type="email"
									id="email"
									name="email"
									placeholder="E-Mail"
									required={true}
									value={modifiableData.email}
									onChange={handleChange}
								/>
							</label>
							<label className="div4">
								City
								<input
									className="rounded-input"
									type="text"
									id="city"
									name="city"
									placeholder="City"
									required={true}
									value={modifiableData.city}
									onChange={handleChange}
								/>
							</label>
							<label className="div5">
								Age
								<input
									className="rounded-input"
									type="number"
									id="age"
									name="age"
									placeholder="Age"
									required={true}
									value={modifiableData.age}
									onChange={handleChange}
								/>
							</label>
							<label className="div6 radio-inline">
								Gender
								<label>
									<input className="rounded-input" type="radio" id="male" name="gender" placeholder="Male" />
									Male
								</label>
								<label>
									<input className="rounded-input" type="radio" id="female" name="gender" placeholder="Female" />
									Female
								</label>
								<label>
									<input className="rounded-input" type="radio" id="other" name="gender" placeholder="Other" />
									Other
								</label>
							</label>
							<textarea
								className="div7 fullWidth rounded-input"
								type="textarea"
								id="description"
								name="description"
								placeholder="Tell us about yourself!"
								required={true}
								value={modifiableData.description}
								onChange={handleChange}
							/>
							<label className="div8">
								Upload a Photo
								<input className="div10 rounded-input" type="url" name="photo" id="photo" onChange={handleChange} value={modifiableData.photo} />
								<div className="photo-container">
									<img src={modifiableData.photo} alt="profile pic" />
								</div>
							</label>
						</div>
						<button className="secondary-btn" type="submit">
							Edit Profile
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
