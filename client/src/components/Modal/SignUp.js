import React from "react";
import "./modal.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const Signup = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		description: "",
		city: "",
		age: !null,
		password: "",
		photo: "",
		matches: [],
	});

	const [createUser, { error, data }] = useMutation(CREATE_USER);

	if (error) {
		console.error(JSON.stringify(error));
	}

	const handleChange = (e) => {
		let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		const name = e.target.name;

		if (name === "age") {
			value = parseInt(value);
		}

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	/////////////////////////////////////////////
	//                                         //
	//    PASSWORD / CONFIRM PASSWORD CHECK    //
	//                                         //
	/////////////////////////////////////////////

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await createUser({
				variables: { ...formData },
			});
			Auth.login(data.createUser.token);
			if (Auth.loggedIn()) {
				return <Navigate to="/me" />;
			}
		} catch (e) {
			console.error(JSON.stringify(e));
		}
	};

	return (
		<div className=" signUpBackground">
			<div className="signUpContainer signUpModal">
				<Link to="/">
					<div className="closeIcon">ⓧ</div>
				</Link>
				<h2>Sign Up</h2>
				<div className="formWrapper">
					{data ? (
						<p>
							Success! You may head <Link to="/profile">to your profile!</Link>
						</p>
					) : (
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
										required="true"
										value={formData.firstName}
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
										required="true"
										value={formData.lastName}
										onChange={handleChange}
									/>
								</label>

								<label className="div3">
									E-Mail
									<input
										className="rounded-input"
										type="email"
										id="email"
										name="email"
										placeholder="E-Mail"
										required="true"
										value={formData.email}
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
										required="true"
										value={formData.city}
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
										required="true"
										value={formData.age}
										onChange={handleChange}
									/>
								</label>
								<label className="radio-inline div6">
									Gender
									<label>
										<input className="rounded-input" type="radio" id="male" value="male" name="gender" placeholder="Male" />
										Male
									</label>
									<label>
										<input className="rounded-input" type="radio" id="female" value="female" name="gender" placeholder="Female" />
										Female
									</label>
									<label>
										<input className="rounded-input" type="radio" id="other" value="other" name="gender" placeholder="Other" />
										Other
									</label>
								</label>
								<label className="div7">
									<textarea
										className="fullWidth rounded-input"
										type="textarea"
										id="description"
										name="description"
										placeholder="Tell us about yourself!"
										required="true"
										value={formData.description}
										onChange={handleChange}
									/>
								</label>
								<br />
								<label className="div8">
									Password
									<input
										className="rounded-input"
										type="password"
										id="password"
										name="password"
										placeholder="password"
										required="true"
										value={formData.password}
										onChange={handleChange}
									/>
								</label>
								{/* <label>
                  Confirm Password
                  <input
                    className="rounded-input"
                    type="Password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="confirm Password"
                    // required={true}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </label> */}
								{/* <label>
                  Upload a Photo
                  <input
                    className="rounded-input"
                    type="url"
                    name="url"
                    id="url"
                    onChange={handleChange}
                    value={formData.url}
                    // required={true}
                  />
                  <div className="photo-container">
                       <img src={formData.url} alt="profile pic" />
                  </div>
                </label> */}

								<label className="div9 rounded-input" htmlFor="url">
									Profile Photo
								</label>
								<input
									type="url"
									name="photo"
									id="photo"
									onChange={handleChange}
									// required={true}
									value={formData.photo}
								/>
								<div className="div10 photo-container rounded-input">{formData.photo && <img src={formData.photo} alt="profile pic preview" />}</div>
							</div>
							{/* <Link to="/Profile"> */}
							<button className="primary-btn" type="submit">
								Submit
							</button>
							{/* </Link> */}
						</form>
					)}

					{error && <div className="primary-btn">{error.message}</div>}
				</div>

				<h6>Already have an account?</h6>
				<Link to="/LogIn">
					<h6>LOG IN</h6>
				</Link>
				<br />
				<h6 className="text-light">By clicking submit you agree to Friender's® terms of service</h6>
			</div>
		</div>
	);
};

export default Signup;
