import React from "react";
import "./profile.css";

import { Link, Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_HOBBY_FANS } from "../../utils/queries";
import Auth from "../../utils/auth";
import LogIn from "../../components/Modal/LogIn";
import UserHobbies from "../../components/Modal/UserHobbies";
import { useState } from "react";

export default function SearchResults() {
  const [data, setData] = useState("");

  const SearchResults = () => {
    setData("This is the data from Search Results");
  };
  // console.log(UserHobbies);
  // const { userId } = useParams();

  // const { loading, data } = useQuery(QUERY_HOBBY_FANS)

  return (
    <>
      <UserHobbies />
      <div>hello Sam</div>;
    </>
  );
}
