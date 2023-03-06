import React from 'react';
import { Link } from "react-router-dom";
import './RegisterPage.css';
import FooterBar from "./FooterBar";

const RegisterPage = () => {
  return (
    <div style={{backgroundColor:'white'}}>
    <div className="register-page-container">
      <h1 className="register-page-heading">Employee Onboarding Portal</h1> <br></br><br></br><br></br>
      <div className="register-cards-container">
        <div className="register-card mentor">
        <Link to="/mentor-register-page" style={{textDecoration:"none"}}><h2>Register as Mentor</h2></Link>
        </div>
        <div className="register-card trainee">
        <Link to="/trainee-register-page" style={{textDecoration:"none"}}><h2>Register as Trainee</h2></Link>
        </div>
      </div>
    </div> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <FooterBar></FooterBar>
    </div> 
  );
};

export default RegisterPage;

