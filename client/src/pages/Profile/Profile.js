import React from "react";
import "./profile.css";
import CommentsData from "./sampleProfile";
import { Link } from "react-router-dom";


const Profile = () => {
  return (




    <div className="profileBackground">
      <div className="profileContainer">
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
