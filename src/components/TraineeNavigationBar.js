import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function TraineeNavigationBar() {
  return (
    <div >
      {/* Navigation Bar */}
      <nav>
        <ul>
          <li>
            <a href="/homepage">Home</a>
          </li>
          <li>
            <a href="/guidelines">Guidelines</a>
          </li>
          <li>
            <a href="/download-offer-letter">Download Offer Letter</a>
          </li>
          <li>
            <a href="/upload-documents">Upload Documents</a>
          </li>
          <li>
            <a href="/view-courses">View Courses</a>
          </li>
          <li>
            <a href="/tasks">Tasks</a>
          </li>
          <li>
            <a href="/raise-issue">Raise Issue</a>
          </li>
          <li>
            <Link to="/">
              <button type="submit">Logout</button>
            </Link>
          </li>
        </ul>
      </nav>
      </div>
      
  );
}

export default TraineeNavigationBar;
