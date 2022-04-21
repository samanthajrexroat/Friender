import React from "react";
import "../../components/Modal/modal.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";

const EditProfile = () => {
	// const { userId } = useParams();

	const { loading, data } = useQuery(QUERY_ME);

	const user = data?.me || data?.user || {};

	const [formData, setFormData] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		description: user.description,
		city: user.city,
		age: user.age,
		password: "",
		photo: user.photo,
		matches: [],
	});

	const handleChange = (e) => {
		console.log("e", e);
		const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		const name = e.target.name;
		console.log("value" + value, "name" + name);
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// const editFormHandler = async function(event) {
	//   event.preventDefault();

	//   const title = document.querySelector('input[name="post-title"]').value;
	//   const body = document.querySelector('textarea[name="post-body"]').value;
	//   // const date = document.querySelector('textarea[name="post-body"]').value);

	//   await fetch(`/api/post/${postId}`, {
	//     method: 'PUT',
	//     body: JSON.stringify({
	//       title,
	//       body,
	//       // date,
	//     }),
	//     headers: {
	//       'Content-Type': 'application/json'
	//     }
	//   });

	//   document.location.replace('/dashboard');
	// };

	return (
		<div className="profileBackground">
			<div className="signUpContainer editProfileModal">
				<Link to="/me">
					<div className="closeIcon text-white">ⓧ</div>
				</Link>
				<h2 className="text-white">Edit Profile</h2>
				<div className="formWrapper">
					<form className="signUpForm">
						<div className="block">
							<label>
								First Name
								<input
									className="rounded-input"
									type="text"
									id="firstName"
									name="firstName"
									placeholder="First Name"
									required={true}
									value={formData.firstName}
									onChange={handleChange}
								/>
							</label>
							<label>
								Last Name
								<input
									className="rounded-input"
									type="text"
									id="lastName"
									name="lastName"
									placeholder="Last Name"
									required={true}
									value={formData.lastName}
									onChange={handleChange}
								/>
							</label>
							<label>
								{" "}
								E-Mail
								<input
									className="rounded-input"
									type="email"
									id="email"
									name="email"
									placeholder="E-Mail"
									required={true}
									value={formData.email}
									onChange={handleChange}
								/>
							</label>
							<label>
								City
								<input
									className="rounded-input"
									type="text"
									id="city"
									name="city"
									placeholder="City"
									required={true}
									value={formData.city}
									onChange={handleChange}
								/>
							</label>
							<label>
								Age
								<input
									className="rounded-input"
									type="number"
									id="age"
									name="age"
									placeholder="Age"
									required={true}
									value={formData.age}
									onChange={handleChange}
								/>
							</label>
							<label className="radio-inline">
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
								className="fullWidth rounded-input"
								type="textarea"
								id="description"
								name="description"
								placeholder="Tell us about yourself!"
								required={true}
								value={formData.description}
								onChange={handleChange}
							/>
							<label>
								Upload a Photo
								<input className="rounded-input" type="url" name="photo" id="photo" onChange={handleChange} value={formData.photo} required={true} />
								<div className="photo-container">
									<img src={formData.photo} alt="profile pic" />
								</div>
							</label>
						</div>
					</form>
				</div>
				<Link to="/me">
					<button className="secondary-btn">Edit Profile</button>
				</Link>
			</div>
		</div>
	);
};

export default EditProfile;
