import React from "react";
import "./profile.css";

import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_HOBBY_FANS } from "../../utils/queries";
import Auth from "../../utils/auth";
import LogIn from "../../components/Modal/LogIn";

const SearchResults = ({ UserHobbies }) => {
  console.log(UserHobbies);
  // const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_HOBBY_FANS);

  return <div>hello Sam</div>;
};


// hello 

export default SearchResults;
