import React from "react";
import "./nav.css";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

import Auth from "../../utils/auth";

const Nav = () => {
	// const authToken = true;
	const logout = (event) => {
		event.preventDefault();
		console.log("cookie here!!!");
		Auth.logout();
		console.log("cookie gone!!!");
	};

	let navigate = useNavigate();

	return (
		<nav>
			<div className="logoContainer">
				<h1>
					<TiThMenuOutline /> Friender®{" "}
				</h1>

				{/* <div className="inline">
          <input
            className="rounded-input"
            type="text"
            placeholder="Friend Search"
          />
          <button className="btn-grad">SEARCH </button>
        </div> */}
			</div>
			<div className="inline">
				{Auth.loggedIn() ? (
					<>
						<Link className="primary-btn me" to="/me">
							View Profile
						</Link>
						<Link to="/">
							<button
								className="primary-btn logout"
								onClick={() => {
									Auth.logout();
									navigate("/", { replace: true });
								}}
							>
								Logout
							</button>
						</Link>
					</>
				) : (
					<>
						<Link className="primary-btn" to="/LogIn">
							LogIn
						</Link>
						<Link className="primary-btn none" to="/SignUp">
							Signup
						</Link>
					</>
				)}
				{/* 
      <Link to="/LogIn">
        <button className="primary-btn logIn">
          {authToken ? "Signout" : "Log In"}
        </button>
      </Link> */}
			</div>
		</nav>
	);
};

export default Nav;
