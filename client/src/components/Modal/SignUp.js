import React from "react";
import "./modal.css";
// import Home from "../../pages/Home";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
    city: "",
    age: 0,
    password: "",
    confirmPassword: "",
    matches: [],
  });
  const [createUser, { error, data }] = useMutation(CREATE_USER);
  if (error) {
    console.log(JSON.stringify(error));
  }
  const handleChange = e => {
    // console.log("e", e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    if (name === "age") {
      value = parseInt(value);
    }
    // console.log("value" + value, "name" + name);
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await createUser({
        variables: { ...formData },
      });
      console.log(data)
      Auth.login(data.createUser.token);
    } catch (e) {
      console.error(JSON.stringify(e));
    }
  };

  return (
    <>
      <div className=" signUpBackground">
        <div className="signUpContainer signUpModal">
          <Link to="/">
            <div className="closeIcon">ⓧ</div>
          </Link>
          <h2>Sign Up</h2>
          <div className="formWrapper">
            {data ? (
              <p>
                Success! You may head{" "}
                <Link to="/profile">to your profile!</Link>
              </p>
            ) : (
              <form className="signUpForm" onSubmit={handleFormSubmit}>
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
                      value={formData.firstName}
                      onChange={handleChange}
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
                      value={formData.lastName}
                      onChange={handleChange}
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
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    City
                    <input
                      className="rounded-input"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="City"
                      required={true}
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Age:
                    <select
                      className="rounded-input dropdown-menu"
                      id="age"
                      name="age"
                      placeholder="Age"
                      required={true}
                      value={formData.age}
                      onChange={handleChange}
                      menuPlacement="auto"
                      maxMenuHeight={10}
                    >
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                      <option value="46">46</option>
                      <option value="47">47</option>
                      <option value="48">48</option>
                      <option value="49">49</option>
                      <option value="50">50</option>
                      <option value="51">51</option>
                      <option value="52">52</option>
                      <option value="53">53</option>
                      <option value="54">54</option>
                      <option value="55">55</option>
                      <option value="56">56</option>
                      <option value="57">57</option>
                      <option value="58">58</option>
                      <option value="59">59</option>
                      <option value="60">60</option>
                      <option value="61">61</option>
                      <option value="62">62</option>
                      <option value="63">63</option>
                      <option value="64">64</option>
                      <option value="65">65</option>
                      <option value="66">66</option>
                      <option value="67">67</option>
                      <option value="68">68</option>
                      <option value="69">69</option>
                      <option value="70">70</option>
                      <option value="71">71</option>
                      <option value="72">72</option>
                      <option value="73">73</option>
                      <option value="74">74</option>
                      <option value="75">75</option>
                      <option value="76">76</option>
                      <option value="77">77</option>
                      <option value="78">78</option>
                      <option value="79">79</option>
                      <option value="80">80</option>
                    </select>
                  </label>
                  <label className="rounded-input">
                    Gender
                    <select
                      className="rounded-input dropdown-menu"
                      id="gender"
                      name="gender"
                      placeholder="Male"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                  <label>
                    <textarea
                      className="fullWidth rounded-input"
                      type="textarea"
                      id="description"
                      name="description"
                      placeholder="Tell us about yourself!"
                      required={true}
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Password
                    <input
                      className="rounded-input"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      required={true}
                      value={formData.password}
                      onChange={handleChange}
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
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Upload a Photo
                    <input
                      className="rounded-input"
                      type="url"
                      name="url"
                      id="url"
                      onChange={handleChange}
                      value={formData.url}
                      // required={true}
                    />
                    <div className="photo-container">
                      <img src={formData.url} alt="profile pic" />
                    </div>
                  </label>
                </div>
                {/* <Link to="/Profile"> */}
                <button className="secondary-btn" type="submit">
                  Submit
                </button>
                {/* </Link> */}
              </form>
            )}

            {error && <div className="primary-btn">{error.message}</div>}
          </div>

          <h6>Already have an account?</h6>
          <Link to="/LogIn">
            <h6>LOG IN</h6>
          </Link>
          <br />
          <h6 className="text-light">
            By clicking submit you agree to Friender's® terms of service
          </h6>
        </div>
      </div>
    </>
  );
};

export default SignUp;
