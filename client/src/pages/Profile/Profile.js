import React from "react";
import "./profile.css";
import { Link, Navigate, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";

import UserHobbies from "../../components/Modal/UserHobbies";

// const posts = [
//     { id: '1', name: 'This first post is about React' },
//     { id: '2', name: 'This next post is about Preact' },
//     { id: '3', name: 'We have yet another React post!' },
//     { id: '4', name: 'This is the fourth and final post' },
// ];

const Profile = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(userId ? QUERY_USER : QUERY_ME, {
    variables: { userId: userId },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    return <Navigate to="/me" />;
  }
  console.log(user);
  if (loading) {
    return <div>Loading...</div>;
  }

  const friends = user.friends;
  console.log(friends);

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
    <div className="profileBackground">
      <div className="profileContainer">
        <div className="profileCard">
          <h2>{user.firstName}</h2>

          <div className="profile">
            <div className="img-container profileImage ">
              <img src={user.photo} alt={"photo of " + user.firstName} />
            </div>
          </div>
          <h4>{user.city}</h4>

          <h5>{user.age}</h5>
          <h5>{user.description}</h5>

          <h5>
            Friends of mine:
            {user.friends.map(friend => (
              <div
                id={friend._id}
                value={friend._id}
                // className="hobbyCard"
                // onClick={handleClick}
              >
                {friend._id}
                {friend.firstName}
              </div>
            ))}
          </h5>
        </div>
      </div>

      <div className="userHobbiesContainer">
        <div>
          <p>Add Hobbies to Search for Friends!</p>
          <Link to="/AddHobbies">
            <button className="sm-btn">Add hobbies</button>
          </Link>
          <Link to="/EditProfile">
            <button className="sm-btn">edit profile</button>
          </Link>
        </div>
        <UserHobbies />
      </div>
    </div>
  );
};

export default Profile;
