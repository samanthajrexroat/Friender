import React from "react";
import "./modal.css";
// import Home from "../../pages/Home";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Hobbies = () => {
  //   const { userId } = useParams();

  //   const { loading, data } = useQuery(userId ? QUERY_USER : QUERY_ME, {
  //     variables: { userId: userId },
  //   });

  //   const user = data?.me || data?.user || {};

  //   if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
  //     return <Navigate to="/me" />;
  //   }

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (!user?._id) {
  //     return (
  //       <h4>
  //         You need to be logged in to see this. Use the navigation links above to
  //         sign up or log in!
  //       </h4>
  //     );
  //   }

  const submit = e => {
    alert("Hobby added");
  };

  return (
    <div className="profileBackground">
      <div className="signInModal">
        <Link to="/me">
          <div className="closeIcon">ⓧ</div>
        </Link>
        <h2>Add A Hobby</h2>
        <p>one are a time</p>
        <form className="logInForm" onClick={submit()}>
          <input
            className="rounded-input"
            type="hobby"
            id="hobby"
            name="hobby"
            placeholder="Hobby"
            required={true}
          />
          <Link to="/AddHobbies">
            <button className="secondary-btn" type="submit">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Hobbies;
