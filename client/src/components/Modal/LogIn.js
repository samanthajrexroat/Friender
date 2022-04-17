import React from "react";
import "./modal.css";
import Home from "../../pages/Home";
import { useState } from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  console.log(email, password, confirmPassword);

  return (
    <div className="background">
      <div className="signInModal">
        <Link to="/">
          <div className="closeIcon">ⓧ</div>
        </Link>
        <h2>Sign In</h2>
        <form className="logInForm">
          <input
            className="rounded-input"
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required={true}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="rounded-input"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required={true}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            className="rounded-input"
            type="Password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirm Password"
            required={true}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </form>
        <Link to="/Profile">
          <button className="secondary-btn">Submit</button>
        </Link>
        <Link to="/SignUp">
          <h6>CREATE AN ACCOUNT</h6>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
