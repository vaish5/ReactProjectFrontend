import React, { useState } from "react";
import { Link } from "react-router-dom";
import TraineeNavigationBar from "./TraineeNavigationBar";
import "./UploadDocumentsPage.css";
import FooterBar from "./FooterBar";

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (
      selectedFile.type === "application/pdf" ||
      selectedFile.type === "image/jpeg"
    ) {
      setFile(selectedFile);
    } else {
      alert("Only PDF and JPG files are allowed!");
    }
  };

  const handleSubmit = () => {
    // You can perform an action here with the uploaded file
    console.log(file);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <TraineeNavigationBar></TraineeNavigationBar>
      <center>
        <div className="upload-documents">
          <h2>Upload Documents</h2>
          <label htmlFor="photo">Upload Passport Size Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept=".jpg"
            onChange={handleFileChange}
            style={{ width: "200px" }}
          />
          <br />
          <label htmlFor="degree-certificate">Upload Degree Certificate:</label>
          <input
            type="file"
            id="degree-certificate"
            name="degree-certificate"
            accept=".pdf,.jpg"
            onChange={handleFileChange}
            style={{ width: "200px" }}
          />
          <br />
          <label htmlFor="aadhaar-card">Upload Aadhaar Card:</label>
          <input
            type="file"
            id="aadhaar-card"
            name="aadhaar-card"
            accept=".pdf,.jpg"
            onChange={handleFileChange}
            style={{ width: "200px" }}
          />
          <br />
          <label htmlFor="pan-card">Upload Pan Card:</label>
          <input
            type="file"
            id="pan-card"
            name="pan-card"
            accept=".pdf,.jpg"
            onChange={handleFileChange}
            style={{ width: "200px" }}
          />
          <br />
          <button onClick={handleSubmit} disabled={!file}>
            Submit
          </button>
        </div>
      </center>
      <FooterBar></FooterBar>
    </div>
  );
};

export default FileUploader;
