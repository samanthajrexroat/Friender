import React from "react";
import "./profile.css";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";
import LogIn from "../../components/Modal/LogIn";
import UserHobbies from "../../components/Modal/UserHobbies";
import { REMOVE_FRIEND } from "../../utils/mutations";
import { ProfileCard } from "../../components/ProfileCard";
import FriendList from "../../components/FriendList";
import SearchBar from "../../components/SearchBar";
import Grid from "@mui/material/Grid";

// import { createRoutesFromChildren } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { userId: userId },
  });
  const [removeFriend] = useMutation(REMOVE_FRIEND);

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  const user_ID = user._id;
  const handleDelete = async friend => {
    try {
      const { data } = await removeFriend(
        {
          variables: { userId: user_ID, friendId: friend },
        },
        window.location.reload(false)
      );
    } catch (error) {
      console.log(JSON.stringify(error));
      throw error;
    }
  };

  if (!user?._id) {
    return (
      <>
        <h4 className="logInError ">
          You need to be logged in to see this. Use the navigation links above
          to sign up or log in!
        </h4>
        <LogIn />
      </>
    );
  }

  return (
    <div>
      <div className="pageFlex profileBackground profileContainer">
        <Grid container>
          <ProfileCard />
          <SearchBar placeholder="Search Friends or Hobbies..." />
          <Grid item>
            <FriendList />
          </Grid>
        </Grid>

        <div className="userHobbiesContainer">
          {/* <div>
            <p className="blackText">Add Hobbies to Search for Friends!</p>
            <Link to="/AddHobbies">
              <button className="sm-btn">Add hobbies</button>
            </Link>
            
          </div> */}

          <UserHobbies />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
