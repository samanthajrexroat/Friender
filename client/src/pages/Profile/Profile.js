import React from "react";
import "./profile.css";
import CommentsData from "./sampleProfile";
import { Link, Navigate, useParams } from "react-router-dom";
import Search from "../../utils/search";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";




// const posts = [
//     { id: '1', name: 'This first post is about React' },
//     { id: '2', name: 'This next post is about Preact' },
//     { id: '3', name: 'We have yet another React post!' },
//     { id: '4', name: 'This is the fourth and final post' },
// ];




const Profile = () => {
  const { _id: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { _id: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.users().data._id === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?._id) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (




    <div className="profileBackground">
     
      <div className="profileContainer">

        <Search />

        {CommentsData.map(
          ({ firstName, city, gender, age, description, photo, hobbies }) => {
            return (
              <div className="profileCard">
                <h2>{firstName}</h2>
                <div className="profileImage">
                  <div className="image">
                    <img src={photo} alt={firstName} className="profileImage" />
                  </div>
                </div>
                <h4>{city}</h4>
                <h5>{gender}</h5>
                <h5>{age}</h5>
                <h5>{description}</h5>
                <div>
                  <h5 className="hobbiesContainer">
                    {hobbies.map(hobby => (
                      <div className="hobbiesList">{hobby}</div>
                    ))}
                  </h5>
                </div>
                <div>
                  <Link to="/AddHobbies">
                    <button className="sm-btn">Add hobbies</button>
                  </Link>
                  <Link to="/EditProfile">
                    <button className="sm-btn">edit profile</button>
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>

    
  );
};

export default Profile;
