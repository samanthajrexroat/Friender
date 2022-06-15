import React from "react";
import "./nav.css";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { SearchBar } from "../../components/SearchBar";
import Auth from "../../utils/auth";
import Grid from "@mui/material/Grid";

const Nav = () => {
  // const authToken = true;
  const logout = event => {
    event.preventDefault();
    console.log("cookie here!!!");
    Auth.logout();
    console.log("cookie gone!!!");
  };

  let navigate = useNavigate();

  return (
    <Grid container>
      <nav className="navInline">
        <div className="logoContainer">
          <h1>
            <TiThMenuOutline /> Frendr{" "}
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
                    navigate("/", { replace: true });
                  }}
                  type="button"
                />
              </Link>
              <SearchBar placeholder="Search Friends or Hobbies..." />
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
