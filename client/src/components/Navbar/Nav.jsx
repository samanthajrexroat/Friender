import React from "react";
import "./nav.css";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, Navigate } from "react-router-dom";
import { Button } from "../Button";
import Auth from "../../utils/auth";
import Grid from "@mui/material/Grid";

const Nav = () => {
  //This is currently not used in the return. Instead, when the button to logout is clicked, it goes straight to the Auth.logout() method, which handles deleting the cookie and redirecting back to the homepage.
      // const logout = event => {
      //   event.preventDefault();
      //   console.log("cookie here!!!");
      //   Auth.logout();
      //   console.log("cookie gone!!!");
      // };

  

  return (
    <Grid container>
      <nav className="navInline">
        <div className="logoContainer">
          <h1>
            <TiThMenuOutline /> Frender{" "}
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
