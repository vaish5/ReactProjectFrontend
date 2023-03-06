import React from "react";
import "./TraineeDetailsPage.css";
import FooterBar from "./FooterBar";

function TraineeDetailsPage({ trainee }) {
  //   const completed = Math.floor(Math.random() * 10); // Generate a random number for completed courses
  //   const inProgress = Math.floor(Math.random() * 10); // Generate a random number for courses in progress
  //   const started = Math.floor(Math.random() * 10); // Generate a random number for courses started
  //   const overdue = Math.floor(Math.random() * 10); // Generate a random number for courses in overdue

  return (
    <div className="trainee-details-container">
      <div className="trainee-details-header">
        <div className="trainee-details-icon">
          <i className="fas fa-user"></i> {/* Use a default user icon */}
        </div>
        <div className="trainee-details-title">
          <h2>{trainee.name}</h2>
          <p>Trainee ID: {trainee.id}</p>
        </div>
      </div>
      <div className="trainee-details-content">
        <div className="trainee-details-item">
          <p>Completed courses:</p>
          {/* <span>{completed}</span> */}
        </div>
        <div className="trainee-details-item">
          <p>Courses in progress:</p>
          {/* <span>{inProgress}</span> */}
        </div>
        <div className="trainee-details-item">
          <p>Courses started:</p>
          {/* <span>{started}</span> */}
        </div>
        <div className="trainee-details-item">
          <p>Courses in overdue:</p>
          {/* <span>{overdue}</span> */}
        </div>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}

export default TraineeDetailsPage;
