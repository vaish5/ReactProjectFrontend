import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterBar from "./FooterBar";

function MentorSignInPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: false, password: false });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasErrors = false;
    if (!formData.username) {
      setErrors({ ...errors, username: true });
      hasErrors = true;
    }
    if (!formData.password) {
      setErrors({ ...errors, password: true });
      hasErrors = true;
    }
    if (!hasErrors) {
      // Here you could add your own logic to handle form submission,
      // such as sending a request to a server or validating credentials.
      console.log(
        `Submitting form with username ${formData.username} and password ${formData.password}`
      );
      window.location.href = "/mentor-home-page"; // Navigate to the next page
    }
  };

  return (
    <center>
      <div className="mentor-sign-in-page" style={{ backgroundColor: "white" }}>
        {" "}
        <br></br>
        <br></br>
        <h1>Sign in as Mentor</h1>
        <form onSubmit={handleSubmit} style={{backgroundColor:"silver"}}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your Employee ID"
              required
            />
            {errors.username && (
              <div className="error">This field is required</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && (
              <div className="error">This field is required</div>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <FooterBar></FooterBar>
      </div>
    </center>
  );
}

export default MentorSignInPage;
