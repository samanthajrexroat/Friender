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
      <div className="pageFlex profileBackground">
        <div className="profileContainer">
          <ProfileCard />
          <h5 className="friends">
            <p className="blackText">Friends:</p>
            {user.friends.map(friend => (
              <div
                key={friend._id}
                value={friend._id}
                // className="hobbyCard"
                // onClick={handleClick}
              >
                <div className="friendList">
                  {friend.firstName}
                  <div className="friendsList">
                    <div className="sm-btn-message">send message</div>
                    <button
                      key={friend._id}
                      id={friend._id}
                      onClick={() => handleDelete(friend._id)}
                      className="sm-btn-delete"
                    >
                      Delete {friend.firstName}
                    </button>
                  </div>
                </div>
                {/* {friend.lastName} */}
              </div>
            ))}
          </h5>
        </div>

        <div className="userHobbiesContainer">
          <div>
            <p className="blackText">Add Hobbies to Search for Friends!</p>
            <Link to="/AddHobbies">
              <button className="sm-btn">Add hobbies</button>
            </Link>
            <Link to="/EditProfile">
              <button className="sm-btn">Edit profile</button>
            </Link>
          </div>

          <UserHobbies />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
