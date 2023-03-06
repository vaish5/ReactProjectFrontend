import React from "react";
import { FaDownload } from "react-icons/fa";
import "./DownloadOfferLetterPage.css";
import { Link } from "react-router-dom";
import TraineeNavigationBar from "./TraineeNavigationBar";
import FooterBar from "./FooterBar";

function DownloadOfferLetter() {
  return (
    <div style={{ backgroundColor: "white" }}>
      
      <TraineeNavigationBar></TraineeNavigationBar>
      <div className="download-offer-letter-container">
        <div className="download-icon">
          <FaDownload />
        </div>
        <div className="download-text">
          <p>Download Offer Letter</p>
        </div>
      </div>
      <FooterBar></FooterBar>
    </div>
  );
}

export default DownloadOfferLetter;
