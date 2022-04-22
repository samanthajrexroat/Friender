import React from "react";
import "./profile.css";

const Profile = () => {
 

  return (
    <div className="profileBackground">
      <div className="profileContainer">
        {/* <Search /> */}

        <div className="profileCard">
          <h2>{user.firstName}</h2>

          <div className="profile">
            <div className="img-container">
              <img src={user.photo} alt={"photo of " + user.firstName} />
            </div>
          </div>

          <h4>{user.city}</h4>
          {/* <h5>{gender}</h5> */}
          <h5>{user.age}</h5>
          <h5>{user.description}</h5>
          <div>
            <h5 className="hobbiesContainer">
              {user.hobbies.map(hobby => (
                <div className="hobbiesList">{hobby.hobbyName}</div>
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
      </div>
    </div>
  );
};

export default 
