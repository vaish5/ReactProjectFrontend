import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TraineeRegisterPage.css";
import FooterBar from "./FooterBar";

function TraineeRegisterPage() {
  const [traineeForm, setTraineeForm] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    candidateId: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    contactNumber: false,
    candidateId: false,
    dob: false,
    password: false,
    confirmPassword: false,
  });

  const [passwordMatch, setPasswordMatch] = useState(true); // new state variable

  const navigate = useNavigate();

  const handleTraineeFormChange = (event) => {
    const { name, value } = event.target;
    setTraineeForm((prevForm) => ({ ...prevForm, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  const handleTraineeFormSubmit = (event) => {
    event.preventDefault();
    let errors = {};

    Object.keys(traineeForm).forEach((key) => {
      if (!traineeForm[key]) {
        errors[key] = true;
      }
    });

    // Check if passwords match
    if (traineeForm.password !== traineeForm.confirmPassword) {
      setPasswordMatch(false);
      errors["confirmPassword"] = true;
    } else {
      setPasswordMatch(true);
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // TODO: handle form submission
      navigate("/trainee-sign-in-page");
    }
  };

  return (
    <center>
      <div style={{ backgroundColor: "white" }}>
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleTraineeFormSubmit} style={{backgroundColor:"silver"}}>
              <h2>Register as Trainee</h2>
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={traineeForm.fullName}
                  onChange={handleTraineeFormChange}
                  required
                />
                {formErrors.fullName && (
                  <span className="error">This field is required</span>
                )}
              </label>
              <label>
                Personal Email Id:
                <input
                  type="email"
                  name="email"
                  value={traineeForm.email}
                  onChange={handleTraineeFormChange}
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
                  value={traineeForm.contactNumber}
                  onChange={handleTraineeFormChange}
                  required
                />
                {formErrors.contactNumber && (
                  <span className="error">This field is required</span>
                )}
              </label>
              <label>
                Candidate Id:
                <input
                  type="text"
                  name="candidateId"
                  value={traineeForm.candidateId}
                  onChange={handleTraineeFormChange}
                  required
                />
                {formErrors.candidateId && (
                  <span className=".error">This field is required</span>
                )}
              </label>
              <label>
                Date of Birth:
                <input
                  type="date"
                  name="dob"
                  value={traineeForm.dob}
                  onChange={handleTraineeFormChange}
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
                    {traineeForm.dob ? "Invalid age" : "This field is required"}
                  </span>
                )}
              </label>

              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={traineeForm.password}
                  onChange={handleTraineeFormChange}
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
                  value={traineeForm.confirmPassword}
                  onChange={handleTraineeFormChange}
                  required
                />
                {formErrors.confirmPassword && (
                  <span className="error">This field is required</span>
                )}
                {traineeForm.confirmPassword !== traineeForm.password && (
                  <span className="error" style={{color:"red"}}>
                    Passwords do not match, please re-enter.
                  </span>
                )}
              </label>
              <button type="submit">Register</button>
              <p>
                Already have an account?{" "}
                <Link to="/trainee-sign-in-page">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
        {/* <FooterBar /> */}
      </div>
    </center>
  );
}

export default TraineeRegisterPage;
