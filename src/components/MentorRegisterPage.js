import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MentorRegisterPage.css";
// import FooterBar from "./FooterBar";

function MentorRegisterPage() {
  const [mentorForm, setMentorForm] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    employeeId: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    contactNumber: false,
    employeeId: false,
    dob: false,
    password: false,
    confirmPassword: false,
  });

  const [passwordMatch, setPasswordMatch] = useState(true); // new state variable

  const navigate = useNavigate();

  const handleMentorFormChange = (event) => {
    const { name, value } = event.target;
    setMentorForm((prevForm) => ({ ...prevForm, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleMentorFormSubmit = (event) => {
    event.preventDefault();
    let errors = {};

    Object.keys(mentorForm).forEach((key) => {
      if (!mentorForm[key]) {
        errors[key] = true;
      }
    });

    // Check if passwords match
    if (mentorForm.password !== mentorForm.confirmPassword) {
      setPasswordMatch(false);
      errors["confirmPassword"] = true;
    } else {
      setPasswordMatch(true);
    }

    // Check if date of birth is valid
    const today = new Date();
    const dob = new Date(mentorForm.dob);
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    if (age < 18 || age > 100) {
      errors["dob"] = true;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      navigate("/mentor-sign-in-page");
    }
  };

  return (
    <center>
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="form-container">
            <form
              onSubmit={handleMentorFormSubmit}
              style={{ backgroundColor: "silver" }}
            >
              <h2>Register as Mentor</h2>
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={mentorForm.fullName}
                  onChange={handleMentorFormChange}
                  required
                />
                {formErrors.fullName && (
                  <span className="error">This field is required</span>
                )}
              </label>
              <label>
                Enterprise Email Id:
                <input
                  type="email"
                  name="email"
                  value={mentorForm.email}
                  onChange={handleMentorFormChange}
                  required
                />
                {formErrors.email && (
                  <span className="error">This field is required</span>
                )}
              </label>
              <label>
                Contact Number:
                <input
                  type="tel"
                  name="contactNumber"
                  value={mentorForm.contactNumber}
                  onChange={handleMentorFormChange}
                  required
                />
                {formErrors.contactNumber && (
                  <span className="error">This field is required</span>
                )}
              </label>
              <label>
                Employee Id:
                <input
                  type="text"
                  name="employeeId"
                  value={mentorForm.employeeId}
                  onChange={handleMentorFormChange}
                  required
                />
                {formErrors.employeeId && (
                  <span className=".error">This field is required</span>
                )}
              </label>
              <label>
                Date of Birth:
                <input
                  type="date"
                  name="dob"
                  value={mentorForm.dob}
                  onChange={handleMentorFormChange}
                  max={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() - 18)
                    )
                      .toISOString()
                      .split("T")[0]
                  }
                  min={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() - 100)
                    )
                      .toISOString()
                      .split("T")[0]
                  }
                  required
                />
                {formErrors.dob && (
                  <span className="error">
                    {mentorForm.dob ? "Invalid age" : "This field is required"}
                  </span>
                )}
              </label>

              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={mentorForm.password}
                  onChange={handleMentorFormChange}
                  required
                />
                {formErrors.password && (
                  <span className="error">This field is required</span>
                )}
              </label>
              <label>
                Confirm Password:
                <input
                  type="password"
                  name="confirmPassword"
                  value={mentorForm.confirmPassword}
                  onChange={handleMentorFormChange}
                  required
                />
                {formErrors.confirmPassword && (
                  <span className="error">This field is required</span>
                )}
                {mentorForm.confirmPassword !== mentorForm.password && (
                  <span className="error" style={{ color: "red" }}>
                    Passwords do not match, please re-enter.
                  </span>
                )}
              </label>
              <button type="submit">Register</button>
              <p>
                Already have an account?{" "}
                <Link to="/mentor-sign-in-page">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
        {/* <FooterBar /> */}
      </div>
    </center>
  );
}

export default MentorRegisterPage;
