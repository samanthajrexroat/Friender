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
            <div className="block">
              <label>
                First Name
                <input
                  className="rounded-input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required={true}
                  onChange={e => setFirstName(e.target.value)}
                />
              </label>

              <label>
                Last Name
                <input
                  className="rounded-input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required={true}
                  onChange={e => setLastName(e.target.value)}
                />
              </label>
              <label>
                {" "}
                E-Mail
                <input
                  className="rounded-input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  required={true}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
              <label>
                {" "}
                City
                <input
                  className="rounded-input"
                  type="City"
                  id="City"
                  name="City"
                  placeholder="City"
                  required={true}
                  onChange={e => setCity(e.target.value)}
                />
              </label>
              <label>
                {" "}
                Age
                <input
                  className="rounded-input"
                  type="number"
                  id="Age"
                  name="Age"
                  placeholder="Age"
                  required={true}
                  onChange={e => setAge(e.target.value)}
                />
              </label>
              <label className="radio-inline">
                {" "}
                Gender
                <input
                  className="rounded-input"
                  type="radio"
                  id="Sex"
                  name="Sex"
                  placeholder="Male"
                />
                Male
                <input
                  className="rounded-input"
                  type="radio"
                  id="Sex"
                  name="Sex"
                  placeholder="Male"
                />
                Female
                <input
                  className="rounded-input"
                  type="radio"
                  id="Sex"
                  name="Sex"
                  placeholder="Male"
                />
                Other
              </label>
              <textarea
                className="fullWidth rounded-input"
                type="textarea"
                id="description"
                name="description"
                placeholder="Tell us about yourself!"
                required={true}
                onChange={e => setDescription(e.target.value)}
              />
              <label>
                Password
                <input
                  className="rounded-input"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  required={true}
                  onChange={e => setPassword(e.target.value)}
                />
              </label>
              <label>
                Confirm Password
                <input
                  className="rounded-input"
                  type="Password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirm Password"
                  required={true}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </label>
              <label>
                Upload a Photo
                <input
                  className="fullWidth"
                  type="file"
                  id="Photo"
                  name="Photo"
                  placeholder="Photo"
                  required={true}
                />
              </label>
            </div>
          </form>
        </div>
        <Link to="/Profile">
          <button className="secondary-btn">Submit</button>
        </Link>
        <h6>Already have an account?</h6>
        <Link to="/LogIn">
          <h6>Log In here!</h6>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
