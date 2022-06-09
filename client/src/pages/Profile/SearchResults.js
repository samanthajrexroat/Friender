import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_HOBBY_FANS } from "../../utils/queries";
import AddFriend from "../../components/Modal/Addfriend";
import { useState } from "react";

const SearchResults = ({ globalHobbyId }) => {
  const { error, data } = useQuery(QUERY_HOBBY_FANS, {
    variables: { hobbyId: globalHobbyId },
  });

  const [hidden, setHidden] = useState(false);

  if (error) {
    console.log(JSON.stringify(error));
  }

  const hobbyFans = data?.hobbyFans || [];
  console.log(hobbyFans);

  return (
    <>
      {hobbyFans.map(hobbyFan => (
        <div className="profileCard" key={hobbyFan._id} id={hobbyFan._id}>
          <h2>{hobbyFan.firstName}</h2>
          <div className="profile">
            <div className="img-container">
              <img
                src={hobbyFan.photo}
                alt={"photo of " + hobbyFan.firstName}
              />
            </div>
          </div>
          <h4>{hobbyFan.city}</h4>
          <h5>{hobbyFan.age}</h5>
          <h5>{hobbyFan.description}</h5>
          <AddFriend hobbyFanId={hobbyFan._id} />
        </div>
      ))}
    </>
  );
};

// hello

// is it me you're looking for?

export default SearchResults;
