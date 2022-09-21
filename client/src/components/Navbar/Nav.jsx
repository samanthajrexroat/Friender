import React from "react";
import "./nav.css";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import Auth from "../../utils/auth";
import Grid from "@mui/material/Grid";

const Nav = () => {
	return (
		<Grid container>
			<nav className="navInline">
				<div className="logoContainer">
					<h1>
						<Link to="/">
							<TiThMenuOutline /> Friender{" "}
						</Link>
					</h1>
				</div>
				<div className="inline">
					{Auth.loggedIn() ? (
						<>
							<Link to="/me">
								<Button value="View Profile" type="button" />
							</Link>

							<Link to="/">
								<Button
									value="Logout"
									onClick={() => {
										Auth.logout();
									}}
									type="button"
								/>
							</Link>
						</>
					) : (
						<>
							<Link to="/LogIn">
								<Button value="LogIn" type="button" />
							</Link>

							<Link to="/SignUp">
								<Button value="Signup" type="button" />
							</Link>
						</>
					)}
				</div>
			</nav>
		</Grid>
	);
};

export default Nav;
