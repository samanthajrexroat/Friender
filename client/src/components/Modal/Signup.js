import React from "react";
import "./modal.css";
import Home from "../../pages/Home";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [description, setDescription] = useState(null);
  const [city, setCity] = useState(null);
  const [age, setAge] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  console.log(email, password, confirmPassword);

  return (
    <div className="background">
      <div className="signUpModal">
        <Link to="/">
          <div className="closeIcon">ⓧ</div>
        </Link>
        <h2>Sign Up</h2>
        <div className="formWrapper">
          <form className="signUpForm">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required={true}
              onChange={e => setFirstName(e.target.value)}
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required={true}
              onChange={e => setLastName(e.target.value)}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-Mail"
              required={true}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="Location"
              id="Location"
              name="Location"
              placeholder="City"
              required={true}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="Age"
              id="Age"
              name="Age"
              placeholder="Age"
              required={true}
              onChange={e => setAge(e.target.value)}
            />
            <input
              className="fullWidth"
              type="text"
              id="description"
              name="description"
              placeholder="Tell us about yourself!"
              required={true}
              onChange={e => setDescription(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required={true}
              onChange={e => setPassword(e.target.value)}
            />
            <input
              type="Password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm Password"
              required={true}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </form>
        </div>
        <button className="secondary-btn">Submit</button>
        <h6>Log In</h6>
      </div>
    </div>
  );
};

export default SignUp;
