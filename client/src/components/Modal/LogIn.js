import React from "react";
import "./modal.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const LogIn = (props) => {
	const [formState, setFormState] = useState({ email: "", password: "" });
	const [login, { error, data }] = useMutation(LOGIN_USER);

	if (error) {
		console.error(JSON.stringify(error));
	}

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await login({
				variables: { ...formState },
			});
			Auth.login(data.login.token);
		} catch (e) {
			console.log(e);
		}

		setFormState({
			email: "",
			password: "",
		});
	};

	return (
		<div className="signUpBackground">
			<div className="signInModal">
				<Link to="/">
					<div className="closeIcon">ⓧ</div>
				</Link>
				<h2>Log In</h2>
				{data ? (
					<Navigate to="/me" />
				) : (
					<form className="logInForm" onSubmit={handleFormSubmit}>
						<input
							className="rounded-input"
							type="email"
							id="email"
							name="email"
							placeholder="email"
							value={formState.email}
							required={true}
							onChange={handleChange}
						/>
						<input
							className="rounded-input"
							type="password"
							id="password"
							name="password"
							placeholder="password"
							value={formState.password}
							required={true}
							onChange={handleChange}
						/>
						<button className="primary-btn" type="submit">
							Submit
						</button>
						<h6>Not yet a member?</h6>
						<Link to="/SignUp">
							<h6>CREATE AN ACCOUNT</h6>
						</Link>
					</form>
				)}

				{error && <div className="my-3 p-3 bg-danger text-white">{error.message}</div>}
			</div>
		</div>
	);
};

export default LogIn;
