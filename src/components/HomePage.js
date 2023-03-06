import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import TraineeNavigationBar from "./TraineeNavigationBar";
import FooterBar from "./FooterBar";

function Home() {
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* Navigation Bar */}
      <TraineeNavigationBar></TraineeNavigationBar>
      {/* Home Page Content */}
      <div className="home-page-content">
        {" "}
        <br></br>
        <br></br>
        <br></br>
        <h1>Welcome to the Home Page!</h1>
        <p>Here you can find information about our courses and tasks.</p>{" "}
        <br></br>
        <br></br>
        <br></br>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}

export default Home;
